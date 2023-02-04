import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Projects from "./components/Projects.jsx";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
function App() {
  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Projects />
      <Skills />
      <SocialLinks />
      <Contact />
    </>
  );
}

export default App;
