import { useState } from "react";
import { AnimSection } from "../App";

const trText = `Çevrim içi öğrenme ortamlarında etkili öğrenmenin sağlanması, öğrenci motivasyonunu artırmada, öğrencilerin bilişsel yük düzeyini azaltmada ve öğrenme iradelerinin güçlendirilmesinde kritik bir rol oynamaktadır. Bu çalışmanın amacı, Bilişim Teknolojileri ve Yazılım dersi kapsamında ClassDojo platformu üzerinde tasarlanan çevrim içi oyunlaştırma ortamlarının ortaokul öğrencilerinin eylem yeterliği, motivasyon ve bilişsel yük düzeylerine etkisini incelemektir. Yarı deneysel ön test-son test kontrol gruplu desen kullanılarak gerçekleştirilen bu araştırma Muğla ili Dalaman ilçesindeki iki ortaokulda 155 öğrenci ile yürütülmüştür.`;

const enText = `Ensuring effective learning in online learning environments is critical for enhancing student motivation, alleviating cognitive load, and strengthening volitional competence. The purpose of this study is to examine the effects of online gamification environments designed on the ClassDojo platform on middle school students' volitional competence, motivation, and cognitive load within the scope of the Information Technologies and Software course. This research, conducted using a quasi-experimental pretest-posttest control group design, was carried out with 155 students at two middle schools in the Dalaman district of Muğla province.`;

export default function ExampleTranslation() {
  const [tab, setTab] = useState("tr");

  return (
    <section id="ornek" style={{ background: "#0A0E1E", padding: "100px 5vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <AnimSection>
          <div style={{ textAlign: "center", marginBottom: 60 }}>
            <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 12, color: "#C4A360", letterSpacing: "2px", textTransform: "uppercase" }}>Örnek Çeviri</span>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: "clamp(30px,4vw,50px)", fontWeight: 700, color: "#F5F0E8", margin: "16px 0 16px" }}>Kaliteyi Kendiniz Görün</h2>
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: "#5A5478", maxWidth: 460, margin: "0 auto" }}>
              Interactive Learning Environments (SSCI Q1) dergisi için yapılmış gerçek bir çeviriden.
            </p>
          </div>
        </AnimSection>

        <AnimSection delay={0.1}>
          <div style={{ maxWidth: 780, margin: "0 auto" }}>
            {/* Tab bar */}
            <div
              role="tablist"
              aria-label="Çeviri dili seçimi"
              style={{ display: "flex", gap: 4, background: "rgba(255,255,255,0.03)", borderRadius: "12px 12px 0 0", padding: 6, width: "fit-content" }}
            >
              {[["tr", "🇹🇷 Türkçe Orijinal"], ["en", "🇬🇧 İngilizce Çeviri"]].map(([k, l]) => (
                <button
                  key={k}
                  role="tab"
                  aria-selected={tab === k}
                  aria-controls={`tab-panel-${k}`}
                  id={`tab-${k}`}
                  onClick={() => setTab(k)}
                  style={{
                    padding: "9px 22px", borderRadius: 8, border: "none", cursor: "pointer",
                    fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 500,
                    transition: "all 0.2s",
                    background: tab === k ? "rgba(196,163,96,0.15)" : "transparent",
                    color: tab === k ? "#C4A360" : "#4A4468",
                    borderBottom: tab === k ? "2px solid #C4A360" : "2px solid transparent",
                  }}
                >
                  {l}
                </button>
              ))}
            </div>

            {/* Tab panel */}
            <div
              role="tabpanel"
              id={`tab-panel-${tab}`}
              aria-labelledby={`tab-${tab}`}
              style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", borderRadius: "0 12px 12px 12px", padding: "32px 36px" }}
            >
              <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 20, paddingBottom: 20, borderBottom: "1px solid rgba(255,255,255,0.05)" }}>
                <div>
                  <span style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#4A4468", display: "block" }}>Dergi</span>
                  <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#C4A360" }}>
                    Interactive Learning Environments · SSCI Q1 · Taylor &amp; Francis
                  </span>
                </div>
                <span style={{ background: "rgba(74,222,128,0.1)", color: "#4ADE80", fontFamily: "'DM Mono',monospace", fontSize: 11, padding: "3px 10px", borderRadius: 100, whiteSpace: "nowrap", height: "fit-content" }}>
                  Yayınlandı ✓
                </span>
              </div>

              <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 16, lineHeight: 1.85, color: "#BCB4CC", margin: 0 }}>
                {tab === "tr" ? trText : enText}
              </p>

              {tab === "en" && (
                <div style={{ marginTop: 24, paddingTop: 20, borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", gap: 24, flexWrap: "wrap" }}>
                  {[["Terminoloji", "Korundu ✓"], ["Akademik Register", "Native ✓"], ["Dergi Formatı", "ILE Uyumlu ✓"]].map(([k, v]) => (
                    <div key={k}>
                      <div style={{ fontFamily: "'DM Mono',monospace", fontSize: 11, color: "#3A3756" }}>{k}</div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 13, color: "#4ADE80", marginTop: 2 }}>{v}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </AnimSection>
      </div>
    </section>
  );
}