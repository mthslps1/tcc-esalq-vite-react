import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BlurImage } from "./components/BlurImage";

// Import local images
// import image1 from "./assets/images/webp/photo-1501785888041-af3ef285b470.webp";
// import image2 from "./assets/images/webp/photo-1465101046530-73398c7f28ca.webp";
// import image3 from "./assets/images/webp/photo-1507525428034-b723cf961d3e.webp";
// import image4 from "./assets/images/webp/photo-1469474968028-56623f02e42e.webp";
// import image5 from "./assets/images/webp/photo-1500534314209-a25ddb2bd429.webp";
// import image6 from "./assets/images/webp/photo-1444065381814-865dc9da92c0.webp";
// import image7 from "./assets/images/webp/photo-1464820453369-31d2c0b651af.webp";
// import image8 from "./assets/images/webp/photo-1506744038136-46273834b3fb.webp";
// import image9 from "./assets/images/webp/photo-1502082553048-f009c37129b9.webp";

const homeImages = [
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470?",
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?",
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?",
  "https://images.unsplash.com/photo-1469474968028-56623f02e42e?",
  "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?",
  "https://images.unsplash.com/photo-1444065381814-865dc9da92c0?",
  "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?",
  "https://images.unsplash.com/photo-1506744038136-46273834b3fb?",
  "https://images.unsplash.com/photo-1502082553048-f009c37129b9?",
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen w-full bg-gray-50 text-gray-900 font-sans">
    <nav className="p-4 md:p-6 flex justify-between items-center bg-white shadow-md rounded-b-2xl mb-8">
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl font-extrabold tracking-tight text-indigo-600 transition-transform duration-200 hover:scale-105"
      >
        <span className="material-icons text-indigo-500 text-3xl align-middle">
          photo_camera
        </span>
        <span>PhotoFolio</span>
      </Link>
      <div className="flex items-center gap-2 md:gap-4">
        <Link
          to="/about"
          className="px-4 py-2 rounded-lg text-md font-medium text-indigo-700 bg-indigo-50 hover:bg-indigo-100 shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-indigo-400"
        >
          Sobre
        </Link>
        <Link
          to="/contact"
          className="px-4 py-2 rounded-lg text-md font-medium text-pink-700 bg-pink-50 hover:bg-pink-100 shadow-sm transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-pink-400"
        >
          Contato
        </Link>
      </div>
    </nav>
    <main className="p-4 md:p-8 max-w-5xl mx-auto">{children}</main>
  </div>
);

const Home = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="w-full flex flex-col justify-center items-center"
  >
    <h1 className="">Portfólio Minimalista de Fotografia</h1>
    <p className="text-lg text-gray-600 max-w-2xl mb-10 text-center">
      Capturando momentos reais com uma estética atemporal. Navegue por
      trabalhos selecionados e conheça as histórias por trás deles.
    </p>
    <div className="max-w-5xl w-full grid grid-cols-2 gap-8 justify-items-center items-center mx-auto">
      {homeImages.map((src, i) => (
        <div
          key={i}
          className="overflow-hidden rounded-2xl shadow-lg bg-white flex flex-col items-center hover:shadow-2xl transition-shadow duration-300"
        >
          <img
            src={src + "&fm=avif"}
            alt={`Home Gallery Image ${i + 1}`}
            width={800}
            height={500}
            className="w-64 h-40"
          />
        </div>
      ))}
    </div>
  </motion.div>
);

const About = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8"
  >
    <h2 className="text-3xl font-semibold mb-4 text-indigo-700">Sobre Mim</h2>
    <p className="text-gray-700 text-lg">
      Sou um fotógrafo baseado em Tóquio, focado em capturar a sutil interação
      entre luz, sombra e emoção. Com formação em design e narrativa, meu
      trabalho mistura minimalismo e realidade crua.
    </p>
  </motion.div>
);

const Contact = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-8"
  >
    <h2 className="text-3xl font-semibold mb-4 text-pink-700">Contato</h2>
    <p className="text-gray-700 mb-4 text-lg">
      Fique à vontade para entrar em contato para colaborações ou impressões.
    </p>
    <a
      href="mailto:you@example.com"
      className="inline-block bg-indigo-600 text-white py-2 px-6 rounded-lg shadow-md hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
    >
      Envie-me um e-mail
    </a>
  </motion.div>
);

export default function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Layout>
    </Router>
  );
}
