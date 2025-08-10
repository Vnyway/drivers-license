import { Phone } from "lucide-react";

const FloatingContactButton = ({ link = "https://t.me/maksym_gvozd" }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white px-5 py-3 rounded-full md:rounded-md shadow-lg transition-all duration-300 transform hover:scale-105 z-50"
    >
      {/* Pulsating Circle */}
      <span className="absolute -top-1 -left-1 md:-top-2 md:-left-2 flex h-5 w-5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-60"></span>
        <span className="relative inline-flex rounded-full h-5 w-5 bg-white"></span>
      </span>

      {/* Icon */}
      <Phone className="w-6 h-6" />

      {/* Text */}
      <span className="hidden md:block font-semibold whitespace-nowrap">Зв’яжіться з нами</span>
    </a>
  );
};

export default FloatingContactButton;

