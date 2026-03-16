import type {Group} from './personas';

export interface RentalCar {
    id: string;
    name: { ko: string; ja: string };
    model: { ko: string; ja: string };
    type: 'gasoline' | 'electric';
    seats: number;
    pickupAt: string;
    returnBy: string;
    returnLocation: { ko: string; ja: string };
    groups: Group[];
    mileageFee?: { freeKm: number; perKmWon: string };
    chargeInfo?: { types: string[]; rangeKm: { normal: number; cold: number } };
    carSeat?: { ko: string; ja: string };
}

export const rentalCars: RentalCar[] = [
    {
        id: 'gv70',
        name: {ko: 'GV70', ja: 'GV70'},
        model: {ko: '제네시스 중형 SUV', ja: 'ジェネシス 中型SUV'},
        type: 'gasoline',
        seats: 5,
        pickupAt: '2026-03-19T12:20',
        returnBy: '2026-03-22T16:00',
        returnLocation: {ko: '제주 쏘카 터미널', ja: '済州ソカターミナル'},
        groups: ['me_gf', 'parents'],
        mileageFee: {freeKm: 30, perKmWon: '~300'},
    },
    {
        id: 'ioniq9',
        name: {ko: '아이오닉9', ja: 'IONIQ9'},
        model: {ko: '현대자동차 전기 SUV', ja: 'ヒョンデ 電気SUV'},
        type: 'electric',
        seats: 6,
        pickupAt: '2026-03-19T15:00',
        returnBy: '2026-03-21T16:00',
        returnLocation: {ko: '제주 쏘카 터미널', ja: '済州ソカターミナル'},
        groups: ['sister_family', 'parents'],
        chargeInfo: {
            types: ['급속 DC 콤보 7핀', '완속 AC 단상 5핀'],
            rangeKm: {normal: 525, cold: 401},
        },
        carSeat: {ko: '브이가드 토들러 리우 (유아용, 장착 상태로 인도)', ja: 'Vガード トドラー リウ（乳幼児用、装着済みで引渡し）'},
    },
];

export function getRentalCarById(id: string): RentalCar | undefined {
    return rentalCars.find(c => c.id === id);
}
