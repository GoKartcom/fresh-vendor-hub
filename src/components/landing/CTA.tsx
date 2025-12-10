import { Button } from "@/components/ui/button";
import { ArrowRight, Phone } from "lucide-react";
import { Link } from "react-router-dom";

export const CTA = () => {
  return (
    <section className="py-20 gradient-hero relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container relative mx-auto px-4 text-center">
        <div className="animate-fade-in-up">
          <h2 className="text-3xl font-bold text-primary-foreground sm:text-4xl lg:text-5xl mb-6">
            Ready to Grow Your Business?
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            Join 500+ vendors who are already earning more with FreshCart. 
            Start your journey today with zero commission for the first month.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="xl" className="bg-card text-primary hover:bg-card/90 shadow-xl">
              <Link to="/register">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild size="xl" variant="outline" className="border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
              <a href="tel:+919876543210">
                <Phone className="mr-2 h-5 w-5" />
                Call Us: +91 98765 43210
              </a>
            </Button>
          </div>

          <p className="mt-8 text-sm text-primary-foreground/70">
            No credit card required • Free onboarding support • Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
};
