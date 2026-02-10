"use client";

export default function ParticleBackground() {
  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-pink-50">
      {/* Wavy shapes - Top left cyan/turquoise */}
      <svg
        className="absolute top-0 left-0 w-96 h-96 text-cyan-200/40 animate-float"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="wave1">
            <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="5" result="noise">
              <animate attributeName="baseFrequency" values="0.02;0.025;0.02" dur="10s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="30" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <circle cx="80" cy="80" r="120" fill="currentColor" filter="url(#wave1)" />
      </svg>

      {/* Wavy shapes - Top right pink */}
      <svg
        className="absolute -top-20 -right-20 w-96 h-96 text-pink-200/40 animate-float-delayed"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="wave2">
            <feTurbulence type="fractalNoise" baseFrequency="0.025" numOctaves="4" result="noise">
              <animate attributeName="baseFrequency" values="0.025;0.03;0.025" dur="12s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="25" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <circle cx="100" cy="50" r="100" fill="currentColor" filter="url(#wave2)" />
      </svg>

      {/* Wavy shapes - Bottom right yellow */}
      <svg
        className="absolute -bottom-32 -right-32 w-[600px] h-[600px] text-yellow-100/50 animate-wave"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="wave3">
            <feTurbulence type="fractalNoise" baseFrequency="0.015" numOctaves="6" result="noise">
              <animate attributeName="baseFrequency" values="0.015;0.02;0.015" dur="15s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="35" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <path
          d="M0,100 Q50,50 100,100 T200,100 L200,200 Q100,180 0,200 Z"
          fill="currentColor"
          filter="url(#wave3)"
        />
      </svg>

      {/* Center accent - soft blue */}
      <svg
        className="absolute top-1/2 left-1/3 w-80 h-80 text-blue-100/30 animate-pulse-slow"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="wave4">
            <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="3" result="noise">
              <animate attributeName="baseFrequency" values="0.03;0.035;0.03" dur="8s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="20" />
          </filter>
        </defs>
        <ellipse cx="100" cy="100" rx="80" ry="60" fill="currentColor" filter="url(#wave4)" opacity="0.6" />
      </svg>

      {/* Bottom left - soft green */}
      <svg
        className="absolute -bottom-20 -left-20 w-96 h-96 text-green-200/40 animate-float"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="wave5">
            <feTurbulence type="fractalNoise" baseFrequency="0.022" numOctaves="5" result="noise">
              <animate attributeName="baseFrequency" values="0.022;0.027;0.022" dur="13s" repeatCount="indefinite" />
            </feTurbulence>
            <feDisplacementMap in="SourceGraphic" in2="noise" scale="28" xChannelSelector="R" yChannelSelector="G" />
          </filter>
        </defs>
        <circle cx="100" cy="100" r="110" fill="currentColor" filter="url(#wave5)" />
      </svg>

      {/* Soft gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/10 to-white/20" />
    </div>
  );
}
