'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronLeft } from 'lucide-react';
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
      <Link href="/schedule" className="inline-flex items-center gap-1 text-sm text-gray-500 mb-3">
        <ChevronLeft size={16} />
        일정
      </Link>
      <div className="mb-4">
        <span className="text-xs text-gray-500">{schedule.date}</span>
        <h1 className="text-xl font-bold text-gray-800">{schedule.title[lang]}</h1>
        <p className="text-sm text-gray-500 mt-1 leading-relaxed">{schedule.overview[lang]}</p>
      </div>
      <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-4">
        <Image
          src={`/schedule/day${day}.jpeg`}
          alt={`Day ${day} 이동 동선`}
          fill
          className="object-cover"
        />
      </div>
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        {timeline.map((item, i) => (
          <TimelineItem key={i} item={item} lang={lang} />
        ))}
      </div>
    </div>
  );
}
