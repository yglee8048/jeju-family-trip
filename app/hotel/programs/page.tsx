'use client';
import { Clock, MapPin, User, ExternalLink, ChevronLeft } from 'lucide-react';
import Link from 'next/link';
import { useApp } from '../../../src/context/AppContext';
import { hotelPrograms } from '../../../src/data/hotel';
import { t } from '../../../src/i18n';

const categoryColors = {
  popup: 'bg-[#f0a0b8]',
  morning: 'bg-sky-300',
  afternoon: 'bg-[#5ec4b1]',
  evening: 'bg-[#9b8fe8]',
};

export default function HotelProgramsPage() {
  const { lang } = useApp();

  const categories = ['popup', 'morning', 'afternoon', 'evening'] as const;
  const categoryLabels = {
    popup: t(lang, 'hotel.popup'),
    morning: t(lang, 'hotel.morning'),
    afternoon: t(lang, 'hotel.afternoon'),
    evening: t(lang, 'hotel.evening'),
  };

  return (
    <div className="px-4 pt-4 pb-8 space-y-4 animate-fade-in">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <Link href="/hotel" className="flex items-center gap-1 text-sm text-sky-600 font-medium">
          <ChevronLeft className="w-4 h-4" />
          {lang === 'ko' ? '호텔 정보' : 'ホテル情報'}
        </Link>
      </div>
      <h1 className="text-xl font-bold text-gray-800">{t(lang, 'hotel.programs')}</h1>

      {categories.map(cat => {
        const programs = hotelPrograms.filter(p => p.category === cat);
        if (programs.length === 0) return null;
        return (
          <div key={cat} className="mb-1">
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2 h-2 rounded-full ${categoryColors[cat]}`} />
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{categoryLabels[cat]}</h3>
            </div>
            <div className="space-y-2">
              {programs.map(p => (
                <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow-sm transition-shadow hover:shadow-md">
                  <div className={`h-0.5 ${categoryColors[cat]}`} />
                  <div className="p-3 space-y-2">
                    <div className="text-sm font-semibold text-gray-800">{p.name[lang]}</div>
                    <div className="text-xs text-gray-500 leading-relaxed">{p.desc[lang]}</div>
                    <div className="text-xs text-gray-400 space-y-0.5">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3 flex-shrink-0" />
                        <span>{p.time}</span>
                        {p.days && <span className="text-gray-400">({p.days})</span>}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3 flex-shrink-0" />
                        <span>{p.location[lang]}</span>
                      </div>
                      {p.minAge && (
                        <div className="flex items-center gap-1">
                          <User className="w-3 h-3 flex-shrink-0" />
                          <span>{p.minAge}</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-1">
                      {p.noReservation ? (
                        <span className="text-xs font-medium text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full">
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
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      ) : <span />}
                      {p.price ? (
                        <span className="text-xs font-semibold text-sky-600">
                          {p.price.toLocaleString()}{t(lang, 'hotel.won')}
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-gray-400">{t(lang, 'hotel.free')}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
