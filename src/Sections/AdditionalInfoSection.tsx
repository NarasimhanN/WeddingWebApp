import { Phone, Camera } from "lucide-react";
import PhoneNo from "../Components/Phoneno";

export default function AdditionalInfoSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">
          Additional Information
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <Camera className="w-8 h-8 mb-4 text-pink-500" />
            <h3 className="text-xl font-semibold mb-2">Share Your Photos</h3>
            <p className="mb-4">
              We'd love to see your photos from our special day! Please upload
              them to our shared album:
            </p>
            <a
              href="https://drive.google.com/drive/folders/zxk5d6Lv6vzRp8ZiCmcvNwS_UMro_fs8?usp=drive_link"
              className="inline-flex items-center text-pink-500 hover:text-pink-600"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="underline">Upload Your Photos</span>
            </a>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <Phone className="w-8 h-8 mb-4 text-pink-500" />
            <h3 className="text-xl font-semibold mb-2">Emergency Contacts</h3>
            <p className="mb-2">
              Stuck somewhere? Need help? For any assistance, contact:
            </p>
            <ul className="space-y-2">
              <li>
                Karthik <PhoneNo phoneNo="9482840533" />
              </li>
              <li>
                Manas <PhoneNo phoneNo="9482840533" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
