'use client';
import {useState} from 'react';
import {ChevronDown, ChevronLeft, Clock, ExternalLink, MapPin, User} from 'lucide-react';
import Link from 'next/link';
import {useApp} from '@/src/context/AppContext';
import {hotelPrograms} from '@/src/data/hotel';
import {t} from '@/src/i18n';

const categoryColors = {
    popup: 'bg-[#f0a0b8]',
    morning: 'bg-sky-300',
    afternoon: 'bg-[#5ec4b1]',
    evening: 'bg-[#9b8fe8]',
    kids: 'bg-orange-300',
    rental: 'bg-violet-400',
};

export default function HotelProgramsPage() {
    const {lang} = useApp();

    const [todayOnly, setTodayOnly] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('');
    const [resRequired, setResRequired] = useState(false);
    const [resFree, setResFree] = useState(false);

    const categories = ['popup', 'morning', 'afternoon', 'evening', 'kids', 'rental'] as const;
    const categoryLabels = {
        popup: t(lang, 'hotel.popup'),
        morning: t(lang, 'hotel.morning'),
        afternoon: t(lang, 'hotel.afternoon'),
        evening: t(lang, 'hotel.evening'),
        kids: t(lang, 'hotel.kids'),
        rental: t(lang, 'hotel.rental'),
    };

    let filtered = hotelPrograms;

    if (todayOnly) {
        const todayLabel = ['일', '월', '화', '수', '목', '금', '토'][new Date().getDay()];
        filtered = filtered.filter(p => !p.days || p.days.includes(todayLabel));
    }

    if (selectedCategory) {
        filtered = filtered.filter(p => p.category === selectedCategory);
    }

    if (resRequired && !resFree) filtered = filtered.filter(p => !p.noReservation && !!p.url);
    if (resFree && !resRequired) filtered = filtered.filter(p => p.noReservation);

    return (
        <div className="px-4 pt-4 pb-8 space-y-4 animate-fade-in">
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
                <Link href="/hotel" className="flex items-center gap-1 text-sm text-sky-600 font-medium">
                    <ChevronLeft className="w-4 h-4"/>
                    {lang === 'ko' ? '호텔 정보' : 'ホテル情報'}
                </Link>
            </div>
            <h1 className="text-xl font-bold text-gray-800">{t(lang, 'hotel.programs')}</h1>

            {/* Filter card */}
            <div className="bg-slate-100 rounded-2xl px-4 divide-y divide-slate-200">
                {/* 오늘 가능 toggle */}
                <label className="flex items-center justify-between py-2">
                    <span className="text-xs font-medium text-gray-700">
                        {lang === 'ko' ? '오늘 가능' : '今日OK'}
                    </span>
                    <div className="relative">
                        <input type="checkbox" className="sr-only peer"
                               checked={todayOnly} onChange={e => setTodayOnly(e.target.checked)}/>
                        <div className="w-9 h-5 bg-gray-200 rounded-full peer
                                        peer-checked:bg-sky-500 transition-colors"/>
                        <div className="absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full shadow
                                        transition-transform peer-checked:translate-x-4"/>
                    </div>
                </label>

                {/* 카테고리 select */}
                <div className="flex items-center justify-between py-2">
                    <span className="text-xs font-medium text-gray-700">
                        {lang === 'ko' ? '카테고리' : 'カテゴリ'}
                    </span>
                    <div className="relative">
                        <select
                            value={selectedCategory}
                            onChange={e => setSelectedCategory(e.target.value)}
                            className="appearance-none text-xs text-gray-700 bg-white border border-gray-200
                                       rounded-lg pl-3 pr-8 py-1 focus:outline-none focus:border-sky-400"
                        >
                            <option value="">{lang === 'ko' ? '전체' : '全て'}</option>
                            {categories.map(cat => (
                                <option key={cat} value={cat}>{categoryLabels[cat]}</option>
                            ))}
                        </select>
                        <ChevronDown
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"/>
                    </div>
                </div>

                {/* 예약 여부 chips */}
                <div className="flex items-center justify-between py-2">
                    <span className="text-xs font-medium text-gray-700">
                        {lang === 'ko' ? '예약' : '予約'}
                    </span>
                    <div className="flex gap-2">
                        <button
                            onClick={() => { setResRequired(v => !v); setResFree(false); }}
                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors
                                ${resRequired ? 'bg-sky-500 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-200'}`}
                        >
                            {lang === 'ko' ? '예약 필요' : '要予約'}
                        </button>
                        <button
                            onClick={() => { setResFree(v => !v); setResRequired(false); }}
                            className={`px-2.5 py-0.5 rounded-full text-xs font-medium border transition-colors
                                ${resFree ? 'bg-sky-500 text-white border-sky-500' : 'bg-white text-gray-600 border-gray-200'}`}
                        >
                            {lang === 'ko' ? '예약 불필요' : '予約不要'}
                        </button>
                    </div>
                </div>
            </div>

            {/* Result count */}
            <div className="text-xs text-gray-400 px-1">
                {lang === 'ko' ? `${filtered.length}개 프로그램` : `${filtered.length}件`}
            </div>

            {/* Program list */}
            {filtered.length === 0 ? (
                <div className="text-center text-gray-400 text-sm py-12">
                    {lang === 'ko' ? '조건에 맞는 프로그램이 없습니다' : '条件に合うプログラムがありません'}
                </div>
            ) : (
                categories.map(cat => {
                    const programs = filtered.filter(p => p.category === cat);
                    if (programs.length === 0) return null;
                    return (
                        <div key={cat} className="mb-1">
                            <div className="flex items-center gap-2 mb-2">
                                <span className={`w-2 h-2 rounded-full ${categoryColors[cat]}`}/>
                                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{categoryLabels[cat]}</h3>
                            </div>
                            <div className="space-y-2">
                                {programs.map(p => (
                                    <div key={p.id}
                                         className="bg-white rounded-xl overflow-hidden shadow-sm transition-shadow hover:shadow-md">
                                        <div className={`h-0.5 ${categoryColors[cat]}`}/>
                                        <div className="p-3 space-y-2">
                                            <div className="text-sm font-semibold text-gray-800">{p.name[lang]}</div>
                                            <div className="text-xs text-gray-500 leading-relaxed">{p.desc[lang]}</div>
                                            <div className="text-xs text-gray-400 space-y-0.5">
                                                {p.time && (
                                                    <div className="flex items-center gap-1">
                                                        <Clock className="w-3 h-3 shrink-0"/>
                                                        <span>{p.time}</span>
                                                        {p.days && <span className="text-gray-400">({p.days})</span>}
                                                    </div>
                                                )}
                                                <div className="flex items-center gap-1">
                                                    <MapPin className="w-3 h-3 shrink-0"/>
                                                    <span>{p.location[lang]}</span>
                                                </div>
                                                {p.minAge && (
                                                    <div className="flex items-center gap-1">
                                                        <User className="w-3 h-3 shrink-0"/>
                                                        <span>{p.minAge}</span>
                                                    </div>
                                                )}
                                            </div>
                                            <div className="flex items-center justify-between pt-1">
                                                {p.noReservation ? (
                                                    <span className="text-xs font-medium text-amber-600
                                                     bg-amber-50 px-2 py-0.5 rounded-full">
                                                        {t(lang, 'hotel.walkIn')}
                                                    </span>
                                                ) : p.url ? (
                                                    <a
                                                        href={p.url}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1 text-xs font-medium text-blue-500"
                                                    >
                                                        {t(lang, 'hotel.reserve')}
                                                        <ExternalLink className="w-3 h-3"/>
                                                    </a>
                                                ) : <span/>}
                                                {p.price ? (
                                                    <span className="text-xs font-semibold text-sky-600">
                                                        {p.price.toLocaleString()}{t(lang, 'hotel.won')}
                                                    </span>
                                                ) : (
                                                    <span
                                                        className="text-xs font-semibold text-gray-400">{t(lang, 'hotel.free')}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })
            )}
        </div>
    );
}
