import { ApplyLink } from './ApplyLink'
import { siteContent } from '../content/siteContent'

export function MobileApplyBar() {
  return (
    <aside className="mobile-apply" aria-label="빠른 신청">
      <ApplyLink>{siteContent.applicationCta}</ApplyLink>
    </aside>
  )
}
