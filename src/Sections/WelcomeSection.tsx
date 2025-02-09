import bgImage from "../data/images/EngagementCouplePic-hd3.png"; // Adjust path accordingly

export default function WelcomeSection() {
  return (
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
        <br /> <br />
        <p className="text-l md:text-2xl mt-40">
          With hearts full of joy and love, we{" "}
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Riya Athreya <br />& <br />
          Narasimhan N
        </h1>
        <p className="text-l md:text-2xl">
          Welcome you to our wedding where every smile, every laugh, and every
          moment becomes a cherished memory. Bless us as we begin this eternal
          journey
        </p>
        <p className="text-lg mt-4">March 5th & 6th, 2025</p>
      </div>
    </section>
  );
}
