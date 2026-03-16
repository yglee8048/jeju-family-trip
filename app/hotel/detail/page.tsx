'use client';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useApp } from '../../../src/context/AppContext';
import { hotelDetailSections } from '../../../src/data/hotelDetail';

export default function HotelDetailPage() {
  const { lang } = useApp();

  return (
    <div className="px-4 pt-4 pb-8 space-y-4 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <Link href="/hotel" className="flex items-center gap-1 text-sm text-sky-600 font-medium">
          <ChevronLeft className="w-4 h-4" />
          {lang === 'ko' ? '호텔 정보' : 'ホテル情報'}
        </Link>
      </div>
      <h1 className="text-xl font-bold text-gray-800">
        {lang === 'ko' ? '숙소 세부 정보' : '宿泊施設 詳細'}
      </h1>

      {/* Sections */}
      {hotelDetailSections.map((section, i) => (
        <div key={i} className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4">
          <h2 className="text-sm font-bold text-gray-900 mb-3">{section.title[lang]}</h2>

          {section.note && !section.items && !section.subsections && (
            <p className="text-xs text-amber-600 mb-2">{section.note[lang]}</p>
          )}

          {section.note && (section.items || section.subsections) && (
            <p className="text-xs text-amber-600 mb-2">{section.note[lang]}</p>
          )}

          {section.items && (
            <ul className="space-y-1">
              {section.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-xs text-gray-600">
                  <span className="text-gray-300 mt-0.5">·</span>
                  <span>{item[lang]}</span>
                </li>
              ))}
            </ul>
          )}

          {section.subsections && (
            <div className="space-y-3">
              {section.subsections.map((sub, j) => (
                <div key={j}>
                  <div className="text-xs font-semibold text-sky-500 mb-1">{sub.label[lang]}</div>
                  <ul className="space-y-1">
                    {sub.items.map((item, k) => (
                      <li key={k} className="flex items-start gap-2 text-xs text-gray-600">
                        <span className="text-gray-300 mt-0.5">·</span>
                        <span>{item[lang]}</span>
                      </li>
                    ))}
                  </ul>
                  {sub.note && (
                    <p className="text-xs text-amber-600 mt-1">{sub.note[lang]}</p>
                  )}
                </div>
              ))}
            </div>
          )}

          {section.note && !section.note && (
            <p className="text-xs text-amber-600 mt-2">{section.note[lang]}</p>
          )}
        </div>
      ))}
    </div>
  );
}
