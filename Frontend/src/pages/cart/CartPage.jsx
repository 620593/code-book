import React from "react";
import { CartEmpty } from "./Components/CartEmpty";
import { CartList } from "./Components/CartList";
import { useCart } from "../../context";
import { useTitle } from "../../hooks/useTitle";

export const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`cart (${cartList.length})`);
  return <main>{!cartList.length ? <CartEmpty /> : <CartList />}</main>;
};
