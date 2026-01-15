import Link from "next/link"
import { Logo } from "./logo"

export const Footer = () => {
  return (
    <footer className="relative z-20 bg-background/50 border-t border-primary/10 mt-20">
      <div className="container py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <Logo className="w-[100px] mb-4" />
            <p className="text-foreground/60 text-sm">Transforming enterprise IT through AI-powered automation.</p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Product</h4>
            <ul className="space-y-2">
              {["Services", "Pricing", "Documentation", "API"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Company</h4>
            <ul className="space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4 text-primary">Legal</h4>
            <ul className="space-y-2">
              {["Privacy", "Terms", "Security", "Compliance"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary/10 pt-8 flex justify-between items-center">
          <p className="text-foreground/60 text-sm">© 2026 Chlydo. All rights reserved.</p>
          <div className="flex gap-6">
            {["Twitter", "LinkedIn", "GitHub"].map((social) => (
              <Link key={social} href="#" className="text-foreground/60 hover:text-primary text-sm transition-colors">
                {social}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
