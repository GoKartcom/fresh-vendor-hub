import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { OrderCard } from "@/components/dashboard/OrderCard";
import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Filter, Volume2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ordersData = {
  new: [
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
      orderId: "FC2843",
      customerName: "Sunita P***",
      orderTime: "5 mins ago",
      items: [
        { name: "Cauliflower", quantity: 1, unit: "piece" },
        { name: "Cabbage", quantity: 1, unit: "piece" },
      ],
      totalAmount: 85,
      deliverySlot: "11:00 AM - 12:00 PM",
      status: "new" as const,
      paymentStatus: "pending" as const,
    },
  ],
  preparing: [
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
  ],
  ready: [
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
  ],
  completed: [
    {
      orderId: "FC2835",
      customerName: "Vikram J***",
      orderTime: "1 hour ago",
      items: [
        { name: "Mixed Vegetables", quantity: 2, unit: "kg" },
      ],
      totalAmount: 220,
      deliverySlot: "9:00 AM - 10:00 AM",
      status: "completed" as const,
      paymentStatus: "paid" as const,
    },
  ],
};

const Orders = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { toast } = useToast();

  const handleOrderAction = (action: string, orderId: string) => {
    toast({
      title: `Order ${action}`,
      description: `Order #${orderId} has been ${action.toLowerCase()}`,
    });
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Sidebar */}
      <div className={cn("hidden lg:block", mobileMenuOpen && "block")}>
        <DashboardSidebar
          collapsed={sidebarCollapsed}
          onToggle={() => setSidebarCollapsed(!sidebarCollapsed)}
        />
      </div>

      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-foreground/20 backdrop-blur-sm lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      <div className={cn(
        "fixed inset-y-0 left-0 z-40 lg:hidden transition-transform duration-300",
        mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
      )}>
        <DashboardSidebar
          collapsed={false}
          onToggle={() => setMobileMenuOpen(false)}
        />
      </div>

      <div className={cn(
        "transition-all duration-300",
        sidebarCollapsed ? "lg:ml-16" : "lg:ml-64"
      )}>
        <DashboardHeader onMenuClick={() => setMobileMenuOpen(true)} />

        <main className="p-4 lg:p-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <div>
              <h1 className="text-2xl font-bold text-foreground">Orders</h1>
              <p className="text-muted-foreground">Manage and track all your orders</p>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Volume2 className="h-4 w-4 mr-2" />
                Sound On
              </Button>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search by order ID or customer name" className="pl-9" />
            </div>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Filters
            </Button>
          </div>

          {/* Tabs */}
          <Tabs defaultValue="new" className="space-y-4">
            <TabsList className="bg-muted/50 p-1">
              <TabsTrigger value="new" className="relative">
                New Orders
                <span className="ml-2 bg-warning text-warning-foreground text-xs px-1.5 py-0.5 rounded-full">
                  {ordersData.new.length}
                </span>
              </TabsTrigger>
              <TabsTrigger value="preparing">
                In Progress
                <span className="ml-2 bg-primary text-primary-foreground text-xs px-1.5 py-0.5 rounded-full">
                  {ordersData.preparing.length}
                </span>
              </TabsTrigger>
              <TabsTrigger value="ready">
                Ready
                <span className="ml-2 bg-success text-success-foreground text-xs px-1.5 py-0.5 rounded-full">
                  {ordersData.ready.length}
                </span>
              </TabsTrigger>
              <TabsTrigger value="completed">Completed</TabsTrigger>
            </TabsList>

            <TabsContent value="new" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {ordersData.new.map((order) => (
                  <OrderCard
                    key={order.orderId}
                    {...order}
                    onAccept={() => handleOrderAction("Accepted", order.orderId)}
                    onReject={() => handleOrderAction("Rejected", order.orderId)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="preparing" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {ordersData.preparing.map((order) => (
                  <OrderCard
                    key={order.orderId}
                    {...order}
                    onMarkReady={() => handleOrderAction("Marked Ready", order.orderId)}
                  />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="ready" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {ordersData.ready.map((order) => (
                  <OrderCard key={order.orderId} {...order} />
                ))}
              </div>
            </TabsContent>

            <TabsContent value="completed" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {ordersData.completed.map((order) => (
                  <OrderCard key={order.orderId} {...order} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  );
};

export default Orders;
