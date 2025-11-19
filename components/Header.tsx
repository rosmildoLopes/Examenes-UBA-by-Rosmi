"use client";
import React from 'react';
import { ViewState } from '@/lib/types';

interface HeaderProps {
  onHome: () => void;
  currentView: ViewState;
  title?: string;
}

export const Header: React.FC<HeaderProps> = ({ onHome, currentView, title }) => {
  return (
    <header className="bg-teal-700 text-white shadow-md sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3 cursor-pointer" onClick={onHome}>
          <div className="bg-white p-1.5 rounded-lg">
            <svg className="w-6 h-6 text-teal-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
          </div>
          <h1 className="text-xl font-bold tracking-tight">Rosmi-UBA<span className="font-light opacity-80">Pro</span></h1>
        </div>
        {currentView === ViewState.QUIZ && (
          <button 
            onClick={onHome}
            className="text-sm font-medium bg-teal-800/50 hover:bg-teal-800 px-3 py-1.5 rounded-md transition-colors"
          >
            Cambiar Tema
          </button>
        )}
      </div>
      {title && currentView === ViewState.QUIZ && (
        <div className="bg-teal-800 text-teal-50 px-4 py-2 text-center text-sm font-medium shadow-inner">
          {title}
        </div>
      )}
    </header>
  );
};