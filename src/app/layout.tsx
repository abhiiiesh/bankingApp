import type { Metadata } from "next";
import "./globals.css" 

export const metadata: Metadata = {
  title: "Merchant Banking App",
  description: "A merchant banking application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}