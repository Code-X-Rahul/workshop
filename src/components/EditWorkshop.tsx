"use client";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Edit } from "lucide-react";
import { useState } from "react";
import EditForm from "./EditForm";

const EditWorkshop = ({ _id, refetch }: any) => {
  const [dialogOpen, setDialogOpen] = useState(false);  
  
  return (
    <Dialog open={dialogOpen}>
      <DialogTrigger onClick={() => setDialogOpen(!dialogOpen)}>
        <Button
          className="bg-transparent text-sky-400 "
          size={"icon"}
          variant={"ghost"}
        >
          <Edit className="w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="dark text-slate-50 flex flex-col justify-center items-center bg-black/10 w-[90%]">
        <DialogHeader>
          <DialogTitle className="text-xl text-red-600 font-semibold ">
            Edit Workshop
          </DialogTitle>
        </DialogHeader>
        <EditForm
          setDialogOpen={setDialogOpen}
          refetch={refetch}
          _id={_id}
        />
      </DialogContent>
    </Dialog>
  );
};

export default EditWorkshop;
