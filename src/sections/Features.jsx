import { AnimSection } from "../App";

const features = [
  { icon: "⚡", title: "48 Saatte Teslim", desc: "Standart teslimat 48 saat. Acil talepler için 24 saatlik ekspres seçenek.", tag: "Hız Garantisi" },
  { icon: "🎯", title: "Dergi Formatına Uygun", desc: "Elsevier, Springer, Taylor & Francis, Wiley ve 500+ derginin author guidelines'ına uygun.", tag: "Journal Ready" },
  { icon: "✍️", title: "Proofreading Dahil", desc: "Native English düzeyinde akademik proofreading. Ek ücret yok, pakete dahil.", tag: "Dahil" },
  { icon: "🔬", title: "Alan Uzmanı Kontrolü", desc: "Her çeviri, ilgili alanda uzman editörümüz tarafından son kez gözden geçirilir.", tag: "Kalite" },
  { icon: "📋", title: "Terminoloji Tutarlılığı", desc: "Makale boyunca otomatik glossary sistemi ile tam terminoloji tutarlılığı sağlanır.", tag: "AI Destekli" },
  { icon: "🔄", title: "7 Gün Ücretsiz Revizyon", desc: "Teslimattan sonra 7 gün içindeki tüm değişiklik talepleri ücretsiz.", tag: "Garanti" },
];

export default function Features() {
  return (
    <section id="hizmetler" style={{ background: "#0D1124", padding: "100px 5vw", position: "relative" }}>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 1, background: "linear-gradient(90deg,transparent,rgba(196,163,96,0.2),transparent)" }} aria-hidden="true" />
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: "#C4A360", letterSpacing: "2px", textTransform: "uppercase" }}>Hizmet Kapsamı</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,4vw,50px)", fontWeight: 700, color: "#F5F0E8", margin: "16px 0 16px" }}>Her Şey Tek Pakette</h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: "#5A5478", maxWidth: 480, margin: "0 auto" }}>Ek ücret yok, gizli maliyet yok. Makaleyi veriyorsunuz, dergi hazır teslim ediyoruz.</p>
          </div>
        </AnimSection>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 20 }}>
          {features.map((f, i) => (
            <AnimSection key={f.title} delay={i * 0.07}>
              <div
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "30px 26px", transition: "all 0.3s", height: "100%" }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(196,163,96,0.04)"; e.currentTarget.style.border = "1px solid rgba(196,163,96,0.2)"; e.currentTarget.style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.02)"; e.currentTarget.style.border = "1px solid rgba(255,255,255,0.06)"; e.currentTarget.style.transform = "translateY(0)"; }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 18 }}>
                  <span style={{ fontSize: 30 }} aria-hidden="true">{f.icon}</span>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#C4A360", background: "rgba(196,163,96,0.1)", border: "1px solid rgba(196,163,96,0.2)", borderRadius: 100, padding: "3px 10px" }}>{f.tag}</span>
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 21, fontWeight: 600, color: "#F5F0E8", margin: "0 0 10px" }}>{f.title}</h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#5A5478", lineHeight: 1.65, margin: 0 }}>{f.desc}</p>
              </div>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}