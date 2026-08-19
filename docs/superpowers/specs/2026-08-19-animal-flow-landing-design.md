# Animal Flow FIRST FLOW 랜딩 페이지 설계

## 목표

상동 지역의 운동 입문자가 Animal Flow를 일반적인 그룹운동이 아닌 `새로운 움직임을 배우고 연결하는 프로그램`으로 이해하고, `FIRST FLOW` 무료 체험을 네이버폼으로 신청하게 한다.

성공 기준은 다음과 같다.

- 첫 화면에서 프로그램명, 핵심 약속, 실제 Flow 영상, 위치, 4인 소규모 정보, 신청 버튼이 명확하다.
- MOVE, CONTROL, CONNECT, FLOW가 운동 효과 목록이 아니라 이어지는 학습 경험으로 보인다.
- 초보자 우려 세 가지에 직접 답한다.
- 첫 화면과 마지막 화면의 신청 버튼이 모두 `https://naver.me/xsZWHr8t`으로 연결된다.
- 데스크톱과 320/360/390/430px에서 수평 스크롤이나 텍스트·버튼 잘림이 없다.
- 영상 자동재생이 실패하거나 reduced motion을 선호하는 환경에서도 내용과 신청 동선이 유지된다.

## 기술 구성

빈 Git 프로젝트에 Vite + React 기반의 단일 페이지를 만든다. 콘텐츠와 미디어 경로, 네이버폼 URL은 한 데이터 모듈에서 관리한다. 스타일은 전역 토큰과 컴포넌트별 CSS로 구성한다. 과도한 UI 라이브러리는 사용하지 않고, 애니메이션은 Motion for React 또는 가벼운 CSS/IntersectionObserver 중 구현 시 번들·표현력을 비교해 한 가지 방식만 선택한다.

예상 컴포넌트 경계:

- `App`: 섹션 순서와 전역 CTA 상태 관리.
- `Header`: 브랜드 워드마크, 주요 앵커, 신청 CTA.
- `Hero`: 헤드라인, 프로그램 요약, 첫 신청 CTA, 영상/포스터.
- `WhatIsAnimalFlow`: 지지·이동·회전·연결의 설명.
- `FlowRail`: MOVE·CONTROL·CONNECT·FLOW 연결 서사.
- `LearningPath`: CLASS 01–04의 진척 구조.
- `BeginnerFAQ`: 초보자 우려와 답변.
- `ProofGallery`: 실제 수업·지도·커뮤니티 사진.
- `FirstFlowCTA`: 정원, 난이도, 시간, 장소, 마지막 신청 CTA.
- `MobileApplyBar`: 모바일 하단 고정 신청 버튼.

각 컴포넌트는 화면 표현만 담당하며 신청 URL과 콘텐츠는 외부 데이터에서 받는다.

## 콘텐츠 순서

1. 헤더
   - ANIMAL FLOW / METAMOVE GYM 표기.
   - 데스크톱에서 주요 앵커와 신청 버튼.
   - 모바일에서 메뉴를 줄이고 고정 CTA로 행동을 보완.
2. 히어로
   - `내 몸으로 새로운 움직임을 배워보세요.`
   - 실제 Flow 영상.
   - `바닥을 지지하고, 이동하고, 회전하고, 연결하며 몸 전체를 사용하는 맨몸 움직임 클래스.`
   - `상동 · 4인 소규모 클래스`와 `FIRST FLOW 신청하기`.
3. What is Animal Flow
   - `이름만 보면 조금 생소합니다. 그런데 해보면 생각보다 직관적입니다.`
   - 지지 → 이동 → 방향 전환 → 연결 → FLOW를 큰 숫자와 짧은 문장으로 설명.
4. FlowRail
   - MOVE, CONTROL, CONNECT, FLOW를 한 줄의 흐름으로 표현.
   - COORDINATION과 SUPPORT는 설명 안에 녹이고 핵심 브랜드 축은 네 단어로 통일.
5. LearningPath
   - CLASS 01 Beast Position.
   - CLASS 02 Traveling.
   - CLASS 03 Transition.
   - CLASS 04 FLOW.
   - `오늘도 같은 운동`이 아니라 `매주 하나의 움직임을 배운다`는 진척감 강조.
6. ProofGallery
   - `2XU-3235.jpg`: 개별 Beast/지지 동작.
   - `2XU-3712.jpg`: 지도와 CONTROL.
   - `2XU-3963.jpg`: 연결과 이동의 에너지.
   - `2XU-4533.jpg`: 커뮤니티와 완성된 경험.
   - 야외 단체 사진은 마지막 신뢰·커뮤니티 증거에 제한적으로 사용.
7. BeginnerFAQ
   - `몸이 뻣뻣한데요?`, `운동을 잘 못하는데요?`, `영상이 어려워 보여요?`.
   - 핵심 답: `처음부터 FLOW를 잘하는 사람이 아니라 하나씩 배우고 싶은 사람을 위한 클래스입니다.`
8. FIRST FLOW 신청
   - 정원 4명, BEGINNER, 약 50분, 메타무브짐 PT 상동역점, 무료 체험.
   - 네이버폼 신청 버튼과 외부 페이지 안내.
9. 푸터
   - `MOVE. CONTROL. CONNECT. FLOW.`와 상단 이동.

## 미디어 처리

- 영상 원본은 사용자 제공 `KakaoTalk_20260712_212224437.mp4`이며 약 1분 18초, 약 31MB다.
- 프로젝트의 `public/media`에 복사하고, `muted`, `loop`, `playsInline`, `autoPlay`를 사용한다.
- 전체 파일을 즉시 내려받는 부담을 줄이도록 `preload="metadata"`를 우선 적용하고, 실제 브라우저에서 자동재생 시작성과 첫 화면 지연을 확인한다.
- poster는 사용자 제공 JPG 중 첫 장면과 가장 가까운 동작 사진으로 구성한다.
- 모바일에서 인물 또는 중심 동작이 잘리지 않도록 실제 프레임을 보고 `object-position`을 조정한다.
- 원본 사진은 그대로 다수 배포하지 않고 실제 사용 컷만 복사한다. 필요 시 품질을 유지하는 선에서 웹용 크기로 최적화한다.

## 신청 데이터 흐름

사이트는 개인정보를 직접 수집하거나 저장하지 않는다. 모든 신청 CTA는 네이버폼 단축 URL을 새 창으로 연다.

```text
Hero CTA ─┐
Header CTA ├─> https://naver.me/xsZWHr8t ─> 네이버폼 응답 저장
Final CTA ┤
Mobile CTA┘
```

페이지 코드에는 폼의 질문이나 DB 구조를 복제하지 않는다. 추후 폼 주소가 바뀌면 콘텐츠 설정의 `applicationUrl` 한 곳만 변경한다.

## 접근성과 오류 처리

- 모든 신청 링크에는 명확한 텍스트, 키보드 포커스 링, 새 창 안내를 제공한다.
- 영상에는 의미 있는 poster와 텍스트 대체 설명을 제공하고, 음성이 없어도 이해 가능해야 한다.
- `prefers-reduced-motion`에서는 자동재생과 큰 이동 모션을 중단하고 최종 상태를 표시한다.
- 영상 로드 실패 시 poster 사진을 유지한다.
- 외부 폼이 열리지 않더라도 현재 페이지가 깨지지 않는다.
- 이미지에는 장면의 목적을 설명하는 한국어 alt를 작성하되 장식용 이미지는 빈 alt를 사용한다.

## 검증

- 개발 서버에서 데스크톱 첫 화면, 전체 페이지, 모바일 320/360/390/430px를 육안 검사한다.
- hero와 마지막 CTA의 href, target, rel을 검사한다.
- 영상 autoplay/muted/loop/playsInline/currentSrc와 poster fallback을 확인한다.
- 정상 상태와 영상 실패/reduced-motion 상태를 확인한다.
- 키보드로 모든 링크와 FAQ를 이동할 수 있는지 확인한다.
- 콘솔 오류, 수평 스크롤, 잘린 한국어, 얼굴·동작 크롭, CTA 가시성을 검사한다.
- lint와 production build를 실행한다.
- `DESIGN_BRIEF.md` 검증 스크립트를 구현 전후로 실행한다.

## 제외 범위

- 자체 DB, 로그인, 결제, 관리자 페이지, 네이버폼 응답 자동 동기화.
- 근거 없는 회원 수, 후기, 신체 개선 수치.
- 새로운 로고 제작이나 외부 스톡 이미지 구매.
- 실제 영상 내용과 무관한 3D 또는 과도한 스크롤 효과.
