'use client';
import { useState, useEffect } from 'react';
import { getPersonaById, type Persona } from '../data/personas';

const STORAGE_KEY = 'jeju_persona';

export function usePersona() {
  const [persona, setPersonaState] = useState<Persona | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const found = getPersonaById(stored);
      if (found) setPersonaState(found);
    }
    setLoaded(true);
  }, []);

  function setPersona(p: Persona | null) {
    setPersonaState(p);
    if (p) localStorage.setItem(STORAGE_KEY, p.id);
    else localStorage.removeItem(STORAGE_KEY);
  }

  function clearPersona() {
    setPersona(null);
  }

  return { persona, setPersona, clearPersona, loaded };
}
