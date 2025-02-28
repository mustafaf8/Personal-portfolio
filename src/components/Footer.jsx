import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 border-t border-purple-900/30">
      <div className="container mx-auto text-center">
        <p className="text-gray-300">
          © 2023 Mustafa Nahsan. All rights reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="https://www.linkedin.com/in/mustafa-nahsan-a811b2307/"
            className="text-purple-400 hover:text-blue-400 transition-colors duration-300"
            target="_blank"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/mustafaf8"
            className="text-purple-400 hover:text-blue-400 transition-colors duration-300"
            target="_blank"
          >
            GitHub
          </a>
          <a
            href="https://www.instagram.com/mustafa_3dr/profilecard/?igsh=eDVpNGc1YTI4Nmc3"
            className="text-purple-400 hover:text-blue-400 transition-colors duration-300"
            target="_blank"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
