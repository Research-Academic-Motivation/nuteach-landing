"use client"

import { useEffect, useState } from "react"
import { motion, AnimationControls } from "framer-motion"
import { PixelIcon } from "@/components/pixel-icon"

interface GamificationElementProps {
  title: string
  description: string
  type: "coins" | "progress" | "badges" | "levels" | "extensions" | "boosts"
  controls: AnimationControls
  delay: number
}

export function GamificationElement({
  title,
  description,
  type,
  controls,
  delay,
}: GamificationElementProps) {
  const [hovered, setHovered] = useState(false)
  const [showCoins, setShowCoins] = useState(false)

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

  useEffect(() => {
    if (hovered && type === "coins") {
      setShowCoins(true)
      const timeout = setTimeout(() => {
        setShowCoins(false)
      }, 1000)
      return () => clearTimeout(timeout)
    }
  }, [hovered, type])

  const getIcon = () => {
    switch (type) {
      case "coins":
        return <PixelIcon icon="star" className="h-10 w-10 text-pixel-yellow" />
      case "progress":
        return (
          <PixelIcon
            icon="trending-up"
            className="h-10 w-10 text-pixel-purple"
          />
        )
      case "badges":
        return <PixelIcon icon="award" className="h-10 w-10 text-pixel-blue" />
      case "levels":
        return (
          <PixelIcon icon="crown" className="h-10 w-10 text-pixel-orange" />
        )
      case "extensions":
        return <PixelIcon icon="clock" className="h-10 w-10 text-pixel-green" />
      case "boosts":
        return <PixelIcon icon="zap" className="h-10 w-10 text-pixel-pink" />
      default:
        return <PixelIcon icon="star" className="h-10 w-10 text-pixel-yellow" />
    }
  }

  const getBadgeIcon = () => {
    switch (type) {
      case "coins":
        return "coin"
      case "progress":
        return "chart"
      case "badges":
        return "medal"
      case "levels":
        return "up"
      case "extensions":
        return "time"
      case "boosts":
        return "power"
      default:
        return "star"
    }
  }

  const getBadgeColor = () => {
    switch (type) {
      case "coins":
        return "bg-pixel-yellow"
      case "progress":
        return "bg-pixel-purple"
      case "badges":
        return "bg-pixel-blue"
      case "levels":
        return "bg-pixel-orange"
      case "extensions":
        return "bg-pixel-green"
      case "boosts":
        return "bg-pixel-pink"
      default:
        return "bg-pixel-yellow"
    }
  }

  const renderSpecialContent = () => {
    switch (type) {
      case "progress":
        return (
          <div className="mt-3">
            <div className="h-4 w-full bg-pixel-brown/20 pixel-borders-light">
              <motion.div
                initial={{ width: 0 }}
                animate={hovered ? { width: "75%" } : { width: "30%" }}
                transition={{ duration: 1, ease: "steps(10)" }}
                className="h-4 bg-pixel-purple"
              />
            </div>
          </div>
        )
      case "badges":
        return (
          <div className="mt-3 flex gap-2">
            {[
              { icon: "brain", color: "bg-pixel-blue" },
              { icon: "book", color: "bg-pixel-green" },
              { icon: "trophy", color: "bg-pixel-orange" },
            ].map((badge, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="relative"
              >
                <div
                  className={`h-8 w-8 ${badge.color} pixel-borders-light flex items-center justify-center`}
                >
                  <PixelIcon icon={badge.icon} className="h-4 w-4 text-white" />
                </div>
                <div className="absolute -top-2 -right-2 h-4 w-4 bg-pixel-yellow pixel-borders-light flex items-center justify-center">
                  <span className="text-[8px] font-bold text-pixel-brown font-pixel">
                    +1
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        )
      case "levels":
        return (
          <div className="mt-3">
            <motion.div
              animate={hovered ? { scale: [1, 1.2, 1] } : {}}
              transition={{ duration: 0.5 }}
              className="text-xl font-bold text-pixel-orange font-pixel"
            >
              Level 5
            </motion.div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      animate={controls}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      className="relative bg-white/90 pixel-borders-light p-6"
    >
      {/* Badge in top right corner */}
      <div className="absolute -top-3 -right-3 h-6 w-6 pixel-borders-light flex items-center justify-center z-10">
        <div
          className={`h-6 w-6 ${getBadgeColor()} flex items-center justify-center`}
        >
          <PixelIcon icon={getBadgeIcon()} className="h-3 w-3 text-white" />
        </div>
      </div>

      <div className="flex items-start gap-4">
        <div className="flex-shrink-0">{getIcon()}</div>
        <div>
          <h3 className="font-medium font-pixel text-lg text-pixel-brown">
            {title}
          </h3>
          <p className="text-sm text-foreground font-outfit">{description}</p>
          {renderSpecialContent()}
        </div>
      </div>

      {showCoins && (
        <>
          {[1, 2, 3, 4, 5].map((coin, i) => (
            <motion.div
              key={i}
              initial={{ y: 0, x: 0, opacity: 1 }}
              animate={{
                y: -100 - Math.random() * 50,
                x: (Math.random() - 0.5) * 100,
                opacity: 0,
              }}
              transition={{ duration: 1, ease: "steps(5)" }}
              className="absolute top-1/2 left-1/2 h-8 w-8 bg-pixel-yellow pixel-borders-light flex items-center justify-center z-10"
            >
              <span className="text-xs font-bold text-pixel-brown font-pixel">
                +{Math.floor(Math.random() * 10) + 1}
              </span>
            </motion.div>
          ))}
        </>
      )}
    </motion.div>
  )
}
