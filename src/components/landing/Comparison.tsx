import { Check, X } from "lucide-react";

const comparisonData = [
  { feature: "Customer reach", traditional: "Limited to walk-ins", digital: "Thousands of online customers" },
  { feature: "Operating hours", traditional: "Fixed shop timings", digital: "24/7 order acceptance" },
  { feature: "Inventory tracking", traditional: "Manual & error-prone", digital: "Real-time digital tracking" },
  { feature: "Payment collection", traditional: "Cash handling risks", digital: "Direct bank transfer" },
  { feature: "Customer insights", traditional: "No data available", digital: "Analytics & reports" },
  { feature: "Business growth", traditional: "Slow & limited", digital: "40% average increase" },
];

export const Comparison = () => {
  return (
    <section className="py-20 bg-accent/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Traditional vs Digital Selling
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how going digital with FreshCart can transform your business
          </p>
        </div>

        <div className="max-w-4xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <div className="rounded-2xl overflow-hidden border border-border/50 bg-card shadow-lg">
            {/* Header */}
            <div className="grid grid-cols-3 bg-muted/50 p-4 text-center font-semibold">
              <div className="text-foreground">Feature</div>
              <div className="text-muted-foreground">Traditional</div>
              <div className="text-primary">With FreshCart</div>
            </div>

            {/* Rows */}
            {comparisonData.map((row, index) => (
              <div
                key={row.feature}
                className={`grid grid-cols-3 p-4 text-center items-center ${
                  index !== comparisonData.length - 1 ? "border-b border-border/50" : ""
                }`}
              >
                <div className="text-foreground font-medium text-left pl-2">
                  {row.feature}
                </div>
                <div className="flex items-center justify-center gap-2 text-muted-foreground text-sm">
                  <X className="h-4 w-4 text-destructive/60" />
                  <span className="hidden sm:inline">{row.traditional}</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-foreground text-sm">
                  <Check className="h-4 w-4 text-success" />
                  <span className="hidden sm:inline">{row.digital}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
