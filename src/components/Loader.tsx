import { motion } from "framer-motion";

const Loader = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background">
      <motion.div
        className="flex items-center gap-3 mb-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="w-22 h-22   items-center justify-center animate-pulse-gold">
          <span className="text-primary-foreground font-display font-bold text-sm">
            <img src="/Image/SGL.png" alt="logo"></img></span>
        </div>
        {/* <span className="text-2xl font-display font-bold tracking-wider gold-text">AURUM</span> */}
      </motion.div>

      <motion.div
        className="relative w-48 h-px bg-border rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <motion.div
          className="absolute inset-y-0 left-0 gold-gradient rounded-full"
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
        />
      </motion.div>

      <motion.p
        className="mt-6 text-[11px] tracking-[0.4em] uppercase text-muted-foreground/60 font-body"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Loading Experience
      </motion.p>
    </div>
  );
};

export default Loader;
