import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects.jsx";
import Footer from "./components/layouts/Footer";
import Contact from "./components/Contact/Contact";
import CustomCursor from "./components/CustomCursor/CustomCursor";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
      <Contact />
      <Footer />
      <CustomCursor />
    </>
  );
}

export default App;
