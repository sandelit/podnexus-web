import { NextResponse } from "next/server";

// Handle GET request
export async function GET(request: Request) {
  return NextResponse.json({ message: "This is a GET request" });
}

// Handle POST request
export async function POST(request: Request) {
  try {
    const data = await request.json();
    if (data) {
      return NextResponse.json({ message: "Transcription received", data });
    }
  } catch (e) {
    // Do something with the data
    return NextResponse.json({ message: "Transcription received" });
  }
}
