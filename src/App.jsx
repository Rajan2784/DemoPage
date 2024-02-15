import Services from "./pages/Services";
import About from "./pages/About";
import Hero from "./pages/Hero";
import TimeOut from "./pages/TimeOut";
import SlideUpForm from "./components/SlideUpForm";
import Offer from "./pages/Offer";

function App() {
  return (
    <div className="w-full bg-zinc-800 h-full lg:pl-20 lg:pr-20 md:pl-10 md:pr-10 sm:pl-4 sm:pr-4 pb-5 relative">
      <Hero />
      <About />
      <Services />
      <TimeOut />
      <SlideUpForm />
      <Offer />
    </div>
  );
}

export default App;
