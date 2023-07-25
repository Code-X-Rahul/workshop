import { connect } from "@/dbConfig/dbConfig";
import Workshop from "@/models/workshopModal";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function DELETE(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { workshopId } = reqBody;
    if (!workshopId) {
      return NextResponse.json(
        { error: "Please provide workshop Id" },
        { status: 500 }
      );
    }

    const deletedWorkshop = await Workshop.findOneAndDelete({
      _id: workshopId,
    });

    if (!deletedWorkshop) {
      return NextResponse.json(
        { error: "Workshop does not exist" },
        { status: 500 }
      );
    }

    const response = NextResponse.json({
      message: "Deleted successfully",
      success: true,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
