import type { Metadata } from "next"
import Image from "next/image"
import { Music2, Headphones, Upload, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Music Dashboard",
  description: "Learn more about our music platform and team",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900">
      <main className="container mx-auto p-6 pt-24 md:pt-32">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 animate-fade-in">About Karte</h1>

        <div className="glass rounded-xl p-6 md:p-8 animate-fade-in-delay space-y-12">
          {/* App Introduction */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-white">Your Music, Your Way</h2>
              <p className="text-purple-100">
                Originally residing in Dallas,Tx Karté has compiled over 14 years of production and composition experience. In 2015 Karté moved to Austin,Tx to attend the “Recording Conservatory of Austin” an audio engineering school in which he graduated in 2018. After which he studied under Travis Kennedy a former engineer from the famed “Electric Lady Studios” in Greenwhich Village, New York City. Since, Karté has been perfecting his craft on the boards as well as the drum machine with his new found production team.
              </p>
              <p className="text-purple-100">
                “Engineering is like a magic trick, when I first started I was guessing cards out of a deck…now I’m tryin to make the room disappear, theres levels to everything.”
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-purple-400/30 shadow-lg">
                <Image src="/placeholder.svg?height=400&width=400" alt="Music App" fill className="object-cover" />
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-white">Key Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 transition-all hover:bg-white/10">
                <div className="bg-purple-600/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Upload className="h-6 w-6 text-purple-200" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Easy Uploads</h3>
                <p className="text-purple-200">Upload your music files with cover art in just a few clicks.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 transition-all hover:bg-white/10">
                <div className="bg-purple-600/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Headphones className="h-6 w-6 text-purple-200" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Beautiful Player</h3>
                <p className="text-purple-200">Enjoy your music with our sleek, intuitive music player.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 transition-all hover:bg-white/10">
                <div className="bg-purple-600/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Music2 className="h-6 w-6 text-purple-200" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Music Library</h3>
                <p className="text-purple-200">Organize and browse your music collection with ease.</p>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-white/10 transition-all hover:bg-white/10">
                <div className="bg-purple-600/30 p-3 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                  <Share2 className="h-6 w-6 text-purple-200" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Share Music</h3>
                <p className="text-purple-200">Share your favorite tracks with friends and family.</p>
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="bg-purple-800/30 rounded-xl p-6 border border-purple-500/20">
            <h2 className="text-2xl font-bold text-white mb-4">My Mission</h2>
            <p className="text-purple-100 text-lg">
              I believe that music is a universal language that connects people across cultures and backgrounds. My
              mission is to create technology that enhances the way people experience music, making it more accessible,
              personal, and enjoyable for everyone.
            </p>
          </section>
        </div>
      </main>
    </div>
  )
}
