import React from 'react';

export const Logo = (props) => {
  return (
    <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Chlydo hexagonal icon with AI theme */}
      <defs>
        <linearGradient id="chlydoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#00ff88", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#00ccff", stopOpacity: 1 }} />
        </linearGradient>
      </defs>

      {/* Outer hexagon */}
      <path
        d="M20 2 L35 10.5 L35 29.5 L20 38 L5 29.5 L5 10.5 Z"
        stroke="url(#chlydoGradient)"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Inner design - AI circuit pattern */}
      <circle cx="20" cy="20" r="8" fill="none" stroke="url(#chlydoGradient)" strokeWidth="1" opacity="0.6" />
      <circle cx="20" cy="20" r="4" fill="url(#chlydoGradient)" />

      {/* Corner accents */}
      <circle cx="20" cy="10" r="2" fill="url(#chlydoGradient)" opacity="0.8" />
      <circle cx="28" cy="15" r="1.5" fill="url(#chlydoGradient)" opacity="0.6" />
      <circle cx="12" cy="15" r="1.5" fill="url(#chlydoGradient)" opacity="0.6" />
    </svg>
  );
};
