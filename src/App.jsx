import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";
import "locomotive-scroll/dist/locomotive-scroll.css";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Showcase from "./components/Showcase";
import OurWork from "./components/OurWork";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Socials from "./components/Socials";
import MatchesSection from "./components/MatchesSection";
import StandingsSection from "./components/StandingSection";

const App = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll({
      smooth: true,
    });
    return scroll.destroy();
  }, []);
  return (
    // <div className="bg-[url('/bg.jpeg')] bg-cover bg-center min-h-screen">
    <>
      <Navbar />
      <HeroSection />
      <MatchesSection />
      <StandingsSection />
      <OurWork />
      <Projects />
      <Socials />
      <Footer />
    </>
    // </div>
  );
};

export default App;
