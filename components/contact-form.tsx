"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { PixelIcon } from "@/components/pixel-icon"

interface ContactFormProps {
  controls: any
}

export function ContactForm({ controls }: ContactFormProps) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)

      // Reset form after showing success message
      setTimeout(() => {
        setFormState({ name: "", email: "", message: "" })
        setIsSubmitted(false)
      }, 3000)
    }, 1500)
  }

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

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  }

  return (
    <motion.div variants={itemVariants} initial="hidden" animate={controls} className="bg-pixel-tan pixel-borders p-8">
      {isSubmitted ? (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center justify-center py-8 text-center"
        >
          <div className="mb-4 flex h-16 w-16 items-center justify-center bg-pixel-green pixel-borders-light">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-xl font-bold font-pixel text-pixel-brown">Thank You!</h3>
          <p className="mt-2 text-foreground font-outfit">
            Your message has been sent successfully. We'll get back to you soon.
          </p>
        </motion.div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium font-pixel text-pixel-brown">
              Name
            </label>
            <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" whileHover="focus">
              <Input
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                placeholder="Your name"
                required
                className="font-outfit bg-white pixel-borders-light rounded-none"
              />
            </motion.div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium font-pixel text-pixel-brown">
              Email
            </label>
            <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" whileHover="focus">
              <Input
                id="email"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                placeholder="your.email@example.com"
                required
                className="font-outfit bg-white pixel-borders-light rounded-none"
              />
            </motion.div>
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium font-pixel text-pixel-brown">
              Message
            </label>
            <motion.div variants={inputVariants} whileFocus="focus" whileTap="focus" whileHover="focus">
              <Textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                placeholder="I'm interested in implementing NuTeach at our institution..."
                required
                className="min-h-[120px] font-outfit bg-white pixel-borders-light rounded-none"
              />
            </motion.div>
          </div>

          <div className="flex items-center justify-between">
            <p className="text-xs text-foreground font-outfit">
              Or email us directly at{" "}
              <a href="mailto:nuteach.ubc@gmail.com" className="text-pixel-orange hover:underline">
                nuteach.ubc@gmail.com
              </a>
            </p>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-pixel-orange hover:bg-pixel-orange-dark text-white font-pixel pixel-button pixel-borders-light"
              >
                {isSubmitting ? (
                  <div className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </div>
                ) : (
                  <div className="flex items-center">
                    <PixelIcon icon="send" className="mr-2 h-4 w-4" /> Send Message
                  </div>
                )}
              </Button>
            </motion.div>
          </div>
        </form>
      )}
    </motion.div>
  )
}
