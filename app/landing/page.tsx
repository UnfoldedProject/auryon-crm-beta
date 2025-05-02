"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { AuryonLogo } from "@/components/auryon-logo"
import { BarChart3, Brain, LayoutDashboard, Menu, X, ChevronRight, ArrowRight } from "lucide-react"
import { sendNotificationEmail } from "@/app/actions/email-actions"

// Add this after the imports
const VideoPlayer = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isInView, setIsInView] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting)
      },
      { threshold: 0.5 },
    )

    if (videoRef.current) {
      observer.observe(videoRef.current)
    }

    return () => {
      if (videoRef.current) {
        observer.unobserve(videoRef.current)
      }
    }
  }, [])

  useEffect(() => {
    if (isInView && videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Error attempting to play video:", error)
      })
    } else if (!isInView && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isInView])

  return (
    <video
      ref={videoRef}
      controls
      preload="auto"
      className="w-full h-full"
      style={{
        objectFit: "cover",
        objectPosition: "center 45%",
      }}
      poster="/video-poster.jpg"
    >
      <source src="/auryon-welcome-compressed.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSuccessMessage, setShowSuccessMessage] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScheduleClick = async () => {
    try {
      await sendNotificationEmail()
      setShowSuccessMessage(true)
      setTimeout(() => setShowSuccessMessage(false), 3000)
    } catch (error) {
      console.error("Failed to send notification email:", error)
    }
  }

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      {/* Navigation */}
      <nav
        className={`sticky top-0 z-50 w-full backdrop-blur-sm transition-all duration-300 ${
          isScrolled ? "bg-white/90 shadow-sm" : "bg-white/80 border-b border-gray-100"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AuryonLogo className="h-8 w-8 animate-pulse-slow" />
              <span className="text-xl font-semibold text-primary">Auryon</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link
                href="#features"
                className="text-sm text-gray-600 hover:text-primary transition-colors relative group"
              >
                Features
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link href="#demo" className="text-sm text-gray-600 hover:text-primary transition-colors relative group">
                Demo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/forms/intake"
                onClick={handleScheduleClick}
                className="px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-primary/90 transition-colors hover:shadow-lg hover:shadow-primary/20"
              >
                Get Started
              </Link>
            </div>
            <button className="md:hidden text-gray-700 focus:outline-none" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 py-4 px-6 animate-in slide-in-from-top duration-300">
            <div className="flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#demo"
                className="text-gray-600 hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </Link>
              <Link
                href="/forms/intake"
                onClick={() => {
                  handleScheduleClick()
                  setIsMenuOpen(false)
                }}
                className="px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-primary/90 transition-colors inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Success Message Toast */}
      {showSuccessMessage && (
        <div className="fixed top-20 right-4 z-50 bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded shadow-lg animate-in slide-in-from-right duration-300">
          <div className="flex">
            <div className="py-1">
              <svg className="h-6 w-6 text-green-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div>
              <p className="font-bold">Notification Sent</p>
              <p className="text-sm">We'll be in touch soon!</p>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-primary py-20 md:py-28">
        <div className="absolute inset-0 overflow-hidden">
          {/* Animated background elements */}
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#6EE7B7]/20 rounded-full mix-blend-multiply blur-xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#FCD34D]/20 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-72 h-72 bg-[#6EE7B7]/20 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-4000"></div>

          {/* Decorative elements */}
          <div className="absolute top-1/4 left-10 w-6 h-6 bg-secondary/30 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-10 w-4 h-4 bg-accent/30 rounded-full animate-pulse-slow"></div>
          <div className="absolute top-1/3 right-1/4 w-8 h-8 bg-white/20 rounded-full animate-pulse-slow"></div>

          {/* Geometric shapes */}
          <div className="absolute top-20 right-[10%] w-24 h-24 border-2 border-white/10 rounded-lg rotate-12 animate-float-reverse"></div>
          <div className="absolute bottom-20 left-[15%] w-16 h-16 border-2 border-white/10 rounded-full animate-spin-slow"></div>
        </div>

        <div className="relative container mx-auto px-6 md:px-12 text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-white/10 rounded-full text-white text-sm font-medium animate-in fade-in slide-in-from-bottom-4 duration-700">
            Introducing Auryon CRM
          </div>
          <h1 className="text-4xl md:text-6xl font-bold max-w-4xl font-display mx-auto text-white leading-tight animate-in fade-in slide-in-from-bottom-5 duration-700">
            Your CRM Should Work for You —{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
              Not the Other Way Around.
            </span>
          </h1>
          <p className="mt-6 text-lg md:text-xl max-w-2xl mx-auto text-white/90 animate-in fade-in slide-in-from-bottom-6 duration-700">
            Automate inefficiency. Simplify operations. Close more deals.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700">
            <Link
              href="/forms/intake"
              onClick={handleScheduleClick}
              className="cta-button px-8 py-4 rounded-md text-white text-lg font-semibold transition-all duration-300 flex items-center group"
            >
              Schedule My Walkthrough
              <ArrowRight className="ml-2 h-5 w-5 transform transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="#demo"
              className="px-8 py-4 rounded-md border border-white/30 text-white hover:bg-white/10 text-lg font-medium transition-all duration-300"
            >
              Watch Demo
            </a>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section id="demo" className="mx-auto px-6 md:px-12 py-16 bg-gray-50 scroll-mt-20">
        <div className="max-w-5xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">See Auryon in Action</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Watch how Auryon transforms your sales process with intelligent automation and intuitive design.
          </p>
        </div>
        <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white">
          <VideoPlayer />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-28 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Powerful Features</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Designed to streamline your workflow and boost your team's performance.
            </p>
          </div>

          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-start group hover:translate-y-[-5px] transition-all duration-300">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/20 group-hover:from-primary/20 group-hover:to-secondary/30 transition-all duration-300">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
                Psychometric Lead Routing™
              </h3>
              <p className="text-gray-600">
                Match leads with the right rep based on behavior, not blind luck. Our AI analyzes communication patterns
                to optimize assignments.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-col items-start group hover:translate-y-[-5px] transition-all duration-300">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/20 group-hover:from-primary/20 group-hover:to-secondary/30 transition-all duration-300">
                <LayoutDashboard className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
                Automation Built for Humans
              </h3>
              <p className="text-gray-600">
                Reduce admin work and focus on high-leverage actions. Our intuitive workflows adapt to how your team
                actually works.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            <div className="flex flex-col items-start group hover:translate-y-[-5px] transition-all duration-300">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/20 group-hover:from-primary/20 group-hover:to-secondary/30 transition-all duration-300">
                <BarChart3 className="h-8 w-8 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary group-hover:text-primary/80 transition-colors">
                Real-Time Sales Clarity
              </h3>
              <p className="text-gray-600">
                Get a full view of your pipeline—no micromanaging required. Visualize performance and identify
                opportunities at a glance.
              </p>
              <Link
                href="#"
                className="mt-4 inline-flex items-center text-primary font-medium hover:text-primary/80 transition-colors"
              >
                Learn more <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Sales Process?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-white/90">
            Join forward-thinking teams who've already made the switch to Auryon.
          </p>
          <Link
            href="/forms/intake"
            onClick={handleScheduleClick}
            className="inline-block bg-white text-primary px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-white/20 hover:bg-gray-50"
          >
            Schedule My Walkthrough
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12">
        <div className="container mx-auto px-6 md:px-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <AuryonLogo className="h-8 w-8" />
            <span className="text-xl font-semibold text-primary">Auryon</span>
          </div>
          <p className="text-sm text-gray-500">Built with intention. Powered by purpose.</p>
          <p className="mt-2 text-xs text-gray-400">© {new Date().getFullYear()} Auryon. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
