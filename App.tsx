import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ProgressProvider } from './context/ProgressContext';
import { AuthProvider } from './context/AuthContext';
import CourseDashboard from './pages/CourseDashboard';
import ModuleView from './pages/ModuleView';
import LessonView from './pages/LessonView';
import Header from './components/Header';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import ProtectedRoute from './components/ProtectedRoute';
import AdminDashboard from './pages/AdminDashboard';
import AdminRoute from './components/AdminRoute';
import ErrorBoundary from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <ProgressProvider>
          <HashRouter>
            <div className="bg-gray-50 min-h-screen text-gray-800">
              <Header />
              <main className="container mx-auto p-4 sm:p-6 lg:p-8">
                <Routes>
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/signup" element={<SignUpPage />} />

                  <Route
                    path="/"
                    element={
                      <ProtectedRoute>
                        <CourseDashboard />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/module/:moduleId"
                    element={
                      <ProtectedRoute>
                        <ModuleView />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/module/:moduleId/lesson/:lessonId"
                    element={
                      <ProtectedRoute>
                        <LessonView />
                      </ProtectedRoute>
                    }
                  />
                  <Route
                    path="/admin"
                    element={
                      <AdminRoute>
                        <AdminDashboard />
                      </AdminRoute>
                    }
                  />
                </Routes>
              </main>
            </div>
          </HashRouter>
        </ProgressProvider>
      </AuthProvider>
    </ErrorBoundary>
  );
};

export default App;