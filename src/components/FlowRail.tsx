import { siteContent } from '../content/siteContent'
import { useReveal } from '../hooks/useReveal'

export function FlowRail() {
  const { ref, isVisible } = useReveal<HTMLDivElement>()

  return (
    <section className="values section section--blue" id="values" aria-labelledby="values-title">
      <div className="values__intro">
        <p className="section-index">02 — THE FLOW PRINCIPLES</p>
        <h2 id="values-title">운동 효과보다,<br />움직임을 배우는 경험.</h2>
        <p>네 가지 경험은 따로 끝나지 않습니다. 하나의 선 위에서 다음 움직임으로 이어집니다.</p>
      </div>
      <div
        ref={ref}
        className={`flow-rail ${isVisible ? 'is-visible' : ''}`}
        aria-label="Animal Flow 핵심 가치"
      >
        <span className="flow-rail__line" aria-hidden="true" />
        {siteContent.flowSteps.map((step, index) => (
          <article key={step.name} className="flow-rail__step" style={{ '--step': index } as React.CSSProperties}>
            <span className="flow-rail__marker">0{index + 1}</span>
            <h3>{step.name}</h3>
            <p>{step.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
