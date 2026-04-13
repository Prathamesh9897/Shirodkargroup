import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
import Scene from "@/components/Scene";
import ScrollSections from "@/components/ScrollSections";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import Loader from "@/components/Loader";
import ProjectSection from "@/components/ProjectSection";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const { scrollYProgress } = useScroll();
  const scrollProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    return scrollProgress.on("change", (v) => setProgress(v));
  }, [scrollProgress]);

  if (loading) return <Loader />;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      className="bg-[#FAF7F2]" 
    >
      <Navbar />

      {/* Global Fixed 3D background */}
      <div className="fixed inset-0 z-0 overflow-hidden outline-none" style={{ pointerEvents: "auto" }}>
        <Scene scrollProgress={progress} />
      </div>

      {/* Scrollable content wrapper */}
      <div className="relative z-10 w-full overflow-x-hidden pointer-events-none">
        <Hero3D scrollProgress={progress} />

        {/* Semi-transparent section wrapper to keep 3D model globally visible */}
        <div className="relative z-10 bg-[#FAF7F2]/40 backdrop-blur-[6px] pointer-events-auto border-t border-white/15">
          <div className="max-w-7xl mx-auto">
            <ScrollSections />
            <Projects />
            <ProjectSection />
            <Testimonials />
            <ContactForm />
          </div>
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
