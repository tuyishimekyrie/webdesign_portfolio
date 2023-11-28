import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/prisma/client";

export async function GET(request: NextRequest) {
  const information = await prisma.information.findMany();
  return NextResponse.json(information);
}

export async function POST(request: NextRequest) {
    const body = await request.json();
    const newInfo = await prisma.information.create({
      data: {
        services: body.services,
        budget: body.budget,
        pages: body.pages,
        message: body.message,
        email: body.email,
      },
    });
  return NextResponse.json(newInfo);
}