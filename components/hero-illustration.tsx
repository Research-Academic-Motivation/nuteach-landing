"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Award, BookOpen, Crown, Star, Trophy } from "lucide-react"

export function HeroIllustration() {
  const [animationTriggered, setAnimationTriggered] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimationTriggered(true)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="relative w-full h-full">
      {/* Background elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="absolute inset-0 bg-gradient-to-br from-purple-200/50 via-pink-200/50 to-orange-200/50 dark:from-purple-900/30 dark:via-pink-900/30 dark:to-orange-900/30 rounded-3xl"
      />

      {/* Floating elements */}
      <div className="absolute inset-0">
        {/* Coins */}
        {[1, 2, 3, 4, 5].map((i) => (
          <motion.div
            key={`coin-${i}`}
            initial={{
              x: Math.random() * 300 - 150,
              y: Math.random() * 300 - 150,
              opacity: 0,
              scale: 0,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: animationTriggered ? [null, -20, 0] : 0,
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.5 + i * 0.1 },
              scale: { duration: 0.5, delay: 0.5 + i * 0.1 },
              y: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1 + i * 0.2,
              },
            }}
            className="absolute h-8 w-8 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg"
            style={{
              left: `${20 + i * 15}%`,
              top: `${10 + (i % 3) * 20}%`,
            }}
          >
            <span className="text-xs font-bold text-yellow-800">+{i * 5}</span>
          </motion.div>
        ))}

        {/* Badges */}
        {[1, 2, 3].map((i) => (
          <motion.div
            key={`badge-${i}`}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: animationTriggered ? [0, 5, -5, 0] : 0,
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.8 + i * 0.2 },
              scale: { duration: 0.5, delay: 0.8 + i * 0.2 },
              rotate: {
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
                ease: "easeInOut",
                delay: 1.5 + i * 0.3,
              },
            }}
            className="absolute flex h-12 w-12 items-center justify-center rounded-full shadow-lg"
            style={{
              left: `${60 + (i % 2) * 20}%`,
              top: `${20 + i * 25}%`,
              background:
                i === 1
                  ? "linear-gradient(to bottom right, #8b5cf6, #ec4899)"
                  : i === 2
                    ? "linear-gradient(to bottom right, #ec4899, #f59e0b)"
                    : "linear-gradient(to bottom right, #10b981, #3b82f6)",
            }}
          >
            {i === 1 ? (
              <Award className="h-6 w-6 text-white" />
            ) : i === 2 ? (
              <Crown className="h-6 w-6 text-white" />
            ) : (
              <Star className="h-6 w-6 text-white" />
            )}
          </motion.div>
        ))}
      </div>

      {/* Main learning card */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[400px]"
      >
        <div className="rounded-xl bg-white/90 backdrop-blur-sm p-6 shadow-xl border border-purple-100 dark:bg-gray-800/90 dark:border-purple-900/30">
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                <BookOpen className="h-5 w-5 text-white" />
              </div>
              <span className="font-medium font-outfit">Biology Quest</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="flex items-center gap-0.5">
                <Star className="h-4 w-4 text-yellow-500" fill="currentColor" />
                <span className="text-xs font-medium font-outfit">Level 3</span>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="h-3 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "65%" }}
                transition={{ delay: 1, duration: 1.5, ease: "easeOut" }}
                className="h-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
              />
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 font-outfit">
              <span>Progress: 65%</span>
              <span>13/20 Challenges</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-3">
            <div className="rounded-md border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800/50">
              <div className="flex items-center gap-2">
                <Trophy className="h-4 w-4 text-yellow-500" />
                <span className="text-xs font-medium font-outfit">Achievements</span>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 font-outfit">7 Unlocked</p>
            </div>
            <div className="rounded-md border border-gray-200 bg-gray-50 p-3 dark:border-gray-700 dark:bg-gray-800/50">
              <div className="flex items-center gap-2">
                <Award className="h-4 w-4 text-purple-500" />
                <span className="text-xs font-medium font-outfit">Rewards</span>
              </div>
              <p className="mt-1 text-xs text-gray-500 dark:text-gray-400 font-outfit">3 Available</p>
            </div>
          </div>
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 10 }}
            className="absolute -top-3 -right-3 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white shadow-lg"
          >
            <Crown className="h-6 w-6" />
          </motion.div>
        </div>
      </motion.div>

      {/* Flashcards */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.5 }}
        className="absolute bottom-10 left-10 w-[180px] h-[120px] rotate-[-8deg]"
      >
        <div className="absolute inset-0 rounded-lg bg-white shadow-md border border-gray-200 dark:bg-gray-800 dark:border-gray-700 p-4 flex items-center justify-center">
          <p className="text-center font-outfit text-sm">What is the powerhouse of the cell?</p>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-5 right-10 w-[180px] h-[120px] rotate-[8deg]"
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-green-100 to-green-200 dark:from-green-900/30 dark:to-green-800/30 shadow-md border border-green-200 dark:border-green-800/50 p-4 flex items-center justify-center">
          <p className="text-center font-outfit text-sm font-medium text-green-800 dark:text-green-300">Mitochondria</p>
        </div>
      </motion.div>

      {/* Status indicator */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-medium shadow-md dark:bg-gray-800/90 font-outfit"
      >
        <div className="h-2 w-2 rounded-full bg-green-500" />
        Learning in progress
      </motion.div>
    </div>
  )
}
