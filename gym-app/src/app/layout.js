import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header/Header";
import { Footer } from "@/components/Footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <div className="__next ">
          <Header />
          <main className="main w-full" id="main">
            <div className="w-full" id="mainPage">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
