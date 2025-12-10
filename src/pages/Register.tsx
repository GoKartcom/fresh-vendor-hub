import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { ArrowLeft, ArrowRight, Check, Upload, Store, FileText, Clock, Camera } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const steps = [
  { id: 1, title: "Basic Info", icon: Store },
  { id: 2, title: "Verification", icon: FileText },
  { id: 3, title: "Shop Details", icon: Clock },
  { id: 4, title: "Documents", icon: Camera },
];

const Register = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const { toast } = useToast();
  const progress = (currentStep / steps.length) * 100;

  const handleNext = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    } else {
      toast({
        title: "Registration Submitted!",
        description: "We'll verify your documents and get back to you within 24-48 hours.",
      });
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 bg-card">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground text-lg font-bold">F</span>
              </div>
              <span className="text-xl font-bold text-foreground">FreshCart</span>
            </Link>
            <Link to="/login" className="text-sm font-medium text-muted-foreground hover:text-foreground">
              Already registered? Login
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 transition-all ${
                    currentStep > step.id 
                      ? "bg-primary border-primary" 
                      : currentStep === step.id 
                        ? "border-primary text-primary" 
                        : "border-border text-muted-foreground"
                  }`}>
                    {currentStep > step.id ? (
                      <Check className="h-5 w-5 text-primary-foreground" />
                    ) : (
                      <step.icon className="h-5 w-5" />
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div className={`hidden sm:block w-16 lg:w-24 h-0.5 mx-2 ${
                      currentStep > step.id ? "bg-primary" : "bg-border"
                    }`} />
                  )}
                </div>
              ))}
            </div>
            <Progress value={progress} className="h-2" />
            <p className="mt-2 text-sm text-muted-foreground text-center">
              Step {currentStep} of {steps.length}: {steps[currentStep - 1].title}
            </p>
          </div>

          {/* Form Card */}
          <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-card animate-fade-in-up">
            {currentStep === 1 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Basic Business Information</h2>
                  <p className="text-muted-foreground">Tell us about your shop</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="shopName">Shop Name *</Label>
                    <Input id="shopName" placeholder="e.g., Fresh Vegetables Store" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ownerName">Owner Name *</Label>
                    <Input id="ownerName" placeholder="Your full name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Shop Address *</Label>
                  <Input id="address" placeholder="Full address including city and pincode" />
                </div>
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Business Verification</h2>
                  <p className="text-muted-foreground">Help us verify your business</p>
                </div>
                <div className="grid gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gst">GST Number (Optional)</Label>
                    <Input id="gst" placeholder="22AAAAA0000A1Z5" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="fssai">FSSAI License Number *</Label>
                    <Input id="fssai" placeholder="12345678901234" />
                    <p className="text-xs text-muted-foreground">Don't have FSSAI? We can help you apply.</p>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bank">Bank Account Number *</Label>
                    <Input id="bank" placeholder="Your bank account number" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="ifsc">IFSC Code *</Label>
                    <Input id="ifsc" placeholder="e.g., SBIN0001234" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Shop Details</h2>
                  <p className="text-muted-foreground">Help customers know when and where to reach you</p>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="openTime">Opening Time *</Label>
                    <Input id="openTime" type="time" defaultValue="06:00" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="closeTime">Closing Time *</Label>
                    <Input id="closeTime" type="time" defaultValue="21:00" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="radius">Delivery Radius (km) *</Label>
                  <Input id="radius" type="number" placeholder="5" defaultValue="5" />
                  <p className="text-xs text-muted-foreground">How far can you deliver from your shop?</p>
                </div>
                <div className="space-y-2">
                  <Label>Shop Photos</Label>
                  <div className="border-2 border-dashed border-border rounded-xl p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <Upload className="h-10 w-10 text-muted-foreground mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">Click to upload shop photos</p>
                    <p className="text-xs text-muted-foreground mt-1">JPG, PNG up to 5MB each</p>
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-2">Document Upload</h2>
                  <p className="text-muted-foreground">Upload required documents for verification</p>
                </div>
                <div className="grid gap-4">
                  {[
                    { label: "ID Proof (Aadhaar/PAN)", required: true },
                    { label: "Address Proof", required: true },
                    { label: "FSSAI License", required: true },
                    { label: "Shop Front Photo", required: true },
                  ].map((doc) => (
                    <div key={doc.label} className="flex items-center justify-between p-4 border border-border rounded-xl hover:border-primary/50 transition-colors cursor-pointer">
                      <div className="flex items-center gap-3">
                        <div className="h-10 w-10 rounded-lg bg-accent flex items-center justify-center">
                          <Camera className="h-5 w-5 text-accent-foreground" />
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{doc.label} {doc.required && "*"}</p>
                          <p className="text-xs text-muted-foreground">Upload clear image or PDF</p>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">Upload</Button>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-accent/50 rounded-xl">
                  <p className="text-sm text-foreground">
                    <strong>Note:</strong> Your documents will be verified within 24-48 hours. 
                    We'll notify you via SMS once approved.
                  </p>
                </div>
              </div>
            )}

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-border/50">
              <Button
                variant="ghost"
                onClick={handleBack}
                disabled={currentStep === 1}
                className="gap-2"
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>
              <Button variant="ghost" className="text-muted-foreground">
                Save & Continue Later
              </Button>
              <Button onClick={handleNext} variant="hero" className="gap-2">
                {currentStep === steps.length ? "Submit Application" : "Continue"}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
