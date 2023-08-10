"use client";
import { useAuth } from "@/context/UserContext";
import { Loader2Icon, PlusCircleIcon, X } from "lucide-react";
import { FormEvent, useState, useLayoutEffect } from "react";
import { fetchSingleWorkshop, updateWorkshop } from "@/helpers/workshop";
import { toast } from "react-hot-toast";
import { useQuery } from "react-query";

const EditForm = ({
  setDialogOpen,
  refetch,
  _id,
}: {
  setDialogOpen: (e: boolean) => void;
  refetch: any;
  _id: string;
}) => {
  const { user } = useAuth();
  const [workshop, setWorkshop] = useState({
    name: "",
    venue: "",
    url: "",
    email: "",
    type: "",
    date: "",
    createdBy: user._id,
  });
  const [isCreating, setIsCreating] = useState(false);
  const fetch = async (id: string) => {
    const data = await fetchSingleWorkshop(id);
    setWorkshop((prev) => ({ ...prev, ...data }));
  };

  const { isError, isLoading, isSuccess }: any = useQuery({
    queryKey: ["workshops", _id],
    queryFn: () => fetch(_id),
  });

  const valueHandler = (e: any) => {
    setWorkshop((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const updateHandler = async (e: FormEvent) => {
    e.preventDefault();
    const loading = toast.loading("Updating Workshop...");
    try {
      setIsCreating(true);
      await updateWorkshop(_id, workshop, setDialogOpen);
      toast.dismiss(loading);
      toast.success("Workshop updated successfully");
      refetch();
    } catch (error: any) {
      toast.dismiss(loading);
      toast.error("failed to update workshop", error.message);
      throw new Error(error);
    } finally {
      setIsCreating(false);
    }
  };

  if (isLoading) return <Loader2Icon className="animate-spin text-xl" size={30} color="red"/>;
  if(isError)return <div className="text-red-600">Error fetching workshop</div>

  if (isSuccess) {
    return (
      <form onSubmit={updateHandler} className="grid place-items-center">
        <div className="flex items-center justify-center">
          <label className="text-xl text-slate-100 p-2" htmlFor="name">
            Name
          </label>
          <input
            className="p-2 h-10 mx-4 bg-transparent border-b-2 border-red-600 outline-none text-slate-50"
            type="text"
            name="name"
            id="name"
            required
            value={workshop.name}
            onChange={(e: any) => valueHandler(e)}
          />
        </div>

        <div className="flex items-center justify-center">
          <label className="text-xl text-slate-100 p-2" htmlFor="email">
            Email
          </label>
          <input
            className="p-2 h-10 mx-4 bg-transparent border-b-2 border-red-600 outline-none text-slate-50"
            type="email"
            name="email"
            id="email"
            required
            value={workshop.email}
            onChange={(e: any) => valueHandler(e)}
          />
        </div>

        <div className="flex items-center justify-center">
          <label className="text-xl text-slate-100 p-2" htmlFor="venue">
            Venue
          </label>
          <input
            className="p-2 h-10 mx-4 bg-transparent border-b-2 border-red-600 outline-none text-slate-50"
            type="text"
            name="venue"
            id="venue"
            required
            value={workshop.venue}
            onChange={(e: any) => valueHandler(e)}
          />
        </div>

        <div className="flex items-center justify-center">
          <label className="text-xl text-slate-100 p-2" htmlFor="url">
            Url
          </label>
          <input
            className="p-2 h-10 mx-4 bg-transparent border-b-2 border-red-600 outline-none text-slate-50"
            type="url"
            name="url"
            id="url"
            required
            value={workshop.url}
            onChange={(e: any) => valueHandler(e)}
          />
        </div>

        <div className="flex items-center justify-center">
          <label className="text-xl text-slate-100 p-2" htmlFor="type">
            Type
          </label>
          <input
            className="p-2 h-10 mx-4 bg-transparent border-b-2 border-red-600 outline-none text-slate-50"
            type="text"
            name="type"
            id="type"
            required
            value={workshop.type}
            onChange={(e: any) => valueHandler(e)}
          />
        </div>

        <div className="flex items-center self-start">
          <label className="text-xl text-slate-100 p-2" htmlFor="date">
            Date
          </label>
          <input
            className="p-2 h-10 mx-4 bg-transparent border-b-2 border-red-600 outline-none text-slate-50"
            type="date"
            name="date"
            id="date"
            required
            value={workshop.date}
            onChange={(e: any) => valueHandler(e)}
          />
        </div>
        <div className="flex space-x-4 m-2">
          <button
            className="flex items-center justify-center gap-1 text-lg text-slate-50 bg-green-600 rounded-md p-2 disabled:opacity-50"
            type="submit"
            disabled={isCreating}
          >
            Update
            {isCreating ? (
              <svg className="animate-spin h-5 w-5 ml-2" viewBox="0 0 24 24">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                ></path>
              </svg>
            ) : (
              <PlusCircleIcon className="text-xl" />
            )}
          </button>
          <button
            onClick={() => setDialogOpen(false)}
            className="flex items-center justify-center gap-1 text-lg text-slate-100 bg-red-600 rounded-md p-2 disabled:opacity-50"
            type="button"
            disabled={isCreating}
          >
            Cancel
            <X className="text-xl" />
          </button>
        </div>
      </form>
    );
  }
};

export default EditForm;
