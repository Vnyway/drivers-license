const IncludedInPrice = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          
          {/* Left: Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="/plane.jpg"
              alt="Літак"
              className="rounded-xl shadow-md w-full h-auto object-cover"
            />
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Що включено у вартість:
            </h2>
            <ul className="space-y-4 text-gray-700 text-base list-disc list-inside">
              <li>Оплата автошколи</li>
              <li>Практичні заняття з водіння</li>
              <li>Квитки на літак в обидві сторони</li>
              <li>Проживання в Узбекистані</li>
              <li>Оплата адміністративних послуг для отримання прав</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IncludedInPrice;
