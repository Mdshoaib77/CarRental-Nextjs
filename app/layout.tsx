import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import "./globals.css";
// slick carousel
import "slick-carousel/slick/slick.css"; 

// import components
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Carvana Rentals",
  description: "Carvana Find, reserve or hire a car effortlessly",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`bg-white text-primary overflow-x-hidden ${poppins.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
