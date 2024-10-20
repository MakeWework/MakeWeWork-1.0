import "./globals.css";
import { Poppins } from "next/font/google";
import Footer from "/src/components/Footer";
import Navbar from "@/components/Navbar";

const inter = Poppins({ subsets: ["latin"], weight: ["400", "700"] });
export const metadata = {
  title: "MakeWeWork",
  description:
    "MakeWeWork is a platform that aims to bridge the gap between unexperienced techies and their first job.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
      
      <Footer />
    </html>
  );
}
