import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Auryon CRM | AI-Driven Client Automation",
  description: "Auryon CRM combines psychology, automation, and AI to turn underperforming teams into top closers.",
  keywords: "CRM software, Auryon, sales automation, AI CRM, Sean Williams, team performance, sales optimization",
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
      },
    ],
    type: "product",
  },
  twitter: {
    card: "summary_large_image",
    title: "Auryon CRM | Smarter Sales Starts Here",
    description: "Built for sales leaders. Backed by strategy. Powered by AI.",
  },
  viewport: "width=device-width, initial-scale=1",
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
