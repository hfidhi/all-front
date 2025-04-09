import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Subsidiaries from './components/Subsidiaries';
import Services from './components/Services';
import Methodology from './components/Mythodoloy';
import Values from './Values';
import Ventures from './components/Ventures';
import GrowthFunds from './components/GrowthFunds';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="home">
          <Hero />
        </section>
        <section id="about">
          <Stats />
        </section>
        <section id="subsidiaries">
          <Subsidiaries />
        </section>
        <section id="services">
          <Services />
        </section>
        <section id="methodology">
          <Methodology />
        </section>
        <section id="values">
          <Values />
        </section>
        <section id="ventures">
          <Ventures />
        </section>
        <section id="growthfunds">
          <GrowthFunds />
        </section>
        <section id="contact">
          <Contact />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default App;