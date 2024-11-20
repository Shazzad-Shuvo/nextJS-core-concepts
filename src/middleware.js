import { NextResponse } from "next/server";

const coo = 'next-hero';

export const middleware = (request) => {
  // return NextResponse.next();
  console.log(request);

  const cookies = request.cookies.get('token');
  console.log(cookies, coo);

  if (!cookies || (cookies.value !== coo)){
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
    
};

export const config = {
    matcher: ['/dashboard', '/services']
};
