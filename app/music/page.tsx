import type { Metadata } from "next"
import { MusicPlayer } from "@/app/music/music-player"
import { getMusicList } from "@/app/music/action"
import { whisper } from "@/components/fonts"

export const metadata: Metadata = {
  title: "Music Player | Karte",
  description: "Listen to music by Karte and enjoy the vibe.",
}

export default async function MusicPage() {
  const musicList = await getMusicList()
  return (
    <div className="min-h-screen bg-[#94AFA0]">
      <main className="container mx-auto p-6 pt-24 md:pt-32">
        <h1 className={`${whisper.className} text-5xl md:text-6xl font-bold text-black mb-8 animate-fade-in`}>Discography</h1>
        <div className="glass rounded-xl p-6 md:p-8 animate-fade-in-delay">
          <MusicPlayer musicList={musicList} />
        </div>
      </main>
    </div>
  )
}
