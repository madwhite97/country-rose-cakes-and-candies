import { useEffect } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Goodies from "./components/sections/Goodies";
import About from "./components/sections/About";
import OrderCTA from "./components/sections/OrderCTA";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

import Specialties from "./pages/Specialties";
import Gallery from "./pages/Gallery";

function Home() {
  return (
    <>
      <Hero />
      <Goodies />
      <About />
      <OrderCTA />
      <Contact />
    </>
  );
}

function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      return;
    }

    const scrollToSection = () => {
      const element = document.querySelector(location.hash);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    };

    const timer = setTimeout(scrollToSection, 100);

    return () => clearTimeout(timer);
  }, [location.pathname, location.hash]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToHash />

      <div className="app">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/specialties"
              element={<Specialties />}
            />
            <Route
              path="/gallery"
              element={<Gallery />}
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;