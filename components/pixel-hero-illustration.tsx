"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { PixelIcon } from "@/components/pixel-icon"

export function PixelHeroIllustration() {
  const [progress, setProgress] = useState(25)
  const [isAnimating, setIsAnimating] = useState(false)
  const [stars, setStars] = useState<
    Array<{ id: number; x: number; y: number; value: number }>
  >([])
  const [nextStarId, setNextStarId] = useState(0)

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progress >= 100 || isAnimating) return

    // Get click position relative to the progress bar
    const rect = e.currentTarget.getBoundingClientRect()
    const x = e.clientX - rect.left

    setIsAnimating(true)

    // Create new star animation
    const newStar = {
      id: nextStarId,
      x: x,
      y: rect.height / 2,
      value: Math.random() > 0.5 ? 5 : 10,
    }

    setNextStarId((prevId) => prevId + 1)
    setStars((prevStars) => [...prevStars, newStar])

    // Increase progress
    setProgress((prev) => Math.min(prev + 10, 100))

    // Reset animation state after animation completes
    setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    // Remove star from array after animation completes
    setTimeout(() => {
      setStars((prevStars) =>
        prevStars.filter((star) => star.id !== newStar.id)
      )
    }, 2000)
  }

  useEffect(() => {
    // Removed timer as it's no longer needed
  }, [])

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 bg-pixel-tan/50 pixel-borders"
      />

      {/* Main learning card - centered and larger */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="relative w-[90%] max-w-[450px]"
      >
        <div className="bg-white pixel-borders p-8">
          <div className="mb-6 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 bg-pixel-orange pixel-borders-light flex items-center justify-center">
                <PixelIcon icon="book" className="h-6 w-6 text-white" />
              </div>
              <span className="font-medium font-pixel text-xl text-pixel-brown">
                Biology Quest
              </span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-1">
                <PixelIcon icon="star" className="h-5 w-5 text-pixel-yellow" />
                <span className="text-sm font-medium font-pixel text-pixel-brown">
                  Level 3
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {/* Interactive progress bar */}
            <div
              className="h-6 w-full bg-pixel-brown/20 pixel-borders-light relative cursor-pointer hover:brightness-105 transition-all"
              onClick={handleProgressClick}
            >
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "steps(10)" }}
                className="h-6 bg-pixel-orange"
              />

              {/* Pulsing indicator to show it's clickable */}
              {progress < 100 && (
                <motion.div
                  className="absolute right-0 top-0 h-6 w-6 bg-pixel-yellow/50"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{
                    duration: 1.5,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "steps(3)",
                  }}
                />
              )}

              {/* Star animations on click */}
              <AnimatePresence>
                {stars.map((star) => (
                  <motion.div
                    key={star.id}
                    className="absolute"
                    initial={{
                      x: star.x - 20,
                      y: star.y - 20,
                      opacity: 0,
                      scale: 0.5,
                    }}
                    animate={{
                      y: -100,
                      opacity: [0, 1, 1, 0],
                      scale: 1,
                    }}
                    exit={{ opacity: 0 }}
                    transition={{
                      y: { duration: 1.5, ease: "easeOut" },
                      opacity: { duration: 1.5, times: [0, 0.1, 0.8, 1] },
                      scale: { duration: 0.3 },
                    }}
                  >
                    <div className="relative">
                      <div className="h-10 w-10 bg-pixel-yellow pixel-borders-light flex items-center justify-center">
                        <PixelIcon
                          icon="star"
                          className="h-5 w-5 text-pixel-brown"
                        />
                      </div>
                      <div className="absolute -top-4 -right-2 bg-pixel-orange pixel-borders-light px-1 py-0.5">
                        <span className="text-xs font-pixel text-white">
                          +{star.value}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <div className="flex justify-between text-sm text-foreground font-pixel">
              <span>Progress: {progress}%</span>
              <span>{Math.round(progress / 5)}/20 Challenges</span>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-4">
            <div className="bg-pixel-tan pixel-borders-light p-4">
              <div className="flex items-center gap-2">
                <PixelIcon
                  icon="trophy"
                  className="h-5 w-5 text-pixel-yellow"
                />
                <span className="text-sm font-medium font-pixel text-pixel-brown">
                  Achievements
                </span>
              </div>
              <p className="mt-2 text-sm text-foreground font-pixel">
                7 Unlocked
              </p>
            </div>
            <div className="bg-pixel-tan pixel-borders-light p-4">
              <div className="flex items-center gap-2">
                <PixelIcon icon="award" className="h-5 w-5 text-pixel-purple" />
                <span className="text-sm font-medium font-pixel text-pixel-brown">
                  Rewards
                </span>
              </div>
              <p className="mt-2 text-sm text-foreground font-pixel">
                3 Available
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
