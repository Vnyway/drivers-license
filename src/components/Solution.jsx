import { CheckCircle, CircleDollarSign, FileText, Home, LaptopMinimal, Plane, Users } from 'lucide-react';

const Solution = () => {
    return (
        <section className="py-20 bg-gray-50" id='more'>
                <div className="container mx-auto px-4">
                  <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                      Один візит до Узбекистану — і ти за кермом!
                    </h2>
                    <p className="text-lg text-gray-700 leading-relaxed">
                      Легальні права + міжнародні документи за 3 місяці
                    </p>
                  </div>
                  
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <LaptopMinimal className="w-12 h-12 text-purple-500 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Навчання онлайн</h3>
                      <p className="text-gray-600">Без відвідування автошколи в Європі</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CheckCircle className="w-12 h-12 text-blue-500 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Все включено</h3>
                      <p className="text-gray-600">Витрати на навчання, квитки, житло</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <Plane className="w-12 h-12 text-orange-500 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Один візит</h3>
                      <p className="text-gray-600">Лише 2 тижні перебування в Узбекистані</p>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                      <CircleDollarSign className="w-12 h-12 text-green-500 mb-4" />
                      <h3 className="text-lg font-semibold mb-2">Гарантія результату</h3>
                      <p className="text-gray-600">Повертаємо гроші, якщо не отримаєш права</p>
                    </div>
                  </div>
                </div>
              </section>
    )
}

export default Solution;