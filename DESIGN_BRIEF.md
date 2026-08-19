# Design Brief

## Product job

상동 지역의 Animal Flow 입문자가 프로그램의 정체성과 학습 과정을 이해하고, 첫 화면 또는 마지막 화면에서 네이버폼을 열어 `FIRST FLOW` 체험을 신청한다.

## Direction

흰 바탕과 코발트 블루를 중심으로 한 에디토리얼 스포츠 랜딩 페이지. 큰 실제 Flow 영상, 비대칭 편집 그리드, 연결선으로 이어지는 학습 서사를 사용해 전문성과 움직임의 연속성을 동시에 보여준다.

## Brand reading

- Immutable identity: `ANIMAL FLOW`, `FIRST FLOW`, 메타무브짐 PT 상동역점, 4인 소규모, BEGINNER, 약 50분, 무료 체험.
- Repeatable shapes/materials: 바닥을 암시하는 수평선, 동작을 잇는 궤적선, 프레임 밖으로 이어지는 큰 숫자와 단계 표기.
- Existing inconsistencies to remove: 일반적인 운동 효과 나열, 과도한 카드 반복, 근거 없는 후기·수치·효능 주장.
- Media provenance: 사용자가 제공한 MP4 1개와 JPG 11개만 사용한다. 외부 스톡 사진과 타 브랜드 로고를 새로 추가하지 않는다.

## Reference evidence

- `https://slow-run-club-jichuk.pages.dev/`를 2026-08-19에 데스크톱과 390px 모바일에서 직접 확인했다.
- 확인한 화면: 상단 내비게이션, 비대칭 히어로, 큰 카테고리 문장, 실제 공간 이미지, 원칙 목록, 진행 순서, 마지막 신청 섹션, 모바일 고정 CTA.
- 관찰한 규칙: 첫 화면에서 질문·약속·증거·CTA가 함께 보이고, 큰 타이포와 강한 단색 그래픽이 좌우로 긴장감을 만든다. 모바일에서는 메뉴를 생략하고 콘텐츠 순서를 단일 흐름으로 바꾸며 신청 CTA를 하단에 고정한다.
- 그대로 복사하지 않을 요소: 1986 명칭과 로고, 주황색, 러닝 코스 그래픽, 문구, 전체 레이아웃의 정확한 비율.

## Reference synthesis

- Structure comes from: Slow Run Club의 `질문 → 약속 → 실제 증거 → 원칙 → 진행 → 신청` 순서.
- Interaction comes from: 첫 화면 CTA, 마지막 CTA, 모바일 하단 고정 CTA가 동일한 외부 폼으로 연결되는 방식.
- Visual tone comes from: 강한 한국어 헤드라인, 얇은 그리드선, 실제 미디어와 단색 면의 대비.
- Hook/copy energy comes from: 운동 효과 대신 프로그램의 핵심 행동을 짧고 구체적으로 제시하는 방식.
- Motion/media behavior comes from: 사용자 제공 Flow 영상을 첫 3초의 직접적인 증거로 사용하고, 연결선과 단계가 스크롤에 맞춰 조립된다.
- The final screen will not copy: 벤치마크의 주황색, 러닝 코스, 브랜드명, 문구, 로고, 동일한 섹션 배치.

## Reference implementation map

| Reference evidence | Extracted principle | Local component | Motion/state | Mobile translation | Acceptance evidence |
|---|---|---|---|---|---|
| Slow Run Club 데스크톱 히어로 | 한 화면에 질문·약속·미디어·CTA 배치 | `Hero` | 영상 페이드가 아니라 타이포·선·CTA가 순서대로 조립 | 영상 우선 배치, 문구 축약, 하단 고정 CTA | 데스크톱/390px 첫 화면 캡처 |
| Slow Run Club 원칙 목록 | 번호와 짧은 설명으로 철학 전달 | `FlowRail` | MOVE→CONTROL→CONNECT→FLOW 연결선 진행 | 가로 카드가 아닌 세로 레일로 전환 | 데스크톱에서 4개 원과 파란 연결선 전개 확인 |
| Slow Run Club 진행 순서 | 방문자가 다음 단계를 예측 | `LearningPath` | 현재 단계 강조와 이미지 크롭 변화 | 스와이프가 아닌 읽기 순서형 4단계 | 데스크톱/모바일 순서 확인 |
| Slow Run Club 마지막 신청 영역 | 결정 정보와 CTA를 한곳에 압축 | `FirstFlowCTA` | CTA hover/focus 및 외부 링크 피드백 | 전체 폭 CTA, 핵심 정보 2열→2x2 | 마지막 섹션 캡처 |
| 사용자 제공 MP4/JPG | 주장 대신 실제 움직임과 지도 장면 제시 | `Hero`, `WhatIsAnimalFlow`, `ProofGallery` | 자동재생·반복·무음·inline, 사진 hover crop | 영상 대신 poster 우선 노출, 사진 수와 높이 축소 | MP4 currentSrc·재생 상태와 390px poster 크롭 확인 |

## Signature composition and component

- Signature composition: 히어로의 5:7 비대칭 편집 그리드와, 페이지 중앙을 관통해 `지지 → 이동 → 회전 → 연결 → FLOW`를 잇는 파란 궤적선.
- Signature component: `FlowRail`. MOVE, CONTROL, CONNECT, FLOW 네 단계가 하나의 선 위에서 순차적으로 활성화되고, 각 단계에 실제 수업 사진 또는 짧은 동작 설명이 결합된다.

## Motion storyboard

| Beat | Trigger | Elements | From → to | Duration/ease | Purpose | Reduced motion |
|---|---|---|---|---|---|---|
| 첫 장면 조립 | 페이지 로드 | eyebrow, headline, blue rule, CTA, video frame | 아래/옆 18px·투명 → 제자리·불투명 | 700–1100ms, cubic-bezier(.22,1,.36,1) | 영상과 약속을 한 장면으로 조립 | 최종 상태 즉시 표시 |
| Flow 연결 | `FlowRail` 진입/스크롤 | 궤적선과 4개 단계 | 선 0→100%, 단계 inactive→active | 900ms, ease-out + 90ms stagger | 개별 동작이 Flow로 이어짐을 설명 | 완성된 선과 모든 단계 표시 |
| 학습 진척 | 각 단계 진입 | 숫자, 제목, 이미지 마스크 | 12px·저대비 → 제자리·정상 대비 | 450ms | 배운다는 진척감 강조 | 정적 정상 대비 |
| 미디어 반응 | hover/focus | 사진, 캡션, 화살표 | crop 100%→103%, 선 0→100% | 180–320ms | 탐색 가능성과 깊이 제공 | 확대 제거, 색/선 상태만 유지 |
| 신청 피드백 | CTA hover/focus | 버튼 면, 화살표 | blue→navy, arrow x 0→4px | 180ms | 외부 신청 행동 명확화 | 색상과 포커스 링만 유지 |

## Tokens

- Font: 로컬 설치 가능한 Gmarket Sans를 우선 검토하되, 전문적인 스포츠 에디토리얼 톤과 긴 한국어 헤드라인 폭을 브라우저에서 확인한다. 부적합하면 `Pretendard Variable, Pretendard, Noto Sans KR, sans-serif`를 사용한다.
- Text colors: navy `#071A3D`, muted `#53627A`, white `#FFFFFF`.
- Surface colors: white `#FFFFFF`, ice `#F3F7FF`, navy `#071A3D`.
- Accent and semantic colors: cobalt `#135DFF`, sky `#8EC5FF`, focus `#0047D8`.
- Spacing steps: 4, 8, 12, 20, 32, 48, 72, 112.
- Radius: 0–8px. 사진 프레임은 4px, 버튼은 4px.
- Border and shadow: 1px navy/12% 또는 blue/25%; 그림자는 CTA와 겹치는 미디어에만 제한적으로 사용.
- Motion: 180ms feedback, 450ms section reveal, 900ms orchestrated sequence.

## Copy ladder

1. Tension: 이름만 보면 조금 생소합니다.
2. Promise: 내 몸으로 새로운 움직임을 배워보세요.
3. Proof: 손과 발로 바닥을 지지하고, 이동하고, 회전하고, 연결하는 실제 Flow 영상과 수업 사진.
4. Choice: Beast Position → Traveling → Transition → FLOW.
5. Action: FIRST FLOW 신청하기.

## Screen priorities

1. 첫 화면에서 Animal Flow가 무엇인지 영상으로 즉시 이해하고 신청할 수 있다.
2. 운동 효과보다 MOVE, CONTROL, CONNECT, FLOW라는 학습 정체성을 이해한다.
3. 초보자 우려를 해소하고 FIRST FLOW의 정원·난이도·시간·장소를 확인한 뒤 신청한다.

## Behavior that must remain unchanged

- 첫 화면과 마지막 화면 신청 버튼은 모두 `https://naver.me/xsZWHr8t`을 새 창으로 연다.
- 외부 폼 연결에는 `noopener noreferrer`를 적용한다.
- 사용자가 제공한 문구의 프로그램 정보와 위치를 임의로 변경하지 않는다.
- 영상 재생이 불가능할 경우 사용자 제공 사진을 poster/fallback으로 표시한다.

## Anti-template decisions

- Generic pattern being rejected: 동일 크기 카드가 반복되는 피트니스 템플릿, 그라데이션 CTA 남발, 근거 없는 수치·후기, 아이콘만 바꾼 운동 효과 목록.
- Project-specific replacement: 바닥선과 Flow 궤적선, 실제 수업 미디어, 연결되는 학습 단계, 처음부터 잘하는 사람이 아닌 하나씩 배우는 사람을 위한 카피.

## Responsive and motion contract

- Viewports: 320 / 360 / 390 / 430 / desktop.
- Desktop media behavior: 영상과 헤드라인이 첫 화면에서 나란히 보이며 영상은 세로형/가로형 원본 비율에 맞춰 핵심 동작을 보존한다.
- Mobile media behavior: 영상이 헤드라인보다 앞 또는 직후에 나타나고 높이를 제한해 첫 CTA가 과도하게 밀리지 않게 한다. 고정 CTA는 safe-area를 고려한다.
- Scroll reveal grammar: 제목 → 선 → 내용 순서만 사용하고 섹션마다 다른 효과를 만들지 않는다.
- Reduced-motion final state: 모든 요소를 최종 상태로 표시하고 영상 자동재생을 강제하지 않는다.
- Text-clipping viewports: 320/360/390/430px에서 한국어 음절 분리, 버튼 줄바꿈, 수평 스크롤을 검사한다.

## Verification captures

- 데스크톱 첫 화면, 실제 움직임 증거, 4열 FlowRail, 짙은 학습 경로, 마지막 신청 화면을 실제 브라우저에서 확인했다.
- 390px 첫 화면에서 poster 크롭, 한국어 제목, 고정 신청 CTA를 확인했다.
- 첫 장면 조립과 Flow 연결을 증명하는 5–10초 시퀀스.
- 네이버폼 링크 4개의 href/target/rel, 영상 currentSrc·자동재생·무음·반복 상태, 데스크톱 수평 오버플로 없음과 콘솔 오류 없음을 검사했다.
