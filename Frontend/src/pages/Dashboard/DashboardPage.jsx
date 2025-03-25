import { useState, useEffect } from "react";
import { DashboardCard } from "./components/DashboardCard";
import { DashboardEmpty } from "./components/DashboardEmpty";
import { useTitle } from "../../Hooks/useTitle";
import { getUserOrders } from "../../services/dataService";
import { toast } from "react-toastify";

export const DashboardPage = () => {
  const [orders, setOrders] = useState([]);
  useTitle("Dashboard");

  useEffect(() => {
    async function fetchOrders() {
      try {
        const data = await getUserOrders();
        setOrders(data);
      } catch (error) {
        toast.error(error.message, {
          closeButton: true,
          position: "bottom-center",
          closeOnClick: true,
        });
      }
    }
    fetchOrders();
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-6">
      <section className="max-w-7xl mx-auto">
        <p className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-10 underline underline-offset-8">
          My Dashboard
        </p>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {orders.length > 0 ? (
            orders.map((order) => (
              <DashboardCard key={order.id} order={order} />
            ))
          ) : (
            <DashboardEmpty />
          )}
        </section>
      </section>
    </main>
  );
};
