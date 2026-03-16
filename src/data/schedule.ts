import type { Group } from './personas';

export interface TimelineItem {
  time: string;
  content: { ko: string; ja: string };
  highlight?: boolean;
  groups?: Group[];
  note?: { ko: string; ja: string };
}

export interface DaySchedule {
  day: 1 | 2 | 3 | 4;
  date: string;
  title: { ko: string; ja: string };
  overview: { ko: string; ja: string };
  timeline: TimelineItem[];
  groups?: Group[];
}

export const schedules: DaySchedule[] = [
  {
    day: 1,
    date: '2026-03-19',
    title: { ko: 'Day 1 — 제주 도착', ja: 'Day 1 — 済州島 到着' },
    overview: { ko: '제주 도착 후 렌트카 수령. 전원 합류 후 숙소 체크인. 저녁은 흑돼지 취사.', ja: '済州島到着後、レンタカー受取。全員合流後チェックイン。夕食は黒豚バーベキュー。' },
    timeline: [
      { time: '10:40', content: { ko: '김포 출발 (TW709)', ja: '金浦出発 (TW709)' }, groups: ['me_gf'] },
      { time: '11:55', content: { ko: '제주 공항 도착', ja: '済州空港 到着' }, groups: ['me_gf'], highlight: true },
      { time: '12:00', content: { ko: '오사카 간사이 출발 (TW332)', ja: '大阪関西出発 (TW332)' }, groups: ['sister_family'] },
      { time: '12:20', content: { ko: 'GV70 렌트카 수령', ja: 'GV70 レンタカー受取' }, groups: ['me_gf'], highlight: true },
      { time: '12:30 ~ 13:30', content: { ko: '점심 식사', ja: 'ランチ' }, groups: ['me_gf'] },
      { time: '14:00', content: { ko: '제주 공항 도착 (누나 가족)', ja: '済州空港 到着（姉家族）' }, groups: ['sister_family'], highlight: true },
      { time: '14:30', content: { ko: '김포 출발 (TW719)', ja: '金浦出発 (TW719)' }, groups: ['parents'] },
      { time: '15:00', content: { ko: '아이오닉9 렌트카 수령', ja: 'IONIQ9 レンタカー受取' }, groups: ['sister_family'], highlight: true },
      { time: '15:45', content: { ko: '제주 공항 도착 (부모님)', ja: '済州空港 到着（両親）' }, groups: ['parents'], highlight: true },
      { time: '16:15 ~ 16:30', content: { ko: '공항에서 전원 합류', ja: '空港で全員合流' }, highlight: true },
      { time: '약 17:30', content: { ko: '숙소 도착 및 체크인 (JW 메리어트 레지던스 제주)', ja: 'チェックイン (JWマリオット レジデンス 済州)' }, highlight: true },
      { time: '저녁', content: { ko: '숙소에서 제주 흑돼지 구이', ja: '宿で済州黒豚焼肉' }, highlight: true },
    ],
  },
  {
    day: 2,
    date: '2026-03-20',
    title: { ko: 'Day 2 — 성산 & 아쿠아플라넷', ja: 'Day 2 — 城山 & アクアプラネット' },
    overview: { ko: '호텔 조식 후 성산 유채꽃 재배단지. 가족 스냅 사진 촬영. 아쿠아플라넷 관람. 저녁은 회.', ja: 'ホテル朝食後、城山 菜の花畑へ。家族スナップ撮影。アクアプラネット見学。夕食は刺身。' },
    timeline: [
      { time: '07:30 ~ 09:00', content: { ko: '호텔 조식', ja: 'ホテル朝食' }, highlight: true },
      { time: '09:30', content: { ko: '숙소 출발 (차량 2대)', ja: '宿出発（2台）' } },
      { time: '약 10:20', content: { ko: '성산 유채꽃 재배단지 도착', ja: '城山 菜の花畑 到着' }, highlight: true },
      { time: '10:20 ~ 11:00', content: { ko: '유채꽃밭 자유 산책', ja: '菜の花畑 散策' } },
      { time: '11:00 ~ 12:00', content: { ko: '가족 스냅 사진 촬영', ja: 'ファミリースナップ撮影' }, highlight: true },
      { time: '12:00 ~ 13:00', content: { ko: '점심 식사 (고기국수)', ja: 'ランチ（豚肉麺）' }, highlight: true },
      { time: '13:30 ~ 15:30', content: { ko: '아쿠아플라넷 제주 관람', ja: 'アクアプラネット済州 見学' }, highlight: true },
      { time: '약 16:00', content: { ko: '하나로마트 — 회 구매', ja: 'ハナロマート — 刺身購入' } },
      { time: '약 16:30', content: { ko: '숙소 도착', ja: '宿到着' } },
      { time: '16:30 ~', content: { ko: '수영장 / 자유 시간', ja: 'プール / 自由時間' } },
      { time: '저녁', content: { ko: '숙소에서 회 취식', ja: '宿で刺身' }, highlight: true },
    ],
  },
  {
    day: 3,
    date: '2026-03-21',
    title: { ko: 'Day 3 — 새별 프렌즈 & 누나 가족 귀국', ja: 'Day 3 — セビョルフレンズ & 姉家族帰国' },
    overview: { ko: '새별 프렌즈 체험 후 애월 점심. 누나 가족 공항 배웅. 이후 온천 및 저녁 식사.', ja: 'セビョルフレンズ体験後、涯月でランチ。姉家族を見送り。その後、温泉と夕食。' },
    timeline: [
      { time: '07:30 ~ 08:30', content: { ko: '아침 식사 — 오는 정 김밥', ja: '朝食 — キンパブ' }, highlight: true },
      { time: '09:00', content: { ko: '숙소 출발 (차량 2대)', ja: '宿出発（2台）' } },
      { time: '약 10:00', content: { ko: '새별 프렌즈 도착', ja: 'セビョルフレンズ 到着' }, highlight: true },
      { time: '10:00 ~ 11:30', content: { ko: '새별 프렌즈 체험', ja: 'セビョルフレンズ 体験' }, highlight: true },
      { time: '12:00 ~ 13:00', content: { ko: '점심 식사 (애월)', ja: 'ランチ（涯月）' }, highlight: true },
      { time: '약 13:30', content: { ko: '제주 공항 도착', ja: '済州空港 到着' }, groups: ['me_gf', 'parents', 'sister_family'] },
      { time: '14:00 ~ 15:00', content: { ko: '누나 가족 배웅 (TW331 게이트 입장)', ja: '姉家族お見送り (TW331)' }, highlight: true },
      { time: '15:00', content: { ko: '아이오닉9 반납', ja: 'IONIQ9 返却' }, groups: ['me_gf', 'parents'] },
      { time: '16:00', content: { ko: '오사카 도착 (누나 가족)', ja: '大阪到着（姉家族）' }, groups: ['sister_family'] },
      { time: '약 16:10', content: { ko: '숙소 도착', ja: '宿到着' }, groups: ['me_gf', 'parents'] },
      { time: '16:30 ~', content: { ko: '오레브 핫 스프링 앤 스파 또는 올레마당 저녁 식사', ja: 'オレブ温泉 または オルレマダン夕食' }, groups: ['me_gf', 'parents'], highlight: true },
    ],
  },
  {
    day: 4,
    date: '2026-03-22',
    title: { ko: 'Day 4 — 귀가', ja: 'Day 4 — 帰宅' },
    overview: { ko: '마지막 날. 체크아웃 후 점심 식사 및 커피. GV70 반납 후 공항에서 서울로.', ja: '最終日。チェックアウト後ランチとコーヒー。GV70返却後、空港からソウルへ。' },
    groups: ['me_gf', 'parents'],
    timeline: [
      { time: '아침', content: { ko: '숙소 휴식 / 수영장 마지막 이용', ja: '宿で休息 / プール最終利用' } },
      { time: '11:00', content: { ko: '체크아웃', ja: 'チェックアウト' }, highlight: true },
      { time: '12:00 ~ 13:00', content: { ko: '점심 식사', ja: 'ランチ' }, highlight: true },
      { time: '13:00 ~ 13:30', content: { ko: '마노 커피 하우스 (말차 라떼)', ja: 'マノコーヒーハウス（抹茶ラテ）' }, highlight: true },
      { time: '약 14:15', content: { ko: 'GV70 반납 (제주 쏘카 터미널)', ja: 'GV70 返却（済州ソカターミナル）' } },
      { time: '15:15', content: { ko: '제주 출발 (TW718)', ja: '済州出発 (TW718)' }, highlight: true },
      { time: '16:30', content: { ko: '김포 도착', ja: '金浦到着' }, highlight: true },
    ],
  },
];

export function getScheduleByDay(day: number): DaySchedule | undefined {
  return schedules.find(s => s.day === day);
}
