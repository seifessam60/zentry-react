import About from "./components/About";
import Hero from "./components/Hero";

const App = () => {
  return (
    <main className='min-h-screen w-screen overflow-x-hidden relative'>
      <Hero />
      <About />
    </main>
  );
};

export default App;
