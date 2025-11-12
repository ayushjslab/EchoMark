import { connectToDB } from "@/lib/connectDB";
import Website from "@/models/website.model";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    await connectToDB();
    const data = await req.json();
    const { name, url, userId } = data;

    if (!name || !url || !userId) {
      return NextResponse.json(
        { success: false, message: "Please provide required fields" },
        { status: 400 }
      );
    }

    const newWebsite = await Website.create({
      websiteName: name,
      websiteUrl: url,
      addedBy: userId,
    });

    return NextResponse.json({
      success: true,
      message: "Website added successfully",
      data: newWebsite,
    });
  } catch (error) {
    console.error("Error adding website:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
