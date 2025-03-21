export const TheChillestDevAvatar = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="90" fill="url(#founderGradient)" />
    
    {/* Animated Background Pattern */}
    {[0,1,2].map(i => (
      <circle
        key={i}
        cx="100"
        cy="100"
        r={50 + i*15}
        fill="none"
        stroke="#00ff9d"
        strokeWidth="1"
        opacity="0.2"
      >
        <animate
          attributeName="r"
          values={`${50 + i*15};${55 + i*15};${50 + i*15}`}
          dur={`${3 + i}s`}
          repeatCount="indefinite"
        />
      </circle>
    ))}
    
    {/* Holographic Crown */}
    <path 
      d="M60 70 L100 50 L140 70 L130 90 L70 90 Z" 
      fill="none"
      stroke="#FFD700"
      strokeWidth="2"
    >
      <animate
        attributeName="stroke-dasharray"
        values="0,1000;1000,0"
        dur="3s"
        repeatCount="indefinite"
      />
    </path>
    
    {/* Cyberpunk Shades */}
    <path d="M60 95 h30 a10 10 0 0 1 0 20 h-30 a10 10 0 0 1 0 -20z" fill="#000000" />
    <path d="M110 95 h30 a10 10 0 0 1 0 20 h-30 a10 10 0 0 1 0 -20z" fill="#000000" />
    {/* Glowing Lines on Shades */}
    <path d="M65 105 h20" stroke="#00ff9d" strokeWidth="2">
      <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
    </path>
    <path d="M115 105 h20" stroke="#00ff9d" strokeWidth="2">
      <animate attributeName="opacity" values="1;0.2;1" dur="2s" repeatCount="indefinite" />
    </path>
    <path d="M90 105 h20" stroke="#00ff9d" strokeWidth="2">
      <animate attributeName="opacity" values="1;0.2;1" dur="1.5s" repeatCount="indefinite" />
    </path>
    
    {/* Cool Smile */}
    <path 
      d="M70 135 Q100 155 130 135" 
      stroke="#00ff9d" 
      strokeWidth="3" 
      fill="none"
      strokeLinecap="round"
    >
      <animate attributeName="d" 
        values="M70 135 Q100 155 130 135;M70 140 Q100 160 130 140;M70 135 Q100 155 130 135"
        dur="4s"
        repeatCount="indefinite"
      />
    </path>
    
    <defs>
      <linearGradient id="founderGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#00ff9d', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#4d4dff', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
)

export const ChillFrostDevAvatar = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="90" fill="url(#frostGradient)" />
    
    {/* Animated Ice Crystal Pattern */}
    <path 
      d="M50 90 L100 60 L150 90 L150 110 L100 140 L50 110 Z" 
      fill="none"
      stroke="#4d4dff"
      strokeWidth="2"
    >
      <animate
        attributeName="stroke-dasharray"
        values="0,1000;1000,0"
        dur="3s"
        repeatCount="indefinite"
      />
    </path>
    
    {/* Ice Crystal Visor */}
    <path 
      d="M60 95 L140 95 L130 105 L70 105 Z" 
      fill="#000000" 
      stroke="#00ff9d" 
      strokeWidth="1"
    />
    
    {/* Glowing Ice Eyes */}
    <circle cx="80" cy="100" r="5" fill="#00ff9d">
      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="120" cy="100" r="5" fill="#00ff9d">
      <animate attributeName="r" values="4;6;4" dur="2s" repeatCount="indefinite" />
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
    </circle>
    
    {/* Animated Ice Crown */}
    {[0,1,2,3,4].map(i => (
      <path 
        key={i}
        d={`M${70 + i*15} 50 L${75 + i*15} 65 L${65 + i*15} 65 Z`} 
        fill="#4d4dff"
      >
        <animate 
          attributeName="opacity" 
          values="0.8;0.3;0.8" 
          dur={`${1.5 + i*0.2}s`} 
          repeatCount="indefinite" 
        />
      </path>
    ))}
    
    {/* Frost Breath Effect */}
    {[0,1,2].map(i => (
      <path
        key={i}
        d={`M85 120 Q100 ${125 + i*3} 115 120`}
        stroke="#00ff9d"
        strokeWidth="1"
        opacity={0.3 - i*0.1}
      >
        <animate
          attributeName="opacity"
          values={`${0.3 - i*0.1};0;${0.3 - i*0.1}`}
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    ))}
    
    <defs>
      <linearGradient id="frostGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4d4dff', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#00ff9d', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
)

export const ChillByteDevAvatar = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="90" fill="url(#byteGradient)" />
    
    {/* Binary Pattern Background */}
    {[0,1,2,3,4].map(row => (
      [0,1,2,3,4].map(col => (
        <text
          key={`${row}-${col}`}
          x={60 + col*20}
          y={70 + row*20}
          fill="rgba(0, 255, 157, 0.3)"
          fontSize="12"
        >
          {Math.random() > 0.5 ? '1' : '0'}
        </text>
      ))
    ))}
    
    {/* Matrix-style Glasses */}
    <rect x="60" y="85" width="80" height="15" rx="2" fill="#000" />
    {[0,1,2,3].map(i => (
      <rect
        key={i}
        x={65 + i*20}
        y="88"
        width="15"
        height="9"
        fill="#00ff9d"
        opacity="0.8"
      >
        <animate 
          attributeName="opacity" 
          values="0.8;0.3;0.8" 
          dur={`${1 + i*0.2}s`} 
          repeatCount="indefinite" 
        />
      </rect>
    ))}
    
    {/* Digital Smile */}
    <path 
      d="M75 120 L85 125 L115 125 L125 120" 
      stroke="#00ff9d" 
      strokeWidth="2" 
      fill="none"
    />
    
    <defs>
      <linearGradient id="byteGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4d4dff', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#00ff9d', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
)

export const ChillPixelDevAvatar = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="90" fill="url(#pixelGradient)" />
    
    {/* Animated Pixel Grid Pattern */}
    {[0,1,2,3,4].map(row => (
      [0,1,2,3,4].map(col => (
        <rect
          key={`${row}-${col}`}
          x={70 + col*12}
          y={70 + row*12}
          width="10"
          height="10"
          fill={Math.random() > 0.7 ? '#ff26b0' : 'rgba(255,255,255,0.2)'}
        >
          <animate
            attributeName="opacity"
            values="1;0.5;1"
            dur={`${1 + Math.random() * 2}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))
    ))}
    
    {/* Cyberpunk VR Headset */}
    <rect x="60" y="85" width="80" height="25" rx="5" fill="#000" />
    {/* Glowing VR Display */}
    <rect x="65" y="90" width="70" height="15" fill="#1a1a2e" />
    {[0,1,2].map(i => (
      <rect
        key={i}
        x={70 + i*25}
        y="93"
        width="15"
        height="9"
        fill="#00ff9d"
        opacity="0.8"
      >
        <animate
          attributeName="opacity"
          values="0.8;0.3;0.8"
          dur={`${1 + i*0.2}s`}
          repeatCount="indefinite"
        />
      </rect>
    ))}
    
    {/* Data Stream Lines */}
    {[0,1,2].map(i => (
      <path
        key={i}
        d={`M${65 + i*30} 115 L${75 + i*30} 125`}
        stroke="#ff26b0"
        strokeWidth="1"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0,30;30,0"
          dur={`${0.5 + i*0.2}s`}
          repeatCount="indefinite"
        />
      </path>
    ))}
    
    {/* Pixelated Smile */}
    {[0,1,2,3,4].map(i => (
      <rect
        key={i}
        x={75 + i*12}
        y="120"
        width="10"
        height="3"
        fill="#00ff9d"
        opacity={i === 2 ? 0.5 : 1}
      >
        <animate
          attributeName="y"
          values="120;122;120"
          dur={`${1 + i*0.1}s`}
          repeatCount="indefinite"
        />
      </rect>
    ))}
    
    <defs>
      <linearGradient id="pixelGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#ff26b0', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#4d4dff', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
)

export const ChillWavesDevAvatar = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="90" fill="url(#wavesGradient)" />
    
    {/* Animated Wave Pattern Background */}
    {[0,1,2,3].map(i => (
      <path
        key={i}
        d={`M40 ${70 + i*20} Q70 ${60 + i*20} 100 ${70 + i*20} T160 ${70 + i*20}`}
        fill="none"
        stroke="#00ff9d"
        strokeWidth="2"
        opacity={0.3}
      >
        <animate
          attributeName="d"
          values={`
            M40 ${70 + i*20} Q70 ${60 + i*20} 100 ${70 + i*20} T160 ${70 + i*20};
            M40 ${70 + i*20} Q70 ${80 + i*20} 100 ${70 + i*20} T160 ${70 + i*20};
            M40 ${70 + i*20} Q70 ${60 + i*20} 100 ${70 + i*20} T160 ${70 + i*20}
          `}
          dur={`${3 + i*0.5}s`}
          repeatCount="indefinite"
        />
      </path>
    ))}
    
    {/* Holographic Visor */}
    <path d="M55 90 L145 90 L135 105 L65 105 Z" fill="#000000" />
    {/* Visor Glow Effects */}
    {[0,1,2].map(i => (
      <path
        key={i}
        d={`M${65 + i*25} 92 L${85 + i*25} 92`}
        stroke="#00ff9d"
        strokeWidth="2"
        opacity="0.8"
      >
        <animate
          attributeName="opacity"
          values="0.8;0.3;0.8"
          dur={`${1 + i*0.2}s`}
          repeatCount="indefinite"
        />
      </path>
    ))}
    
    {/* Cyber Face Markings */}
    <path
      d="M70 115 L80 115 M120 115 L130 115"
      stroke="#00ff9d"
      strokeWidth="1"
    >
      <animate
        attributeName="stroke-dasharray"
        values="0,20;20,0"
        dur="2s"
        repeatCount="indefinite"
      />
    </path>
    
    {/* Animated Energy Smile */}
    <path
      d="M80 120 Q100 130 120 120"
      stroke="#00ff9d"
      strokeWidth="2"
      fill="none"
      strokeLinecap="round"
    >
      <animate
        attributeName="d"
        values="M80 120 Q100 130 120 120;M80 122 Q100 132 120 122;M80 120 Q100 130 120 120"
        dur="3s"
        repeatCount="indefinite"
      />
    </path>
    
    {/* Energy Particles */}
    {[0,1,2].map(i => (
      <circle
        key={i}
        cx={85 + i*15}
        cy={125}
        r="2"
        fill="#00ff9d"
      >
        <animate
          attributeName="opacity"
          values="1;0.2;1"
          dur={`${0.5 + i*0.2}s`}
          repeatCount="indefinite"
        />
      </circle>
    ))}
    
    <defs>
      <linearGradient id="wavesGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#00ff9d', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#4d4dff', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
)

export const ChillFlowDevAvatar = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="90" fill="url(#flowGradient)" />
    
    {/* Flow Lines Background */}
    {[0,1,2].map(i => (
      <path
        key={i}
        d={`M40 ${70 + i*25} C60 ${60 + i*25} 140 ${80 + i*25} 160 ${70 + i*25}`}
        stroke="#ff26b0"
        strokeWidth="2"
        fill="none"
        opacity="0.3"
      >
        <animate
          attributeName="d"
          values={`
            M40 ${70 + i*25} C60 ${60 + i*25} 140 ${80 + i*25} 160 ${70 + i*25};
            M40 ${70 + i*25} C60 ${80 + i*25} 140 ${60 + i*25} 160 ${70 + i*25};
            M40 ${70 + i*25} C60 ${60 + i*25} 140 ${80 + i*25} 160 ${70 + i*25}
          `}
          dur="3s"
          repeatCount="indefinite"
        />
      </path>
    ))}
    
    {/* Cyberpunk Headphones */}
    <path d="M60 95 C60 70 140 70 140 95" stroke="#ff26b0" strokeWidth="4" fill="none" />
    <circle cx="60" cy="95" r="8" fill="#ff26b0" />
    <circle cx="140" cy="95" r="8" fill="#ff26b0" />
    
    {/* Glowing Eyes */}
    <circle cx="80" cy="95" r="4" fill="#00ff9d">
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
    </circle>
    <circle cx="120" cy="95" r="4" fill="#00ff9d">
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
    </circle>
    
    {/* Cool Smile */}
    <path d="M70 115 Q100 135 130 115" stroke="#00ff9d" strokeWidth="2" fill="none" />
    
    <defs>
      <linearGradient id="flowGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#4d4dff', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#ff26b0', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
)

export const ChillZenDevAvatar = () => (
  <svg width="200" height="200" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="90" fill="url(#zenGradient)" />
    
    {/* Zen Circle Pattern */}
    <circle 
      cx="100" 
      cy="100" 
      r="60" 
      fill="none" 
      stroke="#ff26b0" 
      strokeWidth="2" 
      opacity="0.3" 
    >
      <animate
        attributeName="r"
        values="55;65;55"
        dur="3s"
        repeatCount="indefinite"
      />
    </circle>
    
    {/* Digital Monk Hood */}
    <path
      d="M50 90 C50 50 150 50 150 90 L140 140 L60 140 Z"
      fill="#1a1a2e"
      stroke="#ff26b0"
      strokeWidth="2"
    />
    
    {/* Glowing Zen Eyes */}
    <line x1="80" y1="95" x2="90" y2="95" stroke="#00ff9d" strokeWidth="3">
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
    </line>
    <line x1="110" y1="95" x2="120" y2="95" stroke="#00ff9d" strokeWidth="3">
      <animate attributeName="opacity" values="1;0.5;1" dur="2s" repeatCount="indefinite" />
    </line>
    
    {/* Peaceful Smile */}
    <path d="M85 115 Q100 125 115 115" stroke="#00ff9d" strokeWidth="2" fill="none" />
    
    {/* Digital Aura */}
    <circle cx="100" cy="100" r="70" fill="none" stroke="#4d4dff" strokeWidth="1" opacity="0.2">
      <animate attributeName="r" values="65;75;65" dur="4s" repeatCount="indefinite" />
    </circle>
    
    <defs>
      <linearGradient id="zenGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#ff26b0', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#4d4dff', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
  </svg>
)

// ... Add more team member avatars with unique themes ... 