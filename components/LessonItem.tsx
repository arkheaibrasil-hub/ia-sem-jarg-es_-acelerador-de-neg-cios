
import React from 'react';
import { Link } from 'react-router-dom';
import { Lesson } from '../types';
import { useCourseProgress } from '../context/ProgressContext';
import { CheckCircle2, PlayCircle } from './icons';

interface LessonItemProps {
  lesson: Lesson;
  moduleId: string;
  index: number;
}

const LessonItem: React.FC<LessonItemProps> = ({ lesson, moduleId, index }) => {
  const { isLessonCompleted } = useCourseProgress();
  const completed = isLessonCompleted(lesson.id);

  return (
    <li>
      <Link to={`/module/${moduleId}/lesson/${lesson.id}`} className="flex items-center justify-between p-4 sm:p-6 hover:bg-gray-50 transition-colors duration-200">
        <div className="flex items-center gap-4">
            <div className={`w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-full text-sm font-bold ${completed ? 'bg-green-100 text-green-600' : 'bg-gray-200 text-gray-600'}`}>
                {index + 1}
            </div>
            <span className={`font-medium ${completed ? 'text-gray-500 line-through' : 'text-gray-800'}`}>
                {lesson.title}
            </span>
        </div>
        <div>
            {completed ? (
                <CheckCircle2 className="h-6 w-6 text-green-500" />
            ) : (
                <PlayCircle className="h-6 w-6 text-gray-400" />
            )}
        </div>
      </Link>
    </li>
  );
};

export default LessonItem;