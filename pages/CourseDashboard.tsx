
import React from 'react';
import { COURSE_DATA } from '../data/courseData';
import { ALL_BADGES } from '../data/gamificationData';
import ModuleCard from '../components/ModuleCard';
import { useCourseProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import Certificate from '../components/Certificate';
import ProgressBar from '../components/ProgressBar';
import { CheckCircle2 } from '../components/icons';

// Novo componente de banner do curso com SVG integrado
const CourseBanner: React.FC<{ username: string | undefined }> = ({ username }) => (
  <div className="relative bg-gray-800 rounded-xl shadow-lg overflow-hidden p-8 text-white">
    <div className="absolute inset-0 z-0 opacity-30 mix-blend-soft-light">
      <svg width="100%" height="100%" viewBox="0 0 1200 300" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" style={{stopColor: 'rgb(37, 99, 235)', stopOpacity: 1}} />
            <stop offset="100%" style={{stopColor: 'rgb(20, 184, 166)', stopOpacity: 1}} />
          </linearGradient>
          <radialGradient id="grad2" cx="50%" cy="50%" r="50%">
             <stop offset="0%" stopColor="rgba(251, 146, 60, 0.7)" />
             <stop offset="100%" stopColor="rgba(251, 146, 60, 0)" />
          </radialGradient>
           <filter id="blurry">
            <feGaussianBlur in="SourceGraphic" stdDeviation="5" />
          </filter>
        </defs>
        <rect width="1200" height="300" fill="#111827" />
        
        {/* Abstract Shapes */}
        <path d="M-200,300 C 250,50 350,400 800,100 L 800,300 Z" fill="url(#grad1)" filter="url(#blurry)" />
        <circle cx="950" cy="150" r="200" fill="url(#grad2)" filter="url(#blurry)"/>

        {/* Circuit Lines */}
        <path d="M 600 20 C 680 -10, 750 80, 850 70 L 1000 120" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
        <path d="M 750 280 C 820 320, 900 220, 980 230 L 1150 180" stroke="rgba(255,255,255,0.2)" strokeWidth="2" fill="none" />
        <circle cx="600" cy="20" r="6" fill="white" opacity="0.3"/>
        <circle cx="850" cy="70" r="4" fill="white" opacity="0.3"/>
        <circle cx="1000" cy="120" r="5" fill="white" opacity="0.3"/>
        <circle cx="750" cy="280" r="5" fill="white" opacity="0.3"/>
        <circle cx="980" cy="230" r="6" fill="white" opacity="0.3"/>
      </svg>
    </div>
    <div className="relative z-10">
      <h1 className="text-4xl font-bold">IA Sem Jargões</h1>
      <p className="text-xl mt-2 text-gray-200">Seu Acelerador de Negócios</p>
      <p className="text-gray-300 mt-6 max-w-2xl">
        Bem-vindo(a) de volta, {username}! Continue sua jornada para desmistificar a IA e aplicá-la de forma prática no seu negócio.
      </p>
    </div>
  </div>
);


const CourseDashboard: React.FC = () => {
    const {
        progressPercentage,
        completedLessons,
        totalLessons,
        level,
        xp,
        xpForNextLevel,
        xpInCurrentLevel,
        earnedBadges
    } = useCourseProgress();
    const { currentUser } = useAuth();

    const levelProgress = xpForNextLevel > 0 ? (xpInCurrentLevel / xpForNextLevel) * 100 : 0;

    return (
        <div className="space-y-8">
            <CourseBanner username={currentUser?.username} />

            {/* Painel de Progresso */}
            <div className="bg-white p-6 rounded-xl shadow-sm">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Seu Painel de Progresso</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center mb-8">
                    {/* Level e XP */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-lg font-bold text-blue-600">Nível {level}</span>
                            <span className="text-sm font-semibold text-gray-600">{xpInCurrentLevel} / {xpForNextLevel} XP</span>
                        </div>
                        <ProgressBar percentage={levelProgress} height="h-3" />
                        <p className="text-xs text-gray-500 mt-1 text-right">Total: {xp} XP</p>
                    </div>
                    {/* Progresso do Curso */}
                    <div>
                        <div className="flex justify-between items-center mb-1">
                            <span className="text-lg font-bold text-gray-700">Progresso do Curso</span>
                            <span className="text-sm font-semibold text-gray-600">{progressPercentage}%</span>
                        </div>
                        <ProgressBar percentage={progressPercentage} height="h-3" />
                        <p className="text-xs text-gray-500 mt-1 text-right">{completedLessons.size} de {totalLessons} lições</p>
                    </div>
                </div>

                {/* Galeria de Conquistas */}
                <div>
                    <h3 className="text-xl font-bold text-gray-800 mb-4">Minhas Conquistas</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4">
                        {ALL_BADGES.map(badge => {
                            const hasEarned = earnedBadges.has(badge.id);
                            return (
                                <div key={badge.id} className="flex flex-col items-center text-center" title={`${badge.name}: ${badge.description}`}>
                                    <div className={`w-16 h-16 flex items-center justify-center rounded-full transition-all duration-300 ${hasEarned ? 'bg-green-100' : 'bg-gray-100 filter grayscale opacity-60'}`}>
                                        <badge.icon className={`w-8 h-8 ${hasEarned ? 'text-green-600' : 'text-gray-400'}`} />
                                    </div>
                                    <p className={`text-xs font-semibold mt-2 w-full ${hasEarned ? 'text-gray-700' : 'text-gray-500'}`}>{badge.name}</p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {progressPercentage === 100 && (
                <div className="mb-8">
                    <Certificate studentName={currentUser ? currentUser.username : "Empresário(a) Visionário(a)"} />
                </div>
            )}

            <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Módulos do Curso</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {COURSE_DATA.map((module) => (
                        <ModuleCard key={module.id} module={module} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseDashboard;
