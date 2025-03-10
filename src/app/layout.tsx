import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { MyCustomFont } from "../../public/assets/fonts/fonts";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Techtimize",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${MyCustomFont.variable} bg-white`}>
        <div className="container mx-auto">{children}</div>
      </body>
    </html>
  );
}
