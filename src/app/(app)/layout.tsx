// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import Navbar from "@/components/Navbar/Navbar";
// import Footer from "@/components/Footer/Footer";
// import "../globals.css";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "Techtimize",
//   description: "Generated by create next app",
// };

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <>
//       <Navbar />
//       <main className="page-pt bg-white">{children}</main>
//       <Footer />
//     </>
//   );
// }

import ChatbotLayout from "@/components/ChatbotLayout/ChatbotLayout";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return <ChatbotLayout>{children}</ChatbotLayout>;
}
