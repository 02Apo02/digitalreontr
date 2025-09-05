"use client";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-xl font-bold text-blue-600">DigitalReon</Link>
        <div className="space-x-4">
          <Link href="/pubg" className="hover:text-blue-600">PUBG UC</Link>
          <Link href="/gift" className="hover:text-blue-600">Hediye Kartları</Link>
          <Link href="/cart" className="hover:text-blue-600">Sepetim</Link>
        </div>
      </div>
    </nav>
  );
}
