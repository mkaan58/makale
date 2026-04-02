import { AnimSection } from "../App";

export default function CTA() {
  return (
    <section style={{ background: "#0A0E1E", padding: "100px 5vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection>
          <div style={{
            background: "linear-gradient(135deg,rgba(196,163,96,0.07) 0%,rgba(80,60,160,0.05) 100%)",
            border: "1px solid rgba(196,163,96,0.18)",
            borderRadius: 24,
            padding: "clamp(40px,6vw,72px) clamp(24px,5vw,64px)",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            <div
              style={{ position: "absolute", top: -80, right: -80, width: 360, height: 360, background: "radial-gradient(circle,rgba(196,163,96,0.07) 0%,transparent 70%)", borderRadius: "50%", pointerEvents: "none" }}
              aria-hidden="true"
            />
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: "#C4A360", letterSpacing: "2px", textTransform: "uppercase" }}>Şimdi Başlayın</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,4vw,54px)", fontWeight: 700, color: "#F5F0E8", margin: "20px 0 18px" }}>
              Makaleniz Hazır Mı?
            </h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 18, color: "#5A5478", maxWidth: 460, margin: "0 auto 40px", lineHeight: 1.7 }}>
              Dosyanızı gönderin, 30 dakika içinde fiyat teklifini alın.<br />
              <strong style={{ color: "#C4A360" }}>İlk makalede %10 indirim.</strong>
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <a
                href="mailto:info@akademix.com.tr?subject=Makale%20Çeviri%20Talebi"
                style={{ background: "linear-gradient(135deg,#C4A360,#E8C87A)", color: "#0A0E1E", padding: "16px 40px", borderRadius: 10, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 17, textDecoration: "none", boxShadow: "0 8px 32px rgba(196,163,96,0.3)", display: "inline-flex", alignItems: "center", gap: 10, transition: "all 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
              >
                Ücretsiz Teklif Al
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a
                href="https://wa.me/905000000000"
                style={{ border: "1px solid rgba(196,163,96,0.3)", color: "#C4A360", padding: "16px 40px", borderRadius: 10, fontFamily: "'DM Sans',sans-serif", fontWeight: 600, fontSize: 17, textDecoration: "none", background: "rgba(196,163,96,0.05)", display: "inline-flex", alignItems: "center", gap: 10, transition: "background 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.background = "rgba(196,163,96,0.1)"}
                onMouseLeave={e => e.currentTarget.style.background = "rgba(196,163,96,0.05)"}
              >
                <span style={{ fontSize: 20 }} aria-hidden="true">💬</span> WhatsApp
              </a>
            </div>
            <p style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: "#2E2B42", marginTop: 24 }}>
              📧 info@akademix.com.tr · ⏱ Yanıt süresi: maks. 30 dakika
            </p>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}