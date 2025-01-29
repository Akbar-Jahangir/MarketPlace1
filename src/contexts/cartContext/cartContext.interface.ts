import { CartItemProps } from "../../interfaces/cartItem.interface";

export  interface CartContextProps{
  cart: CartItemProps[];
  addToCart: (item: CartItemProps) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  totalAmount: number;
}