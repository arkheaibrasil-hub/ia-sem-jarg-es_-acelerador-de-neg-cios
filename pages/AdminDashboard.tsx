import React, { useState, useMemo } from 'react';
import { useAuth } from '../context/AuthContext';
import { useCourseProgress } from '../context/ProgressContext';
import { User } from '../types';
import ProgressBar from '../components/ProgressBar';
import UserDetailsModal from '../components/UserDetailsModal';
import { Users, Eye } from '../components/icons';
import { COURSE_DATA } from '../data/courseData';

const AdminDashboard: React.FC = () => {
  const { getAllUsers } = useAuth();
  const { getAllUsersProgress } = useCourseProgress();
  const [selectedUser, setSelectedUser] = useState<User | null>(null);

  const users = getAllUsers();
  const allProgress = getAllUsersProgress();
  const totalLessons = useMemo(() => COURSE_DATA.reduce((acc, module) => acc + module.lessons.length, 0), []);

  const handleViewDetails = (user: User) => {
    setSelectedUser(user);
  };

  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white p-6 rounded-xl shadow-sm flex items-center gap-4">
        <Users className="h-8 w-8 text-blue-600" />
        <div>
          <h1 className="text-3xl font-bold text-gray-800">Painel de Administrador</h1>
          <p className="text-gray-600 mt-1">Monitore o progresso de todos os alunos.</p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Aluno
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progresso
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nível
                </th>
                <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  XP Total
                </th>
                <th scope="col" className="relative px-6 py-3">
                  <span className="sr-only">Ações</span>
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map(user => {
                const userProgress = allProgress[user.id] || { completedLessons: [], xp: 0 };
                const progressPercentage = totalLessons > 0 ? Math.round((userProgress.completedLessons.length / totalLessons) * 100) : 0;
                
                const levelData = (() => {
                    let level = 1;
                    let requiredXp = 1000;
                    let accumulatedXp = 0;
                    while (userProgress.xp >= accumulatedXp + requiredXp) {
                        accumulatedXp += requiredXp;
                        level++;
                        requiredXp = Math.floor(1000 * (level ** 1.2));
                    }
                    return { level };
                })();

                return (
                  <tr key={user.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.username}</div>
                      <div className="text-sm text-gray-500">{user.email}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <div className="w-24">
                           <ProgressBar percentage={progressPercentage} height="h-2" />
                        </div>
                        <span className="text-sm text-gray-600">{progressPercentage}%</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{levelData.level}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{userProgress.xp}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <button
                        onClick={() => handleViewDetails(user)}
                        className="text-blue-600 hover:text-blue-900 flex items-center gap-1"
                      >
                        <Eye className="w-4 h-4"/>
                        Ver Detalhes
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {selectedUser && (
        <UserDetailsModal
          user={selectedUser}
          progress={allProgress[selectedUser.id]}
          isOpen={!!selectedUser}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default AdminDashboard;