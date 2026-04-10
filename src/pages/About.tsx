
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const About = () => {
    return (
        <>
            <Navbar />
            <div className="bg-white text-black">

                {/* 🔹 Hero Section */}
                <section className="relative h-[60vh] flex items-center justify-center">
                    <img
                        src="/Image/bg.jpg"
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
                        Crafting Luxury Living Experiences
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        At Shirodkar Group, we don’t just construct buildings — we craft
                        luxury living experiences. Every project is thoughtfully designed to
                        blend elegance, comfort, and modern architecture, creating spaces that
                        reflect your aspirations and lifestyle.
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
                                To redefine urban living through innovation, luxury, and
                                sustainable design, creating landmark developments that inspire.
                            </p>
                        </motion.div>

                        <motion.div
                            className="p-8 bg-white rounded-2xl shadow"
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                        >
                            <h3 className="text-2xl font-semibold mb-4">Our Mission</h3>
                            <p className="text-gray-600">
                                Deliver high-quality developments with timely execution, ensuring
                                trust, transparency, and excellence in every project.
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

                        {["Premium Quality", "Trusted Delivery", "Modern Design"].map((item, i) => (
                            <motion.div
                                key={i}
                                className="p-8 bg-gray-100 rounded-2xl text-center"
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                            >
                                <h3 className="text-xl font-semibold mb-3">{item}</h3>
                                <p className="text-gray-600 text-sm">
                                    We ensure excellence in every detail to deliver unmatched living experiences.
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
                        Contact Us
                    </button>
                </section>

            </div>

            <Footer />



        </>
    );
};

export default About;