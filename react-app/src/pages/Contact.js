import React, { useState } from 'react';
import { Button } from '../components/button';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

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
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-foreground"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-foreground"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium mb-2">
                Company Name
              </label>
              <input
                id="company"
                name="company"
                type="text"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-foreground"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background/50 border border-primary/20 rounded-lg focus:outline-none focus:border-primary text-foreground"
              />
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
              Send Message
            </Button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="max-w-2xl mx-auto mt-12 text-center">
          <p className="text-foreground/60 mb-2">Or reach us directly at</p>
          <a href="mailto:hello@chlydo.tech" className="text-primary hover:text-secondary transition-colors">
            hello@chlydo.tech
          </a>
        </div>
      </div>
    </main>
  );
}

export default Contact;
