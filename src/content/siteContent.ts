export const siteContent = {
  applicationUrl: 'https://naver.me/xsZWHr8t',
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
    video: '/media/flow-hero.mp4',
    poster: '/media/flow-poster.webp',
    beast: '/media/beast.webp',
    control: '/media/control.webp',
    movement: '/media/movement.webp',
    community: '/media/community.webp',
    outdoorCommunity: '/media/outdoor-community.webp',
  },
} as const
