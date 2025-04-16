export const metadata = {
  title: "Auryon CRM",
  description: "Strategic CRM Platform for High-Performing Sales Teams",
  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  )
}
