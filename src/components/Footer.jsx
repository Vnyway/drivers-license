import { MessageCircle, Send, Clock, Instagram } from 'lucide-react';

const Footer  = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#60A5FA" className="size-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                </svg>
                UZdrive
              </h3>
              <p className="text-gray-400 mb-4">
                Допомагаємо українцям отримати водійські права в Узбекистані легально, швидко та без стресу.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакти</h4>
              <div className="space-y-3">
                <a href='https://wa.me/421915509988' target='_blank' rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-300">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <span>+421 91 550 99 88</span>
                </a>
                <a href='https://web.telegram.org/k/#8454890509' target='_blank' rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-300">
                  <Send className="w-5 h-5 text-blue-400" />
                  <span>+421 91 550 99 88</span>
                </a>
                <a href='https://www.instagram.com/maksym.gvozd' target='_blank' rel="noopener noreferrer" className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-300">
                  <Instagram className="w-5 h-5 text-pink-600" />
                  <span>@maksym.gvozd</span>
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Робочий час</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>Пн-Пт: 9:00 - 20:00</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>Сб-Нд: 10:00 - 18:00</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;