const Header = () => {
  return (
    <header className="container mx-auto flex justify-between items-center text-customGray h-[80px] p-[20px]">
      <a href="/">
        <h3 className=" text-2xl font-bold flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#60A5FA" className="size-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
          </svg>
          UZdrive
        </h3>
      </a>
      <div className="gap-[30px] flex">
        <a href='https://wa.me/421915509988' target='_blank' rel="noopener noreferrer" className="flex md:gap-[10px] group">
          <img src="/whatsapp.png" alt="phone" className="size-[40px]" />
          <div className="flex flex-col group-hover:text-[#808080] transition-colors duration-300 justify-center md:justify-start">
            <span className="font-[700] hidden sm:block text-[18px] md:text-[14px]">WhatsApp</span>
            <span className="hidden md:block font-[400] text-[18px] whitespace-nowrap">
              +421 91 550 99 88
            </span>
          </div>
        </a>
        <a href='https://t.me/maksym_gvozd' target='_blank' rel="noopener noreferrer" className="flex md:gap-[10px] group">
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
