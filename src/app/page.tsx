import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import Stats from "./components/Stats";
import Process from "./components/Process";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Hero />
      <Problem />
      <Services />
      <Portfolio />
      <Stats />
      <Process />
      <CTA />
      <Footer />
    </main>
  );
}
