import { NextRequest, NextResponse } from "next/server";
import { isAuthenticated } from "./lib/jwtTokenControls";

export const config = {
  matcher: ["/about/:path*", "/dashboard/:path*", "/api/:function*"],
};

export async function middleware(request: NextRequest) {
  if (await isAuthenticated(request)) {
    return NextResponse.next();
  } else return NextResponse.redirect(new URL("/login", request.url));
}
