import mongoose from "mongoose";

const WorkshopSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Must Provide the name"],
      trim: true,
      maxlength: [50, "Name cannot be more than 50 character"],
    },
    venue: {
      type: String,
      required: [true, "Must Provide the Venue"],
    },
    type: String,
    url: {
      type: String,
      required: [true, "Must Provide the URL"],
    },
    date: {
      type: String,
      required: [true, "Must Provide the DATE and TIME"],
    },
    completed: {
      type: Boolean,
      default: false,
    },
    createdBy: {
      type: mongoose.Types.ObjectId,
      ref: "User",
      required: [true, "Please provide user"],
    },
  },
  { timestamps: true }
);

const Workshop =
  mongoose.models.workshops || mongoose.model("workshops", WorkshopSchema);

export default Workshop;
