import { LayoutGrid, Plus, SquareCheckBig, Timer, User } from "lucide-react"

const BottomNavigation = () => {
  return (
    <div  className="fixed bottom-0 w-full border-t-2 border-slade-100 shadow-2xl flex justify-around py-4">
      <button><LayoutGrid className="text-[#1c398e] hover:text-[#1c398e] transition cursor-pointer"/></button>
      <button><Timer className="text-[#D3D3D3] hover:text-[#1c398e] transition cursor-pointer"/></button>
      <button className="bg-blue-900 rounded-full p-4 hover:bg-blue-500"><Plus color="white"  /></button>
       <button><SquareCheckBig className="text-[#D3D3D3] hover:text-[#1c398e] transition cursor-pointer"/></button>
      <button><User className="text-[#D3D3D3] hover:text-[#1c398e] transition cursor-pointer"/></button>
      </div>
  )
}

export default BottomNavigation