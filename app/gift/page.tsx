import { ProductCard } from "@/components/ProductCard";

const giftProducts = [
  { id: "steam-100", name: "Steam Cüzdan 100 TL", price: 100, img: "/steam.jpg" },
  { id: "itunes-100", name: "iTunes 100 TL", price: 100, img: "/itunes.jpg" },
];

export default function GiftPage() {
  const addToCart = (p: any) => {
    console.log("Sepete eklendi:", p);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {giftProducts.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={addToCart} />
      ))}
    </div>
  );
}
