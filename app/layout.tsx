import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Winsten Coellins",
  description: "Winsten Coellins Personal Portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} bg-slate-900 text-white`} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
