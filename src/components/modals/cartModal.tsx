import React from "react";
import useCartStore from "../../store";
import { Minus, Plus, Trash2, X } from "lucide-react";

export const CartModal: React.FC<{ openModal: boolean, setOpenModal: (value: boolean) => void }> = ({ setOpenModal, openModal }) => {

  console.log(openModal);

  const { getTotalItems, getTotalPrice, removeFromCart, inc, dec, clearCart, cart } = useCartStore()

  return (
    <div className={`flex fixed inset-0 top-0 right-0 w-full h-full bg-[#00000080] z-10 ${openModal ? 'opacity-100 visible' : 'opacity-0 invisible'} transition-all duration-200 ease-in-out`}>
      <div className={`p-2 w-full md:w-[320px] h-[75%] md:h-full bg-white absolute bottom-0 md:top-0 right-0 flex flex-col rounded-t-xl md:rounded-none ${openModal ? 'translate-y-0 md:translate-x-0' : 'translate-y-full md:translate-x-full'} transition-all duration-200 ease-in-out`}>
        <div className="p-2 flex flex-col h-full">
          <div className="flex items-center justify-between ">
            <div>
              Корзине: {getTotalItems()} вещи
            </div>
            <button onClick={() => setOpenModal(false)}>
              <X />
            </button>
          </div>
          <hr className="my-4" />
          <div className="flex flex-auto flex-col overflow-y-scroll">
            {
              cart?.map((item, i) => (
                <div key={i} className="py-2 flex items-center gap-2 not-last-child:border-b-[1px] border-b-solid border-b-gray-200">
                  <div className="w-20 rounded-md overflow-hidden">
                    <img src={item.img} alt={item.name} />
                  </div>
                  <div className="flex flex-col flex-auto gap-1">
                    <div className="w-full flex items-center justify-between">
                      <h5 className="text-base font-semibold">{item.name}</h5>
                      <button onClick={() => removeFromCart(item.id)}>
                        <Trash2 size={16} />
                      </button>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium">{item.price} сум <sup>(1 шт)</sup></p>
                      <div className="px-1 flex gap-2 items-center bg-gray-100 rounded">
                        <button onClick={() => dec(item.id)} className="bg-[#D23232] rounded-sm"> <Minus size={14} color="#fff" /> </button>
                        <p className="text-sm">{item.qty}</p>
                        <button onClick={() => inc(item.id)} className="bg-[#29CC29] rounded-sm"> <Plus size={14} color="#fff" /> </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
          <div>
            <div className="my-2 flex items-baseline justify-between">
              <p className="text-lg">Сумма заказа: </p>
              <p className="text-lg font-semibold">{getTotalPrice().toLocaleString()} сум</p>
            </div>
              <hr className="my-2" />
            <button className="w-full h-10 text-base text-white rounded bg-[#FC014A]"> Оформить заказ</button>
            <button onClick={() => clearCart()} className="w-full h-10 text-base text-white rounded bg-[#FC014A]"> Оформить заказ</button>
          </div>
        </div>
      </div>
    </div >
  )
}