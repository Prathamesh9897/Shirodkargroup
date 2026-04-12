import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useState, Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, Float, ContactShadows } from "@react-three/drei";
import * as THREE from "three";
import { properties } from "@/data/properties";
import FloatingBuilding from "@/components/FloatingBuilding";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PropertyScene = ({ type }: { type: "tower" | "villa" | "highrise" }) => (

  <Canvas
    camera={{ position: [0, 2, 5], fov: 50 }}
    dpr={[1, 1.5]}
    gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
    style={{ background: "transparent" }}
  >
    <Suspense fallback={null}>
      <ambientLight intensity={0.35} color="#FFF8F0" />
      <directionalLight position={[5, 10, 5]} intensity={1.4} color="#FFF5E0" castShadow />
      <directionalLight position={[-4, 6, -4]} intensity={0.25} color="#D4AF37" />
      <Float speed={1.2} rotationIntensity={0.2} floatIntensity={0.5}>
        <FloatingBuilding position={[0, 0, 0]} type={type} scale={1.6} speed={0.5} phase={0} />
      </Float>
      <ContactShadows position={[0, -1.5, 0]} opacity={0.25} scale={10} blur={2.5} far={5} color="#8B7355" />
      <Environment preset="city" environmentIntensity={0.6} />
    </Suspense>
  </Canvas>
);

const PropertyDetail = () => {
  const featureImages: Record<string, string> = {
    "KITCHEN": "/Image/AMENITIES/Kitchen.png",
    "PLUMBING & SANITARY": "/Image/AMENITIES/Plumbing.png",
    "DOORS": "/Image/AMENITIES/Doors.png",
    "WINDOWS": "/Image/AMENITIES/Windows.png",
    "FLOORING": "/Image/AMENITIES/Flooring.png",
    "WALL AND CEILING FINISHING": "/Image/AMENITIES/WallCeling.png",
    "ELEVATORS": "/Image/AMENITIES/Elevators.png",
    "ENTRANCE LOBBY": "/Image/AMENITIES/EntryL.png",
    "BANQUET HALL": "/Image/AMENITIES/BanquetH.png",
    "JOGGING TRACK": "/Image/AMENITIES/Jogging.png",
    "YOGA & MEDITATION CENTER": "/Image/AMENITIES/Yoga.png",
    "FITNESS CENTER": "/Image/AMENITIES/Fitness.png",
    "CHILDREN'S PARK": "/Image/AMENITIES/ChildrenPark.png",
    "SENIOR SIT OUT": "/Image/AMENITIES/SeniorSitOut.png",
    "CRICKET TURF": "/Image/AMENITIES/Cricket.png",
    "SOLAR POWER": "/Image/AMENITIES/SolarP.png",
    "EV CHARGE SYSTEM": "/Image/AMENITIES/EVChargeSyatem.png",


  }
  const { id } = useParams<{ id: string }>();
  const property = properties.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  // const [featurePreview, setFeaturePreview] = useState("/Image/AMENITIES/Kitchen.png");
  // const defaultKey = property.features[0]?.trim().toUpperCase();

  // const [featurePreview, setFeaturePreview] = useState(
  //   featureImages[defaultKey]
  // );

  const [featurePreview, setFeaturePreview] = useState(
    featureImages[property.features[0]?.trim().toUpperCase()]
  );

  const [autoIndex, setAutoIndex] = useState(0);
  const [isAuto, setIsAuto] = useState(true);

  useEffect(() => {
    if (!isAuto) return;

    const interval = setInterval(() => {
      setAutoIndex((prev) => {
        const next = (prev + 1) % property.features.length;

        const key = property.features[next]?.trim().toUpperCase();
        const img = featureImages[key];

        if (img) setFeaturePreview(img);

        return next;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isAuto, property.features]);

  if (!property) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-display-md font-display font-bold mb-6">Property Not Found</h1>
          <Link to="/" className="premium-btn inline-block">
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} className="bg-background min-h-screen">
      <Navbar />

      <section className="pt-28 pb-16 px-6">
        <div className="section-container">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors mb-10 group font-body">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="group-hover:-translate-x-1 transition-transform duration-300">
              <path d="m15 18-6-6 6-6" />
            </svg>
            Back to Properties
          </Link>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Gallery */}
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3] mb-4 premium-shadow-lg">
                <img
                  src={property.gallery[activeImage]}
                  alt={property.title}
                  className="w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute top-5 right-5 glass rounded-full px-5 py-2 text-sm font-semibold tracking-wider">
                  {property.price}
                </div>
              </div>
              <div className="grid grid-cols-3 gap-3">
                {property.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`rounded-xl overflow-hidden aspect-[4/3] border-2 transition-all duration-300 ${activeImage === i ? "border-primary gold-glow" : "border-transparent opacity-50 hover:opacity-100"
                      }`}
                  >
                    <img src={img} alt="" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Details */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
              <p className="text-xs tracking-[0.3em] uppercase text-muted-foreground mb-3 font-body font-medium">{property.location}</p>
              <h1 className="text-display-md font-display font-bold mb-5">{property.title}</h1>
              <p className="text-3xl font-display font-semibold gold-text mb-7">{property.price}</p>
              <p className="text-muted-foreground leading-[1.8] mb-10 text-[15px]">{property.description}</p>

              {/* Stats */}
              <div className="grid grid-cols-4 gap-3 mb-10">
                {[
                  { label: "Beds", value: property.bedrooms },
                  { label: "Baths", value: property.bathrooms },
                  { label: "Sq Ft", value: property.sqft },
                  { label: "Year", value: property.year },
                ].map((stat) => (
                  <div key={stat.label} className="text-center p-4 rounded-xl bg-secondary/60 border border-border/50">
                    <p className="text-2xl font-display font-bold">{stat.value}</p>
                    <p className="text-[10px] text-muted-foreground tracking-[0.15em] uppercase mt-1.5 font-body">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Features */}
              <h3 className="text-lg font-display font-semibold mb-4">
                Amenities
              </h3>
              {featurePreview && (
                <motion.div
                  className="mt-6 rounded-xl overflow-hidden "
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  <img src={featurePreview} className="w-full h-[400px] object-contain " />
                </motion.div>
              )}
              <div className="flex flex-wrap gap-2 mb-10">
                {/* {property.features.map((f) => (
                  <span key={f} className="px-4 py-2 rounded-full bg-secondary/60 border border-border/50 text-sm text-muted-foreground font-body">
                    {f}
                  </span>
                ))} */}

                {/* {property.features.map((f) => (
                  <span
                    key={f}
                    onMouseEnter={() => {
                      const key = f.trim().toUpperCase();
                      const img = featureImages[key];
                      if (img) setFeaturePreview(img);
                    }}
                    onMouseLeave={() => {
                      setFeaturePreview(null);
                    }}
                    className="cursor-pointer px-4 py-2 rounded-full bg-secondary/60 border border-border/50 text-sm text-muted-foreground font-body hover:bg-primary hover:text-white transition"
                  >
                    {f}
                  </span>
                ))} */}


                {/* {property.features.map((f) => (
                  <span
                    key={f}
                    onClick={() => {
                      const key = f.trim().toUpperCase();
                      const img = featureImages[key];
                      if (img) setFeaturePreview(img);
                    }}
                    className="cursor-pointer px-4 py-2 rounded-full bg-secondary/60 border border-border/50 text-sm text-muted-foreground font-body hover:bg-primary hover:text-white transition"
                  >
                    {f}
                  </span>
                ))} */}

                {property.features.map((f) => (
                  <span
                    key={f}
                    onClick={() => {
                      const key = f.trim().toUpperCase();
                      const img = featureImages[key];

                      if (img) {
                        setFeaturePreview(img);
                        setIsAuto(false); // 🚨 stop auto when user clicks
                      }
                    }}
                    className="cursor-pointer px-4 py-2 rounded-full border text-sm transition hover:bg-primary hover:text-white"
                  >
                    {f}
                  </span>
                ))}
              </div>

              {/* <button className="premium-btn gold-glow w-full md:w-auto">
                Schedule a Viewing
              </button> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 3D Model Viewer */}
      <section className="section-padding">
        <div className="section-container">
          <motion.div
            className="text-center mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="h-px w-10 gold-gradient" />
              <p className="text-xs tracking-[0.5em] uppercase text-muted-foreground font-body font-medium">Interactive</p>
              <div className="h-px w-10 gold-gradient" />
            </div>
            <h2 className="text-display-md font-display font-bold">
              3D <span className="gold-text italic">Model Viewer</span>
            </h2>
          </motion.div>
          <motion.div
            className="h-[400px] md:h-[500px] rounded-3xl overflow-hidden border border-border/50 bg-secondary/30 premium-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <PropertyScene type={property.buildingType} />
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  );
};

export default PropertyDetail;
