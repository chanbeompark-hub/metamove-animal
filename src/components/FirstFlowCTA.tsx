import { siteContent } from '../content/siteContent'
import { ApplyLink } from './ApplyLink'

export function FirstFlowCTA() {
  return (
    <section
      className="first-flow section"
      id="first-flow"
      aria-labelledby="first-flow-title"
      aria-label="FIRST FLOW 신청 안내"
    >
      <figure className="first-flow__visual">
        <img
          src={siteContent.media.outdoorCommunity}
          alt="야외에서 Animal Flow 프로그램을 함께한 참가자들의 단체 사진"
          loading="lazy"
        />
        <figcaption>YOUR FIRST MOVEMENT EXPERIENCE</figcaption>
      </figure>
      <div className="first-flow__content">
        <p className="section-index">06 — YOUR FIRST FLOW</p>
        <p className="first-flow__kicker">영상으로 보는 것과 직접 움직여보는 것은 완전히 다릅니다.</p>
        <h2 id="first-flow-title">FIRST<br />FLOW</h2>
        <p className="first-flow__description">
          애니멀플로우를 처음 경험해보세요. 기본 자세부터 하나씩 진행합니다.
        </p>
        <dl className="class-facts" aria-label="FIRST FLOW 클래스 정보">
          {siteContent.classFacts.map((fact) => (
            <div key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
        <div className="first-flow__apply">
          <aside className="outdoor-special" aria-label="야외 특강 안내">
            <span className="outdoor-special__date-mark" aria-hidden="true">20</span>
            <p className="outdoor-special__eyebrow">SPECIAL OUTDOOR CLASS</p>
            <h3>{siteContent.outdoorSpecial.title}</h3>
            <ul className="outdoor-special__facts" aria-label="야외 특강 정보">
              {siteContent.outdoorSpecial.facts.map((fact) => <li key={fact}>{fact}</li>)}
            </ul>
            <ApplyLink href={siteContent.outdoorSpecial.applicationUrl} className="outdoor-special__link">
              야외 애니멀 특강 신청하기
            </ApplyLink>
          </aside>
          <span>무료 체험 클래스</span>
          <ApplyLink>FIRST FLOW 신청하기</ApplyLink>
          <small>네이버폼이 새 창에서 열립니다.</small>
        </div>
      </div>
    </section>
  )
}
