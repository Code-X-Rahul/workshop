import { connect } from "@/dbConfig/dbConfig";
import Workshop from "@/models/workshopModal";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { createdBy } = reqBody;

    //check if user exists
    const workshops = await Workshop.find({ createdBy });
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

