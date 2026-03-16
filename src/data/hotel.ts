export const hotelInfo = {
  name: { ko: 'JW 메리어트 레지던스 제주', ja: 'JWマリオット レジデンス 済州' },
  address: { ko: '제주특별자치도 서귀포시 태평로 150', ja: '済州特別自治道 西帰浦市 太平路 150' },
  checkIn: '15:00',
  checkOut: '11:00',
  facilities: [
    { ko: '인피니티풀', ja: 'インフィニティプール' },
    { ko: '실내 수영장', ja: '室内プール' },
    { ko: '피트니스', ja: 'フィットネス' },
    { ko: '스파', ja: 'スパ' },
    { ko: '레스토랑', ja: 'レストラン' },
    { ko: '카페', ja: 'カフェ' },
    { ko: '뷔페', ja: 'ビュッフェ' },
  ],
  poolRule: { ko: '동시 최대 4명 이용 가능. 카드키 1개당 2명 입장.', ja: '同時最大4名まで利用可。カードキー1枚で2名入場。' },
};

export const hotelPrograms = [
  { id: 'mindful', category: 'morning', name: { ko: '마인드풀 잇팅 명상', ja: 'マインドフルイーティング瞑想' }, desc: { ko: '자연의 맛을 통해 내면의 속도를 리셋하는 명상', ja: '自然の味で内なるスピードをリセットする瞑想' }, price: null },
  { id: 'breath', category: 'morning', name: { ko: '숨 테라피', ja: '呼吸セラピー' }, desc: { ko: '아로마 오일을 이용한 호흡 명상', ja: 'アロマオイルを使った呼吸瞑想' }, price: null },
  { id: 'journaling', category: 'morning', name: { ko: '저널링 요가', ja: 'ジャーナリングヨガ' }, desc: { ko: '마음 상태를 기록하며 진행하는 요가', ja: '心の状態を記録しながら進めるヨガ' }, price: null },
  { id: 'yoga', category: 'morning', name: { ko: '리스타트 모닝 요가', ja: 'リスタートモーニングヨガ' }, desc: { ko: '아침 웰니스 요가', ja: '朝のウェルネスヨガ' }, price: null },
  { id: 'haenyeo', category: 'afternoon', name: { ko: '해녀의 여우물 밥상', ja: '海女の食事体験' }, desc: { ko: '제주 해녀 이야기 기반 체험 식사', ja: '済州海女の物語ベースの体験食事' }, price: 40000 },
  { id: 'coffee', category: 'afternoon', name: { ko: '핸드 드립 커피 클래스', ja: 'ハンドドリップコーヒークラス' }, desc: { ko: '커피 추출 체험', ja: 'コーヒー抽出体験' }, price: 20000 },
  { id: 'omegi', category: 'afternoon', name: { ko: '제주 오메기떡 만들기', ja: '済州オメギ餅作り' }, desc: { ko: '셰프와 함께 오메기떡 제작', ja: 'シェフと一緒にオメギ餅を作る' }, price: 20000 },
  { id: 'aroma', category: 'afternoon', name: { ko: '아로마 리추얼 클래스', ja: 'アロマリチュアルクラス' }, desc: { ko: '개인 향 제작 체험', ja: '個人の香り制作体験' }, price: 30000 },
  { id: 'wine', category: 'afternoon', name: { ko: '블라인드 와인 테이스팅', ja: 'ブラインドワインテイスティング' }, desc: { ko: '블라인드 와인 테이스팅', ja: 'ブラインドワインテイスティング' }, price: 25000 },
  { id: 'cocktail', category: 'afternoon', name: { ko: '클래식 칵테일 메이킹', ja: 'クラシックカクテルメイキング' }, desc: { ko: '클래식 칵테일 제작 체험', ja: 'クラシックカクテル制作体験' }, price: 15000 },
  { id: 'bonfire', category: 'evening', name: { ko: 'JW 가든 불멍', ja: 'JWガーデン 焚き火' }, desc: { ko: '제주 밤하늘 불멍 프로그램', ja: '済州の夜空の下での焚き火プログラム' }, price: null },
  { id: 'sleep', category: 'evening', name: { ko: '해녀의 숨비소리', ja: '海女の水面瞑想' }, desc: { ko: '수면 명상 프로그램', ja: '睡眠瞑想プログラム' }, price: null },
];
