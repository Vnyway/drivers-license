import { steps } from "../constants";

const HowWorks = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Як це працює?
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Простий та зрозумілий процес у 5 кроків
                    </p>
                </div>
                <div className="max-w-6xl mx-auto">
                    <div className="flex mdplus:grid flex-col items-center mdplus:items-start mdplus:grid-cols-4 gap-8  mdplus:justify-start">
                        {steps.map((step, index) => (
                            <div key={index} className="relative flex flex-col items-center mdplus:block">
                                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mb-4 shadow-lg">
                                    {step.icon}
                                </div>
                                {index !== steps.length - 1 && (
                                <div className="absolute hidden mdplus:block top-8 left-[65px] w-full h-0.5 bg-blue-200"></div>
                                )}
                                <h3 className="text-lg font-semibold mb-2 text-gray-900">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HowWorks;
