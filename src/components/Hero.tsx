import { siteContent } from '../content/siteContent'
import { ApplyLink } from './ApplyLink'

export function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <div className="hero__copy">
        <p className="eyebrow"><span /> ANIMAL FLOW · FIRST FLOW</p>
        <p className="hero__question">몸을 쓰는 방식도, 배울 수 있습니다.</p>
        <h1 id="hero-title" aria-label="내 몸으로 새로운 움직임을 배워보세요.">
          내 몸으로<br />새로운 움직임을<br /><em>배워보세요.</em>
        </h1>
        <p className="hero__description">
          바닥을 지지하고, 이동하고, 회전하고, 연결하며<br className="desktop-only" />
          몸 전체를 사용하는 맨몸 움직임 클래스.
        </p>
        <div className="hero__actions">
          <ApplyLink>FIRST FLOW 신청하기</ApplyLink>
          <a href="#about" className="text-link">움직임이 연결되는 방식 ↓</a>
        </div>
        <div className="hero__meta" aria-label="클래스 요약">
          <span>SANGDONG</span><strong>4 PEOPLE</strong><span>BEGINNER</span>
        </div>
      </div>
      <figure className="hero__media">
        <video
          aria-label="Animal Flow 수업 동작 영상"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={siteContent.media.poster}
        >
          <source src={siteContent.media.video} type="video/mp4" />
        </video>
        <figcaption>
          <span>REAL FLOW · REAL MOVEMENT</span>
          <strong>MOVE / CONTROL / CONNECT / FLOW</strong>
        </figcaption>
        <span className="hero__media-index" aria-hidden="true">01</span>
      </figure>
    </section>
  )
}
