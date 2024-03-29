import type { Metadata } from 'next'
import './globals.css'
import { cn } from '@/utility/cn'
import { exo } from '@/assets/fonts'
import { AdvertBar } from '@/sections/AdvertBar'
import { NavBar } from '@/sections/NavBar'
import { Footer } from '@/sections/Footer'

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
      <body className={cn(exo.className, 'flex flex-col')}>
        <AdvertBar />
        <NavBar />

        {children}

        <Footer />
      </body>
    </html>
  )
}
