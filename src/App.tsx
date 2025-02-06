import React from "react";
import {
  Heart,
  Clock,
  MapPin,
  Coffee,
  UtensilsCrossed,
  Wine,
  Music,
  Phone,
  Camera,
} from "lucide-react";
import { menuData } from "./data/menu";
import bgImage from "./data/images/EngagementCouplePic-4.png"; // Adjust path accordingly
import FoodSection from "../src/Sections/MenuSection"; // Adjust path as needed
import venueDetails from "../src/data/venueDetails";

function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Welcome Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div
          className="absolute inset-1 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
        <div className="relative text-center text-white px-4">
          {/* <Heart className="w-12 h-12 mx-auto mb-6 text-pink-400" /> */}
          <p className="text-l md:text-2xl">
            With hearts full of joy and love, we{" "}
          </p>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Riya Athreya & Narasimhan N
          </h1>
          {/* <p className="text-xl md:text-2xl">are getting married!!</p> */}
          <p className="text-l md:text-2xl">
            welcome you to our wedding where every smile, every laugh, and every
            moment becomes a cherished memory. Bless us as we begin this eternal
            journey
          </p>

          <p className="text-lg mt-4">March 4-5 2025</p>
        </div>
      </section>

      {/* Event Details Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Event Details
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Clock className="w-8 h-8 mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">Schedule</h3>
              <h4 className=" font-bold"> Reception</h4>
              <h5> 7:00 PM on 5th March (Wed)</h5>
              <h4 className="font-bold"> Muhurtham</h4>
              <h5> 11:10 AM on 6th March (Thu) </h5>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <MapPin className="w-8 h-8 mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">Venue</h3>
              <p className="font-bold">Balan Orchide</p>
              <p>Nataraja Layot</p>
              <p>JP Nagar, BNG 560078</p>
              <a
                href="https://maps.app.goo.gl/w9moeWQdUQ8DtM3ZA"
                className="text-pink-500 hover:text-pink-600 mt-2 inline-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on Maps
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className=" bg-white">
        <FoodSection menuData={menuData} />
      </div>

      {/* Menu Section */}

      {/* <section
        className="py-20 px-4 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${foodImg})`,
        }}
      >
      /</div>
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative max-w-4xl mx-auto text-white">
          <h2 className="text-3xl font-bold text-center mb-12">Menu</h2>
          <div className="space-y-12">
            <div className="bg-white p-6 rounded-lg shadow-md bg-opacity-80">
              <div className="flex items-center mb-4">
                <Coffee className="w-6 h-6 mr-2 text-pink-500" />
                <h3 className="text-xl font-semibold">
                  {menuData.breakfast.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {menuData.breakfast.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md bg-opacity-80">
              <div className="flex items-center mb-4">
                <UtensilsCrossed className="w-6 h-6 mr-2 text-pink-500" />
                <h3 className="text-xl font-semibold">
                  {menuData.lunch.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {menuData.lunch.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md bg-opacity-80">
              <div className="flex items-center mb-4">
                <Wine className="w-6 h-6 mr-2 text-pink-500" />
                <h3 className="text-xl font-semibold">
                  {menuData.dinner.title}
                </h3>
              </div>
              <ul className="space-y-2">
                {menuData.dinner.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section> */}

      {/* Additional Information Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Additional Information
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Music className="w-8 h-8 mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">Entertainment</h3>
              <p>Live band performance followed by DJ</p>
              <p>Special dance floor activities</p>
              <p>Photo booth available</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">Important Notes</h3>
              <ul className="space-y-2">
                <li>Don't forget to collect your Tambula xD</li>
                <li>Parking available on-site - vale for reception</li>
                <li>Gift registry information available upon request</li>
                <li>Please RSVP by July 15, 2024</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Phone className="w-8 h-8 mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">
                Contact Information
              </h3>
              <p className="mb-2">
                For any questions or assistance, please contact:
              </p>
              <ul className="space-y-2">
                <li>Wedding Coordinator: Jane Smith</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: coordinator@wedding.com</li>
              </ul>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Camera className="w-8 h-8 mb-4 text-pink-500" />
              <h3 className="text-xl font-semibold mb-2">Share Your Photos</h3>
              <p className="mb-4">
                We'd love to see your photos from our special day! Please upload
                them to our shared album:
              </p>
              <a
                href="https://drive.google.com/drive/folders/wedding-photos"
                className="inline-flex items-center text-pink-500 hover:text-pink-600"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="underline">Upload Your Photos</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 text-center">
        <p>Riya & Simha's Wedding</p>
        <p className="text-sm mt-2">
          This website is developed using React and deployed on Netify.
        </p>
      </footer>
    </div>
  );
}

export default App;
