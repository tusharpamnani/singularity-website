"use client"

export function GallerySection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-black border-b border-border">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-balance">Experience</h2>

        <div className="space-y-6">
          <div className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl p-12 text-center min-h-64 flex items-center justify-center">
            <div>
              <p className="text-white text-lg font-semibold">📸 Photos from our events & hacks</p>
              <p className="text-gray-100 text-sm mt-2">Stellar Yatra photos & Hackerhouse highlights</p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-12 text-center min-h-48 flex items-center justify-center">
            <div>
              <p className="text-white text-lg font-semibold">🎨 Team NFTs</p>
              <p className="text-gray-100 text-sm mt-2">Limited edition digital collectibles</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
