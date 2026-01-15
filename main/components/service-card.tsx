import type { LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  delay?: string
}

export const ServiceCard = ({ title, description, icon: Icon, delay = "0" }: ServiceCardProps) => {
  return (
    <div
      className="glass-effect-dark p-6 rounded-lg border border-primary/20 hover:border-primary/50 transition-all duration-500 group hover:shadow-lg hover:shadow-primary/20 hover:scale-105"
      style={{
        animation: `fadeInUp 0.6s ease-out ${delay}s both`,
      }}
    >
      <div className="flex items-start gap-4 mb-4">
        <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
          <Icon className="w-6 h-6 text-primary" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-2 text-foreground">{title}</h3>
      <p className="text-foreground/60 text-sm leading-relaxed">{description}</p>
    </div>
  )
}
