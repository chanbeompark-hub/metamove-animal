type LocationImage = {
  src: string
  alt: string
  caption: string
}

export const siteContent = {
  applicationUrl: 'https://naver.me/xsZWHr8t',
  outdoorSpecial: {
    applicationUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSe1tfpfMR02_oT4wrRdI5KeDourwzjmKbyE-gnOJyjIOBDM9Q/viewform',
    ariaLabel: 'EP6 특강 안내',
    eyebrow: 'NEXT SESSION · EP6',
    dateMark: '29',
    title: 'EP6. 애니멀플로우 IN 강남 알베르',
    tagline: '실내에서 단체 플로우 군무를 만들어봐요. 퇴근 후 몸과 정신을 가다듬는 시간.',
    facts: ['10월 29일(목) 오후 7시', '서울 강남구 강남대로102길 34 ALVER', '총 플로우 진행인원 30명 마감', '참가비 25,000원'],
    program: ['50분 플로우', '50분 티타임'],
    programNote: '플로우 진행 시간은 조금 늘어날 수 있습니다.',
    locationImage: {
      src: '/media/alver-gangnam.png',
      alt: '애니멀플로우 EP6가 진행되는 강남 알베르 실내 공간',
      caption: '강남 알베르 실내 단체 플로우 진행 공간입니다.',
    } satisfies LocationImage,
    compactCta: 'EP6 강남 알베르 신청하기',
    cta: 'EP6 강남 알베르 신청하기',
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
