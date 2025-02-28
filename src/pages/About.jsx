import React from "react";

const About = () => {
  return (
    <div className="relative min-h-screen bg-black text-white pt-20">
      {/* Hero Section with Dark Background */}
      <section className="relative pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-blue-500 to-purple-600">
                Hakkımda{" "}
              </h1>
              <p className="text-lg mb-6 text-gray-300">
                bir web geliştirici ve tasarımcı olarak dijital dünyada yaratıcı
                çözümler sunuyorum. Modern teknolojileri kullanarak kullanıcı
                dostu ve etkileyici web deneyimleri oluşturmak için çalışıyorum.
              </p>
              <p className="text-lg mb-6 text-gray-300">
                Her projede kullanıcı deneyimini ön planda tutarak, hem görsel
                açıdan çekici hem de fonksiyonel açıdan güçlü ürünler
                geliştirmeyi hedefliyorum. Sürekli gelişen teknoloji dünyasında
                kendimi güncel tutarak, her zaman en iyi çözümleri sunmaya
                çalışıyorum.
              </p>
              <div className="flex space-x-4 mt-8">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-blue-700 transition-colors duration-300"
                >
                  İletişime Geç
                </a>
                <a
                  href="/portfolio"
                  className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-6 py-3 rounded-full hover:from-purple-600 hover:to-blue-700 transition-colors duration-300"
                >
                  Projelerimi Gör
                </a>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="relative">
                <div className="bg-purple-500/40 w-64 h-64 md:w-80 md:h-80 rounded-full absolute top-0 left-0"></div>
                <img
                  src="src/assets/img/potfoypic.png"
                  alt="Mustafa Nahsan"
                  className="relative z-10 rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 [transform:scalex(-1)] border-purple-600/80"
                />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-purple-600/60 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-gradient-to-b from-black via-purple-950/20 to-black">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Yeteneklerim{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              & Uzmanlıklarım
            </span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Card 1 */}
            <div className="bg-black/50 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
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
                Web Tasarımı
              </h3>
              <p className="text-gray-300">
                Kullanıcı dostu ve modern arayüzler tasarlayarak dijital
                deneyimleri geliştiriyorum.
              </p>
            </div>

            {/* Skill Card 2 */}
            <div className="bg-black/50 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
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
                React, Vue ve modern JavaScript kütüphaneleri ile responsive ve
                performanslı web uygulamaları geliştiriyorum.
              </p>
            </div>

            {/* Skill Card 3 */}
            <div className="bg-black/50 p-6 rounded-xl border border-purple-500/30 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
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
                Node.js, Express ve veritabanı teknolojileri ile güvenli ve
                ölçeklenebilir API'lar geliştiriyorum.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center text-white">
            Eğitim{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              & Deneyim
            </span>
          </h2>
          <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
            {/* Timeline Item 1 */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <div className="h-full w-0.5 bg-purple-500/30"></div>
              </div>
              <div className="bg-black/50 p-6 rounded-xl border border-purple-500/30 flex-1">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    Kıdemli Web Geliştirici
                  </h3>
                  <span className="text-purple-400">2023 - Günümüz</span>
                </div>
                <p className="text-gray-300 mb-1">XYZ Teknoloji</p>
                <p className="text-gray-400">
                  Modern web uygulamaları geliştirme, takım liderliği ve müşteri
                  iletişimi konusunda sorumluluk aldım.
                </p>
              </div>
            </div>

            {/* Timeline Item 2 */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <div className="h-full w-0.5 bg-purple-500/30"></div>
              </div>
              <div className="bg-black/50 p-6 rounded-xl border border-purple-500/30 flex-1">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    Web Geliştirici
                  </h3>
                  <span className="text-purple-400">2020 - 2023</span>
                </div>
                <p className="text-gray-300 mb-1">ABC Digital Agency</p>
                <p className="text-gray-400">
                  Kurumsal web siteleri ve e-ticaret uygulamaları geliştirdim,
                  müşteri gereksinimlerini analiz ettim.
                </p>
              </div>
            </div>

            {/* Timeline Item 3 */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-4 h-4 rounded-full bg-purple-500"></div>
                <div className="h-full w-0.5 bg-purple-500/30"></div>
              </div>
              <div className="bg-black/50 p-6 rounded-xl border border-purple-500/30 flex-1">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">
                    Bilgisayar Mühendisliği
                  </h3>
                  <span className="text-purple-400">2016 - 2020</span>
                </div>
                <p className="text-gray-300 mb-1">XYZ Üniversitesi</p>
                <p className="text-gray-400">
                  Yazılım geliştirme, algoritma ve veri yapıları üzerine
                  kapsamlı eğitim aldım. Bitirme projesi olarak e-öğrenme
                  platformu geliştirdim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
