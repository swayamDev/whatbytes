"use client";

import { suggestions } from "@/lib/products";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function HeaderSearch() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [q, setQ] = useState("");
  const [filtered, setFiltered] = useState<string[]>([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setQ(searchParams.get("q") ?? "");
  }, [searchParams]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const p = new URLSearchParams(searchParams.toString());
    q ? p.set("q", q) : p.delete("q");
    router.push(`/?${p.toString()}`);
    setShow(false);
  };

  const onChange = (val: string) => {
    setQ(val);
    if (val.trim() === "") {
      setFiltered([]);
      setShow(false);
    } else {
      setFiltered(
        suggestions.filter((s) => s.toLowerCase().includes(val.toLowerCase()))
      );
      setShow(true);
    }
  };

  const onSelect = (val: string) => {
    setQ(val);
    setShow(false);
    const p = new URLSearchParams(searchParams.toString());
    p.set("q", val);
    router.push(`/?${p.toString()}`);
  };

  return (
    <div className="relative mx-auto flex-1 max-w-2xl">
      <form onSubmit={onSubmit}>
        <input
          value={q}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search for products..."
          className="w-full rounded-xl border border-gray-300 px-4 py-2 text-white"
          onFocus={() => q && setShow(true)}
        />
      </form>

      {show && filtered.length > 0 && (
        <ul className="absolute z-10 mt-1 w-full rounded-xl border border-gray-300 bg-white shadow-md">
          {filtered.map((item, i) => (
            <li
              key={i}
              onClick={() => onSelect(item)}
              className="cursor-pointer px-4 py-2 hover:bg-gray-100 text-black"
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
