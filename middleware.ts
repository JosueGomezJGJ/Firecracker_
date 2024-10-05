import { RedirectToSignIn } from "@clerk/nextjs";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isPublicRoute = createRouteMatcher(["/login(.*)", "/signup(.*)", "/"]);

export default clerkMiddleware((auth, request) => {
  if (!isPublicRoute(request)) {
    auth().protect(); // Protect all non-public routes
  }

  // Redirect based on authentication and organization status
  if (auth().userId && isPublicRoute(request)) {
    let path = "/select-org";

    if (auth().orgId) {
      path = `/organization/${auth().orgId}`;
    }

    const redirectTo = new URL(path, request.url);
    return NextResponse.redirect(redirectTo);
  }

  if (!auth().userId && !isPublicRoute(request)) {
    return NextResponse.redirect("/login");
  }

  if (
    auth().userId &&
    !auth().orgId &&
    request.nextUrl.pathname !== "/select-org"
  ) {
    return NextResponse.redirect("/select-org");
  }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
