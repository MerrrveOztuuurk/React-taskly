import { MoveLeft } from "lucide-react"
import { useNavigate } from "react-router-dom";

const Header = () => {

   const navigate = useNavigate();

  return (
    <div className="relative flex flex-col gap-4 h-60 rounded-b-2xl p-8">
      {/* Arka plan resmi */}
      <div 
        className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] 
                   bg-[url('/src/assets/ellipsis.png')] bg-no-repeat"
        style={{ backgroundSize: "300px" }}
      />

      {/* İçerik */}
      <button className="flex items-center gap-2" onClick={() => navigate("/")}>
        <MoveLeft className="text-blue-900" /> 
      </button>
        <span className="text-3xl text-blue-900 mb-0">
          Create <br /> New Task
        </span>
    </div>
  )
}

export default Header
