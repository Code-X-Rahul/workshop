'use client'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { PlusIcon } from "lucide-react"
import Form from "./Form"
import { useState } from "react"

const Addworkshop = ({refetch}:any) => {
    const [dialogOpen, setDialogOpen] = useState(false);
    return (
        <Dialog open={dialogOpen}>
            <DialogTrigger onClick={() => setDialogOpen(!dialogOpen)} className="dark fixed bottom-4 right-4 bg-blue-700 p-2 rounded-full z-50">
                <PlusIcon className="text-3xl text-white" />
            </DialogTrigger>
            <DialogContent className="dark text-slate-50 flex flex-col justify-center items-center bg-black/10 w-[90%]">
                <DialogHeader>
                    <DialogTitle className="text-3xl text-red-600 font-normal ">New Workshop</DialogTitle>
                </DialogHeader>
                <Form setDialogOpen={setDialogOpen} refetch={refetch}/>
            </DialogContent>
        </Dialog>
    )
}

export default Addworkshop