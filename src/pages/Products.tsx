import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import upvcImage from "@/assets/product-upvc.jpg";
import aluminumImage from "@/assets/product-aluminum.jpg";
import steelImage from "@/assets/product-steel.jpg";
import sleekImage from "@/assets/product-sleek.jpg";

const products = [
  {
    title: "uPVC Windows & Doors",
    description: "Energy-efficient and low-maintenance uPVC systems with superior insulation and durability.",
    image: upvcImage,
    features: ["Energy Efficient", "Weather Resistant", "Low Maintenance", "Sound Insulation"],
  },
  {
    title: "System Aluminium Windows",
    description: "Sleek and modern aluminum frames offering strength, style, and versatility for any architecture.",
    image: aluminumImage,
    features: ["Slim Profiles", "Durable", "Contemporary Design", "Corrosion Resistant"],
  },
  {
    title: "Steel Frames",
    description: "Robust steel window systems providing maximum security and industrial-grade strength.",
    image: steelImage,
    features: ["Maximum Security", "Industrial Strength", "Fire Resistant", "Long Lasting"],
  },
  {
    title: "Sleek Profiles",
    description: "Ultra-modern minimalist profiles that maximize glass area for stunning views and natural light.",
    image: sleekImage,
    features: ["Minimalist Design", "Maximum Glass", "Modern Aesthetic", "Precision Engineering"],
  },
];

export const Products = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section id="products-hero" className="py-20 bg-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-heading font-bold mb-6 animate-fade-in">
            Our Products
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-slide-up">
            Discover our range of premium window and door systems, each designed to bring intelligence, beauty, and performance to your space.
          </p>
        </div>
      </section>

      {/* Products Grid */}
      <section id="products-grid" className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-2xl transition-all duration-300 border-2 hover:border-accent"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading">{product.title}</CardTitle>
                  <CardDescription className="text-base">{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {product.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="text-sm px-3 py-2 bg-accent/10 text-accent rounded-lg text-center font-medium"
                      >
                        {feature}
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90 hover-glow">
                    View Details
                    <ArrowRight className="ml-2" size={18} />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="products-cta" className="py-20 bg-accent text-accent-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-heading font-bold mb-6">
            Need Help Choosing?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Our experts are ready to guide you in selecting the perfect solution for your project.
          </p>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 uppercase tracking-wider font-semibold text-lg px-8 py-6">
            Get Expert Advice
            <ArrowRight className="ml-2" size={20} />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Products;
