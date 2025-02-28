import React from "react";
import { useInView } from "react-intersection-observer";

const FaqItem = ({ faq, index, activeFaq, toggleFaq }) => {
  const [ref, inView] = useInView({ threshold: 0.2, triggerOnce: true });

  return (
    <div
      ref={ref}
      className={`bg-secondary/50 rounded-xl overflow-hidden ${
        inView ? `animate-fade-in-left delay-${index * 100}` : "opacity-0"
      }`}
    >
      <button
        className="w-full p-6 text-left flex justify-between items-center"
        onClick={() => toggleFaq(faq.id)}
      >
        <h3 className="text-lg font-semibold text-white">{faq.question}</h3>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`w-5 h-5 transition-transform duration-300 ${
            activeFaq === faq.id ? "rotate-180 text-primary" : "text-purple-400"
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {activeFaq === faq.id && (
        <div className="p-6 pt-0 text-gray-300 animate-fade-in">
          <p>{faq.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FaqItem;
