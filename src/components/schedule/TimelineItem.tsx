import {Clock, Lightbulb} from 'lucide-react';
import type {TimelineItem as TItem} from '../../data/schedule';
import type {Lang} from '../../data/personas';

interface Props {
    item: TItem;
    lang: Lang;
}

export function TimelineItem({item, lang}: Props) {
    return (
        <div className={`flex gap-3 ${item.highlight ? '' : 'opacity-75'}`}>
            <div className="flex flex-col items-center">
                <div className={`w-3 h-3 rounded-full mt-1 shrink-0 ${item.highlight ? 'bg-sky-400' : 'bg-gray-300'}`}/>
                <div className="w-0.5 bg-gray-200 flex-1 mt-1"/>
            </div>
            <div className="pb-4 flex-1">
                <div className="flex items-center gap-1 text-xs text-gray-400 mb-0.5">
                    <Clock className="w-3 h-3"/>
                    <span>{item.time}</span>
                </div>
                <div className={`text-sm font-medium ${item.highlight ? 'text-gray-900' : 'text-gray-600'}`}>
                    {item.content[lang]}
                </div>
                {item.note && (
                    <div className="flex items-start gap-1 text-xs text-amber-600 mt-1">
                        <Lightbulb className="w-3 h-3 mt-0.5 shrink-0"/>
                        <span>{item.note[lang]}</span>
                    </div>
                )}
            </div>
        </div>
    );
}
