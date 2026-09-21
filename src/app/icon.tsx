import { ImageResponse } from "next/og";

// Dynamic favicon matching the official Senco Gold & Diamonds red emblem badge
export const runtime = "edge";
export const size = { width: 32, height: 32 };
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
          background: "#D3252C", // Official Senco Brand Red
          borderRadius: 7,
          boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ffffff"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Stylized flame / lotus monogram */}
          <path
            d="M12 2C8 7 6 11 6 15a6 6 0 0 0 12 0c0-4-2-8-6-13z"
            fill="#ffffff"
            fillOpacity="0.9"
          />
          <path
            d="M12 9c-1.5 2.5-2.5 4.5-2.5 6.5a2.5 2.5 0 0 0 5 0c0-2-1-4-2.5-6.5z"
            fill="#D3252C"
          />
        </svg>
      </div>
    ),
    { ...size },
  );
}
