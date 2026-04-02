import { AnimSection } from "../App";

const items = [
  {
    name: "Dr. Ayşe K.",
    role: "Doçent · Eğitim Bilimleri",
    uni: "Ankara Üniversitesi",
    text: "SSCI dergisinde kabul aldım. Hakemlerin 'excellent English' yorumu için AkademiX'e çok teşekkürler.",
    journal: "Computers & Education",
  },
  {
    name: "Dr. Mehmet T.",
    role: "Dr. Öğr. Üyesi · Tıp",
    uni: "Ege Üniversitesi",
    text: "Tıbbi terminoloji son derece doğru çevrilmişti. İlave redaksiyon gerekmedi, direkt gönderdim.",
    journal: "Journal of Medical Systems",
  },
  {
    name: "Prof. Fatma Y.",
    role: "Mühendislik Fakültesi",
    uni: "İTÜ",
    text: "48 saat dediler, 36 saatte geldi. Dergi formatlaması da dahildi, tek kelime ile: kusursuz.",
    journal: "Applied Energy",
  },
];

export default function Testimonials() {
  return (
    <section style={{ background: "#0D1124", padding: "100px 5vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: "#C4A360", letterSpacing: "2px", textTransform: "uppercase" }}>Referanslar</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,4vw,50px)", fontWeight: 700, color: "#F5F0E8", margin: "16px 0" }}>Akademisyenler Ne Diyor?</h2>
          </div>
        </AnimSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 20 }}>
          {items.map((item, i) => (
            <AnimSection key={item.name} delay={i * 0.1}>
              <article
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: 16, padding: "30px 26px" }}
                aria-label={`${item.name} referansı`}
              >
                <div style={{ color: "#C4A360", fontSize: 28, marginBottom: 14, lineHeight: 1 }} aria-hidden="true">❝</div>
                <blockquote style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 15, lineHeight: 1.7, color: "#9A90B4", margin: "0 0 22px", fontStyle: "italic" }}>
                  {item.text}
                </blockquote>
                <div style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 18, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                  <div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#F5F0E8", fontWeight: 600 }}>{item.name}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#4A4468", marginTop: 2 }}>{item.role}</div>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: "#4A4468" }}>{item.uni}</div>
                  </div>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 10, color: "#C4A360", background: "rgba(196,163,96,0.08)", border: "1px solid rgba(196,163,96,0.18)", borderRadius: 6, padding: "4px 8px", textAlign: "right", maxWidth: 110, lineHeight: 1.4 }}>
                    {item.journal}
                  </span>
                </div>
              </article>
            </AnimSection>
          ))}
        </div>
      </div>
    </section>
  );
}