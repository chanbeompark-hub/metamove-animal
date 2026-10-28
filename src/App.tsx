import { Header } from './components/Header'
import { searchSchema } from './content/searchInfo'
import { Hero } from './components/Hero'
import { MobileApplyBar } from './components/MobileApplyBar'
import { WhatIsAnimalFlow } from './components/WhatIsAnimalFlow'
import { FlowRail } from './components/FlowRail'
import { LearningPath } from './components/LearningPath'
import { ProofGallery } from './components/ProofGallery'
import { BeginnerFAQ } from './components/BeginnerFAQ'
import { FirstFlowCTA } from './components/FirstFlowCTA'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(searchSchema).replace(/</g, '\\u003c') }} />
      <Header />
      <main>
        <Hero />
        <WhatIsAnimalFlow />
        <FlowRail />
        <ProofGallery />
        <LearningPath />
        <BeginnerFAQ />
        <FirstFlowCTA />
      </main>
      <Footer />
      <MobileApplyBar />
    </>
  )
}
