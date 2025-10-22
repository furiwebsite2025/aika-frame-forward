import { useState } from "react";
import { X, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { toast } from "sonner";

interface ConsultationFormProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsultationForm = ({ isOpen, onClose }: ConsultationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    city: "",
    address: "",
    propertyType: "",
    projectType: "renovation",
    productType: "",
    colorPreference: "",
    windowCount: "",
    budget: "",
    contactMethod: "phone",
    bestTime: "",
    comments: "",
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll contact you soon.");
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in">
      <div className="bg-card rounded-xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto m-4 border-2 border-accent/30">
        <div className="sticky top-0 bg-accent text-accent-foreground p-6 flex justify-between items-center rounded-t-xl">
          <div>
            <h2 className="text-2xl font-heading font-bold">Smart Consultation</h2>
            <p className="text-sm opacity-90 mt-1">Get your personalized quote</p>
          </div>
          <button
            onClick={onClose}
            className="hover:bg-accent-foreground/10 p-2 rounded-lg transition-colors"
            aria-label="Close form"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-6">
          {/* Personal Details */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-foreground">Personal Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">Full Name *</Label>
                <Input
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={(e) => handleChange("fullName", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number *</Label>
                <Input
                  id="phone"
                  type="tel"
                  required
                  value={formData.phone}
                  onChange={(e) => handleChange("phone", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="email">Email Address *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div>
                <Label htmlFor="city">City / Location *</Label>
                <Input
                  id="city"
                  required
                  value={formData.city}
                  onChange={(e) => handleChange("city", e.target.value)}
                  className="mt-1"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="address">Address (Optional)</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChange("address", e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Project Details */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-foreground">Project Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="propertyType">Type of Property *</Label>
                <Select
                  value={formData.propertyType}
                  onValueChange={(value) => handleChange("propertyType", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select property type" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-[200]">
                    <SelectItem value="residential">Residential</SelectItem>
                    <SelectItem value="commercial">Commercial</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="apartment">Apartment</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label>Project Type *</Label>
                <RadioGroup
                  value={formData.projectType}
                  onValueChange={(value) => handleChange("projectType", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="renovation" id="renovation" />
                    <Label htmlFor="renovation" className="font-normal">Renovation</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="new" id="new" />
                    <Label htmlFor="new" className="font-normal">New Construction</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="productType">Type of Product Required *</Label>
                <Select
                  value={formData.productType}
                  onValueChange={(value) => handleChange("productType", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select product" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-[200]">
                    <SelectItem value="upvc">uPVC Windows & Doors</SelectItem>
                    <SelectItem value="aluminum">Aluminum Windows</SelectItem>
                    <SelectItem value="steel">Steel Frames</SelectItem>
                    <SelectItem value="sleek">Sleek Profiles</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="colorPreference">Color Preference *</Label>
                <Select
                  value={formData.colorPreference}
                  onValueChange={(value) => handleChange("colorPreference", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select color" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-[200]">
                    <SelectItem value="white">White</SelectItem>
                    <SelectItem value="woodgrain">Wood Grain</SelectItem>
                    <SelectItem value="black">Black</SelectItem>
                    <SelectItem value="gray">Gray</SelectItem>
                    <SelectItem value="custom">Custom</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <Label htmlFor="windowCount">Number of Windows *</Label>
                <Input
                  id="windowCount"
                  type="number"
                  required
                  value={formData.windowCount}
                  onChange={(e) => handleChange("windowCount", e.target.value)}
                  className="mt-1"
                />
              </div>

              <div>
                <Label htmlFor="budget">Estimated Budget (Optional)</Label>
                <Input
                  id="budget"
                  type="text"
                  placeholder="₹"
                  value={formData.budget}
                  onChange={(e) => handleChange("budget", e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>
          </div>

          {/* Other Preferences */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-lg text-foreground">Contact Preferences</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label>Preferred Contact Method *</Label>
                <RadioGroup
                  value={formData.contactMethod}
                  onValueChange={(value) => handleChange("contactMethod", value)}
                  className="mt-2"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="phone" id="phone-method" />
                    <Label htmlFor="phone-method" className="font-normal">Phone</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="whatsapp" id="whatsapp" />
                    <Label htmlFor="whatsapp" className="font-normal">WhatsApp</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="email" id="email-method" />
                    <Label htmlFor="email-method" className="font-normal">Email</Label>
                  </div>
                </RadioGroup>
              </div>

              <div>
                <Label htmlFor="bestTime">Best Time to Reach *</Label>
                <Select
                  value={formData.bestTime}
                  onValueChange={(value) => handleChange("bestTime", value)}
                >
                  <SelectTrigger className="mt-1">
                    <SelectValue placeholder="Select time" />
                  </SelectTrigger>
                  <SelectContent className="bg-popover z-[200]">
                    <SelectItem value="morning">Morning (9 AM - 12 PM)</SelectItem>
                    <SelectItem value="afternoon">Afternoon (12 PM - 4 PM)</SelectItem>
                    <SelectItem value="evening">Evening (4 PM - 7 PM)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <Label htmlFor="comments">Additional Comments or Requirements</Label>
              <Textarea
                id="comments"
                rows={4}
                value={formData.comments}
                onChange={(e) => handleChange("comments", e.target.value)}
                className="mt-1"
                placeholder="Tell us more about your project..."
              />
            </div>
          </div>

          {/* Submit Buttons */}
          <div className="flex gap-4 pt-4">
            <Button
              type="submit"
              className="flex-1 bg-accent text-accent-foreground hover:bg-accent/90 hover-glow uppercase tracking-wider font-semibold"
            >
              Submit Request
            </Button>
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="flex-1"
            >
              Not Now
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
