// Porter Metrics — hero + sources strip
const { Button, Badge, Eyebrow, Heading, Card } = window.PorterMetricsDesignSystem_101e0b;

const SOURCES = [
  "Facebook Ads", "Google Ads", "Instagram", "LinkedIn Ads", "TikTok Ads",
  "Google Analytics 4", "Search Console", "YouTube", "Mailchimp", "Shopify",
  "HubSpot", "Bing Ads", "Pinterest", "Snapchat Ads", "WooCommerce"
];

function Hero() {
  return (
    <section style={{ background: "var(--porter-cream)", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "64px 48px 80px", boxSizing: "border-box" }}>
        <div style={{ maxWidth: 920 }}>
          <Eyebrow>Marketing reporting, on autopilot</Eyebrow>
          <Heading level="display" style={{ fontSize: "clamp(64px, 9vw, 132px)", marginTop: 20 }}>
            Report<br /><strong>faster</strong>
          </Heading>
          <p style={{ fontFamily: "var(--font-display)", fontSize: 21, lineHeight: 1.5, color: "var(--porter-dark)", maxWidth: 540, margin: "28px 0 36px" }}>
            Pull every marketing metric from 25+ ad and analytics sources into one
            on-brand dashboard. No spreadsheets, no copy-paste, no late nights.
          </p>
          <div style={{ display: "flex", gap: 14, alignItems: "center", flexWrap: "wrap" }}>
            <Button variant="purple" size="lg">Start free trial</Button>
            <Button variant="outline" size="lg">See templates</Button>
          </div>
          <p style={{ fontFamily: "var(--font-alt)", fontSize: 13, letterSpacing: 1, textTransform: "uppercase", color: "var(--porter-muted)", marginTop: 22 }}>
            14-day trial · No credit card
          </p>
        </div>
      </div>
    </section>
  );
}

function Sources() {
  return (
    <section id="sources" style={{ background: "var(--porter-dark)", color: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "72px 48px", boxSizing: "border-box" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 20, marginBottom: 36 }}>
          <div>
            <Eyebrow style={{ color: "var(--porter-aqua)" }}>Integrations</Eyebrow>
            <Heading level="h2" style={{ color: "#fff", marginTop: 12, fontSize: 44 }}>
              Connect <strong style={{ color: "var(--aqua-400)" }}>25+ sources</strong>
            </Heading>
          </div>
          <Button variant="aqua">Browse all integrations</Button>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {SOURCES.map((s) => (
            <span key={s} style={{
              fontFamily: "var(--font-alt)", fontSize: 13, fontWeight: 500, letterSpacing: 0.5,
              color: "#fff", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.14)",
              padding: "10px 16px", borderRadius: 999
            }}>{s}</span>
          ))}
          <span style={{ fontFamily: "var(--font-alt)", fontSize: 13, fontWeight: 600, color: "var(--porter-yellow)", padding: "10px 16px" }}>+ 10 more</span>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Hero, Sources });
