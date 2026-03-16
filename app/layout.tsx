import type { Metadata, Viewport } from 'next';
import './globals.css';
import { AppProvider } from '../src/context/AppContext';
import { BottomNav } from '../src/components/layout/BottomNav';
import { Header } from '../src/components/layout/Header';

export const metadata: Metadata = {
  title: '제주 가족 여행 2026',
  description: '2026년 3월 제주 가족 여행 일정',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body className="bg-gray-50 min-h-screen">
        <AppProvider>
          <div className="max-w-lg mx-auto relative min-h-screen flex flex-col">
            <Header />
            <main className="flex-1 pb-20">
              {children}
            </main>
            <BottomNav />
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
