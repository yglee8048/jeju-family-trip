'use client';
import { useApp } from '../../src/context/AppContext';
import { schedules } from '../../src/data/schedule';
import { DayCard } from '../../src/components/schedule/DayCard';
import { t } from '../../src/i18n';

export default function SchedulePage() {
  const { lang, persona } = useApp();

  const filteredSchedules = schedules.filter(s =>
    !s.groups || !persona || s.groups.includes(persona.group)
  );

  return (
    <div className="px-4 pt-4 space-y-4">
      <h1 className="text-xl font-bold text-gray-800">{t(lang, 'schedule.title')}</h1>
      {filteredSchedules.map(s => (
        <DayCard key={s.day} schedule={s} lang={lang} />
      ))}
    </div>
  );
}
