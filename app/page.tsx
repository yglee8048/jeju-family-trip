'use client';
import { useApp } from '../src/context/AppContext';
import { PersonaSelector } from '../src/components/common/PersonaSelector';
import { schedules } from '../src/data/schedule';
import { checklists } from '../src/data/checklist';
import { TimelineItem } from '../src/components/schedule/TimelineItem';
import { t } from '../src/i18n';
import Link from 'next/link';

export default function HomePage() {
  const { persona, loaded, lang, phase, daysUntil, currentDay } = useApp();

  if (!loaded) return null;

  if (!persona) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white animate-fade-in">
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

  if (phase === 'post') {
    return (
      <div className="flex items-center justify-center min-h-screen animate-fade-in">
        <div className="text-center px-6">
          <div className="text-6xl mb-4">🌊</div>
          <p className="text-lg font-semibold text-gray-700">{t(lang, 'home.tripDone')}</p>
        </div>
      </div>
    );
  }

  if (phase === 'pre') {
    const checklist = checklists.find(c => c.day === 0);
    const filteredItems = checklist?.items.filter(item =>
      !item.groups || item.groups.includes(persona.group)
    ) ?? [];

    return (
      <div className="px-4 pt-4 space-y-5">
        {/* D-Day Card */}
        <div className="relative bg-gradient-to-br from-[#9CD5FF] via-sky-400 to-sky-500 rounded-3xl p-6 text-white overflow-hidden animate-fade-in">
          <div className="absolute inset-0 opacity-10" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }} />
          <p className="text-sm opacity-80 mb-1 relative">{t(lang, 'home.countdown.title')}</p>
          <div className="text-5xl font-bold relative">D-{daysUntil}</div>
          <p className="text-sm opacity-70 mt-2 relative">2026-03-19 제주 출발</p>
        </div>

        {/* Checklist */}
        <div className="animate-fade-in stagger-1">
          <h2 className="text-base font-bold text-gray-800 mb-3">{t(lang, 'home.preTrip')}</h2>
          <div className="bg-white rounded-2xl divide-y divide-gray-100 shadow-sm">
            {filteredItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3">
                <span className="text-lg">☐</span>
                <span className="text-sm text-gray-700">{item[lang]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  // Trip days
  const todaySchedule = currentDay ? schedules.find(s => s.day === currentDay) : null;
  const todayTimeline = todaySchedule?.timeline.filter(item =>
    !item.groups || item.groups.includes(persona.group)
  ) ?? [];
  const todayChecklist = checklists.find(c => c.day === (currentDay ?? 1));
  const filteredChecklist = todayChecklist?.items.filter(item =>
    !item.groups || item.groups.includes(persona.group)
  ) ?? [];

  return (
    <div className="px-4 pt-4 space-y-5">
      {/* Today Hero */}
      <div className="relative bg-gradient-to-br from-[#9CD5FF] via-sky-400 to-sky-500 rounded-3xl p-6 text-white overflow-hidden animate-fade-in">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
        <p className="text-sm opacity-80 mb-1 relative">2026-03-{18 + (currentDay ?? 1)} (Day {currentDay})</p>
        <h1 className="text-xl font-bold relative">{todaySchedule?.title[lang]}</h1>
        <p className="text-sm opacity-80 mt-2 leading-relaxed relative">{todaySchedule?.overview[lang]}</p>
      </div>

      {/* Today Timeline */}
      {todayTimeline.length > 0 && (
        <div className="animate-fade-in stagger-1">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-bold text-gray-800">{t(lang, 'home.todaySchedule')}</h2>
            <Link href={`/schedule/${currentDay}`} className="text-xs text-sky-600 font-medium">전체 보기 →</Link>
          </div>
          <div className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-sky-300">
            {todayTimeline.map((item, i) => (
              <TimelineItem key={i} item={item} lang={lang} />
            ))}
          </div>
        </div>
      )}

      {/* Checklist */}
      {filteredChecklist.length > 0 && (
        <div className="animate-fade-in stagger-2">
          <h2 className="text-base font-bold text-gray-800 mb-3">오늘의 준비물</h2>
          <div className="bg-white rounded-2xl divide-y divide-gray-100 shadow-sm border-l-4 border-amber-400">
            {filteredChecklist.map((item, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3">
                <span className="text-lg">☐</span>
                <span className="text-sm text-gray-700">{item[lang]}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
