import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CategoryCarousel from "../components/CategoryCarousel";
import CTAButton from "../components/CTAButton";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <header className="bg-hero-pattern bg-cover bg-center h-[500px] flex flex-col items-center justify-center text-white">
        <h1 className="text-5xl font-bold mb-4">Find Your Favorite Recipes</h1>
        <CTAButton text="Get Started" link="/recipes" />
      </header>
      <main className="p-6">
        <h2 className="text-3xl font-bold text-center mb-6">Browse Categories</h2>
        <CategoryCarousel />
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
