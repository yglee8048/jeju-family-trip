export const hotelInfo = {
    name: {ko: 'JW 메리어트 레지던스 제주', ja: 'JWマリオット レジデンス 済州'},
    address: {ko: '제주특별자치도 서귀포시 태평로 150', ja: '済州特別自治道 西帰浦市 太平路 150'},
    checkIn: '15:00',
    checkOut: '11:00',
    facilities: [
        {ko: '인피니티풀', ja: 'インフィニティプール', paid: false},
        {ko: '실내 수영장', ja: '室内プール', paid: false},
        {ko: '피트니스', ja: 'フィットネス', paid: false},
        {ko: '스파', ja: 'スパ', paid: true},
        {ko: '레스토랑', ja: 'レストラン', paid: true},
        {ko: '카페', ja: 'カフェ', paid: true},
        {ko: '뷔페', ja: 'ビュッフェ', paid: true},
    ],
    poolRule: {ko: '동시 최대 4명 이용 가능. 카드키 1개당 2명 입장.', ja: '同時最大4名まで利用可。カードキー1枚で2名入場。'},
};

export interface HotelProgram {
    id: string;
    category: 'morning' | 'afternoon' | 'evening' | 'popup' | 'kids' | 'rental';
    name: { ko: string; ja: string };
    desc: { ko: string; ja: string };
    time: string | null;
    days: string | null;
    location: { ko: string; ja: string };
    period: string;
    minAge: string | null;
    url: string | null;
    noReservation: boolean;
    price: number | null;
}

export const hotelPrograms: HotelProgram[] = [
    {
        id: 'popup-eatzone',
        category: 'popup',
        name: {ko: '잇존 어패럴 팝업 스토어', ja: 'イッツゾーン アパレル ポップアップストア'},
        desc: {
            ko: '애슬레저 브랜드 팝업 매장. 투숙객 전용 3만 원 바우처 사용 가능 (10만 원 구매 시).',
            ja: 'アスレジャーブランドのポップアップショップ。宿泊者専用3万ウォンバウチャー利用可（10万ウォン以上購入時）。'
        },
        time: '10:00 - 18:00',
        days: null,
        location: {ko: 'Drawing Room (6F)', ja: 'Drawing Room (6F)'},
        period: '12월4일 ~ 3월31일',
        minAge: null,
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/69241cf145a2abe2029f2e15',
        noReservation: true,
        price: null,
    },
    {
        id: 'mindful',
        category: 'morning',
        name: {ko: '마인드풀 잇팅 명상', ja: 'マインドフルイーティング瞑想'},
        desc: {
            ko: '자연의 맛을 통해 내면의 속도를 리셋하는 느린 명상. 프로그램 후 건강한 모닝 주스 제공.',
            ja: '自然の味で内なるスピードをリセットするスロー瞑想。終了後ヘルシーモーニングジュース提供。'
        },
        time: '07:00 - 07:40',
        days: '화, 목',
        location: {ko: 'Re Creation Playroom (2F)', ja: 'Re Creation Playroom (2F)'},
        period: '1월6일 ~ 3월31일',
        minAge: '12세 이상',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/694cc337bd28c9cd3714cebd',
        noReservation: false,
        price: null,
    },
    {
        id: 'breath',
        category: 'morning',
        name: {ko: '숨 테라피', ja: '呼吸セラピー'},
        desc: {ko: '아로마 오일을 이용한 호흡법으로 깊이 있는 숨을 경험.', ja: 'アロマオイルを使った呼吸法で深い呼吸を体験。'},
        time: '09:00 - 10:00',
        days: '금',
        location: {ko: 'Re Creation Play Room (2F)', ja: 'Re Creation Play Room (2F)'},
        period: '1월1일 ~ 3월31일',
        minAge: '12세 이상',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/67af1a7227541f69ff6669b2',
        noReservation: false,
        price: null,
    },
    {
        id: 'journaling',
        category: 'morning',
        name: {ko: '저널링 요가', ja: 'ジャーナリングヨガ'},
        desc: {ko: '마음을 들여다보고 의도를 기록하는 요가 프로그램.', ja: '心を見つめ、意図を記録するヨガプログラム。'},
        time: '09:00 - 10:00',
        days: '토',
        location: {ko: 'Re Creation Play Room (2F)', ja: 'Re Creation Play Room (2F)'},
        period: '1월1일 ~ 3월31일',
        minAge: '12세 이상',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/689eb51cf997dca1aa060f3e',
        noReservation: false,
        price: null,
    },
    {
        id: 'yoga',
        category: 'morning',
        name: {ko: '리-스타트 모닝 요가', ja: 'リスタートモーニングヨガ'},
        desc: {ko: '잠든 몸을 깨우고 하루의 방향을 세우는 아침 요가.', ja: '眠った体を目覚めさせ、一日の方向を定める朝のヨガ。'},
        time: '09:00 - 10:00',
        days: '일',
        location: {ko: 'Re Creation Play Room (2F)', ja: 'Re Creation Play Room (2F)'},
        period: '1월1일 ~ 3월31일',
        minAge: '12세 이상',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/6833ebe561fe133ead571e5c',
        noReservation: false,
        price: null,
    },
    {
        id: 'haenyeo',
        category: 'afternoon',
        name: {ko: '차롱: 해녀의 여우물 밥상', ja: 'チャロン: 海女のよううる食事体験'},
        desc: {
            ko: '셰프가 제주 해녀의 삶과 식문화를 소개하며, 1인 1세트 차롱(도시락)으로 제주 전통 맛을 즐깁니다.',
            ja: 'シェフが済州海女の暮らしと食文化を紹介。1人1セットのチャロン（お弁当）で済州の伝統の味を楽しみます。'
        },
        time: '12:30 - 13:30',
        days: null,
        location: {ko: '여우물 (3F)', ja: 'よううる (3F)'},
        period: '1월1일 ~ 3월31일',
        minAge: '만 10세 이상',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/67fcef899a8a861e62677051',
        noReservation: false,
        price: 40000,
    },
    {
        id: 'coffee',
        category: 'afternoon',
        name: {ko: '핸드 드립 커피 클래스', ja: 'ハンドドリップコーヒークラス'},
        desc: {
            ko: '4가지 원두를 핸드 드립으로 추출하며 맛·향·질감을 음미합니다.',
            ja: '4種類のコーヒー豆をハンドドリップで抽出し、味・香り・食感を楽しみます。'
        },
        time: '15:00 - 15:30',
        days: null,
        location: {ko: 'Woodpecker 3 (6F)', ja: 'Woodpecker 3 (6F)'},
        period: '~ 3월31일',
        minAge: '12세 이상',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/67af1d4c9b45eba49d6ecc36',
        noReservation: false,
        price: 20000,
    },
    {
        id: 'omegi',
        category: 'afternoon',
        name: {ko: '제주 오메기떡 맹글기', ja: '済州オメギ餅作り'},
        desc: {
            ko: '셰프와 함께 오메기떡을 만들고 시식합니다. (30분 만들기 + 30분 시식)',
            ja: 'シェフと一緒にオメギ餅を作って試食。（30分制作＋30分試食）'
        },
        time: '15:30 - 16:30',
        days: null,
        location: {ko: 'Island Kitchen Terrace (3F)', ja: 'Island Kitchen Terrace (3F)'},
        period: '3월1일 ~ 3월31일',
        minAge: '8세 이상',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/699e86d5a45e9bf289cae023',
        noReservation: false,
        price: 20000,
    },
    {
        id: 'artclimbing',
        category: 'afternoon',
        name: {ko: '아트 클라이밍', ja: 'アートクライミング'},
        desc: {
            ko: '제주의 색을 머금은 건축물 사이를 오가며 예술가들의 작품을 감상합니다.',
            ja: '済州の色を纏った建築物の間を巡りながら芸術家の作品を鑑賞します。'
        },
        time: '15:30 - 16:30',
        days: '화, 수',
        location: {ko: 'Woodpecker (6F)', ja: 'Woodpecker (6F)'},
        period: '1월1일 ~ 3월31일',
        minAge: '12세 이상',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/691ad7a4eabf0257ad4bb7e0',
        noReservation: false,
        price: null,
    },
    {
        id: 'aroma',
        category: 'afternoon',
        name: {ko: 'LiMN 아로마 리추얼 클래스', ja: 'LiMN アロマリチュアルクラス'},
        desc: {
            ko: '전문 테라피스트와 함께 나만의 시그니처 아로마 롤온을 만드는 향기 테라피.',
            ja: '専門テラピストとともに自分だけのシグネチャーアロマロールオンを作る香りセラピー。'
        },
        time: '15:30 - 16:30',
        days: '목, 금',
        location: {ko: '우드패커 1 (6F)', ja: 'ウッドパッカー1 (6F)'},
        period: '1월8일 ~ 3월31일',
        minAge: '12세 이상',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/694e282dc1fb4e8921e2528a',
        noReservation: false,
        price: 30000,
    },
    {
        id: 'aqua',
        category: 'afternoon',
        name: {ko: '아쿠아 에너지', ja: 'アクアエナジー'},
        desc: {
            ko: '실내 수영장에서 진행하는 전신 운동 프로그램. 선착순 15명, 수영복 착용 필수.',
            ja: '室内プールで行う全身運動プログラム。先着15名、水着着用必須。'
        },
        time: '16:00 (20분)',
        days: '토, 일',
        location: {ko: '리프레시 인도어 풀 (2F)', ja: 'リフレッシュインドアプール (2F)'},
        period: '~ 3월31일',
        minAge: '신장 140cm 이상',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/68e4cae24beda2df3b62a5d4',
        noReservation: true,
        price: null,
    },
    {
        id: 'wine',
        category: 'afternoon',
        name: {ko: '블라인드 와인 테이스팅', ja: 'ブラインドワインテイスティング'},
        desc: {
            ko: '매일 새로운 블라인드 와인을 직관적으로 음미하며 테이스팅 노트를 기록합니다.',
            ja: '毎日新しいブラインドワインを直感的に楽しみながらテイスティングノートを記録します。'
        },
        time: '15:00 - 15:50',
        days: null,
        location: {ko: 'The Flying Hog (7F)', ja: 'The Flying Hog (7F)'},
        period: '3월1일 ~ 3월31일',
        minAge: '19세 이상',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/699e8570e149573a56474b95',
        noReservation: false,
        price: 25000,
    },
    {
        id: 'cocktail',
        category: 'afternoon',
        name: {ko: '클래식 칵테일 메이킹', ja: 'クラシックカクテルメイキング'},
        desc: {
            ko: 'JW 가든 허브와 제주 과일로 만드는 요일별 칵테일. 논알콜 옵션 가능.',
            ja: 'JWガーデンのハーブと済州フルーツで作る曜日別カクテル。ノンアルコールオプション可。'
        },
        time: '17:30 - 18:00',
        days: null,
        location: {ko: 'The Flying Hog (7F)', ja: 'The Flying Hog (7F)'},
        period: '~ 3월31일',
        minAge: '19세 이상',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/67af16433957879a66a36cf2',
        noReservation: false,
        price: 15000,
    },
    {
        id: 'bonfire',
        category: 'evening',
        name: {ko: '레트로 테라피: JW 가든 불멍', ja: 'レトロセラピー: JWガーデン焚き火'},
        desc: {
            ko: '제주 밤하늘 아래, 카세트에서 흐르는 옛 음악과 따뜻한 음료로 채우는 시간. 우천 시 취소.',
            ja: '済州の夜空の下、カセットから流れる懐かしい音楽と温かい飲み物で過ごす時間。雨天中止。'
        },
        time: '19:30 - 21:30',
        days: null,
        location: {ko: 'JW Garden (3F)', ja: 'JWガーデン (3F)'},
        period: '10월20일 ~',
        minAge: null,
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/6875dab0c04a834f862334ec',
        noReservation: true,
        price: null,
    },
    {
        id: 'sleep',
        category: 'evening',
        name: {ko: '해녀의 숨비소리', ja: '海女のスムビソリ'},
        desc: {
            ko: '해녀 호흡법과 가이드 명상으로 긴장을 풀고 숙면을 준비합니다.',
            ja: '海女の呼吸法とガイド瞑想で緊張をほぐし、深い眠りを準備します。'
        },
        time: '20:30 - 21:10',
        days: '월, 수',
        location: {ko: 'Re Creation Play Room (2F)', ja: 'Re Creation Play Room (2F)'},
        period: '1월1일 ~ 3월31일',
        minAge: '12세 이상',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity/reserve/experience/694cbac434f70b45b7b78d5a',
        noReservation: false,
        price: null,
    },
    // 키즈 & 패밀리 프로그램
    {
        id: 'kids-allday',
        category: 'kids',
        name: {ko: '리 플레이 키즈 캠프_올데이', ja: 'リプレイキッズキャンプ_オールデイ'},
        desc: {
            ko: '숨겨진 보물을 찾고, 다양한 지형지물을 넘나들며 미션을 해결하는 등 다채로운 탐험 놀이를 진행합니다.',
            ja: '隠れた宝を探し、さまざまな地形を越えてミッションをこなす多彩な探検あそびを行います。'
        },
        time: '10:00 - 17:30',
        days: '매일',
        location: {ko: 'Re Play Kids Club (3F)', ja: 'Re Play Kids Club (3F)'},
        period: '~ 3월31일',
        minAge: '48개월~만 12세',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity-kids/reserve/experience/66a1f9cf5dc6367e4bbef788',
        noReservation: false,
        price: 194000,
    },
    {
        id: 'kids-halfday',
        category: 'kids',
        name: {ko: '리 플레이 키즈 캠프_하프데이', ja: 'リプレイキッズキャンプ_ハーフデイ'},
        desc: {
            ko: '자연과 아이들이 서로 친밀해질 수 있도록 자연의 재료를 더한 놀이를 제안합니다.',
            ja: '自然と子どもたちが親しめるよう、自然の素材を取り入れた遊びを提案します。'
        },
        time: '14:00 - 17:30',
        days: null,
        location: {ko: 'Re Play Kids Club (3F)', ja: 'Re Play Kids Club (3F)'},
        period: '~ 3월31일',
        minAge: '48개월~만 12세',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity-kids/reserve/experience/66a1fa22b7ec74b6109c084a',
        noReservation: false,
        price: 124000,
    },
    {
        id: 'kids-diy',
        category: 'kids',
        name: {ko: '청정 제주 D.I.Y', ja: '清浄済州 D.I.Y'},
        desc: {
            ko: '자연의 재료들을 더해 나만의 작품을 탄생시키는 시간, 작품을 만들며 자연의 소중함을 일깨워봅니다.',
            ja: '自然の素材を使って自分だけの作品を作る時間。制作を通じて自然の大切さに気づきます。'
        },
        time: '10:00 - 11:00',
        days: null,
        location: {ko: 'Re Play Kids Club (3F)', ja: 'Re Play Kids Club (3F)'},
        period: '~ 3월31일',
        minAge: '48개월~만 12세',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity-kids/reserve/experience/66a1faffb7628afe7533e169',
        noReservation: false,
        price: 50000,
    },
    {
        id: 'kids-sports',
        category: 'kids',
        name: {ko: '어린이 스포츠', ja: '子ども スポーツ'},
        desc: {
            ko: '뛰고, 구르고, 던지는 다양한 움직임으로 신체 유연성과 대근육 발달을 돕고 운동 자신감을 키웁니다.',
            ja: '走る・転がる・投げるなど多様な動きで身体の柔軟性と大筋肉の発達を促し、運動への自信を育てます。'
        },
        time: '11:00 - 12:30',
        days: null,
        location: {ko: 'Re Play Kids Club (3F)', ja: 'Re Play Kids Club (3F)'},
        period: '~ 3월31일',
        minAge: '48개월~만 12세',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity-kids/reserve/experience/66a1fb485dc6367e4bbef7b2',
        noReservation: false,
        price: 70000,
    },
    {
        id: 'kids-explorer',
        category: 'kids',
        name: {ko: '어린이 탐험가', ja: '子ども 探検家'},
        desc: {
            ko: '초록빛 제주의 숲을 탐색합니다. 순수한 호기심과 열정을 발산해 자연에서 즐거움을 경험합니다.',
            ja: '緑豊かな済州の森を探索。純粋な好奇心と情熱を発揮して自然の中で喜びを体験します。'
        },
        time: '14:00 - 15:30',
        days: null,
        location: {ko: 'Re Play Kids Club (3F)', ja: 'Re Play Kids Club (3F)'},
        period: '~ 3월31일',
        minAge: '48개월~만 12세',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity-kids/reserve/experience/66a1fab83aeb507f5b54735b',
        noReservation: false,
        price: 70000,
    },
    {
        id: 'kids-cooking',
        category: 'kids',
        name: {ko: '어린이 쿠킹 클래스', ja: '子ども クッキングクラス'},
        desc: {
            ko: '제주 계절 식재료와 JW 가든에서 수확한 신선 채소로 재밌는 요리 수업을 진행합니다.',
            ja: '済州の旬の食材とJWガーデンで収穫した新鮮野菜を使った楽しいお料理教室です。'
        },
        time: '16:00 - 17:30',
        days: null,
        location: {ko: 'Re Play Kids Club (3F)', ja: 'Re Play Kids Club (3F)'},
        period: '~ 3월31일',
        minAge: '48개월~만 12세',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity-kids/reserve/experience/66a1fb8c3aeb507f5b547374',
        noReservation: false,
        price: 70000,
    },
    {
        id: 'kids-craft',
        category: 'kids',
        name: {ko: '우리 가족 공방', ja: '家族工房'},
        desc: {
            ko: '가족이 함께 모여 도란도란 이야기 나누고, 해녀 드림캐쳐 만들기 등 손수 작품을 만들어 봅니다. 투숙 기간 중 1회 참여 가능. 성인 보호자 1인 동반 필수.',
            ja: '家族が集まり、語り合いながら海女のドリームキャッチャー作りなど手作り体験をします。滞在中1回参加可。保護者同伴必須。'
        },
        time: '18:00 - 18:30',
        days: null,
        location: {ko: 'Re Play Kids Club (3F)', ja: 'Re Play Kids Club (3F)'},
        period: '~ 3월31일',
        minAge: '48개월~만 12세',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity-kids/reserve/experience/689ebb490e33207c065b874d',
        noReservation: false,
        price: 10000,
    },
    // 대여 프로그램
    {
        id: 'rental-golf',
        category: 'rental',
        name: {ko: '젝시오 골프 클럽 대여', ja: 'ゼクシオ ゴルフクラブ レンタル'},
        desc: {
            ko: '프리미엄 골프 브랜드 젝시오의 최신형 클럽 대여. 1인 1세트, 최대 주 2회 / 1일 1회, 당일 반납. 문의: 064-803-7773',
            ja: 'プレミアムゴルフブランドXXIOの最新クラブレンタル。1人1セット、週最大2回/1日1回、当日返却。問い合わせ: 064-803-7773'
        },
        time: null,
        days: null,
        location: {ko: 'Lobby (8F)', ja: 'Lobby (8F)'},
        period: '~ 3월31일',
        minAge: '12세 이상',
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity-kids/reserve/experience/66efab7360c90d625ed752a9',
        noReservation: false,
        price: null,
    },
    {
        id: 'rental-playpack',
        category: 'rental',
        name: {ko: '플레이 팩', ja: 'プレイパック'},
        desc: {
            ko: '닌텐도, 보드게임(부루마블·우봉고·루미큐브), 스포츠 용품(배드민턴·캐치볼·훌라후프) 대여. 선착순, 당일 반납. 문의: 064-803-7773',
            ja: 'ニンテンドー、ボードゲーム（ブルーマーブル・ウボンゴ・ルミキューブ）、スポーツ用品（バドミントン・キャッチボール・フラフープ）レンタル。先着順、当日返却。問い合わせ: 064-803-7773'
        },
        time: '10:00 - 19:00',
        days: null,
        location: {ko: 'Re Play Kids Club (3F)', ja: 'Re Play Kids Club (3F)'},
        period: '~ 3월31일',
        minAge: null,
        url: 'https://www.tablecheck.com/ko/jw-marriott-jeju-resort-activity-kids/reserve/experience/689ec009714eb726c4cf76ca',
        noReservation: false,
        price: null,
    },
];
