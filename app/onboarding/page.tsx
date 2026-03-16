'use client';
import { useApp } from '../../src/context/AppContext';
import { PersonaSelector } from '../../src/components/common/PersonaSelector';
import { t } from '../../src/i18n';

export default function OnboardingPage() {
  const { lang } = useApp();
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <div className="pt-12 pb-8 px-4 text-center">
        <div className="text-5xl mb-4">🌿</div>
        <h1 className="text-xl font-bold text-gray-800 mb-2">{t(lang, 'onboarding.title')}</h1>
        <p className="text-gray-500 text-sm mb-1">{t(lang, 'onboarding.subtitle')}</p>
        <p className="text-gray-400 text-xs">{t(lang, 'onboarding.desc')}</p>
      </div>
      <PersonaSelector isOnboarding />
    </div>
  );
}
