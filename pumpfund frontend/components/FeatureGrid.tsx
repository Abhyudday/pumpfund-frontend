'use client'

import { Zap, Shield, Filter, MessageSquare, DollarSign, Key } from 'lucide-react'

export default function FeatureGrid() {
  const features = [
    {
      icon: Zap,
      title: 'Sub-second speed',
      description: 'Typically ~1s from their trade to yours on-chain',
    },
    {
      icon: Shield,
      title: 'Risk controls',
      description: 'Set max bet, stop-loss, cooldown—you stay in control',
    },
    {
      icon: Filter,
      title: 'Token filters',
      description: 'Blacklist sketchy tokens or only allow specific ones',
    },
    {
      icon: MessageSquare,
      title: 'Telegram alerts',
      description: 'Get pinged instantly when trades mirror',
    },
    {
      icon: DollarSign,
      title: 'Simple fees',
      description: 'No surprises. Straightforward pricing (TBD in beta)',
    },
    {
      icon: Key,
      title: 'Non-custodial',
      description: 'Your keys, your wallet. We just watch and copy.',
    },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 px-4">
          <h2 className="font-secondary font-bold text-4xl sm:text-5xl lg:text-6xl text-black">
            Built for <span className="text-black bg-green-200 px-2 rounded-sm transform rotate-2 inline-block">speed</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary max-w-2xl mx-auto font-hand">
            everything you'd want in a copy-trading tool.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-5 sm:p-6 rounded-xl bg-white border-2 border-black shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 sm:gap-4">
                <div className="p-2.5 sm:p-3 rounded-lg border-2 border-black bg-white flex-shrink-0 group-hover:bg-black group-hover:text-white transition-colors">
                  <feature.icon className="w-6 h-6 text-current" strokeWidth={2.5} />
                </div>
                <div className="space-y-1 sm:space-y-2">
                  <h3 className="font-secondary font-bold text-xl text-black">
                    {feature.title}
                  </h3>
                  <p className="text-sm sm:text-base text-secondary leading-relaxed font-hand font-bold">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
