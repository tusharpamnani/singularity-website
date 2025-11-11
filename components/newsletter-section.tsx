"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"

export function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubscribed(true)
      setEmail("")
      setTimeout(() => setSubscribed(false), 3000)
    }
  }

  return (
    <section className="py-24 px-4 md:px-8 bg-black border-b border-border">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Stay Updated</h2>
        <p className="text-gray-300 mb-8 text-lg">
          Subscribe to our newsletter and never miss out on what's happening at Singularity
        </p>

        <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            required
          />
          <Button
            type="submit"
            className="bg-cyan-500 hover:bg-cyan-600 text-black font-semibold px-6 py-3 rounded-lg whitespace-nowrap"
          >
            Subscribe
          </Button>
        </form>

        {subscribed && <p className="text-cyan-400 text-sm">✅ Thanks for subscribing!</p>}
      </div>
    </section>
  )
}
