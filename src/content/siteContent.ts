type LocationImage = {
  src: string
  alt: string
  caption: string
}

export const siteContent = {
  applicationUrl: 'https://naver.me/xsZWHr8t',
  applicationCta: 'ADVANCE FLOW 그룹 특강 신청하기',
  outdoorSpecial: {
    applicationUrl: 'https://naver.me/GRD1R95e',
    ariaLabel: 'EP6 특강 안내',
    eyebrow: 'NEXT SESSION · EP6',
    dateMark: '07',
    title: 'EP6. 애니멀플로우 IN 부천중앙공원',
    taglines: [
      '찐 겨울이 오기 전, 야외 햇살 아래서 애니멀플로우 액티브 요가.',
      '다 같이 스트레칭하며 몸의 움직임을 느껴보는 시간.',
    ],
    facts: [
      '11월 7일(토) 오후 1시',
      '부천중앙공원 · 집합 위치 이미지 참고',
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
      src: '/media/bucheon-central-park.jpg',
      alt: '부천중앙공원 애니멀플로우 EP6 집합 위치 지도',
      caption: '부천중앙공원 집합 위치입니다. 지도 이미지를 참고해 주세요.',
    } satisfies LocationImage,
    compactCta: 'EP6 부천중앙공원 신청하기',
    cta: 'EP6 부천중앙공원 신청하기',
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
