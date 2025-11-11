"use client"

import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* <video autoPlay muted loop className="w-full h-full object-cover opacity-30" src="/beach-waves-ocean-video.jpg" /> */}
        <Image src={"/image.png"} alt="Background" fill className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 md:px-8 text-center">
        <div className="mb-8">
          <p className="text-accent text-sm md:text-base font-medium mb-4 tracking-wider uppercase">
            Welcome to Singularity
          </p>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
            One Point,
            <br />
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Million Possibilities
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto text-balance">
            A 5-day immersive hackathon experience with 40 builders, 10 creators, and stable vibes
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            className="bg-white text-black hover:bg-gray-200 px-8 py-6 text-base rounded-full font-semibold inline-flex items-center gap-2"
            asChild
          >
            <a href="https://devfolio.co">
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </a>
          </Button>
          <Button
            variant="outline"
            className="border-gray-500 text-white hover:bg-gray-900 px-8 py-6 text-base rounded-full bg-transparent"
          >
            Learn More
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  )
}
