import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import type { DaySchedule } from '../../data/schedule';
import type { Lang } from '../../data/personas';

interface Props {
  schedule: DaySchedule;
  lang: Lang;
}

const dayColors = [
  { bg: 'bg-sky-50', border: 'border-sky-200', bar: 'bg-sky-300' },
  { bg: 'bg-[#f0faf8]', border: 'border-[#b2e4da]', bar: 'bg-[#5ec4b1]' },
  { bg: 'bg-[#f3f1ff]', border: 'border-[#c9c3f5]', bar: 'bg-[#9b8fe8]' },
  { bg: 'bg-orange-50', border: 'border-orange-200', bar: 'bg-[#e8956a]' },
];

export function DayCard({ schedule, lang }: Props) {
  const color = dayColors[schedule.day - 1];
  const highlights = schedule.timeline.filter(t => t.highlight).slice(0, 3);

  return (
    <Link href={`/schedule/${schedule.day}`}>
      <div className={`border-2 rounded-2xl overflow-hidden ${color.bg} ${color.border} transition-all duration-200 active:scale-95 hover:shadow-md`}>
        <div className={`h-1 ${color.bar}`} />
        <div className="p-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs text-gray-500">{schedule.date}</span>
            <span className="flex items-center gap-0.5 text-xs font-semibold text-sky-600">
              상세 <ChevronRight className="w-3 h-3" />
            </span>
          </div>
          <h3 className="text-base font-bold text-gray-800 mb-2">{schedule.title[lang]}</h3>
          <p className="text-xs text-gray-600 mb-3 leading-relaxed">{schedule.overview[lang]}</p>
          <div className="space-y-1">
            {highlights.map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-xs text-gray-700">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${color.bar}`} />
                <span>{item.content[lang]}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
