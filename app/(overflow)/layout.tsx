import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../../styles/globals.css";
import Footer from '../../components/footer'
import Header from '../../components/header'
const openSans = Open_Sans({ subsets: ["latin"] });
import {ReactLenis} from '../../utils/lenis'

export const metadata: Metadata = {
  title: "Simon Dao",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={openSans.className + " scroll-smooth"}>
        <ReactLenis root>
          <div className="flex flex-col bg-black text-white max-w-[1300px] m-auto">
            <Header />
            {children}
          </div>
          <div className="flex flex-col h-screen">
            <Footer />
          </div>
        </ReactLenis>
      </body>
    </html>
  );
}
