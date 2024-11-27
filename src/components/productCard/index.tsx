import React from 'react';
import useCartStore from '../../store';
import { ProductsType } from '../../types';
import toast, { Toast } from 'react-hot-toast';
import { Minus, Plus, X } from 'lucide-react';


export const ProductCard: React.FC<{ product: ProductsType }> = ({ product }) => {
  const { addToCart, cart, inc, dec } = useCartStore()

  const foundedItem = cart.find((item) => item.id === product.id)

  const decrease = (id: number) => {
    if (foundedItem) {
      dec(id)
    }
    else {
      toast.error('error')
    }
  }

  const addCart = (product: ProductsType) => {
    addToCart(product)
    toast.custom((t: Toast) => (
      <div className={`${t.visible ? 'animate-enter' : 'animate-leave'} w-[240px] bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
        <div className="flex-1 w-0 p-2">
          <div className="flex items-start justify-between">
            <div className='flex items-center'>
              <div className="w-10 h-10 flex items-center justify-center">
                <img
                  className='object-contain'
                  src={product.img}
                  alt={product.name}
                />
              </div>
              <div className="ml-3 flex flex-col flex-auto">
                <p className="text-sm font-normal leading-[100%]">
                  {product.name}
                </p>
                <p className="mt-1 text-xs leading-[100%]">
                  {product.price} сум
                </p>
              </div>
            </div>
            <button onClick={() => toast.dismiss(t.id)}>
              <X size={16} />
            </button>
          </div>
        </div>
      </div>
    ))
  }

  return (
    <div className="p-2 md:p-4 w-[100%] h-full flex flex-col rounded-lg overflow-hidden bg-white shadow-md hover:shadow-lg transition-all">
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
      <div className="mt-4 flex flex-col justify-between flex-auto">
        <h3 className="text-sm md:text-lg text-pretty font-medium">{product.name}</h3>
        <p className="h-full text-base md:text-xl font-bold text-[#FC014A] flex-auto">
          {product.price} <span className="text-lg">сум</span>
        </p>
        {

          !foundedItem ? <button onClick={() => addCart(product)} className='w-full mt-2 p-1 md:py-[6px] rounded text-base text-white bg-[#FC014A] hover:bg-[#fc0148da] transition-all'>Add to cart</button>
            :
            <div className='mt-2 p-1 md:p-2 flex items-center justify-between bg-gray-100 rounded transition-all'>
              <button onClick={() => decrease(product.id)} className='bg-[#D23232] rounded-sm'><Minus color="#fff" /></button>
              <p>{foundedItem.qty}</p>
              <button onClick={() => inc(product.id)} className='bg-[#29CC29] rounded-sm'><Plus color="#fff" /></button>
            </div>
        }
      </div>
    </div>
  )
}