import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "bootstrap/dist/css/bootstrap.css";



export const metadata: Metadata = {
  title: "Репутация участников",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" >
      <body className="bg-dark" >{children}</body>
    </html>
  );
}
