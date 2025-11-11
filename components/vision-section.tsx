"use client";

export function VisionSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-background border-b border-border">
      <div className="max-w-4xl mx-auto">
        <div className="bg-card border border-border rounded-2xl p-8 md:p-12">
          <p className="text-accent text-sm font-medium tracking-wider uppercase mb-4">
            Our Vision
          </p>

          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center leading-tight">
            Not all hackerhouses are to onboard new projects.
            <br />
            Some of them are to scale up the existing ones.
          </h2>

          <p>
            We're building an ecosystem where builders, creators, and
            visionaries come together for genuine collaboration and innovation.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="p-6 bg-black rounded-lg border border-border">
              <div className="text-4xl font-bold text-cyan-400 mb-2">40</div>
              <div className="text-gray-300">Builders</div>
            </div>
            <div className="p-6 bg-black rounded-lg border border-border">
              <div className="text-4xl font-bold text-cyan-400 mb-2">10</div>
              <div className="text-gray-300">Creators</div>
            </div>
            <div className="p-6 bg-black rounded-lg border border-border">
              <div className="text-4xl font-bold text-cyan-400 mb-2">5</div>
              <div className="text-gray-300">Days of Stable Vibes</div>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <p className="text-sm text-gray-400 mb-4">
              📍 Date, Location & Excess Information Coming Soon
            </p>
            <button className="text-cyan-400 hover:text-cyan-300 font-semibold inline-flex items-center gap-2 transition-colors">
              Join Stellar India TG
              <ArrowIcon />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function ArrowIcon() {
  return (
    <svg
      className="w-4 h-4"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M13 7l5 5m0 0l-5 5m5-5H6"
      />
    </svg>
  );
}
