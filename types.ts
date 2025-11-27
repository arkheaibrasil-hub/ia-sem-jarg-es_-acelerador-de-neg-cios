import React from 'react';

export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswerIndex: number;
}

export interface Lesson {
  id: string;
  title: string;
  videoUrl: string;
  lessonUrl?: string;
  content: string;
  quiz: QuizQuestion[];
}

export interface Module {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ElementType;
  lessons: Lesson[];
}

export interface GlossaryEntry {
  concept: string;
  analogy: string;
}

export interface Badge {
    id: string;
    name: string;
    description: string;
    icon: React.ElementType;
    type: 'module' | 'course';
    moduleId?: string; // ID do módulo se o tipo for 'module'
}

export interface User {
  id: string;
  username: string;
  email: string;
  password?: string; // Opcional para logins sociais
  role: 'student' | 'admin';
}