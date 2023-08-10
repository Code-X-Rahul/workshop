import axios from "axios";
import { toast } from "react-hot-toast";

export const fetchWorkshops = async (id: any) => {
  const url = `/api/workshops/myworkshops`;
  try {
    const { data } = await axios.post(url, {
      createdBy: id,
    });
    return data;
  } catch (error: any) {
    throw new Error(error);
    // console.log(error)
  }
};
export const fetchAllWorkshops = async () => {
  const url = `/api/workshops/allworkshops`;
  try {
    const { data } = await axios.get(url);
    return data;
  } catch (error: any) {
    throw new Error(error);
    // console.log(error)
  }
};

export const createWorkshop = async (workshop: any, setDialogOpen: any) => {
  try {
    const { data } = await axios.post(
      "/api/workshops/createworkshop",
      workshop
    );
    console.log(data);
    setDialogOpen(false);
  } catch (error) {
    console.log(error);
  }
};
export const updateWorkshop = async (
  workshopId: string,
  workshop: any,
  setDialogOpen: any
) => {
  try {
    await axios.patch("/api/workshops/update", {
      workshopId,
      ...workshop,
    });
    setDialogOpen(false);
  } catch (error) {
    console.log(error);
  }
};

export const deleteWorkshop = async (workshopId: any, refetch: any, uid:string) => {
  const loading = toast.loading("Deleting...");
  try {
    const { data } = await axios.delete(`/api/workshops/delete`, {
      data: { workshopId, uid },
    });
    toast.success(data.message);
    toast.dismiss(loading);
    refetch();
    return data.message;
  } catch (error) {
    console.log(error);
  }
};

export const fetchSingleWorkshop = async (workshopId: any) => {
  try {
    const { data } = await axios.post(`/api/workshops/workshop`, {
      workshopId,
    });
    console.log(data.data);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
