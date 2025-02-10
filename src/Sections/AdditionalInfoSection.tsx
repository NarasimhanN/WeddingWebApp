import { Phone, Camera } from "lucide-react";
import PhoneNo from "../Components/Phoneno";

export default function AdditionalInfoSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat ">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-white px-4 text-center animate-zoomIn">
        <h2 className="text-3xl font-bold mb-12 text-center font-serif">
          Additional Information
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {/* Share Your Photos */}
          <div className="bg-white p-6 rounded-lg shadow-md bg-opacity-80 text-black">
            <div className="flex items-center justify-center space-x-2">
              <Camera className="w-8 h-8 text-pink-500" />
              <h3 className="text-xl font-semibold">Share Your Photos</h3>
            </div>
            <p className="mb-4">
              We'd love to see your photos from our special day! Please upload
              them to our shared album:
            </p>
            <a
              href="https://drive.google.com/drive/folders/1zxk5d6Lv6vzRp8ZiCmcvNwS_UMro_fs8?usp=drive_link"
              className="inline-flex items-center text-pink-500 hover:text-pink-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="underline">Upload Your Photos</span>
            </a>
          </div>

          {/* Lost? Confused? Hungry? */}
          <div className="bg-white p-6 rounded-lg shadow-md bg-opacity-80 text-black">
            <div className="flex items-center justify-center space-x-2">
              <Phone className="w-8 h-8 text-pink-500" />
              <h3 className="text-xl font-semibold">Lost? Confused? Hungry?</h3>
            </div>
            <p className="mb-2">Call us immediately, we’ve got you covered.</p>
            <ul className="space-y-2">
              <li>
                Karthik <PhoneNo phoneNo="7019487545" />
              </li>
              <li>
                Manas <PhoneNo phoneNo="8618493115" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
