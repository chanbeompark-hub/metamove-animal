import { siteContent } from './content/siteContent'

const applicationProps = {
  href: siteContent.applicationUrl,
  target: '_blank',
  rel: 'noopener noreferrer',
}

export default function App() {
  return (
    <main>
      <section aria-labelledby="hero-title">
        <p>ANIMAL FLOW · METAMOVE GYM</p>
        <h1 id="hero-title">내 몸으로 새로운 움직임을 배워보세요.</h1>
        <a {...applicationProps}>FIRST FLOW 신청하기 ↗</a>
      </section>
      <section aria-labelledby="first-flow-title">
        <h2 id="first-flow-title">FIRST FLOW</h2>
        <a {...applicationProps}>FIRST FLOW 신청하기 ↗</a>
      </section>
    </main>
  )
}
