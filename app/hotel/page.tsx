'use client';
import { ExternalLink, AlertTriangle, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useApp } from '../../src/context/AppContext';
import { hotelInfo, hotelPrograms } from '../../src/data/hotel';
import { t } from '../../src/i18n';

export default function HotelPage() {
  const { lang } = useApp();

  return (
    <div className="px-4 pt-4 pb-6 space-y-5 animate-fade-in">
      <h1 className="text-xl font-bold text-gray-800">{t(lang, 'hotel.title')}</h1>

      {/* Basic Info */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-sky-300 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="font-bold text-gray-800">{hotelInfo.name[lang]}</h2>
          <a
            href="https://jwmarriottresidencejeju.co.kr/complex-information/facility-information/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-400 hover:text-sky-600 transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
        <p className="text-sm text-gray-500">{hotelInfo.address[lang]}</p>
        <div className="flex gap-4">
          <div className="text-center">
            <div className="text-xs text-gray-400">{t(lang, 'hotel.checkIn')}</div>
            <div className="text-lg font-bold text-sky-600">{hotelInfo.checkIn}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400">{t(lang, 'hotel.checkOut')}</div>
            <div className="text-lg font-bold text-orange-500">{hotelInfo.checkOut}</div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-sky-300">
        <h2 className="font-bold text-gray-800 mb-3">{t(lang, 'hotel.facilities')}</h2>

        {/* 무료 */}
        <p className="text-xs font-semibold text-sky-500 mb-2">
          {lang === 'ko' ? '무료 이용' : '無料利用'}
        </p>
        <div className="flex flex-wrap gap-2 mb-1">
          {hotelInfo.facilities.filter(f => !f.paid).map((f, i) => (
            <span key={i} className="bg-sky-50 text-sky-700 text-xs font-medium px-3 py-1.5 rounded-full">
              {f[lang]}
            </span>
          ))}
        </div>
        <div className="flex items-start gap-1.5 text-xs text-gray-500 mt-2 mb-4">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
          <span>{hotelInfo.poolRule[lang]}</span>
        </div>

        {/* 유료 */}
        <p className="text-xs font-semibold text-orange-400 mb-2">
          {lang === 'ko' ? '유료 상품' : '有料サービス'}
        </p>
        <div className="flex flex-wrap gap-2 mb-4">
          {hotelInfo.facilities.filter(f => f.paid).map((f, i) => (
            <span key={i} className="bg-orange-50 text-orange-600 text-xs font-medium px-3 py-1.5 rounded-full">
              {f[lang]}
            </span>
          ))}
        </div>

        <div className="border-t border-gray-100 pt-3">
          <Link href="/hotel/detail" className="flex items-center justify-between text-sm text-sky-600 font-medium">
            <span>{lang === 'ko' ? '세부 정보 보기' : '詳細情報を見る'}</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Programs entry */}
      <Link href="/hotel/programs" className="block bg-white rounded-2xl p-4 shadow-sm border-l-4 border-sky-300">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-bold text-gray-800">{t(lang, 'hotel.programs')}</h2>
            <p className="text-xs text-gray-400 mt-0.5">
              {lang === 'ko' ? `${hotelPrograms.length}개 프로그램 · 예약 안내 포함` : `${hotelPrograms.length}プログラム · 予約案内あり`}
            </p>
          </div>
          <ChevronRight className="w-5 h-5 text-sky-400 flex-shrink-0" />
        </div>
      </Link>
    </div>
  );
}
