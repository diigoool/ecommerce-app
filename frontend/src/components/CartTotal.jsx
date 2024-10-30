import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
  const { currency, deliveryFee, getCartAmount, formatCurrency } =
    useContext(ShopContext);

  const subtotal = getCartAmount();
  const total = subtotal === 0 ? 0 : subtotal + deliveryFee;

  return (
    <div className="w-full">
      <div className="text-2xl">
        <Title text1={"CART"} text2={"TOTAL"} />
      </div>
      <div className="flex flex-col text-sm mt-2 gap-2">
        <div className="flex justify-between">
          <p>Subtotal</p>
          <p>{formatCurrency(subtotal)}</p>
        </div>
        <hr />
        <div className="flex justify-between">
          <p>Shipping Fee</p>
          <p>{formatCurrency(deliveryFee)}</p>
        </div>
        <hr />
        <div className="flex justify-between ">
          <b>Total</b>
          <b>{formatCurrency(total)}</b>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;
