"use client";
import Addworkshop from "@/components/Addworkshop";
import { useAuth } from "@/context/UserContext";
import { fetchWorkshops } from "@/helpers/workshop";
import { useQuery } from "react-query";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon, Edit, WifiIcon } from "lucide-react";
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
      <section className="relative min-h-screen bg-zinc-950 text-slate-50 mt-[4rem]">
        <Addworkshop refetch={refetch} />
        <main className="grid grid-cols-2 gap-3 p-3">
          {data.data.length !== 0 &&
            data.data.map((workshop: any) => (
              <Card key={workshop._id} className="dark relative bg-zinc-950/50 shadow-zinc-900 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="flex-1">{workshop.name}</span>
                    <span className="text-sm text-center bg-gradient-to-tl from-rose-600 to-pink-400 rounded-3xl px-2 text-transparent font-bold bg-clip-text">{workshop.type}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className=" text-sky-400 flex space-x-2 items-center">
                    <WifiIcon className="text-sky-400 shrink-0 w-5" />
                    <a
                      className="line-clamp-1"
                      target="_blank"
                      href={workshop.url}
                    >
                      {workshop.url}
                    </a>
                  </CardDescription>
                  <p className="flex space-x-2 items-center mt-2">
                    <CalendarIcon className="text-red-600 w-5" />
                    <span>{workshop.date}</span>
                  </p>
                </CardContent>
                <button className="absolute bottom-4 right-4">
                  <Edit className="text-sky-400 w-5" />
                </button>
              </Card>
            ))}
        </main>
      </section>
    );
  }
};
export default Home;
