import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Animation component to handle scroll animations
const AnimatedSection = ({ children, className, delay = 0 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 1, delay: delay }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 30 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

const About = () => {
  // State for loading screen
  const [loading, setLoading] = useState(true);

  // Hide loading screen after 1.5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Loading Animation */}
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

      <div className="relative min-h-screen bg-black text-white pt-20">
        {/* Hero Section with Dark Background */}
        <section className="relative pt-20 pb-12 mt-10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <AnimatedSection className="md:w-1/2 mb-8 md:mb-0" delay={1.5}>
                <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600">
                  Hakkımda{" "}
                </h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={!loading ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-lg text-gray-300 max-w-2xl mx-auto"
                >
                  bir software developer olarak dijital dünyada yaratıcı
                  çözümler sunuyorum. Modern teknolojileri kullanarak kullanıcı
                  odaklı etkileyici deneyimler ve çözümler oluşturmak için
                  çalışıyorum.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={!loading ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="text-lg text-gray-300 max-w-2xl mx-auto"
                >
                  Her projede kullanıcı deneyimini ön planda tutarak, hem görsel
                  açıdan çekici hem de fonksiyonel açıdan güçlü ürünler
                  geliştirmeyi hedefliyorum. Sürekli gelişen teknoloji
                  dünyasında kendimi güncel tutarak, her zaman en iyi çözümleri
                  sunmaya çalışıyorum.
                </motion.p>

                <div className="flex space-x-4 mt-8">
                  <motion.a
                    href="/contact"
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-blue-700 transition-colors duration-300"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    İletişime Geç
                  </motion.a>
                  <motion.a
                    href="/portfolio"
                    initial={{ x: 100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-blue-700 transition-colors duration-300"
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Projelerimi Gör
                  </motion.a>
                </div>
              </AnimatedSection>
              <AnimatedSection className="md:w-1/2 md:pl-12" delay={0.4}>
                <div className="relative">
                  <motion.div
                    className="bg-purple-500/40 w-64 h-64 md:w-80 md:h-80 rounded-full absolute top-0 left-0 pointer-events-none"
                    animate={{ scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  ></motion.div>
                  <motion.img
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    src="/assets/img/potfoypic.png"
                    alt="Mustafa Nahsan"
                    className="relative z-10 rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 [transform:scalex(-1)] border-purple-600/80"
                  />
                  <motion.div
                    className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600/60 rounded-full pointer-events-none"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
                  ></motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16 bg-gradient-to-b from-black via-purple-950/20 to-black mt-30">
          <div className="container mx-auto px-4">
            <AnimatedSection delay={0.3}>
              <h2 className="text-3xl font-bold mb-12 text-center text-white">
                Yeteneklerim{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  & Uzmanlıklarım
                </span>
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Skill Card 1 */}
              <AnimatedSection delay={0.1}>
                <motion.div
                  className="bg-black/50 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.2)",
                  }}
                >
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Tasarım
                  </h3>
                  <p className="text-gray-300">
                    Kullanıcı dostu ve modern arayüzler tasarlayarak dijital
                    deneyimleri geliştiriyor, yenilikçi çözümler sunuyorum.
                  </p>
                </motion.div>
              </AnimatedSection>

              {/* Skill Card 2 */}
              <AnimatedSection delay={0.3}>
                <motion.div
                  className="bg-black/50 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.2)",
                  }}
                >
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Frontend Geliştirme
                  </h3>
                  <p className="text-gray-300">
                    React, Vue ve modern JavaScript kütüphaneleri ile responsive
                    ve performanslı web uygulamaları geliştiriyorum.
                  </p>
                </motion.div>
              </AnimatedSection>

              {/* Skill Card 3 */}
              <AnimatedSection delay={0.5}>
                <motion.div
                  className="bg-black/50 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 15px -3px rgba(139, 92, 246, 0.2)",
                  }}
                >
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl mb-4 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-purple-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    Backend Teknolojileri
                  </h3>
                  <p className="text-gray-300">
                    Node.js, Express ve veritabanı teknolojileri ile güvenli,
                    ölçeklenebilir ve yüksek performanslı API'lar
                    geliştiriyorum.
                  </p>
                </motion.div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl font-bold mb-12 text-center text-white">
                Eğitim{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                  & Deneyim
                </span>
              </h2>
            </AnimatedSection>
            <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
              {/* Timeline Item 1 */}
              <AnimatedSection delay={0.2}>
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-purple-500 pointer-events-none"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                    ></motion.div>
                    <motion.div
                      className="h-full w-0.5 bg-purple-500/30 pointer-events-none"
                      initial={{ scaleY: 0, originY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    ></motion.div>
                  </div>
                  <motion.div
                    className="bg-black/50 p-6 rounded-xl border border-purple-500/30 flex-1"
                    whileHover={{
                      boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                      borderColor: "rgba(139, 92, 246, 0.5)",
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        Software Developer
                      </h3>
                      <span className="text-purple-400">
                        2025 - &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      </span>
                    </div>
                    <p className="text-gray-300 mb-1">RMR Enerji</p>
                    <p className="text-gray-400">
                      Modern yazılım uygulamaları geliştirme, takım liderliği ve
                      müşteri iletişimi konusunda sorumluluk aldım.
                    </p>
                  </motion.div>
                </div>
              </AnimatedSection>

              {/* Timeline Item 2 */}
              <AnimatedSection delay={0.3}>
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-purple-500 pointer-events-none"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    ></motion.div>
                    <motion.div
                      className="h-full w-0.5 bg-purple-500/30 pointer-events-none"
                      initial={{ scaleY: 0, originY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    ></motion.div>
                  </div>
                  <motion.div
                    className="bg-black/50 p-6 rounded-xl border border-purple-500/30 flex-1"
                    whileHover={{
                      boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                      borderColor: "rgba(139, 92, 246, 0.5)",
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        Web Geliştirici
                      </h3>
                      <span className="text-purple-400">2024 - 2025</span>
                    </div>
                    <p className="text-gray-300 mb-1">Pressday</p>
                    <p className="text-gray-400">
                      Kurumsal web siteleri ve e-ticaret uygulamaları
                      geliştirdim, müşteri gereksinimlerini analiz ettim.
                    </p>
                  </motion.div>
                </div>
              </AnimatedSection>

              {/* Timeline Item 3 */}
              <AnimatedSection delay={0.4}>
                <div className="flex">
                  <div className="flex flex-col items-center mr-6">
                    <motion.div
                      className="w-4 h-4 rounded-full bg-purple-500 pointer-events-none"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.4 }}
                    ></motion.div>
                    <motion.div
                      className="h-full w-0.5 bg-purple-500/30 pointer-events-none"
                      initial={{ scaleY: 0, originY: 0 }}
                      animate={{ scaleY: 1 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    ></motion.div>
                  </div>
                  <motion.div
                    className="bg-black/50 p-6 rounded-xl border border-purple-500/30 flex-1"
                    whileHover={{
                      boxShadow: "0 4px 15px -3px rgba(139, 92, 246, 0.2)",
                      borderColor: "rgba(139, 92, 246, 0.5)",
                    }}
                  >
                    <div className="flex justify-between mb-2">
                      <h3 className="text-xl font-semibold text-white">
                        Bilgisayar Mühendisliği
                      </h3>
                      <span className="text-purple-400">2021 - 2025</span>
                    </div>
                    <p className="text-gray-300 mb-1">Selçuk Üniversitesi</p>
                    <p className="text-gray-400">
                      Yazılım geliştirme, algoritma ve veri yapıları üzerine
                      kapsamlı eğitim aldım. Bitirme projesi olarak e-öğrenme
                      platformu geliştirdim.
                    </p>
                  </motion.div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
