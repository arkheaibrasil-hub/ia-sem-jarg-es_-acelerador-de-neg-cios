
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { COURSE_DATA } from '../data/courseData';
import LessonItem from '../components/LessonItem';
import { ArrowLeft } from '../components/icons';

const ModuleView: React.FC = () => {
  const { moduleId } = useParams<{ moduleId: string }>();
  const module = COURSE_DATA.find(m => m.id === moduleId);
  const isBonusModule = module?.id === 'm15';

  if (!module) {
    return (
      <div className="text-center">
        <h2 className="text-2xl font-bold">Módulo não encontrado</h2>
        <Link to="/" className="text-blue-500 hover:underline mt-4 inline-block">Voltar ao Início</Link>
      </div>
    );
  }

  return (
    <div>
       <Link to="/" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="h-5 w-5" />
            <span>Voltar para todos os módulos</span>
        </Link>
      <div className="bg-white p-6 rounded-xl shadow-sm mb-8">
        <div className="flex items-center gap-4">
            <div className="bg-blue-100 text-blue-600 rounded-lg w-16 h-16 flex items-center justify-center flex-shrink-0">
                <module.icon className="w-8 h-8" />
            </div>
            <div>
                <div className="flex items-center gap-3 flex-wrap">
                    <h1 className="text-3xl font-bold text-gray-800">{module.title}</h1>
                    {isBonusModule && (
                        <span className="bg-yellow-100 text-yellow-800 text-sm font-bold px-3 py-1 rounded-full">✨ Bônus (+50% XP)</span>
                    )}
                </div>
                <p className="text-gray-600 mt-1">{module.subtitle}</p>
            </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm">
        <ul className="divide-y divide-gray-200">
          {module.lessons.map((lesson, index) => (
            <LessonItem key={lesson.id} lesson={lesson} moduleId={module.id} index={index} />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ModuleView;
