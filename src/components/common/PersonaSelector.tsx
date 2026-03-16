'use client';
import { useApp } from '../../context/AppContext';
import { personas } from '../../data/personas';
import { useRouter } from 'next/navigation';

interface Props {
  onSelect?: () => void;
  isOnboarding?: boolean;
}

export function PersonaSelector({ onSelect, isOnboarding }: Props) {
  const { setPersona, lang, setLang } = useApp();
  const router = useRouter();

  function handleSelect(id: string) {
    const p = personas.find(x => x.id === id)!;
    setPersona(p);
    if (p.defaultLang === 'ja') setLang('ja');
    if (onSelect) onSelect();
    if (isOnboarding) router.push('/');
  }

  return (
    <div className="grid grid-cols-2 gap-3 p-4">
      {personas.map(p => (
        <button
          key={p.id}
          onClick={() => handleSelect(p.id)}
          className="flex flex-col items-center justify-center bg-white border-2 border-gray-200 hover:border-sky-300 active:border-sky-500 rounded-2xl p-5 transition-colors shadow-sm"
        >
          {isOnboarding ? (
            <>
              <span className="text-base font-semibold text-gray-800">{p.name.ko}</span>
              {p.name.ko !== p.name.ja && (
                <span className="text-xs text-gray-400">{p.name.ja}</span>
              )}
            </>
          ) : (
            <span className="text-base font-semibold text-gray-800">{p.name[lang]}</span>
          )}
        </button>
      ))}
    </div>
  );
}
