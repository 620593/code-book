import React from "react";
import { OrderFail } from "./components/OrderFail";
import { OrderSuccess } from "./components/OrderSuccess";
import { useLocation } from "react-router-dom";
import { useTitle } from "../../Hooks/useTitle";

export const OrderPage = () => {
  useTitle("Order Summary");
  const { state } = useLocation();
  {
    console.log(state.data.user);
  }
  return (
    <main>
      {state.status ? <OrderSuccess data={state.data} /> : <OrderFail />}
    </main>
  );
};
