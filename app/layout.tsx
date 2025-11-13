import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const sfMono = localFont({
  src: [
    {
      path: "../public/fonts/SFMono-Light.otf",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/SFMono-LightItalic.otf",
      weight: "300",
      style: "italic",
    },
    {
      path: "../public/fonts/SFMono-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SFMono-RegularItalic.otf",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/SFMono-Medium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SFMono-MediumItalic.otf",
      weight: "500",
      style: "italic",
    },
    {
      path: "../public/fonts/SFMono-Semibold.otf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SFMono-SemiboldItalic.otf",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/SFMono-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/SFMono-BoldItalic.otf",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/SFMono-Heavy.otf",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/SFMono-HeavyItalic.otf",
      weight: "800",
      style: "italic",
    },
  ],
  variable: "--font-sfmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rino Godson | Portfolio",
  description: "This is the portfolio of Rino Godson, who is a Developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sfMono.className} antialiased`}>{children}</body>
    </html>
  );
}
