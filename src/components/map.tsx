
const Map = () => {
    return (
        <div className="mt-16">


            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.6364650609344!2d72.95613881078646!3d19.167383981981253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8648a49307cb5527%3A0x5e6b73eccef6ca33!2sShirodkar%20Group!5e0!3m2!1sen!2sin!4v1775808249130!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
            </div>

        </div>
    );
};


export default Map;