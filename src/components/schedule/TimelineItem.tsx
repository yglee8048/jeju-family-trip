import type { TimelineItem as TItem } from '../../data/schedule';
import type { Lang } from '../../data/personas';

interface Props {
  item: TItem;
  lang: Lang;
}

export function TimelineItem({ item, lang }: Props) {
  return (
    <div className={`flex gap-3 ${item.highlight ? '' : 'opacity-80'}`}>
      <div className="flex flex-col items-center">
        <div className={`w-3 h-3 rounded-full mt-1 flex-shrink-0 ${item.highlight ? 'bg-emerald-500' : 'bg-gray-300'}`} />
        <div className="w-0.5 bg-gray-200 flex-1 mt-1" />
      </div>
      <div className="pb-4 flex-1">
        <div className="text-xs text-gray-500 mb-0.5">{item.time}</div>
        <div className={`text-sm font-medium ${item.highlight ? 'text-gray-900' : 'text-gray-600'}`}>
          {item.content[lang]}
        </div>
        {item.note && (
          <div className="text-xs text-amber-600 mt-1">💡 {item.note[lang]}</div>
        )}
      </div>
    </div>
  );
}
