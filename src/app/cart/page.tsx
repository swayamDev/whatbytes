"use client";

import Link from "next/link";
import { useCart } from "@/store/cart";
import Image from "next/image";

export default function CartPage() {
  const { items, update, remove, clear, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="flex flex-col min-h-screen">
        <div className="card p-8 text-center">
          <p className="text-lg">Your cart is empty.</p>
          <Link href="/" className="btn btn-primary mt-4">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 grid gap-6 lg:grid-cols-[1fr_360px]">
        <div className="card p-4">
          {items.map(({ product, qty }) => (
            <div
              key={product.id}
              className="flex items-center gap-4 border-b py-4 last:border-0"
            >
              <Image
                src={product.image}
                className="h-20 w-20 object-contain"
                alt=""
                width={80}
                height={80}
              />
              <div className="flex-1">
                <p className="font-medium">{product.title}</p>
                <p className="text-sm text-slate-600">${product.price}</p>
              </div>
              <input
                type="number"
                min={1}
                value={qty}
                onChange={(e) => update(product.id, Number(e.target.value))}
                className="w-20 rounded-xl border px-2 py-1"
              />
              <button onClick={() => remove(product.id)} className="btn px-3">
                Remove
              </button>
            </div>
          ))}
        </div>
        <aside className="card p-6 h-fit sticky top-5">
          <h2 className="text-xl font-semibold mb-4">Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal</span>
            <span>${total().toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-4 text-slate-600 text-sm">
            <span>Shipping</span>
            <span>Calculated at checkout</span>
          </div>
          <button className="btn btn-primary w-full">Checkout</button>
          <button onClick={clear} className="btn w-full mt-2">
            Clear Cart
          </button>
        </aside>
      </main>
    </div>
  );
}
