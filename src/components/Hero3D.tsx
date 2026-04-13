import { motion } from "framer-motion";

interface Hero3DProps {
  scrollProgress: number;
}

const Hero3D = ({ scrollProgress }: Hero3DProps) => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center px-6 pointer-events-none">
      
      {/* Subtle overlay for legibility without washing out context */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FAF7F2]/40 via-transparent to-transparent z-0 pointer-events-none" />

      {/* Content wrapper */}
      <div className="relative z-10 text-center max-w-3xl flex flex-col items-center">
        {/* Depth effect behind text only */}
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[6px] rounded-full filter blur-[30px] -z-10 scale-150 opacity-80" />

        <motion.div
          className="mb-8 flex items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <div className="h-px w-12 bg-neutral-900" />
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-neutral-900 font-sans font-bold">
            Premium Real Estate
          </p>
          <div className="h-px w-12 bg-neutral-900" />
        </motion.div>

        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-serif leading-snug mb-8 text-neutral-950 drop-shadow-sm font-semibold tracking-wide"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="block mb-2">Experience</span>
          <span className="gold-text italic block text-5xl md:text-6xl lg:text-7xl font-serif my-3" style={{ textShadow: "0 2px 10px rgba(212, 175, 55, 0.4)" }}>Luxury</span>
          <span className="block mt-2">Living</span>
        </motion.h1>

        <motion.p
          className="text-base md:text-lg lg:text-xl text-neutral-900 mb-12 font-sans leading-loose max-w-lg mx-auto drop-shadow-sm font-medium"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          Discover premium properties designed for unparalleled comfort. Where visionary architecture meets timeless artistry.
        </motion.p>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs tracking-[0.3em] uppercase text-neutral-900 font-sans font-bold">Scroll</span>
        <motion.div
          className="w-[1px] h-12 bg-neutral-900"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          style={{ originY: 0 }}
        />
      </motion.div>
    </section>
  );
};

export default Hero3D;
