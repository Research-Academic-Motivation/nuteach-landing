"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { PixelIcon } from "@/components/pixel-icon"

interface AboutUsProps {
  controls: any
}

export function AboutUsSection({ controls }: AboutUsProps) {
  const teamMembers = [
    {
      name: "Dr. Alex Chen",
      role: "Co-Founder & Education Lead",
      bio: "Former professor with 15+ years of experience in educational technology and curriculum development.",
      image: "/placeholder.svg?height=200&width=200",
      delay: 0.1,
    },
    {
      name: "Maya Patel",
      role: "Co-Founder & Tech Lead",
      bio: "Game developer turned EdTech innovator with a passion for creating engaging learning experiences.",
      image: "/placeholder.svg?height=200&width=200",
      delay: 0.2,
    },
    {
      name: "Jordan Taylor",
      role: "Co-Founder & Design Lead",
      bio: "UX/UI specialist focused on creating intuitive and accessible educational interfaces for all learners.",
      image: "/placeholder.svg?height=200&width=200",
      delay: 0.3,
    },
  ]

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  }

  return (
    <div className="grid gap-10 md:grid-cols-3">
      {teamMembers.map((member, index) => (
        <motion.div
          key={index}
          variants={itemVariants}
          initial="hidden"
          animate={controls}
          custom={member.delay}
          className="flex flex-col items-center"
        >
          <div className="relative mb-6">
            <div className="w-48 h-48 bg-pixel-tan pixel-borders overflow-hidden">
              <Image
                src={member.image || "/placeholder.svg"}
                alt={member.name}
                width={200}
                height={200}
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 h-10 w-10 bg-pixel-orange pixel-borders-light flex items-center justify-center">
              <PixelIcon
                icon={index === 0 ? "book" : index === 1 ? "code" : "palette"}
                className="h-6 w-6 text-white"
              />
            </div>
          </div>
          <h3 className="text-xl font-bold font-pixel text-pixel-brown mb-2">{member.name}</h3>
          <div className="bg-pixel-yellow pixel-borders-light px-3 py-1 mb-3">
            <span className="text-sm font-pixel text-pixel-brown">{member.role}</span>
          </div>
          <p className="text-center text-foreground font-outfit">{member.bio}</p>
        </motion.div>
      ))}
    </div>
  )
}
