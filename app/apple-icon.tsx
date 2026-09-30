import { ImageResponse } from "next/og";

export const size = {
  width: 180,
  height: 180,
};

export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#080a09",
          color: "#f4f7f4",
          fontSize: 72,
          fontWeight: 800,
          letterSpacing: "-5px",
        }}
      >
        PA<span style={{ color: "#b6ff45" }}>.</span>
      </div>
    ),
    size
  );
}
