"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon, Loader2, Music, Upload } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";

export function MusicUploadForm() {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [musicFile, setMusicFile] = useState<File | null>(null);
  const [coverFile, setCoverFile] = useState<File | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);

  const handleCoverChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setCoverFile(file);

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setCoverPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setCoverPreview(null);
    }
  };

  const handleMusicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setMusicFile(file);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!musicFile) {
      toast.error("Please select a music file to upload", {
        description: "A music file is required to continue",
      });
      return;
    }

    const formData = new FormData(e.currentTarget);

    try {
      setIsUploading(true);

      // In a real app, you would use a server action to handle the upload
      // For this example, we'll simulate a successful upload
      await new Promise((resolve) => setTimeout(resolve, 2000));

      toast.success("Upload successful!", {
        description: "Your music has been uploaded successfully.",
      });

      router.push("/music");
    } catch (error) {
      toast.error("Upload failed", {
        description: "There was an error uploading your music. Please try again.",
      });
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="title" className="text-white">
          Song Title
        </Label>
        <Input
          id="title"
          name="title"
          placeholder="Enter song title"
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="artist" className="text-white">
          Artist
        </Label>
        <Input
          id="artist"
          name="artist"
          placeholder="Enter artist name"
          required
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="description" className="text-white">
          Description (optional)
        </Label>
        <Textarea
          id="description"
          name="description"
          placeholder="Enter song description"
          className="bg-white/10 border-white/20 text-white placeholder:text-white/50 focus:border-purple-400 min-h-[100px]"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="music" className="text-white">
            Music File (MP3/MP4)
          </Label>
          <div className="relative">
            <Input
              id="music"
              name="music"
              type="file"
              accept=".mp3,.mp4"
              required
              onChange={handleMusicChange}
              className="hidden"
            />
            <div
              className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer transition-all ${
                musicFile ? "border-purple-400 bg-purple-500/10" : "border-white/20 hover:border-white/40 bg-white/5"
              }`}
              onClick={() => document.getElementById("music")?.click()}
            >
              {musicFile ? (
                <>
                  <Music className="h-8 w-8 text-purple-300 mb-2" />
                  <p className="text-sm font-medium text-white">{musicFile.name}</p>
                  <p className="text-xs text-white/70 mt-1">{(musicFile.size / (1024 * 1024)).toFixed(2)} MB</p>
                </>
              ) : (
                <>
                  <Music className="h-8 w-8 text-white/70 mb-2" />
                  <p className="text-sm font-medium text-white">Click to select music file</p>
                  <p className="text-xs text-white/70 mt-1">MP3 or MP4 format</p>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="cover" className="text-white">
            Cover Art (JPG/PNG)
          </Label>
          <div className="relative">
            <Input
              id="cover"
              name="cover"
              type="file"
              accept=".jpg,.jpeg,.png"
              required
              onChange={handleCoverChange}
              className="hidden"
            />
            <div
              className={`flex flex-col items-center justify-center p-6 border-2 border-dashed rounded-lg cursor-pointer transition-all ${
                coverPreview ? "border-purple-400 bg-purple-500/10" : "border-white/20 hover:border-white/40 bg-white/5"
              }`}
              onClick={() => document.getElementById("cover")?.click()}
              style={{
                height: "100%",
                minHeight: "160px",
                backgroundImage: coverPreview ? `url(${coverPreview})` : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              {!coverPreview && (
                <>
                  <ImageIcon className="h-8 w-8 text-white/70 mb-2" />
                  <p className="text-sm font-medium text-white">Click to select cover art</p>
                  <p className="text-xs text-white/70 mt-1">JPG or PNG format</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <Button
        type="submit"
        disabled={isUploading}
        className="w-full bg-purple-600 hover:bg-purple-700 text-white mt-8 transition-all"
      >
        {isUploading ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Uploading...
          </>
        ) : (
          <>
            <Upload className="mr-2 h-4 w-4" />
            Upload Music
          </>
        )}
      </Button>
    </form>
  );
}
