import { useEffect } from 'react';
import useCartStore from '../../store';
import { ProductsType } from '../../types';

interface ProductsCardProps {
  product: ProductsType;
}

function ProductsCard({ product }: ProductsCardProps) {

  const { addToCart } = useCartStore()
  

  return (
    <div className="p-4 w-[280px] rounded-lg overflow-hidden bg-white shadow-lg">
      <div className="">
        <img
          alt="Les Ailes chicken wings"
          className="object-contain"
          height={300}
          src={product.img}
          style={{
            aspectRatio: "300/300",
            objectFit: "contain",
          }}
          width={300}
        />
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-medium">{product.name}</h3>
        <p className="text-2xl font-bold text-[#FC014A]">
          {product.price} <span className="text-lg">сум</span>
        </p>
        <button onClick={() =>addToCart(product)} className='w-full h-10 mt-2 rounded text-lg text-white bg-[#FC014A] hover:bg-[#fc0148da] transition-all'>Add to cart</button>
      </div>
    </div>
  )
}

export default ProductsCard