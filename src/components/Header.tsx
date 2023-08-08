import { UserIcon } from "lucide-react";
import { Button } from "./ui/button";

const Header = () => {

  return (
    <header className="flex justify-between items-center p-4 fixed top-0 w-full z-50 bg-[#07041aa9] backdrop-blur-lg">
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
