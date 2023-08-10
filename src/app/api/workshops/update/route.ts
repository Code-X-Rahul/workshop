import { connect } from "@/dbConfig/dbConfig";
import Workshop from "@/models/workshopModal";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function PATCH(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { workshopId } = reqBody;
    if (!workshopId) {
      return NextResponse.json(
        { error: "Please provide workshop Id" },
        { status: 500 }
      );
    }

    const updatedWorkshop = await Workshop.findOneAndUpdate(
      { _id: workshopId },
      { ...reqBody },
      { new: true }
    );

    if (!updatedWorkshop) {
      return NextResponse.json(
        { error: "Failed to update the workshop" },
        { status: 500 }
      );
    }

    const response = NextResponse.json({
      message: "Updated successfully",
      success: true,
      data: updatedWorkshop,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
