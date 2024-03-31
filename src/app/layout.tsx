import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hao Chen",
  description: "About me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-zinc-100 flex justify-center items-center h-screen">{children}</body>
    </html>
  );
}
