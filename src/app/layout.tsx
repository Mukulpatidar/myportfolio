import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { JsonLd } from "@/components/seo/JsonLd";
import { TooltipProvider } from "@/components/ui/tooltip";

const sansFont = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const monoFont = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#090a0f",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  title: "Mukul Patidar | Java Full Stack Developer",
  description:
    "Portfolio of Mukul Patidar, a Java Full Stack Developer specializing in Spring Boot, Spring Security, REST APIs, JWT, MySQL and backend development.",
  keywords: [
    "Mukul Patidar",
    "Java Developer",
    "Java Full Stack Developer",
    "Spring Boot",
    "Spring Security",
    "REST APIs",
    "JWT",
    "MySQL",
    "Hibernate",
    "Spring Data JPA",
    "Backend Developer",
    "Pune",
  ],
  authors: [{ name: "Mukul Patidar" }],
  creator: "Mukul Patidar",
  metadataBase: new URL("https://mukulpatidar.dev"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Mukul Patidar | Java Full Stack Developer",
    description:
      "Building secure, scalable backend systems with Java and Spring Boot. Specialized in Spring Security, REST APIs, JWT authentication, and MySQL optimization.",
    url: "https://mukulpatidar.dev",
    siteName: "Mukul Patidar Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mukul Patidar | Java Full Stack Developer",
    description:
      "Java Full Stack Developer focused on Spring Boot, Spring Security, REST APIs, JWT authentication, and database-driven applications.",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${sansFont.variable} ${monoFont.variable} font-sans min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-emerald-500/30 selection:text-emerald-200`}
      >
        <TooltipProvider>
          <JsonLd />
          <ScrollProgress />
          <CustomCursor />
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}

