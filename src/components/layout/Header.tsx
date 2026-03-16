'use client';
import { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { personas } from '../../data/personas';

export function Header() {
  const { persona, lang, setLang, setPersona } = useApp();
  const [showModal, setShowModal] = useState(false);

  function handleSelect(id: string) {
    const p = personas.find(x => x.id === id)!;
    setPersona(p);
    if (p.defaultLang === 'ja') setLang('ja');
    setShowModal(false);
  }

  return (
    <>
      <header className="sticky top-0 bg-white/90 backdrop-blur-sm border-b border-gray-100 z-40 max-w-lg mx-auto w-full">
        <div className="flex items-center justify-between px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="text-xl">🌿</span>
            <span className="font-semibold text-gray-800 text-sm">제주 가족 여행</span>
          </div>
          <div className="flex items-center gap-3">
            {persona && (
              <button
                onClick={() => setShowModal(true)}
                className="flex items-center gap-1.5 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded-full px-3 py-1 transition-colors"
              >
                <span>{persona.emoji}</span>
                <span>{persona.name[lang]}</span>
                <span className="text-gray-400 text-xs">▾</span>
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
      </header>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-end justify-center" onClick={() => setShowModal(false)}>
          <div className="absolute inset-0 bg-black/40" />
          <div
            className="relative bg-white rounded-t-3xl w-full max-w-lg p-5 pb-8"
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
                      ? 'border-emerald-500 bg-emerald-50'
                      : 'border-gray-200 bg-white hover:border-emerald-300'
                  }`}
                >
                  <span className="text-3xl">{p.emoji}</span>
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
