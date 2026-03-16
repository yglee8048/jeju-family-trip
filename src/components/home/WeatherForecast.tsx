'use client';
import {getWmoInfo, useForecast} from '@/src/hooks/useWeather';
import type {Lang} from '@/src/data/personas';

const DAY_NAMES: Record<string, { ko: string; ja: string }> = {
    '0': {ko: '일', ja: '日'},
    '1': {ko: '월', ja: '月'},
    '2': {ko: '화', ja: '火'},
    '3': {ko: '수', ja: '水'},
    '4': {ko: '목', ja: '木'},
    '5': {ko: '금', ja: '金'},
    '6': {ko: '토', ja: '土'},
};

export function WeatherForecast({lang}: { lang: Lang }) {
    const {data, loading} = useForecast();

    if (loading) {
        return (
            <div className="animate-fade-in">
                <h2 className="text-base font-bold text-gray-800 mb-3">
                    {lang === 'ko' ? '제주 날씨 예보' : '済州島の天気予報'}
                </h2>
                <div className="flex gap-3 overflow-x-auto pb-1">
                    {[0, 1, 2, 3].map(i => (
                        <div key={i} className="flex-shrink-0 w-20 h-28 bg-gray-100 rounded-2xl animate-pulse"/>
                    ))}
                </div>
            </div>
        );
    }

    if (!data) return null;

    return (
        <div className="animate-fade-in">
            <h2 className="text-base font-bold text-gray-800 mb-3">
                {lang === 'ko' ? '제주 날씨 예보' : '済州島の天気予報'}
            </h2>
            <div className="flex gap-3 overflow-x-auto pb-1">
                {data.map((day) => {
                    const date = new Date(day.date);
                    const dayOfWeek = DAY_NAMES[String(date.getDay())][lang];
                    const wmo = getWmoInfo(day.weatherCode);
                    const label = `${date.getMonth() + 1}/${date.getDate()} (${dayOfWeek})`;

                    return (
                        <div
                            key={day.date}
                            className="flex-shrink-0 w-[4.75rem] bg-white rounded-2xl p-3 shadow-sm flex flex-col items-center gap-1"
                        >
                            <span className="text-xs text-gray-500 whitespace-nowrap">{label}</span>
                            <span className="text-2xl leading-none mt-0.5">{wmo.icon}</span>
                            <span className="text-[10px] text-gray-500 text-center leading-tight">
                                {wmo[lang]}
                            </span>
                            <div className="text-xs font-semibold text-gray-800 mt-0.5">
                                <span className="text-red-500">{day.tempMax}°</span>
                                <span className="text-gray-300 mx-0.5">/</span>
                                <span className="text-sky-500">{day.tempMin}°</span>
                            </div>
                            {day.precipProbability > 0 && (
                                <span className="text-[10px] text-sky-600">💧{day.precipProbability}%</span>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
