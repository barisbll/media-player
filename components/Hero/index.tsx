'use client'

import { useRef, useState } from 'react'

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0)

  const togglePlay = () => {
    const video = videoRef.current

    if (!video) return

    if (video.paused) {
      video.play()
      setIsPlaying(true)
    } else {
      video.pause()
      setIsPlaying(false)
    }
  }

  const handleProgress = () => {
    const video = videoRef.current

    if (!video) return

    const percent = (video.currentTime / video.duration) * 100
    setProgress(percent)
  }

  const scrub = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const video = videoRef.current
    if (!video) return
    const scrubTime =
      (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * video.duration
    video.currentTime = scrubTime
  }

  return (
    <div className="w-full h-1/2scHeight relative flex">
      <div className="w-full h-full bg-black bg-opacity-50 z-10"></div>
      <video
        ref={videoRef}
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
        autoPlay
        loop
        muted
        onTimeUpdate={handleProgress}
      >
        <source src="/videos/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between z-20">
        <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        <div className="flex-1 mx-4 cursor-pointer" onClick={scrub}>
          <div
            className="bg-gray-700 h-1"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div>
          {Math.floor(
            ((progress / 100) * (videoRef?.current?.duration || 100)) / 60
          )}
          :
          {Math.floor(
            ((progress / 100) * (videoRef?.current?.duration || 100)) % 60
          )
            .toString()
            .padStart(2, '0')}
        </div>
      </div>
    </div>
  )
}
