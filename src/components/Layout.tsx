import { useState, useEffect, ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { ConsultationForm } from "./ConsultationForm";
import { Phone, MessageCircle, ChevronUp } from "lucide-react";
import { Button } from "./ui/button";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  
  // Enable smooth scrolling for hash navigation
  useSmoothScroll();

  useEffect(() => {
    // Auto-open form on first visit
    const timer = setTimeout(() => {
      if (!hasAutoOpened) {
        setIsFormOpen(true);
        setHasAutoOpened(true);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [hasAutoOpened]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight * 0.6);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onGetQuoteClick={() => setIsFormOpen(true)} />
      
      <main className="flex-1">
        {children}
      </main>

      <Footer />

      {/* Mobile Sticky CTA Buttons */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-40 flex gap-0 shadow-2xl">
        <a
          href="tel:8297448282"
          className="flex-1 bg-accent text-accent-foreground py-4 flex items-center justify-center gap-2 font-semibold hover-glow"
        >
          <Phone size={20} />
          Call Now
        </a>
        <a
          href="https://wa.me/918297448282"
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-600 text-white py-4 flex items-center justify-center gap-2 font-semibold"
        >
          <MessageCircle size={20} />
          WhatsApp
        </a>
      </div>

      {/* Back to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          className="fixed bottom-24 md:bottom-8 right-4 md:right-8 z-40 rounded-full w-12 h-12 p-0 bg-accent text-accent-foreground hover:bg-accent/90 hover-glow shadow-lg"
          aria-label="Back to top"
        >
          <ChevronUp size={24} />
        </Button>
      )}

      {/* Consultation Form */}
      <ConsultationForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />
    </div>
  );
};
