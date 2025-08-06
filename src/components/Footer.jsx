import { Car, Phone, MessageCircle, Send, Clock } from 'lucide-react';

const Footer  = () => {
    return (
        <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Car className="w-8 h-8 text-blue-400" />
                УзбекПрава
              </h3>
              <p className="text-gray-400 mb-4">
                Допомагаємо українцям отримати водійські права в Узбекистані легально, швидко та без стресу.
              </p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Контакти</h4>
              <div className="space-y-3">
                <a href='https://t.me/m01_1010' target='_blank' className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-300">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <span>+421 91 550 99 88</span>
                </a>
                <a href='https://t.me/m01_1010' target='_blank' className="flex items-center gap-3 hover:text-blue-400 transition-colors duration-300">
                  <Send className="w-5 h-5 text-blue-400" />
                  <span>+421 91 550 99 88</span>
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