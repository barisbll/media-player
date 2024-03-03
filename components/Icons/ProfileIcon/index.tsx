import React from 'react'

type ProfileIconProps = {
  className?: string
  width?: number
  height?: number
}

export const ProfileIcon: React.FC<ProfileIconProps> = ({
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
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.5 9.5C12.1244 9.5 14.25 7.37437 14.25 4.75C14.25 2.12562 12.1244 0 9.5 0C6.87563 0 4.75 2.12562 4.75 4.75C4.75 7.37437 6.87563 9.5 9.5 9.5ZM9.5 11.875C6.32937 11.875 0 13.4662 0 16.625V19H19V16.625C19 13.4662 12.6706 11.875 9.5 11.875Z"
        fill="#443B3B"
      />
    </svg>
  )
}
