export default function Footer() {
  return (
    <footer style={{ background: "#070A18", borderTop: "1px solid rgba(255,255,255,0.04)", padding: "36px 5vw" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
        {/* Logo */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{ width: 28, height: 28, background: "linear-gradient(135deg,#C4A360,#E8C87A)", borderRadius: 6, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <span style={{ color: "#0A0E1E", fontSize: 12, fontWeight: 700, fontFamily: "'Playfair Display',serif" }} aria-hidden="true">A</span>
          </div>
          <span style={{ color: "#F5F0E8", fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: 17 }}>AkademiX</span>
          <span style={{ color: "#2E2B42", fontFamily: "'DM Sans',sans-serif", fontSize: 13, marginLeft: 8 }}>Profesyonel Akademik Çeviri</span>
        </div>

        {/* Nav links */}
        <nav aria-label="Footer menü">
          <div style={{ display: "flex", gap: 28 }}>
            {[["KVKK", "#"], ["Gizlilik Politikası", "#"], ["İletişim", "mailto:info@akademix.com.tr"]].map(([item, href]) => (
              <a
                key={item}
                href={href}
                style={{ color: "#2E2B42", fontFamily: "'DM Sans',sans-serif", fontSize: 13, textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.target.style.color = "#C4A360"}
                onMouseLeave={e => e.target.style.color = "#2E2B42"}
              >
                {item}
              </a>
            ))}
          </div>
        </nav>

        {/* Copyright */}
        <span style={{ color: "#1E1C30", fontFamily: "'DM Mono',monospace", fontSize: 12 }}>© 2026 AkademiX</span>
      </div>
    </footer>
  );
}