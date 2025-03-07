import React from "react";
import { Hero } from "./Components/Hero";
import { FeaturedProduct } from "./Components/FeaturedProduct";
import { Testimonials } from "./Components/Testimonials";
import { Faq } from "./Components/Faq";
import { useTitle } from "../../Hooks/useTitle";

export const HomePage = () => {
  useTitle("Access Latest Computer Science E-Books");
  return (
    <main>
      <Hero />
      <FeaturedProduct />
      <Testimonials />
      <Faq />
    </main>
  );
};
