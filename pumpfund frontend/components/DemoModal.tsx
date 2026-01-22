'use client'

import { X, Check } from 'lucide-react'
import { useEffect } from 'react'

interface DemoModalProps {
  onClose: () => void
}

export default function DemoModal({ onClose }: DemoModalProps) {
  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [])

  const timeline = [
    { step: 'Discovery', time: '0.0s', status: 'completed', desc: 'Elite wallet buys $TOKEN' },
    { step: 'Validation', time: '0.2s', status: 'completed', desc: 'Checks your filters/limits' },
    { step: 'Execution', time: '0.5s', status: 'completed', desc: 'Your trade submits' },
    { step: 'Fill', time: '0.8s', status: 'completed', desc: 'Filled on-chain' },
    { step: 'Monitoring', time: '—', status: 'active', desc: 'Watching for exit' },
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/20 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-2xl bg-white border-2 border-black rounded-2xl shadow-sketch p-6 sm:p-8 animate-slide-up max-h-[90vh] overflow-y-auto transform rotate-1">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 transition-colors border-2 border-transparent hover:border-black"
        >
          <X className="w-6 h-6 text-black" />
        </button>

        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="font-secondary font-bold text-3xl sm:text-4xl mb-2 leading-tight text-black">
            Demo: <span className="text-black bg-yellow-200 px-2 rounded transform -rotate-1 inline-block">Trade Timeline</span>
          </h2>
          <p className="text-base sm:text-lg text-secondary font-hand">
            how a mirror happens, start to finish
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-1">
          {timeline.map((item, index) => (
            <div
              key={index}
              className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 rounded-lg bg-white border-2 border-black hover:bg-gray-50 transition-colors shadow-sm"
            >
              {/* Icon */}
              <div className={`mt-1 flex-shrink-0 ${
                item.status === 'completed' ? 'text-black' : 'text-gray-400'
              }`}>
                <Check className="w-5 h-5" strokeWidth={3} />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <h3 className="font-secondary font-bold text-lg sm:text-xl text-black">
                    {item.step}
                  </h3>
                  <span className="font-mono text-sm sm:text-base text-secondary flex-shrink-0 bg-gray-100 px-1 rounded border border-black">
                    {item.time}
                  </span>
                </div>
                <p className="text-sm sm:text-base text-secondary font-hand font-bold">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-6 sm:mt-8 p-3 sm:p-4 rounded-lg bg-green-50 border-2 border-black border-dashed">
          <p className="text-sm sm:text-base text-center font-hand">
            <span className="text-black font-bold">total:</span>{' '}
            <span className="font-mono font-bold">~0.8s discovery → fill</span>
          </p>
        </div>

        {/* CTA */}
        <div className="mt-5 sm:mt-6 text-center">
          <a
            href="#waitlist"
            onClick={onClose}
            className="inline-block px-6 sm:px-8 py-3 rounded-lg text-base sm:text-lg bg-black text-white font-bold border-2 border-black shadow-sketch hover:shadow-sketch-hover hover:-translate-y-0.5 transition-all"
          >
            get on the list
          </a>
        </div>
      </div>
    </div>
  )
}
