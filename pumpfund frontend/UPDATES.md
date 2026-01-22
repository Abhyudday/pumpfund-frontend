# Landing Page Updates - More Human, More Responsive

## Copy Changes (More Conversational)

### Hero Section
- **Before:** "Invest in curated copy-funds. When they buy or sell, your wallet mirrors in real-time (0.3–1.0s)."
- **After:** "Ever watched a wallet 10x and thought 'damn, too late'? Not anymore. Pick a fund, set your limits, and mirror trades in ~1 second."

- **Before:** "mirror the best. in real-time." / "missed a move? not anymore."
- **After:** "stop being late to good plays." / "they buy, you buy. they sell, you sell. simple."

- **Before:** "Backtested on 4 wallets · 7-day test · 3/4 profitable"
- **After:** "we tested this on 4 wallets for a week. 3 printed. 1 didn't."

### How It Works
- **Before:** "Smart Money, Insiders, Degens—curated baskets of proven wallets."
- **After:** "Choose from Smart Money (safe-ish), Insiders (spicy), or Degens (unhinged)."

- **Before:** "Helius webhooks + custom infra for sub-second mirroring."
- **After:** "They buy, you buy. Sub-second execution via Helius webhooks."

### Stats Section
- **Before:** "Live-like stats" / "Performance metrics from recent backtests"
- **After:** "The numbers" / "from our backtest week. not live trading yet but looking decent."

### Funds
- **Before:** "Curated copy-funds" / "Pre-built portfolios of proven traders. Pick your risk appetite."
- **After:** "Pick your poison" / "4 funds. different risk levels. all watching wallets that actually win."

Fund descriptions updated:
- Smart Money: "Whales who rarely miss. Conservative plays, steady gains."
- Insiders Radar: "Wallets that front-run news. Spicy but worth it."
- Degen Sprint: "Absolute degen plays. High risk, potentially unhinged returns."
- Whale Watchers: "Big money on the move. Follow the flow."

### Case Study
- **Before:** "7-Day Pilot · 4 Wallets · 3 Profitable" / "Real backtest data from our initial testing phase"
- **After:** "We tested it for a week. 3 out of 4 printed." / "real wallets. real trades. here's what happened."

### Features
- **Before:** "Sub-second mirroring" / "0.3–1.0s latency from discovery to fill"
- **After:** "Sub-second speed" / "Typically ~1s from their trade to yours on-chain"

- **Before:** "Built for traders" / "Everything you need to copy elite wallets safely and efficiently"
- **After:** "Built for speed" / "everything you'd want in a copy-trading tool."

### FAQ
- **Before:** "Is PumpFunds custodial?" / "No—your wallet stays with you..."
- **After:** "Do you hold my funds?" / "Nope. Your wallet stays yours..."

- **Before:** "What are the risks of copy-trading?"
- **After:** "What are the risks?"

Answers are now more conversational and less formal.

### Waitlist
- **Before:** "Join the waitlist" / "Get early access to PumpFunds when beta invites roll out"
- **After:** "Want in? Join waitlist" / "we're starting invites soon. drop your email."

- **Before:** "Join the waitlist" (button)
- **After:** "get on the list" (button)

### Footer
- **Before:** "Copy elite Solana wallets automatically. Real-time mirroring with sub-second latency."
- **After:** "copy elite wallets. automatically. sub-second."

- **Before:** "Educational only. Crypto is risky. DYOR."
- **After:** "educational only. crypto is risky. DYOR."

## Mobile Responsiveness Improvements

### Typography
- Added responsive text sizes across all components
- Hero: `text-4xl sm:text-5xl md:text-6xl lg:text-7xl`
- Section headers: `text-3xl sm:text-4xl lg:text-5xl`
- Body text: `text-sm sm:text-base`
- Labels: `text-xs sm:text-sm`

### Spacing
- Reduced padding on mobile: `p-4 sm:p-6`, `py-3 sm:py-4`
- Adjusted gaps: `gap-4 sm:gap-6 sm:gap-8`
- Better margins: `mb-10 sm:mb-12`, `space-y-3 sm:space-y-4`

### Components
- Cards use `rounded-xl sm:rounded-2xl` for better mobile appearance
- Hover effects scaled down: `hover:scale-[1.02]` instead of `hover:scale-105`
- Grid columns properly responsive: `grid-cols-2 lg:grid-cols-4`
- Tables have horizontal scroll on mobile with `overflow-x-auto`

### Interactive Elements
- Buttons sized appropriately: `py-3 sm:py-4`
- Form inputs have proper touch targets
- Modal improved with `max-h-[90vh] overflow-y-auto`
- Nav menu collapses cleanly on mobile

### Specific Mobile Fixes
- Case Study table: Added `min-w-[500px] sm:min-w-0` for horizontal scroll
- Hero cards: Stack properly with `mt-8 lg:mt-0`
- Stats grid: `grid-cols-2` on mobile, `lg:grid-cols-4` on desktop
- FAQ accordion has proper touch targets and padding

## Key Tone Shifts

1. **Removed corporate speak** - No more "leverage", "optimize", "synergize"
2. **Added personality** - "damn, too late", "printed", "unhinged", "obv"
3. **Direct language** - "Nope" instead of "No—", shorter sentences
4. **Trader vernacular** - "printed", "dump", "pump", "degen", "spicy"
5. **Honest disclaimers** - "not live yet", "placeholder data, obv"
6. **Lowercased where natural** - Section intros and taglines
7. **Casual contractions** - "we're", "you're", "it'll", "we'll"

## Result
The landing page now reads like it was written by actual crypto traders who built a tool they wanted to use, not by a marketing team or AI. Mobile experience is significantly improved with proper breakpoints and sizing throughout.
