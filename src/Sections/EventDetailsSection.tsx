import { Clock, MapPin } from "lucide-react";

export default function EventDetailsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Event Details</h2>
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
            <p className="font-bold">Balan Orchard</p>
            <p>Nataraja Layot</p>
            <p>JP Nagar-560078</p>
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
  );
}
