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
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+998 90 123 45 67</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  <span>@uzbekprawa</span>
                </div>
                <div className="flex items-center gap-3">
                  <Send className="w-5 h-5 text-blue-400" />
                  <span>+998 90 123 45 67</span>
                </div>
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
                <p className="mt-4 text-sm">
                  Саппорт доступний 24/7 через месенджери
                </p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2024 УзбекПрава. Всі права захищені.</p>
            <p className="mt-2 text-sm">
              <a href="#" className="hover:text-white transition-colors">Політика конфіденційності</a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-white transition-colors">Умови користування</a>
            </p>
          </div>
        </div>
      </footer>
    )
}

export default Footer;