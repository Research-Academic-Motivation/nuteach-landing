"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="md:hidden">
      <Button variant="ghost" size="icon" onClick={() => setIsOpen(!isOpen)}>
        <Menu className="h-5 w-5" />
        <span className="sr-only">Toggle menu</span>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background">
          <div className="flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <Image
                src="/placeholder.svg?height=32&width=32"
                alt="StreamLine Logo"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="text-xl font-bold">StreamLine</span>
            </div>
            <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="grid gap-2 p-4">
            <Link
              href="#features"
              className="flex items-center py-2 text-lg font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="flex items-center py-2 text-lg font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="flex items-center py-2 text-lg font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="flex items-center py-2 text-lg font-medium hover:underline"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button className="mt-4" onClick={() => setIsOpen(false)}>
              Get Started
            </Button>
          </nav>
        </div>
      )}
    </div>
  )
}
