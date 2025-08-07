import { Header, Benefits, Faq, Footer, Hero, HowWorks, Solution, IncludedInPrice } from './components';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Solution />
      <HowWorks />
      <IncludedInPrice />
      <Benefits />
      <Faq />   
      <Footer />
    </div>
  );
}

export default App;

