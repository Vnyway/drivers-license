const Hero = () => {
    return (
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Text Content */}
            <div className="space-y-8">
              <div className="space-y-4 animate-fade-up" style={{
                animationDuration: '0.4s',
                animationDelay: '0s',
                animationFillMode: 'forwards',
                opacity: 0,
              }}>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Хочеш права у Європі, але не знаєш,{' '}
                  <span className="text-blue-600">де їх взяти?</span>
                </h1>
                <p className="text-xl lg:text-2xl text-gray-600 leading-relaxed">
                  Без черг, стресу та зайвої бюрократії – Узбекистан відкриває двері!
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{
                animationDuration: '0.4s',
                animationDelay: '0.4s',
                animationFillMode: 'forwards',
                opacity: 0,
              }}>
                <a href='https://web.telegram.org/k/#8454890509' target='_blank' rel="noopener noreferrer" className="text-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                  Отримати консультацію
                </a>
                <a href="#more" className="text-center border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300">
                  Дізнатися більше
                </a>
              </div>
            </div>
            
            {/* Right Column - Image */}
            <div className="relative animate-fade-up" style={{
              animationDuration: '0.8s',
              animationDelay: '0.2s',
              animationFillMode: 'forwards',
              opacity: 0,
            }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/drivers-lessons.webp" 
                  alt="Молодий чоловік за кермом автомобіля" 
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              {/* Floating Card */}
              <div
                style={{
                    backgroundImage: "url('/uzbekistan.webp')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                }}
                className="absolute bottom-10 -left-1 md:-left-6 bg-white p-6 rounded-xl shadow-xl w-[100px] h-[100px]"
                >
                </div>
              
              {/* Background Decoration */}
            <div
            className="absolute -top-4 -right-4 w-24 h-24 rounded-full opacity-90 bg-cover bg-center"
            style={{ backgroundImage: "url('/ukraine.webp')" }}
            ></div>              
            <div className="absolute top-1/2 -right-2 lg:-right-8 w-16 h-16 bg-orange-100 rounded-full opacity-40"></div>
          </div>
          </div>
        </div>
      </section>
    );
};

export default Hero;