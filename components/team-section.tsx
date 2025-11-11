"use client"

export function TeamSection() {
  const teamMembers = [
    { name: "Builder One", role: "Co-founder" },
    { name: "Builder Two", role: "Core Team" },
    { name: "Builder Three", role: "Core Team" },
    { name: "Builder Four", role: "Advisor" },
  ]

  return (
    <section className="py-24 px-4 md:px-8 bg-background border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-balance">The Team Behind</h2>
        <p className="text-gray-400 mb-16 max-w-2xl">Meet the visionaries making Singularity possible</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, i) => (
            <div
              key={i}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-cyan-400 transition-colors"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full mx-auto mb-4" />
              <h3 className="font-semibold mb-2">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
