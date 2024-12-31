'use client'

import React, { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX, Maximize, Minimize } from 'lucide-react'
import { cn } from '@/lib/utils'

interface VideoPlayerProps {
    src: string
}

export function VideoPlayer({ src }: VideoPlayerProps) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [volume, setVolume] = useState(1)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)
    const [isFullscreen, setIsFullscreen] = useState(false)
    const [showControls, setShowControls] = useState(true)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        const updateTime = () => setCurrentTime(video.currentTime)
        const updateDuration = () => setDuration(video.duration)

        video.addEventListener('timeupdate', updateTime)
        video.addEventListener('loadedmetadata', updateDuration)

        return () => {
            video.removeEventListener('timeupdate', updateTime)
            video.removeEventListener('loadedmetadata', updateDuration)
        }
    }, [])

    const togglePlay = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
            } else {
                videoRef.current.play()
            }
            setIsPlaying(!isPlaying)
        }
    }

    const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = parseFloat(e.target.value)
        setVolume(newVolume)
        if (videoRef.current) {
            videoRef.current.volume = newVolume
        }
    }

    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newTime = parseFloat(e.target.value)
        setCurrentTime(newTime)
        if (videoRef.current) {
            videoRef.current.currentTime = newTime
        }
    }

    const toggleFullscreen = () => {
        if (!document.fullscreenElement) {
            videoRef.current?.requestFullscreen()
            setIsFullscreen(true)
        } else {
            document.exitFullscreen()
            setIsFullscreen(false)
        }
    }

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        return `${minutes}:${seconds.toString().padStart(2, '0')}`
    }

    return (
        <div
            className="relative w-full max-w-4xl mx-auto bg-black rounded-lg overflow-hidden"
            onMouseEnter={() => setShowControls(true)}
            onMouseLeave={() => setShowControls(false)}
        >
            <video
                ref={videoRef}
                src={src}
                className="w-full h-auto"
                onClick={togglePlay}
            />
            <div className={cn(
                "absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-4 transition-opacity duration-300",
                showControls ? "opacity-100" : "opacity-0"
            )}>
                <div className="flex items-center text-white">
                    <span className="mr-2">{formatTime(currentTime)}</span>
                    <input
                        type="range"
                        min="0"
                        max={duration}
                        value={currentTime}
                        onChange={handleProgressChange}
                        className="flex-grow"
                    />
                    <span className="ml-2">{formatTime(duration)}</span>
                </div>
                <div className="flex items-center justify-between mb-2">
                    <div className='flex gap-5'>
                        <button onClick={togglePlay} className="text-white">
                            {isPlaying ? <Pause size={24} /> : <Play size={24} />}
                        </button>
                        <div className="flex items-center">
                            <button onClick={() => setVolume(prev => (prev === 0 ? 1 : 0))} className="text-white mr-2">
                                {volume === 0 ? <VolumeX size={24} /> : <Volume2 size={24} />}
                            </button>
                            <input
                                type="range"
                                min="0"
                                max="1"
                                step="0.1"
                                value={volume}
                                onChange={handleVolumeChange}
                                className="w-20"
                            />
                        </div>
                    </div>
                    <button onClick={toggleFullscreen} className="text-white">
                        {isFullscreen ? <Minimize size={24} /> : <Maximize size={24} />}
                    </button>
                </div>
            </div>
        </div>
    )
}

