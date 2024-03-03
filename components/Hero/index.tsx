'use client'

import { useRef, useState } from 'react'
import { Button } from '../Button'
import { MediaPlayerButton } from '../MediaPlayerButton'
import { HeaderTitle } from '../HeaderTitle'

export const Hero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
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
    <div className="w-full h-3/4scHeight relative flex bg-black">
      {/* <div className="w-full h-full bg-black bg-opacity-65 z-10"></div> */}
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
      <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-80"></div>
      <div className="absolute inset-0 bg-gradient-to-l from-black to-transparent opacity-80"></div>
      <div className="w-full h-full absolute top-0 left-0 z-20 flex justify-center items-center">
        <div className="h-1/2 w-2/3 flex flex-col justify-between items-start">
          {/* BUTTON START */}
          <div>
            <Button type="secondary">LOREM IPSUM</Button>
          </div>
          {/* BUTTON END */}
          {/* TITLE START */}
          <div className="w-2/3 flex flex-col gap-4">
            <HeaderTitle isColorful> Lorem Ipsum Dolor Sit amet </HeaderTitle>
            <HeaderTitle isColorful={false}>
              Donec cursus ligula diam, nec congue augue ultrices nec.
            </HeaderTitle>
          </div>
          {/* TITLE END */}
          {/* MEDIA PLAYER START */}
          <div className="w-full flex items-center justify-between border border-white-20 rounded-sm px-6 py-3 bg-black bg-opacity-20">
            {/* <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button> */}
            <MediaPlayerButton
              onClick={togglePlay}
              isPlaying={isPlaying}
              width={20}
              height={20}
            />
            <div
              className="flex-1 mx-4 cursor-pointer bg-mediaLine"
              onClick={scrub}
            >
              <div
                className="bg-green h-1"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className="text-mediaTime font-bold">
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
          {/* MEDIA PLAYER END */}
        </div>
      </div>
    </div>
  )
}
