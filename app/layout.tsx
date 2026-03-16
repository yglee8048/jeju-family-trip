import type {Metadata, Viewport} from 'next';
import {Noto_Sans_KR} from 'next/font/google';
import './globals.css';
import {AppProvider} from '@/src/context/AppContext';
import {BottomNav} from '@/src/components/layout/BottomNav';
import {Header} from '@/src/components/layout/Header';
import {SwipeNavWrapper} from '@/src/components/layout/SwipeNavWrapper';

const notoSansKR = Noto_Sans_KR({
    weight: ['400', '500', '700'],
    subsets: ['latin'],
    variable: '--font-noto-sans-kr',
    display: 'swap',
});

export const metadata: Metadata = {
    metadataBase: new URL('https://jeju-family-trip.vercel.app'),
    title: '제주 가족 여행 2026',
    description: '2026년 3월 제주 가족 여행 일정',
    icons: {
        icon: [
            {url: '/icon.ico', type: 'image/x-icon'},
            {url: '/icon.png', type: 'image/png'},
        ],
    },
    openGraph: {
        title: '제주 가족 여행 2026',
        description: '2026년 3월 제주 가족 여행 일정',
        images: [{url: '/og.png'}],
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="ko" className={notoSansKR.variable}>
        <body className="bg-gray-50 min-h-screen">
        <AppProvider>
            <div className="max-w-lg mx-auto relative min-h-screen flex flex-col">
                <Header/>
                <SwipeNavWrapper>
                    {children}
                </SwipeNavWrapper>
                <BottomNav/>
            </div>
        </AppProvider>
        </body>
        </html>
    );
}
