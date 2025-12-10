import { Users, Package, Wallet, Smartphone } from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Reach More Customers",
    description: "Get access to thousands of local customers actively looking for fresh produce in your area.",
  },
  {
    icon: Package,
    title: "Manage Inventory Easily",
    description: "Update stock levels in real-time with our simple mobile-friendly interface. Never oversell again.",
  },
  {
    icon: Wallet,
    title: "Get Paid Faster",
    description: "Receive your earnings within 24-48 hours directly to your bank account. No delays.",
  },
  {
    icon: Smartphone,
    title: "Zero Technology Investment",
    description: "No app downloads or complex setup. Works on any phone with internet. We provide full training.",
  },
];

export const ValueProps = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Why Local Vendors Love FreshCart
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to grow your business online, without the complexity
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group relative p-6 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl gradient-primary shadow-glow transition-transform duration-300 group-hover:scale-110">
                <feature.icon className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mb-2 text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
