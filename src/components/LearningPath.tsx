import { siteContent } from '../content/siteContent'

const descriptions = [
  '손과 발로 바닥을 지지하며 몸의 기준점을 만듭니다.',
  '기준 자세를 유지한 채 여러 방향으로 이동합니다.',
  '한 자세에서 다른 자세로 중심을 조절해 전환합니다.',
  '배운 움직임을 연결해 나만의 흐름을 완성합니다.',
] as const

export function LearningPath() {
  return (
    <section className="learning section" id="learn" aria-labelledby="learn-title">
      <div className="section-heading section-heading--split">
        <div>
          <p className="section-index">03 — LEARN, NOT REPEAT</p>
          <h2 id="learn-title">오늘도 같은 운동이 아니라,<br />매주 하나의 움직임을 배웁니다.</h2>
        </div>
        <p>
          단순히 따라 하고 끝나는 수업이 아닙니다. 하나씩 이해하고 연결하면서
          “나는 지금 무언가를 배우고 있다”는 진척감을 만듭니다.
        </p>
      </div>
      <ol className="learning-path" aria-label="FIRST FLOW 학습 과정">
        {siteContent.learningSteps.map((step, index) => (
          <li key={step.className}>
            <span>{step.className}</span>
            <strong>{step.name}</strong>
            <p>{descriptions[index]}</p>
            <span className="learning-path__arrow" aria-hidden="true">↘</span>
          </li>
        ))}
      </ol>
    </section>
  )
}
