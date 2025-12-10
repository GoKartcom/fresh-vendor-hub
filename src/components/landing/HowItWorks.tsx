import { UserPlus, FileCheck, ShoppingBasket, Rocket } from "lucide-react";

const steps = [
  {
    step: 1,
    icon: UserPlus,
    title: "Register",
    description: "Fill in your basic shop details and contact information. Takes less than 5 minutes.",
  },
  {
    step: 2,
    icon: FileCheck,
    title: "Verify Documents",
    description: "Upload your business license, ID proof, and bank details. We verify within 24-48 hours.",
  },
  {
    step: 3,
    icon: ShoppingBasket,
    title: "List Products",
    description: "Add your products with photos and prices. Our team helps you with the initial setup.",
  },
  {
    step: 4,
    icon: Rocket,
    title: "Start Selling",
    description: "Go live and start receiving orders from customers in your delivery area.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Start Selling in 4 Simple Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our streamlined onboarding process gets you selling within 48 hours
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connection line */}
          <div className="absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20 hidden lg:block" />

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((step, index) => (
              <div
                key={step.step}
                className="relative text-center animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step number circle */}
                <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-card border-4 border-primary shadow-lg shadow-primary/20 z-10">
                  <step.icon className="h-8 w-8 text-primary" />
                  <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full gradient-primary text-sm font-bold text-primary-foreground shadow-md">
                    {step.step}
                  </span>
                </div>
                
                <h3 className="mb-2 text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
