export default function EventDetailsSection() {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center">
      <p>Riya & Simha's Wedding</p>
      <p className="text-sm mt-1">
        This is a static website developed using React and deployed on Netify.
        Source code available on{" "}
        <a
          href="https://github.com/NarasimhanN/WeddingWebApp/tree/main"
          className="text-pink-500 hover:text-pink-600 mt-2 inline-block"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </a>
      </p>
    </footer>
  );
}
