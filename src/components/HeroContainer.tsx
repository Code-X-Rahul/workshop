import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarIcon, WifiIcon } from "lucide-react";
import ConfirmDialog from "@/components/ConfirmDialog";
import EditWorkshop from "@/components/EditWorkshop";

const HeroContainer = ({ data, refetch }: any) => {
  return (
    <main className="grid grid-cols-1 gap-3 p-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6">
      {data.data.length !== 0 &&
        data.data.map((workshop: any) => (
          <Card
            key={workshop._id}
            className="dark relative bg-zinc-950/50 shadow-zinc-900 shadow-lg"
          >
            <CardHeader>
              <CardTitle className="flex justify-between items-center max-w-full break-words">
                <span className="break-words">{workshop.name}</span>
                <span className="text-sm text-center bg-gradient-to-tl from-rose-600 to-pink-400 rounded-3xl px-2 text-transparent font-bold bg-clip-text">
                  {workshop.type}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className=" text-sky-400 flex space-x-2 items-center">
                <WifiIcon className="text-sky-400 shrink-0 w-5" />
                <a className="line-clamp-1" target="_blank" href={workshop.url}>
                  {workshop.url}
                </a>
              </CardDescription>
              <p className="flex space-x-2 items-center mt-2">
                <CalendarIcon className="text-red-600 w-5" />
                <span>{workshop.date}</span>
              </p>
            </CardContent>
            <div className="absolute bottom-4 right-4 cursor-pointer flex space-x-1">
              <EditWorkshop
                _id={workshop._id}
                refetch={refetch}
                {...workshop}
              />
              <ConfirmDialog _id={workshop._id} refetch={refetch} />
            </div>
          </Card>
        ))}
    </main>
  );
};

export default HeroContainer;
