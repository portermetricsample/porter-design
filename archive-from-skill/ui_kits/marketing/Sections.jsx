// Porter Metrics — features grid + big statement
const { Button, Badge, Eyebrow, Heading, Card } = window.PorterMetricsDesignSystem_101e0b;

const FEATURES = [
  { bg: "white", badge: { v: "purple", t: "Dashboards" }, h: <>Live data, <strong>one place</strong></>, p: "Every channel side by side, refreshed automatically. Stop stitching screenshots together." },
  { bg: "lavender", badge: { v: "pink", t: "On brand" }, h: <>Your logo, <strong>your colors</strong></>, p: "White-label every report. Clients see your agency, never ours." },
  { bg: "cream", badge: { v: "aqua", t: "Reports" }, h: <>Send on a <strong>schedule</strong></>, p: "Build once, deliver weekly. Reports land in inboxes while you sleep." },
];

function Features() {
  return (
    <section id="features" style={{ background: "var(--porter-white)" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "96px 48px", boxSizing: "border-box" }}>
        <Eyebrow>Why agencies switch</Eyebrow>
        <Heading level="h1" style={{ fontSize: 64, marginTop: 16, maxWidth: 760 }}>
          Reporting that <strong>runs itself</strong>
        </Heading>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 48 }}>
          {FEATURES.map((f, i) => (
            <Card key={i} background={f.bg} bordered={f.bg === "white"} style={{ display: "flex", flexDirection: "column", minHeight: 280 }}>
              <Badge variant={f.badge.v}>{f.badge.t}</Badge>
              <Heading level="h2" style={{ fontSize: 32, marginTop: 22 }}>{f.h}</Heading>
              <p style={{ fontFamily: "var(--font-display)", color: "var(--porter-muted)", lineHeight: 1.55, fontSize: 16, marginTop: 14 }}>{f.p}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function Statement() {
  return (
    <section style={{ background: "var(--porter-purple)", color: "#fff" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", padding: "112px 48px", boxSizing: "border-box", textAlign: "center" }}>
        <Eyebrow style={{ color: "rgba(255,255,255,0.7)" }}>The numbers</Eyebrow>
        <Heading level="display" style={{ color: "#fff", fontSize: "clamp(56px,8vw,116px)", marginTop: 20 }}>
          15 hours<br /><strong style={{ color: "var(--porter-yellow)" }}>saved weekly</strong>
        </Heading>
        <p style={{ fontFamily: "var(--font-display)", fontSize: 19, color: "rgba(255,255,255,0.82)", maxWidth: 520, margin: "28px auto 0", lineHeight: 1.5 }}>
          The average agency reclaims two full working days every month by automating client reporting with Porter.
        </p>
      </div>
    </section>
  );
}

Object.assign(window, { Features, Statement });
