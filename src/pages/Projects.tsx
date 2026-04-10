import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyDetail from "./PropertyDetail";
import Project from "@/components/Projects";
import LaunchingProject from "@/components/LaunchingProject";
import UpcomingProject from "@/components/UpcomingProject";

const Projects = () => {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                <section className="relative h-[60vh] flex items-center justify-center">
                    <img
                        src="/Image/bg.webp"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold">Projects</h1>
                        <p className="mt-4 text-lg">Join our team and help build the future of luxury living.</p>
                    </div>
                </section>
                <section id="current">
                    <Project />
                </section>
                <section id="launching">
                    <LaunchingProject />
                </section>
                <section id="upcoming">
                    <UpcomingProject />
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Projects;