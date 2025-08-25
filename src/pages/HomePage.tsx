// src/pages/HomePage.tsx
import React from "react";
import HeroSection from "@components/common/HeroSection";
import SectionTitle from "@components/common/SectionTitle";
import MenuCard from "@components/menu/MenuCard";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { menuItems } from "@/data/menuData";
import { testimonials } from "@/data/restaurantData";
import { StarIcon } from "@heroicons/react/24/solid";
import SEO from "@/components/common/SEO";

const HomePage: React.FC = () => {
  const navigate = useNavigate();
  const featuredItems = menuItems.filter((item) => item.popular).slice(0, 3);

  return (
    <>
      <SEO
        title="Home"
        description="Experience culinary excellence at Savoria Kitchen. Modern dining with traditional flavors."
        keywords="restaurant, fine dining, Italian cuisine, best restaurant"
      />
      {/* Hero Section */}
      <HeroSection
        title="Welcome to Savoria Kitchen"
        subtitle="Where Every Meal is a Culinary Journey"
        backgroundImage="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600"
        ctaText="View Our Menu"
        ctaAction={() => navigate("/menu")}
        height="full"
      />

      {/* Featured Dishes Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Featured Dishes"
            subtitle="Discover our chef's specially curated selections"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredItems.map((item, index) => (
              <MenuCard key={item.id} item={item} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <button onClick={() => navigate("/menu")} className="btn-primary">
              View Full Menu
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title="Our Story"
                subtitle="A passion for authentic flavors"
                align="left"
              />
              <p className="text-gray-600 mb-6">
                Founded in 2020, Savoria Kitchen brings together traditional
                recipes with modern culinary techniques. Our chef's dedication
                to using only the freshest local ingredients ensures every dish
                tells a story.
              </p>
              <p className="text-gray-600 mb-8">
                From our kitchen to your table, we promise an unforgettable
                dining experience that celebrates the art of fine cuisine.
              </p>
              <button
                onClick={() => navigate("/about")}
                className="btn-primary"
              >
                Learn More About Us
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=600"
                alt="Chef at work"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-8 -left-8 bg-primary-600 text-white p-6 rounded-lg">
                <p className="text-3xl font-bold">20+</p>
                <p className="text-sm">Years of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-secondary-900 text-white">
        <div className="container-custom">
          <SectionTitle
            title="What Our Guests Say"
            subtitle="Real experiences from our valued customers"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg"
              >
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <StarIcon key={i} className="h-5 w-5 text-yellow-400" />
                  ))}
                </div>
                <p className="mb-4 italic">"{testimonial.comment}"</p>
                <p className="font-semibold">{testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container-custom text-center">
          <h2 className="text-4xl font-display font-bold mb-4">
            Ready to Experience Savoria?
          </h2>
          <p className="text-xl mb-8">
            Book your table now and embark on a culinary journey
          </p>
          <button
            onClick={() => navigate("/contact")}
            className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Reserve Your Table
          </button>
        </div>
      </section>
    </>
  );
};

export default HomePage;
