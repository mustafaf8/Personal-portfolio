import React from "react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white p-4 text-center">
      <p>&copy; 2023 Your Name. All rights reserved.</p>
      <div className="mt-2">
        <a href="#" className="mx-2 hover:text-primary">
          LinkedIn
        </a>
        <a href="#" className="mx-2 hover:text-primary">
          GitHub
        </a>
        <a href="#" className="mx-2 hover:text-primary">
          Twitter
        </a>
      </div>
    </footer>
  );
};

export default Footer;
