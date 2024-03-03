/* eslint-disable react/prop-types */
import { MediaPlayIcon } from '../Icons/MediaPlayIcon'
import { MediaPauseIcon } from '../Icons/MediaPauseIcon'
import { cn } from '@/utility/cn'

type MediaPlayerButtonProps = {
  className?: string
  width?: number
  height?: number
  onClick: () => void
  isPlaying: boolean
}

export const MediaPlayerButton: React.FC<MediaPlayerButtonProps> = ({
  className,
  width,
  height,
  onClick,
  isPlaying,
}) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'bg-black text-white flex items-center justify-center px-4 py-4 rounded-full hover:bg-opacity-90 focus:outline-none focus:ring focus:ring-green focus:ring-opacity-50 border border-grayBorder',
        className
      )}
    >
      {isPlaying ? (
        <MediaPauseIcon width={width} height={height} />
      ) : (
        <MediaPlayIcon width={width} height={height} />
      )}
    </button>
  )
}
