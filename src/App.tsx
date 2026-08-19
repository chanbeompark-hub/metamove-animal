import { Header } from './components/Header'
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
      <Header />
      <main>
        <Hero />
        <WhatIsAnimalFlow />
        <FlowRail />
        <LearningPath />
        <ProofGallery />
        <BeginnerFAQ />
        <FirstFlowCTA />
      </main>
      <Footer />
      <MobileApplyBar />
    </>
  )
}
