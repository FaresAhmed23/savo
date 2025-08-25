// src/pages/MenuPage.tsx
import React, { useState } from "react";
import HeroSection from "@/components/common/HeroSection";
import SectionTitle from "@/components/common/SectionTitle";
import MenuCard from "@/components/menu/MenuCard";
import { menuItems } from "@/data/menuData";
import { motion } from "framer-motion";

const MenuPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const categories = [
    { id: "all", name: "All Items" },
    { id: "appetizer", name: "Appetizers" },
    { id: "main", name: "Main Courses" },
    { id: "dessert", name: "Desserts" },
    { id: "beverage", name: "Beverages" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <>
      <HeroSection
        title="Our Menu"
        subtitle="Crafted with passion, served with love"
        backgroundImage="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600"
        height="medium"
      />

      <section className="py-20">
        <div className="container-custom">
          <SectionTitle
            title="Explore Our Dishes"
            subtitle="Fresh ingredients, authentic flavors"
          />

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeCategory === category.id
                    ? "bg-primary-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Menu Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
