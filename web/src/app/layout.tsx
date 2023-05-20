import {
  Bai_Jamjuree as BaiJamjuree,
  Roboto_Flex as Roboto,
} from 'next/font/google'
import React from 'react'
import './globals.css'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['200', '300', '400', '500', '600', '900'],
  variable: '--font-roboto',
})

const baiJamjuree = BaiJamjuree({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-bai-jamjuree',
})

export const metadata = {
  title: 'Nlw spacetime',
  description:
    'Uma cápsula do tempo construída utilizando Nextjs, Tailwindcss e Typescript',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${baiJamjuree.variable} bg-gray-900 font-sans text-gray-100`}
      >
        {children}
      </body>
    </html>
  )
}
