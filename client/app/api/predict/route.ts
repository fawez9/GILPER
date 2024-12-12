"use server";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { question, context } = await request.json();

  const response = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ question, context }),
  });

  const data = await response.json();
  return NextResponse.json(data);
}
