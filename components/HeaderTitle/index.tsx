import { cn } from '@/utility/cn'
import { spaceGrotesk } from '@/assets/fonts'
import { ReactNode } from 'react'

type HeaderTitleProps = {
  isColorful: boolean
  className?: string
  children: ReactNode
}

export const HeaderTitle = ({
  isColorful,
  className,
  children,
}: HeaderTitleProps) => {
  return (
    <h1
      className={cn(
        'text-5xl font-bold text-lightGray',
        isColorful && 'background-gradient',
        spaceGrotesk.className,
        className
      )}
    >
      {children}
    </h1>
  )
}
