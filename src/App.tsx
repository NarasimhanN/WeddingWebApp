import { menuData } from "./data/menu";
import FoodSection from "../src/Sections/MenuSection"; // Adjust path as needed
import AdditionalInfoSection from "../src/Sections/AdditionalInfoSection";
import WelcomeSection from "../src/Sections/WelcomeSection";
import EventDetailsSection from "../src/Sections/EventDetailsSection";
import Footer from "../src/Sections/Footer";
function App() {
  return (
    <div className="min-h-screen bg-white">
      <WelcomeSection />
      <EventDetailsSection />
      <FoodSection menuData={menuData} />
      <AdditionalInfoSection />
      <Footer />
    </div>
  );
}

export default App;
