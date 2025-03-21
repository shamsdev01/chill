export const ChillCoinLogo = () => (
  <svg 
    width="200" 
    height="200" 
    viewBox="0 0 200 200" 
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Background Circle with Gradient */}
    <circle 
      cx="100" 
      cy="100" 
      r="90" 
      fill="url(#coolGradient)"
    />

    {/* Cool Sunglasses */}
    <path 
      d="M60 90 h30 a10 10 0 0 1 10 10 v5 a10 10 0 0 1 -10 10 h-30 a10 10 0 0 1 -10 -10 v-5 a10 10 0 0 1 10 -10z"
      fill="#000000"
    />
    <path 
      d="M110 90 h30 a10 10 0 0 1 10 10 v5 a10 10 0 0 1 -10 10 h-30 a10 10 0 0 1 -10 -10 v-5 a10 10 0 0 1 10 -10z"
      fill="#000000"
    />
    
    {/* Bridge of Sunglasses */}
    <path 
      d="M90 95 h20"
      stroke="#000000"
      strokeWidth="4"
      fill="none"
    />

    {/* Chill Smile */}
    <path 
      d="M70 130 Q100 150 130 130"
      stroke="#000000"
      strokeWidth="4"
      fill="none"
    />

    {/* Ice Crystal Effects */}
    <g transform="translate(150,40) rotate(45)">
      <path 
        d="M0 0 L10 0 L5 10 Z" 
        fill="#ffffff"
        opacity="0.8"
      />
    </g>
    <g transform="translate(40,50) rotate(-30)">
      <path 
        d="M0 0 L10 0 L5 10 Z" 
        fill="#ffffff"
        opacity="0.8"
      />
    </g>

    {/* Sparkle Effects */}
    <circle cx="160" cy="60" r="3" fill="#ffffff" opacity="0.9" />
    <circle cx="30" cy="120" r="2" fill="#ffffff" opacity="0.7" />
    <circle cx="150" cy="140" r="2" fill="#ffffff" opacity="0.8" />

    {/* Cool Gradient Definition */}
    <defs>
      <linearGradient id="coolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#00ff9d', stopOpacity: 1 }} />
        <stop offset="50%" style={{ stopColor: '#4d4dff', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#ff26b0', stopOpacity: 1 }} />
      </linearGradient>
    </defs>

    {/* Optional Animation */}
    <style>{`
      @keyframes sparkle {
        0% { opacity: 0.5; }
        50% { opacity: 1; }
        100% { opacity: 0.5; }
      }
      circle {
        animation: sparkle 2s infinite;
      }
    `}</style>
  </svg>
) 