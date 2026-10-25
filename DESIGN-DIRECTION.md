# Beatrice Portfolio — Design Direction
*Last updated: March 2026 — All decisions locked*

---

## The Brief in One Sentence
Apple-level editorial precision — bold type, aggressive whitespace, inevitable animations — with a hidden 80s easter egg that rewards the curious.

## Feeling on Landing
> "She's precise. She has taste. And there's more to her than the CV."

---

## ✅ Hero Headline

```
Hello, I'm Bea.
I make things happen.
Across 9 industries, and counting.
The next one is yours.
```

**Typographic weight rhythm:**
- "Hello, I'm Bea." — 300 Light, small (~18px)
- "I make things happen." — 800 ExtraBold, large (80–100px)
- "Across 9 industries, and counting." — 400 Regular, medium (~32px)
- "The next one is yours." — 800 ExtraBold, large (80–100px)

**Supporting stats:**
- 12 Years of experience
- 9 Industries worked in
- 100+ Features shipped
- 16 Designers mentored

---

## ✅ Page Structure

1. **Hero** — headline + photo + video placeholder
2. **Work** — case studies, immediately after hero
3. **Design Principles** — all 6, keep exactly as written
4. **About** — existing copy, one photo
5. **Articles** — new section
6. **Get in touch** — one line, email, no form

**Ditched:** Skills section — redundant given principles + case studies.

---

## ✅ Hero Video

Short (~30 sec) casual intro. Style reference: Julius Gehrig — natural, not rehearsed.
Placeholder slot in design now. Video drops in later without redesign.
Position: alongside or below headline, circular or rounded container.

---

## ✅ Typography

**Font: Plus Jakarta Sans — single typeface, all weights.**

```css
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,opsz,wght@0,14..32,200..800;1,14..32,200..800&display=swap');
```

**Scale:**
- Hero: 80–120px, weight 800
- Section headers: 48–64px, weight 700
- Subheadings: 24–32px, weight 600
- Body: 17–18px, weight 400, line-height 1.6
- Labels / captions: 13–14px, weight 500, slightly tracked
- Never below 13px in production

---

## ✅ Colour

**Base:** Warm off-white `#F5F4F0`
**Text:** Near-black `#1A1A1A`
**Accent:** Deep teal `#1A9CA8` — one colour, used with purpose
**Dark sections:** Deep slate `#0F0F0F`
**Gradient:** `#1A9CA8` → `#147880` — hover states and personal layer transition only

**Rule:** If removing a colour doesn't break comprehension, remove it.

---

## ✅ Layout & Spacing

- 8px base grid
- Section padding: minimum 120px top/bottom on desktop
- Max content width: 1200px centred
- Text columns: never wider than 680px
- Hero: full viewport height, nothing competing with the headline

---

## ✅ Animation

**Use:**
- Scroll-driven reveals: fade + 20px translate up, 0.6s ease-out
- Hero text: staggered line reveal on load
- Subtle image parallax: 0.1–0.2 factor on hero only
- Hover states: 150–200ms ease, never bouncy
- Page transitions: fade, 300ms max

**Avoid:**
- Looping animations
- Scroll-jacking
- Letter-by-letter text reveals
- Cursor effects (reserved for easter egg only)
- Anything that delays content access

**Always:** `prefers-reduced-motion` fallback.

---

## ✅ Navigation

Name left. Links right: Work · About · Articles · Contact
Frosted glass blur on scroll. No hamburger on desktop.

---

## ✅ "Believes" Hover Effect
*(Standalone UI detail — reusable, not part of the easter egg)*

The word "believes" in the about headline is an `<em>`, styled in accent teal `#1A9CA8`, italic, `display: inline-block`.
- Hover: `letter-spacing` transitions from default → `0.02em` over `0.4s`, `cubic-bezier(0.22,1,0.36,1)` easing
- On page load: one-time `accentPop` — scales to 1.05 then back to 1 over 0.8s

Consider reusing this letter-spacing hover on other accent/em words across the site.

---

## ✅ The 80s Easter Egg — Full Spec

### Trigger
A faint monospace prompt appears at the bottom of the screen after 1 second:
`▮ CURIOUS ABOUT THE 80S OBSESSION? PRESS ANY KEY`
Clickable. Any keypress or click triggers the takeover.

### The Takeover
Full-screen overlay. GIF (`80S_Voice_GIF.gif`) as full-height background, centered, black bars on sides.
Dark scrim: `rgba(0,0,0,0.45)` over the GIF.

Four text elements fade in sequentially:
1. `CONGRATULATIONS. YOU'VE BEEN 80'IFIED` — Press Start 2P font, white with pink neon glow (`#ff3aff`), 3D shadow, flickering animation
2. `WELCOME TO THE GOOD DECADE` — VT323 font, cyan (`#00ffee`) with glow
3. `▮ PRESS ANY KEY TO RETURN TO THE FUTURE` — blinking, low opacity white
4. `// that's why the synths are in the bio` — cyan, fades in last

### Exit
Click overlay or press any key → screen burns out with brightness flash, then fades.
On exit: "believes" does a 0.25s glitch — skews slightly, flickers opacity in 3 steps, snaps back.

### The Audio
Pure Web Audio API — no external files.
- C major chord: C4 E4 G4 C5 E5
- Sawtooth oscillators, 3 per note, detuned (-8, 0, +8 cents) for Oberheim OB-Xa width
- Lowpass filter: 6000hz → 3500hz over 2 seconds
- Convolver reverb with 3-second tail
- Sine sub bass on C2
- Fades in fast, holds, dissolves over 5.5 seconds
- Fires on same keypress/click that triggers the takeover

### The GIF
`80S_Voice_GIF.gif` — looping synthwave animation: pink/magenta perspective grid road, wireframe mountains, large orange/pink sun, dark purple sky.
Lives in same directory as the HTML file. Use file reference directly in production (not base64).

### Fonts needed (Google Fonts, easter egg only)
- `Press Start 2P`
- `VT323`

---

## ✅ About Copy
Use existing copy verbatim. Key lines to preserve:
- "...an unhealthy obsession with '80s everything: the films, the music, the graphic design, the synths."
- "Gatsby, a ragdoll cat who is genuinely the softest thing I own."
- "...thanks to AI, I'm getting shamelessly excited at building digital things all on my own."

Section header: *"12 years of product design and still believes good design can change things."*

---

## ✅ Design Principles
Keep all 6 exactly as written. 3-column grid, numbered, title + short description.

---

## What This Is NOT
- Not a dark moody agency portfolio
- Not a brutalist broken-grid portfolio
- Not a Framer template with gradient blobs and floating doodles
- Not a skills list masquerading as a portfolio

---

## Pre-build Checklist
- [ ] Photo decided: cutout vs anchored editorial
- [ ] Video recorded (placeholder slot ready — add later)
- [ ] `80S_Voice_GIF.gif` saved in project folder
- [ ] Case studies selected
- [ ] Articles selected
- [ ] Contact email confirmed
- [x] Accent colour: `#1A9CA8`
- [x] Font: Plus Jakarta Sans
- [x] Headline locked
- [x] Easter egg fully specced
- [x] Page structure locked
