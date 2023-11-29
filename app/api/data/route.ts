// pages/api/data.js (example API route for Next.js)
import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export  async function GET(request: NextRequest) {
//   try {
    const data = await prisma.information.findMany();
    return NextResponse.json(data);
//   } catch (error: any) {
    // console.error("Error fetching data:", error.message);
    // return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
//   }
}
