import { siteContent } from '../content/siteContent'

const moments = [
  { src: siteContent.media.beast, index: '01', title: '바닥을 지지하는 첫 기준', alt: '바닥에 손과 발을 대고 Beast 자세를 연습하는 참가자' },
  { src: siteContent.media.control, index: '02', title: '중심을 이해하는 코칭', alt: '강사가 참가자의 회전 자세와 중심 이동을 지도하는 장면' },
  { src: siteContent.media.movement, index: '03', title: '각자의 속도로 이어지는 이동', alt: '여러 참가자가 바닥을 지지하며 동작을 연결하는 수업 장면' },
  { src: siteContent.media.community, index: '04', title: '함께 완성한 하나의 FLOW', alt: 'Animal Flow 수업을 마친 참가자들이 함께 포즈를 취한 장면' },
] as const

export function ProofGallery() {
  return (
    <section className="moments section" id="moments" aria-labelledby="moments-title">
      <div className="section-heading section-heading--split">
        <div>
          <p className="section-index">03 — REAL FLOW MOMENTS</p>
          <h2 id="moments-title">설명보다 빠른,<br />실제 움직임의 순간.</h2>
        </div>
        <p>처음부터 완성된 동작을 요구하지 않습니다. 지지하고, 시도하고, 지도받고, 함께 연결합니다.</p>
      </div>
      <div className="proof-grid">
        {moments.map((moment) => (
          <figure key={moment.index}>
            <img src={moment.src} alt={moment.alt} loading="lazy" />
            <figcaption><span>{moment.index}</span><strong>{moment.title}</strong></figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
