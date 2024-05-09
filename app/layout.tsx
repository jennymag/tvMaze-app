import type { Metadata } from "next";
import "./globals.css";
import { Footer, Navbar } from "@/components";

export const metadata: Metadata = {
  title: "TV",
  description: "Discover tv series",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="relative bg-gray-100">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
