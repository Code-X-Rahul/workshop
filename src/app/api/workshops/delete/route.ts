import { connect } from "@/dbConfig/dbConfig";
import Workshop from "@/models/workshopModal";
import { NextRequest, NextResponse } from "next/server";

connect();

export async function DELETE(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { workshopId, uid } = reqBody;
    if (!workshopId) {
      return NextResponse.json(
        { error: "Please provide workshop Id" },
        { status: 400 }
      );
    }
    if (!uid) {
      return NextResponse.json(
        { error: "User UnAuthenticated" },
        { status: 400 }
      );
    }
    const workshop = await Workshop.findOne({ _id: workshopId });
    if (String(workshop.createdBy) !== uid) {
      return NextResponse.json(
        { error: "User not permitted to delete." },
        { status: 400 }
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
