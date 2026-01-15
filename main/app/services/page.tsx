"use client"

import { ServiceCard } from "@/components/service-card"
import { Button } from "@/components/ui/button"
import { Zap, Cloud, Lock, BarChart3, GitBranch } from "lucide-react"
import Link from "next/link"

const services = [
  {
    title: "AI Automation",
    description:
      "Intelligent automation solutions that streamline business processes and reduce operational overhead by up to 80%.",
    icon: Zap,
  },
  {
    title: "Cloud Solutions",
    description: "Enterprise-grade cloud infrastructure optimized for performance, scalability, and cost efficiency.",
    icon: Cloud,
  },
  {
    title: "Cybersecurity",
    description: "Advanced threat detection and prevention systems protecting your digital infrastructure 24/7.",
    icon: Lock,
  },
  {
    title: "Data Science",
    description: "Predictive analytics and machine learning models driving data-informed business decisions.",
    icon: BarChart3,
  },
  {
    title: "DevOps",
    description: "Continuous integration and deployment pipelines accelerating your software delivery lifecycle.",
    icon: GitBranch,
  },
  {
    title: "Custom Development",
    description: "Tailored solutions engineered to solve your unique business challenges and requirements.",
    icon: Zap,
  },
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Header */}
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-sentient font-light mb-6">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
          Comprehensive AI-powered solutions designed to transform your enterprise IT infrastructure
        </p>
      </div>

      {/* Services Grid */}
      <div className="container py-20">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} delay={`${index * 0.1}`} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="glass-effect-dark rounded-lg p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your IT Operations?</h2>
          <p className="text-foreground/60 mb-8 max-w-lg mx-auto">
            Let our team of experts design a custom solution tailored to your organization's needs
          </p>
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Started Today</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
