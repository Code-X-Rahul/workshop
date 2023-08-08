"use client";
import Addworkshop from "@/components/Addworkshop";
import { useAuth } from "@/context/UserContext";
import { deleteWorkshop, fetchWorkshops } from "@/helpers/workshop";
import { useQuery } from "react-query";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarIcon,
  DeleteIcon,
  Edit,
  Trash,
  Trash2,
  Trash2Icon,
  WifiIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Delete } from "lucide-react";
import ConfirmDialog from "@/components/ConfirmDialog";
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
        <main className="grid grid-cols-2 gap-3 p-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
          {data.data.length !== 0 &&
            data.data.map((workshop: any) => (
              <Card
                key={workshop._id}
                className="dark relative bg-zinc-950/50 shadow-zinc-900 shadow-lg"
              >
                <CardHeader>
                  <CardTitle className="flex justify-between items-center">
                    <span className="flex-1">{workshop.name}</span>
                    <span className="text-sm text-center bg-gradient-to-tl from-rose-600 to-pink-400 rounded-3xl px-2 text-transparent font-bold bg-clip-text">
                      {workshop.type}
                    </span>
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
                <div className="absolute bottom-4 right-4 cursor-pointer flex space-x-1">
                  <Button
                    className="bg-transparent text-sky-400 "
                    size={"icon"}
                    variant={"ghost"}
                  >
                    <Edit className="w-5" />
                  </Button>
                  <ConfirmDialog _id={workshop._id} refetch={refetch} />
                </div>
              </Card>
            ))}
        </main>
      </section>
    );
  }
};
export default Home;
