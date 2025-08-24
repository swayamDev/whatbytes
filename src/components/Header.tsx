"use client";

import Link from "next/link";
import { useCart } from "@/store/cart";
import { Suspense } from "react";
import { IoCart } from "react-icons/io5";
import HeaderSearch from "./HeaderSearch";

export default function Header() {
  const items = useCart((s) => s.items);
  const count = items.reduce((s, x) => s + x.qty, 0);

  return (
    <header className="bg-brand text-white">
      <div className="container flex h-16 items-center gap-4">
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>

        <Suspense fallback={<div className="mx-auto flex-1 max-w-2xl" />}>
          <HeaderSearch />
        </Suspense>

        <Link
          href="/cart"
          className="relative btn bg-brand-600 text-white hover:opacity-90"
        >
          <IoCart className="h-5 w-5" />
          <span className="ml-2">Cart</span>
          {count > 0 && (
            <span className="absolute -right-2 -top-2 rounded-full bg-red-500 px-2 text-xs text-white">
              {count}
            </span>
          )}
        </Link>
      </div>
    </header>
  );
}
