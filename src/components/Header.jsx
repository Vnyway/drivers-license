import { Car } from "lucide-react";

const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center text-customGray h-[80px] p-[20px]">
      <a href="/">
        <h3 className=" text-2xl font-bold flex items-center gap-2">
          <Car className="w-8 h-8 text-blue-400" />
          УзбекПрава
        </h3>
      </a>
      <div className="gap-[30px] flex">
        <a href='https://t.me/m01_1010' target='_blank' className="flex md:gap-[10px] group">
          <img src="/whatsapp.png" alt="phone" className="size-[40px]" />
          <div className="flex flex-col group-hover:text-[#808080] transition-colors duration-300 justify-center md:justify-start">
            <span className="font-[700] hidden sm:block text-[18px] md:text-[14px]">WhatsApp</span>
            <span className="hidden md:block font-[400] text-[18px] whitespace-nowrap">
              +421 91 550 99 88
            </span>
          </div>
        </a>
        <a href='https://t.me/m01_1010' target='_blank' className="flex md:gap-[10px] group">
          <img src="/telegram.png" alt="chat" className="size-[40px]" />
          <div className="flex flex-col group-hover:text-[#808080] transition-colors duration-300 justify-center md:justify-start">
            <span className="font-[700] hidden sm:block text-[18px] md:text-[14px]">Telegram</span>
            <span className="hidden md:block font-[400] text-[18px]">+421 91 550 99 88</span>
          </div>
        </a>
      </div>
    </header>
  );
};

export default Header;
