"use client";

import { useParams } from "next/navigation";
import { products } from "@/lib/products";
import { useCart } from "@/store/cart";
import RatingStars from "@/components/RatingStars";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const p = products.find((x) => x.id === id);
  const add = useCart((s) => s.add);

  if (!p) return <div className="card p-6">Product not found.</div>;

  return (
    <div className="grid gap-8 lg:grid-cols-2">
      <div className="card p-6 flex items-center justify-center">
        <img
          src={p.image}
          alt={p.title}
          className="max-h-[420px] object-contain"
        />
      </div>

      <div className="card p-6">
        <h1 className="text-3xl font-bold">{p.title}</h1>
        {!!p.rating && (
          <div className="mt-2">
            <RatingStars value={p.rating} />
          </div>
        )}
        <div className="mt-3 text-2xl font-semibold">${p.price}</div>

        <p className="mt-4 text-slate-700">{p.description}</p>
        <div className="mt-4 text-sm">
          <span className="badge mr-2">Category: {p.category}</span>
          {p.brand && <span className="badge">Brand: {p.brand}</span>}
        </div>

        <div className="mt-6 flex items-center gap-3">
          <label className="text-sm">Qty</label>
          <input
            type="number"
            min={1}
            defaultValue={1}
            id="qty"
            className="w-20 rounded-xl border px-3 py-2"
          />
          <button
            className="btn btn-primary"
            onClick={() => {
              const qty = Number(
                (document.getElementById("qty") as HTMLInputElement).value || 1
              );
              add(p, qty);
            }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
