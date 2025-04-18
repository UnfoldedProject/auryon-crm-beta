import type React from "react"
export const metadata = {
  title: "Auryon CRM",
  description: "Strategic CRM Platform for High-Performing Sales Teams",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}


import './globals.css'