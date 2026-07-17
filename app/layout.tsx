import type { Metadata, Viewport } from "next";
import { Poppins, Allura } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

const signature = Allura({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-signature",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arun Kumar - Java Developer & Aspiring Software Engineer",
  description: "An aspiring Java developer and computer science student focused on building reliable, scalable backend systems. Specializing in clean code, problem-solving, and practical engineering solutions.",
  keywords: [
    "Arun Kumar",
    "Java Developer",
    "Aspiring Software Engineer",
    "Computer Science Student",
    "Backend Developer",
    "B.Tech Student",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Arun Kumar" }],
  creator: "Arun Kumar",
  publisher: "Arun Kumar",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://aruncodes.vercel.app",
    title: "Arun Kumar - Java Developer & Aspiring Software Engineer",
    description: "An aspiring Java developer and computer science student focused on building reliable, scalable backend systems.",
    siteName: "Arun Kumar Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arun Kumar - Java Developer & Aspiring Software Engineer",
    description: "An aspiring Java developer and computer science student focused on building reliable, scalable backend systems.",
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
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="canonical" href="https://aruncodes.vercel.app" />
        <script dangerouslySetInnerHTML={{__html: `
          (function() {
            try {
              var storedTheme = localStorage.getItem('theme');
              if (storedTheme) {
                document.documentElement.setAttribute('data-theme', storedTheme);
              } else {
                document.documentElement.setAttribute('data-theme', 'dark');
              }
            } catch (e) {}
          })();
        `}} />
      </head>
      <body
        className={`${poppins.variable} ${signature.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
