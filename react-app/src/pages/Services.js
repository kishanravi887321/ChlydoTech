import React from 'react';
import { Button } from '../components/button';
import { Link } from 'react-router-dom';
import { Zap, Cloud, Lock, BarChart3, GitBranch } from 'lucide-react';

const services = [
  {
    title: "AI Automation",
    description: "Intelligent automation solutions that streamline business processes and reduce operational overhead by up to 80%.",
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
];

function Services() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-background via-background to-background">
      {/* Header */}
      <div className="pt-32 pb-16 text-center">
        <h1 className="text-5xl md:text-6xl font-sentient font-light mb-6">
          Our <span className="text-primary">Services</span>
        </h1>
        <p className="text-foreground/60 text-lg max-w-2xl mx-auto">
          Comprehensive AI-powered solutions designed to revolutionize your enterprise operations
        </p>
      </div>

      {/* Services Grid */}
      <div className="container py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass-effect-dark rounded-lg p-8 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover-glow"
              >
                <Icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-2xl font-semibold mb-3 text-primary">{service.title}</h3>
                <p className="text-foreground/70">{service.description}</p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link to="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Request a Consultation
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default Services;
