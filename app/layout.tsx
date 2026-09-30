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
  metadataBase: new URL("https://philipayoola.com"),

  title: {
    default: "Philip Ayoola | Backend Engineer & Technical Founder",
    template: "%s | Philip Ayoola",
  },

  description:
    "Backend engineer and technical founder building scalable products across commerce, logistics and financial technology.",

  keywords: [
    "Philip Ayoola",
    "Backend Engineer",
    "Backend Developer",
    "Node.js Developer",
    "Express.js",
    "PostgreSQL",
    "Prisma",
    "Technical Founder",
    "MartFlex",
    "Settlevo",
    "Nigeria Software Engineer",
  ],

  authors: [
    {
      name: "Philip Ayoola",
    },
  ],

  creator: "Philip Ayoola",

  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://philipayoola.com",
    siteName: "Philip Ayoola",
    title: "Philip Ayoola | Backend Engineer & Technical Founder",
    description:
      "I build technology that solves real business problems across commerce, logistics and financial technology.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Philip Ayoola — Backend Engineer & Technical Founder",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Philip Ayoola | Backend Engineer & Technical Founder",
    description:
      "I build technology that solves real business problems across commerce, logistics and financial technology.",
    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
