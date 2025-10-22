import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-home.jpg";

export const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 animate-fade-in">
            Smartness in Every Frame
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90 animate-slide-up">
            Experience elegant, efficient, and secure living through customized uPVC, aluminum, and steel window systems.
          </p>
          <Link to="/products">
            <Button className="bg-accent text-accent-foreground hover:bg-accent/90 hover-glow uppercase tracking-wider font-semibold text-lg px-8 py-6 animate-slide-up">
              Explore Products
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-heading font-bold text-center mb-12">
            Why Choose AIKA?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Premium Quality",
                description: "Top-grade materials engineered for durability and performance",
              },
              {
                title: "Smart Design",
                description: "Intelligent solutions that blend aesthetics with functionality",
              },
              {
                title: "Expert Installation",
                description: "Professional service ensuring perfect fit and finish",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="p-8 rounded-xl bg-background border border-border hover:border-accent transition-all hover:shadow-lg"
              >
                <h3 className="text-2xl font-heading font-bold mb-4 text-accent">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="cta" className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Get in touch with our experts for a personalized consultation and quote.
          </p>
          <Link to="/contact">
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold text-lg px-8 py-6">
              Contact Us Today
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
