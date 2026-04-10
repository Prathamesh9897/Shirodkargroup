import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CareersC from "@/components/CareersC";

const Careers = () => {
    return (
        <>
            <Navbar />
            <main className="pt-24">
                <CareersC />
            </main>
            <Footer />
        </>
    )
}

export default Careers;