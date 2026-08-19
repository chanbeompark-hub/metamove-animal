# Animal Flow FIRST FLOW Landing Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a professional white-and-blue responsive Animal Flow landing page that uses the supplied video and photography to explain the learning journey and sends every application CTA to the supplied Naver Form.

**Architecture:** Use a Vite React TypeScript single-page app with content and media paths centralized in one data module. Keep sections as focused presentational components, use semantic anchors for navigation, and implement motion with CSS plus IntersectionObserver so reduced-motion behavior stays simple and no animation dependency is required.

**Tech Stack:** Vite, React 19, TypeScript, Vitest, Testing Library, CSS, native HTML video, IntersectionObserver.

**Spec:** `docs/superpowers/specs/2026-08-19-animal-flow-landing-design.md`

## Global Constraints

- All application links use `https://naver.me/xsZWHr8t`, open in a new tab, and include `rel="noopener noreferrer"`.
- Use only the user-supplied MP4 and JPG files; do not add stock media, fabricated testimonials, unsupported metrics, or medical claims.
- Preserve the factual class details: capacity 4, BEGINNER, about 50 minutes, Meta Move Gym PT Sangdong Station branch, free trial.
- The hero and final section both contain a visible application CTA; mobile also has a safe-area-aware fixed CTA.
- Support `prefers-reduced-motion`, video poster fallback, keyboard focus, and 320/360/390/430px layouts without horizontal scroll.
- Do not add authentication, a local database, payments, or Naver Form response synchronization.

---

### Task 1: Scaffold the tested application shell and content contract

**Files:**
- Create: `package.json`
- Create: `vite.config.ts`
- Create: `tsconfig.json`
- Create: `tsconfig.app.json`
- Create: `tsconfig.node.json`
- Create: `index.html`
- Create: `src/main.tsx`
- Create: `src/App.tsx`
- Create: `src/content/siteContent.ts`
- Create: `src/test/setup.ts`
- Create: `src/App.test.tsx`
- Create: `.gitignore`

**Interfaces:**
- Produces: `siteContent` with `applicationUrl`, `classFacts`, `flowSteps`, `learningSteps`, `faq`, and `media` fields.
- Produces: `App` as the single route composition consumed by all later tasks.

- [ ] **Step 1: Create Vite/React package and TypeScript configuration**

Use `react`, `react-dom`, `vite`, `typescript`, `vitest`, `jsdom`, `@vitejs/plugin-react`, `@testing-library/react`, `@testing-library/jest-dom`, and `@testing-library/user-event`. Define scripts `dev`, `build`, `test`, and `test:run`.

- [ ] **Step 2: Write the failing application contract test**

```tsx
import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'

describe('application shell', () => {
  it('renders the program promise and both primary application links', () => {
    render(<App />)
    expect(screen.getByRole('heading', { name: /내 몸으로 새로운 움직임/ })).toBeInTheDocument()
    const links = screen.getAllByRole('link', { name: /FIRST FLOW 신청하기/ })
    expect(links.length).toBeGreaterThanOrEqual(2)
    links.forEach((link) => {
      expect(link).toHaveAttribute('href', 'https://naver.me/xsZWHr8t')
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', expect.stringContaining('noopener'))
    })
  })
})
```

- [ ] **Step 3: Run the test and confirm it fails**

Run: `pnpm install && pnpm test:run`

Expected: FAIL because `App` and its application links are not implemented.

- [ ] **Step 4: Implement the content contract and minimal semantic shell**

Define `siteContent.applicationUrl` exactly once and render temporary `Hero` and `FirstFlowCTA` semantic sections directly in `App` until Task 2 replaces them with focused components.

- [ ] **Step 5: Run tests and production build**

Run: `pnpm test:run && pnpm build`

Expected: PASS and a generated `dist/` directory.

- [ ] **Step 6: Commit the shell**

```powershell
git add package.json pnpm-lock.yaml vite.config.ts tsconfig*.json index.html .gitignore src
git commit -m "feat: scaffold Animal Flow landing"
```

---

### Task 2: Prepare owned media and build the conversion-first hero

**Files:**
- Create: `scripts/prepare-media.ps1`
- Create: `public/media/flow-hero.mp4`
- Create: `public/media/flow-poster.webp`
- Create: `public/media/beast.webp`
- Create: `public/media/control.webp`
- Create: `public/media/movement.webp`
- Create: `public/media/community.webp`
- Create: `public/media/outdoor-community.webp`
- Create: `src/components/Header.tsx`
- Create: `src/components/Hero.tsx`
- Create: `src/components/ApplyLink.tsx`
- Create: `src/components/MobileApplyBar.tsx`
- Create: `src/components/Hero.test.tsx`
- Modify: `src/App.tsx`
- Modify: `src/content/siteContent.ts`

**Interfaces:**
- Consumes: `siteContent.applicationUrl` and `siteContent.media`.
- Produces: `ApplyLink({ className?, children })`, `Header`, `Hero`, and `MobileApplyBar`.

- [ ] **Step 1: Write the failing hero media and CTA tests**

```tsx
render(<Hero />)
const video = screen.getByLabelText('Animal Flow 수업 동작 영상')
expect(video).toHaveAttribute('muted')
expect(video).toHaveAttribute('loop')
expect(video).toHaveAttribute('playsinline')
expect(video).toHaveAttribute('poster', '/media/flow-poster.webp')
expect(screen.getByRole('link', { name: /FIRST FLOW 신청하기/ })).toHaveAttribute(
  'href',
  'https://naver.me/xsZWHr8t',
)
```

- [ ] **Step 2: Run the focused test and confirm it fails**

Run: `pnpm vitest run src/components/Hero.test.tsx`

Expected: FAIL because the hero components do not exist.

- [ ] **Step 3: Add the deterministic media preparation script**

The PowerShell script copies the supplied MP4 and uses Windows/.NET image APIs to resize the five selected JPGs to a maximum long edge of 1800px. If WebP encoding is unavailable, the script writes optimized JPEG files and updates `siteContent.media` to those actual extensions; it must never invent or download media.

- [ ] **Step 4: Run media preparation and verify outputs**

Run: `powershell -ExecutionPolicy Bypass -File scripts/prepare-media.ps1`

Expected: `public/media/flow-hero.mp4` plus five images exist and every configured media path resolves.

- [ ] **Step 5: Implement the hero conversion path**

Implement a 5:7 editorial split with the copy `내 몸으로 새로운 움직임을 배워보세요.`, class summary, `상동 · 4인 소규모 클래스`, and CTA. The video uses `autoPlay`, `muted`, `loop`, `playsInline`, `preload="metadata"`, and the supplied poster. `ApplyLink` always applies the centralized URL, `_blank`, and `noopener noreferrer`.

- [ ] **Step 6: Run tests and build**

Run: `pnpm test:run && pnpm build`

Expected: PASS; hero video and application contract are present in the built app.

- [ ] **Step 7: Commit the hero and media pipeline**

```powershell
git add scripts public/media src/components src/content/siteContent.ts src/App.tsx
git commit -m "feat: add Flow hero and application path"
```

---

### Task 3: Build the connected learning narrative and proof gallery

**Files:**
- Create: `src/components/WhatIsAnimalFlow.tsx`
- Create: `src/components/FlowRail.tsx`
- Create: `src/components/LearningPath.tsx`
- Create: `src/components/ProofGallery.tsx`
- Create: `src/components/Narrative.test.tsx`
- Create: `src/hooks/useReveal.ts`
- Modify: `src/App.tsx`

**Interfaces:**
- Consumes: `siteContent.flowSteps`, `siteContent.learningSteps`, and optimized `siteContent.media` paths.
- Produces: sections with anchors `#about`, `#values`, `#learn`, and `#moments`.
- Produces: `useReveal<T extends HTMLElement>()` returning `{ ref, isVisible }`.

- [ ] **Step 1: Write failing narrative order tests**

```tsx
render(<App />)
expect(screen.getAllByRole('heading', { level: 3 }).map((node) => node.textContent)).toEqual(
  expect.arrayContaining(['MOVE', 'CONTROL', 'CONNECT', 'FLOW']),
)
const learning = screen.getByLabelText('FIRST FLOW 학습 과정')
expect(within(learning).getAllByText(/CLASS 0[1-4]/)).toHaveLength(4)
expect(within(learning).getByText('Beast Position')).toBeInTheDocument()
expect(within(learning).getByText('Traveling')).toBeInTheDocument()
expect(within(learning).getByText('Transition')).toBeInTheDocument()
```

- [ ] **Step 2: Run the focused test and confirm it fails**

Run: `pnpm vitest run src/components/Narrative.test.tsx`

Expected: FAIL because the narrative sections are absent.

- [ ] **Step 3: Implement WhatIsAnimalFlow and FlowRail**

Render `지지 → 이동 → 방향 전환 → 연결 → FLOW` as a semantic ordered sequence. Render MOVE, CONTROL, CONNECT, FLOW on one connected desktop rail and a vertical mobile rail. Use one animated line progress and stagger only the four step markers.

- [ ] **Step 4: Implement LearningPath and ProofGallery**

Pair CLASS 01–04 with Beast Position, Traveling, Transition, and FLOW. Use the prepared images for individual support, instructor control, dynamic movement, and community proof. Every meaningful image gets a Korean alt describing the visible action rather than a promotional claim.

- [ ] **Step 5: Implement the reveal hook with a reduced-motion guard**

The hook uses `IntersectionObserver` only when `prefers-reduced-motion: no-preference` matches. Otherwise it returns the final visible state immediately.

- [ ] **Step 6: Run tests and build**

Run: `pnpm test:run && pnpm build`

Expected: PASS with the four values and four learning stages in the expected semantic order.

- [ ] **Step 7: Commit the learning narrative**

```powershell
git add src/components src/hooks src/App.tsx
git commit -m "feat: connect movement learning narrative"
```

---

### Task 4: Add beginner reassurance, final FIRST FLOW conversion, and full visual system

**Files:**
- Create: `src/components/BeginnerFAQ.tsx`
- Create: `src/components/FirstFlowCTA.tsx`
- Create: `src/components/Footer.tsx`
- Create: `src/components/Conversion.test.tsx`
- Create: `src/styles/global.css`
- Modify: `src/main.tsx`
- Modify: `src/App.tsx`
- Modify: `index.html`

**Interfaces:**
- Consumes: `siteContent.faq`, `siteContent.classFacts`, and `ApplyLink`.
- Produces: accessible FAQ disclosure controls, final `#first-flow` conversion section, and complete responsive styling.

- [ ] **Step 1: Write failing FAQ and class fact tests**

```tsx
render(<App />)
expect(screen.getByText('몸이 뻣뻣한데요?')).toBeInTheDocument()
expect(screen.getByText('운동을 잘 못하는데요?')).toBeInTheDocument()
expect(screen.getByText('영상이 너무 어려워 보여요.')).toBeInTheDocument()
expect(screen.getByText('4명')).toBeInTheDocument()
expect(screen.getByText('BEGINNER')).toBeInTheDocument()
expect(screen.getByText('약 50분')).toBeInTheDocument()
expect(screen.getByText('메타무브짐 PT 상동역점')).toBeInTheDocument()
```

- [ ] **Step 2: Run the focused test and confirm it fails**

Run: `pnpm vitest run src/components/Conversion.test.tsx`

Expected: FAIL because FAQ and final conversion components do not exist.

- [ ] **Step 3: Implement the FAQ and final conversion section**

Use native `details` and `summary` so keyboard and no-JavaScript behavior remain usable. The final section includes capacity, level, duration, place, free-trial label, the copy `처음부터 FLOW를 잘하는 사람이 아니라 하나씩 배우고 싶은 사람을 위한 클래스입니다.`, and the second primary application CTA.

- [ ] **Step 4: Implement the white/blue editorial tokens and responsive transformation**

Define navy `#071A3D`, cobalt `#135DFF`, ice `#F3F7FF`, and white tokens. Desktop uses asymmetric grids and a horizontal FlowRail; 430px and below reorders media near the promise, switches FlowRail to vertical, reduces gallery density, hides nonessential navigation, and shows `MobileApplyBar` with `padding-bottom: env(safe-area-inset-bottom)`.

- [ ] **Step 5: Implement motion and interaction states**

Add the orchestrated hero assembly, FlowRail progress, learning-step reveal, image crop hover/focus, CTA arrow movement, FAQ open transition, visible keyboard focus, and a complete `@media (prefers-reduced-motion: reduce)` fallback.

- [ ] **Step 6: Run tests and build**

Run: `pnpm test:run && pnpm build`

Expected: PASS; the final CTA and all class facts are present.

- [ ] **Step 7: Commit the completed page**

```powershell
git add index.html src
git commit -m "feat: complete responsive FIRST FLOW page"
```

---

### Task 5: Verify behavior, responsive quality, motion evidence, and production output

**Files:**
- Create: `docs/verification/desktop-first-view.png`
- Create: `docs/verification/desktop-flow.png`
- Create: `docs/verification/mobile-first-view.png`
- Create: `docs/verification/mobile-final-cta.png`
- Create: `docs/verification/motion-sequence.md`
- Modify: `DESIGN_BRIEF.md`

**Interfaces:**
- Consumes: complete app and `DESIGN_BRIEF.md` implementation map.
- Produces: build/test evidence and acceptance captures linked from the brief.

- [ ] **Step 1: Run automated checks**

Run: `pnpm test:run && pnpm build`

Expected: all tests pass and Vite production build succeeds.

- [ ] **Step 2: Start the production preview and inspect application behavior**

Run: `pnpm vite preview --host 127.0.0.1`

Verify with the browser that hero/final/mobile CTAs have the exact Naver URL, `_blank`, and `noopener noreferrer`; do not submit the external form.

- [ ] **Step 3: Inspect desktop and public mobile widths**

Capture desktop first view and representative full flow. Inspect 320, 360, 390, and 430px for `document.documentElement.scrollWidth <= window.innerWidth`, natural Korean line breaks, stable CTA height, safe video crop, and no overlap with the fixed mobile bar.

- [ ] **Step 4: Verify media and alternate states**

Confirm the video reports a real `currentSrc`, is muted/looping/inline, and retains the poster when playback is blocked. Emulate reduced motion and verify that final states appear without large movement or forced autoplay.

- [ ] **Step 5: Record motion evidence and update the design brief**

Add three sequential screenshots or a 5–10 second trace description proving hero assembly and FlowRail progression. Replace each `Acceptance evidence` cell in `DESIGN_BRIEF.md` with the corresponding capture or verified check.

- [ ] **Step 6: Re-run the design brief and repository checks**

```powershell
node "C:\Users\박찬범\.codex\skills\jh-design\scripts\validate-design-brief.mjs" "DESIGN_BRIEF.md"
git diff --check
git status --short
```

Expected: design brief passes, no whitespace errors, and only intended verification artifacts are uncommitted.

- [ ] **Step 7: Commit and push verified implementation**

```powershell
git add DESIGN_BRIEF.md docs/verification
git commit -m "test: verify responsive Animal Flow experience"
git push origin main
```
