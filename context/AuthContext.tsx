
import React, { createContext, useState, useContext, useEffect, ReactNode, useMemo, useCallback } from 'react';
import { User } from '../types';

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password?: string) => boolean;
  signup: (username: string, email: string, password?: string) => boolean;
  logout: () => void;
  getAllUsers: () => User[];
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Hardcoded Admin User
const ADMIN_USER: User = {
  id: 'admin-user-01',
  username: 'Admin',
  email: 'admin@iasemjargoes.com',
  password: 'adminpassword',
  role: 'admin',
};

const getUsers = (): User[] => {
  try {
      const item = window.localStorage.getItem('users');
      return item ? JSON.parse(item) : [];
  } catch (error) {
      return [];
  }
};

const saveUsers = (users: User[]) => {
  try {
      window.localStorage.setItem('users', JSON.stringify(users));
  } catch (error) {
      console.error("Could not save users to localStorage", error);
  }
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(() => {
    try {
      const item = window.localStorage.getItem('currentUser');
      return item ? JSON.parse(item) : null;
    } catch (error) {
      return null;
    }
  });

  // Seed admin user on initial load
  useEffect(() => {
    const users = getUsers();
    const adminExists = users.some(user => user.email === ADMIN_USER.email);
    if (!adminExists) {
      saveUsers([...users, ADMIN_USER]);
    }
  }, []);

  useEffect(() => {
    try {
      if (currentUser) {
        window.localStorage.setItem('currentUser', JSON.stringify(currentUser));
      } else {
        window.localStorage.removeItem('currentUser');
      }
    } catch (error) {
      console.error("Could not save current user to localStorage", error);
    }
  }, [currentUser]);

  const login = useCallback((email: string, password?: string): boolean => {
    const users = getUsers();
    const user = users.find(u => u.email === email);
    
    if (user && (!password || user.password === password)) {
        setCurrentUser(user);
        return true;
    }
    return false;
  }, []);

  const signup = useCallback((username: string, email: string, password?: string): boolean => {
    const users = getUsers();
    const userExists = users.some(user => user.email === email);
    if (userExists) {
      return false; // User already exists
    }
    const newUser: User = { 
        id: `user-${Date.now()}`,
        username, 
        email, 
        password,
        role: 'student' 
    };
    saveUsers([...users, newUser]);
    setCurrentUser(newUser);
    return true;
  }, []);
  
  const logout = useCallback(() => {
    setCurrentUser(null);
  }, []);

  const getAllUsers = useCallback((): User[] => {
    return getUsers();
  }, []);

  const value = useMemo(() => ({ currentUser, login, signup, logout, getAllUsers }), [currentUser, login, signup, logout, getAllUsers]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};