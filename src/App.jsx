import { useRef } from "react";
import { About } from "./components/about/About";
import { Header } from "./components/header/Header";
import { Hero } from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";
import { TimeLine } from "./components/timeline/TimeLine";
import SliderSection from "./components/workSlider/SliderSection";
import { Contact } from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

const App = () => {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const workRef = useRef(null);
  const journeyRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Header
        scrollToSection={scrollToSection}
        refs={{ homeRef, aboutRef, workRef, contactRef, journeyRef }}
      />

      <div ref={homeRef}><Hero /></div>
      <div ref={aboutRef}><About /></div>
      <SliderSection />
      <div ref={journeyRef}><TimeLine /></div>
      <div ref={workRef}><Projects /></div>
      <div ref={contactRef}><Contact /></div>
      <Footer />
    </div>
  );
};

export default App;
