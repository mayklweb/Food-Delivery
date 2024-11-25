import { create } from 'zustand'
import { ProductsType } from '../types'


interface CartItem extends ProductsType {
  qty: number
}

interface CartState {
  cart: CartItem[]
  addToCart: (product: CartItem) => void
  removeFromCart: (productId: number) => void
  clearCart: () => void
  getTotalItems: () => number
  getTotalPrice: () => number
  inc: (id: number) => void
  dec: (id: number) => void
}

const useCartStore = create<CartState>((set, get) => ({
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const checkCart = state.cart.find((item) => item.id === product.id)
      if (checkCart) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          ),
        }
      }
      return { cart: [...state.cart, { ...product, qty: 1 }] }
    }),

  inc: (id) =>
    set((state) => {
      const finedItem = state.cart.find((item) => item.id === id)
      return { cart: [...state.cart, { ...finedItem, qty: + 1 }] }
    }),

  dec: (id) =>
    set((state) => {
      const finedItem = state.cart.find((item) => item.id === id)
      return { cart: [...state.cart, { ...finedItem, qty: - 1 }] }
    }),

  removeFromCart: (productId) =>
    set((state) => ({
      cart: state.cart.filter((item) => item.id !== productId),
    })),

  clearCart: () => set({ cart: [] }),

  getTotalItems: () => {
    const { cart } = get()
    return cart.reduce((total, item) => total + item.qty, 0)
  },

  getTotalPrice: () => {
    const { cart } = get()
    return cart.reduce((total, item) => total + item.price * item.qty, 0)
  },
}))

export default useCartStore

