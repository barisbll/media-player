import React from 'react'

type CartIconProps = {
  className?: string
  width?: number
  height?: number
}

export const CartIcon: React.FC<CartIconProps> = ({
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
        d="M5.69728 19C5.17502 19 4.72811 18.8141 4.35652 18.4424C3.98429 18.07 3.79818 17.6225 3.79818 17.1C3.79818 16.5775 3.98429 16.13 4.35652 15.7576C4.72811 15.3859 5.17502 15.2 5.69728 15.2C6.21953 15.2 6.66644 15.3859 7.03803 15.7576C7.41026 16.13 7.59637 16.5775 7.59637 17.1C7.59637 17.6225 7.41026 18.07 7.03803 18.4424C6.66644 18.8141 6.21953 19 5.69728 19ZM15.1927 19C14.6705 19 14.2236 18.8141 13.852 18.4424C13.4798 18.07 13.2936 17.6225 13.2936 17.1C13.2936 16.5775 13.4798 16.13 13.852 15.7576C14.2236 15.3859 14.6705 15.2 15.1927 15.2C15.715 15.2 16.1622 15.3859 16.5344 15.7576C16.906 16.13 17.0918 16.5775 17.0918 17.1C17.0918 17.6225 16.906 18.07 16.5344 18.4424C16.1622 18.8141 15.715 19 15.1927 19ZM9.78032 6.935C9.60624 6.76083 9.5192 6.53917 9.5192 6.27C9.5192 6.00083 9.60624 5.77917 9.78032 5.605L10.6112 4.75H7.59637C7.32733 4.75 7.10197 4.65912 6.92029 4.47735C6.73798 4.29495 6.64682 4.06917 6.64682 3.8C6.64682 3.53083 6.73798 3.30505 6.92029 3.12265C7.10197 2.94088 7.32733 2.85 7.59637 2.85H10.6112L9.75658 1.995C9.56667 1.805 9.47583 1.58333 9.48406 1.33C9.49166 1.07667 9.59041 0.855 9.78032 0.665C9.97023 0.490833 10.1918 0.399633 10.445 0.3914C10.6982 0.3838 10.9198 0.475 11.1097 0.665L13.5785 3.135C13.6735 3.23 13.7409 3.33292 13.7808 3.44375C13.82 3.55458 13.8396 3.67333 13.8396 3.8C13.8396 3.92667 13.82 4.04542 13.7808 4.15625C13.7409 4.26708 13.6735 4.37 13.5785 4.465L11.1097 6.935C10.9356 7.10917 10.7182 7.20005 10.4573 7.20765C10.1959 7.21588 9.97023 7.125 9.78032 6.935ZM5.69728 14.25C4.96929 14.25 4.4195 13.9371 4.04791 13.3114C3.67569 12.6863 3.67158 12.065 4.03557 11.4475L5.31746 9.12L1.89909 1.9H0.949546C0.680508 1.9 0.455149 1.8088 0.273469 1.6264C0.0911564 1.44463 0 1.21917 0 0.95C0 0.680833 0.0911564 0.45505 0.273469 0.27265C0.455149 0.0908833 0.680508 0 0.949546 0H2.49256C2.66664 0 2.83281 0.0475001 2.99107 0.1425C3.14933 0.2375 3.26802 0.372083 3.34715 0.54625L7.16907 8.55H13.8159L17.2105 2.39875C17.2896 2.24042 17.4045 2.11755 17.5552 2.03015C17.7052 1.94338 17.8673 1.9 18.0414 1.9C18.4054 1.9 18.6785 2.05833 18.8608 2.375C19.0425 2.69167 19.0463 3.00833 18.8722 3.325L15.4776 9.4525C15.3035 9.76917 15.074 10.0146 14.7892 10.1888C14.5043 10.3629 14.1799 10.45 13.8159 10.45H6.74178L5.69728 12.35H16.1423C16.4113 12.35 16.6367 12.4409 16.8184 12.6226C17.0007 12.805 17.0918 13.0308 17.0918 13.3C17.0918 13.5692 17.0007 13.7946 16.8184 13.9764C16.6367 14.1588 16.4113 14.25 16.1423 14.25H5.69728Z"
        fill="#443B3B"
      />
    </svg>
  )
}