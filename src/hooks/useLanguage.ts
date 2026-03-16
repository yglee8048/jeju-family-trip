'use client';
import { useState, useEffect } from 'react';
import type { Lang, Persona } from '../data/personas';

const STORAGE_KEY = 'jeju_lang';

export function useLanguage(persona: Persona | null) {
  const [lang, setLangState] = useState<Lang>('ko');

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === 'ko' || stored === 'ja') {
      setLangState(stored);
    } else if (persona?.defaultLang) {
      setLangState(persona.defaultLang);
    }
  }, [persona]);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem(STORAGE_KEY, l);
  }

  return { lang, setLang };
}
