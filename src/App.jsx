import { FloatingContactButton, Header, Benefits, Faq, Footer, Hero, HowWorks, Solution, IncludedInPrice } from './components';

const App = () => {
  return (
    <div className="min-h-screen bg-white">
      <FloatingContactButton />
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

