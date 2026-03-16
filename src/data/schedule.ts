import type {Group} from './personas';

export interface TimelineItem {
    time: string;
    content: { ko: string; ja: string };
    highlight?: boolean;
    groups?: Group[];
    note?: { ko: string; ja: string };
    marker?: { num: number; color: string };
}

export interface LunchCandidate {
    name: string;
    desc: { ko: string; ja: string };
}

export interface CandidateGroup {
    category: { ko: string; ja: string };
    items: LunchCandidate[];
}

export interface DaySchedule {
    day: 1 | 2 | 3 | 4;
    date: string;
    title: { ko: string; ja: string };
    overview: { ko: string; ja: string };
    timeline: TimelineItem[];
    groups?: Group[];
    candidates?: CandidateGroup[];
}

export const schedules: DaySchedule[] = [
    {
        day: 1,
        date: '2026-03-19',
        title: {ko: 'Day 1 — 제주 도착', ja: 'Day 1 — 済州島 到着'},
        overview: {
            ko: '제주 공항 도착 후 렌트카·공항 합류. 숙소 체크인 후 흑돼지 취사.',
            ja: '済州空港到着後、合流してチェックイン。夕食は黒豚焼肉。'
        },
        timeline: [
            {time: '10:40', content: {ko: '김포 출발 (TW709)', ja: '金浦出発 (TW709)'}, groups: ['me_gf']},
            {
                time: '11:55',
                content: {ko: '제주 공항 도착', ja: '済州空港 到着'},
                groups: ['me_gf'],
                highlight: true,
                marker: {num: 1, color: '#8C55F8'}
            },
            {time: '12:00', content: {ko: '오사카 간사이 출발 (TW332)', ja: '大阪関西出発 (TW332)'}, groups: ['sister_family']},
            {
                time: '12:20',
                content: {ko: 'GV70 렌트카 수령', ja: 'GV70 レンタカー受取'},
                groups: ['me_gf'],
                highlight: true
            },
            {
                time: '12:30 ~ 13:30',
                content: {ko: '점심 식사', ja: 'ランチ'},
                groups: ['me_gf'],
                marker: {num: 2, color: '#F85F61'}
            },
            {
                time: '14:00',
                content: {ko: '제주 공항 도착', ja: '済州空港 到着'},
                groups: ['sister_family'],
                highlight: true,
                marker: {num: 1, color: '#8C55F8'}
            },
            {time: '14:30', content: {ko: '김포 출발 (TW719)', ja: '金浦出発 (TW719)'}, groups: ['parents']},
            {
                time: '15:00',
                content: {ko: '아이오닉9 렌트카 수령', ja: 'IONIQ9 レンタカー受取'},
                groups: ['parents'],
                highlight: true
            },
            {
                time: '15:45',
                content: {ko: '제주 공항 도착', ja: '済州空港 到着'},
                groups: ['parents'],
                highlight: true,
                marker: {num: 1, color: '#8C55F8'}
            },
            {
                time: '15:45',
                content: {ko: '부모님 제주 도착 / 아이오닉9 합류', ja: '両親 済州到着 / IONIQ9 合流'},
                groups: ['sister_family'],
                highlight: true
            },
            {time: '16:15 ~ 16:30', content: {ko: '공항에서 전원 합류', ja: '空港で全員合流'}, highlight: true},
            {
                time: '약 17:30',
                content: {ko: '숙소 도착 및 체크인 (JW 메리어트 레지던스 제주)', ja: 'チェックイン (JWマリオット レジデンス 済州)'},
                highlight: true,
                marker: {num: 3, color: '#3BC4B8'}
            },
            {time: '저녁', content: {ko: '숙소에서 제주 흑돼지 구이', ja: '宿で済州黒豚焼肉'}, highlight: true},
        ],
        candidates: [
            {
                category: {ko: '점심 후보', ja: 'ランチ候補'},
                items: [
                    {name: '산우정', desc: {ko: '제주 흑돼지 수육', ja: '済州黒豚スユク'}},
                    {name: '한림 칼국수', desc: {ko: '생선 칼국수', ja: '魚介カルグクス'}},
                ],
            },
        ],
    },
    {
        day: 2,
        date: '2026-03-20',
        title: {ko: 'Day 2 — 성산 & 아쿠아플라넷', ja: 'Day 2 — 城山 & アクアプラネット'},
        overview: {
            ko: '호텔 조식 후 성산 유채꽃 재배단지. 가족 스냅 사진 촬영. 아쿠아플라넷 관람. 저녁은 회.',
            ja: 'ホテル朝食後、城山 菜の花畑へ。家族スナップ撮影。アクアプラネット見学。夕食は刺身。'
        },
        timeline: [
            {
                time: '07:30 ~ 09:00',
                content: {ko: '호텔 조식', ja: 'ホテル朝食'},
                highlight: true,
                marker: {num: 1, color: '#3BC4B8'}
            },
            {time: '09:30', content: {ko: '숙소 출발 (차량 2대)', ja: '宿出発（2台）'}},
            {
                time: '약 10:20',
                content: {ko: '성산 유채꽃 재배단지 도착', ja: '城山 菜の花畑 到着'},
                highlight: true,
                marker: {num: 2, color: '#8C55F8'}
            },
            {time: '10:20 ~ 11:00', content: {ko: '유채꽃밭 자유 산책', ja: '菜の花畑 散策'}},
            {time: '11:00 ~ 12:00', content: {ko: '가족 스냅 사진 촬영', ja: 'ファミリースナップ撮影'}, highlight: true},
            {
                time: '12:00 ~ 13:00',
                content: {ko: '점심 식사 (고기국수)', ja: 'ランチ（豚肉麺）'},
                highlight: true,
                marker: {num: 3, color: '#F85F61'}
            },
            {
                time: '13:30 ~ 15:30',
                content: {ko: '아쿠아플라넷 제주 관람', ja: 'アクアプラネット済州 見学'},
                highlight: true,
                marker: {num: 4, color: '#8C55F8'}
            },
            {time: '약 16:00', content: {ko: '하나로마트 — 회 구매', ja: 'ハナロマート — 刺身購入'}},
            {time: '약 16:30', content: {ko: '숙소 도착', ja: '宿到着'}},
            {time: '16:30 ~', content: {ko: '수영장 / 자유 시간', ja: 'プール / 自由時間'}},
            {
                time: '저녁',
                content: {ko: '숙소에서 회 취식', ja: '宿で刺身'},
                highlight: true,
                marker: {num: 5, color: '#3BC4B8'}
            },
        ],
        candidates: [
            {
                category: {ko: '점심 후보 (고기국수)', ja: 'ランチ候補（豚肉麺）'},
                items: [
                    {name: '어우름', desc: {ko: '제주 흑돼지 고기국수', ja: '済州黒豚 肉麺'}},
                    {name: '꽃가람', desc: {ko: '고기국수 / 비빔국수', ja: '肉麺 / ビビム麺'}},
                    {name: '삼무 국수', desc: {ko: '고기국수', ja: '肉麺'}},
                ],
            },
        ],
    },
    {
        day: 3,
        date: '2026-03-21',
        title: {ko: 'Day 3 — 새별 프렌즈 & 누나 가족 귀국', ja: 'Day 3 — セビョルフレンズ & 姉家族帰国'},
        overview: {
            ko: '새별 프렌즈 체험 후 애월 점심. 누나 가족 공항 배웅. 이후 마노 커피하우스(중문)에서 커피 타임 후 올레마당 저녁 식사, 오레브 온천.',
            ja: 'セビョルフレンズ体験後、涯月でランチ。姉家族を見送り。マノコーヒーハウスでコーヒータイム後、夕食、オレブ温泉へ。'
        },
        timeline: [
            {
                time: '07:30 ~ 08:30',
                content: {ko: '아침 식사 — 오는 정 김밥 + 라면', ja: '朝食 — キンパブ + ラーメン'},
                highlight: true,
                marker: {num: 2, color: '#F85F61'}
            },
            {time: '09:00', content: {ko: '숙소 출발 (차량 2대)', ja: '宿出発（2台）'}},
            {
                time: '약 10:00',
                content: {ko: '새별 프렌즈 도착', ja: 'セビョルフレンズ 到着'},
                highlight: true,
                marker: {num: 3, color: '#8C55F8'}
            },
            {time: '10:00 ~ 11:30', content: {ko: '새별 프렌즈 체험', ja: 'セビョルフレンズ 体験'}, highlight: true},
            {
                time: '12:00 ~ 13:00',
                content: {ko: '점심 식사 (애월)', ja: 'ランチ（涯月）'},
                highlight: true,
                marker: {num: 4, color: '#F85F61'}
            },
            {
                time: '약 13:30',
                content: {ko: '제주 공항 도착', ja: '済州空港 到着'},
                groups: ['me_gf', 'parents', 'sister_family']
            },
            {
                time: '14:00 ~ 15:00',
                content: {ko: '누나 가족 배웅 (TW331 게이트 입장)', ja: '姉家族お見送り (TW331)'},
                highlight: true,
                marker: {num: 5, color: '#8C55F8'}
            },
            {time: '15:00', content: {ko: '아이오닉9 반납', ja: 'IONIQ9 返却'}, groups: ['me_gf', 'parents']},
            {time: '16:00', content: {ko: '오사카 도착', ja: '大阪到着'}, groups: ['sister_family']},
            {
                time: '15:10 ~ 16:00',
                content: {ko: '공항 → 마노 커피하우스 이동 (약 50분)', ja: '空港 → マノコーヒーハウス 移動（約50分）'},
                groups: ['me_gf', 'parents']
            },
            {
                time: '16:00 ~ 16:40',
                content: {ko: '마노 커피하우스 커피 타임 (중문)', ja: 'マノコーヒーハウス コーヒータイム（中文）'},
                groups: ['me_gf', 'parents'],
                highlight: true,
                marker: {num: 6, color: '#F85F61'}
            },
            {
                time: '16:40 ~ 17:00',
                content: {ko: '마노 커피하우스 → 올레마당 이동 (약 15~20분)', ja: 'マノコーヒーハウス → オルレマダン 移動（約15〜20分）'},
                groups: ['me_gf', 'parents']
            },
            {
                time: '17:00 ~ 18:30',
                content: {ko: '올레마당 저녁 식사 (고등어 구이 / 갈치 조림)', ja: 'オルレマダン夕食（サバ焼き / タチウオ煮）'},
                groups: ['me_gf', 'parents'],
                highlight: true,
                marker: {num: 7, color: '#F85F61'}
            },
            {
                time: '19:00 ~ 20:30',
                content: {ko: '오레브 핫 스프링 앤 스파', ja: 'オレブ ホットスプリング＆スパ'},
                groups: ['me_gf', 'parents'],
                highlight: true,
                marker: {num: 8, color: '#3BC4B8'}
            },
        ],
        candidates: [
            {
                category: {ko: '점심 후보 (애월)', ja: 'ランチ候補（涯月）'},
                items: [
                    {name: '해녀뜰', desc: {ko: '전복죽 / 미역국 정식', ja: 'アワビ粥 / ワカメスープ定食'}},
                    {name: '보배쌤 보리김치와 게장 하귀점', desc: {ko: '게장 / 성게미역국 정식', ja: 'カニ醤油漬け / ウニわかめスープ定食'}},
                ],
            },
        ],
    },
    {
        day: 4,
        date: '2026-03-22',
        title: {ko: 'Day 4 — 귀가', ja: 'Day 4 — 帰宅'},
        overview: {
            ko: '마지막 날. 체크아웃 후 점심 식사 및 커피. GV70 반납 후 공항에서 서울로.',
            ja: '最終日。チェックアウト後ランチとコーヒー。GV70返却後、空港からソウルへ。'
        },
        groups: ['me_gf', 'parents'],
        timeline: [
            {time: '아침', content: {ko: '숙소 휴식 / 수영장 마지막 이용', ja: '宿で休息 / プール最終利用'}},
            {
                time: '11:00',
                content: {ko: '체크아웃', ja: 'チェックアウト'},
                highlight: true,
                marker: {num: 1, color: '#3BC4B8'}
            },
            {
                time: '12:00 ~ 13:00',
                content: {ko: '점심 식사', ja: 'ランチ'},
                highlight: true,
                marker: {num: 2, color: '#F85F61'}
            },
            {
                time: '13:00 ~ 13:30',
                content: {ko: '마노 커피 하우스 (말차 라떼)', ja: 'マノコーヒーハウス（抹茶ラテ）'},
                highlight: true
            },
            {time: '약 14:15', content: {ko: 'GV70 반납 (제주 쏘카 터미널)', ja: 'GV70 返却（済州ソカターミナル）'}},
            {
                time: '15:15',
                content: {ko: '제주 출발 (TW718)', ja: '済州出発 (TW718)'},
                highlight: true,
                marker: {num: 3, color: '#8C55F8'}
            },
            {time: '16:30', content: {ko: '김포 도착', ja: '金浦到着'}, highlight: true},
        ],
        candidates: [
            {
                category: {ko: '점심 후보', ja: 'ランチ候補'},
                items: [
                    {name: '행복한 시저네', desc: {ko: '흑돼지 짜글이', ja: '黒豚チャグルイ'}},
                    {name: '맨도롱 해장국', desc: {ko: '겡이국 / 몸국', ja: 'ゲンギクク / モムクク'}},
                    {name: '공천포 식당', desc: {ko: '물회', ja: 'ムルフェ（水刺身）'}},
                ],
            },
        ],
    },
];

export function getScheduleByDay(day: number): DaySchedule | undefined {
    return schedules.find(s => s.day === day);
}
