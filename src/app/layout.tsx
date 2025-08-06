import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "~ Warren G ~ | Full-Stack Developer & Digital Architect",
  description: "Full-Stack Developer & Digital Architect | Portfolio of Warren G.",
  openGraph: {
    title: "~ Warren G ~ | Full-Stack Developer & Digital Architect",
    description: "Full-Stack Developer & Digital Architect | Portfolio of Warren G.",
    images: [
      {
        url: "https://devwarreng.vercel.app/images/profile.jpg",
        width: 800,
        height: 800,
        alt: "Warren G Profile Image",
      },
    ],
    url: "https://devwarreng.vercel.app/",
  },
  twitter: {
    card: "summary_large_image",
    title: "~ Warren G ~ | Full-Stack Developer & Digital Architect",
    description: "Full-Stack Developer & Digital Architect | Portfolio of Warren G.",
    images: ["https://devwarreng.vercel.app/images/profile.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
