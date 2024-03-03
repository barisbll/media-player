import React from 'react'

type MediaPlayIconProps = {
  className?: string
  width?: number
  height?: number
}

export const MediaPlayIcon: React.FC<MediaPlayIconProps> = ({
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
      <path
        d="M2.69999 15.2961H0.830877V0.35437H2.69999V2.22209H4.56911V5.02367H6.43823V6.89139H8.30734V8.75911H6.43823V10.6268H4.56911V13.4284H2.69999V15.2961Z"
        fill="#CAE771"
      />
    </svg>
  )
}
