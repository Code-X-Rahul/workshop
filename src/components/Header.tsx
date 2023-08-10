'use client'
import { UserIcon } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

const Header = () => {
  const [update , setUpdate]= useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      setUpdate(true);
    } else {
      setUpdate(false);
    }
  }


  window.addEventListener("scroll", scrollHandler);


  return (
    <header className={cn("flex justify-between items-center p-4 fixed top-0 w-full z-50  backdrop-blur-lg transition-all ", update?"bg-[#110b3aa9]":"")}>
      <div>
        <h1 className="text-2xl font-bold">EventDefy</h1>
      </div>
      <div>
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
