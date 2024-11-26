import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Profile from "@/components/Profile";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Islem's Portfolio",
  description: "Generated Islem",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        <Navbar />
        <div className="container pt-8 mx-auto lg:grid lg:grid-cols-3 lg:gap-4 lg:pt-[80px] lg:pb-[80px] flex flex-col">
          <div className="flex justify-center">
            <Profile />
          </div>
          <div className="lg:col-span-2 rounded-md pb-8 mt-4 md:mt-0">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}

