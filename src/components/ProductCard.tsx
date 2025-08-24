"use client";

import Link from "next/link";
import { Product } from "@/lib/products";
import { useCart } from "@/store/cart";
import RatingStars from "./RatingStars";
import Image from "next/image";

export default function ProductCard({ p }: { p: Product }) {
  const add = useCart((s) => s.add);

  return (
    <div className="card p-4">
      <Link href={`/product/${p.id}`} className="block">
        <Image
          src={p.image}
          alt={p.title}
          className="h-40 w-full object-contain"
        />
      </Link>
      <div className="mt-3">
        <Link
          href={`/product/${p.id}`}
          className="font-semibold hover:underline"
        >
          {p.title}
        </Link>
        <div className="mt-1 text-slate-600">${p.price}</div>
        {!!p.rating && (
          <div className="mt-1">
            <RatingStars value={p.rating} />
          </div>
        )}
        <button
          onClick={() => add(p, 1)}
          className="btn btn-primary w-full mt-3"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
