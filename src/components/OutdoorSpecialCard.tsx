import { siteContent } from '../content/siteContent'
import { ApplyLink } from './ApplyLink'

type OutdoorSpecialCardProps = {
  compact?: boolean
}

export function OutdoorSpecialCard({ compact = false }: OutdoorSpecialCardProps) {
  return (
    <aside
      className={`outdoor-special${compact ? ' outdoor-special--compact' : ''}`}
      aria-label="야외 특강 안내"
    >
      <span className="outdoor-special__date-mark" aria-hidden="true">20</span>
      <p className="outdoor-special__eyebrow">SPECIAL OUTDOOR CLASS</p>
      <h3>{siteContent.outdoorSpecial.title}</h3>
      <ul className="outdoor-special__facts" aria-label="야외 특강 정보">
        {siteContent.outdoorSpecial.facts.map((fact) => <li key={fact}>{fact}</li>)}
      </ul>
      <ApplyLink href={siteContent.outdoorSpecial.applicationUrl} className="outdoor-special__link">
        {compact ? '서울식물원 야외 특강 신청하기' : '야외 애니멀 특강 신청하기'}
      </ApplyLink>
    </aside>
  )
}
