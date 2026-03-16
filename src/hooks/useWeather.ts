import {useEffect, useState} from 'react';

export interface WmoInfo {
    icon: string;
    ko: string;
    ja: string;
}

export function getWmoInfo(code: number): WmoInfo {
    if (code === 0) return {icon: '☀️', ko: '맑음', ja: '晴れ'};
    if (code <= 2) return {icon: '🌤️', ko: '구름 조금', ja: '晴れ時々曇り'};
    if (code === 3) return {icon: '⛅', ko: '흐림', ja: '曇り'};
    if (code === 45 || code === 48) return {icon: '🌫️', ko: '안개', ja: '霧'};
    if (code >= 51 && code <= 55) return {icon: '🌦️', ko: '이슬비', ja: '小雨'};
    if (code >= 61 && code <= 65) return {icon: '🌧️', ko: '비', ja: '雨'};
    if (code >= 80 && code <= 82) return {icon: '🌦️', ko: '소나기', ja: 'にわか雨'};
    if (code === 95) return {icon: '⛈️', ko: '천둥번개', ja: '雷雨'};
    return {icon: '🌡️', ko: '날씨 정보', ja: '天気情報'};
}

export interface DayForecast {
    date: string;
    weatherCode: number;
    tempMax: number;
    tempMin: number;
    precipProbability: number;
}

export interface CurrentWeather {
    temperature: number;
    weatherCode: number;
    windSpeed: number;
    precipProbability: number;
}

export function useForecast() {
    const [data, setData] = useState<DayForecast[] | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=33.4996&longitude=126.5312' +
            '&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max' +
            '&timezone=Asia%2FSeoul&start_date=2026-03-19&end_date=2026-03-22'
        )
            .then(r => r.json())
            .then(json => {
                const d = json.daily;
                const days: DayForecast[] = d.time.map((date: string, i: number) => ({
                    date,
                    weatherCode: d.weather_code[i],
                    tempMax: Math.round(d.temperature_2m_max[i]),
                    tempMin: Math.round(d.temperature_2m_min[i]),
                    precipProbability: d.precipitation_probability_max[i] ?? 0,
                }));
                setData(days);
            })
            .catch(() => setData(null))
            .finally(() => setLoading(false));
    }, []);

    return {data, loading};
}

export function useCurrentWeather() {
    const [data, setData] = useState<CurrentWeather | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(
            'https://api.open-meteo.com/v1/forecast?latitude=33.4996&longitude=126.5312' +
            '&current=temperature_2m,weather_code,wind_speed_10m,precipitation_probability' +
            '&timezone=Asia%2FSeoul'
        )
            .then(r => r.json())
            .then(json => {
                const c = json.current;
                setData({
                    temperature: Math.round(c.temperature_2m),
                    weatherCode: c.weather_code,
                    windSpeed: Math.round(c.wind_speed_10m),
                    precipProbability: c.precipitation_probability ?? 0,
                });
            })
            .catch(() => setData(null))
            .finally(() => setLoading(false));
    }, []);

    return {data, loading};
}
