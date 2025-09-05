import { ProductCard } from "@/components/ProductCard";

const featured = [
  { id: "gplay-100", name: "Google Play 100 TL", price: 100, img: "/gplay.jpg" },
  { id: "pubg-60", name: "PUBG 60 UC", price: 31, img: "/pubg.jpg" },
];

export default function HomePage() {
  const addToCart = (p: any) => {
    console.log("Sepete eklendi:", p);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {featured.map((p) => (
        <ProductCard key={p.id} product={p} onAdd={addToCart} />
      ))}
    </div>
  );
}
