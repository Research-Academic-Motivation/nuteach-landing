"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { motion, useAnimation, useInView } from "framer-motion"
import { Button } from "@/components/ui/button"
import { GraduationCap, Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { FeatureCard } from "@/components/feature-card"
import { TestimonialCard } from "@/components/testimonial-card"
import { GamificationElement } from "@/components/gamification-element"
import { ContactForm } from "@/components/contact-form"
import { PixelHeroIllustration } from "@/components/pixel-hero-illustration"
import { PixelIcon } from "@/components/pixel-icon"
import { AboutUsSection } from "@/components/about-us-section"

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Refs for scroll animations
  const heroRef = useRef(null)
  const featuresRef = useRef(null)
  const gamificationRef = useRef(null)
  const testimonialsRef = useRef(null)
  const contactRef = useRef(null)
  const aboutUsRef = useRef(null)

  // Check if sections are in view
  const heroInView = useInView(heroRef, { once: true, amount: 0.3 })
  const featuresInView = useInView(featuresRef, { once: true, amount: 0.3 })
  const gamificationInView = useInView(gamificationRef, {
    once: true,
    amount: 0.3,
  })
  const testimonialsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.3,
  })
  const contactInView = useInView(contactRef, { once: true, amount: 0.5 })
  const aboutUsInView = useInView(aboutUsRef, { once: true, amount: 0.3 })

  // Animation controls
  const heroControls = useAnimation()
  const featuresControls = useAnimation()
  const gamificationControls = useAnimation()
  const testimonialsControls = useAnimation()
  const contactControls = useAnimation()
  const aboutUsControls = useAnimation()

  // Trigger animations when sections come into view
  useEffect(() => {
    if (heroInView) {
      heroControls.start("visible")
    }
    if (featuresInView) {
      featuresControls.start("visible")
    }
    if (gamificationInView) {
      gamificationControls.start("visible")
    }
    if (testimonialsInView) {
      testimonialsControls.start("visible")
    }
    if (contactInView) {
      contactControls.start("visible")
    }
    if (aboutUsInView) {
      aboutUsControls.start("visible")
    }
  }, [
    heroInView,
    featuresInView,
    gamificationInView,
    testimonialsInView,
    contactInView,
    aboutUsInView,
    heroControls,
    featuresControls,
    gamificationControls,
    testimonialsControls,
    contactControls,
    aboutUsControls,
  ])

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
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

  return (
    <div className="min-h-screen font-outfit bg-[url('/pixel-bg.png')] bg-repeat">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b-4 border-pixel-brown bg-pixel-tan/90 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative h-10 w-10 overflow-hidden bg-pixel-orange pixel-borders-light">
              <GraduationCap className="absolute inset-0 m-auto h-6 w-6 text-white" />
            </div>
            <span className="text-xl font-bold font-pixel-accent text-pixel-brown">
              NuTeach
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="#features"
              className="text-sm font-pixel hover:text-pixel-orange dark:hover:text-pixel-orange transition-colors"
            >
              Features
            </Link>
            <Link
              href="#gamification"
              className="text-sm font-pixel hover:text-pixel-orange dark:hover:text-pixel-orange transition-colors"
            >
              Gamification
            </Link>
            <Link
              href="#testimonials"
              className="text-sm font-pixel hover:text-pixel-orange dark:hover:text-pixel-orange transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#about-us"
              className="text-sm font-pixel hover:text-pixel-orange dark:hover:text-pixel-orange transition-colors"
            >
              About Us
            </Link>
            <div className="relative overflow-hidden">
              <Button
                variant="default"
                className="bg-pixel-orange hover:bg-pixel-orange-dark text-white font-pixel pixel-button pixel-borders-light"
                onClick={() => {
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Request Access
              </Button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t-4 border-pixel-brown"
          >
            <nav className="container py-4 flex flex-col gap-2 bg-pixel-tan">
              <Link
                href="#features"
                className="text-sm font-pixel p-2 hover:bg-pixel-orange/20 rounded-none transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#gamification"
                className="text-sm font-pixel p-2 hover:bg-pixel-orange/20 rounded-none transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Gamification
              </Link>
              <Link
                href="#testimonials"
                className="text-sm font-pixel p-2 hover:bg-pixel-orange/20 rounded-none transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link
                href="#about-us"
                className="text-sm font-pixel p-2 hover:bg-pixel-orange/20 rounded-none transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About Us
              </Link>
              <Button
                variant="default"
                className="mt-2 bg-pixel-orange hover:bg-pixel-orange-dark text-white font-pixel pixel-button pixel-borders-light"
                onClick={() => {
                  setIsMenuOpen(false)
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Request Access
              </Button>
            </nav>
          </motion.div>
        )}
      </header>

      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="w-full py-12 md:py-24 lg:py-32 overflow-hidden"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={heroControls}
              className="grid gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_600px]"
            >
              <motion.div
                variants={itemVariants}
                className="flex flex-col justify-center space-y-6"
              >
                <div className="space-y-4">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 10,
                      delay: 0.2,
                    }}
                    className="inline-flex items-center bg-pixel-yellow pixel-borders-light px-3 py-1"
                  >
                    <PixelIcon
                      icon="star"
                      className="mr-1 h-4 w-4 text-pixel-brown"
                    />
                    <span className="text-sm font-pixel text-pixel-brown">
                      Learning Reimagined
                    </span>
                  </motion.div>
                  <motion.h1
                    variants={itemVariants}
                    className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none font-pixel text-pixel-brown"
                  >
                    Learn, Play, Achieve
                  </motion.h1>
                  <motion.p
                    variants={itemVariants}
                    className="max-w-[600px] text-foreground md:text-xl font-outfit"
                  >
                    Transform education with NuTeach&apos;s gamified learning
                    platform. Engage students with interactive flashcards,
                    story-based challenges, and rewarding achievements.
                  </motion.p>
                </div>

                <motion.div
                  variants={itemVariants}
                  className="p-4 bg-pixel-tan pixel-borders-light"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 text-pixel-purple">
                      <PixelIcon icon="flask" className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold font-pixel text-pixel-brown">
                        Private Beta
                      </h3>
                      <p className="text-sm text-foreground">
                        NuTeach is currently in private beta at the University
                        of British Columbia and is available for on-premise
                        installations upon request.
                      </p>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  variants={itemVariants}
                  className="flex items-center gap-4 text-sm text-foreground"
                >
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className={cn(
                          "h-8 w-8 pixel-borders-light",
                          i === 1 && "bg-pixel-purple",
                          i === 2 && "bg-pixel-pink",
                          i === 3 && "bg-pixel-orange",
                          i === 4 && "bg-pixel-green"
                        )}
                      />
                    ))}
                  </div>
                  <span className="font-pixel">
                    Trusted by educators & students at UBC
                  </span>
                </motion.div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative mx-auto w-full max-w-[500px] aspect-square"
              >
                <PixelHeroIllustration />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          ref={featuresRef}
          className="w-full py-12 md:py-24 lg:py-32 bg-[url('/pixel-bg-alt.png')] bg-repeat"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={featuresControls}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="inline-flex items-center bg-pixel-yellow pixel-borders-light px-3 py-1">
                  <PixelIcon
                    icon="flask"
                    className="mr-1 h-4 w-4 text-pixel-brown"
                  />
                  <span className="text-sm font-pixel text-pixel-brown">
                    Key Features
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-pixel text-pixel-brown">
                  How NuTeach Works
                </h2>
                <p className="mx-auto max-w-[700px] text-foreground md:text-lg font-outfit">
                  Our platform integrates with your course outline to create a
                  personalized learning journey with actionable tasks and
                  rewarding achievements.
                </p>
              </motion.div>
            </motion.div>

            {/* Interactive Feature Cards */}
            <div className="mt-16 relative">
              <div className="relative grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                <FeatureCard
                  icon={<PixelIcon icon="book" className="h-12 w-12" />}
                  title="Course Integration"
                  description="NuTeach analyzes your course outline and syllabus to create a customized learning path."
                  color="orange"
                  delay={0.1}
                  controls={featuresControls}
                />
                <FeatureCard
                  icon={<PixelIcon icon="list" className="h-12 w-12" />}
                  title="Task Generation"
                  description="Automatically divides coursework into manageable, actionable tasks with clear deadlines."
                  color="pink"
                  delay={0.2}
                  controls={featuresControls}
                />
                <FeatureCard
                  icon={<PixelIcon icon="trophy" className="h-12 w-12" />}
                  title="Reward System"
                  description="Earn coins and badges that can be redeemed for academic rewards like deadline extensions."
                  color="yellow"
                  delay={0.3}
                  controls={featuresControls}
                />
                <FeatureCard
                  icon={<PixelIcon icon="chart" className="h-12 w-12" />}
                  title="Progress Tracking"
                  description="Monitor your learning journey with detailed analytics and visual progress indicators."
                  color="green"
                  delay={0.4}
                  controls={featuresControls}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gamification Showcase */}
        <section
          id="gamification"
          ref={gamificationRef}
          className="w-full py-12 md:py-24 lg:py-32 bg-[url('/pixel-bg.png')] bg-repeat overflow-hidden"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={gamificationControls}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="inline-flex items-center bg-pixel-yellow pixel-borders-light px-3 py-1">
                  <PixelIcon
                    icon="graduation-cap"
                    className="mr-1 h-4 w-4 text-pixel-brown"
                  />
                  <span className="text-sm font-pixel text-pixel-brown">
                    Gamification
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-pixel text-pixel-brown">
                  Learning That Feels Like Play
                </h2>
                <p className="mx-auto max-w-[700px] text-foreground md:text-lg font-outfit">
                  Experience how NuTeach transforms traditional learning into an
                  engaging game-like adventure.
                </p>
              </motion.div>
            </motion.div>

            <div className="relative mt-16">
              <div className="relative mx-auto max-w-5xl bg-pixel-tan pixel-borders p-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                  <GamificationElement
                    title="Coin Rewards"
                    description="Earn coins for completing tasks and challenges"
                    type="coins"
                    controls={gamificationControls}
                    delay={0.1}
                  />
                  <GamificationElement
                    title="Progress Tracking"
                    description="Watch your progress bar fill as you advance"
                    type="progress"
                    controls={gamificationControls}
                    delay={0.2}
                  />
                  <GamificationElement
                    title="Achievement Badges"
                    description="Collect badges for mastering different skills"
                    type="badges"
                    controls={gamificationControls}
                    delay={0.3}
                  />
                  <GamificationElement
                    title="Level Up System"
                    description="Advance through levels as you gain knowledge"
                    type="levels"
                    controls={gamificationControls}
                    delay={0.4}
                  />
                  <GamificationElement
                    title="Deadline Extensions"
                    description="Earn rewards that give you more time on assignments"
                    type="extensions"
                    controls={gamificationControls}
                    delay={0.5}
                  />
                  <GamificationElement
                    title="Grade Boosts"
                    description="Unlock grade boosters through consistent performance"
                    type="boosts"
                    controls={gamificationControls}
                    delay={0.6}
                  />
                </div>

                {/* Floating elements */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="absolute -top-8 -right-8 hidden md:block"
                >
                  <div className="relative h-24 w-24">
                    <motion.div
                      animate={{
                        y: [0, -10, 0],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                        ease: "steps(3)",
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="h-20 w-20 bg-pixel-yellow pixel-borders-light flex items-center justify-center">
                        <PixelIcon
                          icon="trophy"
                          className="h-10 w-10 text-pixel-brown"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4, duration: 0.5 }}
                  className="absolute -bottom-8 -left-8 hidden md:block"
                >
                  <div className="relative h-24 w-24">
                    <motion.div
                      animate={{
                        y: [0, -8, 0],
                      }}
                      transition={{
                        repeat: Number.POSITIVE_INFINITY,
                        duration: 2,
                        ease: "steps(3)",
                      }}
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      <div className="h-20 w-20 bg-pixel-purple pixel-borders-light flex items-center justify-center">
                        <PixelIcon
                          icon="star"
                          className="h-10 w-10 text-white"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section
          id="testimonials"
          ref={testimonialsRef}
          className="w-full py-12 md:py-24 lg:py-32 bg-[url('/pixel-bg-alt.png')] bg-repeat"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={testimonialsControls}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="inline-flex items-center bg-pixel-yellow pixel-borders-light px-3 py-1">
                  <PixelIcon
                    icon="star"
                    className="mr-1 h-4 w-4 text-pixel-brown"
                  />
                  <span className="text-sm font-pixel text-pixel-brown">
                    Testimonials
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-pixel text-pixel-brown">
                  What Our Users Say
                </h2>
                <p className="mx-auto max-w-[700px] text-foreground md:text-lg font-outfit">
                  Hear from students and educators who have transformed their
                  learning experience with NuTeach.
                </p>
              </motion.div>
            </motion.div>

            <div className="relative mt-16">
              <div className="relative mx-auto grid max-w-5xl gap-8 md:grid-cols-2 lg:grid-cols-3">
                <TestimonialCard
                  quote="NuTeach has completely transformed how my students engage with course material. The gamification elements have increased participation by over 70%!"
                  name="Dr. Sarah Johnson"
                  role="Professor of Biology, UBC"
                  image="/placeholder.svg?height=80&width=80"
                  controls={testimonialsControls}
                  delay={0.1}
                />
                <TestimonialCard
                  quote="I used to struggle with staying motivated to study. With NuTeach, I'm actually excited to log in and continue my learning journey every day."
                  name="Michael Chen"
                  role="Computer Science Student, UBC"
                  image="/placeholder.svg?height=80&width=80"
                  controls={testimonialsControls}
                  delay={0.2}
                />
                <TestimonialCard
                  quote="The reward system is brilliant! Being able to earn deadline extensions has helped me manage my workload while still maintaining high grades."
                  name="Emma Rodriguez"
                  role="Psychology Major, UBC"
                  image="/placeholder.svg?height=80&width=80"
                  controls={testimonialsControls}
                  delay={0.3}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          ref={contactRef}
          className="w-full py-12 md:py-24 lg:py-32 bg-[url('/pixel-bg.png')] bg-repeat"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={contactControls}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="inline-flex items-center bg-pixel-yellow pixel-borders-light px-3 py-1">
                  <PixelIcon
                    icon="mail"
                    className="mr-1 h-4 w-4 text-pixel-brown"
                  />
                  <span className="text-sm font-pixel text-pixel-brown">
                    Get in Touch
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-pixel text-pixel-brown">
                  Request Access
                </h2>
                <p className="mx-auto max-w-[700px] text-foreground md:text-lg font-outfit">
                  Interested in implementing NuTeach at your institution?
                  Contact us to learn more about on-premise installations.
                </p>
              </motion.div>
            </motion.div>

            <div className="mx-auto mt-12 max-w-md">
              <ContactForm controls={contactControls} />
            </div>
          </div>
        </section>

        {/* About Us Section */}
        <section
          id="about-us"
          ref={aboutUsRef}
          className="w-full py-12 md:py-24 lg:py-32 bg-[url('/pixel-bg-alt.png')] bg-repeat"
        >
          <div className="container px-4 md:px-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate={aboutUsControls}
              className="flex flex-col items-center justify-center space-y-4 text-center"
            >
              <motion.div variants={itemVariants} className="space-y-2">
                <div className="inline-flex items-center bg-pixel-yellow pixel-borders-light px-3 py-1">
                  <PixelIcon
                    icon="users"
                    className="mr-1 h-4 w-4 text-pixel-brown"
                  />
                  <span className="text-sm font-pixel text-pixel-brown">
                    About Us
                  </span>
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight font-pixel text-pixel-brown">
                  Meet Our Team
                </h2>
                <p className="mx-auto max-w-[700px] text-foreground md:text-lg font-outfit">
                  The passionate educators and developers behind NuTeach who are
                  revolutionizing the learning experience.
                </p>
              </motion.div>
            </motion.div>

            <div className="mx-auto mt-16">
              <AboutUsSection controls={aboutUsControls} />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t-4 border-pixel-brown bg-pixel-tan">
        <div className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <div className="flex items-center gap-2">
              <div className="relative h-8 w-8 overflow-hidden bg-pixel-orange pixel-borders-light">
                <GraduationCap className="absolute inset-0 m-auto h-5 w-5 text-white" />
              </div>
              <span className="text-lg font-bold font-pixel text-pixel-brown">
                NuTeach
              </span>
            </div>
            <p className="text-center text-sm leading-loose text-foreground md:text-left font-outfit">
              &copy; {new Date().getFullYear()} NuTeach. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
