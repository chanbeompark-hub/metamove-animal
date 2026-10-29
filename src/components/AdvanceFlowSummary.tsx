import { siteContent } from '../content/siteContent'

export function AdvanceFlowSummary() {
  return (
    <div className="advance-flow-summary" aria-label="ADVANCE FLOW 그룹 특강 정보">
      <p>{siteContent.advanceFlow.title}</p>
      <ul>
        {siteContent.advanceFlow.details.map((detail) => <li key={detail}>{detail}</li>)}
      </ul>
    </div>
  )
}
