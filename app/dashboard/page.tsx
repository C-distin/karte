import { MusicUploadForm } from "@/app/dashboard/music-upload-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload Music | Music Dashboard",
  description: "Upload your music files with cover art",
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#94AFA0]">
      <main className="container mx-auto p-6 pt-24 md:pt-32">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-bold text-black mb-8 animate-fade-in">Upload Your Music</h1>
          <div className="glass rounded-xl p-6 md:p-8 animate-fade-in-delay">
            <MusicUploadForm />
          </div>
        </div>
      </main>
    </div>
  );
}
