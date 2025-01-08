import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchBar from "../components/SearchBar";
import CategoryCarousel from "../components/CategoryCarousel";
import CTAButton from "../components/CTAButton";

function HomePage() {
  return (
    <div className="home-page">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <SearchBar />

        {/* Hero Section */}
        <section className="text-center py-12 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-4xl font-bold mb-4">
            Discover Delicious Recipes
          </h1>
          <p className="text-lg text-gray-600 mb-6">
            Explore a world of flavors and find recipes that you'll love!
          </p>
          <CTAButton text="Get Started" link="/recipes" />
        </section>

        {/* Categories Carousel */}
        <section className="py-12">
          <h2 className="text-2xl font-bold mb-4">Explore by Categories</h2>
          <CategoryCarousel />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default HomePage;
