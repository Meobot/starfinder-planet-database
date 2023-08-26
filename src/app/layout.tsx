import './globals.css'
import type { Metadata } from 'next'
import { Karla } from 'next/font/google'

const karla = Karla({
	subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: 'Planetfinder - A Starfinder Planet Finder',
  description: 'A Starfinder Planet Finder built with Next.js and Firebase',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={karla.className}>{children}</body>
    </html>
  )
}
