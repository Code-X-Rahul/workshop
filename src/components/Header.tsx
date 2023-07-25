import { UserIcon } from "lucide-react"

const Header = () => {
  return (
    <header className="flex justify-between items-center p-4 fixed top-0 w-full z-50 bg-gradient-to-br from-black to-zinc-900">
      <div>
        <h1 className="text-2xl font-bold">My Blog</h1>
      </div>
      <div>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2 rounded-full">
          <UserIcon className="text-xl" />
        </button>
      </div>
        
    </header>
  )
}

export default Header