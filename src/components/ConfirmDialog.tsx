import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { deleteWorkshop } from "@/helpers/workshop";
import { Trash2Icon } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

const ConfirmDialog = ({ _id, refetch }: any) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Button
          className="bg-transparent text-sky-400 hover:bg-red-600 hover:text-white"
          size={"icon"}
          variant={"ghost"}
        >
          <Trash2Icon className=" w-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="dark text-slate-50 flex flex-col justify-center items-center bg-black/10 w-[90%]">
        <DialogHeader>
          <DialogTitle className="text-3xl text-red-600 font-normal ">
            Are you sure you want to delete this workshop?
          </DialogTitle>
        </DialogHeader>
        <div className="flex space-x-4 m-2">
          <Button
            className="bg-transparent text-sky-400 hover:bg-red-600 hover:text-white"
            size={"icon"}
            variant={"ghost"}
            onClick={() => deleteWorkshop(_id, refetch)}
          >
            Yes
          </Button>
          <DialogPrimitive.Close>
            <Button
              className="bg-transparent text-sky-400 hover:bg-red-600 hover:text-white"
              size={"icon"}
              variant={"ghost"}
            >
              No
            </Button>
          </DialogPrimitive.Close>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmDialog;
