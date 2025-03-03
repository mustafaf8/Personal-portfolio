import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { db } from "./../firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = () => {
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Add message to Firestore under 'users' collection with email as document ID
      await addDoc(collection(db, "users", formData.email, "messages"), {
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message,
        timestamp: serverTimestamp(),
      });

      setIsSubmitting(false);
      setSubmitStatus("success");

      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      console.error("Error adding document: ", error);
      setIsSubmitting(false);
      setSubmitStatus("error");
    }
  };

  return (
    <>
      {/* Loading Ekranı */}
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <motion.div
            animate={{
              scale: [1, 1.0, 1],
              rotate: [0, 60, 120, 180, 240, 300, 360],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              repeatType: "loop",
            }}
            className="w-24 h-24 border-t-4 border-l-4 border-purple-500 rounded-full"
          />
        </div>
      )}

      <div className="min-h-screen bg-black text-white relative overflow-hidden">
        {/* Background canvas */}
        <div className="fixed top-0 left-0 w-full h-full bg-black z-[-2]"></div>

        {/* Contact Page Content */}
        <div className="container mx-auto pt-32 pb-20 px-4">
          {/* Header Section */}
          <div className="text-center mb-16">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={!loading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0 }}
              className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-100 via-purple-400 to-blue-800"
            >
              İletişime Geçin
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={!loading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-lg text-gray-300 max-w-2xl mx-auto"
            >
              Yeni fırsatlara ve işbirliklerine her zaman açığım. Formu
              kullanarak veya aşağıdaki platformlardan herhangi biri
              aracılığıyla benimle iletişime geçebilirsiniz.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Section - Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={!loading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              {/* Contact Info Cards */}
              <div className="space-y-4">
                {/* Email Card */}
                <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl flex items-center space-x-3 border border-purple-500/30">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1 text-white">
                      Email
                    </h3>
                    <p className="text-xs text-gray-300">
                      mustafanahsan754@gmail.com
                    </p>
                  </div>
                </div>

                {/* Konum Card */}
                <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl flex items-center space-x-3 border border-purple-500/30">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1 text-white">
                      Konum
                    </h3>
                    <p className="text-xs text-gray-300">Istanbul, Türkiye</p>
                  </div>
                </div>

                {/* Telefon Card */}
                <div className="bg-black/50 backdrop-blur-md p-4 rounded-xl flex items-center space-x-3 border border-purple-500/30">
                  <div className="bg-purple-500/20 p-2 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold mb-1 text-white">
                      Telefon
                    </h3>
                    <p className="text-xs text-gray-300">+90 534 716 8754</p>
                  </div>
                </div>
              </div>

              {/* Social Media Icons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={!loading ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0 }}
                className="mt-8"
              >
                <h3 className="text-sm font-semibold mb-3 text-white">
                  Benimle iletişime Geçin
                </h3>
                <div className="flex space-x-3">
                  <a
                    href="https://www.linkedin.com/in/mustafa-nahsan-a811b2307/"
                    className="bg-purple-500/20 p-2 rounded-lg hover:bg-purple-500/40 transition-colors duration-300"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 16h-2v-6h2v6zm-1-6.891c-.607 0-1.1-.496-1.1-1.109 0-.612.492-1.109 1.1-1.109s1.1.497 1.1 1.109c0 .613-.493 1.109-1.1 1.109zm8 6.891h-1.998v-2.861c0-1.881-2.002-1.722-2.002 0v2.861h-2v-6h2v1.093c.872-1.616 4-1.736 4 1.548v3.359z" />
                    </svg>
                  </a>
                  <a
                    href="https://github.com/mustafaf8"
                    className="bg-purple-500/20 p-2 rounded-lg hover:bg-purple-500/40 transition-colors duration-300"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/mustafa_3dr/profilecard/?igsh=eDVpNGc1YTI4Nmc3" // Kullanıcı adınızı buraya ekleyin
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500/20 p-2 rounded-lg hover:bg-purple-500/40 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7.75 2h8.5A5.25 5.25 0 0121.5 7.25v8.5A5.25 5.25 0 0116.25 21h-8.5A5.25 5.25 0 012.5 15.75v-8.5A5.25 5.25 0 017.75 2zm6.5 2.5a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 00-5 5 5 5 0 0010 0 5 5 0 00-5-5zm0 2a3 3 0 110 6 3 3 0 010-6z" />
                    </svg>
                  </a>
                  <a
                    href="/assets/img/MustafaNahsanCV.pdf"
                    download="Mustafa_Nahsan_CV.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-purple-500/20 p-2 rounded-lg hover:bg-purple-500/40 transition-colors duration-300"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-purple-400"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <text
                        x="50%"
                        y="50%"
                        dominant-baseline="middle"
                        text-anchor="middle"
                        font-size="14"
                        font-weight="bold"
                      >
                        CV
                      </text>
                    </svg>
                  </a>
                </div>
              </motion.div>
            </motion.div>
            {/* Right Section - Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={!loading ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="bg-black/50 backdrop-blur-md p-6 rounded-xl border border-purple-500/30"
            >
              <h2 className="text-2xl font-bold mb-4 text-white">
                Mesaj Gönder
              </h2>

              {submitStatus === "success" && (
                <div className="mb-6 bg-green-500/20 border border-green-500 p-4 rounded-lg">
                  <p className="text-green-400">
                    Your message has been sent successfully! I'll get back to
                    you soon.
                  </p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-1 text-xs font-medium text-gray-300"
                    >
                      Adınız
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-black/70 border border-purple-500/50 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-1 text-xs font-medium text-gray-300"
                    >
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-black/70 border border-purple-500/50 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block mb-1 text-xs font-medium text-gray-300"
                  >
                    Konu
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full bg-black/70 border border-purple-500/50 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block mb-1 text-xs font-medium text-gray-300"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="2"
                    className="w-full bg-black/70 border border-purple-500/50 text-white rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-purple-500 text-xs"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-2 rounded-full hover:from-purple-600 hover:to-blue-700 transition-colors duration-300 flex items-center text-xs"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Gönderiliyor...
                    </>
                  ) : (
                    "Gönder"
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-40 right-10 w-24 h-24 bg-purple-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 left-10 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
      </div>
    </>
  );
};

export default Contact;
