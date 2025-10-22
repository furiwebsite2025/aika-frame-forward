import { CheckCircle2 } from "lucide-react";
import aboutImage from "@/assets/about-image.jpg";

export const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl font-heading font-bold mb-6">
                Crafting Smart Living Spaces
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                At AIKA, we redefine comfort, safety, and aesthetics through intelligently designed window and door systems. Our mission is to bring innovation, precision, and style to every frame.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                With a commitment to excellence and sustainability, we deliver solutions that enhance your living experience while standing the test of time.
              </p>
              
              <div className="space-y-4">
                {[
                  "Premium quality materials and craftsmanship",
                  "Custom solutions tailored to your needs",
                  "Energy-efficient and sustainable designs",
                  "Professional installation and support",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="text-accent mt-1 flex-shrink-0" size={20} />
                    <span className="text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-slide-up">
              <img
                src={aboutImage}
                alt="AIKA Craftsmanship"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="animate-fade-in">
              <div className="text-5xl font-heading font-bold mb-2">1000+</div>
              <div className="text-lg opacity-90">Projects Completed</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.1s" }}>
              <div className="text-5xl font-heading font-bold mb-2">800+</div>
              <div className="text-lg opacity-90">Happy Customers</div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="text-5xl font-heading font-bold mb-2">10+</div>
              <div className="text-lg opacity-90">Years of Expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="p-8 rounded-xl bg-background border border-border">
              <h2 className="text-3xl font-heading font-bold mb-4 text-accent">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To deliver exceptional window and door solutions that combine innovation, quality, and design excellence, enhancing the comfort and security of every space we touch.
              </p>
            </div>
            <div className="p-8 rounded-xl bg-background border border-border">
              <h2 className="text-3xl font-heading font-bold mb-4 text-accent">Our Vision</h2>
              <p className="text-muted-foreground leading-relaxed">
                To be the most trusted name in architectural solutions, setting new standards in smart living through continuous innovation and unwavering commitment to excellence.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
