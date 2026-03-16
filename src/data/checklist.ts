import type { Group } from './personas';

export interface ChecklistItem {
  ko: string;
  ja: string;
  groups?: Group[];
}

export interface DayChecklist {
  day: 0 | 1 | 2 | 3 | 4;
  items: ChecklistItem[];
}

export const checklists: DayChecklist[] = [
  {
    day: 0,
    items: [
      { ko: '여권 / 신분증 확인', ja: 'パスポート / 身分証確認' },
      { ko: '수영복 챙기기', ja: '水着を持参' },
      { ko: '선크림 준비', ja: '日焼け止め準備' },
      { ko: '카메라 / 충전기', ja: 'カメラ / 充電器' },
      { ko: '가벼운 겉옷 (제주 바람)', ja: '薄手の上着（済州の風）' },
      { ko: '아기 기저귀 및 분유', ja: 'おむつとミルク', groups: ['sister_family'] },
    ],
  },
  {
    day: 1,
    items: [
      { ko: '렌트카 서류 준비', ja: 'レンタカー書類準備' },
      { ko: '숙소 체크인 정보 확인', ja: '宿チェックイン情報確認' },
      { ko: '장 보기 — 저녁 흑돼지', ja: '買い物 — 夕食の黒豚' },
    ],
  },
  {
    day: 2,
    items: [
      { ko: '수영복 챙기기 (수영장)', ja: '水着を持参（プール）' },
      { ko: '아쿠아플라넷 입장권 확인', ja: 'アクアプラネット入場券確認' },
      { ko: '스냅 촬영 예약 확인', ja: 'スナップ撮影予約確認' },
      { ko: '오는 정 김밥 저녁에 예약', ja: 'キンパブ 夜に予約' },
    ],
  },
  {
    day: 3,
    items: [
      { ko: '누나 가족 짐 정리', ja: '姉家族の荷物整理', groups: ['sister_family'] },
      { ko: '아이오닉9 반납 준비', ja: 'IONIQ9 返却準備' },
      { ko: '수영복 챙기기 (온천)', ja: '水着を持参（温泉）', groups: ['me_gf', 'parents'] },
    ],
  },
  {
    day: 4,
    items: [
      { ko: '체크아웃 짐 정리', ja: 'チェックアウト荷物整理' },
      { ko: 'GV70 반납 준비', ja: 'GV70 返却準備' },
      { ko: '항공권 확인 (TW718 15:15)', ja: '航空券確認 (TW718 15:15)' },
    ],
  },
];
