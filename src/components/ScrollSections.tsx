import { motion } from "framer-motion";

const sections = [
  {
    label: "01",
    title: "Where Quality Meets Trust",
    description: "We specialize in crafting enduring residential and commercial spaces that blend superior craftsmanship with sustainable practices. Our commitment to integrity, transparency, and cutting-edge technology ensures every project exceeds expectations.",
    image: "/Image/H1.jpeg",
    stats: [
      { value: "120+", label: "Premium Units" },
      { value: "360°", label: "City Views" },
    ],
  },
  {
    label: "02",
    title: "Crafting Luxury Living Experiences",
    description: "At Shirodkar Group, we don’t just construct buildings. we craft luxury living experiences. Every project is thoughtfully designed to blend elegance, comfort, and modern architecture, creating spaces that reflect your aspirations and lifestyle.",
    image: "/Image/h2.jpeg",
    stats: [
      { value: "5-12", label: "Bedrooms" },
      { value: "2+ Acres", label: "Estate Size" },
    ],
  },
  {
    label: "03",
    title: "Your Vision, Our Commitment",
    description: "We believe a home is more than a place, it’s a symbol of success, prestige, and lasting memories. With a strong commitment to premium quality, timely delivery, and trusted excellence, we turn your vision into reality.",
    image: "/Image/H3.jpeg",
    stats: [
      { value: "50+", label: "Floors" },
      { value: "$8M+", label: "Starting" },
    ],
  },
];

const ScrollSections = () => {
  return (
    <section className="section-padding">
      <div className="max-w-6xl mx-auto space-y-32 md:space-y-44">
        {sections.map((section, i) => (
          <motion.div
            key={section.label}
            className={`flex flex-col md:flex-row items-center gap-12 md:gap-20 ${i % 2 !== 0 ? "md:flex-row-reverse" : ""}`}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex-1">
              <motion.span
                className="text-7xl md:text-8xl font-display font-bold gold-text opacity-20 select-none"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 0.2, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {section.label}
              </motion.span>
              <h3 className="text-3xl md:text-display-md font-display font-bold mt-1 mb-5 tracking-tight">{section.title}</h3>
              <p className="text-muted-foreground text-base md:text-lg leading-[1.8]">{section.description}</p>
              <div className="mt-8 w-20 h-px gold-gradient" />

              {/* Stats */}
              <div className="flex gap-10 mt-8">
                {section.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl md:text-3xl font-display font-bold gold-text">{stat.value}</p>
                    <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className="flex-1 w-full aspect-[4/3] max-w-md rounded-2xl overflow-hidden premium-card"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="w-full h-full bg-gradient-to-br from-secondary via-secondary to-muted flex items-center justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/3" />
                <span className="text-muted-foreground/30 text-xs tracking-[0.3em] uppercase relative z-10">
                  <img src={section.image} alt="property"
                    className="w-full h-full object-cover rounded-2xl" />
                </span>

              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ScrollSections;
