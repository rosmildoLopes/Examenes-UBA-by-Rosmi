"use client";

import React, { useState } from "react";
import { ViewState, Question } from "@/lib/types";
import { questions, getCategories, getQuestionsByCategory } from "@/lib/data";
import { Header } from "@/components/Header";
import { CategoryCard } from "@/components/CategoryCard";
import { QuestionView } from "@/components/QuestionView";

export default function Page() {
  const [view, setView] = useState<ViewState>(ViewState.HOME);
  const [activeCategory, setActiveCategory] = useState("");
  const [activeQuestions, setActiveQuestions] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const categories = getCategories();

  const startQuiz = (category: string) => {
    const qs = getQuestionsByCategory(category);
    setActiveCategory(category);
    setActiveQuestions(qs);
    setCurrentIndex(0);
    setView(ViewState.QUIZ);
    window.scrollTo(0, 0);
  };

  const goHome = () => {
    if (view === ViewState.QUIZ) {
      if (!window.confirm("¿Salir y perder el progreso?")) return;
    }
    setView(ViewState.HOME);
    setActiveCategory("");
  };

  const handleNext = () => {
    if (currentIndex < activeQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      window.scrollTo(0, 0);
    } else {
      alert("¡Listo, terminaste esta categoría!");
      goHome();
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header
        onHome={goHome}
        currentView={view}
        title={view === ViewState.QUIZ ? activeCategory : undefined}
      />

      <main className="flex-grow">
        {view === ViewState.HOME && (
          <div className="max-w-5xl mx-auto px-4 py-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
              Banco de Preguntas de Farmacología
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((cat) => (
                <CategoryCard
                  key={cat}
                  category={cat}
                  count={getQuestionsByCategory(cat).length}
                  onSelect={() => startQuiz(cat)}
                />
              ))}
            </div>
          </div>
        )}

        {view === ViewState.QUIZ && activeQuestions.length > 0 && (
          <QuestionView
            question={activeQuestions[currentIndex]}
            questionIndex={currentIndex}
            totalQuestions={activeQuestions.length}
            onNext={handleNext}
            onPrev={handlePrev}
          />
        )}
      </main>

      <footer className="bg-white border-t border-slate-200 py-8 mt-auto text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} FarmaQuiz Pro
      </footer>
    </div>
  );
}
