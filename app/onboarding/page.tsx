'use client';
import { PersonaSelector } from '@/src/components/common/PersonaSelector';

export default function OnboardingPage() {
  return (
    <div className="min-h-screen bg-linear-to-b from-sky-50 to-white">
      <div className="pt-12 pb-8 px-4 text-center">
        <div className="text-5xl mb-4">🌿</div>
        <h1 className="text-xl font-bold text-gray-800 mb-2">
          제주 가족 여행에 오신 것을 환영합니다! 🎉
          <br />
          <span className="text-lg font-semibold text-gray-600">済州島 家族旅行へようこそ！</span>
        </h1>
        <p className="text-gray-500 text-sm mt-3">나는 누구인가요?</p>
        <p className="text-gray-500 text-sm mt-1">あなたは誰ですか？</p>
      </div>
      <PersonaSelector isOnboarding />
    </div>
  );
}
