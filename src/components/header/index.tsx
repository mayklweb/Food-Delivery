import { ShoppingBag } from "lucide-react";
import React from "react";
import useCartStore from "../../store";



export const Header: React.FC<{setOpenModal: (value: boolean) => void}> = ({setOpenModal}) => {

  const { getTotalItems } = useCartStore()

  return (
    <nav className="w-full border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#FC014A] hover:text-[#fc0148da] transition-all">LOGO</span>
          </a>

          {/* Search and Cart */}
          <div className="flex gap-2">
            <div className="flex items-center gap-4">
              <button onClick={() => setOpenModal(true)} className="relative flex items-center gap-2 py-2 px-2 md:px-4 bg-[#FC014A] text-white rounded-lg hover:bg-[#fc0148da] transition-all">
                <span className="hidden md:block">Корзина</span>
                <span className={` ${getTotalItems() ? 'block' : 'hidden'} w-4 h-4 text-xs absolute top-[-3px] right-[-3px] md:text-sm md:w-5 md:h-5 bg-white text-[#FC014A] rounded-full`}>{getTotalItems()}</span>
                <ShoppingBag /> 
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

