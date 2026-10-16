type LocationImage = {
  src: string
  alt: string
  caption: string
}

export const siteContent = {
  applicationUrl: 'https://naver.me/xsZWHr8t',
  outdoorSpecial: {
    applicationUrl: 'https://form.naver.com/response/Hjm0ap3eogv',
    dateMark: '17',
    title: '일산호수공원 선셋 애니멀 특강',
    tagline: '비 예보로 일정이 하루 앞당겨졌습니다. 토요일 오후 5시, 선셋 플로우로 만나요.',
    facts: ['10월 17일(토) 오후 5시', '일산호수공원 2공영주차장 앞 호수 잔디', '총 플로우 진행인원 25~30명', '참가비 5,000원'],
    locationImage: {
      src: '/media/ilsan-lake-park-map.webp',
      alt: '일산호수공원 2공영주차장 앞 호수 잔디 위치 지도',
      caption: '지도에서 빨간 핀으로 표시된 집결 장소입니다.',
    } satisfies LocationImage,
    compactCta: '일산호수공원 특강 신청하기',
    cta: '야외 애니멀 특강 신청하기',
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
