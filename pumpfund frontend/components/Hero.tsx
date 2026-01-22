'use client'

import { useState, useEffect } from 'react'
import { ArrowRight, TrendingUp, Activity } from 'lucide-react'

interface HeroProps {
  isWaitlisted: boolean
  onWaitlistSuccess: () => void
  onDemoClick: () => void
}

export default function Hero({ isWaitlisted, onWaitlistSuccess, onDemoClick }: HeroProps) {
  const [email, setEmail] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [gaugeValue, setGaugeValue] = useState(0)

  // Animate gauge on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      setGaugeValue(82)
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      onWaitlistSuccess()
      setShowForm(false)
      setEmail('')
    }
  }

  return (
    <section id="hero" className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="relative max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            {/* Beta Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border-2 border-black shadow-sketch transform -rotate-2">
              <Activity className="w-4 h-4 text-black" />
              <span className="text-sm font-bold text-black">android & seeker beta soon</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-4">
              <h1 className="font-secondary font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[1] tracking-tight text-black">
                Copy elite memecoin wallets.{' '}
                <span className="relative inline-block text-accent">
                  Automatically.
                  <svg className="absolute -bottom-2 left-0 w-full h-3 text-black" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="3" fill="none" />
                  </svg>
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-secondary max-w-xl leading-relaxed font-hand">
                Ever watched a wallet 10x and thought "damn, too late"? Not anymore. 
                Pick a fund, set your limits, and mirror trades in{' '}
                <span className="font-bold bg-yellow-200 px-1 rounded">~1 second</span>.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              {!showForm && (
                <>
                  <button
                    onClick={() => setShowForm(true)}
                    disabled={isWaitlisted}
                    className={`px-8 py-4 rounded-lg font-bold text-xl transition-all duration-200 border-2 border-black shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 active:translate-y-0 active:shadow-none ${
                      isWaitlisted
                        ? 'bg-gray-100 text-gray-500 cursor-default shadow-none border-gray-300'
                        : 'bg-accent text-white'
                    }`}
                  >
                    {isWaitlisted ? "✓ You're on the list!" : 'Join the waitlist'}
                  </button>
                  
                  <button
                    onClick={onDemoClick}
                    className="px-8 py-4 rounded-lg font-bold text-xl bg-white text-black border-2 border-black shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all duration-200"
                  >
                    See how it works
                  </button>
                </>
              )}

              {showForm && !isWaitlisted && (
                <form onSubmit={handleSubmit} className="flex gap-3 w-full max-w-md animate-slide-up">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="flex-1 input-sketch"
                    required
                  />
                  <button
                    type="submit"
                    className="px-6 py-3 rounded-lg bg-black text-white border-2 border-black shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </form>
              )}
            </div>

            {/* Trust Strip */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm sm:text-base text-secondary font-hand">
              <div className="hidden sm:block h-0.5 w-8 bg-black rounded-full" />
              <span className="leading-relaxed italic">we tested this on 4 wallets for a week. 3 printed. 1 didn't.</span>
            </div>

            {/* Tagline */}
            <div className="space-y-2 pt-4">
              <p className="text-2xl sm:text-3xl font-bold text-black leading-tight font-secondary">
                stop being late to good plays.
              </p>
              <p className="text-lg sm:text-xl text-secondary font-hand">
                they buy, you buy. they sell, you sell. simple.
              </p>
            </div>
          </div>

          {/* Right Content - Trending Gauge Card */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in mt-12 lg:mt-0" style={{ animationDelay: '0.2s' }}>
            {/* Trending Gauge */}
            <div className="card-sketch rotate-1 hover:rotate-0 transition-transform duration-300 bg-white">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b-2 border-black pb-2 border-dashed">
                  <span className="text-base sm:text-lg font-bold text-black uppercase tracking-wide font-secondary">Winrate (last 7d)</span>
                  <TrendingUp className="w-6 h-6 text-black" />
                </div>
                
                <div className="space-y-2">
                  <div className="text-5xl sm:text-6xl font-bold text-black font-secondary">
                    {gaugeValue}%
                  </div>
                  <div className="text-sm sm:text-base text-secondary font-hand">
                    Smart Money fund (not bad)
                  </div>
                </div>

                {/* Gauge Bar */}
                <div className="relative h-4 bg-gray-100 border-2 border-black rounded-full overflow-hidden">
                  <div
                    className="absolute h-full bg-black transition-all duration-1000 ease-out border-r-2 border-white"
                    style={{ width: `${gaugeValue}%` }}
                  />
                </div>
              </div>
            </div>

            {/* ROI Sparkline */}
            <div className="card-sketch -rotate-1 hover:rotate-0 transition-transform duration-300 bg-yellow-50">
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b-2 border-black pb-2 border-dashed">
                  <span className="text-base sm:text-lg font-bold text-black uppercase tracking-wide font-secondary">Avg gain to peak</span>
                  <span className="text-xl sm:text-2xl font-bold text-black font-secondary">+190%</span>
                </div>
                
                {/* Simple SVG Sparkline */}
                <svg viewBox="0 0 200 60" className="w-full h-24">
                  <path
                    d="M 0 45 L 20 40 L 40 42 L 60 35 L 80 30 L 100 25 L 120 20 L 140 22 L 160 15 L 180 10 L 200 8"
                    fill="none"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="animate-fade-in"
                  />
                </svg>

                <div className="text-sm text-secondary font-hand italic">
                  avg across 14 days *
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="text-center text-sm sm:text-base text-secondary italic px-4 font-hand">
              "built by degens who got tired of being slow" - probably us
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
