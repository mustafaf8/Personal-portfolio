import React, { useEffect, useRef, useState } from "react";

const Home = () => {
  const canvasRef = useRef(null);
  const [targetPosition, setTargetPosition] = useState({ x: null, y: null });
  const [targetTimer, setTargetTimer] = useState(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Snake segments array
    let snakes = [];

    // Snake class to create and manage multiple snakes
    class Snake {
      constructor() {
        this.segments = [];
        this.maxLength = Math.floor(Math.random() * 40) + 40; // Biraz daha kısa yılanlar
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.angle = Math.random() * Math.PI * 2;
        this.baseSpeed = Math.random() * 1.5 + 1.5; // Daha tutarlı hız aralığı
        this.currentSpeed = this.baseSpeed;
        this.color = `hsl(${Math.random() * 60 + 270}, 100%, 60%)`; // Daha parlak renkler
        this.size = Math.random() * 6 + 4; // Kalınlık
        this.lifespan = Math.floor(Math.random() * 300) + 100; // Yaşam süresi değiştirilmedi
        this.life = 0;
        this.alive = true;
        this.baseTurnSpeed = Math.random() * 0.05 + 0.1; // Temel dönüş hızı
        this.turnSpeed = this.baseTurnSpeed;
        this.targetX = null; // Hedef X
        this.targetY = null; // Hedef Y
        this.prevDistToTarget = Infinity; // Hedefe olan önceki mesafe
      }

      update() {
        if (targetPosition.x !== null && targetPosition.y !== null) {
          // Tıklanan konumu hedef olarak ayarla
          this.targetX = targetPosition.x;
          this.targetY = targetPosition.y;
        }

        // Eğer hedef varsa, o hedefe doğru git
        if (this.targetX !== null && this.targetY !== null) {
          const dx = this.targetX - this.x;
          const dy = this.targetY - this.y;
          const distToTarget = Math.sqrt(dx * dx + dy * dy);
          const targetAngle = Math.atan2(dy, dx);

          // Yılanın hedefe olan mesafesine bağlı olarak davranışını ayarla
          const maxFollowDist = 300; // Daha geniş takip mesafesi

          if (distToTarget < maxFollowDist) {
            // Hedefe yakınlık faktörü (0-1 arası)
            const distanceFactor =
              1 - Math.min(distToTarget / maxFollowDist, 1);

            // Hedefe yaklaştıkça dönüş hızını dinamik olarak ayarla
            this.turnSpeed = this.baseTurnSpeed * (2 + distanceFactor * 8);

            // Hedefe yaklaştıkça hızlan, uzaklaştıkça normalleş
            this.currentSpeed = this.baseSpeed * (1 + distanceFactor * 1.5);

            // Hedefe yaklaştığımızı tespit et
            const approachingTarget = this.prevDistToTarget > distToTarget;

            // Eğer hedefe yaklaşıyorsak daha agresif takip et
            if (approachingTarget) {
              this.turnSpeed *= 1.2;
            }

            // Açı farkını hesapla ve normalize et
            let angleDiff = targetAngle - this.angle;
            while (angleDiff > Math.PI) angleDiff -= Math.PI * 2;
            while (angleDiff < -Math.PI) angleDiff += Math.PI * 2;

            // Daha düzgün dönüşler için angleDiff miktarını sınırla
            const maxTurn = 0.2; // Maximum anlık dönüş
            angleDiff = Math.max(Math.min(angleDiff, maxTurn), -maxTurn);

            // Açıyı güncelle
            this.angle += angleDiff * this.turnSpeed;

            // Mesafeyi önceki mesafe olarak kaydet
            this.prevDistToTarget = distToTarget;
          } else {
            // Hedef çok uzakta, normal hıza dön
            this.currentSpeed = this.baseSpeed;
            this.angle += (Math.random() - 0.5) * 0.05;

            // Hedef çok uzaksa ve yılan sınıra yakınsa merkeze dön
            if (
              this.x < 100 ||
              this.x > canvas.width - 100 ||
              this.y < 100 ||
              this.y > canvas.height - 100
            ) {
              this.angle = Math.atan2(
                canvas.height / 2 - this.y,
                canvas.width / 2 - this.x
              );
            }
          }
        } else {
          // Hedef yoksa rastgele hareket
          this.currentSpeed = this.baseSpeed;
          this.angle += (Math.random() - 0.5) * 0.05;
        }

        // Mevcut açı ve hızla hareket et
        this.x += Math.cos(this.angle) * this.currentSpeed;
        this.y += Math.sin(this.angle) * this.currentSpeed;

        // Segment ekle
        this.segments.unshift({ x: this.x, y: this.y });

        // Fazla segmentleri kaldır
        if (this.segments.length > this.maxLength) {
          this.segments.pop();
        }

        // Ekrandan çıkma kontrolü
        if (
          this.x < 0 ||
          this.x > canvas.width ||
          this.y < 0 ||
          this.y > canvas.height
        ) {
          // Ekran dışına çıktıysa merkeze doğru yönlendir
          this.angle = Math.atan2(
            canvas.height / 2 - this.y,
            canvas.width / 2 - this.x
          );
        }

        // Yaşam süresini güncelle
        this.life++;
        if (this.life > this.lifespan) {
          this.alive = false;
        }
      }

      draw() {
        if (this.segments.length <= 1) return;

        ctx.beginPath();

        // Yılanı daha yumuşak çizmek için Bezier eğrisi kullan
        ctx.moveTo(this.segments[0].x, this.segments[0].y);

        for (let i = 1; i < this.segments.length - 2; i++) {
          const xc = (this.segments[i].x + this.segments[i + 1].x) / 2;
          const yc = (this.segments[i].y + this.segments[i + 1].y) / 2;
          ctx.quadraticCurveTo(this.segments[i].x, this.segments[i].y, xc, yc);
        }

        // Son iki noktayı bağla
        if (this.segments.length > 2) {
          const lastIdx = this.segments.length - 1;
          const secondLastIdx = this.segments.length - 2;
          ctx.quadraticCurveTo(
            this.segments[secondLastIdx].x,
            this.segments[secondLastIdx].y,
            this.segments[lastIdx].x,
            this.segments[lastIdx].y
          );
        }

        // Gradient
        const gradient = ctx.createLinearGradient(
          this.segments[0].x,
          this.segments[0].y,
          this.segments[this.segments.length - 1].x,
          this.segments[this.segments.length - 1].y
        );

        // Daha parlak baş kısmı
        gradient.addColorStop(0, this.color);
        gradient.addColorStop(1, "rgba(0,0,0,0)");

        ctx.strokeStyle = gradient;
        ctx.lineWidth = this.size;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        ctx.stroke();

        // Baş kısmı için parlak efekt
        ctx.beginPath();
        ctx.arc(
          this.segments[0].x,
          this.segments[0].y,
          this.size * 2,
          0,
          Math.PI * 2
        );
        ctx.fillStyle = this.color;
        ctx.globalAlpha = 0.8;
        ctx.fill();
        ctx.globalAlpha = 1;
      }
    }

    // Animation loop
    function animate() {
      // Canvas'ı şeffaflıkla temizle
      ctx.fillStyle = "rgba(0, 0, 0, 0.1)"; // Daha uzun izler için daha az opaklık
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Tüm yılanları güncelle ve çiz
      for (let i = snakes.length - 1; i >= 0; i--) {
        const snake = snakes[i];
        snake.update();
        snake.draw();

        // Ölü yılanları kaldır
        if (!snake.alive) {
          snakes.splice(i, 1);
        }
      }

      // Rastgele yeni yılanlar ekle, toplam 3-5 yılann
      if (snakes.length < 5 && Math.random() < 0.006) {
        snakes.push(new Snake());
      }

      requestAnimationFrame(animate);
    }

    // Pencere boyutu değişince canvas'ı güncelle
    function handleResize() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    // Başlangıçta 3 yılan ekle
    for (let i = 0; i < 5; i++) {
      snakes.push(new Snake());
    }

    // Animasyonu başlat
    animate();

    // Event listener'ları ayarla
    window.addEventListener("resize", handleResize);

    // Temizlik
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [targetPosition, targetTimer]);

  // Tıklama olayı için handler
  const handleClick = (e) => {
    // Önceki zamanlayıcıyı temizle
    if (targetTimer) {
      clearTimeout(targetTimer);
    }

    // Tıklanan pozisyonu ayarla
    setTargetPosition({ x: e.clientX, y: e.clientY });

    // 3 saniye sonra hedefi kaldır
    const timer = setTimeout(() => {
      setTargetPosition({ x: null, y: null });
    }, 1000);

    setTargetTimer(timer);
  };

  return (
    <div
      className="relative min-h-screen overflow-y-hidden"
      onClick={handleClick}
    >
      {/* Siyah arkaplan */}
      <div className="fixed top-0 left-0 w-full h-full bg-black z-[-2]"></div>

      {/* Yılan animasyonu için canvas */}
      <canvas
        ref={canvasRef}
        className="fixed top-0 left-0 w-full h-full z-[-1]"
      />

      {/* Ana içerik */}
      <div className="flex items-center justify-center min-h-screen text-white px-4">
        <div className="text-center space-y-6 max-w-2xl">
          {/* Başlık */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight ">
            Merhaba, Ben{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-300 to-purple-600">
              Mustafa
            </span>
          </h1>

          {/* Alt Başlık */}
          <p className="text-lg sm:text-xl md:text-2xl italic text-blue-300 animate-pulse drop-shadow-md">
            Yaratıcı Web Tasarımları ve Fonksiyonel Çözümler Sunuyorum
          </p>

          {/* Buton */}
          <a
            href="/portfolio"
            className="inline-block px-8 py-4 rounded-full font-semibold text-lg text-white bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-blue-500/50"
          >
            Projelerimi Gör
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
