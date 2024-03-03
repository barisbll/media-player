import React from 'react'

type MediaPauseIconProps = {
  className?: string
  width?: number
  height?: number
}

export const MediaPauseIcon: React.FC<MediaPauseIconProps> = ({
  className,
  width,
  height,
}) => {
  const defaultSize = 5

  return (
    <svg
      className={className}
      width={`${width || defaultSize}`}
      height={`${height || defaultSize}`}
      viewBox="0 0 9 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="0" y="0" width="3" height="16" fill="#CAE771" />
      <rect x="6" y="0" width="3" height="16" fill="#CAE771" />
    </svg>
  )
}
