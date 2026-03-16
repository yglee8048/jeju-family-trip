import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { DaySchedule } from '../../data/schedule';
import type { Lang, Persona } from '../../data/personas';

interface Props {
  schedule: DaySchedule;
  lang: Lang;
  persona: Persona | null;
}

export function DayCard({ schedule, lang, persona }: Props) {
  const highlights = schedule.timeline
    .filter(item => item.highlight && (!item.groups || !persona || item.groups.includes(persona.group)))
    .slice(0, 3);

  return (
    <Link href={`/schedule/${schedule.day}`} className="block">
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 active:scale-95">
        <div className="p-4">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-sky-500">Day {schedule.day}</span>
            <span className="flex items-center gap-0.5 text-xs font-semibold text-sky-600">
              상세 <ChevronRight className="w-3 h-3" />
            </span>
          </div>
          <span className="text-xs text-gray-400">{schedule.date}</span>
          <h3 className="text-base font-bold text-gray-900 mt-1 mb-2">{schedule.title[lang]}</h3>
          <p className="text-xs text-gray-500 mb-3 leading-relaxed">{schedule.overview[lang]}</p>
          <div className="space-y-1">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-600">
                <span className="text-gray-300">·</span>
                <span>{item.content[lang]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
