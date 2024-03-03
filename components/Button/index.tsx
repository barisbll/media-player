import React from 'react'
import { cn } from '@/utility/cn'

type ButtonProps = {
  children: React.ReactNode
  type: 'primary' | 'secondary' | 'tertiary' | 'rounded'
  className?: string
  isActive?: boolean
}

export const Button: React.FC<ButtonProps> = ({
  children,
  type,
  className,
  isActive,
}) => {
  let typeStyles = ''

  switch (type) {
    case 'primary':
      typeStyles = cn(
        'bg-mediumGray hover:bg-activeWhite text-blackText font-semibold text-sm px-4 py-2 border border-primaryBorderColor rounded-sm tracking-wider',
        isActive ? 'bg-activeWhite' : 'bg-mediumGray'
      )
      break
    case 'secondary':
      typeStyles = cn(
        'bg-gray-005 hover:bg-darkGray font-semibold text-sm text-white px-6 py-4 border border-primaryBorderColor rounded-xl tracking-wider',
        isActive ? 'bg-darkGray' : 'bg-gray-005'
      )
      break
    case 'tertiary':
      typeStyles =
        'bg-white hover:bg-gray-100 text-black border border-gray-400'
      break
    case 'rounded':
      typeStyles = cn(
        'bg-mediumGray hover:bg-activeWhite text-blackText font-semibold text-sm p-3 border border-primaryBorderColor rounded-full',
        isActive ? 'bg-activeWhite' : 'bg-mediumGray'
      )
      break
  }

  return <button className={cn(typeStyles, className)}>{children}</button>
}
