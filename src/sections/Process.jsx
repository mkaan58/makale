import { AnimSection } from "../App";

const steps = [
  { num: "01", title: "Dosyayı Gönderin", desc: "PDF, Word veya herhangi bir formatta makalenizi gönderin. Hedef dergiyi belirtin." },
  { num: "02", title: "Teklif Alın", desc: "Kelime sayısına göre otomatik fiyat. 30 dakika içinde onay ve ödeme." },
  { num: "03", title: "Çeviri + Kontrol", desc: "AI destekli çeviri + uzman editör proofreading paralel yürütülür." },
  { num: "04", title: "Teslim", desc: "48 saat içinde dergi formatında. 7 gün revizyon hakkı başlar." },
];

export default function Process() {
  return (
    <section id="surec" style={{ background: "#0A0E1E", padding: "100px 5vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: "#C4A360", letterSpacing: "2px", textTransform: "uppercase" }}>Süreç</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,4vw,50px)", fontWeight: 700, color: "#F5F0E8", margin: "16px 0" }}>Nasıl Çalışır?</h2>
          </div>
        </AnimSection>
        <ol style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))", gap: 32, listStyle: "none", padding: 0, margin: 0 }}>
          {steps.map((s, i) => (
            <AnimSection key={s.num} delay={i * 0.1}>
              <li style={{ textAlign: "center" }}>
                <div
                  style={{ width: 72, height: 72, borderRadius: "50%", margin: "0 auto 24px", background: "rgba(196,163,96,0.08)", border: "1px solid rgba(196,163,96,0.25)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'DM Mono',monospace", fontSize: 18, color: "#C4A360" }}
                  aria-hidden="true"
                >
                  {s.num}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 600, color: "#F5F0E8", margin: "0 0 10px" }}>{s.title}</h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#5A5478", lineHeight: 1.65, margin: 0 }}>{s.desc}</p>
              </li>
            </AnimSection>
          ))}
        </ol>
      </div>
    </section>
  );
}