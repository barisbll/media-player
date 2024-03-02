import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/utility/cn'
import { exo } from '@/assets/fonts'

export const metadata: Metadata = {
  title: 'Media Player',
  description: 'A Media Player App',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn(exo.className, 'flex flex-col')}>{children}</body>
    </html>
  )
}
