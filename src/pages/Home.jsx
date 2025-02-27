import React from "react";

const Home = () => {
  return (
    <div className="relative min-h-screen">
      {/* Tam ekran arka plan */}
      <div
        className="fixed top-0 left-0 w-full h-full z-[-1]"
        style={{
          background: "linear-gradient(45deg, #000000, #ff69b4, #000000)",
          backgroundSize: "400% 400%",
          animation: "float 15s ease infinite",
        }}
      ></div>
      {/* Ana içerik */}
      <div className="flex items-center justify-center min-h-screen text-white px-4">
        <div className="text-center space-y-6 max-w-2xl">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            Merhaba, Ben <span className="text-primary">Adınız</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 italic animate-pulse">
            Yaratıcı Web Tasarımları ve Fonksiyonel Çözümler Sunuyorum
          </p>
          <a
            href="/portfolio"
            className="inline-block bg-primary text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-secondary hover:scale-105 transition-transform duration-300"
          >
            Projelerimi Gör
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
