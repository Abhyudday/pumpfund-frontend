'use client'

import { CheckCircle, XCircle } from 'lucide-react'

export default function CaseStudy() {
  const wallets = [
    { name: 'SmartWhale_7F', days: 7, trades: 12, pnl: '+142%', status: 'win' },
    { name: 'AlphaHunter_3A', days: 7, trades: 18, pnl: '+89%', status: 'win' },
    { name: 'DeFi_Sniper_9C', days: 7, trades: 24, pnl: '-12%', status: 'loss' },
    { name: 'MemeKing_2E', days: 7, trades: 15, pnl: '+201%', status: 'win' },
  ]

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white border-2 border-black shadow-sketch transform rotate-1">
            <span className="text-base font-bold font-secondary text-black">TESTING BADGE</span>
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center space-y-3 sm:space-y-4 mb-10 sm:mb-12 px-4">
          <h2 className="font-secondary font-bold text-3xl sm:text-4xl lg:text-5xl leading-tight text-black">
            We tested it for a week. <span className="text-black bg-yellow-200 px-2 transform -rotate-1 inline-block">3 out of 4 printed</span> *
          </h2>
          <p className="text-base sm:text-lg text-secondary font-hand">
            real wallets. real trades. here's what happened.
          </p>
        </div>

        {/* Table */}
        <div className="rounded-xl bg-white border-2 border-black shadow-sketch overflow-x-auto">
          {/* Header */}
          <div className="grid grid-cols-5 gap-4 p-3 sm:p-4 bg-gray-50 border-b-2 border-black font-secondary font-bold text-sm sm:text-base text-black min-w-[500px] sm:min-w-0">
            <div>Wallet</div>
            <div className="text-center">Days</div>
            <div className="text-center">Trades</div>
            <div className="text-center">PnL</div>
            <div className="text-center">Status</div>
          </div>

          {/* Rows */}
          {wallets.map((wallet, index) => (
            <div
              key={index}
              className="grid grid-cols-5 gap-4 p-3 sm:p-4 border-b-2 border-black last:border-b-0 hover:bg-gray-50 transition-colors min-w-[500px] sm:min-w-0 border-dashed"
            >
              <div className="font-secondary font-bold text-sm sm:text-base text-black">{wallet.name}</div>
              <div className="font-hand font-bold text-sm sm:text-base text-center text-secondary">{wallet.days}</div>
              <div className="font-hand font-bold text-sm sm:text-base text-center text-secondary">{wallet.trades}</div>
              <div className={`font-secondary font-bold text-center ${
                wallet.status === 'win' ? 'text-black bg-green-200 px-1 rounded inline-block transform rotate-1' : 'text-black bg-red-200 px-1 rounded inline-block transform -rotate-1'
              }`}>
                {wallet.pnl}
              </div>
              <div className="flex justify-center">
                {wallet.status === 'win' ? (
                  <CheckCircle className="w-6 h-6 text-black" strokeWidth={2.5} />
                ) : (
                  <XCircle className="w-6 h-6 text-black" strokeWidth={2.5} />
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="mt-6 sm:mt-8 text-center">
          <span className="text-sm text-secondary font-hand">* results from backtesting, not production results</span>
        </div>
      </div>
    </section>
  )
}
