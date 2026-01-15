"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Header */}
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-sentient font-light mb-6">
          About <span className="text-primary">Chlydo</span>
        </h1>
      </div>

      {/* Mission Section */}
      <div className="container py-20">
        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <div className="glass-effect-dark rounded-lg p-8 border border-primary/20">
            <h2 className="text-3xl font-semibold mb-4 text-primary">Our Mission</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              At Chlydo, we believe the future of IT operations is intelligent, automated, and human-centric. We're
              building the platform that empowers enterprises to reimagine their technology infrastructure through
              AI-powered automation.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              Our goal is simple: eliminate operational complexity, reduce costs, and unlock innovation at scale.
            </p>
          </div>

          <div className="glass-effect-dark rounded-lg p-8 border border-secondary/20">
            <h2 className="text-3xl font-semibold mb-4 text-secondary">Our Vision</h2>
            <p className="text-foreground/80 leading-relaxed mb-4">
              We envision a world where AI seamlessly integrates with enterprise IT, enabling organizations to focus on
              strategic innovation rather than operational maintenance.
            </p>
            <p className="text-foreground/80 leading-relaxed">Chlydo is the catalyst for this transformation.</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {["Innovation", "Reliability", "Transparency"].map((value) => (
              <div key={value} className="glass-effect-dark rounded-lg p-8 border border-primary/20 text-center">
                <h3 className="text-xl font-semibold text-primary mb-3">{value}</h3>
                <p className="text-foreground/60 text-sm">
                  {value === "Innovation" &&
                    "Continuously pushing boundaries with cutting-edge AI and automation technologies."}
                  {value === "Reliability" && "Enterprise-grade solutions you can depend on 24/7, 365 days a year."}
                  {value === "Transparency" && "Open communication and honest partnerships with every client we serve."}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="glass-effect-dark rounded-lg p-12 text-center border border-primary/20">
          <h2 className="text-3xl font-semibold mb-4">Let's Build the Future Together</h2>
          <p className="text-foreground/60 mb-8 max-w-lg mx-auto">
            Join leading enterprises transforming their IT operations with Chlydo
          </p>
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Start a Conversation</Button>
          </Link>
        </div>
      </div>
    </main>
  )
}
