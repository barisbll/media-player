import React from 'react'
import { cn } from '@/utility/cn'
import { inter } from '@/assets/fonts'

type ButtonProps = {
  children: React.ReactNode
  type: 'primary' | 'secondary' | 'tertiary' | 'rounded' | 'link'
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
        'bg-gray-005 hover:bg-darkGray font-semibold text-sm text-white px-4 py-3 border border-primaryBorderColor rounded-xl tracking-wider',
        isActive ? 'bg-darkGray' : 'bg-gray-005'
      )
      break
    case 'tertiary':
      typeStyles = cn(
        'bg-lighterGray hover:bg-lightGray text-blackText font-medium text-xs py-4 px-8 border border-brownBorder rounded-xl tracking-wider',
        isActive ? 'bg-lighterGray' : 'bg-lighterGray'
      )
      break
    case 'rounded':
      typeStyles = cn(
        'bg-mediumGray hover:bg-activeWhite text-blackText font-semibold text-sm p-3 border border-primaryBorderColor rounded-full',
        isActive ? 'bg-activeWhite' : 'bg-mediumGray'
      )
      break
    case 'link':
      typeStyles = cn(
        'leading tracking-wide text-linkColor font-semibold text-sm border-b-2 border-linkColor ',
        inter.className
      )
      break
  }

  return <button className={cn(typeStyles, className)}>{children}</button>
}
