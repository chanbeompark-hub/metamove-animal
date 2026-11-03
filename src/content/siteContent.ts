type LocationImage = {
  src: string
  alt: string
  caption: string
}

export const siteContent = {
  applicationUrl: 'https://naver.me/xsZWHr8t',
  applicationCta: 'ADVANCE FLOW 그룹 특강 신청하기',
  advanceFlow: {
    title: '4:1 그룹 주말 특강',
    details: ['4:1 그룹 수업', '약 120분 진행', '이론 & 실습'],
  },
  outdoorSpecial: {
    applicationUrl: 'https://naver.me/GRD1R95e',
    ariaLabel: 'EP6 특강 안내',
    eyebrow: 'NEXT SESSION · EP6',
    dateMark: '07',
    title: 'EP6. 애니멀플로우 IN 메타무브짐 PT 상동역점',
    taglines: [
      '주말 날씨가 많이 추워져 부천 센터에서 진행합니다.',
      '더욱 전문성 있는 수업으로 준비하겠습니다!',
    ],
    facts: [
      '11월 7일(토) 오후 1시',
      '메타무브짐 PT 상동역점',
      '경기 부천시 원미구 송내대로265번길 67 3층 303호',
      '참가비 20,000원',
      '진행 시간 1시간 전후',
    ],
    benefit: {
      title: '참여자 제공 혜택',
      description: '이중 보온 텀블러 & 기초 전자책 제공',
      punchline: '',
    },
    program: [],
    programNote: '',
    locationImage: {
      src: '/media/metamove-gym-interior.jpg',
      alt: '메타무브짐 PT 상동역점 실내 전경',
      caption: '추운 날씨에도 편안하게 움직일 수 있는 메타무브짐 PT 상동역점 실내 공간입니다.',
    } satisfies LocationImage,
    compactCta: 'EP6 실내 클래스 신청하기',
    cta: 'EP6 실내 클래스 신청하기',
  },
  classFacts: [
    { label: '정원', value: '4명' },
    { label: '난이도', value: 'BEGINNER' },
    { label: '소요시간', value: '약 50분' },
    { label: '장소', value: '메타무브짐 PT 상동역점' },
  ],
  flowSteps: [
    { name: 'MOVE', description: '내 몸을 다양한 방향으로 움직이는 경험' },
    { name: 'CONTROL', description: '몸을 지지하고 중심을 조절하는 능력' },
    { name: 'CONNECT', description: '하나의 동작을 다음 움직임으로 연결하는 과정' },
    { name: 'FLOW', description: '배운 움직임을 자연스럽게 이어 하나의 Flow를 완성' },
  ],
  learningSteps: [
    { className: 'CLASS 01', name: 'Beast Position' },
    { className: 'CLASS 02', name: 'Traveling' },
    { className: 'CLASS 03', name: 'Transition' },
    { className: 'CLASS 04', name: 'FLOW' },
  ],
  faq: [
    { question: '몸이 뻣뻣한데요?', answer: '괜찮습니다. 가능한 범위부터 천천히 시작합니다.' },
    { question: '운동을 잘 못하는데요?', answer: '괜찮습니다. 기본 자세부터 하나씩 배웁니다.' },
    { question: '영상이 너무 어려워 보여요.', answer: '처음부터 저렇게 하지 않습니다. 동작을 나누어 익힌 뒤 연결합니다.' },
  ],
  media: {
    video: '/media/flow-hero-20261004.mp4',
    poster: '/media/flow-hero-poster.webp',
    episodeVideo: '/media/outdoor-episode-sketch.mp4',
    episodePoster: '/media/outdoor-episode-poster.webp',
    beast: '/media/beast.webp',
    control: '/media/control.webp',
    movement: '/media/movement.webp',
    community: '/media/community.webp',
    outdoorCommunity: '/media/outdoor-community.webp',
  },
} as const
