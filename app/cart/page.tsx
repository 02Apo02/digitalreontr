"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function CartPage() {
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("cart");
    if (stored) setCart(JSON.parse(stored));
  }, []);

  const removeItem = (id: string) => {
    const updated = cart.filter((p) => p.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const checkout = () => {
    alert("Ödeme ekranı burada olacak");
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Sepetim</h2>
      {cart.length === 0 ? (
        <p>Sepet boş.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center bg-white shadow-md rounded-xl p-3">
              <span>{item.name} - {item.price} TL</span>
              <Button variant="destructive" onClick={() => removeItem(item.id)}>Kaldır</Button>
            </div>
          ))}
          <Button className="w-full mt-4" onClick={checkout}>Ödemeye Geç</Button>
        </div>
      )}
    </div>
  );
}
