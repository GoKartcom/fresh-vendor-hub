import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MetricCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon: LucideIcon;
  trend?: {
    value: string;
    positive: boolean;
  };
  variant?: "default" | "success" | "warning" | "primary";
}

const variantStyles = {
  default: "bg-card",
  success: "bg-success/10 border-success/20",
  warning: "bg-warning/10 border-warning/20",
  primary: "bg-primary/10 border-primary/20",
};

const iconVariantStyles = {
  default: "bg-accent text-accent-foreground",
  success: "bg-success/20 text-success",
  warning: "bg-warning/20 text-warning",
  primary: "gradient-primary text-primary-foreground",
};

export const MetricCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  trend,
  variant = "default",
}: MetricCardProps) => {
  return (
    <div className={cn(
      "p-6 rounded-2xl border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300",
      variantStyles[variant]
    )}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm text-muted-foreground mb-1">{title}</p>
          <p className="text-3xl font-bold text-foreground">{value}</p>
          {subtitle && (
            <p className="text-sm text-muted-foreground mt-1">{subtitle}</p>
          )}
          {trend && (
            <div className={cn(
              "inline-flex items-center gap-1 mt-2 text-xs font-medium px-2 py-0.5 rounded-full",
              trend.positive 
                ? "bg-success/10 text-success" 
                : "bg-destructive/10 text-destructive"
            )}>
              <span>{trend.positive ? "↑" : "↓"}</span>
              <span>{trend.value}</span>
            </div>
          )}
        </div>
        <div className={cn(
          "h-12 w-12 rounded-xl flex items-center justify-center",
          iconVariantStyles[variant]
        )}>
          <Icon className="h-6 w-6" />
        </div>
      </div>
    </div>
  );
};
