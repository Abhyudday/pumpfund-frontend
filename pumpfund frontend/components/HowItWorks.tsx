'use client'

import { Layers, Settings, Zap } from 'lucide-react'

export default function HowItWorks() {
  const steps = [
    {
      icon: Layers,
      title: 'Pick a Fund',
      description: 'Choose from Smart Money (safe-ish), Insiders (spicy), or Degens (unhinged).',
      detail: 'We watch wallets that consistently win. You pick the vibe.',
    },
    {
      icon: Settings,
      title: 'Set Your Limits',
      description: 'Max bet per trade. Stop-loss if it dumps. Slippage tolerance. All that.',
      detail: "You're still in control. We just make it automatic.",
    },
    {
      icon: Zap,
      title: 'Let It Run',
      description: 'They buy, you buy. Sub-second execution via Helius webhooks.',
      detail: 'Typically 0.3–1s from their tx to yours hitting chain.',
    },
  ]

  return (
    <section id="how-it-works" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-12 sm:mb-16 px-4">
          <h2 className="font-secondary font-bold text-4xl sm:text-5xl lg:text-6xl text-black">
            How it <span className="text-accent decoration-wavy underline decoration-4">works</span>
          </h2>
          <p className="text-lg sm:text-xl text-secondary max-w-2xl mx-auto font-hand">
            literally 3 steps. then you wait for notification pings.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 sm:gap-10">
          {steps.map((step, index) => (
            <div
              key={index}
              className="card-sketch hover:rotate-1 transition-transform duration-300 relative group"
            >
              {/* Step Number */}
              <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-black text-white font-secondary font-bold flex items-center justify-center text-2xl border-2 border-white shadow-lg transform -rotate-12">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="mb-6 p-4 rounded-xl bg-gray-100 border-2 border-black w-fit group-hover:bg-accent group-hover:text-white transition-colors shadow-sm">
                <step.icon className="w-8 h-8" strokeWidth={2.5} />
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="font-secondary font-bold text-2xl sm:text-3xl text-black">
                  {step.title}
                </h3>
                <p className="text-base sm:text-lg text-black leading-relaxed font-hand">
                  {step.description}
                </p>
                <p className="text-sm sm:text-base text-secondary font-hand italic border-l-2 border-gray-300 pl-3">
                  {step.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
