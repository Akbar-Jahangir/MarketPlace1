import React, { useContext } from "react";
import { CartSvg } from "../../assets/svgs";
import {  NavLink } from "react-router-dom";
import { CartContext } from "../../contexts/cartContext/CartContext";

const CartSummary: React.FC = () => {
  const {cart}=useContext(CartContext)
  return (
    <>
    <NavLink to={"cart"}>
      <div className="flex gap-5 font-Montserrat text-lightslate text-lg">
        <CartSvg />
        <p>
          My Cart (<span className="font-semibold text-darkyellow">{cart.length}</span>)
        </p>
      </div>
      </NavLink>
    </>
  );
};

export default CartSummary;
