'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

interface NavbarProps {
  isWaitlisted: boolean
}

export default function Navbar({ isWaitlisted }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { label: 'How it works', href: '#how-it-works' },
    { label: 'Stats', href: '#stats' },
    { label: 'Funds', href: '#funds' },
    { label: 'FAQs', href: '#faq' },
  ]

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white border-b-2 border-black shadow-sketch' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a 
            href="#hero" 
            className="font-secondary font-bold text-2xl tracking-tight hover:-rotate-2 transition-transform inline-block"
          >
            PumpFunds
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-lg font-bold hover:text-accent transition-colors font-hand hover:underline decoration-2 underline-offset-4 decoration-wavy"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#waitlist"
              className={`px-6 py-2 rounded-lg font-bold text-lg transition-all duration-200 border-2 border-black shadow-sketch hover:shadow-sketch-hover hover:-translate-y-0.5 active:translate-y-0 active:shadow-none ${
                isWaitlisted
                  ? 'bg-gray-100 text-gray-500 cursor-default shadow-none'
                  : 'bg-accent text-white'
              }`}
            >
              {isWaitlisted ? "You're on the list!" : 'Join waitlist'}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-black"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={32} strokeWidth={2.5} /> : <Menu size={32} strokeWidth={2.5} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white border-b-2 border-black shadow-sketch animate-slide-up">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block px-4 py-2 text-xl font-bold hover:bg-gray-50 hover:text-accent transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="px-4 pt-2">
              <a
                href="#waitlist"
                className={`block w-full px-6 py-3 rounded-lg text-center font-bold text-lg border-2 border-black shadow-sketch ${
                  isWaitlisted
                    ? 'bg-gray-100 text-gray-500'
                    : 'bg-accent text-white'
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {isWaitlisted ? "You're on the list!" : 'Join waitlist'}
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
