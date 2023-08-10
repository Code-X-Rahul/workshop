import { connect } from "@/dbConfig/dbConfig";
import Workshop from "@/models/workshopModal";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { workshopId } = reqBody;

    console.log(reqBody);
    const workshop = await Workshop.findById({ _id: workshopId });
    if (!workshop) {
      return NextResponse.json(
        { error: "workshop does not exist" },
        { status: 400 }
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
