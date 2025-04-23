import Link from "next/link"
import { AuryonLogo } from "@/components/auryon-logo"
import { BarChart3, Brain, LayoutDashboard, Menu } from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b border-gray-100">
        <div className="container mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <AuryonLogo className="h-8 w-8" />
              <span className="text-xl font-semibold text-primary">Auryon</span>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <Link href="#features" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Features
              </Link>
              <Link href="#demo" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Demo
              </Link>
              <Link
                href="/forms/intake"
                className="px-4 py-2 rounded-md bg-primary text-white text-sm hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
            </div>
            <button className="md:hidden text-gray-700">
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#6EE7B7]/10 via-white to-[#FCD34D]/10 py-16">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -left-40 w-80 h-80 bg-[#6EE7B7]/10 rounded-full mix-blend-multiply blur-xl animate-blob"></div>
          <div className="absolute top-0 right-0 w-72 h-72 bg-[#FCD34D]/10 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-40 left-20 w-72 h-72 bg-[#6EE7B7]/10 rounded-full mix-blend-multiply blur-xl animate-blob animation-delay-4000"></div>
        </div>
        <div className="relative container mx-auto px-6 md:px-12 text-center">
          <h1 className="text-4xl md:text-5xl font-bold max-w-4xl font-display mx-auto text-primary">
            Your CRM Should Work for You — Not the Other Way Around.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-gray-600">
            Automate inefficiency. Simplify operations. Close more deals.
          </p>
          <Link
            href="/forms/intake"
            className="mt-8 inline-block bg-green-800 hover:bg-green-700 text-white px-8 py-4 rounded-md text-lg font-semibold transition-all duration-300 hover:shadow-lg"
          >
            Schedule My Walkthrough
          </Link>
        </div>
      </section>

      {/* Video Section */}
      <section className="mx-auto px-6 md:px-12 py-12">
        <div className="relative aspect-video w-full max-w-5xl mx-auto rounded-xl overflow-hidden shadow-xl">
          <video
            autoPlay
            loop
            playsInline
            muted
            controls
            className="w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: "center 45%",
              transform: "scale(0.75)",
            }}
          >
            <source src="/auryon-welcome-compressed.mp4" type="video/mp4" />
          </video>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-3">
            <div className="flex flex-col items-start">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-secondary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">Psychometric Lead Routing™</h3>
              <p className="text-gray-600">Match leads with the right rep based on behavior, not blind luck.</p>
            </div>

            <div className="flex flex-col items-start">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-secondary/10">
                <LayoutDashboard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">Automation Built for Humans</h3>
              <p className="text-gray-600">Reduce admin work and focus on high-leverage actions.</p>
            </div>

            <div className="flex flex-col items-start">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-secondary/10">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">Real-Time Sales Clarity</h3>
              <p className="text-gray-600">Get a full view of your pipeline—no micromanaging required.</p>
            </div>
          </div>
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
