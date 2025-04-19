import { createMiddlewareClient } from "@supabase/auth-helpers-nextjs"
import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  // If there's no session and the request is for a protected route, redirect to login
  if (!session && !req.nextUrl.pathname.startsWith("/login")) {
    // Exclude public routes
    if (
      req.nextUrl.pathname.startsWith("/api") ||
      req.nextUrl.pathname === "/" ||
      req.nextUrl.pathname.startsWith("/forms/intake") ||
      req.nextUrl.pathname === "/landing" ||
      req.nextUrl.pathname === "/funnel"
    ) {
      return res
    }

    // Redirect to login for all other protected routes
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return res
}

export const config = {
  matcher: [
    // Protect all routes except these
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
}
