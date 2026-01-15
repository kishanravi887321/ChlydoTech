import type React from "react"

interface AnimatedCardProps {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: "primary" | "secondary" | "default"
}

export const AnimatedCard = ({ children, className = "", delay = 0, variant = "default" }: AnimatedCardProps) => {
  const baseClasses =
    "glass-effect-dark rounded-lg p-6 border transition-all duration-500 hover:scale-105 hover:shadow-lg"

  const variantClasses = {
    primary: "border-primary/20 hover:border-primary/50 hover:shadow-primary/20",
    secondary: "border-secondary/20 hover:border-secondary/50 hover:shadow-secondary/20",
    default: "border-border hover:border-primary/30",
  }

  return (
    <div
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{
        animation: `fade-in-up 0.6s ease-out ${delay}s both`,
      }}
    >
      {children}
    </div>
  )
}
