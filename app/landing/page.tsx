import Link from "next/link"
import Image from "next/image"
import { AuryonLogo } from "@/components/auryon-logo"
import { ArrowRight, BarChart3, Brain, Download, LayoutDashboard, Menu } from "lucide-react"

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
              <Link href="#testimonials" className="text-sm text-gray-600 hover:text-primary transition-colors">
                Testimonials
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

      {/* Video Hero Section */}
      <section className="relative overflow-hidden" style={{ height: "600px" }}>
        <video autoPlay loop playsInline muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
          <source src="/auryon-welcome.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6 md:px-12">
          <h1 className="text-4xl md:text-5xl font-bold max-w-4xl font-display">
            Your CRM Should Work for You — Not the Other Way Around.
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl">
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

      {/* Value Proposition Section */}
      <section id="features" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gap-12 md:grid-cols-3">
            {/* Column 1 */}
            <div className="flex flex-col items-start">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-secondary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">Psychometric Lead Routing™</h3>
              <p className="text-gray-600">Match leads with the right rep based on behavior, not blind luck.</p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col items-start">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-secondary/10">
                <LayoutDashboard className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-3 text-xl font-semibold text-primary">Automation Built for Humans</h3>
              <p className="text-gray-600">Reduce admin work and focus on high-leverage actions.</p>
            </div>

            {/* Column 3 */}
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

      {/* Rest of the page content remains the same */}
      {/* Visual Demo Area */}
      <section id="demo" className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <p className="text-lg text-gray-700 italic">
              "Auryon predicts your team's close potential before the first call — using behavior-based filters,
              emotional cues, and role-specific data to map your ideal pathway to the sale."
            </p>
          </div>
          <div className="mx-auto max-w-5xl">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-gray-200 bg-white shadow-lg">
              <Image
                src="/crm-analytics-dashboard.png"
                alt="Auryon CRM Dashboard"
                width={1280}
                height={720}
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/90 text-primary">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="ml-1"
                  >
                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                  </svg>
                </div>
              </div>
            </div>
            <p className="mt-6 text-center text-gray-600">See how it works in real time during your walkthrough.</p>
          </div>
        </div>
      </section>

      {/* Testimonial Block */}
      <section id="testimonials" className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-4xl">
            <div className="rounded-xl bg-gradient-to-br from-secondary/10 to-accent/10 p-8 md:p-12">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="flex-shrink-0">
                  <div className="h-20 w-20 overflow-hidden rounded-full bg-gray-200">
                    <Image
                      src="/confident-executive.png"
                      alt="Jordan C."
                      width={80}
                      height={80}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div>
                  <blockquote className="mb-4 text-lg md:text-xl text-gray-700 italic">
                    "Auryon cut our admin time in half and made our reps actually love using a CRM again."
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <p className="font-semibold text-primary">Jordan C.</p>
                      <p className="text-sm text-gray-600">Sales Director</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary CTA + Conversion Block */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-6 md:px-12">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-4 text-3xl font-bold text-primary md:text-4xl">Want to See It in Action?</h2>
            <p className="mb-8 text-lg text-gray-600">Book your live walkthrough and let Auryon take the wheel.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/forms/intake"
                className="inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 text-white transition-all hover:scale-105 cta-button"
              >
                Schedule My Walkthrough
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="#"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-primary px-6 py-3 text-primary transition-all hover:bg-primary/10"
              >
                Download Feature Guide
                <Download className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-100 py-12 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid gap-8 md:grid-cols-4">
            {/* Logo and Tagline */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <AuryonLogo className="h-8 w-8" />
                <span className="text-xl font-semibold text-primary">Auryon</span>
              </div>
              <p className="text-sm text-gray-600 max-w-xs">
                The AI-powered CRM that brings your sales team back to doing what they do best.
              </p>
            </div>

            {/* About */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase text-gray-500">About Auryon</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    Team
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase text-gray-500">Contact</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    Support
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    Sales
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4 text-sm font-semibold uppercase text-gray-500">Legal</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="text-sm text-gray-600 hover:text-primary transition-colors">
                    GDPR
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-100">
            <p className="text-center text-sm text-gray-500">Built with intention. Powered by purpose.</p>
            <p className="mt-2 text-center text-xs text-gray-400">
              © {new Date().getFullYear()} Auryon. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
