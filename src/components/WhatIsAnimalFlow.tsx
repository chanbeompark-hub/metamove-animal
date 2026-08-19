import { siteContent } from '../content/siteContent'

const movementSequence = [
  ['01', 'SUPPORT', '손과 발로 바닥을 지지하고'],
  ['02', 'TRAVEL', '몸을 앞뒤와 옆으로 이동시키고'],
  ['03', 'ROTATE', '새로운 방향으로 몸을 회전하고'],
  ['04', 'CONNECT', '하나의 동작을 다음 동작으로 연결합니다.'],
] as const

export function WhatIsAnimalFlow() {
  return (
    <section className="about section" id="proof" aria-labelledby="about-title">
      <div className="section-heading">
        <p className="section-index">01 — WHAT IS ANIMAL FLOW</p>
        <h2 id="about-title">이름은 생소해도,<br />움직임은 직관적입니다.</h2>
        <p>
          전문용어부터 외우지 않습니다. 내 몸과 바닥의 관계를 느끼고,
          하나의 움직임을 다음 움직임으로 이어갑니다.
        </p>
      </div>
      <figure className="about__proof">
        <img
          src={siteContent.media.movement}
          alt="여러 참가자가 바닥을 지지하며 이동하는 Animal Flow 수업 장면"
          loading="lazy"
        />
        <figcaption>
          <span>REAL CLASS · REAL MOVEMENT</span>
          <strong>손과 발로 지지하고, 이동하고, 방향을 바꿉니다.</strong>
        </figcaption>
      </figure>
      <ol className="movement-sequence" aria-label="Animal Flow 움직임 순서">
        {movementSequence.map(([number, name, description]) => (
          <li key={number}>
            <span className="movement-sequence__number">{number}</span>
            <strong>{name}</strong>
            <p>{description}</p>
          </li>
        ))}
        <li className="movement-sequence__result">
          <span>RESULT</span>
          <strong>나만의 하나의<br />FLOW가 만들어집니다.</strong>
        </li>
      </ol>
    </section>
  )
}
