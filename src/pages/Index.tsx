import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import Hero3D from "@/components/Hero3D";
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
    >
      <Navbar />

      {/* Fixed 3D background */}
      <div className="fixed inset-0 z-0">
        <Hero3D scrollProgress={progress} />
      </div>

      {/* Scrollable content */}
      <div className="relative z-10">
        <div className="h-screen" />

        <div className="bg-background relative">
          {/* Top fade */}
          <div className="absolute -top-32 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-background pointer-events-none" />

          <ScrollSections />
          <Projects />
          <ProjectSection />
          <Testimonials />
          <ContactForm />
          <Footer />
        </div>
      </div>
    </motion.div>
  );
};

export default Index;
