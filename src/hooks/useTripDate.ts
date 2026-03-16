'use client';
import { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';

const TRIP_START = new Date('2026-03-19');
const TRIP_END = new Date('2026-03-22');

export type TripPhase = 'pre' | 'day1' | 'day2' | 'day3' | 'day4' | 'post';

export function useTripDate() {
  const searchParams = useSearchParams();
  const today = useMemo(() => {
    const override = searchParams.get('date');
    if (override) {
      const d = new Date(override);
      if (!isNaN(d.getTime())) return d;
    }
    return new Date();
  }, [searchParams]);

  const phase = useMemo((): TripPhase => {
    const d = new Date(today);
    d.setHours(0, 0, 0, 0);
    const s = new Date(TRIP_START);
    s.setHours(0, 0, 0, 0);
    const e = new Date(TRIP_END);
    e.setHours(0, 0, 0, 0);

    if (d < s) return 'pre';
    if (d > e) return 'post';
    const diff = Math.floor((d.getTime() - s.getTime()) / (1000 * 60 * 60 * 24));
    return (['day1', 'day2', 'day3', 'day4'] as TripPhase[])[diff] ?? 'day4';
  }, [today]);

  const daysUntil = useMemo(() => {
    const s = new Date(TRIP_START);
    s.setHours(0, 0, 0, 0);
    const t = new Date(today);
    t.setHours(0, 0, 0, 0);
    return Math.max(0, Math.floor((s.getTime() - t.getTime()) / (1000 * 60 * 60 * 24)));
  }, [today]);

  const currentDay = useMemo(() => {
    if (phase === 'pre' || phase === 'post') return null;
    return parseInt(phase.replace('day', '')) as 1 | 2 | 3 | 4;
  }, [phase]);

  return { today, phase, daysUntil, currentDay };
}
