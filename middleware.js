// ...existing code...
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/resume(.*)",
  "/cover-letter(.*)",
  "/interview-preparation(.*)",
  "/onboarding(.*)",
]);

export default clerkMiddleware({
  afterAuth: (req) => {
    const userId = req.auth?.userId;
    const pathname = req.nextUrl?.pathname || "";

    if (!userId && isProtectedRoute(pathname)) {
      const signInUrl = new URL("/sign-in", req.nextUrl.origin);
      signInUrl.searchParams.set("returnBackUrl", req.nextUrl.toString());
      return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
  },
});

export const config = {
  // match all app routes except Next internals and static files
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
// ...existing code...