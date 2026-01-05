import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fast Follow Forum | AI Community & Trends",
  description: "Join the Fast Follow Forum: A community of AI enthusiasts, developers, and creators based online and in Berlin. Discussing the latest AI tools, sharing projects, and meeting up.",
  metadataBase: new URL('https://fastfollow-v2.vercel.app'), 
  openGraph: {
    title: "Fast Follow Forum",
    description: "Join our AI Ecosystem. We discuss tools, trends, and share what we're building. Online and Berlin based.",
    url: "https://fastfollow-v2.vercel.app",
    siteName: "Fast Follow Forum",
    images: [
      {
        url: "/images/fff-logo.png",
        width: 800,
        height: 800,
        alt: "Fast Follow Forum Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fast Follow Forum",
    description: "Discuss AI tool and trends with our community.",
    images: ["/images/fff-logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geist.variable} ${geistMono.variable} antialiased bg-gray-950 text-gray-100`}
      >
        <div className="flex h-screen flex-col md:flex-row">
          <Navigation />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
