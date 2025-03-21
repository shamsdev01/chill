export const OriginStoryIcon = () => (
  <svg width="400" height="400" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
    {/* Cyberpunk City Background */}
    <defs>
      <linearGradient id="cityGlow" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#00ff9d', stopOpacity: 0.5 }} />
        <stop offset="100%" style={{ stopColor: '#ff26b0', stopOpacity: 0.5 }} />
      </linearGradient>
    </defs>

    {/* City Silhouette */}
    <path 
      d="M0 400 L50 350 L80 380 L120 300 L150 350 L180 280 L220 380 L250 320 L300 350 L350 250 L400 400 Z" 
      fill="#1a1a2e"
      stroke="url(#cityGlow)"
      strokeWidth="2"
    />

    {/* Digital Rain */}
    {Array.from({ length: 20 }).map((_, i) => (
      <text
        key={i}
        x={20 * i}
        y={Math.random() * 400}
        fill="#00ff9d"
        opacity="0.5"
        fontSize="12"
      >
        {Math.random() > 0.5 ? '1' : '0'}
      </text>
    ))}

    {/* Central Logo */}
    <circle cx="200" cy="200" r="80" fill="#1a1a2e" stroke="#00ff9d" strokeWidth="2" />
    <path 
      d="M160 180 L240 180 L200 240 Z" 
      fill="none" 
      stroke="#ff26b0" 
      strokeWidth="2" 
    />
    <circle cx="200" cy="200" r="40" fill="none" stroke="#4d4dff" strokeWidth="2" />

    {/* Animated Pulse */}
    <circle cx="200" cy="200" r="60" fill="none" stroke="#00ff9d" strokeWidth="2">
      <animate 
        attributeName="r" 
        values="60;70;60" 
        dur="2s" 
        repeatCount="indefinite" 
      />
      <animate 
        attributeName="opacity" 
        values="0.5;0.1;0.5" 
        dur="2s" 
        repeatCount="indefinite" 
      />
    </circle>
  </svg>
) 