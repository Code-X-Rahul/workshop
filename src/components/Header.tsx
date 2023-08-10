"use client";
import { UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [update, setUpdate] = useState(false);
  const location = usePathname();

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setUpdate(true);
    } else {
      setUpdate(false);
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", scrollHandler);
  }, []);

  return (
    <header
      className={cn(
        "flex justify-between items-center p-4 fixed top-0 w-full z-50  backdrop-blur-lg transition-all ",
        update ? "bg-[#110b3aa9]" : ""
      )}
    >
      <div>
        <h1 className="text-2xl font-bold">EventDefy</h1>
      </div>
      <div className="flex items-center space-x-4">
        <Link className={cn("text-lg",location==="/" ? "text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600" : "text-fuchsia-50")} href="/">All Workshops</Link>
        <Link className={cn("text-lg",location==="/my-workshops" ? "text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-rose-600" : "text-fuchsia-50")} href="/my-workshops">My Workshops</Link>
        <Button
          variant={"outline"}
          size={"icon"}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full"
        >
          <UserIcon className="text-xl" />
        </Button>
      </div>
    </header>
  );
};

export default Header;
