"use client";
import React from 'react';

interface CategoryCardProps {
  category: string;
  count: number;
  onSelect: () => void;
}

export const CategoryCard: React.FC<CategoryCardProps> = ({ category, count, onSelect }) => {
  return (
    <div 
      onClick={onSelect}
      className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-lg hover:border-teal-300 transition-all cursor-pointer group relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 bg-teal-50 text-teal-700 px-3 py-1 rounded-bl-lg text-xs font-bold">
        {count} Preguntas
      </div>
      <div className="mb-4 text-teal-600 group-hover:scale-110 transition-transform duration-300 origin-left">
         <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
         </svg>
      </div>
      <h3 className="text-lg font-bold text-slate-800 group-hover:text-teal-700 mb-2">{category}</h3>
      <p className="text-sm text-slate-500">Practicar preguntas de parcial sobre este tema.</p>
    </div>
  );
};