import { MusicPlayer } from "@/app/music/music-player";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Music Player | Karte",
  description: "Listen to Karte",
};

export default async function MusicPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-violet-800 to-indigo-900">
      <main className="container mx-auto p-6 pt-24 md:pt-32">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-8 animate-fade-in">Your Music Library</h1>
        <div className="glass rounded-xl p-6 md:p-8 animate-fade-in-delay">
          <MusicPlayer />
        </div>
      </main>
    </div>
  );
}
