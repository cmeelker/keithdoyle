import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./_lib/components/NavBar";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Keith Doyle",
  description:
    "Keith Doyle is a sculptor and designer based in Vancouver, Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      <body className="bg-white-smoke break-word flex h-full w-full flex-col px-4.5 sm:break-normal md:px-10">
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
