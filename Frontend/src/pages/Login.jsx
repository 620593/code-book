import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login } from "../services/authService";
import { useTitle } from "../hooks/useTitle";

export const Login = () => {
  const navigate = useNavigate();
  const email = useRef();
  const password = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const authDetail = {
        email: email.current.value,
        password: password.current.value,
      };
      const data = await login(authDetail);
      data.accessToken ? navigate("/") : toast.error(data);
    } catch (error) {
      toast.error(error.message, {
        closeButton: true,
        position: "bottom-center",
        closeOnClick: true,
      });
    }
  };

  const handleGuestLogin = () => {
    navigate("/register");
  };

  useTitle("Login");

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-4">
      <section className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl hover:scale-105">
        <p className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-8">
          Login
        </p>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your email
            </label>
            <input
              ref={email}
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:text-white placeholder-gray-400"
              placeholder="shubham@example.com"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your password
            </label>
            <input
              ref={password}
              name="password"
              type="password"
              id="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:text-white placeholder-gray-400"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
          >
            Log In
          </button>
        </form>
        <button
          onClick={handleGuestLogin}
          className="w-full mt-4 bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all duration-300"
        >
          Sign up
        </button>
      </section>
    </main>
  );
};
