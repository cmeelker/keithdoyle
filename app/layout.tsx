import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Keith Doyle",
  description: "Keith Doyle is a sculptor and designer based in Vancouver, Canada.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
