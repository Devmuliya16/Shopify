import { NextResponse } from "next/server";

export function middleware (req){
    try{
        const auth =req.cookies.get('Auth').value;
        if(auth)
        return NextResponse.next();
    }
    catch(err){
        console.log(err.message);
        return NextResponse.rewrite(new URL("/Admin/login",req.url));
    }
}

export const config = {
   matcher: ["/Admin/:path*"],
}