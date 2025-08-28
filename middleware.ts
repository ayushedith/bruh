import { NextResponse } from 'next/server'

// Temporarily allow access to all pages without auth
export function middleware() {
  return NextResponse.next()
}

// No routes matched by middleware (effectively disabled)
export const config = {
  matcher: [],
}
