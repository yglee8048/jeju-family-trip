'use client';
import { useState } from 'react';
import { ChevronDown, PlaneTakeoff } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useApp } from '../../context/AppContext';
import { personas } from '../../data/personas';

export function Header() {
  const pathname = usePathname();
  const { persona, lang, setLang, setPersona } = useApp();
  const [showModal, setShowModal] = useState(false);

  if (pathname.startsWith('/onboarding') || !persona) return null;

  function handleSelect(id: string) {
    const p = personas.find(x => x.id === id)!;
    setPersona(p);
    setLang(p.defaultLang);
    setShowModal(false);
  }

  return (
    <>
      <header className="sticky top-0 z-40 max-w-lg mx-auto w-full">
        <div className="h-1 bg-gradient-to-r from-[#9CD5FF] via-sky-400 to-sky-500" />
        <div className="bg-white/90 backdrop-blur-sm border-b border-gray-100">
          <div className="flex items-center justify-between px-4 py-3">
            <div className="flex items-center gap-2">
              <PlaneTakeoff className="w-5 h-5 text-sky-400" strokeWidth={2} />
              <span className="font-semibold text-gray-800 text-sm">제주 가족 여행</span>
            </div>
            <div className="flex items-center gap-3">
              {persona && (
                <button
                  onClick={() => setShowModal(true)}
                  className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 transition-colors"
                >
                  <span>{persona.name[lang]}</span>
                  <ChevronDown className="w-3 h-3 text-gray-400" />
                </button>
              )}
              <button
                onClick={() => setLang(lang === 'ko' ? 'ja' : 'ko')}
                className="text-xs bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 font-medium transition-colors"
              >
                {lang === 'ko' ? 'KO' : 'JA'}
              </button>
            </div>
          </div>
        </div>
      </header>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center" onClick={() => setShowModal(false)}>
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="relative bg-white rounded-t-3xl w-full max-w-lg p-5 pb-20"
            onClick={e => e.stopPropagation()}
          >
            <div className="w-10 h-1 bg-gray-300 rounded-full mx-auto mb-5" />
            <h2 className="text-base font-bold text-gray-800 mb-4 text-center">
              {lang === 'ko' ? '나는 누구인가요?' : 'あなたは誰ですか？'}
            </h2>
            <div className="grid grid-cols-2 gap-3">
              {personas.map(p => (
                <button
                  key={p.id}
                  onClick={() => handleSelect(p.id)}
                  className={`flex flex-col items-center gap-2 border-2 rounded-2xl p-4 transition-colors ${
                    persona?.id === p.id
                      ? 'border-sky-400 bg-sky-50'
                      : 'border-gray-200 bg-white hover:border-sky-300'
                  }`}
                >
                  <span className="text-sm font-semibold text-gray-800">{p.name[lang]}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
