import { searchInfo } from '../content/searchInfo'

export function CenterInfo() {
  return <details className="center-info" id="center-info">
    <summary>운영 센터·지역 수업 안내</summary>
    <section aria-label="운영 센터와 클래스 안내">
      <h2>애니멀플로우 클래스와 전국 행사</h2>
      <p>{searchInfo.description}</p>
      <p>전국 클래스·특강의 장소와 일정은 행사별로 달라집니다. 위 행사 안내와 신청서에서 최신 정보를 확인해주세요. 상동의 센터 수업과 외부 행사 신청은 각각의 안내를 따릅니다.</p>
      <h3>운영 센터 — 메타무브짐 PT 상동역점</h3>
      <address>경기도 부천시 원미구 송내대로265번길 67 월드컵타운 3층</address>
      <p>상동역 도보 약 5분. 상동 PT·상동역 PT 개인 지도와 자유운동 이용 조건은 센터에 문의해주세요.</p>
      <nav aria-label="운영 센터 링크"><a href={searchInfo.centerUrl}>상동 PT·상동역 PT 센터 안내 ↗</a><a href="https://metamove-pt.parkbujang.chatgpt.site/directions">위치·주차·운영시간 ↗</a></nav>
      <h3 id="class-faq">클래스·참여 안내</h3>
      <dl>{searchInfo.faqs.map(item=><div key={item.question}><dt>{item.question}</dt><dd>{item.answer}</dd></div>)}</dl>
    </section>
  </details>
}
