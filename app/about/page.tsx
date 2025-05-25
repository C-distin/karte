import type { Metadata } from "next"
import { playwrite, lilita, whisper, montserrat } from "@/components/fonts"
import Image from "next/image"
import headphones from "@/public/setup.jpg"

export const metadata: Metadata = {
  title: "About Us | Music Dashboard",
  description: "Learn more about Karte and his music journey.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#94AFA0]">
      <main className="container mx-auto pt-24 md:pt-30">
        <h1 className={`${whisper.className} pl-4 text-5xl md:text-6xl font-extrabold text-black mb-3 animate-fade-in`}>About Karte</h1>
        <div className="glass rounded-xl p-6 md:p-8 animate-fade-in-delay space-y-12">
          {/* App Introduction */}
          <section className={`${montserrat.className} md:p-12`}>
            <div className="flex flex-col-reverse md:flex-row justify-between gap-8">
              <div className="md:w-1/2">
                <p className="text-black text-[1rem] md:text-[2.5rem] italic border-l-4 border-[#8280ed] pl-2 py-2">
                  "Engineering is like a magic trick, when I first started I was guessing cards out of a deck…now I'm tryin to make the room disappear, there's levels to everything."
                </p>
              </div>
              <div className="md:w-1/2 flex items-center justify-center">
                <p className="text-black text-justify">
                  Originally residing in Dallas,Tx Karté has compiled over 14 years of production and composition experience. In 2015 Karté moved to Austin,Tx to attend the "Recording Conservatory of Austin" an audio engineering school in which he graduated in 2018. After which he studied under Travis Kennedy a former engineer from the famed "Electric Lady Studios" in Greenwhich Village, New York City. Since, Karté has been perfecting his craft on the boards as well as the drum machine with his new found production team.
                </p>
              </div>
            </div>
          </section>
            
        {/* Full-width image without padding */}
        <div className="mt-2 -mx-6 md:-mx-8 lg:-mx-12 overflow-hidden">
          <Image 
            src={headphones} 
            alt="Headphones" 
            className="w-full h-auto" 
            priority
          />
        </div>

        </div>
      </main>
      
      {/* Mission - Full Width */}
      <section className={`${montserrat.className} bg-[#7987B3] py-12 px-6 md:px-12`}>
        <div className="container mx-auto">
          <h2 className={`text-4xl font-bold text-white mb-6 ${whisper.className}`}>My Mission</h2>
          <p className="text-white text-lg md:text-xl leading-relaxed max-w-3xl">
            I believe that music is a universal language that connects people across cultures and backgrounds. My
            mission is to create technology that enhances the way people experience music, making it more accessible,
            personal, and enjoyable for everyone.
          </p>
        </div>
      </section>
    </div>
  )
}
