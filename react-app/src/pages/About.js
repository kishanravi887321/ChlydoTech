import React from 'react';
import { Button } from '../components/button';
import { Link } from 'react-router-dom';

function About() {
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
            {[
              { value: "Innovation", desc: "Continuously pushing boundaries with cutting-edge AI and automation technologies." },
              { value: "Reliability", desc: "Delivering consistent, dependable solutions you can trust for mission-critical operations." },
              { value: "Transparency", desc: "Building open, honest partnerships with clear communication and measurable results." }
            ].map((item) => (
              <div key={item.value} className="glass-effect-dark rounded-lg p-8 border border-primary/20 text-center">
                <h3 className="text-xl font-semibold text-primary mb-3">{item.value}</h3>
                <p className="text-foreground/60 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link to="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
              Let's Work Together
            </Button>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default About;
