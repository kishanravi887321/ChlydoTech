"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic would go here
    console.log("Form submitted:", formData)
    setFormData({ name: "", email: "", company: "", message: "" })
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Header */}
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-sentient font-light mb-6">
          Get in <span className="text-primary">Touch</span>
        </h1>
        <p className="text-foreground/60 text-lg">Let's discuss how Chlydo can transform your IT operations</p>
      </div>

      {/* Contact Form */}
      <div className="container py-20">
        <div className="max-w-2xl mx-auto glass-effect-dark rounded-lg p-8 md:p-12 border border-primary/20">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Full Name
              </label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="bg-background/50 border-primary/20 text-foreground placeholder:text-foreground/40"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="bg-background/50 border-primary/20 text-foreground placeholder:text-foreground/40"
                required
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company
              </label>
              <Input
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company"
                className="bg-background/50 border-primary/20 text-foreground placeholder:text-foreground/40"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your IT challenges..."
                className="bg-background/50 border-primary/20 text-foreground placeholder:text-foreground/40 min-h-32"
                required
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Send Message
            </Button>
          </form>

          <div className="mt-12 pt-8 border-t border-primary/20 grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <p className="text-primary font-semibold mb-2">Email</p>
              <p className="text-foreground/60">contact@chlydo.ai</p>
            </div>
            <div className="text-center">
              <p className="text-primary font-semibold mb-2">Phone</p>
              <p className="text-foreground/60">+1 (555) 123-4567</p>
            </div>
            <div className="text-center">
              <p className="text-primary font-semibold mb-2">Address</p>
              <p className="text-foreground/60">San Francisco, CA</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
