import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled || !isHome
        ? "glass-strong py-3 shadow-sm"
        : "bg-transparent py-6"
        }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-22 h-22  flex items-center justify-center group-hover:gold-glow transition-shadow duration-500">
            <span className="text-primary-foreground font-display font-bold text-sm">
              <img src="/Image/SGL.png" alt="logo"></img>
            </span>
          </div>
          {/* <span className="text-2xl font-display font-bold tracking-wider gold-text">
            AURUM
          </span> */}
        </Link>

        {/* <div className="hidden md:flex items-center gap-12">
          {[
            { name: "Properties", path: "/" },
            { name: "About", path: "/about" },
            { name: "Services", path: "/services" },
            { name: "Contact", path: "/contact" }].map((item) =>
               (

              <Link
                key={item}
                to={item === "Contact" ? "/#contact" : "/"}
                className="nav-link"
              >
                {item}
              </Link>
            ))}
        </div> */}

        <div className="hidden md:flex items-center gap-12 font-extrabold text-xl">
          {[
            { name: "Projects", path: "/projects" },
            { name: "About Us", path: "/about" },
            { name: "Careers", path: "/Careers" },
            { name: "Contact", path: "/contact" },
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className="nav-link"
            >
              {item.name}
            </Link>
          ))}
        </div>

        <Link
          to="/contact"
          className="hidden md:inline-flex premium-btn !px-7 !py-2.5 !text-xs"
        >
          Inquire
        </Link>

        {/* Mobile menu button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          <motion.span
            className="block w-6 h-px bg-foreground"
            animate={mobileOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
          />
          <motion.span
            className="block w-6 h-px bg-foreground"
            animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
          />
          <motion.span
            className="block w-6 h-px bg-foreground"
            animate={mobileOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <motion.div
        className="md:hidden overflow-hidden"
        initial={false}
        animate={mobileOpen ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="px-6 pb-6 pt-4 space-y-4">
          {["Properties", "About", "Careers", "Contact"].map((item) => (
            <Link
              key={item}
              to={item === "Contact" ? "/contact" : "/"}
              className="block nav-link py-2"
              onClick={() => setMobileOpen(false)}
            >
              {item}
            </Link>
          ))}
          <Link to="/contact" className="premium-btn !px-6 !py-3 !text-xs inline-block mt-2" onClick={() => setMobileOpen(false)}>
            Inquire
          </Link>
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
