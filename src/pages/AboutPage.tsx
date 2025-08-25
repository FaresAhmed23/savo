// src/pages/AboutPage.tsx
import React from "react";
import HeroSection from "@/components/common/HeroSection";
import SectionTitle from "@/components/common/SectionTitle";
import { motion } from "framer-motion";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const AboutPage: React.FC = () => {
  const values = [
    "Fresh, locally-sourced ingredients",
    "Traditional recipes with modern twists",
    "Exceptional customer service",
    "Sustainable and eco-friendly practices",
  ];

  const teamMembers = [
    {
      name: "Chef Gordon Ramsay",
      role: "Executive Chef",
      image:
        "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/319794_v9_bb.jpg",
      bio: "20+ years of culinary excellence",
    },
    {
      name: "Maria Santos",
      role: "Pastry Chef",
      image:
        "https://images.unsplash.com/photo-1595475038784-bbe439ff41e6?w=400",
      bio: "Award-winning dessert specialist",
    },
    {
      name: "David Chen",
      role: "Sommelier",
      image: "https://images.unsplash.com/photo-1559575003-fb4ee38a747d?w=400",
      bio: "Expert in wine pairing",
    },
  ];

  return (
    <>
      <HeroSection
        title="Our Story"
        subtitle="A journey of passion and flavor"
        backgroundImage="https://images.unsplash.com/photo-1537047902294-62a40c20a6ae?w=1600"
        height="medium"
      />

      {/* History Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1552566626-52f8b828add9?w=600"
                alt="Restaurant interior"
                className="rounded-lg shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <SectionTitle
                title="Established 2020"
                subtitle="Born from a love of authentic cuisine"
                align="left"
              />
              <p className="text-gray-600 mb-4">
                Savoria Kitchen began as a dream shared by Chef Giovanni Rossi
                and his team of culinary artists. With decades of combined
                experience in the world's finest kitchens, they came together to
                create something special.
              </p>
              <p className="text-gray-600 mb-6">
                Our restaurant is more than just a place to eat; it's a
                destination where food lovers can experience the perfect blend
                of traditional techniques and innovative flavors.
              </p>

              <div className="space-y-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircleIcon className="h-5 w-5 text-primary-600 mr-3" />
                    <span className="text-gray-700">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <SectionTitle
            title="Meet Our Team"
            subtitle="The talented individuals behind every dish"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-48 h-48 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-secondary-800">
                  {member.name}
                </h3>
                <p className="text-primary-600 font-medium">{member.role}</p>
                <p className="text-gray-600 mt-2">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-20">
        <div className="container-custom text-center">
          <SectionTitle
            title="Recognition & Awards"
            subtitle="Honored for our commitment to excellence"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-semibold mb-2">
                Best New Restaurant
              </h3>
              <p className="text-gray-600">City Dining Awards 2021</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-semibold mb-2">
                Excellence in Service
              </h3>
              <p className="text-gray-600">Hospitality Excellence 2022</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">🍷</div>
              <h3 className="text-xl font-semibold mb-2">
                Best Wine Selection
              </h3>
              <p className="text-gray-600">Wine Spectator 2023</p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
