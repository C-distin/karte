import type { Metadata } from "next"
import Image from "next/image"
import { Music2, Headphones, Upload, Share2 } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Music Dashboard",
  description: "Learn more about Karte and his music journey.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#ebed80]">
      <main className="container mx-auto p-6 pt-24 md:pt-32">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 animate-fade-in">About Karte</h1>

        <div className="glass rounded-xl p-6 md:p-8 animate-fade-in-delay space-y-12">
          {/* App Introduction */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-gray-700">Your Music, Your Way</h2>
              <p className="text-gray-600">
                Originally residing in Dallas,Tx Karté has compiled over 14 years of production and composition experience. In 2015 Karté moved to Austin,Tx to attend the "Recording Conservatory of Austin" an audio engineering school in which he graduated in 2018. After which he studied under Travis Kennedy a former engineer from the famed "Electric Lady Studios" in Greenwhich Village, New York City. Since, Karté has been perfecting his craft on the boards as well as the drum machine with his new found production team.
              </p>
              <p className="text-gray-600">
                "Engineering is like a magic trick, when I first started I was guessing cards out of a deck…now I'm tryin to make the room disappear, theres levels to everything."
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#8280ed]/30 shadow-lg">
                <Image src="https://images.pexels.com/photos/744318/pexels-photo-744318.jpeg" alt="Music App" fill className="object-cover" />
              </div>
            </div>
          </section>

          {/* Mission */}
          <section className="bg-[#8280ed]/30 rounded-xl p-6 border border-[#8280ed]/20">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">My Mission</h2>
            <p className="text-gray-700 text-lg">
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
