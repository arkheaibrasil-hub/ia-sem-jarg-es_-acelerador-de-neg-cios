
import React from 'react';
import { Link } from 'react-router-dom';
import { Module } from '../types';
import { useCourseProgress } from '../context/ProgressContext';
import ProgressBar from './ProgressBar';

interface ModuleCardProps {
  module: Module;
}

const ModuleCard: React.FC<ModuleCardProps> = ({ module }) => {
  const { completedLessons, isModuleCompleted } = useCourseProgress();

  const completedInModule = module.lessons.filter(lesson => completedLessons.has(lesson.id)).length;
  const totalInModule = module.lessons.length;
  const moduleIsCompleted = isModuleCompleted(module.id);
  
  const moduleProgress = moduleIsCompleted ? 100 : (totalInModule > 0 ? (completedInModule / totalInModule) * 100 : 0);
  const isBonusModule = module.id === 'm15';

  return (
    <Link to={`/module/${module.id}`} className="block group">
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 p-6 flex flex-col h-full">
        <div className="flex-shrink-0 flex justify-between items-start">
          <div className="bg-blue-100 text-blue-600 rounded-lg w-12 h-12 flex items-center justify-center">
            <module.icon className="w-6 h-6" />
          </div>
          {isBonusModule && (
            <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded-full">✨ Bônus</span>
          )}
        </div>
        <div className="flex-grow mt-4">
          <h2 className="text-lg font-bold text-gray-800 group-hover:text-blue-600 transition-colors">{module.title}</h2>
          <p className="text-gray-500 mt-1 text-sm">{module.subtitle}</p>
        </div>
        <div className="mt-4 flex-shrink-0">
            <ProgressBar percentage={moduleProgress} height="h-1.5" />
            <p className="text-xs text-gray-500 mt-1.5">{completedInModule} / {totalInModule} lições</p>
        </div>
      </div>
    </Link>
  );
};

export default ModuleCard;
