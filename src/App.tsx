import { useState, useEffect } from "react";
import { menuData } from "./data/menu";
import FoodSection from "../src/Sections/MenuSection";
import AdditionalInfoSection from "../src/Sections/AdditionalInfoSection";
import WelcomeSection from "../src/Sections/WelcomeSection";
import EventDetailsSection from "../src/Sections/EventDetailsSection";
import Footer from "../src/Sections/Footer";
import bgImage from "./data/images/EngagementCouplePic-hd3.png";

function App() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => setIsScrolling(false), 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div className="relative min-h-screen font-sans">
      {/* Background Image */}
      <div
        className={`fixed inset-0 w-full h-full bg-cover bg-center transition-all duration-300 ${
          isScrolling ? "scale-105" : "scale-100"
        }`}
        style={{ backgroundImage: `url(${bgImage})`, willChange: "transform" }}
      ></div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content Wrapper */}
      <div className="relative z-10">
        <WelcomeSection />
        <EventDetailsSection />
        <FoodSection menuData={menuData} />
        <AdditionalInfoSection />
        <Footer />
      </div>
    </div>
  );
}

export default App;
