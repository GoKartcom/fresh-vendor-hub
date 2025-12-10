import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { Link } from "react-router-dom";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-accent via-background to-background py-20 lg:py-32">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-secondary/5 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary"></span>
              </span>
              Zero Commission for First Month
            </div>
            
            <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Grow Your Local Business{" "}
              <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
                Online
              </span>
            </h1>
            
            <p className="mb-8 text-lg text-muted-foreground lg:text-xl max-w-xl mx-auto lg:mx-0">
              Join 500+ local vendors already using FreshCart to reach more customers, 
              manage inventory easily, and get paid faster. No technology investment required.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button asChild size="xl" variant="hero">
                <Link to="/register">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild size="xl" variant="outline">
                <Link to="/demo">
                  <Play className="mr-2 h-5 w-5" />
                  Watch Demo
                </Link>
              </Button>
            </div>

            <div className="mt-10 flex items-center justify-center lg:justify-start gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">500+</p>
                <p className="text-sm text-muted-foreground">Active Vendors</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">40%</p>
                <p className="text-sm text-muted-foreground">Avg Revenue Increase</p>
              </div>
              <div className="h-12 w-px bg-border" />
              <div className="text-center">
                <p className="text-3xl font-bold text-foreground">24hrs</p>
                <p className="text-sm text-muted-foreground">Fast Payouts</p>
              </div>
            </div>
          </div>

          {/* Right content - Hero illustration */}
          <div className="relative animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Dashboard preview card */}
              <div className="rounded-2xl bg-card p-6 shadow-xl shadow-card-hover border border-border/50">
                <div className="mb-4 flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-destructive/60" />
                  <div className="h-3 w-3 rounded-full bg-warning/60" />
                  <div className="h-3 w-3 rounded-full bg-success/60" />
                </div>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-accent/50">
                    <div>
                      <p className="text-sm text-muted-foreground">Today's Earnings</p>
                      <p className="text-2xl font-bold text-foreground">₹12,450</p>
                    </div>
                    <div className="h-12 w-12 rounded-xl gradient-primary flex items-center justify-center">
                      <span className="text-primary-foreground text-xl">₹</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-4 rounded-xl bg-success/10 border border-success/20">
                      <p className="text-sm text-muted-foreground">Completed</p>
                      <p className="text-xl font-bold text-success">28</p>
                    </div>
                    <div className="p-4 rounded-xl bg-warning/10 border border-warning/20">
                      <p className="text-sm text-muted-foreground">Pending</p>
                      <p className="text-xl font-bold text-warning">5</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating notification card */}
              <div className="absolute -right-4 top-1/4 animate-float rounded-xl bg-card p-4 shadow-lg border border-border/50">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full gradient-warm flex items-center justify-center">
                    <span className="text-secondary-foreground">🛒</span>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">New Order!</p>
                    <p className="text-xs text-muted-foreground">₹850 • 5 items</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
