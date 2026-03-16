import Link from 'next/link';
import type { DaySchedule } from '../../data/schedule';
import type { Lang } from '../../data/personas';

interface Props {
  schedule: DaySchedule;
  lang: Lang;
}

const dayColors = ['bg-sky-50 border-sky-200', 'bg-green-50 border-green-200', 'bg-purple-50 border-purple-200', 'bg-orange-50 border-orange-200'];

export function DayCard({ schedule, lang }: Props) {
  const color = dayColors[schedule.day - 1];
  const highlights = schedule.timeline.filter(t => t.highlight).slice(0, 3);

  return (
    <Link href={`/schedule/${schedule.day}`}>
      <div className={`border-2 rounded-2xl p-4 ${color} transition-transform active:scale-95`}>
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs text-gray-500">{schedule.date}</span>
          <span className="text-xs font-semibold text-emerald-600">→ 상세</span>
        </div>
        <h3 className="text-base font-bold text-gray-800 mb-2">{schedule.title[lang]}</h3>
        <p className="text-xs text-gray-600 mb-3 leading-relaxed">{schedule.overview[lang]}</p>
        <div className="space-y-1">
          {highlights.map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
              <span className="text-emerald-500">•</span>
              <span>{item.content[lang]}</span>
            </div>
          ))}
        </div>
      </div>
    </Link>
  );
}
