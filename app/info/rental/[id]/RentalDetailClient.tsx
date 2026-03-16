'use client';
import Link from 'next/link';
import {ChevronLeft, Car, Zap, Users, Clock, MapPin, Gauge, Battery, Baby} from 'lucide-react';
import {useApp} from '@/src/context/AppContext';
import {getRentalCarById} from '@/src/data/rental';

export default function RentalDetailClient({id}: {id: string}) {
    const {lang} = useApp();
    const car = getRentalCarById(id);

    if (!car) {
        return (
            <div className="px-4 pt-4 pb-8">
                <Link href="/info" className="flex items-center gap-1 text-sm text-sky-600 font-medium mb-4">
                    <ChevronLeft className="w-4 h-4"/>
                    {lang === 'ko' ? '여행 정보' : '旅行情報'}
                </Link>
                <p className="text-gray-500 text-sm">{lang === 'ko' ? '차량을 찾을 수 없습니다.' : '車両が見つかりません。'}</p>
            </div>
        );
    }

    const isElectric = car.type === 'electric';

    const formatDateTime = (iso: string) => {
        const d = new Date(iso);
        const month = d.getMonth() + 1;
        const day = d.getDate();
        const hour = String(d.getHours()).padStart(2, '0');
        const min = String(d.getMinutes()).padStart(2, '0');
        if (lang === 'ko') return `${month}월 ${day}일 ${hour}:${min}`;
        return `${month}月${day}日 ${hour}:${min}`;
    };

    return (
        <div className="px-4 pt-4 pb-8 space-y-4 animate-fade-in">
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
                <Link href="/info" className="flex items-center gap-1 text-sm text-sky-600 font-medium">
                    <ChevronLeft className="w-4 h-4"/>
                    {lang === 'ko' ? '여행 정보' : '旅行情報'}
                </Link>
            </div>

            <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isElectric ? 'bg-green-100' : 'bg-sky-100'}`}>
                    {isElectric
                        ? <Zap className="w-5 h-5 text-green-600"/>
                        : <Car className="w-5 h-5 text-sky-600"/>
                    }
                </div>
                <div>
                    <h1 className="text-xl font-bold text-gray-800">{car.name[lang]}</h1>
                    <p className="text-sm text-gray-500">{car.model[lang]}</p>
                </div>
            </div>

            {/* Basic info */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 space-y-3">
                <h2 className="text-sm font-bold text-gray-700">
                    {lang === 'ko' ? '기본 정보' : '基本情報'}
                </h2>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                    {isElectric
                        ? <Zap className="w-4 h-4 text-green-500 shrink-0"/>
                        : <Car className="w-4 h-4 text-sky-500 shrink-0"/>
                    }
                    <span>
                        {isElectric
                            ? (lang === 'ko' ? '전기차' : '電気自動車')
                            : (lang === 'ko' ? '휘발유' : 'ガソリン')
                        }
                    </span>
                </div>

                <div className="flex items-center gap-3 text-sm text-gray-600">
                    <Users className="w-4 h-4 text-sky-500 shrink-0"/>
                    <span>
                        {lang === 'ko' ? `${car.seats}인승` : `${car.seats}人乗り`}
                    </span>
                </div>
            </div>

            {/* Schedule */}
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 space-y-3">
                <h2 className="text-sm font-bold text-gray-700">
                    {lang === 'ko' ? '일정' : 'スケジュール'}
                </h2>

                <div className="flex items-start gap-3 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-sky-500 mt-0.5 shrink-0"/>
                    <div>
                        <div className="text-xs text-gray-400 mb-0.5">
                            {lang === 'ko' ? '인도' : '引渡し'}
                        </div>
                        <div>{formatDateTime(car.pickupAt)}</div>
                    </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-gray-600">
                    <Clock className="w-4 h-4 text-orange-400 mt-0.5 shrink-0"/>
                    <div>
                        <div className="text-xs text-gray-400 mb-0.5">
                            {lang === 'ko' ? '반납' : '返却'}
                        </div>
                        <div>{formatDateTime(car.returnBy)}</div>
                    </div>
                </div>

                <div className="flex items-start gap-3 text-sm text-gray-600">
                    <MapPin className="w-4 h-4 text-rose-400 mt-0.5 shrink-0"/>
                    <div>
                        <div className="text-xs text-gray-400 mb-0.5">
                            {lang === 'ko' ? '반납 장소' : '返却場所'}
                        </div>
                        <div>{car.returnLocation[lang]}</div>
                    </div>
                </div>
            </div>

            {/* Mileage (gasoline) */}
            {car.mileageFee && (
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 space-y-2">
                    <h2 className="text-sm font-bold text-gray-700 mb-1">
                        {lang === 'ko' ? '주행 요금' : '走行料金'}
                    </h2>
                    <div className="flex items-center gap-3 text-sm text-gray-600">
                        <Gauge className="w-4 h-4 text-sky-500 shrink-0"/>
                        <span>
                            {lang === 'ko'
                                ? `일 ${car.mileageFee.freeKm}km 무료, 초과 시 km당 ${car.mileageFee.perKmWon.toLocaleString()}원`
                                : `1日${car.mileageFee.freeKm}km無料、超過時 ${car.mileageFee.perKmWon.toLocaleString()}ウォン/km`
                            }
                        </span>
                    </div>
                </div>
            )}

            {/* Charge info (electric) */}
            {car.chargeInfo && (
                <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-4 space-y-3">
                    <h2 className="text-sm font-bold text-gray-700">
                        {lang === 'ko' ? '충전 정보' : '充電情報'}
                    </h2>

                    <div className="flex items-start gap-3 text-sm text-gray-600">
                        <Battery className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/>
                        <div>
                            <div className="text-xs text-gray-400 mb-1">
                                {lang === 'ko' ? '충전 규격' : '充電規格'}
                            </div>
                            <ul className="space-y-0.5">
                                {car.chargeInfo.types.map((type, i) => (
                                    <li key={i}>{type}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <div className="flex items-start gap-3 text-sm text-gray-600">
                        <Zap className="w-4 h-4 text-green-500 mt-0.5 shrink-0"/>
                        <div>
                            <div className="text-xs text-gray-400 mb-0.5">
                                {lang === 'ko' ? '주행 가능 거리' : '航続距離'}
                            </div>
                            <div>
                                {lang === 'ko'
                                    ? `상온 ${car.chargeInfo.rangeKm.normal}km / 저온 ${car.chargeInfo.rangeKm.cold}km`
                                    : `通常時 ${car.chargeInfo.rangeKm.normal}km / 低温時 ${car.chargeInfo.rangeKm.cold}km`
                                }
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Car seat */}
            {car.carSeat && (
                <div className="bg-amber-50 border border-amber-100 rounded-2xl shadow-sm p-4">
                    <div className="flex items-start gap-3 text-sm text-amber-800">
                        <Baby className="w-4 h-4 mt-0.5 shrink-0 text-amber-500"/>
                        <div>
                            <div className="font-semibold mb-0.5">
                                {lang === 'ko' ? '카시트' : 'チャイルドシート'}
                            </div>
                            <div className="text-xs">{car.carSeat[lang]}</div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
