import { siteContent } from '../content/siteContent'
import { ApplyLink } from './ApplyLink'

type OutdoorSpecialCardProps = {
  compact?: boolean
}

export function OutdoorSpecialCard({ compact = false }: OutdoorSpecialCardProps) {
  return (
    <aside
      className={`outdoor-special${compact ? ' outdoor-special--compact' : ''}`}
      aria-label={siteContent.outdoorSpecial.ariaLabel}
    >
      <span className="outdoor-special__date-mark" aria-hidden="true">
        {siteContent.outdoorSpecial.dateMark}
      </span>
      <p className="outdoor-special__eyebrow">{siteContent.outdoorSpecial.eyebrow}</p>
      <h3>{siteContent.outdoorSpecial.title}</h3>
      <p className="outdoor-special__tagline">{siteContent.outdoorSpecial.tagline}</p>
      <ul className="outdoor-special__facts" aria-label="EP6 특강 정보">
        {siteContent.outdoorSpecial.facts.map((fact) => <li key={fact}>{fact}</li>)}
      </ul>
      <div className="outdoor-special__program" aria-label="EP6 진행 시간">
        <p>PROGRAM</p>
        <ol>
          {siteContent.outdoorSpecial.program.map((item) => <li key={item}>{item}</li>)}
        </ol>
      </div>
      {!compact && (
        <p className="outdoor-special__note">{siteContent.outdoorSpecial.programNote}</p>
      )}
      {!compact && siteContent.outdoorSpecial.locationImage && (
        <figure className="outdoor-special__location">
          <img
            src={siteContent.outdoorSpecial.locationImage.src}
            alt={siteContent.outdoorSpecial.locationImage.alt}
            loading="lazy"
            decoding="async"
          />
          <figcaption>{siteContent.outdoorSpecial.locationImage.caption}</figcaption>
        </figure>
      )}
      <ApplyLink href={siteContent.outdoorSpecial.applicationUrl} className="outdoor-special__link">
        {compact ? siteContent.outdoorSpecial.compactCta : siteContent.outdoorSpecial.cta}
      </ApplyLink>
    </aside>
  )
}
