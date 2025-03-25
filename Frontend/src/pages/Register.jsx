// import React from "react";
// import { useTitle } from "../Hooks/useTitle";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { register } from "../services/authService";

// export const Register = () => {
//   const navigate = useNavigate();
//   useTitle("Register");
//   async function handleRegister(event) {
//     event.preventDefault();
//     try {
//       const authDetail = {
//         name: event.target.name.value,
//         email: event.target.email.value,
//         password: event.target.password.value,
//       };
//       const data = await register(authDetail);
//       data.accessToken ? navigate("/") : toast.error("Email already exists");
//     } catch (error) {
//       toast.error(error.message, {
//         closeButton: true,
//         position: "bottom-center",
//         closeOnClick: true,
//       });
//     }
//   }
//   return (
//     <main>
//       <section>
//         <p className="text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8">
//           Register
//         </p>
//       </section>
//       <form onSubmit={handleRegister}>
//         <div className="mb-6">
//           <label
//             htmlFor="name"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Your name
//           </label>
//           <input
//             type="name"
//             id="name"
//             name="name"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//             placeholder="Shubham Sarda"
//             required
//             autoComplete="off"
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="email"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Your email
//           </label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//             placeholder="shubham@example.com"
//             required
//             autoComplete="off"
//           />
//         </div>
//         <div className="mb-6">
//           <label
//             htmlFor="password"
//             className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
//           >
//             Your password
//           </label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
//             required
//             minLength="7"
//           />
//         </div>
//         <button
//           type="submit"
//           className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
//         >
//           Register
//         </button>
//       </form>
//     </main>
//   );
// };

import React from "react";
import { useTitle } from "../Hooks/useTitle";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/authService";

export const Register = () => {
  const navigate = useNavigate();
  useTitle("Register");

  async function handleRegister(event) {
    event.preventDefault();
    try {
      const authDetail = {
        name: event.target.name.value,
        email: event.target.email.value,
        password: event.target.password.value,
      };
      const data = await register(authDetail);
      data.accessToken ? navigate("/") : toast.error("Email already exists");
    } catch (error) {
      toast.error(error.message, {
        closeButton: true,
        position: "bottom-center",
        closeOnClick: true,
      });
    }
  }

  return (
    <main className="flex items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-purple-50 dark:from-gray-800 dark:to-gray-900 p-4">
      <section className="w-full max-w-md bg-white dark:bg-gray-800 rounded-lg shadow-2xl p-8 transform transition-all duration-300 hover:shadow-3xl hover:scale-105">
        <p className="text-3xl text-center font-bold text-gray-800 dark:text-white mb-8">
          Register
        </p>
        <form onSubmit={handleRegister} className="space-y-6">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:text-white placeholder-gray-400"
              placeholder="Shubham Sarda"
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
            >
              Your email
            </label>
            <input
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
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 dark:bg-gray-700 dark:text-white placeholder-gray-400"
              required
              minLength="7"
            />
          </div>
          <p className="text-white">already have an account?</p>
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all duration-300"
          >
            Register
          </button>
        </form>
      </section>
    </main>
  );
};
