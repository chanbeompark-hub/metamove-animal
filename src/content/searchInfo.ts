export const searchInfo = {
  url: 'https://metamove-animal.pages.dev/',
  title: '애니멀플로우 클래스·행사 | 메타무브짐',
  description: '메타무브짐이 운영하는 애니멀플로우(Animal Flow) 클래스와 전국 행사 안내. 초보자 입문부터 그룹 특강까지, 최신 행사별 장소·일정·신청 방법과 상동역 운영 센터 정보를 확인하세요.',
  centerUrl: 'https://metamove-pt.parkbujang.chatgpt.site/sangdong-pt',
  faqs: [
    {question: '애니멀플로우란 어떤 운동인가요?', answer: '애니멀플로우(Animal Flow)는 손과 발로 바닥을 지지하며 이동·회전·전환 동작을 연결하는 맨몸 움직임 운동입니다. 메타무브짐 클래스에서는 기본 자세를 익히고 자신의 수준에 맞춰 하나의 흐름으로 연결합니다.'},
    {question: '전국 행사와 상동 수업의 장소·일정은 어떻게 확인하나요?', answer: '메타무브짐은 애니멀플로우 클래스와 전국 행사를 운영합니다. 장소, 날짜, 정원, 참가비와 신청 방법은 행사마다 다르므로 페이지의 최신 행사 안내와 해당 신청서를 확인해주세요. 강남 등 외부 행사 장소와 상동역 운영 센터의 주소는 서로 다릅니다.'},
    {question: '상동피티·상동역 피티와 애니멀플로우 클래스는 어떻게 다른가요?', answer: '상동 PT·상동역 PT는 메타무브짐 PT 상동역점의 개인 맞춤 운동 지도를 안내하는 별도 서비스입니다. 이 페이지는 애니멀플로우 입문·그룹 클래스와 행사 참가자를 모집합니다. 상동헬스장·상동역헬스장의 개인 PT와 자유운동 이용 조건은 센터 공식 사이트에서 확인해주세요.'},
    {question: '운동 초보자도 참여할 수 있나요?', answer: '입문 클래스는 기본 자세부터 나누어 배우고 가능한 범위에서 시작합니다. 특강은 행사마다 난이도와 참여 조건이 다를 수 있으니 신청 전 해당 안내를 확인해주세요.'},
  ],
}

export const searchSchema = {
  '@context': 'https://schema.org',
  '@graph': [
    {'@type':'WebSite','@id':searchInfo.url+'#website',url:searchInfo.url,name:searchInfo.title,inLanguage:'ko-KR',publisher:{'@id':'https://metamove-pt.parkbujang.chatgpt.site/#gym'}},
    {'@type':'WebPage','@id':searchInfo.url+'#webpage',url:searchInfo.url,name:searchInfo.title,description:searchInfo.description,inLanguage:'ko-KR',isPartOf:{'@id':searchInfo.url+'#website'},about:{'@id':searchInfo.url+'#classes'}},
    {'@type':'ExerciseGym','@id':'https://metamove-pt.parkbujang.chatgpt.site/#gym',name:'메타무브짐 PT 상동역점',url:'https://metamove-pt.parkbujang.chatgpt.site/',address:{'@type':'PostalAddress',streetAddress:'송내대로265번길 67 월드컵타운 3층',addressLocality:'부천시 원미구',addressRegion:'경기도',addressCountry:'KR'}},
    {'@type':'Service','@id':searchInfo.url+'#classes',name:'메타무브짐 애니멀플로우 클래스·행사',serviceType:'애니멀플로우 입문·그룹 클래스 및 행사',areaServed:'대한민국',url:searchInfo.url,provider:{'@id':'https://metamove-pt.parkbujang.chatgpt.site/#gym'}},
    {'@type':'FAQPage','@id':searchInfo.url+'#class-faq',mainEntity:searchInfo.faqs.map(item=>({'@type':'Question',name:item.question,acceptedAnswer:{'@type':'Answer',text:item.answer}}))},
  ],
}
