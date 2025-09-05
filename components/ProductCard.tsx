"use client";
import { Button } from "@/components/ui/button";

export function ProductCard({ product, onAdd }: any) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-4 flex flex-col">
      <img src={product.img} alt={product.name} className="rounded-lg w-full h-40 object-cover" />
      <h3 className="mt-2 text-lg font-semibold">{product.name}</h3>
      <p className="text-gray-600">{product.price} TL</p>
      <Button className="mt-auto" onClick={() => onAdd(product)}>Sepete Ekle</Button>
    </div>
  );
}
