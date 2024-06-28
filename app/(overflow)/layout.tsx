import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../globals.css";
import Footer from '../../components/footer'
import Header from '../../components/header'
const openSans = Open_Sans({ subsets: ["latin"] });

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
      <body className={openSans.className + "scroll-smooth"}>
        <div className="flex flex-col h-screen">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
