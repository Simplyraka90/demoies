import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ReactNode } from "react";

export const metadata = {
  title: "Delhi Shifting Packers & Movers",
  description: "Delhi Shifting Made Easy with Trusted Packers & Movers",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[#050816] text-white antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
