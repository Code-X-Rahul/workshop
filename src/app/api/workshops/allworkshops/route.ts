import { connect } from "@/dbConfig/dbConfig";
import Workshop from "@/models/workshopModal";
import {  NextResponse } from "next/server";

connect();

export async function GET() {
  try {
    const workshops = await Workshop.find({});
    if (!workshops) {
      return NextResponse.json(
        { error: "workshop does not exist" },
        { status: 400 }
      );
    }
    const response = NextResponse.json({
      data: workshops,
      success: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

