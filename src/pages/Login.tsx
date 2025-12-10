import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Phone, ArrowRight, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"phone" | "otp">("phone");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSendOTP = async () => {
    if (phone.length < 10) {
      toast({
        title: "Invalid phone number",
        description: "Please enter a valid 10-digit phone number",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    setStep("otp");
    toast({
      title: "OTP Sent!",
      description: `A verification code has been sent to +91 ${phone}`,
    });
  };

  const handleVerifyOTP = async () => {
    if (otp.length !== 6) {
      toast({
        title: "Invalid OTP",
        description: "Please enter the 6-digit code",
        variant: "destructive",
      });
      return;
    }
    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsLoading(false);
    toast({
      title: "Login Successful!",
      description: "Welcome back to FreshCart",
    });
    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Left side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 gradient-hero items-center justify-center p-12">
        <div className="max-w-md text-primary-foreground animate-fade-in">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-14 w-14 rounded-2xl bg-primary-foreground/20 flex items-center justify-center">
              <span className="text-3xl font-bold">F</span>
            </div>
            <span className="text-3xl font-bold">FreshCart</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">
            Manage Your Business on the Go
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8">
            Access your orders, inventory, and earnings from anywhere. 
            Your complete vendor dashboard in your pocket.
          </p>
          <div className="space-y-4">
            {[
              "Real-time order notifications",
              "One-tap inventory updates",
              "Instant payment tracking",
            ].map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="h-6 w-6 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                  <span className="text-primary-foreground text-sm">✓</span>
                </div>
                <span className="text-primary-foreground/90">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right side - Login form */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="w-full max-w-md animate-fade-in-up">
          <div className="lg:hidden flex items-center gap-2 mb-8 justify-center">
            <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xl font-bold">F</span>
            </div>
            <span className="text-2xl font-bold text-foreground">FreshCart</span>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-2">
              Welcome Back
            </h2>
            <p className="text-muted-foreground">
              {step === "phone" 
                ? "Enter your phone number to continue" 
                : "Enter the OTP sent to your phone"
              }
            </p>
          </div>

          <div className="bg-card border border-border/50 rounded-2xl p-8 shadow-card">
            {step === "phone" ? (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your 10-digit number"
                      className="pl-10"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value.replace(/\D/g, '').slice(0, 10))}
                    />
                  </div>
                  <p className="text-xs text-muted-foreground">
                    We'll send you a one-time verification code
                  </p>
                </div>
                <Button 
                  onClick={handleSendOTP} 
                  variant="hero" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Send OTP
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="otp">Verification Code</Label>
                  <Input
                    id="otp"
                    type="text"
                    placeholder="Enter 6-digit OTP"
                    className="text-center text-2xl tracking-[0.5em] font-mono"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, '').slice(0, 6))}
                    maxLength={6}
                  />
                  <p className="text-xs text-muted-foreground text-center">
                    OTP sent to +91 {phone}
                  </p>
                </div>
                <Button 
                  onClick={handleVerifyOTP} 
                  variant="hero" 
                  className="w-full"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <Loader2 className="h-5 w-5 animate-spin" />
                  ) : (
                    <>
                      Verify & Login
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </>
                  )}
                </Button>
                <Button 
                  variant="ghost" 
                  className="w-full text-muted-foreground"
                  onClick={() => setStep("phone")}
                >
                  Change phone number
                </Button>
              </div>
            )}
          </div>

          <p className="mt-6 text-center text-sm text-muted-foreground">
            New to FreshCart?{" "}
            <Link to="/register" className="font-medium text-primary hover:underline">
              Register your shop
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
