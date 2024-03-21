import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "./compoenent/Header/Header";

const poppins = Poppins({ 
  subsets: ["latin"],
  weight:["400","500","700","900"] ,
  style: ["italic","normal"],
  variable : '--font-poppins',
});


export const metadata: Metadata = {
  title: "Hotel management app",
  description: "Discover the best hotel room",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <main className="font-normal">
          <Header/>
          {children}
          {/* Footer */}
        </main>

      </body>
    </html>
  );
}
