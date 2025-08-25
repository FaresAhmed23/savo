// src/components/menu/MenuCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "@/types";

interface MenuCardProps {
  item: MenuItem;
  index: number;
}

const MenuCard: React.FC<MenuCardProps> = ({ item, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {item.popular && (
          <span className="absolute top-4 right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            Popular
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-secondary-800">
            {item.name}
          </h3>
          <span className="text-2xl font-bold text-primary-600">
            ${item.price.toFixed(2)}
          </span>
        </div>

        <p className="text-gray-600 text-sm mb-4">{item.description}</p>

        {/* Dietary Tags */}
        {item.dietary && item.dietary.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {item.dietary.map((diet) => (
              <span
                key={diet}
                className="px-3 py-1 bg-accent-500/10 text-accent-600 rounded-full text-xs font-medium"
              >
                {diet}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default MenuCard;
