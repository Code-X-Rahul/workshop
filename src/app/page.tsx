"use client";
import Addworkshop from "@/components/Addworkshop";
import HeroContainer from "@/components/HeroContainer";
import { useAuth } from "@/context/UserContext";
import { fetchWorkshops } from "@/helpers/workshop";
import { useQuery } from "react-query";


const Home = () => {
  const { user } = useAuth();

  const { data, isError, isLoading, isSuccess, refetch }: any = useQuery({
    queryKey: ["workshops", user._id],
    queryFn: () => fetchWorkshops(user._id),
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <h1>error</h1>;
  if (isSuccess) {
    return (
      <section className="relative min-h-screen  text-slate-50 mt-[4rem]">
        <Addworkshop refetch={refetch} />
        <HeroContainer data={data} refetch={refetch} />
      </section>
    );
  }
};
export default Home;
