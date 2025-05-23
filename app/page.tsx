import Hero from "@/components/hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/40 relative overflow-hidden">
      <div className="absolute z-0 inset-0">
        <Image
          src="/microphone.jpeg"
          alt="Golden African microphone"
          fill={true}
          objectFit="cover"
          quality={100}
          className="opacity-30"
        />
      </div>
      {/* Glassmorphic overlay */}
      <div className="absolute inset-0 bg-white/20 z-10" />
      <Hero />
    </main>
  );
}
