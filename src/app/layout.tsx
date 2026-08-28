import type { Metadata } from "next";
import { Graduate, Space_Mono, Inter } from "next/font/google";
import "./globals.css";

const graduate = Graduate({
  variable: "--font-graduate",
  subsets: ["latin"],
  weight: "400",
});

const spaceMono = Space_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ministry of Common Sense",
  description: "COMMON SENSE IS NO LONGER COMMON.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${graduate.variable} ${spaceMono.variable} ${inter.variable} antialiased`}>
      <body className="min-h-screen bg-black text-foreground flex flex-col font-sans selection:bg-neon selection:text-black">
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
