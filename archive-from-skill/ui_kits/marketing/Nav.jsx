// Porter Metrics — marketing site nav + footer
const { Button, Badge } = window.PorterMetricsDesignSystem_101e0b;

function Wordmark({ light }) {
  return (
    <a href="#" style={{
      fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 22,
      letterSpacing: "-1px", textDecoration: "none",
      color: light ? "#fff" : "var(--porter-dark)", display: "inline-flex", alignItems: "center", gap: 9
    }}>
      <img src="../../assets/brand/porter-mark.png" alt="Porter" style={{ width: 28, height: 28, objectFit: "contain" }} />
      porter
    </a>
  );
}

function Nav() {
  const link = { fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "var(--porter-dark)", textDecoration: "none" };
  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "22px 48px", maxWidth: 1280, margin: "0 auto", boxSizing: "border-box"
    }}>
      <Wordmark />
      <div style={{ display: "flex", gap: 30, alignItems: "center" }}>
        <a style={link} href="#features">Product</a>
        <a style={link} href="#sources">Integrations</a>
        <a style={link} href="#pricing">Pricing</a>
        <a style={link} href="#">Templates</a>
      </div>
      <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
        <a style={{ ...link, fontWeight: 700 }} href="#">Log in</a>
        <Button variant="purple" size="sm">Start free trial</Button>
      </div>
    </nav>
  );
}

function Footer() {
  const col = { display: "flex", flexDirection: "column", gap: 12 };
  const link = { fontFamily: "var(--font-display)", fontSize: 14, color: "rgba(255,255,255,0.66)", textDecoration: "none" };
  const head = { fontFamily: "var(--font-alt)", fontSize: 12, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--porter-yellow)", marginBottom: 4 };
  return (
    <footer style={{ background: "var(--porter-dark)", color: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 48px 48px", boxSizing: "border-box", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 40 }}>
        <div style={{ maxWidth: 280 }}>
          <Wordmark light />
          <p style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, fontSize: 15, marginTop: 16 }}>
            Marketing reports your clients actually want to read. 25+ sources, on brand, in minutes.
          </p>
        </div>
        <div style={col}><span style={head}>Product</span><a style={link} href="#">Dashboards</a><a style={link} href="#">Reports</a><a style={link} href="#">Templates</a><a style={link} href="#">Integrations</a></div>
        <div style={col}><span style={head}>Company</span><a style={link} href="#">About</a><a style={link} href="#">Careers</a><a style={link} href="#">Blog</a><a style={link} href="#">Contact</a></div>
        <div style={col}><span style={head}>Resources</span><a style={link} href="#">Help center</a><a style={link} href="#">API docs</a><a style={link} href="#">Status</a><a style={link} href="#">Changelog</a></div>
      </div>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "24px 48px", boxSizing: "border-box", borderTop: "1px solid rgba(255,255,255,0.12)", display: "flex", justifyContent: "space-between", fontFamily: "var(--font-alt)", fontSize: 12, color: "rgba(255,255,255,0.5)", letterSpacing: 0.5 }}>
        <span>© 2026 Porter Metrics</span>
        <span>Privacy · Terms</span>
      </div>
    </footer>
  );
}

Object.assign(window, { Nav, Footer, Wordmark });
