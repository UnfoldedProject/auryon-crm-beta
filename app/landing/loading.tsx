import { AuryonLogo } from "@/components/auryon-logo"

export default function Loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      <AuryonLogo className="h-16 w-16 animate-pulse" />
      <h2 className="mt-4 text-xl font-medium text-primary">Loading Auryon...</h2>
    </div>
  )
}
