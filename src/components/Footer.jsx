import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6 border-t border-purple-900/30">
      <div className="container mx-auto text-center">
        <p className="text-gray-300">© 2023 Your Name. All rights reserved.</p>
        <div className="mt-4 flex justify-center space-x-6">
          <a
            href="#"
            className="text-purple-400 hover:text-blue-400 transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="#"
            className="text-purple-400 hover:text-blue-400 transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="#"
            className="text-purple-400 hover:text-blue-400 transition-colors duration-300"
          >
            Twitter
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
