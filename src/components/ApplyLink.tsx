import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { siteContent } from '../content/siteContent'

type ApplyLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode
}

export function ApplyLink({ children, className = '', ...props }: ApplyLinkProps) {
  return (
    <a
      href={siteContent.applicationUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`apply-link ${className}`.trim()}
      {...props}
    >
      <span>{children}</span>
      <span aria-hidden="true" className="apply-link__arrow">↗</span>
    </a>
  )
}
