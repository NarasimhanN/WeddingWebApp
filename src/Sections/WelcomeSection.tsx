export default function WelcomeSection() {
  return (
    <section className="relative h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      {/* <div className="relative text-center text-white px-4 font-serif"> */}
      <div className="relative text-center text-white px-4 animate-zoomIn">
        <p className="text-l md:text-2xl mt-40">
          With hearts full of joy and love, we
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-serif ">
          Riya Athreya <br />& <br /> Narasimhan N
        </h1>
        <p className="text-l md:text-2xl">
          Welcome you to our wedding, where every moment is a cherished memory.
          Bless us as we begin this journey.
        </p>
        <p className="text-lg mt-4 font-bold ">
          March 5<sup>th</sup> & 6<sup>th</sup>, 2025
        </p>
      </div>
    </section>
  );
}
