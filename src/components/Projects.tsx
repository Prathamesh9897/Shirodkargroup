import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { properties } from "@/data/properties";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Projects = () => {
  const location = useLocation();
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);

      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);
  return (
    <section className="section-padding bg-gradient-to-b from-background via-secondary/30 to-background" >
      <div className="section-container">
        <motion.div
          className="text-center mb-20 md:mb-24"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 gold-gradient" />
            <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground font-body font-medium">Portfolio</p>
            <div className="h-px w-10 gold-gradient" />
          </div>
          <h2 className="text-display-md md:text-display-lg font-display font-bold">
            Current  <span className="gold-text italic">Projects</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {properties.map((property, index) => (
            <ProjectCard
              key={property.id}
              id={property.id}
              image={property.image}
              title={property.title}
              location={property.location}
              price={property.price}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
