import { motion } from "framer-motion";

export default function Portfolio() {
  const works = [
    { title: "YouTube Thumbnails", img: "/thumb1.jpg" },
    { title: "Instagram Posts", img: "/social1.jpg" },
    { title: "Logo Design", img: "/logo1.jpg" },
    { title: "Custom Posters", img: "/poster1.jpg" },
  ];

  return (
    <div className="min-h-screen bg-primary-dark text-white font-sans">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-end items-center text-center px-6 pb-24 overflow-hidden">
        {/* 1. Background Photo Layer */}
        <div
          className="absolute inset-0 bg-contain bg-no-repeat bg-center bg-[rgb(2,3,5,0.8)] opacity-80"
          style={{ backgroundImage: 'url("/your-hero-photo.jpg")' }}
        ></div>

        {/* Gradient Overlay Layer */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, transparent 40%, rgba(2,3,5,0.8) 80%, rgba(2,3,5,0.9) 85%, rgba(2,3,5,1) 100%)",
          }}
        ></div>

        {/* 3. Content */}
        <motion.h1
          className="relative z-10 text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hi, I'm Ashen Ravindu
        </motion.h1>
        <motion.p
          className="relative z-10 text-xl text-gray-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          Creative Designer
        </motion.p>
        <a
          href="#portfolio"
          className="relative z-10 bg-white text-gray-900 font-bold rounded-2xl px-8 py-3 text-lg hover:bg-gray-200 transition-colors"
        >
          View My Work
        </a>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="px-8 py-16 bg-[rgb(12,14,18)]">
        <h2 className="text-3xl font-semibold text-center mb-12">
          My Portfolio
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {works.map((work, i) => (
            <a
              key={i}
              href="#" // <-- TODO: Replace with real project link
              target="_blank"
              rel="noopener noreferrer"
              className="block" // Added for better link behavior
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <div className="overflow-hidden bg-[rgb(20,22,26)] border border-gray-700 rounded-lg">
                  <img
                    src={work.img}
                    alt={work.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-medium mt-1">{work.title}</h3>
                  </div>
                </div>
              </motion.div>
            </a>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">About Me</h2>
        <p className="max-w-2xl mx-auto text-gray-300">
          I'm a freelance designer passionate about creating eye-catching
          designs for YouTube, TikTok, Instagram, and brands. I specialize in
          thumbnails, social media content, and branding that helps creators
          stand out.
        </p>
      </section>

      {/* Services Section */}
      <section className="px-8 py-16 bg-[rgb(12,14,18)] text-center">
        <h2 className="text-3xl font-semibold mb-12">Services</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {["Thumbnail Design", "Social Media Graphics", "Logo & Branding"].map(
            (service, i) => (
              <div
                key={i}
                className="bg-[rgb(20,22,26)] border border-gray-700 p-6 rounded-lg"
              >
                <h3 className="text-xl font-medium">{service}</h3>
              </div>
            )
          )}
        </div>
      </section>

      {/* Contact Section */}
      <section className="px-8 py-16 text-center">
        <h2 className="text-3xl font-semibold mb-6">Contact Me</h2>
        <p className="text-gray-300 mb-6">Let’s work together! Reach me via:</p>
        <div className="flex justify-center gap-6">
          <a
            href="https://linktr.ee/ashen_ravindu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(20,22,26)] text-white font-semibold rounded-lg px-5 py-2 hover:bg-gray-600 transition-colors"
          >
            My Social Networks
          </a>
          <a
            href="https://www.linkedin.com/in/ashenravindu/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(20,22,26)] text-white font-semibold rounded-lg px-5 py-2 hover:bg-gray-600 transition-colors"
          >
            Linkedin
          </a>
          <a
            href="https://www.tiktok.com/@design_by_ashen"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[rgb(20,22,26)] text-white font-semibold rounded-lg px-5 py-2 hover:bg-gray-600 transition-colors"
          >
            TikTok
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 text-center text-gray-500 border-t border-gray-800">
        © {new Date().getFullYear()} Ashen Ravindu. All rights reserved.
      </footer>
    </div>
  );
}
