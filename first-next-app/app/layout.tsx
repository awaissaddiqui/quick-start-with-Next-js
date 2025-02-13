import type { Metadata } from "next";
export const dynamic = 'force-dynamic';

import "./globals.css";
import Link from "next/link";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <nav className="flex md:justify-center gap-8 p-4 bg-gray-800 text-white">
          <Link href="/" className="font-bold text-lg">Home</Link>
          <Link href="/products" className="font-bold text-lg">Products</Link>
          <Link href="/checkout" className="font-bold text-lg">Checkout</Link>
          <Link href="/cart" className="font-bold text-lg">Cart</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
