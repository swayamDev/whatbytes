"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/store/cart";
import { useState } from "react";
import { IoCart } from "react-icons/io5";

export default function Header() {
  const items = useCart((s) => s.items);
  const count = items.reduce((s, x) => s + x.qty, 0);
  const router = useRouter();
  const searchParams = useSearchParams();
  const [q, setQ] = useState(searchParams.get("q") ?? "");

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const p = new URLSearchParams(searchParams.toString());
    q ? p.set("q", q) : p.delete("q");
    router.push(`/?${p.toString()}`);
  };

  return (
    <header className="bg-brand text-white">
      <div className="container flex h-16 items-center gap-4">
        <Link href="/" className="text-2xl font-bold">
          Logo
        </Link>

        <form onSubmit={onSubmit} className="mx-auto flex-1 max-w-2xl">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search for products..."
            className="w-full rounded-xl border border-gray-300 px-4 py-2 text-white"
          />
        </form>

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
