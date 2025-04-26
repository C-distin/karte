"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Repeat, Shuffle, Music } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Slider } from "@/components/ui/slider"

interface Song {
  id: string
  title: string
  artist: string
  cover: string
  file: string
  duration: number
}

interface MusicPlayerProps {
  musicList: Song[]
}

export function MusicPlayer({ musicList }: MusicPlayerProps) {
  const [currentSongIndex, setCurrentSongIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)
  const [volume, setVolume] = useState(80)
  const [isMuted, setIsMuted] = useState(false)
  const [duration, setDuration] = useState(0)
  const [currentTime, setCurrentTime] = useState(0)

  const audioRef = useRef<HTMLAudioElement>(null)
  const currentSong = musicList[currentSongIndex]

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch((err) => {
          console.error("Error playing audio:", err)
          setIsPlaying(false)
        })
      } else {
        audioRef.current.pause()
      }
    }
  }, [isPlaying, currentSongIndex])

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100
      audioRef.current.muted = isMuted
    }
  }, [volume, isMuted])

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const current = audioRef.current.currentTime
      const duration = audioRef.current.duration
      setCurrentTime(current)
      setDuration(duration)
      setProgress((current / duration) * 100)
    }
  }

  const handleProgressChange = (value: number[]) => {
    if (audioRef.current) {
      const newTime = (value[0] / 100) * audioRef.current.duration
      audioRef.current.currentTime = newTime
      setProgress(value[0])
    }
  }

  const handleVolumeChange = (value: number[]) => {
    setVolume(value[0])
    if (value[0] === 0) {
      setIsMuted(true)
    } else if (isMuted) {
      setIsMuted(false)
    }
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
  }

  const playPrevious = () => {
    setCurrentSongIndex((prev) => (prev === 0 ? musicList.length - 1 : prev - 1))
    setIsPlaying(true)
  }

  const playNext = () => {
    setCurrentSongIndex((prev) => (prev === musicList.length - 1 ? 0 : prev + 1))
    setIsPlaying(true)
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00"
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, "0")}`
  }

  return (
    <div className="flex flex-col">
      <audio
        ref={audioRef}
        src={currentSong.file}
        onTimeUpdate={handleTimeUpdate}
        onEnded={playNext}
        onLoadedMetadata={handleTimeUpdate}
      />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="flex justify-center md:justify-start">
          <div className="relative w-48 h-48 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            {currentSong.cover ? (
              <Image
                src={currentSong.cover || "/placeholder.svg"}
                alt={currentSong.title}
                fill
                className="object-cover"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-[#8280ed]">
                <Music className="w-16 h-16 text-gray-100" />
              </div>
            )}
          </div>
        </div>

        <div className="col-span-2 flex flex-col justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold text-gray-700 mb-2 truncate">{currentSong.title}</h2>
            <p className="text-lg text-gray-500 mb-6">{currentSong.artist}</p>
          </div>

          <div className="space-y-6">
            <div className="space-y-2">
              <Slider
                value={[progress]}
                max={100}
                step={0.1}
                onValueChange={handleProgressChange}
                className="cursor-pointer"
              />
              <div className="flex justify-between text-sm text-gray-500">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
              </div>
            </div>

            <div className="flex justify-center items-center gap-4">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => {}}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-200"
              >
                <Shuffle className="h-5 w-5" />
              </Button>

              <Button variant="ghost" size="icon" onClick={playPrevious} className="text-gray-700 hover:bg-gray-200">
                <SkipBack className="h-6 w-6" />
              </Button>

              <Button
                variant="default"
                size="icon"
                onClick={togglePlay}
                className="bg-[#8280ed] hover:bg-[#6563cb] text-white rounded-full h-12 w-12"
              >
                {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="h-6 w-6 ml-1" />}
              </Button>

              <Button variant="ghost" size="icon" onClick={playNext} className="text-gray-700 hover:bg-gray-200">
                <SkipForward className="h-6 w-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                onClick={() => {}}
                className="text-gray-500 hover:text-gray-700 hover:bg-gray-200"
              >
                <Repeat className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 w-full max-w-xs mx-auto">
        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
          className="text-gray-500 hover:text-gray-700 hover:bg-gray-200"
        >
          {isMuted || volume === 0 ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
        </Button>
        <Slider value={[volume]} max={100} step={1} onValueChange={handleVolumeChange} className="cursor-pointer" />
      </div>

      <div className="mt-12">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Music Library</h3>
        <div className="space-y-2">
          {musicList.map((song, index) => (
            <div
              key={song.id}
              className={`flex items-center gap-4 p-3 rounded-lg transition-all cursor-pointer ${
                currentSongIndex === index ? "bg-[#8280ed]/20 border border-[#8280ed]/50" : "hover:bg-gray-200/50"
              }`}
              onClick={() => {
                setCurrentSongIndex(index)
                setIsPlaying(true)
              }}
            >
              <div className="relative w-12 h-12 rounded overflow-hidden flex-shrink-0">
                {song.cover ? (
                  <Image src={song.cover || "/placeholder.svg"} alt={song.title} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-[#8280ed]">
                    <Music className="w-6 h-6 text-gray-100" />
                  </div>
                )}
              </div>

              <div className="flex-1 min-w-0">
                <h4 className="font-medium text-gray-700 truncate">{song.title}</h4>
                <p className="text-sm text-gray-500 truncate">{song.artist}</p>
              </div>

              <div className="text-sm text-gray-500">{formatTime(song.duration)}</div>

              {currentSongIndex === index && isPlaying && (
                <div className="flex-shrink-0 w-4 flex items-center justify-center">
                  <div className="flex gap-0.5">
                    {[1, 2, 3].map((bar) => (
                      <span
                        key={bar}
                        className="w-1 bg-[#8280ed] rounded-full animate-pulse"
                        style={{
                          height: `${8 + bar * 4}px`,
                          animationDelay: `${bar * 0.2}s`,
                        }}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
