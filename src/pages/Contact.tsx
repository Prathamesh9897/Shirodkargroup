import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/map";

const Contact = () => {
    return (
        <>
            <Navbar />

            <main>
                <section className="relative h-[60vh] flex items-center justify-center">
                    <img
                        src="/Image/bg.webp"
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40"></div>

                    <div className="relative text-center text-white">
                        <h1 className="text-4xl md:text-6xl font-bold">Contact</h1>
                        <p className="mt-4 text-lg">We’d love to hear from you.</p>
                    </div>
                </section>
                <section className="max-w-6xl mx-auto px-6 py-20"></section>
                <ContactForm />
                <Map />
            </main>

            <Footer />
        </>
    )
}

export default Contact;