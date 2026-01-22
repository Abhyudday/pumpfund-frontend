'use client'

import { useState } from 'react'
import { TrendingUp, Zap, Flame, Shield, AlertTriangle, Rocket } from 'lucide-react'

interface FundsShowcaseProps {
  isWaitlisted: boolean
}

export default function FundsShowcase({ isWaitlisted }: FundsShowcaseProps) {
  const [activeCard, setActiveCard] = useState(0)

  const funds = [
    {
      name: 'Smart Money',
      icon: Shield,
      risk: 'low-med',
      riskColor: 'secondary',
      description: 'Whales who rarely miss. Conservative plays, steady gains.',
      sharpe: '2.1',
      roi30d: '+145%',
      trades: 24,
      sparklineData: [30, 35, 32, 38, 42, 40, 45, 48, 46, 50, 52, 55, 58, 60],
    },
    {
      name: 'Insiders Radar',
      icon: Zap,
      risk: 'med-high',
      riskColor: 'neon',
      description: 'Wallets that front-run news. Spicy but worth it.',
      sharpe: '1.8',
      roi30d: '+280%',
      trades: 41,
      sparklineData: [25, 30, 28, 35, 45, 42, 50, 55, 52, 60, 65, 68, 72, 75],
    },
    {
      name: 'Degen Sprint',
      icon: Flame,
      risk: 'high',
      riskColor: 'neon',
      description: 'Absolute degen plays. High risk, potentially unhinged returns.',
      sharpe: '1.4',
      roi30d: '+420%',
      trades: 67,
      sparklineData: [20, 25, 22, 30, 35, 40, 38, 45, 55, 60, 70, 75, 85, 90],
    },
    {
      name: 'Whale Watchers',
      icon: Rocket,
      risk: 'med',
      riskColor: 'secondary',
      description: 'Big money on the move. Follow the flow.',
      sharpe: '1.9',
      roi30d: '+165%',
      trades: 18,
      sparklineData: [28, 32, 35, 38, 40, 42, 45, 48, 50, 52, 54, 56, 58, 62],
    },
  ]

  return (
    <section id="funds" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 px-4">
          <h2 className="font-secondary font-bold text-4xl sm:text-5xl lg:text-6xl text-black">
            Pick your <span className="text-black bg-yellow-200 px-2 transform -rotate-2 inline-block">poison</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary max-w-2xl mx-auto font-hand">
            4 funds. different risk levels. all watching wallets that actually win.
          </p>
        </div>

        {/* Funds Carousel/Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
          {funds.map((fund, index) => (
            <div
              key={index}
              className={`p-5 sm:p-6 rounded-xl bg-white border-2 border-black shadow-sketch transition-all duration-300 cursor-pointer hover:-translate-y-2 hover:shadow-sketch-lg ${
                activeCard === index
                  ? `transform -rotate-1 bg-${index % 2 === 0 ? 'white' : 'gray-50'}`
                  : ''
              }`}
              onClick={() => setActiveCard(index)}
              onMouseEnter={() => setActiveCard(index)}
            >
              {/* Icon & Risk Badge */}
              <div className="flex items-start justify-between mb-4">
                <div className="p-2.5 sm:p-3 rounded-lg border-2 border-black bg-white shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]">
                  <fund.icon className="w-6 h-6 text-black" strokeWidth={2.5} />
                </div>
                <div className="px-2 py-1 rounded-full text-sm font-bold font-secondary border-2 border-black uppercase bg-white">
                  {fund.risk}
                </div>
              </div>

              {/* Fund Name */}
              <h3 className="font-secondary font-bold text-2xl mb-2 text-black">
                {fund.name}
              </h3>
              
              {/* Description */}
              <p className="text-sm text-secondary mb-4 leading-relaxed font-hand font-bold">
                {fund.description}
              </p>

              {/* Metrics */}
              <div className="space-y-2 mb-4 border-t-2 border-black border-dashed pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-secondary font-hand font-bold">Sharpe Ratio</span>
                  <span className="font-mono text-black font-bold bg-gray-100 px-1 rounded">{fund.sharpe}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary font-hand font-bold">30D ROI</span>
                  <span className="font-mono text-black font-bold bg-green-100 px-1 rounded border border-black transform -rotate-2">{fund.roi30d}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-secondary font-hand font-bold">Trades</span>
                  <span className="font-mono text-black font-bold">{fund.trades}</span>
                </div>
              </div>

              {/* Sparkline */}
              <div className="mb-6">
                <svg viewBox="0 0 140 40" className="w-full h-12">
                  <path
                    d={`M ${fund.sparklineData.map((val, i) => `${i * 10} ${40 - val / 2.5}`).join(' L ')}`}
                    fill="none"
                    stroke="black"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              {/* CTA */}
              <button
                disabled={!isWaitlisted}
                className={`w-full py-3 rounded-lg text-base font-bold transition-all border-2 border-black shadow-sketch hover:shadow-sketch-hover hover:-translate-y-0.5 active:translate-y-0 active:shadow-none ${
                  isWaitlisted
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-gray-400 cursor-not-allowed shadow-none border-gray-300'
                }`}
              >
                {isWaitlisted ? 'View Backtest' : 'Join waitlist first'}
              </button>
            </div>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center px-4">
          <p className="text-sm text-secondary font-hand">
            🎃 <span className="italic font-bold">backtest data only. this isn't financial advice, do your own research.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
