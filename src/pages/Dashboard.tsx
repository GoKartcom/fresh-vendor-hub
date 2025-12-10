import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { MetricCard } from "@/components/dashboard/MetricCard";
import { OrderCard } from "@/components/dashboard/OrderCard";
import { cn } from "@/lib/utils";
import {
  IndianRupee,
  ShoppingCart,
  Package,
  Star,
  AlertTriangle,
  TrendingUp,
  Clock,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const Dashboard = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleOrderAction = (action: string, orderId: string) => {
    toast({
      title: `Order ${action}`,
      description: `Order #${orderId} has been ${action.toLowerCase()}`,
    });
  };

  const recentOrders = [
    {
      orderId: "FC2841",
      customerName: "Priya S***",
      orderTime: "2 mins ago",
      items: [
        { name: "Tomatoes", quantity: 1, unit: "kg" },
        { name: "Onions", quantity: 2, unit: "kg" },
        { name: "Green Chillies", quantity: 100, unit: "g" },
      ],
      totalAmount: 185,
      deliverySlot: "10:00 AM - 11:00 AM",
      status: "new" as const,
      paymentStatus: "paid" as const,
    },
    {
      orderId: "FC2840",
      customerName: "Rahul M***",
      orderTime: "15 mins ago",
      items: [
        { name: "Potatoes", quantity: 2, unit: "kg" },
        { name: "Carrots", quantity: 500, unit: "g" },
      ],
      totalAmount: 95,
      deliverySlot: "11:00 AM - 12:00 PM",
      status: "preparing" as const,
      paymentStatus: "pending" as const,
    },
    {
      orderId: "FC2839",
      customerName: "Anita K***",
      orderTime: "32 mins ago",
      items: [
        { name: "Spinach", quantity: 1, unit: "bunch" },
        { name: "Coriander", quantity: 2, unit: "bunch" },
        { name: "Mint", quantity: 1, unit: "bunch" },
      ],
      totalAmount: 75,
      deliverySlot: "10:00 AM - 11:00 AM",
      status: "ready" as const,
      paymentStatus: "paid" as const,
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className={cn("hidden lg:block", mobileMenuOpen && "block")}>
        <DashboardSidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {/* Mobile sidebar overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile sidebar */}
      <div className={cn(
        "fixed inset-y-0 left-0 z-40 lg:hidden transition-transform duration-300",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <DashboardSidebar
          collapsed={false}
          onToggle={() => setMobileMenuOpen(false)}
        />
      </div>

      {/* Main content */}
      <div className={cn(
        "transition-all duration-300",
        sidebarCollapsed ? "lg:ml-16" : "lg:ml-64"
      )}>
        <DashboardHeader onMenuClick={() => setMobileMenuOpen(true)} />

        <main className="p-4 lg:p-6">
          {/* Welcome section */}
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-foreground mb-1">
              Good Morning, Kumar Store! 👋
            </h1>
            <p className="text-muted-foreground">
              Here's what's happening with your store today
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-6">
            <MetricCard
              title="Today's Earnings"
              value="₹12,450"
              subtitle="28 orders completed"
              icon={IndianRupee}
              trend={{ value: "+12.5% from yesterday", positive: true }}
              variant="primary"
            />
            <MetricCard
              title="Pending Orders"
              value="5"
              subtitle="3 new, 2 preparing"
              icon={ShoppingCart}
              variant="warning"
            />
            <MetricCard
              title="Products in Stock"
              value="48"
              subtitle="3 low stock alerts"
              icon={Package}
              variant="default"
            />
            <MetricCard
              title="Average Rating"
              value="4.8"
              subtitle="Based on 156 reviews"
              icon={Star}
              trend={{ value: "+0.2 this week", positive: true }}
              variant="success"
            />
          </div>

          {/* Quick Actions */}
          <div className="flex flex-wrap gap-3 mb-6">
            <Button variant="hero">
              <Package className="h-4 w-4 mr-2" />
              Add New Product
            </Button>
            <Button variant="outline">
              <Clock className="h-4 w-4 mr-2" />
              Update Timings
            </Button>
            <Button variant="outline">
              <TrendingUp className="h-4 w-4 mr-2" />
              View Analytics
            </Button>
          </div>

          {/* Alerts */}
          <div className="bg-warning/10 border border-warning/30 rounded-xl p-4 mb-6 flex items-start gap-3">
            <AlertTriangle className="h-5 w-5 text-warning flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground">Low Stock Alert</p>
              <p className="text-sm text-muted-foreground">
                3 products are running low on stock: Tomatoes, Onions, Green Chillies.{" "}
                <Button variant="link" className="h-auto p-0 text-primary">
                  Update inventory →
                </Button>
              </p>
            </div>
          </div>

          {/* Recent Orders */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">Recent Orders</h2>
              <Button variant="ghost" className="text-primary">
                View All Orders →
              </Button>
            </div>
            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {recentOrders.map((order) => (
                <OrderCard
                  key={order.orderId}
                  {...order}
                  onAccept={() => handleOrderAction("Accepted", order.orderId)}
                  onReject={() => handleOrderAction("Rejected", order.orderId)}
                  onMarkReady={() => handleOrderAction("Marked Ready", order.orderId)}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
