import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Hackathons from "./components/Hackathons";
import Leadership from "./components/Leadership";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";


function App() {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Hackathons />
      <Leadership />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;