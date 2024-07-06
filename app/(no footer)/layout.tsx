import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../../styles/globals.css";
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
      <body className={openSans.className + " bg-qt"}>
        <div className="flex flex-col">
          <Header />
          {children}
        </div>
      </body>
    </html>
  );
}
