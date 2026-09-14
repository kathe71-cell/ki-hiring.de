import React from 'react';

interface RadarChartProps {
  scores: {
    execution_velocity: number;
    autonomy_locus: number;
    risk_resilience: number;
    conflict_catalyst: number;
    feedback_velocity: number;
    innovation_drift: number;
  };
  showTeamBaseline?: boolean;
}

export const RadarChart: React.FC<RadarChartProps> = ({ scores, showTeamBaseline = true }) => {
  const size = 300;
  const center = size / 2;
  const radius = center - 45;

  const axes = [
    { key: 'execution_velocity', label: 'Tempo' },
    { key: 'autonomy_locus', label: 'Eigenverantwortung' },
    { key: 'risk_resilience', label: 'Stress-Resilienz' },
    { key: 'conflict_catalyst', label: 'Ehrliches Feedback' },
    { key: 'feedback_velocity', label: 'Lernfähigkeit' },
    { key: 'innovation_drift', label: 'Mut für Neues' }
  ];

  const totalAxes = axes.length;
  const angleSlice = (Math.PI * 2) / totalAxes;

  // Candidate polygon points
  const candidatePoints = axes.map((axis, i) => {
    const val = scores[axis.key as keyof typeof scores] || 50;
    const r = (val / 100) * radius;
    const angle = angleSlice * i - Math.PI / 2;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  });

  const candidatePointsString = candidatePoints.map(p => `${p.x},${p.y}`).join(' ');

  // Team reference baseline (average team values)
  const teamBaseline = [65, 60, 55, 50, 62, 58];
  const teamPoints = teamBaseline.map((val, i) => {
    const r = (val / 100) * radius;
    const angle = angleSlice * i - Math.PI / 2;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle)
    };
  });
  const teamPointsString = teamPoints.map(p => `${p.x},${p.y}`).join(' ');

  // Grid circles
  const levels = [0.25, 0.5, 0.75, 1.0];

  return (
    <div className="relative flex flex-col items-center justify-center p-2">
      <svg width={size} height={size} className="overflow-visible">
        {/* Background Grids */}
        {levels.map((level, idx) => (
          <circle
            key={idx}
            cx={center}
            cy={center}
            r={radius * level}
            fill={idx === levels.length - 1 ? '#ffffff' : 'none'}
            stroke="#e2e8f0"
            strokeWidth={idx === levels.length - 1 ? 1.5 : 1}
            strokeDasharray={idx === levels.length - 1 ? 'none' : '3 3'}
          />
        ))}

        {/* Axis Lines */}
        {axes.map((_, i) => {
          const angle = angleSlice * i - Math.PI / 2;
          const x2 = center + radius * Math.cos(angle);
          const y2 = center + radius * Math.sin(angle);
          return (
            <line
              key={i}
              x1={center}
              y1={center}
              x2={x2}
              y2={y2}
              stroke="#e2e8f0"
              strokeWidth={1.5}
            />
          );
        })}

        {/* Team Baseline Polygon (Dashed outline) */}
        {showTeamBaseline && (
          <polygon
            points={teamPointsString}
            fill="#334155"
            fillOpacity={0.08}
            stroke="#64748b"
            strokeWidth={1.5}
            strokeDasharray="4 3"
          />
        )}

        {/* Candidate Polygon (Highlighted Area) */}
        <polygon
          points={candidatePointsString}
          fill="#f59e0b"
          fillOpacity={0.35}
          stroke="#d97706"
          strokeWidth={2.5}
          className="transition-all duration-700 ease-out"
        />

        {/* Candidate Point Circles */}
        {candidatePoints.map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r={5}
            fill="#d97706"
            stroke="#ffffff"
            strokeWidth={2}
            className="transition-all duration-700 ease-out shadow-md"
          />
        ))}

        {/* Axis Labels with dynamic value */}
        {axes.map((axis, i) => {
          const angle = angleSlice * i - Math.PI / 2;
          const labelRadius = radius + 24;
          const x = center + labelRadius * Math.cos(angle);
          const y = center + labelRadius * Math.sin(angle);
          const val = scores[axis.key as keyof typeof scores] || 50;

          return (
            <g key={i} className="select-none">
              <text
                x={x}
                y={y - 1}
                textAnchor="middle"
                className="text-[10px] font-extrabold fill-slate-800 font-sans"
              >
                {axis.label}
              </text>
              <text
                x={x}
                y={y + 11}
                textAnchor="middle"
                className="text-[9px] font-mono font-bold fill-amber-700 font-sans"
              >
                {val}%
              </text>
            </g>
          );
        })}
      </svg>

      {/* Legend with plain explanatory text */}
      <div className="flex items-center justify-center gap-5 mt-3 pt-2 border-t border-slate-200/80 text-[11px]">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-amber-500 border border-amber-600 inline-block shadow-2xs"></span>
          <span className="text-slate-900 font-bold">Kandidaten-Stärken</span>
        </div>
        {showTeamBaseline && (
          <div className="flex items-center gap-1.5">
            <span className="w-3.5 h-1 border-t-2 border-dashed border-slate-500 inline-block"></span>
            <span className="text-slate-600">Bestehendes Team</span>
          </div>
        )}
      </div>
    </div>
  );
};
