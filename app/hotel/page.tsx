'use client';
import { useApp } from '../../src/context/AppContext';
import { hotelInfo, hotelPrograms } from '../../src/data/hotel';
import { t } from '../../src/i18n';

export default function HotelPage() {
  const { lang } = useApp();

  const categories = ['morning', 'afternoon', 'evening'] as const;
  const categoryLabels = {
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
          return (
            <div key={cat} className="mb-4">
              <h3 className="text-sm font-semibold text-gray-600 mb-2">{categoryLabels[cat]}</h3>
              <div className="space-y-2">
                {programs.map(p => (
                  <div key={p.id} className="bg-white rounded-xl p-3 shadow-sm flex items-start justify-between gap-3">
                    <div>
                      <div className="text-sm font-medium text-gray-800">{p.name[lang]}</div>
                      <div className="text-xs text-gray-500 mt-0.5">{p.desc[lang]}</div>
                    </div>
                    {p.price ? (
                      <span className="text-xs font-semibold text-emerald-600 whitespace-nowrap">
                        {p.price.toLocaleString()}{t(lang, 'hotel.won')}
                      </span>
                    ) : (
                      <span className="text-xs font-semibold text-gray-400">{t(lang, 'hotel.free')}</span>
                    )}
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
