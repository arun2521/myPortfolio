import "./App.css";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Header from "./components/Header";
import MiddleBody from "./components/MiddleBody";
import Project from "./components/Project";
import Skills from "./components/Skills";

function App() {
  return (
    <>
      <Header />
      <MiddleBody />
      <Experience />
      <Skills />
      <Project />
      <Contact />
    </>
  );
}

export default App;
