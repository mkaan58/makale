import { useState, useEffect, useRef, lazy, Suspense } from "react";

const PRICE_PER_1000 = 1400;

// ─── Lazy loaded sections (hero sonrası yüklenir) ───────────────────────────
const Features         = lazy(() => import("./sections/Features"));
const Process          = lazy(() => import("./sections/Process"));
const Calculator       = lazy(() => import("./sections/Calculator"));
const ExampleTranslation = lazy(() => import("./sections/ExampleTranslation"));
const Testimonials     = lazy(() => import("./sections/Testimonials"));
const CTA              = lazy(() => import("./sections/CTA"));
const Footer           = lazy(() => import("./sections/Footer"));

// ─── Shared utilities (hero ile birlikte yüklenir) ──────────────────────────
export function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

export function AnimSection({ children, delay = 0, className = "" }) {
  const [ref, visible] = useInView();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}s, transform 0.7s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

// ─── Navbar ─────────────────────────────────────────────────────────────────
function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  return (
    <nav
      aria-label="Ana menü"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "rgba(10,14,30,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(196,163,96,0.15)" : "none",
        transition: "all 0.4s ease", padding: "0 5vw",
      }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 32, height: 32, background: "linear-gradient(135deg, #C4A360, #E8C87A)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#0A0E1E", fontSize: 14, fontWeight: 700, fontFamily: "'Playfair Display', serif" }} aria-hidden="true">A</span>
          </div>
          <span style={{ color: "#F5F0E8", fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: 20 }}>Makalemix</span>
        </div>
        <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
          {[["Hizmetler","#hizmetler"],["Süreç","#surec"],["Fiyatlar","#fiyatlar"],["Örnek","#ornek"]].map(([item, href]) => (
            <a
              key={item} href={href}
              style={{ color: "#7A7290", fontFamily: "'DM Sans', sans-serif", fontSize: 14, fontWeight: 500, textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => e.target.style.color = "#C4A360"}
              onMouseLeave={e => e.target.style.color = "#7A7290"}
            >{item}</a>
          ))}
          <a
            href="#fiyatlar"
            style={{ background: "linear-gradient(135deg, #C4A360, #E8C87A)", color: "#0A0E1E", padding: "8px 20px", borderRadius: 6, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 14, textDecoration: "none" }}
          >
            Teklif Al
          </a>
        </div>
      </div>
    </nav>
  );
}

// ─── Hero (eager — ilk ekran, hızlı yüklenmeli) ─────────────────────────────
function Hero() {
  return (
    <section style={{ minHeight: "100vh", display: "flex", alignItems: "center", background: "#0A0E1E", position: "relative", overflow: "hidden", padding: "120px 5vw 80px" }}>
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }} aria-hidden="true">
        <div style={{ position: "absolute", top: "15%", right: "-5%", width: 600, height: 600, background: "radial-gradient(circle, rgba(196,163,96,0.08) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", bottom: "10%", left: "-10%", width: 500, height: 500, background: "radial-gradient(circle, rgba(100,120,200,0.06) 0%, transparent 70%)", borderRadius: "50%" }} />
        {[...Array(7)].map((_, i) => (
          <div key={i} style={{ position: "absolute", top: 0, bottom: 0, left: `${(i+1)*14.28}%`, width: 1, background: "rgba(255,255,255,0.018)" }} />
        ))}
      </div>
      <div style={{ maxWidth: 1200, margin: "0 auto", width: "100%", position: "relative" }}>
        <div style={{ maxWidth: 780 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(196,163,96,0.1)", border: "1px solid rgba(196,163,96,0.25)", borderRadius: 100, padding: "6px 16px", marginBottom: 32, animation: "fadeIn 0.6s ease both" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#4ADE80", boxShadow: "0 0 8px #4ADE80" }} aria-hidden="true" />
            <span style={{ color: "#C4A360", fontFamily: "'DM Sans', sans-serif", fontSize: 13, fontWeight: 500 }}>48 Saatte Teslim · Proofreading Dahil</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: "clamp(42px, 6vw, 78px)", lineHeight: 1.05, color: "#F5F0E8", margin: "0 0 24px", animation: "fadeUp 0.7s ease 0.1s both" }}>
            Makaleniz<br />
            <span style={{ background: "linear-gradient(135deg, #C4A360, #E8C87A)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Uluslararası</span><br />
            Dergiye Hazır
          </h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontWeight: 300, fontSize: 19, lineHeight: 1.75, color: "#7A7290", maxWidth: 560, margin: "0 0 48px", animation: "fadeUp 0.7s ease 0.2s both" }}>
            Türkçe akademik makalenizi SSCI, SCI, Scopus dergi standartlarına uygun İngilizceye çeviriyoruz. Uzman kontrollü, 48 saatte teslim.
          </p>
          <div style={{ display: "flex", gap: 16, flexWrap: "wrap", animation: "fadeUp 0.7s ease 0.3s both" }}>
            <a
              href="#fiyatlar"
              style={{ background: "linear-gradient(135deg, #C4A360, #E8C87A)", color: "#0A0E1E", padding: "15px 34px", borderRadius: 8, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: 16, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 8px 32px rgba(196,163,96,0.3)", transition: "all 0.2s" }}
              onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 14px 40px rgba(196,163,96,0.4)"; }}
              onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 32px rgba(196,163,96,0.3)"; }}
            >
              Fiyat Hesapla
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#ornek"
              style={{ border: "1px solid rgba(196,163,96,0.3)", color: "#C4A360", padding: "15px 34px", borderRadius: 8, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: 16, textDecoration: "none", background: "rgba(196,163,96,0.05)", transition: "background 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.background = "rgba(196,163,96,0.12)"}
              onMouseLeave={e => e.currentTarget.style.background = "rgba(196,163,96,0.05)"}
            >
              Örnek Çeviriyi Gör
            </a>
          </div>
          <div style={{ display: "flex", gap: 48, marginTop: 64, animation: "fadeUp 0.7s ease 0.4s both" }}>
            {[["500+","Yayınlanan Makale"],["48 Saat","Ort. Teslim"],["Q1/Q2","Dergi Başarısı"]].map(([v, l]) => (
              <div key={l}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, fontWeight: 700, color: "#C4A360" }}>{v}</div>
                <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: 13, color: "#4A4468", marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px) } to { opacity:1; transform:translateY(0) } }
        @keyframes fadeIn { from { opacity:0 } to { opacity:1 } }
        html { scroll-behavior: smooth }
      `}</style>
    </section>
  );
}

// ─── App root ────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div style={{ background: "#0A0E1E", minHeight: "100vh" }}>
      <style>{`
        * { box-sizing: border-box; margin: 0; padding: 0 }
        body { background: #0A0E1E; overflow-x: hidden }
        input[type=range] { -webkit-appearance: none; background: rgba(255,255,255,0.08); height: 4px; border-radius: 2px; outline: none; width: 100% }
        input[type=range]::-webkit-slider-thumb { -webkit-appearance: none; width: 20px; height: 20px; border-radius: 50%; background: linear-gradient(135deg,#C4A360,#E8C87A); cursor: pointer; box-shadow: 0 2px 10px rgba(196,163,96,0.4) }
        ::-webkit-scrollbar { width: 5px }
        ::-webkit-scrollbar-track { background: #0A0E1E }
        ::-webkit-scrollbar-thumb { background: rgba(196,163,96,0.25); border-radius: 3px }
        @media(max-width:640px) { nav div div a:not(:last-child) { display: none } }
      `}</style>
      <Navbar />
      <main>
        {/* Hero eager yüklenir — ilk ekran */}
        <Hero />

        {/* Geri kalanlar scroll edince yüklenir */}
        <Suspense fallback={null}>
          <Features />
          <Process />
          <Calculator />
          <ExampleTranslation />
          <Testimonials />
          <CTA />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}