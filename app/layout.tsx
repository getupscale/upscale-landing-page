import type { Metadata } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import { WaitlistModal } from "@/components/waitlist/waitlist-modal";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"]
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument-serif",
  weight: ["400"],
  style: ["normal", "italic"]
});

export const metadata: Metadata = {
  title: "Upscale - Your Operational Brain",
  description:
    "Upscale is an AI-powered agent that diagnoses what is broken, recommends high-leverage moves, and executes automatically."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${instrumentSerif.variable}`}>
      <body className="overflow-x-hidden bg-background-light font-sans antialiased text-text-light transition-colors duration-300 dark:bg-background-dark dark:text-text-dark">
        {children}
        <WaitlistModal />
      </body>
    </html>
  );
}
