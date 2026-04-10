import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import Map from "@/components/map";

const Contact = () => {
    return (
        <>
            <Navbar />

            <main className="pt-24">
                <ContactForm />
                <Map />
            </main>

            <Footer />
        </>
    )
}

export default Contact;