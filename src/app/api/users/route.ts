import { NextResponse } from "next/server";

export async function GET(request: Request) {
  let data;
  try {
    const response = await fetch("http://localhost:8080/api/users/", {
      method: "GET",
      headers: request.headers,
    });
    data = await response.json();
  } catch (error) {
    console.log(error);
  }
  return NextResponse.json({ data });
}

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
