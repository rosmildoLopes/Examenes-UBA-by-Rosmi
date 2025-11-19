export interface Option {
    id: string;
    text: string;
    isCorrect?: boolean;
}

export interface Question {
    id: number;
    category: string;
    text: string;
    options: Option[];
    explanation?: string;
}

export interface QuizState {
    currentQuestionIndex: number;
    score: number;
    showResults: boolean;
    answers: Record<number, string>;
}

export enum ViewState {
    HOME = 'HOME',
    QUIZ = 'QUIZ',
}