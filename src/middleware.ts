import { NextRequest, NextResponse } from "next/server";
export { default } from "next-auth/middleware";
import { getToken } from "next-auth/jwt";

// Middleware function
export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });
  const url = request.nextUrl;

  // If the user is authenticated and tries to access login/signup/verify, redirect to /profile
  if (
    token &&
    (url.pathname.startsWith("/login") ||
      url.pathname.startsWith("/signup") ||
      url.pathname.startsWith("/verify"))
  ) {
    return NextResponse.redirect(new URL("/profile", request.url));
  }

  // Allow access to the requested route if the user is authenticated
  if (token) {
    return NextResponse.next();
  }

  // Redirect unauthenticated users trying to access protected routes to the homepage
  if (url.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Allow access to non-protected routes (e.g., homepage, login, signup)
  return NextResponse.next();
}

// Matcher configuration
export const config = {
  matcher: ["/login", "/signup", "/", "/profile", "/verify/:path*"],
};
