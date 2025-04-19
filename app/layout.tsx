import type React from "react"
import "./globals.css"

export const metadata = {
  title: "Auryon CRM",
  description: "Strategic CRM Platform for High-Performing Sales Teams",
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
