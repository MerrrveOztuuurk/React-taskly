import { MoveLeft } from "lucide-react"

const Header = () => {
  return (
    <div className="relative bg-pink-100 flex flex-col gap-4 h-60 rounded-b-2xl p-4">
      {/* Arka plan resmi */}
      <div 
        className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] 
                   bg-[url('/src/assets/ellipsis.png')] bg-no-repeat"
        style={{ backgroundSize: "300px" }}
      />

      {/* İçerik */}
      <button className="flex items-center gap-2">
        <MoveLeft className="text-blue-900" /> 
        <span className="text-3xl text-blue-900 pb-0">
          Create <br /> New Task
        </span>
      </button>
    </div>
  )
}

export default Header
