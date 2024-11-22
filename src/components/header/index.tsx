import { Search, ShoppingCart } from "lucide-react";

export default function Header() {
  return (
    <nav className="w-full border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-[#E31837]">LOGO</span>
          </a>

          {/* Search and Cart */}
          <div className="flex gap-2">
            <form className="flex border-[1px] border-solid border-gray-500 rounded-full overflow-hidden focus-within:border-primary ">
              <input className="py-1 px-4 border-none outline-none flex flex-auto" placeholder="Search anything..." type="text" />
              <button className="w-10 flex items-center justify-center">
                <Search />
              </button>
            </form>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 bg-[#E31837] text-white rounded-full hover:bg-red-700">
                <span>Корзина</span>
                <ShoppingCart />
              </button>
            </div>

          </div>
        </div>
      </div>
    </nav>
  )
}

