import { useState } from "react";
import { Coffee, HandPlatter, ChevronDown, CookingPot } from "lucide-react";

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
  const [openSections, setOpenSections] = useState<
    Set<"breakfast" | "lunch" | "dinner">
  >(new Set());

  const toggleSection = (section: "breakfast" | "lunch" | "dinner") => {
    setOpenSections((prev) => {
      const newSections = new Set(prev);
      if (newSections.has(section)) {
        newSections.delete(section); // Close the section if it's already open
      } else {
        newSections.add(section); // Open the section if it's closed
      }
      return newSections;
    });
  };

  return (
    <section
      className="py-16 px-6 relative bg-cover bg-center bg-no-repeat"
      // style={{ backgroundImage: `url(${foodImg})` }}
    >
      <div className="absolute inset-0 bg-black/50"></div>

      {/* // <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat">
    //   <div className="absolute inset-0 bg-black bg-opacity-50"></div> */}

      {/* Dark overlay for better readability */}

      <div className="relative max-w-4xl mx-auto text-white animate-zoomIn">
        <h2 className="text-4xl font-bold text-center tracking-wide mb-2 font-serif  ">
          Our Menu
        </h2>
        <p className="text-center text-sm mb-6 font-serif">
          Who doesn’t love good food?
        </p>

        <div className="space-y-6 ">
          {["dinner", "breakfast", "lunch"].map((section) => (
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
                    <CookingPot className="w-6 h-6 mr-2 text-pink-500" />
                  )}
                  {section === "dinner" && (
                    <HandPlatter className="w-6 h-6 mr-2 text-pink-500" />
                  )}
                  {menuData[section as keyof MenuData].title}
                  <div className="ml-2 text-right text-sm">
                    {section === "breakfast" && (
                      <p>
                        (6<sup>th</sup> March)
                      </p>
                    )}
                    {section === "lunch" && (
                      <p>
                        (6<sup>th</sup> March)
                      </p>
                    )}
                    {section === "dinner" && (
                      <p>
                        (5<sup>th</sup> March)
                      </p>
                    )}
                  </div>
                </div>
                <ChevronDown
                  className={`w-6 h-6 transition-transform duration-300 ${
                    openSections.has(
                      section as "breakfast" | "lunch" | "dinner"
                    )
                      ? "rotate-180"
                      : ""
                  }`}
                />
              </button>
              {openSections.has(
                section as "breakfast" | "lunch" | "dinner"
              ) && (
                <div className="mt-4 space-y-4 text-gray-800 text-lg animate-zoomIn">
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
