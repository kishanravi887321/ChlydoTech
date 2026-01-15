import type React from "react"

interface GlowingTextProps {
  children: React.ReactNode
  className?: string
  intensity?: "low" | "medium" | "high"
}

export const GlowingText = ({ children, className = "", intensity = "medium" }: GlowingTextProps) => {
  const intensityClasses = {
    low: "text-primary/80 [text-shadow:0_0_5px_rgba(0,255,136,0.3)]",
    medium: "text-primary neon-glow",
    high: "text-primary neon-glow [filter:drop-shadow(0_0_20px_rgba(0,255,136,0.6))]",
  }

  return <span className={`${intensityClasses[intensity]} ${className}`}>{children}</span>
}
