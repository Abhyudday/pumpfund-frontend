import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'PumpFunds — Copy elite memecoin wallets automatically',
  description: 'Invest in curated copy-funds and mirror trades in real-time (0.3–1.0s). Risk controls. Mobile-first.',
  openGraph: {
    title: 'PumpFunds — Copy elite memecoin wallets automatically',
    description: 'Invest in curated copy-funds and mirror trades in real-time (0.3–1.0s). Risk controls. Mobile-first.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Architects+Daughter&family=Patrick+Hand&family=JetBrains+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-hand antialiased bg-[#fdfdfd] text-black selection:bg-yellow-200">
        {children}
      </body>
    </html>
  )
}
