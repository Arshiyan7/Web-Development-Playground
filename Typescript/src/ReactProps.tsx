// interface ProductCardProps {
//   name: string;
//   price: number;
//   inStock: boolean;
//   discount?: number;
//   onAddToCart: (name: string) => void;
// }

// function ProductCard({ name, price, inStock, discount, onAddToCart }: ProductCardProps) {
//   return (
//     <div>
//       <h3>{name}: ${price}</h3>
//       {discount && <small>{discount}% off</small>}
//       <button disabled={!inStock} onClick={() => onAddToCart(name)}>
//         Add to cart
//       </button>
//     </div>
//   );
// }

// <ProductCard name="Cake" price={20} inStock={true} onAddToCart={(n) => console.log(n)} />