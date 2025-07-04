// import React, { useEffect, useState } from "react";
// import Logo from "../../assets/logo.png";
// import { Link } from "react-router-dom";
// import { Search } from "../Sections/Search";
// import { DropdownLoggedout } from "../Elements/DropdownLoggedout";
// import { DropdownLoggedin } from "../Elements/DropdownLoggedin";
// import { useCart } from "../../context";

// export const Header = () => {
//   const { cartList } = useCart();
//   const [dark, setDark] = useState(
//     JSON.parse(localStorage.getItem("dark")) || false
//   );
//   const [show, setShow] = useState(false);
//   const [dropdown, setDropdown] = useState(false);
//   const token = JSON.parse(sessionStorage.getItem("token"));

//   useEffect(() => {
//     localStorage.setItem("dark", JSON.stringify(dark));
//     if (dark) {
//       document.documentElement.classList.add("dark");
//     } else {
//       document.documentElement.classList.remove("dark");
//     }
//   }, [dark]);
//   return (
//     <header>
//       <nav className="bg-white dark:bg-gray-900">
//         <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
//           <Link to="/" className="flex items-center">
//             <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
//             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
//               CodeBook
//             </span>
//           </Link>
//           <div className="flex items-center relative">
//             <span
//               onClick={() => setDark(!dark)}
//               className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
//             ></span>
//             <span
//               onClick={() => setShow(!show)}
//               className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
//             ></span>
//             <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
//               <span className="text-2xl bi bi-cart-fill relative">
//                 <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
//                   {cartList.length}
//                 </span>
//               </span>
//             </Link>
//             <span
//               onClick={() => setDropdown(!dropdown)}
//               className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
//             ></span>

//             {dropdown &&
//               (token ? (
//                 <DropdownLoggedin setDropdown={setDropdown} />
//               ) : (
//                 <DropdownLoggedout setDropdown={setDropdown} />
//               ))}
//           </div>
//         </div>
//       </nav>
//       {show && <Search setSearch={setShow} />}
//     </header>
//   );
// };

import React, { useEffect, useState, useRef } from "react"; // Add useRef
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import { Search } from "../Sections/Search";
import { DropdownLoggedout } from "../Elements/DropdownLoggedout";
import { DropdownLoggedin } from "../Elements/DropdownLoggedin";
import { useCart } from "../../context";

export const Header = () => {
  const { cartList } = useCart();
  const [dark, setDark] = useState(
    JSON.parse(localStorage.getItem("dark")) || false
  );
  const [show, setShow] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const token = JSON.parse(sessionStorage.getItem("token"));

  // Refs for dropdown and trigger
  const dropdownRef = useRef(null);
  const triggerRef = useRef(null);

  // Handle clicks outside dropdown
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        !triggerRef.current.contains(event.target)
      ) {
        setDropdown(false);
      }
    };

    if (dropdown) {
      document.addEventListener("click", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [dropdown]);

  // Dark mode effect
  useEffect(() => {
    localStorage.setItem("dark", JSON.stringify(dark));
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);

  return (
    <header>
      <nav className="bg-white dark:bg-gray-900">
        <div className="border-b border-slate-200 dark:border-b-0 flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-4 md:px-6 py-3">
          <Link to="/" className="flex items-center">
            <img src={Logo} className="mr-3 h-10" alt="CodeBook Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              CodeBook
            </span>
          </Link>
          <div className="flex items-center relative">
            <span
              onClick={() => setDark(!dark)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-gear-wide-connected"
            ></span>
            <span
              onClick={() => setShow(!show)}
              className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search"
            ></span>
            <Link to="/cart" className="text-gray-700 dark:text-white mr-5">
              <span className="text-2xl bi bi-cart-fill relative">
                <span className="text-white text-sm absolute -top-1 left-2.5 bg-rose-500 px-1 rounded-full ">
                  {cartList.length}
                </span>
              </span>
            </Link>
            <span
              ref={triggerRef} // Add ref to trigger
              onClick={() => setDropdown(!dropdown)}
              className="bi bi-person-circle cursor-pointer text-2xl text-gray-700 dark:text-white"
            ></span>

            {dropdown && (
              <div ref={dropdownRef}>
                {" "}
                {/* Add ref to dropdown container */}
                {token ? (
                  <DropdownLoggedin setDropdown={setDropdown} />
                ) : (
                  <DropdownLoggedout setDropdown={setDropdown} />
                )}
              </div>
            )}
          </div>
        </div>
      </nav>
      {show && <Search setSearch={setShow} />}
    </header>
  );
};
