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
        <p className="text-cursed-grey absolute right-4.5 bottom-1 font-[Univers] text-sm md:right-10 md:bottom-2">
          © Keith Doyle 2025
        </p>
        <Analytics />
      </body>
    </html>
  );
}
