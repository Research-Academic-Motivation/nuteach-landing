"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: "orange" | "pink" | "yellow" | "green" | "blue" | "purple"
  delay: number
  controls: any
}

export function FeatureCard({ icon, title, description, color, delay, controls }: FeatureCardProps) {
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

  const getColor = () => {
    switch (color) {
      case "orange":
        return "bg-pixel-orange"
      case "pink":
        return "bg-pixel-pink"
      case "yellow":
        return "bg-pixel-yellow"
      case "green":
        return "bg-pixel-green"
      case "blue":
        return "bg-pixel-blue"
      case "purple":
        return "bg-pixel-purple"
      default:
        return "bg-pixel-orange"
    }
  }

  const getTextColor = () => {
    switch (color) {
      case "yellow":
        return "text-pixel-brown"
      default:
        return "text-white"
    }
  }

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="group relative overflow-hidden bg-pixel-tan pixel-borders p-6"
    >
      <div
        className={cn(
          "flex h-16 w-16 items-center justify-center pixel-borders-light mb-6",
          getColor(),
          getTextColor(),
        )}
      >
        {icon}
      </div>
      <div className="space-y-3">
        <h3 className="text-xl font-bold font-pixel text-pixel-brown">{title}</h3>
        <p className="text-foreground font-outfit">{description}</p>
      </div>
      <motion.div
        className={cn(
          "absolute bottom-0 left-0 h-2 w-0 transition-all duration-300 ease-in-out group-hover:w-full",
          getColor(),
        )}
        initial={{ width: 0 }}
        whileHover={{ width: "100%" }}
      />
    </motion.div>
  )
}
