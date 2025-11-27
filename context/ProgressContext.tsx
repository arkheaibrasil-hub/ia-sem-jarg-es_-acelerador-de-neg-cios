import React, { createContext, useState, useContext, useEffect, ReactNode, useMemo } from 'react';
import { COURSE_DATA } from '../data/courseData';
import { ALL_BADGES } from '../data/gamificationData';
import { useAuth } from './AuthContext';

const XP_PER_LESSON = 100;
const XP_PER_LESSON_BONUS = 150;
const LEVEL_UP_BASE = 1000;
const BONUS_MODULE_ID = 'm15';

interface StoredProgress {
  completedLessons: string[];
  completedModules: string[];
  xp: number;
  earnedBadges: string[];
}

interface AllUserProgress {
  [userId: string]: StoredProgress;
}

interface ProgressContextType {
  completedLessons: Set<string>;
  completedModules: Set<string>;
  markLessonAsComplete: (lessonId: string) => void;
  isLessonCompleted: (lessonId: string) => boolean;
  isModuleCompleted: (moduleId: string) => boolean;
  progressPercentage: number;
  totalLessons: number;
  xp: number;
  level: number;
  xpForNextLevel: number;
  xpInCurrentLevel: number;
  earnedBadges: Set<string>;
  getAllUsersProgress: () => AllUserProgress;
}

const ProgressContext = createContext<ProgressContextType | undefined>(undefined);

const ALL_PROGRESS_KEY = 'allCourseProgress';

export const ProgressProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();

  const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
  const [completedModules, setCompletedModules] = useState<Set<string>>(new Set());
  const [xp, setXp] = useState<number>(0);
  const [earnedBadges, setEarnedBadges] = useState<Set<string>>(new Set());

  const getAllUsersProgress = (): AllUserProgress => {
    try {
      const item = window.localStorage.getItem(ALL_PROGRESS_KEY);
      return item ? JSON.parse(item) : {};
    } catch (error) {
      console.error("Could not load all user progress", error);
      return {};
    }
  };

  // Effect to LOAD progress when user changes
  useEffect(() => {
    if (currentUser) {
      try {
        const allProgress = getAllUsersProgress();
        const userProgress = allProgress[currentUser.id];

        if (userProgress) {
          setCompletedLessons(new Set(userProgress.completedLessons || []));
          setCompletedModules(new Set(userProgress.completedModules || []));
          setXp(userProgress.xp || 0);
          setEarnedBadges(new Set(userProgress.earnedBadges || []));
        } else {
          // New user or no progress saved, reset state
          setCompletedLessons(new Set());
          setCompletedModules(new Set());
          setXp(0);
          setEarnedBadges(new Set());
        }
      } catch (error) {
        console.error("Could not load user progress from localStorage", error);
        // Reset on error
        setCompletedLessons(new Set());
        setCompletedModules(new Set());
        setXp(0);
        setEarnedBadges(new Set());
      }
    } else {
      // User logged out, reset state
      setCompletedLessons(new Set());
      setCompletedModules(new Set());
      setXp(0);
      setEarnedBadges(new Set());
    }
  }, [currentUser]);

  const totalLessons = useMemo(() => COURSE_DATA.reduce((acc, module) => acc + module.lessons.length, 0), []);

  // Effect to SAVE progress when it changes
  useEffect(() => {
    if (currentUser) {
      try {
        const allProgress = getAllUsersProgress();
        const progressToStore: StoredProgress = {
          completedLessons: Array.from(completedLessons),
          completedModules: Array.from(completedModules),
          xp,
          earnedBadges: Array.from(earnedBadges),
        };
        allProgress[currentUser.id] = progressToStore;
        window.localStorage.setItem(ALL_PROGRESS_KEY, JSON.stringify(allProgress));
      } catch (error) {
        console.error("Could not save user progress to localStorage", error);
      }
    }
  }, [completedLessons, completedModules, xp, earnedBadges, currentUser]);

  const { level, xpForNextLevel, xpInCurrentLevel } = useMemo(() => {
    let currentLevel = 1;
    let requiredXp = LEVEL_UP_BASE;
    let accumulatedXp = 0;

    while (xp >= accumulatedXp + requiredXp) {
        accumulatedXp += requiredXp;
        currentLevel++;
        requiredXp = Math.floor(LEVEL_UP_BASE * (currentLevel ** 1.2));
    }
    
    const xpForCurrentLevel = xp - accumulatedXp;

    return { level: currentLevel, xpForNextLevel: requiredXp, xpInCurrentLevel: xpForCurrentLevel };
  }, [xp]);

  const markLessonAsComplete = (lessonId: string) => {
    if (completedLessons.has(lessonId)) return;

    const newCompletedLessons = new Set(completedLessons).add(lessonId);
    setCompletedLessons(newCompletedLessons);

    const parentModule = COURSE_DATA.find(module => module.lessons.some(lesson => lesson.id === lessonId));
    
    if (parentModule?.id === BONUS_MODULE_ID) {
        setXp(prevXp => prevXp + XP_PER_LESSON_BONUS);
    } else {
        setXp(prevXp => prevXp + XP_PER_LESSON);
    }

    if (parentModule) {
      const allLessonsInModuleCompleted = parentModule.lessons.every(lesson => newCompletedLessons.has(lesson.id));
      
      if (allLessonsInModuleCompleted) {
        setCompletedModules(prev => new Set(prev).add(parentModule.id));
        const moduleBadge = ALL_BADGES.find(b => b.type === 'module' && b.moduleId === parentModule.id);
        if (moduleBadge) {
            setEarnedBadges(prev => new Set(prev).add(moduleBadge.id));
        }
      }
    }

    if (newCompletedLessons.size === totalLessons) {
        const courseBadge = ALL_BADGES.find(b => b.type === 'course');
        if (courseBadge) {
            setEarnedBadges(prev => new Set(prev).add(courseBadge.id));
        }
    }
  };

  const isLessonCompleted = (lessonId: string) => completedLessons.has(lessonId);
  const isModuleCompleted = (moduleId: string) => completedModules.has(moduleId);

  const progressPercentage = useMemo(() => {
    return totalLessons > 0 ? Math.round((completedLessons.size / totalLessons) * 100) : 0;
  }, [completedLessons, totalLessons]);

  const value = {
    completedLessons,
    completedModules,
    markLessonAsComplete,
    isLessonCompleted,
    isModuleCompleted,
    progressPercentage,
    totalLessons,
    xp,
    level,
    xpForNextLevel,
    xpInCurrentLevel,
    earnedBadges,
    getAllUsersProgress,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useCourseProgress = (): ProgressContextType => {
  const context = useContext(ProgressContext);
  if (context === undefined) {
    throw new Error('useCourseProgress must be used within a ProgressProvider');
  }
  return context;
};