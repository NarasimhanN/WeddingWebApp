import { Clock, MapPin } from "lucide-react";
import bgImage from "../data/images/EngagementCouplePic-hd3.png"; // Same image
import AddToCalendarButton from "../Components/AddToCalander";

export default function EventDetailsSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-white px-4 text-center animate-zoomIn">
        <h2 className="text-3xl font-bold mb-2 text-center font-serif">
          Event Details
        </h2>
        <p className="text-center text-sm mb-6 font-serif">
          The ‘when’ and ‘where’—because ‘winging it’ isn’t an option!
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md bg-opacity-80 text-black">
            <div className="flex items-center justify-center space-x-2 ">
              <Clock className="w-8 h-8 text-pink-500" />
              <h3 className="text-xl font-semibold text-center">Schedule</h3>
            </div>

            <br />
            <h4 className=" font-bold "> Reception</h4>
            <h5>
              {" "}
              7:00 PM on 5<sup>th</sup> March (Wed)
            </h5>
            <h4 className="font-bold"> Muhurtham</h4>
            <h5>
              {" "}
              11:10 AM on 6<sup>th</sup> March (Thu){" "}
            </h5>
            <br />
            <AddToCalendarButton />
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md bg-opacity-80 text-black">
            {" "}
            <div className="flex items-center justify-center space-x-2">
              <MapPin className="w-8 h-8 text-pink-500" />
              <h3 className="text-xl font-semibold text-center">Venue</h3>
            </div>
            <br />
            <p className="font-bold">Balan Orchard</p>
            <p>Near Brigade Millenium, JP Nagar</p>
            <p>
              {" "}
              <br />
              <a
                href="https://maps.app.goo.gl/w9moeWQdUQ8DtM3ZA"
                className="text-pink-500 hover:underline hover:text-blue-800 transition-all duration-200 ease-in-out"
              >
                View on Google Maps
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
