# KAVACH AI Landing Page

Build the full homepage per the provided spec and reference image, replacing the placeholder at `src/routes/index.tsx`.

## Design tokens (src/styles.css)
Add semantic tokens in `:root` (oklch equivalents of the spec hexes):
- `--background` Deep Midnight Navy `#071423`
- `--surface` Pearl White `#F8FAFC`
- `--primary` Electric Blue `#2563EB`
- `--accent` Sky Blue `#38BDF8`
- `--success` `#22C55E`, `--warning` `#F59E0B`, `--destructive` `#EF4444`
- `--foreground` white, `--muted-foreground` `#CBD5E1`
- `--card` `rgba(255,255,255,0.92)`
- Gradients: `--gradient-hero` (navy → transparent right), `--gradient-primary` (primary → accent)
- Shadows: `--shadow-elegant`, `--shadow-glass`
- Register in `@theme inline`

Load Inter via `<link>` in `__root.tsx` head; set as default font family token.

## Route
Rewrite `src/routes/index.tsx` with a proper `head()` (title "KAVACH AI — Kolkata Police Intelligence Platform", description, og/twitter tags incl. og:image using the generated hero).

## Components (src/components/kavach/)
- `Navbar.tsx` — glass floating top nav: shield logo + wordmark + subtitle, center nav links (Home active w/ blue underline), Kolkata Police badge button, primary Login button
- `Hero.tsx` — 45/55 split; left: glowing pill, 72px extra-bold headline with "Kolkata" in electric blue, subtitle, Explore Platform + Watch Demo CTAs, trust row with avatar stack; right: full-bleed hero image with left→right navy gradient mask and blue overlay; floating glass status card bottom-right with 4 icon tiles
- `InfoStrip.tsx` — full-width white glass card, 5 columns with colored circular icons (Shield, Brain, Clock, MapPin, Users), divider lines
- `Capabilities.tsx` — white section, "POWERFUL CAPABILITIES" eyebrow, H2, subtitle, 6 premium cards (MessageSquareText, Mic, Network, Target, TrendingUp, FileText) each with colored icon, title, description, "Learn More →"
- `ShieldLogo.tsx` — inline SVG shield mark
- Optional `Footer.tsx` minimal

Use lucide-react icons and shadcn Button variants; add custom `variant="hero"` and `variant="glass"` via cva.

## Images
Generate one cinematic hero image with `imagegen`:
- `src/assets/kavach-hero.jpg` — panoramic Howrah Bridge + Victoria Memorial across Hooghly River, golden hour, cinematic blue-orange sky, 1920×1080
- 6 small circular officer avatars: use lovable-assets or generate a single sprite? Simpler: generate one avatar stack image OR use initials in colored circles. Plan: use 6 small generated portraits OR stylized initial circles (choose initial circles to save cost).

## Typography & layout
- Font: Inter (SF Pro Display fallback via system font stack)
- Hero H1 ~72px extra-bold, section H2 48px bold, body 18px
- Generous spacing, rounded-3xl cards, backdrop-blur-2xl glass, subtle borders `border-white/10` on dark, `border-slate-200/60` on light

## Verification
Run typecheck + view preview screenshot via Playwright to confirm hero renders and layout matches reference.

## Out of scope
No auth, no backend, no other routes — pure landing page. Nav links are anchors/non-functional for now.
