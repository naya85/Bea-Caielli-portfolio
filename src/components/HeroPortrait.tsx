import Image from "next/image";

/**
 * Hero portrait laid out like a technical drawing: the photo on dotted drafting paper, with
 * rule-of-thirds guides and registration marks.
 * Phones get a plain round photo instead.
 */

// Photo frame inside the 400×500 sheet; the height keeps the photo's 825×1024 ratio.
const X = 40;
const Y = 44;
const W = 320;
const H = 397;
const CORNERS = [[X, Y], [X + W, Y], [X, Y + H], [X + W, Y + H]] as const;

export function HeroPortrait() {
  return (
    <>
      <svg className="hero-portrait" viewBox="0 0 400 500" role="img" aria-label="Portrait of Bea">
        <defs>
          <pattern id="hero-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="8" cy="8" r="1.1" />
          </pattern>
          {/* The grid spreads past the sheet and thins out towards its edges, so it melts into the page. */}
          <radialGradient id="hero-dots-fade-gradient" cx="50%" cy="48%" r="50%">
            <stop offset="74%" stopColor="#fff" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id="hero-dots-fade" maskUnits="userSpaceOnUse" x="-110" y="-60" width="620" height="590">
            <rect x="-110" y="-60" width="620" height="590" fill="url(#hero-dots-fade-gradient)" />
          </mask>
          <clipPath id="hero-photo-clip">
            <rect x={X} y={Y} width={W} height={H} rx="20" />
          </clipPath>
        </defs>

        <rect x="-110" y="-60" width="620" height="590" fill="url(#hero-dots)" mask="url(#hero-dots-fade)" />
        <circle className="hero-portrait-accent" cx={X + 10} cy={Y + H - 14} r="46" />

        <image href="/images/bea-portrait.webp" x={X} y={Y} width={W} height={H} preserveAspectRatio="xMidYMid slice" clipPath="url(#hero-photo-clip)" />

        <g className="hero-portrait-thirds" clipPath="url(#hero-photo-clip)">
          <path d={`M${X + W / 3} ${Y}V${Y + H}M${X + (2 * W) / 3} ${Y}V${Y + H}M${X} ${Y + H / 3}H${X + W}M${X} ${Y + (2 * H) / 3}H${X + W}`} />
        </g>
        <circle className="hero-portrait-ring" cx={X + W} cy={Y} r="18" />

        <g className="hero-portrait-marks">
          {CORNERS.map(([x, y]) => (
            <path key={`${x}-${y}`} d={`M${x - 8} ${y}H${x + 8}M${x} ${y - 8}V${y + 8}`} />
          ))}
          <path d={`M${X} 22H${X + W}M${X} 16V28M${X + W} 16V28`} />
        </g>
        <text className="hero-portrait-labels" x="200" y="14" textAnchor="middle">fig. 01</text>
      </svg>
      <Image className="hero-portrait-mobile" src="/images/bea-portrait.webp" alt="Portrait of Bea" width={825} height={1024} priority />
    </>
  );
}
