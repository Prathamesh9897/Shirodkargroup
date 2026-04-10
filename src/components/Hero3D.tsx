import { motion } from "framer-motion";
import Scene from "./Scene";

interface Hero3DProps {
  scrollProgress: number;
}

const Hero3D = ({ scrollProgress }: Hero3DProps) => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* 3D Canvas Background */}
      <div className="absolute inset-0 bg-white-500 mix-blend-overlay">
        {/* <Scene scrollProgress={scrollProgress} /> */}

        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/BGVideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-white/30"></div>

        {/* Gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-transparent"></div>      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background pointer-events-none" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/20 via-transparent to-background/20 pointer-events-none" />

      {/* Content Overlay */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="text-center max-w-4xl">
          <motion.div
            className="mb-6 flex items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="h-px w-12 gold-gradient" />
            <p className="text-xs md:text-sm tracking-[0.5em] uppercase text-muted-foreground font-body font-medium">
              Premium Real Estate
            </p>
            <div className="h-px w-12 gold-gradient" />
          </motion.div>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-[5.5rem] xl:text-display-xl font-display font-bold leading-[1.05] mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Experience{" "}
            <span className="gold-text italic">Luxury</span>
            <br />
            Living
          </motion.h1>

          <motion.p
            className="text-base md:text-lg lg:text-xl text-muted-foreground mb-2000 max-w-lg mx-auto font-extrabold leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            Discover premium properties in a new dimension.
            <br className="hidden md:block" />
            Where architecture meets artistry.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            {/* <button className="premium-btn gold-glow">
              Explore Properties
            </button> */}
            {/* <button className="px-8 py-4 rounded-full border border-foreground/15 text-foreground/80 text-sm font-body font-medium tracking-wider uppercase hover:border-primary/40 hover:text-foreground transition-all duration-300">
              Learn More
            </button> */}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground/70 font-body">Scroll</span>
        <motion.div
          className="w-px h-10 gold-gradient opacity-50"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default Hero3D;
