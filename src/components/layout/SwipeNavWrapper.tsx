'use client';
import { useRef } from 'react';
import { useRouter, usePathname } from 'next/navigation';

const TABS = ['/', '/schedule', '/hotel', '/info'];
const SCHEDULE_DAYS = ['/schedule/1', '/schedule/2', '/schedule/3', '/schedule/4'];
const HOTEL_SUBS = ['/hotel/detail', '/hotel/programs'];

/** trailingSlash:true 환경에서 "/foo/" → "/foo" 정규화 */
function normalizePath(p: string) {
  return p.length > 1 ? p.replace(/\/$/, '') : p;
}
const SWIPE_THRESHOLD = 60;   // px — 이 이상 밀어야 탭 이동
const ANGLE_LIMIT = 0.5;      // tan(angle) — 수직 스크롤은 무시

export function SwipeNavWrapper({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const pathname = usePathname();
  const pathnameRef = useRef(pathname);
  pathnameRef.current = pathname;
  const startX = useRef<number | null>(null);
  const startY = useRef<number | null>(null);

  function handleTouchStart(e: React.TouchEvent) {
    startX.current = e.touches[0].clientX;
    startY.current = e.touches[0].clientY;
  }

  function handleTouchEnd(e: React.TouchEvent) {
    if (startX.current === null || startY.current === null) return;

    const dx = e.changedTouches[0].clientX - startX.current;
    const dy = e.changedTouches[0].clientY - startY.current;

    // 수직 스크롤 중이면 무시
    if (Math.abs(dy) / (Math.abs(dx) || 1) > ANGLE_LIMIT) return;
    if (Math.abs(dx) < SWIPE_THRESHOLD) return;

    const currentPath = normalizePath(pathnameRef.current);

    // 서브 라우트 체크 (TABS startsWith보다 먼저)
    const scheduleIndex = SCHEDULE_DAYS.findIndex(p => currentPath === p);
    if (scheduleIndex !== -1) {
      const next = dx < 0
        ? (scheduleIndex + 1) % SCHEDULE_DAYS.length
        : (scheduleIndex - 1 + SCHEDULE_DAYS.length) % SCHEDULE_DAYS.length;
      router.push(SCHEDULE_DAYS[next]);
      startX.current = null;
      startY.current = null;
      return;
    }

    const hotelIndex = HOTEL_SUBS.findIndex(p => currentPath === p);
    if (hotelIndex !== -1) {
      const next = dx < 0 ? hotelIndex + 1 : hotelIndex - 1;
      if (next < 0 || next >= HOTEL_SUBS.length) return;
      router.push(HOTEL_SUBS[next]);
      startX.current = null;
      startY.current = null;
      return;
    }

    const currentIndex = TABS.findIndex(t =>
      t === '/' ? currentPath === '/' : currentPath.startsWith(t)
    );
    if (currentIndex === -1) return;

    const nextIndex = dx < 0 ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex < 0 || nextIndex >= TABS.length) return;

    router.push(TABS[nextIndex]);
    startX.current = null;
    startY.current = null;
  }

  return (
    <main
      className="flex-1 pb-20"
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {children}
    </main>
  );
}
