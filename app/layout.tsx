import type React from "react"
import type { Metadata } from "next"
import { Outfit, VT323, Press_Start_2P } from "next/font/google"
import "./globals.css"

// Load Outfit font for body text
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
})

// Load VT323 font for headings - a pixel font that's still readable
const vt323 = VT323({
  subsets: ["latin"],
  variable: "--font-vt323",
  weight: "400",
  display: "swap",
})

// Load Press Start 2P for accent text - classic pixel game font
const pressStart2P = Press_Start_2P({
  subsets: ["latin"],
  variable: "--font-press-start",
  weight: "400",
  display: "swap",
})

export const metadata: Metadata = {
  title: "NuTeach - Gamified Learning Management System",
  description:
    "NuTeach is a gamified learning platform that transforms education with interactive flashcards, story-based challenges, and rewarding achievements.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} ${vt323.variable} ${pressStart2P.variable}`}
      >
        {children}
      </body>
    </html>
  )
}
