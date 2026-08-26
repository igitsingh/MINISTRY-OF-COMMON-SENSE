import type { Metadata } from "next";
import { Graduate } from "next/font/google";
import "./globals.css";

const graduate = Graduate({
  variable: "--font-graduate",
  subsets: ["latin"],
  weight: "400",
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
    <html lang="en" className={`${graduate.variable} antialiased`}>
      <body className="min-h-screen bg-black text-foreground flex flex-col font-sans selection:bg-neon selection:text-black">
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
