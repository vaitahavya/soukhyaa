import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import StructuredData from "@/components/StructuredData";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Soukhyaa - Redefining Hospital Uniforms | Premium Healthcare Apparel India",
  description: "Premium hospital uniforms for healthcare professionals. Comfort, professionalism, and hygiene in one. Serving 500+ hospitals, clinics, and medical institutions across India with ISO certified quality.",
  keywords: "hospital uniforms, medical scrubs, doctor coats, nursing uniforms, healthcare apparel, medical clothing, hospital supplies, lab coats, nursing scrubs, medical uniforms India, hospital clothing, healthcare fashion, medical apparel manufacturers, custom medical uniforms, specialized medical wear",
  authors: [{ name: "Soukhyaa", url: "https://soukhyaa.com" }],
  creator: "Soukhyaa",
  publisher: "Soukhyaa",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://soukhyaa.com'),
  alternates: {
    canonical: '/',
  },
  icons: {
    icon: [
      { url: "/logos/s.png", sizes: "32x32", type: "image/png" },
      { url: "/logos/s-2.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/logos/s.png",
    apple: [
      { url: "/logos/s.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "Soukhyaa - Redefining Hospital Uniforms | Premium Healthcare Apparel",
    description: "Premium hospital uniforms for healthcare professionals. Comfort, professionalism, and hygiene in one. Trusted by 500+ hospitals across India.",
    type: "website",
    locale: "en_IN",
    url: "https://soukhyaa.com",
    siteName: "Soukhyaa",
    images: [
      {
        url: "/logos/Soukhyaa%20logo.png",
        width: 1200,
        height: 630,
        alt: "Soukhyaa - Premium Hospital Uniforms",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Soukhyaa - Redefining Hospital Uniforms",
    description: "Premium hospital uniforms for healthcare professionals. Comfort, professionalism, and hygiene in one.",
    images: ["/logos/Soukhyaa%20logo.png"],
    creator: "@soukhyaa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code", // Add your actual Google Search Console verification code
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
