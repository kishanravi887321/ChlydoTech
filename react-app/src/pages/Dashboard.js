import React from 'react';
import { Button } from '../components/button';
import { Link } from 'react-router-dom';

function Dashboard() {
  const dashboardData = [
    { label: "Automated Processes", value: "2,847", change: "+12%" },
    { label: "System Uptime", value: "99.99%", change: "+0.02%" },
    { label: "Cost Savings", value: "$2.4M", change: "+24%" },
    { label: "Response Time", value: "45ms", change: "-18%" },
  ];

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
          <Link to="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Get Access</Button>
          </Link>
        </div>
      </div>

      {/* Dashboard Content */}
      <div className="container py-20">
        {/* Metrics Grid */}
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          {dashboardData.map((metric) => (
            <div key={metric.label} className="glass-effect-dark border border-primary/20 p-6 rounded-lg">
              <p className="text-foreground/60 text-sm mb-2">{metric.label}</p>
              <p className="text-3xl font-semibold text-primary mb-2">{metric.value}</p>
              <p className="text-sm text-secondary">{metric.change} vs last week</p>
            </div>
          ))}
        </div>

        {/* Charts Placeholder */}
        <div className="grid md:grid-cols-2 gap-6 mt-8">
          <div className="glass-effect-dark border border-primary/20 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">System Performance</h3>
            <div className="h-64 flex items-center justify-center text-foreground/40">
              Chart Placeholder - Install recharts for full functionality
            </div>
          </div>

          <div className="glass-effect-dark border border-primary/20 p-8 rounded-lg">
            <h3 className="text-xl font-semibold text-primary mb-4">Automated Processes</h3>
            <div className="h-64 flex items-center justify-center text-foreground/40">
              Chart Placeholder - Install recharts for full functionality
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-12 glass-effect-dark border border-secondary/20 p-8 rounded-lg text-center">
          <h3 className="text-2xl font-semibold mb-4">Ready to Experience the Full Dashboard?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            This is a preview of our AI-powered control panel. Get in touch to see the full capabilities of Chlydo's
            enterprise platform.
          </p>
          <Link to="/contact">
            <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90">
              Request Demo Access
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Dashboard;
