'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import LiveStats from '@/components/LiveStats'
import FundsShowcase from '@/components/FundsShowcase'
import CaseStudy from '@/components/CaseStudy'
import FeatureGrid from '@/components/FeatureGrid'
import WaitlistForm from '@/components/WaitlistForm'
import FAQ from '@/components/FAQ'
import Footer from '@/components/Footer'
import DemoModal from '@/components/DemoModal'

export default function Home() {
  const [isWaitlisted, setIsWaitlisted] = useState(false)
  const [showDemoModal, setShowDemoModal] = useState(false)

  useEffect(() => {
    // Check if user is already on waitlist
    const waitlisted = localStorage.getItem('pumpfunds_waitlist')
    if (waitlisted) {
      setIsWaitlisted(true)
    }
  }, [])

  const handleWaitlistSuccess = () => {
    setIsWaitlisted(true)
    localStorage.setItem('pumpfunds_waitlist', 'true')
  }

  return (
    <main className="relative min-h-screen">
      <Navbar isWaitlisted={isWaitlisted} />
      
      <Hero 
        isWaitlisted={isWaitlisted} 
        onWaitlistSuccess={handleWaitlistSuccess}
        onDemoClick={() => setShowDemoModal(true)}
      />
      
      <HowItWorks />
      
      <LiveStats />
      
      <FundsShowcase isWaitlisted={isWaitlisted} />
      
      <CaseStudy />
      
      <FeatureGrid />
      
      <WaitlistForm 
        isWaitlisted={isWaitlisted}
        onSuccess={handleWaitlistSuccess}
      />
      
      <FAQ />
      
      <Footer />

      {showDemoModal && (
        <DemoModal onClose={() => setShowDemoModal(false)} />
      )}
    </main>
  )
}
