import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import Footer from '../../components/footer'
import Header from '../../components/header'
import '../../styles/globals.css'
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
      <body className={openSans.className}>
        <div className="flex flex-col h-screen bg-black text-white">
          <Header />
          {children}
        </div>
        <div className="flex flex-col sm:h-screen">
          <Footer />
        </div>
      </body>
    </html>
  );
}
