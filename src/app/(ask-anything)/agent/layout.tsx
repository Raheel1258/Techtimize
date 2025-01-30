import ChatbotLayout from "@/components/ChatbotLayout/ChatbotLayout";
import { PropsWithChildren } from "react";

export default function RootLayout({ children }: PropsWithChildren) {
  return <ChatbotLayout>{children}</ChatbotLayout>;
}
