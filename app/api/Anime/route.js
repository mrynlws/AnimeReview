import AnimeSchema from "@/app/AnimeSchema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const animeData = body.formData;
    await AnimeSchema.create(animeData);
    return NextResponse.json(
      { message: "Anime Review Created" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const animes = await AnimeSchema.find();
    return NextResponse.json({ animes }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}