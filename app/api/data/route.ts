import { prisma } from "@/prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const data = await prisma.information.findMany();
    return NextResponse.json(data, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching data:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const newInfo = await prisma.information.create({
      data: {
        services: body.services,
        budget: parseInt(body.budget),
        pages: parseInt(body.pages),
        message: body.message,
        email: body.email,
      },
    });

    return NextResponse.json(newInfo, { status: 201 });
  } catch (error: any) {
    console.error("Error handling POST request:", error.message);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

