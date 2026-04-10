import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    quote: "AURUM transformed our vision into reality. The attention to detail in finding our dream penthouse was extraordinary.",
    author: "Victoria Harrington",
    title: "CEO, Harrington Capital",
    avatar: "VH",
  },
  {
    quote: "From the first meeting to closing, the experience was nothing short of exceptional. They understand luxury at a level that's rare to find.",
    author: "James Worthington III",
    title: "Private Investor",
    avatar: "JW",
  },
  {
    quote: "We've worked with many real estate firms across the globe. AURUM's curated approach and discretion set them apart entirely.",
    author: "Sophia Chen-Nakamura",
    title: "Art Collector & Philanthropist",
    avatar: "SC",
  },
  {
    quote: "The seamless integration of technology with white-glove service made our waterfront purchase effortless and enjoyable.",
    author: "Alexander Petrov",
    title: "Tech Entrepreneur",
    avatar: "AP",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((c) => (c + 1) % testimonials.length), 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Decorative soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-primary/[0.03] blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto relative">
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-4 mb-5">
            <div className="h-px w-10 gold-gradient" />
            <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground font-body font-medium">Testimonials</p>
            <div className="h-px w-10 gold-gradient" />
          </div>
          <h2 className="text-display-md md:text-display-lg font-display font-bold">
            Client <span className="gold-text italic">Stories</span>
          </h2>
        </motion.div>

        {/* Quote mark */}
        <div className="text-center mb-6">
          <span className="text-9xl font-display gold-text leading-none select-none opacity-30">"</span>
        </div>

        {/* Carousel */}
        <div className="relative min-h-[240px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -25 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="text-center"
            >
              <p className="text-xl md:text-2xl lg:text-[1.7rem] font-display font-light leading-[1.6] italic text-foreground/85 mb-12 max-w-3xl mx-auto">
                {testimonials[current].quote}
              </p>
              <div className="flex items-center justify-center gap-5">
                <div className="w-14 h-14 rounded-full gold-gradient flex items-center justify-center text-primary-foreground font-display font-semibold text-sm gold-glow">
                  {testimonials[current].avatar}
                </div>
                <div className="text-left">
                  <p className="font-display font-semibold text-base tracking-wide">{testimonials[current].author}</p>
                  <p className="text-sm text-muted-foreground font-body mt-0.5">{testimonials[current].title}</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-14">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-500 ${
                i === current ? "w-10 h-2 gold-gradient gold-glow" : "w-2 h-2 bg-border hover:bg-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
