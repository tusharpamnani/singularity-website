"use client"

export function EventsSection() {
  const eventCategories = [
    {
      title: "Ignition",
      description: "Kickstart your journey with foundational sessions and networking",
    },
    {
      title: "Incursion",
      description: "Deep dive into building, brainstorming, and technical workshops",
    },
    {
      title: "Collision",
      description: "High-energy showcases, demos, and collaborative challenges",
    },
  ]

  return (
    <section className="py-24 px-4 md:px-8 bg-black border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">Event Phases</h2>
        <p className="text-gray-400 mb-16 max-w-2xl">
          Inspiration from our community on what makes a hackathon truly unforgettable
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {eventCategories.map((category) => (
            <div
              key={category.title}
              className="bg-gradient-to-br from-gray-900 to-black border border-gray-800 rounded-xl p-8 hover:border-cyan-500 transition-colors"
            >
              <h3 className="text-2xl font-bold mb-3 text-cyan-400">{category.title}</h3>
              <p className="text-gray-300 leading-relaxed">{category.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-card border border-border rounded-xl p-8">
          <p className="text-gray-300 text-center">
            ✨ Section for people who made it possible: Inspo from FBI website
          </p>
        </div>
      </div>
    </section>
  )
}
