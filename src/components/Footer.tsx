const Footer = () => {
  return (
    <footer className="border-t border-border/60 py-20 md:py-24 px-6 bg-gradient-to-b from-background to-secondary/20">
      <div className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-16 mb-16">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-22 h-22  items-center justify-center">
                <span className="text-primary-foreground font-display font-bold text-sm">
                  <img src="/Image/SGL.png" alt="logo"></img></span>
              </div>
              {/* <h3 className="text-2xl font-display font-bold gold-text tracking-wider">AURUM</h3> */}
            </div>
            <p className="text-muted-foreground max-w-sm leading-[1.8] text-[15px]">
              Curating extraordinary properties for discerning clients worldwide since 2010. Elevating the art of luxury living.
            </p>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-5 text-base">Navigate</h4>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              {["Properties", "About Us", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-foreground transition-colors duration-300 font-body">{link}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-display font-semibold mb-5 text-base">Connect</h4>
            <ul className="space-y-3.5 text-sm text-muted-foreground">
              {["Instagram", "LinkedIn", "Twitter", "YouTube"].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-foreground transition-colors duration-300 font-body">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground/70 font-body">
          <p>© 2026 AURUM Real Estate. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-foreground transition-colors duration-300">Privacy Policy</a>
            <a href="#" className="hover:text-foreground transition-colors duration-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
