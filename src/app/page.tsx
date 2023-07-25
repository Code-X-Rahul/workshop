'use client'
import Addworkshop from "@/components/Addworkshop";
import { useAuth } from "@/context/UserContext";
import { fetchWorkshops } from "@/helpers/workshop";
import { useQuery } from "react-query";

const Home = () => {
  const { user } = useAuth();

  const { data, isError, isLoading, isSuccess, refetch }: any = useQuery({
    queryKey: ["workshops", user._id],
    queryFn: () => fetchWorkshops(user._id),
  });

  if (isLoading) return <h1>Loading...</h1>
  if (isError) return <h1>error</h1>
  if (isSuccess) {
    return (
      <main className="relative min-h-screen bg-zinc-950 text-slate-50">
        <Addworkshop refetch={refetch} />
        {data.data.length !== 0 && data.data.map((workshop: any) => (
          <div key={workshop._id}>
            <h1>{workshop.name}</h1>
          </div>
        ))}
      </main>
    )
  }
}
export default Home;