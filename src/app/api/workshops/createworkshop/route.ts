import { connect } from "@/dbConfig/dbConfig";
import Workshop from "@/models/workshopModal";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();

    const newWorkshop = new Workshop(reqBody);
    const workshop = await newWorkshop.save();
    if (!workshop) {
      return NextResponse.json(
        { error: "something went wrong please try again later" },
        { status: 500 }
      );
    }

    const response = NextResponse.json({
      data: workshop,
      success: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
