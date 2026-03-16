'use client';
import { useApp } from '../../../src/context/AppContext';
import { getScheduleByDay } from '../../../src/data/schedule';
import { TimelineItem } from '../../../src/components/schedule/TimelineItem';
import { notFound } from 'next/navigation';

interface Props {
  day: string;
}

export default function DayDetailClient({ day }: Props) {
  const { lang, persona } = useApp();
  const schedule = getScheduleByDay(parseInt(day));

  if (!schedule) return notFound();

  const timeline = schedule.timeline.filter(item =>
    !item.groups || !persona || item.groups.includes(persona.group)
  );

  return (
    <div className="px-4 pt-4 pb-6">
      <div className="mb-4">
        <span className="text-xs text-gray-500">{schedule.date}</span>
        <h1 className="text-xl font-bold text-gray-800">{schedule.title[lang]}</h1>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{schedule.overview[lang]}</p>
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        {timeline.map((item, i) => (
          <TimelineItem key={i} item={item} lang={lang} />
        ))}
      </div>
    </div>
  );
}
