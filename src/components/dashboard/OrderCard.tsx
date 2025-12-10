import { Clock, Check, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface OrderItem {
  name: string;
  quantity: number;
  unit: string;
}

interface OrderCardProps {
  orderId: string;
  customerName: string;
  orderTime: string;
  items: OrderItem[];
  totalAmount: number;
  deliverySlot: string;
  status: "new" | "preparing" | "ready" | "completed" | "cancelled";
  paymentStatus: "paid" | "pending";
  onAccept?: () => void;
  onReject?: () => void;
  onMarkReady?: () => void;
}

const statusConfig = {
  new: { label: "New Order", className: "bg-warning/10 text-warning border-warning/30" },
  preparing: { label: "Preparing", className: "bg-primary/10 text-primary border-primary/30" },
  ready: { label: "Ready", className: "bg-success/10 text-success border-success/30" },
  completed: { label: "Completed", className: "bg-muted text-muted-foreground border-muted-foreground/30" },
  cancelled: { label: "Cancelled", className: "bg-destructive/10 text-destructive border-destructive/30" },
};

export const OrderCard = ({
  orderId,
  customerName,
  orderTime,
  items,
  totalAmount,
  deliverySlot,
  status,
  paymentStatus,
  onAccept,
  onReject,
  onMarkReady,
}: OrderCardProps) => {
  const { label, className } = statusConfig[status];

  return (
    <div className="bg-card border border-border/50 rounded-2xl p-5 shadow-card hover:shadow-card-hover transition-all duration-300">
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <p className="font-semibold text-foreground">#{orderId}</p>
            <Badge variant="outline" className={cn("text-xs", className)}>
              {label}
            </Badge>
          </div>
          <p className="text-sm text-muted-foreground">{customerName}</p>
        </div>
        <div className="text-right">
          <p className="font-bold text-lg text-foreground">₹{totalAmount}</p>
          <Badge variant={paymentStatus === "paid" ? "default" : "secondary"} className="text-xs">
            {paymentStatus === "paid" ? "Paid" : "COD"}
          </Badge>
        </div>
      </div>

      {/* Items */}
      <div className="bg-muted/50 rounded-lg p-3 mb-4">
        <p className="text-xs font-medium text-muted-foreground mb-2">Items ({items.length})</p>
        <ul className="space-y-1">
          {items.map((item, index) => (
            <li key={index} className="text-sm text-foreground flex justify-between">
              <span>{item.name}</span>
              <span className="text-muted-foreground">{item.quantity} {item.unit}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Delivery Info */}
      <div className="flex items-center gap-4 mb-4 text-sm">
        <div className="flex items-center gap-1.5 text-muted-foreground">
          <Clock className="h-4 w-4" />
          <span>{orderTime}</span>
        </div>
        <div className="h-4 w-px bg-border" />
        <div className="text-muted-foreground">
          Delivery: <span className="text-foreground font-medium">{deliverySlot}</span>
        </div>
      </div>

      {/* Actions */}
      {status === "new" && (
        <div className="flex gap-2">
          <Button variant="success" className="flex-1" onClick={onAccept}>
            <Check className="h-4 w-4 mr-1" />
            Accept
          </Button>
          <Button variant="outline" className="text-destructive hover:bg-destructive/10" onClick={onReject}>
            <X className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <Phone className="h-4 w-4" />
          </Button>
        </div>
      )}

      {status === "preparing" && (
        <Button variant="hero" className="w-full" onClick={onMarkReady}>
          <Check className="h-4 w-4 mr-1" />
          Mark as Ready
        </Button>
      )}
    </div>
  );
};
