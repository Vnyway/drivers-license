import { CheckCircle, FileText, Home, Users } from 'lucide-react';

const Solution = () => {
    return (
        <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Черги в СЦ МВС? Тестування? Бюрократія?
                    </h2>
                    <p className="text-xl text-red-600 font-semibold mb-8">
                      Забудь про це!
                    </p>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Ми допомагаємо отримати водійські права в Узбекистані – 
                      <span className="font-semibold text-green-600"> законно, швидко та просто.</span>
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CheckCircle className="w-12 h-12 text-green-500 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Вік від 18 років</h3>
                      <p className="text-gray-600">Мінімальні вимоги для отримання прав</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <FileText className="w-12 h-12 text-blue-500 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Допомога з документами</h3>
                      <p className="text-gray-600">Повний супровід та підготовка</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Home className="w-12 h-12 text-orange-500 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Житло та переклади</h3>
                      <p className="text-gray-600">Організовуємо проживання та переклади</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Users className="w-12 h-12 text-purple-500 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Постійна підтримка</h3>
                      <p className="text-gray-600">Супроводжуємо на кожному етапі</p>
                    </div>
                  </div>
                </div>
              </section>
    )
}

export default Solution;