"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"
import Link from "next/link"

const dashboardData = [
  { name: "Mon", value: 2400, processes: 1200 },
  { name: "Tue", value: 3210, processes: 1210 },
  { name: "Wed", value: 2290, processes: 1229 },
  { name: "Thu", value: 2000, processes: 1300 },
  { name: "Fri", value: 2181, processes: 1108 },
]

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Header */}
      <div className="pt-32 pb-8">
        <div className="container flex justify-between items-center">
          <div>
            <h1 className="text-5xl md:text-6xl font-sentient font-light mb-2">
              AI Control <span className="text-primary">Panel</span>
            </h1>
            <p className="text-foreground/60">Real-time IT operations dashboard powered by Chlydo AI</p>
          </div>
          <Link href="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Access</Button>
          </Link>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container py-20">
        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Automated Processes", value: "2,847", change: "+12%" },
            { label: "System Uptime", value: "99.99%", change: "+0.02%" },
            { label: "Cost Savings", value: "$2.4M", change: "+24%" },
            { label: "Response Time", value: "45ms", change: "-18%" },
          ].map((metric) => (
            <Card key={metric.label} className="glass-effect-dark border border-primary/20 p-6">
              <p className="text-foreground/60 text-sm mb-2">{metric.label}</p>
              <p className="text-3xl font-semibold text-primary mb-2">{metric.value}</p>
              <p className="text-sm text-secondary">{metric.change} vs last week</p>
            </Card>
          ))}
        </div>

        {/* Charts */}
        <div className="grid lg:grid-cols-2 gap-8 mb-8">
          {/* Automation Trends */}
          <Card className="glass-effect-dark border border-primary/20 p-6">
            <h3 className="text-lg font-semibold mb-6">Automation Trends</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={dashboardData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a2847" />
                <XAxis dataKey="name" stroke="#fff" opacity={0.6} />
                <YAxis stroke="#fff" opacity={0.6} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0a0e27",
                    border: "1px solid #00ff88",
                    borderRadius: "8px",
                  }}
                />
                <Line type="monotone" dataKey="value" stroke="#00ff88" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Performance Metrics */}
          <Card className="glass-effect-dark border border-primary/20 p-6">
            <h3 className="text-lg font-semibold mb-6">Performance Metrics</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dashboardData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1a2847" />
                <XAxis dataKey="name" stroke="#fff" opacity={0.6} />
                <YAxis stroke="#fff" opacity={0.6} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0a0e27",
                    border: "1px solid #00ccff",
                    borderRadius: "8px",
                  }}
                />
                <Bar dataKey="processes" fill="#00ccff" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Active Services */}
        <Card className="glass-effect-dark border border-primary/20 p-6">
          <h3 className="text-lg font-semibold mb-6">Active Services</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "AI Automation",
              "Cloud Management",
              "Security Monitoring",
              "Data Pipeline",
              "DevOps Integration",
              "Analytics Engine",
            ].map((service) => (
              <div key={service} className="p-4 bg-background/50 rounded-lg border border-primary/20">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                  <span className="text-foreground/80">{service}</span>
                </div>
                <p className="text-sm text-foreground/60 mt-2">Operational</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </main>
  )
}
