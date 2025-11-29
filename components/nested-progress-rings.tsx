"use client"

export default function NestedProgressRings() {
  const ringSize = 160
  const centerX = ringSize / 2
  const centerY = ringSize / 2

  // Ring configurations (outer to inner)
  const rings = [
    { radius: 65, progress: 85, color: "#f472b6" }, // Rose-400
    { radius: 48, progress: 75, color: "#d8b4fe" }, // Purple-300
    { radius: 31, progress: 93, color: "#fdbf60" }, // Orange-300
  ]

  return (
    <div className="flex flex-col items-center gap-6">
      <svg width={ringSize} height={ringSize} viewBox={`0 0 ${ringSize} ${ringSize}`} className="drop-shadow-sm">
        {rings.map((ring, idx) => {
          const circumference = 2 * Math.PI * ring.radius
          const strokeDashoffset = circumference - (ring.progress / 100) * circumference

          return (
            <g key={idx}>
              {/* Background ring */}
              <circle cx={centerX} cy={centerY} r={ring.radius} fill="none" stroke="#f3e5e8" strokeWidth="6" />
              {/* Progress ring */}
              <circle
                cx={centerX}
                cy={centerY}
                r={ring.radius}
                fill="none"
                stroke={ring.color}
                strokeWidth="6"
                strokeDasharray={circumference}
                strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{
                  transform: `rotate(-90deg)`,
                  transformOrigin: `${centerX}px ${centerY}px`,
                  transition: "stroke-dashoffset 0.5s ease",
                }}
              />
            </g>
          )
        })}

        {/* Center text */}
        <text
          x={centerX}
          y={centerY}
          textAnchor="middle"
          dominantBaseline="middle"
          className="text-2xl font-bold fill-foreground"
        >
          93%
        </text>
      </svg>

      <div className="flex gap-6 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#f472b6" }}></div>
          <span className="text-muted-foreground">Fitness</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#d8b4fe" }}></div>
          <span className="text-muted-foreground">Health</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#fdbf60" }}></div>
          <span className="text-muted-foreground">Learning</span>
        </div>
      </div>
    </div>
  )
}
