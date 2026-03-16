'use client';
import { useApp } from '../../src/context/AppContext';
import { flights } from '../../src/data/flights';
import { t } from '../../src/i18n';

export default function InfoPage() {
  const { lang, persona } = useApp();

  const myFlights = persona
    ? flights.filter(f => f.group === persona.group)
    : flights;

  const rentInfo = {
    gv70: { name: 'GV70', period: '2026-03-19 12:20 ~ 2026-03-22 16:00', fuel: { ko: '휘발유', ja: 'ガソリン' } },
    ioniq9: { name: '아이오닉9', period: '2026-03-19 15:00 ~ 2026-03-21 16:00', fuel: { ko: '전기', ja: '電気' } },
  };

  return (
    <div className="px-4 pt-4 pb-6 space-y-5">
      <h1 className="text-xl font-bold text-gray-800">{t(lang, 'info.title')}</h1>

      {/* Flights */}
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-3">{t(lang, 'info.flight')}</h2>
        <div className="space-y-2">
          {myFlights.map((f, i) => (
            <div key={i} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${f.direction === 'depart' ? 'bg-sky-100 text-sky-700' : 'bg-orange-100 text-orange-700'}`}>
                  {t(lang, `info.${f.direction}`)}
                </span>
                <span className="text-xs text-gray-400">{f.date}</span>
              </div>
              <div className="text-base font-bold text-gray-800">{f.route[lang]}</div>
              <div className="flex items-center gap-2 mt-1">
                <span className="text-sm font-semibold text-sky-600">{f.departure}</span>
                <span className="text-gray-300">→</span>
                <span className="text-sm font-semibold text-gray-700">{f.arrival}</span>
                <span className="text-xs text-gray-400 ml-auto">{f.flight}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rent */}
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-3">{t(lang, 'info.rent')}</h2>
        <div className="space-y-2">
          {Object.entries(rentInfo).map(([key, car]) => (
            <div key={key} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="font-bold text-gray-800 mb-1">{car.name}</div>
              <div className="text-xs text-gray-500">{car.period}</div>
              <div className="text-xs text-gray-500 mt-1">{car.fuel[lang]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Tips */}
      <div>
        <h2 className="text-base font-bold text-gray-800 mb-3">{t(lang, 'info.tips')}</h2>
        <div className="bg-white rounded-xl p-4 shadow-sm space-y-2">
          {[
            { ko: '공항 → 숙소 이동시간 약 1시간', ja: '空港 → 宿泊先 移動時間 約1時間' },
            { ko: '수영복 필수 지참 (수영장 + 온천)', ja: '水着必須（プール + 温泉）' },
            { ko: '시우 취침 시간: 19:00~20:00', ja: 'シウの就寝時間: 19:00~20:00' },
            { ko: '체크인 18:00 이전: 레지던스 로비 / 이후: 호텔 로비', ja: 'チェックイン 18:00前: レジデンスロビー / 以降: ホテルロビー' },
          ].map((tip, i) => (
            <div key={i} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-sky-400 mt-0.5">•</span>
              <span>{tip[lang]}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
