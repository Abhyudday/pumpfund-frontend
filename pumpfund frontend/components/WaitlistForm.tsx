'use client'

import { useState } from 'react'
import { CheckCircle } from 'lucide-react'

interface WaitlistFormProps {
  isWaitlisted: boolean
  onSuccess: () => void
}

export default function WaitlistForm({ isWaitlisted, onSuccess }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    email: '',
    telegram: '',
    role: 'trader',
  })
  const [agreed, setAgreed] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreed) return

    setIsSubmitting(true)
    setError(null)
    
    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          telegram: formData.telegram,
          role: formData.role,
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist')
      }

      // Store in localStorage as backup for UI state
      localStorage.setItem('pumpfunds_waitlisted', 'true')
      
      onSuccess()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isWaitlisted) {
    return (
      <section id="waitlist" className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <div className="p-8 sm:p-12 rounded-2xl bg-white border-2 border-black shadow-sketch transform rotate-1">
            <CheckCircle className="w-16 h-16 text-black mx-auto mb-6" strokeWidth={2.5} />
            <h2 className="font-secondary font-bold text-3xl sm:text-4xl mb-4 text-black">
              You're in. 🎃
            </h2>
            <p className="text-lg sm:text-xl text-secondary mb-6 font-hand">
              we'll email you when invites start rolling. shouldn't be long.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 border-2 border-black transform -rotate-2">
              <span className="text-sm font-bold font-secondary text-black uppercase">confirmed</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="waitlist" className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12">
          <h2 className="font-secondary font-bold text-4xl sm:text-5xl lg:text-6xl text-black">
            Want in? <span className="text-white bg-black px-2 rounded transform -rotate-2 inline-block">Join waitlist</span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-secondary font-hand">
            we're starting invites soon. drop your email.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-black shadow-sketch">
          <div className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-base font-bold text-black mb-2 font-secondary">
                Email <span className="text-accent">*</span>
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your@email.com"
                className="input-sketch"
                required
              />
            </div>

            {/* Telegram (optional) */}
            <div>
              <label htmlFor="telegram" className="block text-base font-bold text-black mb-2 font-secondary">
                Telegram <span className="text-secondary font-normal font-hand">(optional)</span>
              </label>
              <input
                type="text"
                id="telegram"
                value={formData.telegram}
                onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                placeholder="@yourusername"
                className="input-sketch"
              />
            </div>

            {/* Role */}
            <div>
              <label htmlFor="role" className="block text-base font-bold text-black mb-2 font-secondary">
                You are...
              </label>
              <select
                id="role"
                value={formData.role}
                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                className="input-sketch cursor-pointer appearance-none"
              >
                <option value="trader">Trader</option>
                <option value="builder">Builder</option>
                <option value="partner">Partner</option>
              </select>
            </div>

            {/* Consent */}
            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                id="consent"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-1 w-5 h-5 rounded border-2 border-black text-black focus:ring-0 checked:bg-black cursor-pointer"
                required
              />
              <label htmlFor="consent" className="text-sm text-secondary leading-relaxed font-hand font-bold">
                this is <span className="text-black decoration-wavy underline">not financial advice</span>. 
                crypto is risky. you agree to terms by joining.
              </label>
            </div>

            {/* Error Message */}
            {error && (
              <div className="p-3 rounded-lg bg-red-50 border-2 border-red-500 text-red-700 text-sm font-hand font-bold">
                {error}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting || !agreed}
              className="w-full py-4 rounded-lg bg-black text-white font-bold text-xl border-2 border-black shadow-sketch hover:shadow-sketch-hover hover:-translate-y-1 active:translate-y-0 active:shadow-none transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 font-secondary"
            >
              {isSubmitting ? 'submitting...' : 'get on the list'}
            </button>
          </div>
        </form>

        {/* Bottom Note */}
        <div className="mt-6 text-center text-sm text-secondary font-hand italic">
          invites rolling out soon. no spam.
        </div>
      </div>
    </section>
  )
}
