"use client";

import SidebarFilters from "@/components/SidebarFilters";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";
import { useSearchParams } from "next/navigation";
import { useMemo } from "react";

export default function HomePage() {
  const sp = useSearchParams();
  const q = (sp.get("q") ?? "").toLowerCase();
  const cat = sp.get("category");
  const maxPrice = Number(sp.get("price") ?? 1000);

  const list = useMemo(() => {
    return products.filter((p) => {
      const inCat = !cat || cat === "all" || p.category === cat;
      const inPrice = p.price <= maxPrice;
      const inQuery =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q);
      return inCat && inPrice && inQuery;
    });
  }, [q, cat, maxPrice]);

  return (
    <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
      <SidebarFilters />
      <section>
        <h1 className="text-3xl font-bold mb-4">Product Listing</h1>

        {list.length === 0 ? (
          <div className="card p-8 text-center">
            <p className="text-lg font-medium">No products found.</p>
            <p className="text-sm text-slate-600">
              Try adjusting filters or search.
            </p>
          </div>
        ) : (
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {list.map((p) => (
              <ProductCard key={p.id} p={p} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
