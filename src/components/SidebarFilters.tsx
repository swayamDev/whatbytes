"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

const categories = ["all", "electronics", "clothing", "home"] as const;
type Cat = (typeof categories)[number];

export default function SidebarFilters() {
  const router = useRouter();
  const sp = useSearchParams();

  const [cat, setCat] = useState<Cat>("all");
  const [price, setPrice] = useState<number>(1000);

  useEffect(() => {
    const c = sp.get("category") as Cat;
    const pv = sp.get("price");
    if (c) setCat(c);
    if (pv) setPrice(Number(pv));
  }, [sp]);

  useEffect(() => {
    const p = new URLSearchParams(sp.toString());
    cat !== "all" ? p.set("category", cat) : p.delete("category");
    price !== 1000 ? p.set("price", String(price)) : p.delete("price");
    router.replace(`/?${p.toString()}`);
  }, [cat, price, router, sp]);

  return (
    <aside className="card p-5 sticky top-5 h-fit">
      <h3 className="text-xl font-semibold mb-4">Filters</h3>
      <div className="mb-5">
        <p className="text-sm font-medium mb-2">Category</p>
        <div className="space-y-2">
          {categories.map((c) => (
            <label key={c} className="flex items-center gap-2">
              <input
                type="radio"
                checked={cat === c}
                onChange={() => setCat(c)}
              />
              <span className="capitalize">{c}</span>
            </label>
          ))}
        </div>
      </div>
      <div>
        <label htmlFor="price" className="text-sm font-medium mb-2 block">
          Price
        </label>
        <input
          id="price"
          type="range"
          min={0}
          max={1000}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full"
        />
        <div className="flex justify-between text-sm mt-1">
          <span>$0</span> <span>$1000</span>
        </div>
      </div>
    </aside>
  );
}
