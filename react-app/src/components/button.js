import React from 'react';
import { cn } from '../lib/utils';
import { px } from './utils';

export const Button = ({ 
  className, 
  variant = 'default', 
  size = 'default', 
  children, 
  ...props 
}) => {
  const polyRoundness = 16;
  const hypotenuse = polyRoundness * 2;
  const hypotenuseHalf = polyRoundness / 2 - 1.5;

  const buttonClasses = cn(
    "inline-flex relative uppercase border font-mono cursor-pointer items-center font-medium justify-center gap-2 whitespace-nowrap ease-out transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]",
    "[clip-path:polygon(var(--poly-roundness)_0,calc(100%_-_var(--poly-roundness))_0,100%_0,100%_calc(100%_-_var(--poly-roundness)),calc(100%_-_var(--poly-roundness))_100%,0_100%,0_calc(100%_-_var(--poly-roundness)),0_var(--poly-roundness))]",
    variant === 'default' && "bg-background border-primary text-primary-foreground shadow-[#EBB800] hover:shadow-[#EBB800]/80",
    variant === 'outline' && "border-secondary text-secondary hover:bg-secondary/10 bg-transparent",
    size === 'default' && "h-16 px-6 text-base",
    size === 'sm' && "h-14 px-6 text-sm",
    className
  );

  return (
    <button
      style={{
        '--poly-roundness': px(polyRoundness),
      }}
      className={buttonClasses}
      {...props}
    >
      <span 
        style={{ '--h': px(hypotenuse), '--hh': px(hypotenuseHalf) }} 
        data-border 
        className="absolute z-0 inline-block w-[var(--h)] top-[var(--hh)] left-[var(--hh)] h-[2px] -rotate-45 origin-top -translate-x-1/2 bg-primary"
      />
      <span 
        style={{ '--h': px(hypotenuse), '--hh': px(hypotenuseHalf) }} 
        data-border 
        className="absolute z-0 w-[var(--h)] top-[var(--hh)] right-[var(--hh)] h-[2px] bg-primary rotate-45 translate-x-1/2" 
      />
      <span 
        style={{ '--h': px(hypotenuse), '--hh': px(hypotenuseHalf) }} 
        data-border 
        className="absolute z-0 w-[var(--h)] bottom-[var(--hh)] left-[var(--hh)] h-[2px] bg-primary rotate-45 -translate-x-1/2" 
      />
      <span 
        style={{ '--h': px(hypotenuse), '--hh': px(hypotenuseHalf) }} 
        data-border 
        className="absolute z-0 w-[var(--h)] bottom-[var(--hh)] right-[var(--hh)] h-[2px] bg-primary -rotate-45 translate-x-1/2" 
      />
      
      <span className="relative z-10 inline-flex gap-2 items-center">
        {children}
      </span>
    </button>
  );
};
