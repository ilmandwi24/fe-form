import React from "react";
import logoPln from "../../assets/logo.svg";
import foto from "../../assets/foto.png";
import { Bell,ChevronDown, Megaphone} from "lucide-react"; // Import desired Lucide icons

export default function Navbar() {
  return (
    <div className=" w-full px-6 py-2 bg-gradient-to-r from-cyan-600 to-cyan-800 inline-flex justify-between items-center">
      <div className="size- flex justify-center items-center gap-5">
        <img className="w-[38px] drop-shadow-xl/25" src={logoPln} />
        <div className="justify-start text-white text-base font-bold tracking-tight">
          iMeeting
        </div>
      </div>
      <div className="size- flex justify-center items-center gap-3">
        <div className="size- pl-2 pr-3 py-2 bg-slate-500 rounded-lg inline-flex justify-start items-center gap-2">
          <Megaphone size={28} color="white"/>
          <div className="justify-start text-white text-sm font-semibold font-['Open_Sans'] tracking-tight">
            Kontak Aduan
          </div>
        </div>
        <Bell color="white" width={18} />

        <img className="size-10 rounded-full" src={foto} />
        <div className="justify-start text-white text-sm font-semibold font-['Open_Sans'] tracking-tight">
          John Doe
        </div>
        <ChevronDown color="white" width={18} />
      </div>
    </div>
  );
}
