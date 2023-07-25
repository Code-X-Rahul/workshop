import axios from "axios";

export const fetchWorkshops = async (id: any) => {
  const url = `/api/workshops/allworkshops`;
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
