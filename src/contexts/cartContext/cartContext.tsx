import React, {createContext, useState } from "react";
import { CartContextProps } from "./cartContext.interface";
import { ContextProviderProps } from "../../interfaces/ContextProviderProps.interface";
import { CartItemProps } from "../../interfaces/cartItem.interface";

const inititalCartContext: CartContextProps = {
cart:[],
addToCart:()=>{},
removeFromCart:()=>{},
 clearCart:()=>{},
 totalAmount:0
};
export const CartContext =createContext<CartContextProps>(inititalCartContext)

export const CartProvider:React.FC<ContextProviderProps>=({children})=>{
   const [cart, setCart] = useState<CartItemProps[]>([]);
     // Add an item to the cart
  const addToCart = (item: CartItemProps) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity,price:cartItem.price+item.price }
            : cartItem
        );
      }
      return [...prevCart, item];
    });
  };

   const totalAmount = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);

   const removeFromCart = (id: string) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

   const clearCart = () => {
    setCart([]);
  };

  return(
    <CartContext.Provider  value={{
      cart,
      addToCart,
      removeFromCart,
      clearCart,
      totalAmount,
    }}>
      {children}
    </CartContext.Provider>
  )
}


