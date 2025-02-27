import React from "react";

const About = () => {
  return (
    <div className="relative min-h-screen bg-black text-white pt-20">
      {/* Hero Section with Dark Background */}
      <section className="relative pt-20 pb-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">
                Hakkımda <span className="text-primary">.</span>
              </h1>
              <p className="text-lg mb-6">
                Ben{" "}
                <span className="text-primary font-semibold">
                  Mustafa Nahsan
                </span>
                , tutkulu bir web geliştirici ve tasarımcı olarak dijital
                dünyada yaratıcı çözümler sunuyorum. Modern teknolojileri
                kullanarak kullanıcı dostu ve etkileyici web deneyimleri
                oluşturmak için çalışıyorum.
              </p>
              <p className="text-lg mb-6">
                Her projede kullanıcı deneyimini ön planda tutarak, hem görsel
                açıdan çekici hem de fonksiyonel açıdan güçlü ürünler
                geliştirmeyi hedefliyorum. Sürekli gelişen teknoloji dünyasında
                kendimi güncel tutarak, her zaman en iyi çözümleri sunmaya
                çalışıyorum.
              </p>
              <div className="flex space-x-4 mt-8">
                <a
                  href="/contact"
                  className="bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/80 transition-colors duration-300"
                >
                  İletişime Geç
                </a>
                <a
                  href="/portfolio"
                  className="border border-primary text-primary px-6 py-3 rounded-full hover:bg-primary hover:text-white transition-colors duration-300"
                >
                  Projelerimi Gör
                </a>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="relative">
                <div className="bg-primary/20 w-64 h-64 md:w-80 md:h-80 rounded-full absolute -top-0 -left-0"></div>
                <img
                  src="src/assets/img/potfoypic.png"
                  alt="Mustafa Nahsan"
                  className="relative z-10 rounded-full w-64 h-64 md:w-80 md:h-80 object-cover border-4 [transform:scalex(-1)] border-primary"
                />
                <div className="absolute -bottom-0 -right-0 w-32 h-32 bg-primary/30 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-secondary/70">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Yeteneklerim <span className="text-primary">& Uzmanlıklarım</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Skill Card 1 */}
            <div className="bg-secondary/80 p-6 rounded-xl border border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="w-16 h-16 bg-primary/20 rounded-xl mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
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
              <h3 className="text-xl font-semibold mb-2">Web Tasarımı</h3>
              <p className="text-gray-300">
                Kullanıcı dostu ve modern arayüzler tasarlayarak dijital
                deneyimleri geliştiriyorum.
              </p>
            </div>

            {/* Skill Card 2 */}
            <div className="bg-secondary/80 p-6 rounded-xl border border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="w-16 h-16 bg-primary/20 rounded-xl mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
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
              <h3 className="text-xl font-semibold mb-2">
                Frontend Geliştirme
              </h3>
              <p className="text-gray-300">
                React, Vue ve modern JavaScript kütüphaneleri ile responsive ve
                performanslı web uygulamaları geliştiriyorum.
              </p>
            </div>

            {/* Skill Card 3 */}
            <div className="bg-secondary/80 p-6 rounded-xl border border-primary/30 hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
              <div className="w-16 h-16 bg-primary/20 rounded-xl mb-4 flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-primary"
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
              <h3 className="text-xl font-semibold mb-2">
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
          <h2 className="text-3xl font-bold mb-12 text-center">
            Eğitim <span className="text-primary">& Deneyim</span>
          </h2>
          <div className="flex flex-col space-y-8 max-w-3xl mx-auto">
            {/* Timeline Item 1 */}
            <div className="flex">
              <div className="flex flex-col items-center mr-6">
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <div className="h-full w-0.5 bg-primary/30"></div>
              </div>
              <div className="bg-secondary/80 p-6 rounded-xl border border-primary/30 flex-1">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold">
                    Kıdemli Web Geliştirici
                  </h3>
                  <span className="text-primary">2023 - Günümüz</span>
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
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <div className="h-full w-0.5 bg-primary/30"></div>
              </div>
              <div className="bg-secondary/80 p-6 rounded-xl border border-primary/30 flex-1">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold">Web Geliştirici</h3>
                  <span className="text-primary">2020 - 2023</span>
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
                <div className="w-4 h-4 rounded-full bg-primary"></div>
                <div className="h-full w-0.5 bg-primary/30"></div>
              </div>
              <div className="bg-secondary/80 p-6 rounded-xl border border-primary/30 flex-1">
                <div className="flex justify-between mb-2">
                  <h3 className="text-xl font-semibold">
                    Bilgisayar Mühendisliği
                  </h3>
                  <span className="text-primary">2016 - 2020</span>
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

      {/* Personal Information */}
      <section className="py-16 bg-secondary/70">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            Kişisel <span className="text-primary">Bilgilerim</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold mb-6 border-b border-primary pb-2">
                İletişim Bilgileri
              </h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <span>email@example.com</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <span>+90 555 123 45 67</span>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-primary mr-3"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span>İstanbul, Türkiye</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-6 border-b border-primary pb-2">
                Kişisel İlgi Alanları
              </h3>
              <ul className="grid grid-cols-2 gap-4">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Fotoğrafçılık</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Seyahat</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Spor</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Teknoloji</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Kitap Okuma</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                  <span>Müzik</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
