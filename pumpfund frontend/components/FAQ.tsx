'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'Do you hold my funds?',
      answer: "Nope. Your wallet stays yours. We just watch wallets and execute trades based on your rules. You're always in control.",
    },
    {
      question: 'What are the risks?',
      answer: "Market risk (tokens can dump), latency risk (you might be slower), slippage. That's why we have limits, stop-losses, and filters.",
    },
    {
      question: 'How much does it cost?',
      answer: "We're finalizing pricing during beta. It'll be straightforward—no hidden fees or weird gotchas.",
    },
    {
      question: 'Which chains?',
      answer: "We're starting with the top memecoin chains. If people want others, we'll add them.",
    },
    {
      question: 'How do you pick wallets?',
      answer: 'We track on-chain behavior, win rates, and trading patterns. If a wallet consistently wins, it goes into a fund.',
    },
    {
      question: 'When can I use this?',
      answer: 'Soon. Rolling beta invites. Get on the waitlist if you want early access.',
    },
  ]

  return (
    <section id="faq" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 px-4">
          <h2 className="font-secondary font-bold text-4xl sm:text-5xl lg:text-6xl text-black">
            <span className="text-black bg-gray-200 px-2 rounded transform -rotate-1 inline-block">Questions?</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary font-hand">
            here's what people usually ask.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="rounded-xl bg-white border-2 border-black shadow-sketch transition-all duration-200 hover:shadow-sketch-hover"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 sm:p-6 flex items-center justify-between text-left transition-colors"
              >
                <span className="font-secondary font-bold text-lg sm:text-xl pr-4 text-black">
                  {faq.question}
                </span>
                <ChevronDown
                  strokeWidth={3}
                  className={`w-6 h-6 text-black flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openIndex === index && (
                <div className="px-4 sm:px-6 pb-4 sm:pb-6 text-sm sm:text-base text-secondary animate-slide-up leading-relaxed font-hand font-bold">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 sm:mt-12 text-center px-4">
          <p className="text-base text-secondary mb-4 font-hand">more questions?</p>
          <a
            href="#waitlist"
            className="inline-block px-6 py-3 rounded-lg text-base font-bold border-2 border-black shadow-sketch hover:shadow-sketch-hover hover:-translate-y-0.5 transition-all bg-white text-black font-secondary"
          >
            join & ask us directly
          </a>
        </div>
      </div>
    </section>
  )
}
