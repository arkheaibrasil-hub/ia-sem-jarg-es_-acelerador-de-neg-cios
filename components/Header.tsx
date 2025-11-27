import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useCourseProgress } from '../context/ProgressContext';
import { useAuth } from '../context/AuthContext';
import GlossaryModal from './GlossaryModal';
import ProgressBar from './ProgressBar';
import { BookMarked, Star, LogOut, ShieldCheck } from './icons';

const Header: React.FC = () => {
  const [isGlossaryOpen, setIsGlossaryOpen] = useState(false);
  const { xp, level, xpForNextLevel, xpInCurrentLevel, progressPercentage } = useCourseProgress();
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  const levelProgress = xpForNextLevel > 0 ? (xpInCurrentLevel / xpForNextLevel) * 100 : 0;

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-40">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-2">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="text-lg font-bold text-gray-800">IA Sem Jargões</Link>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              {currentUser ? (
                <>
                  {currentUser.role === 'admin' && (
                     <Link
                        to="/admin"
                        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600"
                        aria-label="Painel Admin"
                      >
                        <ShieldCheck className="w-5 h-5" />
                        <span className="hidden md:inline">Painel Admin</span>
                      </Link>
                  )}
                  <div className="flex items-center gap-3" title={`${xpInCurrentLevel} / ${xpForNextLevel} XP para o próximo nível`}>
                    <Star className="w-6 h-6 text-yellow-500" />
                    <div className="flex flex-col text-right sm:text-left">
                      <span className="text-sm font-bold">{currentUser.username}</span>
                      <span className="text-xs text-gray-500">Nível {level} - {xp} XP</span>
                    </div>
                  </div>
                  <div className="w-32 hidden sm:block">
                    <ProgressBar percentage={levelProgress} />
                  </div>
                  <button
                    onClick={handleLogout}
                    className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-red-600"
                    aria-label="Sair"
                  >
                    <LogOut className="w-5 h-5" />
                    <span className="hidden md:inline">Sair</span>
                  </button>
                </>
              ) : null}

              <button
                onClick={() => setIsGlossaryOpen(true)}
                className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600"
                aria-label="Abrir glossário"
              >
                <BookMarked className="w-5 h-5" />
                <span className="hidden md:inline">Glossário</span>
              </button>
            </div>
          </div>
          {currentUser && <ProgressBar percentage={progressPercentage} height="h-1" />}
        </div>
      </header>
      <GlossaryModal isOpen={isGlossaryOpen} onClose={() => setIsGlossaryOpen(false)} />
    </>
  );
};

export default Header;