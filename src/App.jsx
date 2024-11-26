import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Features from "./Features";

const App = () => {
  return (
    <main className='min-h-screen w-screen overflow-x-hidden relative'>
      <Navbar />
      <Hero />
      <About />
      <Features />
    </main>
  );
};

export default App;
