'use client'

import { Twitter } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative py-10 sm:py-12 px-4 sm:px-6 lg:px-8 border-t-2 border-black bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-3 sm:space-y-4">
            <div className="font-secondary font-bold text-2xl sm:text-3xl text-black">PumpFunds</div>
            <p className="text-sm sm:text-base text-secondary max-w-xs leading-relaxed font-hand font-bold">
              copy elite wallets. automatically. sub-second.
            </p>
          </div>

          {/* Links */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-secondary font-bold text-base sm:text-lg uppercase tracking-wider text-black">
              Links
            </h3>
            <div className="flex flex-col space-y-2">
              <a href="#how-it-works" className="text-sm sm:text-base text-secondary hover:text-black hover:underline decoration-wavy transition-colors font-hand font-bold">
                How it works
              </a>
              <a href="#stats" className="text-sm sm:text-base text-secondary hover:text-black hover:underline decoration-wavy transition-colors font-hand font-bold">
                Stats
              </a>
              <a href="#funds" className="text-sm sm:text-base text-secondary hover:text-black hover:underline decoration-wavy transition-colors font-hand font-bold">
                Funds
              </a>
              <a href="#faq" className="text-sm sm:text-base text-secondary hover:text-black hover:underline decoration-wavy transition-colors font-hand font-bold">
                FAQ
              </a>
            </div>
          </div>

          {/* Social */}
          <div className="space-y-3 sm:space-y-4">
            <h3 className="font-secondary font-bold text-base sm:text-lg uppercase tracking-wider text-black">
              Connect
            </h3>
            <div className="flex gap-4">
              <a
                href="https://x.com/PumpFunds"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-white border-2 border-black shadow-sketch hover:shadow-sketch-hover hover:-translate-y-0.5 transition-all"
                aria-label="X (formerly Twitter)"
              >
                <Twitter className="w-6 h-6 text-black" strokeWidth={2.5} />
              </a>
            </div>
          </div>
        </div>

        {/* Footnote */}
        <div className="pt-6 sm:pt-8 border-t-2 border-black border-dashed">
          <p className="text-xs sm:text-sm text-secondary font-hand text-center mb-4">
            * results from backtesting, not production results
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <div className="text-sm sm:text-base text-secondary font-hand font-bold">
            © {currentYear} PumpFunds
          </div>
          <div className="text-sm sm:text-base text-secondary text-center sm:text-right font-hand">
            <span className="block sm:inline">educational only. crypto is risky.</span>{' '}
            <span className="block sm:inline font-bold text-black">DYOR.</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
