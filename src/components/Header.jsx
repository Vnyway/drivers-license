import { Car } from "lucide-react";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center text-customGray h-[80px]">
      <a href="/">
        <h3 className=" transition-transform duration-300 hover:scale-105 active:scale-95 text-2xl font-bold mb-4 flex items-center gap-2">
                <Car className="w-8 h-8 text-blue-400" />
                УзбекПрава
        </h3>
      </a>
      <div className="group gap-[30px] flex">
        <a href="/contacts" className="flex gap-[10px]">
          <img src="/whatsapp.png" alt="phone" className="size-[40px]" />
          <div className="flex flex-col group-hover:text-[#808080] transition-colors duration-300">
            <span className="font-[700] text-[14px]">WhatsApp</span>
            <span className="hidden md:block font-[400] text-[18px] whitespace-nowrap">
              +421 91 550 99 88
            </span>
          </div>
        </a>
        <a href="/contacts" className="flex gap-[10px]">
          <img src="/telegram.png" alt="chat" className="size-[40px]" />
          <div className="flex flex-col group-hover:text-[#808080] transition-colors duration-300">
            <span className="font-[700] text-[14px]">Telegram</span>
            <span className="hidden md:block font-[400] text-[18px]">+421 91 550 99 88</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
