import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "SuperSniperPlus - Powerful Screen Capture & Editing Tool for Windows",
  description:
    "Capture, annotate, and share screenshots instantly. SuperSniperPlus is a lightweight, powerful screen capture tool with pro annotation features, privacy tools, and visual history.",
  keywords: [
    "screen capture",
    "screenshot tool",
    "image editor",
    "annotation",
    "Windows",
    "productivity",
  ],
  openGraph: {
    title: "SuperSniperPlus - Screen Capture Redefined",
    description:
      "The fastest way to capture, edit, and share your screen on Windows.",
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#0a0a0f",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} bg-[#0a0a0f]`}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
