import { ImageResponse } from "next/og";

export const alt =
  "Philip Ayoola — Backend Engineer, Technical Founder and Product Builder";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "70px 80px",
          background: "#080a09",
          color: "#f4f7f4",
          fontFamily: "Arial, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 500,
            height: 500,
            right: -100,
            top: -120,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(182,255,69,0.12), rgba(8,10,9,0))",
          }}
        />

        <div
          style={{
            display: "flex",
            fontSize: 38,
            fontWeight: 800,
            letterSpacing: "-2px",
          }}
        >
          PA<span style={{ color: "#b6ff45" }}>.</span>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              color: "#b6ff45",
              fontSize: 17,
              fontWeight: 700,
              letterSpacing: "3px",
              marginBottom: 22,
            }}
          >
            BACKEND ENGINEER · TECHNICAL FOUNDER
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: 72,
              lineHeight: 0.98,
              fontWeight: 700,
              letterSpacing: "-5px",
            }}
          >
            <span>I build technology that</span>

            <div style={{ display: "flex" }}>
              solves&nbsp;
              <span style={{ color: "#b6ff45" }}>
                real business problems.
              </span>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: 28,
            borderTop: "1px solid rgba(255,255,255,0.12)",
            color: "#8d9690",
            fontSize: 18,
          }}
        >
          <span>PHILIP AYOOLA</span>

          <span>MartFlex · Settlevo</span>
        </div>
      </div>
    ),
    size
  );
}
