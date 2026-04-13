import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const projects = [
    {
        title: "Current Project",
        description:
            "Explore our ongoing development crafted with modern design, prime location, and premium amenities.",
        id: "current",
    },
    {
        title: "Launching Project",
        description:
            "Discover our newly launching project offering thoughtfully planned homes and attractive pre-launch benefits.",
        id: "launching",
    },
    {
        title: "Upcoming Project",
        description:
            "Get ready for our upcoming landmark development designed to redefine urban living.",
        id: "upcoming",
    },
];

const ProjectSection = () => {
    const navigate = useNavigate();

    const goToSection = (id: string) => {
        navigate(`/projects#${id}`);
    };

    return (
        <section className="relative py-24">

            {/* Semi-transparent background overlay */}
            <div className="absolute inset-0">
                <img
                    src="/Image/bg.webp"
                    className="w-full h-full object-cover opacity-30" 
                />
                <div className="absolute inset-0 bg-[#FAF7F2]/20 backdrop-blur-sm"></div>
            </div>

            {/* Content */}
            <div className="relative max-w-6xl mx-auto px-6">
                <div className="grid md:grid-cols-3 gap-8">

                    {projects.map((item, i) => (
                        <motion.div
                            key={i}
                            className="bg-[#a97c63]/95 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-xl hover:scale-105 transition duration-300"
                            initial={{ opacity: 0, y: 60 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: i * 0.2 }}
                        >

                            {/* Icon */}
                            <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                                🏠
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl font-semibold text-white mb-4">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/80 text-sm leading-relaxed">
                                {item.description}
                            </p>

                            {/* Button */}
                            <button
                                onClick={() => goToSection(item.id)}
                                className="mt-6 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium"
                            >
                                Explore More
                            </button>

                        </motion.div>
                    ))}

                </div>
            </div>

        </section>
    );
};

export default ProjectSection;