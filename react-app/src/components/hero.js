import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GL } from './gl';
import { Pill } from './pill';
import { Button } from './button';

export function Hero() {
  const [hovering, setHovering] = useState(false);
  
  return (
    <div className="flex flex-col h-svh justify-between relative z-10">
      <GL hovering={hovering} />

      <div className="pb-16 mt-auto text-center relative z-20">
        <Pill className="mb-6 bg-primary/10 border border-primary/30 text-primary">
          AI-POWERED AUTOMATION
        </Pill>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-sentient font-light leading-tight">
          Enterprise IT Solutions <br />
          <span className="text-primary neon-glow">Reimagined</span>
        </h1>
        <p className="font-mono text-sm sm:text-base text-foreground/60 text-balance mt-8 max-w-[500px] mx-auto">
          Fully automated AI-powered platform transforming IT operations, security, and innovation at enterprise scale
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-12">
          <Link to="/services">
            <Button
              className="bg-primary text-primary-foreground hover:bg-primary/90"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Explore Services
            </Button>
          </Link>
          <Link to="/contact">
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10 bg-transparent"
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
            >
              Get Started
            </Button>
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
}
