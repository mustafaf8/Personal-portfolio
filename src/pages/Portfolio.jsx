import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Portfolio = () => {
  // Loading state
  const [loading, setLoading] = useState(true);

  // Loading ekranını 1.5 saniye sonra gizle
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  // Kategorileri tanımla
  const categories = ["Tümü", "Web", "Mobil", "UI/UX", "Grafik"];
  const [activeCategory, setActiveCategory] = useState("Tümü");

  // Örnek portföy projelerini tanımla
  const projects = [
    {
      id: 1,
      title: "E-Ticaret Web Sitesi",
      category: "Web",
      image: "src/assets/img/ecommarce.png",
      description:
        "Modern bir e-ticaret platformu için responsive tasarım ve geliştirme.",
      technologies: ["React", "Node.js", "MS SQL"],
    },
    {
      id: 2,
      title: "Mobil Fitness Uygulaması",
      category: "Mobil",
      image: "src/assets/img/eavukat1.png",
      description: "Fitness ve kalori takibi için kapsamlı bir mobil uygulama.",
      technologies: ["Flutter", "Firebase"],
      link: "https://github.com/mustafaf8/Fitfusion",
    },
    {
      id: 3,
      title: "Kurumsal Kimlik Tasarımı",
      category: "Grafik",
      image: "src/assets/img/uiux.png",
      description:
        "Bir teknoloji şirketi için tam kapsamlı kurumsal kimlik tasarımı.",
      technologies: ["Illustrator", "Photoshop"],
    },
    {
      id: 4,
      title: "Finansal Dashboard UI",
      category: "UI/UX",
      image: "src/assets/img/dashbord.png",
      description:
        "Finans uygulaması için kullanıcı dostu dashboard arayüzü tasarımı.",
      technologies: ["Figma", "Adobe XD"],
    },
    {
      id: 5,
      title: "Blog Platformu",
      category: "Web",
      image: "src/assets/img/cafe.png",
      description:
        "İçerik üreticileri için modern blog platformu geliştirmesi.",
      technologies: ["React", "GraphQL", "Tailwind CSS"],
      link: "https://cafe-83756.web.app/",
    },
    {
      id: 6,
      title: "Avukatlık Uygulaması",
      category: "Mobil",
      image: "src/assets/img/eavukat.png",
      description:
        "Davaların kolay çözümlenmsine yardımcı avukatlık uygulaması.",
      technologies: ["Flutter", "Firebase"],
      link: "https://github.com/mustafaf8/E-Avukat",
    },
  ];

  // Projeleri filtreleme fonksiyonu
  const filteredProjects =
    activeCategory === "Tümü"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  // useInView hook'ları
  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [catRef, catInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });
  const [gridRef, gridInView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  const [ctaRef, ctaInView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black">
          <div className="w-24 h-24 border-t-4 border-l-4 border-purple-500 rounded-full animate-spin"></div>
        </div>
      )}

      <div className="min-h-screen py-20 px-4 md:px-8 lg:px-16 bg-gradient-to-br from-black via-purple-950/20 to-black">
        {/* Başlık Bölümü */}
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView && !loading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 pt-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-orange-100 via-purple-400 to-blue-800">
            Portföyüm
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={!loading ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg text-gray-300 max-w-2xl mx-auto"
          >
            Geliştirdiğim projeler ve tasarım çalışmalarımdan bir seçki. Her
            projeye tıklayarak daha detaylı bilgiye ulaşabilirsiniz.
          </motion.p>
        </motion.div>

        {/* Kategori Filtreleri */}
        <motion.div
          ref={catRef}
          initial={{ opacity: 0, y: 20 }}
          animate={catInView && !loading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full transition-all duration-300 ${
                activeCategory === category
                  ? "bg-primary text-white"
                  : "bg-secondary/70 text-gray-300 hover:bg-primary/30"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projeler Grid */}
        <motion.div
          ref={gridRef}
          initial={{ opacity: 0, y: 20 }}
          animate={gridInView && !loading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-secondary/50 backdrop-blur-sm rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/20 transition-all duration-300 hover:-translate-y-2"
            >
              {/* Proje Resmi */}
              <div className="relative overflow-hidden h-56">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-80"></div>
                <span className="absolute top-4 right-4 bg-primary/80 text-white text-sm px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* Proje Bilgileri */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>

                {/* Teknolojiler */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs bg-purple-900/50 text-purple-200 px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Detay Butonu */}
                <a
                  href={project.link}
                  className=" inline-block bg-gradient-to-r from-purple-500 to-blue-600 text-white px-4 py-1 rounded-full hover:from-purple-600 hover:to-blue-700 transition-colors duration-300"
                  target="_blank"
                >
                  Detayları Gör
                </a>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Uyarı: Hiç Proje Yoksa */}
        {!loading && filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <p className="text-xl text-gray-400">
              Bu kategoride henüz proje bulunmamaktadır.
            </p>
          </motion.div>
        )}

        {/* İletişim CTA */}
        <motion.div
          ref={ctaRef}
          initial={{ opacity: 0, y: 40 }}
          animate={ctaInView && !loading ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-20 text-center bg-secondary/30 backdrop-blur-sm p-8 md:p-12 rounded-2xl"
        >
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white">
            Beraber Çalışmak İster misiniz?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Yeni bir proje fikriniz mi var? Vizyonunuzu hayata geçirmenize
            yardımcı olabilirim. Hemen iletişime geçin ve neler yapabileceğimizi
            konuşalım.
          </p>
          <a
            href="/contact"
            className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-blue-700 transition-colors duration-300"
          >
            İletişime Geç
          </a>
        </motion.div>
      </div>
    </>
  );
};

export default Portfolio;
