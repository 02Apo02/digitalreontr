import { ProductCard } from "@/components/ProductCard";

const pubgProducts = [
  { id: "pubg-60", name: "PUBG 60 UC", price: 31, img: "/pubg.jpg" },
  { id: "pubg-325", name: "PUBG 325 UC", price: 149, img: "/pubg.jpg" },
];

export default function PubgPage() {
  const addToCart = (p: any) => {
    console.log("Sepete eklendi:", p);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {pubgProducts.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={addToCart} />
      ))}
    </div>
  );
}
