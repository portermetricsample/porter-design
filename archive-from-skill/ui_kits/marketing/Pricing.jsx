// Porter Metrics — pricing (with interactive monthly/annual toggle) + CTA
const { Button, Badge, Eyebrow, Heading, Card } = window.PorterMetricsDesignSystem_101e0b;
const { useState } = React;

const PLANS = [
  { name: "Starter", m: 29, feat: ["3 dashboards", "10 data sources", "Weekly email reports", "1 brand kit"], variant: "outline", bg: "white", bordered: true },
  { name: "Agency", m: 79, feat: ["Unlimited dashboards", "All 25+ sources", "White-label reports", "5 brand kits", "Scheduled delivery"], variant: "purple", bg: "dark", featured: true },
  { name: "Scale", m: 199, feat: ["Everything in Agency", "Unlimited brand kits", "Client logins", "Priority support", "API access"], variant: "outline", bg: "white", bordered: true },
];

function Pricing() {
  const [annual, setAnnual] = useState(true);
  const price = (m) => annual ? Math.round(m * 0.8) : m;

  const toggleBtn = (active) => ({
    fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 14,
    padding: "8px 18px", borderRadius: 999, border: "none", cursor: "pointer",
    background: active ? "var(--porter-purple)" : "transparent",
    color: active ? "#fff" : "var(--porter-dark)", transition: "all .15s ease"
  });

  return (
    <section id="pricing" style={{ background: "var(--porter-cream)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 48px", boxSizing: "border-box" }}>
        <div style={{ textAlign: "center" }}>
          <Eyebrow>Pricing</Eyebrow>
          <Heading level="h1" style={{ fontSize: 60, marginTop: 16 }}>
            Plans that <strong>scale</strong>
          </Heading>
          <div style={{ display: "inline-flex", gap: 4, background: "#fff", padding: 5, borderRadius: 999, marginTop: 28, boxShadow: "inset 0 0 0 1px var(--border-hairline)" }}>
            <button style={toggleBtn(annual)} onClick={() => setAnnual(true)}>Annual · save 20%</button>
            <button style={toggleBtn(!annual)} onClick={() => setAnnual(false)}>Monthly</button>
          </div>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48, alignItems: "stretch" }}>
          {PLANS.map((p) => {
            const dark = p.bg === "dark";
            return (
              <Card key={p.name} background={p.bg} bordered={p.bordered} style={{ display: "flex", flexDirection: "column", position: "relative" }}>
                {p.featured && <div style={{ position: "absolute", top: 24, right: 24 }}><Badge variant="yellow">Most popular</Badge></div>}
                <span style={{ fontFamily: "var(--font-alt)", fontSize: 13, letterSpacing: 1.5, textTransform: "uppercase", color: dark ? "var(--porter-aqua)" : "var(--porter-purple)" }}>{p.name}</span>
                <div style={{ display: "flex", alignItems: "baseline", gap: 6, marginTop: 18 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 900, fontSize: 56, letterSpacing: "-2px", color: dark ? "#fff" : "var(--porter-black)" }}>${price(p.m)}</span>
                  <span style={{ fontFamily: "var(--font-display)", color: dark ? "rgba(255,255,255,0.6)" : "var(--porter-muted)", fontSize: 15 }}>/mo</span>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: "24px 0 32px", display: "flex", flexDirection: "column", gap: 12, flex: 1 }}>
                  {p.feat.map((f) => (
                    <li key={f} style={{ fontFamily: "var(--font-display)", fontSize: 15, color: dark ? "rgba(255,255,255,0.82)" : "var(--porter-dark)", display: "flex", gap: 10 }}>
                      <span style={{ color: dark ? "var(--porter-aqua)" : "var(--porter-purple)", fontWeight: 800 }}>—</span>{f}
                    </li>
                  ))}
                </ul>
                <Button variant={dark ? "aqua" : p.variant} style={{ width: "100%" }}>Choose {p.name}</Button>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section style={{ background: "var(--porter-white)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "0 48px 96px", boxSizing: "border-box" }}>
        <Card background="dark" style={{ padding: "72px 56px", textAlign: "center", borderRadius: 28 }}>
          <Heading level="h1" style={{ color: "#fff", fontSize: 56 }}>
            Start reporting <strong style={{ color: "var(--porter-yellow)" }}>faster</strong>
          </Heading>
          <p style={{ fontFamily: "var(--font-display)", color: "rgba(255,255,255,0.78)", fontSize: 18, margin: "20px auto 32px", maxWidth: 440, lineHeight: 1.5 }}>
            Join 8,000+ agencies and marketers who ditched the spreadsheet.
          </p>
          <div style={{ display: "flex", gap: 14, justifyContent: "center", flexWrap: "wrap" }}>
            <Button variant="purple" size="lg">Start free trial</Button>
            <Button variant="outline" size="lg" style={{ color: "#fff", boxShadow: "inset 0 0 0 2px rgba(255,255,255,0.4)" }}>Book a demo</Button>
          </div>
        </Card>
      </div>
    </section>
  );
}

Object.assign(window, { Pricing, CTA });
