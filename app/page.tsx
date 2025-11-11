"use client"

import { HeroSection } from "@/components/hero-section"
import { VisionSection } from "@/components/vision-section"
import { EventsSection } from "@/components/events-section"
import { PartnersSection } from "@/components/partners-section"
import { GallerySection } from "@/components/gallery-section"
import TeamSection  from "@/components/team-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <HeroSection />
      <VisionSection />
      <EventsSection />
      <TeamSection />
      <PartnersSection />
      <GallerySection />
      <NewsletterSection />
      <FooterSection />
    </main>
  )
}
