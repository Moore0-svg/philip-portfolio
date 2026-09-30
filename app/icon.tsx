import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
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
          fontSize: 27,
          fontWeight: 800,
          letterSpacing: "-2px",
        }}
      >
        PA<span style={{ color: "#b6ff45" }}>.</span>
      </div>
    ),
    size
  );
}
