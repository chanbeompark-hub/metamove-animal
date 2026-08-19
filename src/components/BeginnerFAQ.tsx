import { siteContent } from '../content/siteContent'

export function BeginnerFAQ() {
  return (
    <section className="faq section" aria-labelledby="faq-title">
      <div className="faq__lead">
        <p className="section-index">05 — MADE FOR BEGINNERS</p>
        <h2 id="faq-title">잘하는 사람이 아니라,<br /><em>배우고 싶은 사람</em>을 위해.</h2>
        <p>
          처음부터 FLOW를 잘하는 사람이 아니라 하나씩 배우고 싶은 사람을 위한 클래스입니다.
        </p>
      </div>
      <div className="faq__list">
        {siteContent.faq.map((item, index) => (
          <details key={item.question} open={index === 0}>
            <summary><span>0{index + 1}</span>{item.question}<i aria-hidden="true">+</i></summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  )
}
