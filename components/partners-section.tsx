"use client"

export function PartnersSection() {
  const partners = [
    { name: "Partner One", role: "Speaker" },
    { name: "Partner Two", role: "Sponsor" },
    { name: "Partner Three", role: "Collaborator" },
  ]

  const logos = ["PayPal", "IBM", "Microsoft", "Google"]

  return (
    <section className="py-24 px-4 md:px-8 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-balance">Partners & Speakers</h2>

        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {partners.map((partner, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-12 flex items-center justify-center min-h-48"
            >
              <div className="text-center">
                <div className="text-6xl mb-4">🎭</div>
                <h3 className="font-semibold text-gray-300 mb-2">{partner.name}</h3>
                <p className="text-sm text-gray-500">{partner.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-black border border-border rounded-xl p-12">
          <p className="text-gray-400 text-center mb-8">Our incredible partners</p>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {logos.map((logo) => (
              <div
                key={logo}
                className="px-6 py-3 border border-border rounded-lg text-gray-400 hover:text-cyan-400 transition-colors"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
