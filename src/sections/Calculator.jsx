import { useState } from "react";
import { AnimSection } from "../App";

const PRICE_PER_1000 = 1400;

export default function Calculator() {
  const [wordCount, setWordCount]       = useState(5000); // default 5000 — gerçek ortalama
  const [isUrgent, setIsUrgent]         = useState(false);
  const [hasFormatting, setHasFormatting] = useState(false);

  const base      = Math.round((wordCount / 1000) * PRICE_PER_1000);
  const urgentAdd = isUrgent ? Math.round(base * 0.4) : 0;
  const fmtAdd    = hasFormatting ? 500 : 0;
  const total     = base + urgentAdd + fmtAdd;

  return (
    <section id="fiyatlar" style={{ background: "#0D1124", padding: "100px 5vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: "#C4A360", letterSpacing: "2px", textTransform: "uppercase" }}>Şeffaf Fiyatlandırma</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,4vw,50px)", fontWeight: 700, color: "#F5F0E8", margin: "16px 0 16px" }}>Fiyatınızı Anında Hesaplayın</h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: "#5A5478", maxWidth: 440, margin: "0 auto" }}>Sürpriz maliyet yok. Kelime sayısını girin, fiyatı anında görün.</p>
          </div>
        </AnimSection>

        <AnimSection delay={0.1}>
          <div style={{ maxWidth: 720, margin: "0 auto", background: "rgba(255,255,255,0.02)", border: "1px solid rgba(196,163,96,0.15)", borderRadius: 24, overflow: "hidden" }}>
            <div style={{ padding: "44px 44px 36px", borderBottom: "1px solid rgba(255,255,255,0.05)" }}>

              {/* ── Slider — label + id bağlantılı ── */}
              <label
                htmlFor="kelime-sayisi"
                style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: "#7A7290", display: "block", marginBottom: 14, fontWeight: 500 }}
              >
                Kelime Sayısı:{" "}
                <span style={{ color: "#C4A360", fontFamily: "'DM Mono',monospace", fontSize: 15 }}>
                  {wordCount.toLocaleString("tr-TR")}
                </span>
              </label>
              <input
                id="kelime-sayisi"
                type="range"
                min="500"
                max="15000"
                step="100"
                value={wordCount}
                onChange={e => setWordCount(+e.target.value)}
                aria-valuemin={500}
                aria-valuemax={15000}
                aria-valuenow={wordCount}
                aria-valuetext={`${wordCount.toLocaleString("tr-TR")} kelime`}
                style={{ width: "100%", accentColor: "#C4A360", cursor: "pointer" }}
              />
              <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#3A3756" }}>500</span>
                <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#3A3756" }}>15.000</span>
              </div>

              {/* ── Checkbox'lar — gerçek input, accessible ── */}
              <div style={{ display: "flex", gap: 14, marginTop: 28, flexWrap: "wrap" }}>
                {/* Ekspres Teslimat */}
                <label
                  htmlFor="ekspres-teslimat"
                  style={{
                    flex: 1, minWidth: 190, padding: "13px 18px", borderRadius: 10, cursor: "pointer",
                    transition: "all 0.2s",
                    border: isUrgent ? "1px solid rgba(196,163,96,0.5)" : "1px solid rgba(255,255,255,0.07)",
                    background: isUrgent ? "rgba(196,163,96,0.08)" : "rgba(255,255,255,0.02)",
                    display: "flex", alignItems: "center", gap: 12,
                  }}
                >
                  <input
                    id="ekspres-teslimat"
                    type="checkbox"
                    checked={isUrgent}
                    onChange={e => setIsUrgent(e.target.checked)}
                    style={{ width: 18, height: 18, accentColor: "#C4A360", cursor: "pointer", flexShrink: 0 }}
                  />
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#F5F0E8", fontWeight: 500 }}>⚡ Ekspres Teslimat</div>
                    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#5A5478", marginTop: 2 }}>24 saat · +%40</div>
                  </div>
                </label>

                {/* Dergi Formatlaması */}
                <label
                  htmlFor="dergi-formatlama"
                  style={{
                    flex: 1, minWidth: 190, padding: "13px 18px", borderRadius: 10, cursor: "pointer",
                    transition: "all 0.2s",
                    border: hasFormatting ? "1px solid rgba(196,163,96,0.5)" : "1px solid rgba(255,255,255,0.07)",
                    background: hasFormatting ? "rgba(196,163,96,0.08)" : "rgba(255,255,255,0.02)",
                    display: "flex", alignItems: "center", gap: 12,
                  }}
                >
                  <input
                    id="dergi-formatlama"
                    type="checkbox"
                    checked={hasFormatting}
                    onChange={e => setHasFormatting(e.target.checked)}
                    style={{ width: 18, height: 18, accentColor: "#C4A360", cursor: "pointer", flexShrink: 0 }}
                  />
                  <div style={{ textAlign: "left" }}>
                    <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#F5F0E8", fontWeight: 500 }}>📄 Dergi Formatlaması</div>
                    <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#5A5478", marginTop: 2 }}>Author guidelines · +500 TL</div>
                  </div>
                </label>
              </div>
            </div>

            {/* ── Fiyat + CTA ── */}
            <div style={{ padding: "30px 44px", background: "rgba(196,163,96,0.03)" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 20 }}>
                <div>
                  <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#5A5478", marginBottom: 6 }}>Tahmini Toplam</div>
                  <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                    <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 50, fontWeight: 700, color: "#C4A360", lineHeight: 1 }}>
                      {total.toLocaleString("tr-TR")}
                    </span>
                    <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 18, color: "#7A7290" }}>TL</span>
                  </div>
                  <div style={{ display: "flex", gap: 14, marginTop: 10, flexWrap: "wrap" }}>
                    {["Proofreading dahil", `${isUrgent ? 24 : 48} saat teslim`, "7 gün revizyon"].map(t => (
                      <span key={t} style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#4ADE80" }}>✓ {t}</span>
                    ))}
                  </div>
                </div>
                <a
                  href="mailto:info@akademix.com.tr?subject=Çeviri%20Talebi"
                  style={{ background: "linear-gradient(135deg, #C4A360, #E8C87A)", color: "#0A0E1E", padding: "15px 34px", borderRadius: 10, fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: 15, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 8, boxShadow: "0 8px 24px rgba(196,163,96,0.25)", transition: "all 0.2s", whiteSpace: "nowrap" }}
                  onMouseEnter={e => e.currentTarget.style.transform = "translateY(-2px)"}
                  onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
                >
                  Dosyamı Gönder
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" aria-hidden="true"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
              </div>
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}