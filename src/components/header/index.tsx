import { Search, ShoppingBag } from "lucide-react";

export default function Header() {
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
              <button className="flex items-center gap-2 px-4 py-2 bg-[#FC014A] text-white rounded-full hover:bg-[#fc0148da] transition-all">
                <span>Корзина</span>
                <ShoppingBag />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

