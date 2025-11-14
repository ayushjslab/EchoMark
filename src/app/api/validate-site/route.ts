import Website from "@/models/website.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { siteId } = await req.json();
    const website = await Website.findById(siteId);
    if (!website) {
      return NextResponse.json(
        {
          message: "Invalid siteId",
          success: false,
        },
        { status: 400 }
      );
    }
    return NextResponse.json(
      {
        message: "Fetched website successfully",
        success: true,
        domain: website.websiteUrl,
      },
      {
        status: 200,
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods": "POST, OPTIONS",
          "Access-Control-Allow-Headers": "Content-Type",
        },
      }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      {
        message: "Internal server error",
        success: false,
      },
      {
        status: 500,
      }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    },
  });
}
