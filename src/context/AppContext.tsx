'use client';
import {createContext, ReactNode, useContext} from 'react';
import {usePersona} from '../hooks/usePersona';
import {useLanguage} from '../hooks/useLanguage';
import type {TripPhase} from '../hooks/useTripDate';
import {useTripDate} from '../hooks/useTripDate';
import type {Lang, Persona} from '../data/personas';

interface AppContextType {
    persona: Persona | null;
    setPersona: (p: Persona | null) => void;
    clearPersona: () => void;
    loaded: boolean;
    lang: Lang;
    setLang: (l: Lang) => void;
    phase: TripPhase;
    daysUntil: number;
    currentDay: 1 | 2 | 3 | 4 | null;
}

const AppContext = createContext<AppContextType | null>(null);

export function AppProvider({children}: { children: ReactNode }) {
    const {persona, setPersona, clearPersona, loaded} = usePersona();
    const {lang, setLang} = useLanguage(persona);
    const {phase, daysUntil, currentDay} = useTripDate();

    return (
        <AppContext.Provider
            value={{persona, setPersona, clearPersona, loaded, lang, setLang, phase, daysUntil, currentDay}}>
            {children}
        </AppContext.Provider>
    );
}

export function useApp() {
    const ctx = useContext(AppContext);
    if (!ctx) throw new Error('useApp must be used within AppProvider');
    return ctx;
}
