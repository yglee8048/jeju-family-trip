'use client';
import {getWmoInfo, useCurrentWeather} from '@/src/hooks/useWeather';
import type {Lang} from '@/src/data/personas';

export function WeatherCurrent({lang}: { lang: Lang }) {
    const {data, loading} = useCurrentWeather();

    if (loading || !data) return null;

    const wmo = getWmoInfo(data.weatherCode);

    return (
        <div className="mt-3 relative flex items-center gap-3 bg-white/20 rounded-2xl px-4 py-2.5">
            <span className="text-2xl leading-none">{wmo.icon}</span>
            <div className="flex flex-col">
                <span className="text-white font-bold text-sm leading-tight">
                    {data.temperature}°C · {wmo[lang]}
                </span>
                <span className="text-white/70 text-xs">
                    {lang === 'ko' ? `강수 ${data.precipProbability}% · 풍속 ${data.windSpeed}m/s` : `降水 ${data.precipProbability}% · 風速 ${data.windSpeed}m/s`}
                </span>
            </div>
        </div>
    );
}
