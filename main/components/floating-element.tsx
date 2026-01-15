import type React from "react"

interface FloatingElementProps {
  children: React.ReactNode
  delay?: number
  duration?: number
  className?: string
}

export const FloatingElement = ({ children, delay = 0, duration = 6, className = "" }: FloatingElementProps) => {
  return (
    <div
      className={`float ${className}`}
      style={{
        animation: `float ${duration}s ease-in-out infinite`,
        animationDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  )
}
