import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./_components/layouts/Navbar";

export const metadata: Metadata = {
  title: "Components Library",
  description: "Get complex components code directly",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
