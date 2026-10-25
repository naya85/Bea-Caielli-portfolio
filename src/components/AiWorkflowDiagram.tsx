/**
 * The design process as a loop of seven steps around the team's shared repo.
 * A light orbits the ring once per cycle and each step lights up as it passes;
 * the spokes drift outwards, like context flowing from the repo to every step.
 * All motion is CSS (see .ai-loop in global.css) and stops under reduced motion.
 */

const STEPS = ["Understand", "Research", "Explore", "Prototype", "Review", "Learn", "Document"];

const C = 300; // centre of the 600×600 drawing
const R = 205; // ring radius
const PILL_W = 164;
const PILL_H = 50;
const HUB_R = 78;

const points = STEPS.map((_, i) => {
  const a = ((-90 + (i * 360) / STEPS.length) * Math.PI) / 180;
  return { x: C + R * Math.cos(a), y: C + R * Math.sin(a), cos: Math.cos(a), sin: Math.sin(a) };
});

export function AiWorkflowDiagram({ label }: { label: string }) {
  return (
    <svg className="ai-loop" viewBox="0 0 600 600" role="img" aria-label={label}>
      <defs>
        <radialGradient id="ai-loop-hub" cx="35%" cy="30%" r="75%">
          <stop offset="0%" stopColor="#a68be0" />
          <stop offset="100%" stopColor="#6542a9" />
        </radialGradient>
        <filter id="ai-loop-glow" x="-200%" y="-200%" width="500%" height="500%">
          <feGaussianBlur stdDeviation="5" />
        </filter>
      </defs>

      <circle className="ai-loop-ring" cx={C} cy={C} r={R} />
      <circle className="ai-loop-trail" cx={C} cy={C} r={R} pathLength={100} transform={`rotate(-90 ${C} ${C})`} />

      {points.map(({ cos, sin }, i) => (
        <line
          key={STEPS[i]}
          className="ai-loop-spoke"
          x1={C + (HUB_R + 22) * cos}
          y1={C + (HUB_R + 22) * sin}
          x2={C + (R - 34) * cos}
          y2={C + (R - 34) * sin}
        />
      ))}

      <g className="ai-loop-orbit">
        <circle cx={C} cy={C - R} r="9" className="ai-loop-orbit-glow" filter="url(#ai-loop-glow)" />
        <circle cx={C} cy={C - R} r="4.5" className="ai-loop-orbit-dot" />
      </g>

      <circle className="ai-loop-halo" cx={C} cy={C} r={HUB_R + 20} />
      <circle cx={C} cy={C} r={HUB_R} fill="url(#ai-loop-hub)" />
      <text className="ai-loop-hub-title" x={C} y={C + 2} textAnchor="middle">Shared repo</text>
      <text className="ai-loop-hub-sub" x={C} y={C + 24} textAnchor="middle">AGENTS.md</text>

      {points.map(({ x, y }, i) => (
        <g key={STEPS[i]} className="ai-loop-step" style={{ ["--ai-loop-step" as string]: i / STEPS.length }}>
          <rect x={x - PILL_W / 2} y={y - PILL_H / 2} width={PILL_W} height={PILL_H} rx={PILL_H / 2} />
          <circle className="ai-loop-step-badge" cx={x - PILL_W / 2 + 26} cy={y} r="13" />
          <text className="ai-loop-step-number" x={x - PILL_W / 2 + 26} y={y + 4.5} textAnchor="middle">{i + 1}</text>
          <text className="ai-loop-step-label" x={x - PILL_W / 2 + 48} y={y + 6}>{STEPS[i]}</text>
        </g>
      ))}
    </svg>
  );
}
