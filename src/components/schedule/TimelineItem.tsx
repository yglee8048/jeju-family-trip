import {Clock, ExternalLink, Lightbulb} from 'lucide-react';
import type {TimelineItem as TItem} from '../../data/schedule';
import type {Lang} from '../../data/personas';
import {ko} from '../../i18n/ko';
import {ja} from '../../i18n/ja';

interface Props {
    item: TItem;
    lang: Lang;
}

export function TimelineItem({item, lang}: Props) {
    const t = lang === 'ko' ? ko.schedule : ja.schedule;

    return (
        <div className={`flex gap-3 ${item.highlight ? '' : 'opacity-75'}`}>
            <div className="flex flex-col items-center">
                {item.marker ? (
                    <div
                        className="w-5 h-5 rounded-full mt-0.5 shrink-0 flex items-center justify-center text-[10px] font-bold text-white"
                        style={{backgroundColor: item.marker.color}}
                    >
                        {item.marker.num}
                    </div>
                ) : (
                    <div className={`w-3 h-3 rounded-full mt-1 shrink-0 ${item.highlight ? 'bg-sky-400' : 'bg-gray-300'}`}/>
                )}
                <div className="w-0.5 bg-gray-200 flex-1 mt-1"/>
            </div>
            <div className="pb-4 flex-1 min-w-0">
                <div className="flex items-center gap-1 text-xs text-gray-400 mb-0.5">
                    <Clock className="w-3 h-3 shrink-0"/>
                    <span>{item.time}</span>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                    <span className={`text-sm font-medium ${item.highlight ? 'text-gray-900' : 'text-gray-600'}`}>
                        {item.content[lang]}
                    </span>
                    {item.url && (
                        <a
                            href={item.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-0.5 text-xs text-blue-500 shrink-0"
                        >
                            <ExternalLink className="w-3 h-3"/>
                            {t.map}
                        </a>
                    )}
                </div>
                {item.note && (
                    <div className="flex items-start gap-1 text-xs text-amber-600 mt-1">
                        <Lightbulb className="w-3 h-3 mt-0.5 shrink-0"/>
                        <span>{item.note[lang]}</span>
                    </div>
                )}
                {item.candidates && item.candidates.length > 0 && (
                    <div className="mt-2 rounded-xl bg-gray-50 border border-gray-100 overflow-hidden">
                        <div className="px-3 py-1.5 text-[10px] font-semibold text-gray-400 uppercase tracking-wide">
                            {t.candidates}
                        </div>
                        {item.candidates.map((c, i) => (
                            <div
                                key={i}
                                className="flex items-center px-3 py-2 gap-2 border-t border-gray-100"
                            >
                                <div className="flex-1 min-w-0">
                                    <span className="text-sm font-medium text-gray-800">{c.name}</span>
                                    <span className="text-xs text-gray-400 ml-1.5">{c.desc[lang]}</span>
                                </div>
                                {c.url && (
                                    <a
                                        href={c.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="shrink-0 text-blue-400 hover:text-blue-600"
                                    >
                                        <ExternalLink className="w-3.5 h-3.5"/>
                                    </a>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
