import { useState } from "react";
import { Coffee, UtensilsCrossed, Wine, ChevronDown } from "lucide-react";

// Unsplash food image for production use
import foodImg from "../data/images/southIndianFood.jpg"; // Adjust path as needed

interface MenuCategory {
  title: string;
  items: { category: string; foods: string[] }[];
}

interface MenuData {
  breakfast: MenuCategory;
  lunch: MenuCategory;
  dinner: MenuCategory;
}

interface MenuSectionProps {
  menuData: MenuData;
}

export default function FoodSection({ menuData }: MenuSectionProps) {
  const [openSection, setOpenSection] = useState<
    "breakfast" | "lunch" | "dinner" | null
  >(null);

  const toggleSection = (section: "breakfast" | "lunch" | "dinner") => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <section
      className="py-16 px-6 relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${foodImg})` }}
    >
      {/* Dark overlay for better readability */}
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative max-w-4xl mx-auto text-white">
        <h2 className="text-4xl font-bold text-center tracking-wide mb-2">
          Our Menu
        </h2>
        <p className="text-center text-lg mb-6">Who doesn’t love great food?</p>

        <div className="space-y-6">
          {["breakfast", "lunch", "dinner"].map((section) => (
            <div
              key={section}
              className="bg-white bg-opacity-90 p-6 rounded-2xl shadow-lg"
            >
              <button
                onClick={() =>
                  toggleSection(section as "breakfast" | "lunch" | "dinner")
                }
                className="flex justify-between items-center w-full text-xl font-semibold text-gray-900 focus:outline-none"
              >
                <div className="flex items-center">
                  {section === "breakfast" && (
                    <Coffee className="w-6 h-6 mr-2 text-pink-500" />
                  )}
                  {section === "lunch" && (
                    <UtensilsCrossed className="w-6 h-6 mr-2 text-pink-500" />
                  )}
                  {section === "dinner" && (
                    <Wine className="w-6 h-6 mr-2 text-pink-500" />
                  )}
                  {menuData[section as keyof MenuData].title}
                </div>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openSection === section ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openSection === section && (
                <div className="mt-4 space-y-4 text-gray-800 text-lg">
                  {menuData[section as keyof MenuData].items.map(
                    (category, index) => (
                      <div key={index}>
                        <h3 className="text-xl font-bold border-b-2 border-pink-500 pb-1 mb-2">
                          {category.category}
                        </h3>
                        <ul className="space-y-1">
                          {category.foods.map((food, foodIndex) => (
                            <li
                              key={foodIndex}
                              className="pl-4 border-l-4 border-pink-500"
                            >
                              {food}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
