"use client"

import { Hero } from "@/components/hero"
import { Leva } from "leva"

export default function Home() {
  return (
    <>
      <Hero />
      <Leva hidden />
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
    </>
  )
}
