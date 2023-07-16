import "./App.css";
import Header from "./components/layouts/Header";
import Home from "./components/Home/Home.jsx";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects.jsx";

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Projects />
    </>
  );
}

export default App;
