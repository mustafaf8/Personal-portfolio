import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [prevScrollY, setPrevScrollY] = useState(0);
  const threshold = 50; // Kaydırma eşiği (50px)

  // Kaydırma olayını dinlemek için useEffect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Eşik değeri kontrolü: Küçük kaydırmalar dikkate alınmaz
      if (Math.abs(currentScrollY - prevScrollY) > threshold) {
        if (currentScrollY > prevScrollY) {
          setScrollDirection("down"); // Aşağı kaydırılıyor
        } else {
          setScrollDirection("up"); // Yukarı kaydırılıyor
        }
        setPrevScrollY(currentScrollY); // Önceki pozisyonu güncelle
      }
    };

    window.addEventListener("scroll", handleScroll);
    // Temizlik fonksiyonu: Event listener'ı kaldırır
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  return (
    <nav
      className={`fixed top-5 left-0 w-full bg-secondary/70 backdrop-blur-xs rounded-b-2xl z-30 shadow-lg transition-transform duration-300 ease-in-out ${
        scrollDirection === "down" && !isOpen
          ? "-translate-y-25"
          : "translate-y-0"
      }`}
    >
      <div className="container mx-auto px-10 py-5 flex justify-between items-center">
        <h1 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-orange-100 via-purple-400 to-blue-400 transition-colors duration-100 ease-in-out max-[768px]:text-[15px]">
          Mustafa Nahsan
        </h1>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="focus:outline-none text-white relative w-8 h-8"
          >
            <span
              className={`absolute top-2 left-0 w-6 h-1 bg-purple-400 rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "translate-y-1" : ""
              }`}
            />
            <span
              className={`absolute top-4 left-0 w-5 h-1 bg-purple-400 rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "translate-y-0" : ""
              }`}
            />
            <span
              className={`absolute top-6 left-0 w-4 h-1 bg-purple-400 rounded-full transition-all duration-300 ease-in-out ${
                isOpen ? "-translate-y-1" : ""
              }`}
            />
          </button>
        </div>

        <ul
          className={`md:flex space-x-6 ${
            isOpen
              ? "block absolute top-full left-0 w-full bg-secondary/80 backdrop-blur-md p-4 pl-10 rounded-b-2xl"
              : "hidden"
          } md:block`}
        >
          <li>
            <a
              href="/"
              className="block py-2 md:py-0 hover-gradient-text transition-colors duration-400 ease-in-out"
            >
              Ana Sayfa
            </a>
          </li>
          <li>
            <a
              href="/about"
              className="block py-2 md:py-0 hover-gradient-text transition-colors duration-400 ease-in-out"
            >
              Hakkımda
            </a>
          </li>
          <li>
            <a
              href="/services"
              className="block py-2 md:py-0 hover-gradient-text transition-colors duration-400 ease-in-out"
            >
              Hizmetler
            </a>
          </li>
          <li>
            <a
              href="/portfolio"
              className="block py-2 md:py-0 hover-gradient-text transition-colors duration-400 ease-in-out"
            >
              Portföy
            </a>
          </li>
          <li>
            <a
              href="/contact"
              className="block py-2 md:py-0 hover-gradient-text transition-colors duration-400 ease-in-out"
            >
              İletişim
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
