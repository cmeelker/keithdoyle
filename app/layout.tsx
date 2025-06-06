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
      <body className="bg-white-smoke px-4.5 md:px-10 w-full h-full break-word sm:break-normal">
        <NavBar />
        {children}
        <p className="text-cursed-grey absolute bottom-2 right-10 font-[Univers] text-sm">
          © Keith Doyle 2025
        </p>
        <Analytics />
      </body>
    </html>
  );
}
