import { ApplyLink } from './ApplyLink'

export function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="#top" aria-label="Animal Flow 홈">
        <strong>ANIMAL FLOW</strong>
        <span>METAMOVE · SANGDONG</span>
      </a>
      <nav aria-label="주요 메뉴">
        <a href="#about">프로그램</a>
        <a href="#learn">배우는 과정</a>
        <a href="#first-flow">FIRST FLOW</a>
      </nav>
      <ApplyLink className="header-apply">신청하기</ApplyLink>
    </header>
  )
}
