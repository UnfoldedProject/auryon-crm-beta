import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Auryon CRM | AI-Driven Client Automation",
  description: "Auryon CRM combines psychology, automation, and AI to turn underperforming teams into top closers.",
  keywords: ["CRM software", "Auryon", "sales automation", "AI CRM", "team performance", "sales optimization"],
  authors: [{ name: "Auryon Team" }],
  openGraph: {
    title: "Auryon CRM | AI-Driven Client Automation",
    description:
      "Auryon delivers customizable CRM flows, sales analytics, and automation that adapts to your team's needs.",
    url: "https://auryon.site",
    siteName: "Auryon CRM",
    images: [
      {
        url: "https://auryon.site/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Auryon CRM",
      },
    ],
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auryon CRM | Smarter Sales Starts Here",
    description: "Built for sales leaders. Backed by strategy. Powered by AI.",
    images: ["https://auryon.site/og-image.jpg"],
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
  },
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
