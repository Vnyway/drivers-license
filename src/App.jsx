import { Header, Benefits, Faq, Footer, Hero, HowWorks, Solution } from './components';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      {/* Hero Section */}
      <Hero />
      {/* Pain/Solution Section */}
      <Solution />
      {/* How it works */}
      <HowWorks />

      {/* Benefits */}
      <Benefits />
      {/* FAQ */}
      <Faq />   

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

