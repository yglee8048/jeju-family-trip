'use client';
import { useApp } from '../../src/context/AppContext';
import { hotelInfo, hotelPrograms } from '../../src/data/hotel';
import { t } from '../../src/i18n';

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
    <div className="px-4 pt-4 pb-6 space-y-5">
      <h1 className="text-xl font-bold text-gray-800">{t(lang, 'hotel.title')}</h1>

      {/* Basic Info */}
      <div className="bg-white rounded-2xl p-4 shadow-sm space-y-3">
        <h2 className="font-bold text-gray-800">{hotelInfo.name[lang]}</h2>
        <p className="text-sm text-gray-500">{hotelInfo.address[lang]}</p>
        <div className="flex gap-4">
          <div className="text-center">
            <div className="text-xs text-gray-400">{t(lang, 'hotel.checkIn')}</div>
            <div className="text-lg font-bold text-emerald-600">{hotelInfo.checkIn}</div>
          </div>
          <div className="text-center">
            <div className="text-xs text-gray-400">{t(lang, 'hotel.checkOut')}</div>
            <div className="text-lg font-bold text-orange-500">{hotelInfo.checkOut}</div>
          </div>
        </div>
      </div>

      {/* Facilities */}
      <div className="bg-white rounded-2xl p-4 shadow-sm">
        <h2 className="font-bold text-gray-800 mb-3">{t(lang, 'hotel.facilities')}</h2>
        <div className="flex flex-wrap gap-2">
          {hotelInfo.facilities.map((f, i) => (
            <span key={i} className="bg-emerald-50 text-emerald-700 text-xs font-medium px-3 py-1.5 rounded-full">
              {f[lang]}
            </span>
          ))}
        </div>
        <p className="text-xs text-gray-500 mt-3">⚠️ {hotelInfo.poolRule[lang]}</p>
      </div>

      {/* Programs */}
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-3">{t(lang, 'hotel.programs')}</h2>
        {categories.map(cat => {
          const programs = hotelPrograms.filter(p => p.category === cat);
          if (programs.length === 0) return null;
          return (
            <div key={cat} className="mb-5">
              <h3 className="text-sm font-semibold text-gray-500 mb-2 uppercase tracking-wide">{categoryLabels[cat]}</h3>
              <div className="space-y-2">
                {programs.map(p => (
                  <div key={p.id} className="bg-white rounded-xl p-3 shadow-sm space-y-2">
                    {/* Name row */}
                    <div className="text-sm font-semibold text-gray-800">{p.name[lang]}</div>

                    {/* Description */}
                    <div className="text-xs text-gray-500 leading-relaxed">{p.desc[lang]}</div>

                    {/* Time / location / age */}
                    <div className="text-xs text-gray-400 space-y-0.5">
                      <div>
                        🕐 {p.time}
                        {p.days && <span className="ml-2 text-gray-400">({p.days})</span>}
                      </div>
                      <div>📍 {p.location[lang]}</div>
                      {p.minAge && <div>👤 {p.minAge}</div>}
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
                          className="text-xs font-medium text-blue-500"
                        >
                          {t(lang, 'hotel.reserve')} →
                        </a>
                      ) : <span />}

                      {p.price ? (
                        <span className="text-xs font-semibold text-emerald-600">
                          {p.price.toLocaleString()}{t(lang, 'hotel.won')}
                        </span>
                      ) : (
                        <span className="text-xs font-semibold text-gray-400">{t(lang, 'hotel.free')}</span>
                      )}
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
