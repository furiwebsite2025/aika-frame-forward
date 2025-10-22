import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo.png";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div>
            <img src={logo} alt="AIKA Logo" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-sm opacity-80">Smartness In Every Frame</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-2">
              <Link to="/" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                Home
              </Link>
              <Link to="/about" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                About
              </Link>
              <Link to="/products" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                Products
              </Link>
              <Link to="/gallery" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                Gallery
              </Link>
              <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                Contact
              </Link>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold mb-4">Contact Us</h3>
            <div className="flex flex-col gap-3">
              <a href="tel:8297448282" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                <Phone size={16} />
                82974 48282
              </a>
              <a href="tel:9393443333" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                <Phone size={16} />
                93934 43333
              </a>
              <a href="mailto:info@aika.com" className="flex items-center gap-2 text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                <Mail size={16} />
                info@aika.com
              </a>
              <a href="https://www.aika.in" target="_blank" rel="noopener noreferrer" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                www.aika.in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm opacity-70">
          <p>© 2025 AIKA. All Rights Reserved.</p>
          <p>
            Website designed by{" "}
            <a
              href="https://furiglobal.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition-colors"
            >
              FuriGlobal
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
