
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
    const features = [
        {
            title: "Years of Industry Experience",
            desc: "Decades of expertise in delivering high-quality real estate projects.",
        },
        {
            title: "Prime Project Locations",
            desc: "Strategically located properties offering excellent connectivity and value.",
        },
        {
            title: "Innovation",
            desc: "Modern architecture and smart solutions for future-ready living.",
        },
        {
            title: "Community Focus",
            desc: "Designing spaces that promote a strong and vibrant community lifestyle.",
        },
        {
            title: "REDEVELOPMENT PROJECTS",
            desc: "Transforming old spaces into modern, luxurious developments.",
        },
        {
            title: "COST-PLUS DEVELOPMENT MODELS",
            desc: "Transparent pricing models ensuring trust and value for clients.",
        },
        {
            title: "OPEN PLOT DEVELOPMENT",
            desc: "Premium plotted developments tailored for flexible construction needs.",
        },
    ];
    return (
        <>
            <Navbar />
            <div className="bg-white text-black">

                {/* 🔹 Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center">
                    <img
                        src="/Image/bg.webp"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold">About Us</h1>
                        <p className="mt-4 text-lg">Crafting Luxury Living Experiences</p>
                    </div>
                </section>

                {/* 🔹 Intro Section */}
                <section className="max-w-5xl mx-auto px-6 py-20 text-center">
                    <h2 className="text-3xl font-bold mb-6">
                        Building Dreams, Crafting Legacies
                    </h2>
                    <p className="text-gray-600 leading-relaxed font-extrabold">
                        Since 1989, Shirodkar Group has stood as a proud beacon of excellence in the construction
                        <br /> industry—synonymous with trust, quality, and innovation.
                        <br />
                        <br />
                        What truly sets us apart is not only what we build, but how we build it—with unwavering integrity, complete transparency, and a forward-looking vision powered by cutting-edge technology.
                        Every project reflects our commitment to engineering precision, thoughtful design, and lasting value, while fostering strong, long-term relationships with our clients, partners, and communities.
                        <br />
                        <br />
                        At Shirodkar Group, we believe buildings should do more than serve a purpose—they should inspire, endure, and elevate the lives of those who inhabit them. Backed by decades of experience and a relentless pursuit of excellence, we continue to transform visions into reality—brick by brick, dream by dream.
                    </p>
                </section>

                {/* 🔹 Vision & Mission */}
                <section className="bg-gray-100 py-20">
                    <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6">

                        <motion.div
                            className="p-8 bg-white rounded-2xl shadow"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
                            <p className="text-gray-600">
                                At Shirodkar Group, our vision is to redefine urban living by creating world-class spaces that seamlessly blend innovation, superior quality, and enduring trust. We aspire to build more than just properties we aim to craft iconic landmarks that inspire communities, enrich everyday living, and elevate lifestyles, creating lasting value for today and for generations to come.                            </p>
                        </motion.div>

                        <motion.div
                            className="p-8 bg-white rounded-2xl shadow"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                At Shirodkar Group, our mission is to create exceptional real estate experiences by developing high-quality, sustainable, and value-driven residential spaces. We are dedicated to transparency, timely delivery, and uncompromising customer satisfaction, while continuously embracing innovation and best practices in every project we undertake. With every square foot we build, we strive to earn trust, enhance lifestyles, and create lasting value for our customers and communities.
                            </p>
                        </motion.div>

                    </div>
                </section>



                {/* 🔹 Why Choose Us */}
                <section className="py-20 max-w-6xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-center mb-12">
                        Why Choose Us
                    </h2>

                    <div className="grid md:grid-cols-3 gap-8">

                        {features.map((item, i) => (
                            <motion.div
                                key={i}
                                className="p-8 bg-gray-100 rounded-2xl text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                            >
                                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                                <p className="text-gray-600 text-sm">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}

                    </div>
                </section>

                {/* 🔹 CTA Section */}
                <section className="bg-black text-white text-center py-20">
                    <h2 className="text-3xl font-bold mb-4">
                        Building Legacies, Not Just Homes
                    </h2>
                    <p className="text-white/70 mb-6">
                        Let us help you find your dream home today.
                    </p>
                    <button className="bg-white text-black px-6 py-3 rounded-lg font-medium">
                        <Link to="/contact">Contact Us</Link>
                    </button>
                </section>

            </div>

            <Footer />



        </>
    );
};

export default About;