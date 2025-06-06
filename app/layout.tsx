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
    <html lang="en">
      <body className="bg-white-smoke px-10 w-screen h-screen">
        <NavBar />
        {children}
        <p className="text-cursed-grey absolute bottom-2 right-10 font-[Univers]">
          © Keith Doyle 2025
        </p>
        <Analytics />
      </body>
    </html>
  );
}
