'use client'

import { useState, useEffect } from 'react'
import { TrendingUp, Zap, Target, Clock } from 'lucide-react'

export default function LiveStats() {
  const [animated, setAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimated(true)
        }
      },
      { threshold: 0.2 }
    )

    const element = document.getElementById('stats')
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const metrics = [
    { icon: Zap, label: 'Tokens/day', value: '72', color: 'neon' },
    { icon: Target, label: 'Winrate', value: '82%', color: 'secondary' },
    { icon: TrendingUp, label: 'Avg ATH ROI', value: '190%', color: 'neon' },
    { icon: Clock, label: 'Latency', value: '0.3–1.0s', color: 'secondary' },
  ]

  return (
    <section id="stats" className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-yellow-50/50">
      <div className="relative max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 px-4">
          <h2 className="font-secondary font-bold text-4xl sm:text-5xl lg:text-6xl text-black">
            The <span className="text-black decoration-wavy underline decoration-2">numbers</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary max-w-xl mx-auto font-hand italic">
            performance metrics *
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10 sm:mb-12">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className={`p-4 sm:p-6 rounded-xl bg-white border-2 border-black shadow-sketch hover:shadow-sketch-hover transition-all duration-300 hover:scale-[1.02] ${
                animated ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="space-y-3 sm:space-y-4">
                <metric.icon className="w-6 h-6 sm:w-8 sm:h-8 text-black" strokeWidth={2.5} />
                <div>
                  <div className="text-2xl sm:text-3xl font-secondary font-bold text-black">
                    {metric.value}
                  </div>
                  <div className="text-sm sm:text-base text-secondary font-hand mt-1">
                    {metric.label}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* ROI Chart */}
          <div className="p-5 sm:p-6 rounded-xl bg-white border-2 border-black shadow-sketch">
            <div className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-0 border-b-2 border-black border-dashed pb-4">
                <h3 className="font-secondary font-bold text-2xl sm:text-3xl text-black">
                  Avg ROI to ATH
                </h3>
                <span className="text-sm font-hand font-bold text-secondary bg-gray-100 px-2 py-1 rounded border border-black">last 14 days</span>
              </div>

              {/* Simple Line Chart */}
              <div className="relative h-48">
                <svg viewBox="0 0 400 150" className="w-full h-full">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <line
                      key={i}
                      x1="0"
                      y1={i * 30 + 15}
                      x2="400"
                      y2={i * 30 + 15}
                      stroke="#e5e5e5"
                      strokeWidth="2"
                      strokeDasharray="5,5"
                    />
                  ))}

                  {/* Line */}
                  <path
                    d="M 0 120 L 30 110 L 60 115 L 90 105 L 120 95 L 150 90 L 180 85 L 210 80 L 240 75 L 270 70 L 300 65 L 330 60 L 360 55 L 390 50"
                    fill="none"
                    stroke="black"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Dots */}
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360, 390].map((x, i) => {
                    const y = 120 - (i * 5)
                    return (
                      <g key={i}>
                        <circle cx={x} cy={y} r="4" fill="white" stroke="black" strokeWidth="2" />
                      </g>
                    )
                  })}
                </svg>
              </div>

              <div className="flex justify-between text-sm text-secondary font-hand font-bold">
                <span>Day 1</span>
                <span>Day 14</span>
              </div>
            </div>
          </div>

          {/* Activity Card */}
          <div className="p-5 sm:p-6 rounded-xl bg-white border-2 border-black shadow-sketch">
            <div className="space-y-6">
              <h3 className="font-secondary font-bold text-2xl sm:text-3xl text-black border-b-2 border-black border-dashed pb-4">
                Wallet Flow
              </h3>

              <div className="space-y-4">
                {[
                  { label: 'Wallets in', value: '36', trend: '+12%' },
                  { label: 'Wallets out', value: '33', trend: '-8%' },
                  { label: 'Capital in', value: '$1.2K', trend: '+15%' },
                  { label: 'Capital out', value: '$2.3K', trend: '+42%' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-secondary font-hand text-lg font-bold">{item.label}</span>
                    <div className="flex items-center gap-3">
                      <span className="font-secondary font-bold text-xl text-black">{item.value}</span>
                      <span className={`text-sm font-bold px-2 py-0.5 rounded-full border-2 border-black ${item.trend.startsWith('+') ? 'bg-green-100 text-black' : 'bg-red-100 text-black'}`}>
                        {item.trend}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="text-sm text-secondary font-hand italic text-center pt-2">
                *
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
