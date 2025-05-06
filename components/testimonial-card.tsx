"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { PixelIcon } from "@/components/pixel-icon"

interface TestimonialCardProps {
  quote: string
  name: string
  role: string
  image: string
  controls: any
  delay: number
}

export function TestimonialCard({ quote, name, role, image, controls, delay }: TestimonialCardProps) {
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay,
      },
    },
  }

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="flex flex-col justify-between bg-pixel-tan pixel-borders p-6"
    >
      <div className="space-y-4">
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <PixelIcon key={star} icon="star" className="h-5 w-5 text-pixel-yellow" />
          ))}
        </div>
        <p className="text-foreground font-outfit">"{quote}"</p>
      </div>
      <div className="mt-6 flex items-center space-x-4">
        <div className="h-12 w-12 overflow-hidden pixel-borders-light bg-pixel-orange">
          <Image src={image || "/placeholder.svg"} width={48} height={48} alt={name} className="pixelated" />
        </div>
        <div>
          <p className="text-sm font-medium font-pixel text-pixel-brown">{name}</p>
          <p className="text-sm text-foreground font-outfit">{role}</p>
        </div>
      </div>
    </motion.div>
  )
}
