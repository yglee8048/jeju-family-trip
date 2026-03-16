'use client';
import { Clock, MapPin, User, ExternalLink, AlertTriangle } from 'lucide-react';
import { useApp } from '../../src/context/AppContext';
import { hotelInfo, hotelPrograms } from '../../src/data/hotel';
import { t } from '../../src/i18n';

const categoryColors = {
  popup: 'bg-[#f0a0b8]',
  morning: 'bg-sky-300',
  afternoon: 'bg-[#5ec4b1]',
  evening: 'bg-[#9b8fe8]',
};

export default function HotelPage() {
  const { lang } = useApp();

  const categories = ['popup', 'morning', 'afternoon', 'evening'] as const;
  const categoryLabels = {
    popup: t(lang, 'hotel.popup'),
    morning: t(lang, 'hotel.morning'),
    afternoon: t(lang, 'hotel.afternoon'),
    evening: t(lang, 'hotel.evening'),
  };

  return (
    <div className="px-4 pt-4 pb-6 space-y-5 animate-fade-in">
      <h1 className="text-xl font-bold text-gray-800">{t(lang, 'hotel.title')}</h1>

      {/* Basic Info */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border-l-4 border-sky-300 space-y-3">
        <h2 className="font-bold text-gray-800">{hotelInfo.name[lang]}</h2>
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
        <div className="flex flex-wrap gap-2">
          {hotelInfo.facilities.map((f, i) => (
            <span key={i} className="bg-sky-50 text-sky-700 text-xs font-medium px-3 py-1.5 rounded-full">
              {f[lang]}
            </span>
          ))}
        </div>
        <div className="flex items-start gap-1.5 text-xs text-gray-500 mt-3">
          <AlertTriangle className="w-3.5 h-3.5 text-amber-500 flex-shrink-0 mt-0.5" />
          <span>{hotelInfo.poolRule[lang]}</span>
        </div>
      </div>

      {/* Programs */}
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-3">{t(lang, 'hotel.programs')}</h2>
        {categories.map(cat => {
          const programs = hotelPrograms.filter(p => p.category === cat);
          if (programs.length === 0) return null;
          return (
            <div key={cat} className="mb-5">
              <div className="flex items-center gap-2 mb-2">
                <span className={`w-2 h-2 rounded-full ${categoryColors[cat]}`} />
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide">{categoryLabels[cat]}</h3>
              </div>
              <div className="space-y-2">
                {programs.map(p => (
                  <div key={p.id} className="bg-white rounded-xl overflow-hidden shadow-sm transition-shadow hover:shadow-md">
                    <div className={`h-0.5 ${categoryColors[cat]}`} />
                    <div className="p-3 space-y-2">
                      {/* Name row */}
                      <div className="text-sm font-semibold text-gray-800">{p.name[lang]}</div>

                      {/* Description */}
                      <div className="text-xs text-gray-500 leading-relaxed">{p.desc[lang]}</div>

                      {/* Time / location / age */}
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

                      {/* Reservation / price row */}
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
    </div>
  );
}
