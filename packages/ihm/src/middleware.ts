import { NextRequest } from "next/server";

export default function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith("/api")) {
    console.log("this is middleware");
  }
}
