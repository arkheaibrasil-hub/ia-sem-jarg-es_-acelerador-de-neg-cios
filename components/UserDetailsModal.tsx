import React from 'react';
import { User } from '../types';
import { X, CheckCircle2 } from './icons';
import { ALL_BADGES } from '../data/gamificationData';
import { COURSE_DATA } from '../data/courseData';
import ProgressBar from './ProgressBar';

interface StoredProgress {
  completedLessons: string[];
  completedModules: string[];
  xp: number;
  earnedBadges: string[];
}

interface UserDetailsModalProps {
  isOpen: boolean;
  onClose: () => void;
  user: User;
  progress?: StoredProgress;
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ isOpen, onClose, user, progress }) => {
  if (!isOpen) return null;

  const userProgress = progress || { completedLessons: [], completedModules: [], xp: 0, earnedBadges: [] };
  const totalLessons = COURSE_DATA.reduce((acc, module) => acc + module.lessons.length, 0);
  const progressPercentage = totalLessons > 0 ? Math.round((userProgress.completedLessons.length / totalLessons) * 100) : 0;
  
  const allLessons = COURSE_DATA.flatMap(m => m.lessons);

  const { level, xpForNextLevel, xpInCurrentLevel } = (() => {
    let currentLevel = 1;
    let requiredXp = 1000;
    let accumulatedXp = 0;
    while (userProgress.xp >= accumulatedXp + requiredXp) {
        accumulatedXp += requiredXp;
        currentLevel++;
        requiredXp = Math.floor(1000 * (currentLevel ** 1.2));
    }
    const xpForCurrentLevel = userProgress.xp - accumulatedXp;
    return { level: currentLevel, xpForNextLevel: requiredXp, xpInCurrentLevel: xpForCurrentLevel };
  })();
  
  const levelProgress = xpForNextLevel > 0 ? (xpInCurrentLevel / xpForNextLevel) * 100 : 0;
  const earnedBadgesSet = new Set(userProgress.earnedBadges);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex justify-center items-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col transform transition-all duration-300 scale-95 animate-scale-in">
        <div className="flex justify-between items-center p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-blue-600">Detalhes de {user.username}</h2>
            <p className="text-gray-500 text-sm">{user.email}</p>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="h-8 w-8" />
          </button>
        </div>
        <div className="p-6 overflow-y-auto space-y-6">
           {/* Resumo do Progresso */}
           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-md font-bold text-blue-600">Nível {level}</span>
                        <span className="text-sm font-semibold text-gray-600">{xpInCurrentLevel} / {xpForNextLevel} XP</span>
                    </div>
                    <ProgressBar percentage={levelProgress} height="h-2.5" />
                    <p className="text-xs text-gray-500 mt-1 text-right">Total: {userProgress.xp} XP</p>
                </div>
                <div>
                    <div className="flex justify-between items-center mb-1">
                        <span className="text-md font-bold text-gray-700">Progresso do Curso</span>
                        <span className="text-sm font-semibold text-gray-600">{progressPercentage}%</span>
                    </div>
                    <ProgressBar percentage={progressPercentage} height="h-2.5" />
                    <p className="text-xs text-gray-500 mt-1 text-right">{userProgress.completedLessons.length} de {totalLessons} lições</p>
                </div>
           </div>

           {/* Conquistas */}
           <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Conquistas</h3>
              <div className="flex flex-wrap gap-4">
                  {ALL_BADGES.map(badge => {
                      const hasEarned = earnedBadgesSet.has(badge.id);
                      return (
                          <div key={badge.id} className="flex flex-col items-center text-center w-20" title={`${badge.name}: ${badge.description}`}>
                              <div className={`w-14 h-14 flex items-center justify-center rounded-full transition-all duration-300 ${hasEarned ? 'bg-green-100' : 'bg-gray-100 filter grayscale opacity-60'}`}>
                                  <badge.icon className={`w-7 h-7 ${hasEarned ? 'text-green-600' : 'text-gray-400'}`} />
                              </div>
                              <p className={`text-xs font-semibold mt-2 w-full ${hasEarned ? 'text-gray-700' : 'text-gray-500'}`}>{badge.name}</p>
                          </div>
                      );
                  })}
              </div>
           </div>

           {/* Lições Concluídas */}
           <div>
              <h3 className="text-lg font-bold text-gray-800 mb-3">Lições Concluídas</h3>
              {userProgress.completedLessons.length > 0 ? (
                <ul className="space-y-2 max-h-48 overflow-y-auto bg-gray-50 p-3 rounded-md">
                    {userProgress.completedLessons.map(lessonId => {
                        const lesson = allLessons.find(l => l.id === lessonId);
                        return (
                            <li key={lessonId} className="flex items-center gap-2 text-sm text-gray-700">
                                <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                                <span>{lesson ? lesson.title : lessonId}</span>
                            </li>
                        );
                    })}
                </ul>
              ) : (
                <p className="text-sm text-gray-500">Nenhuma lição concluída ainda.</p>
              )}
           </div>

        </div>
        <div className="p-4 bg-gray-50 border-t rounded-b-2xl flex justify-end">
           <button onClick={onClose} className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
             Fechar
           </button>
        </div>
      </div>
      <style>{`
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-scale-in { animation: scale-in 0.2s ease-out forwards; }
      `}</style>
    </div>
  );
};

export default UserDetailsModal;