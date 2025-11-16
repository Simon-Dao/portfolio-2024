import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "../../styles/globals.css";
import Header from "../../components/header";
import { ReactLenis } from "../../utils/lenis";
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
        <ReactLenis root>
          <div className="flex flex-col max-w-[1500px] m-auto text-white">
            <Header />
            {children}
          </div>
        </ReactLenis>
      </body>
    </html>
  );
}
