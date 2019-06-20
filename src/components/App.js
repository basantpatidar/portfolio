import React from "react";
import NavbarComponent from "./navbar/Navbar";
import About from "./about/About";
import Timeline from "./timeline/Timeline";
import Projects from "./projects/Projects";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <About />
      <Timeline />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
