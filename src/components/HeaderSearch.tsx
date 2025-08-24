"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function HeaderSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [q, setQ] = useState("");

  useEffect(() => {
    setQ(searchParams.get("q") ?? "");
  }, [searchParams]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const p = new URLSearchParams(searchParams.toString());
    q ? p.set("q", q) : p.delete("q");
    router.push(`/?${p.toString()}`);
  };

  return (
    <form onSubmit={onSubmit} className="mx-auto flex-1 max-w-2xl">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        placeholder="Search for products..."
        className="w-full rounded-xl border border-gray-300 px-4 py-2 text-white"
      />
    </form>
  );
}
