import { motion } from "framer-motion";
import { Link } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  image: string;
  title: string;
  location: string;
  price: string;
  index: number;
}

const ProjectCard = ({ id, image, title, location, price, index }: ProjectCardProps) => {
  return (
    <Link to={`/property/${id}`}>
      <motion.div
        className="group relative premium-card overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ delay: index * 0.12, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Image container */}
        <div className="relative h-72 overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-foreground/10 to-transparent" />

          {/* Price badge */}
          <div className="absolute top-5 right-5 glass rounded-full px-5 py-2 text-xs font-semibold tracking-wider uppercase">
            {price}
          </div>
        </div>

        {/* Content */}
        <div className="p-7">
          <h3 className="text-xl font-display font-semibold mb-1.5 group-hover:gold-text transition-all duration-500">{title}</h3>
          <p className="text-sm text-muted-foreground font-body">{location}</p>

          <div className="mt-5 pt-5 border-t border-border/60 flex items-center justify-between">
            <span className="text-[11px] tracking-[0.2em] uppercase text-muted-foreground font-body font-medium">View Details</span>
            <div className="w-9 h-9 rounded-full gold-gradient flex items-center justify-center group-hover:scale-110 group-hover:gold-glow transition-all duration-500">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-primary-foreground">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default ProjectCard;
