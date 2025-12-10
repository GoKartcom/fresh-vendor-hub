import { useState } from "react";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { DashboardHeader } from "@/components/dashboard/DashboardHeader";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Search, Plus, Grid, List, MoreVertical, Edit, Trash2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const productsData = [
  {
    id: 1,
    name: "Fresh Tomatoes",
    category: "Vegetables",
    price: 40,
    mrp: 50,
    stock: 25,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1546470427-e26264be0b0a?w=200&h=200&fit=crop",
    available: true,
    views: 145,
    orders: 28,
  },
  {
    id: 2,
    name: "Red Onions",
    category: "Vegetables",
    price: 35,
    mrp: 40,
    stock: 50,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=200&h=200&fit=crop",
    available: true,
    views: 189,
    orders: 45,
  },
  {
    id: 3,
    name: "Green Chillies",
    category: "Vegetables",
    price: 80,
    mrp: 100,
    stock: 5,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1583119022894-919a68a3d0e3?w=200&h=200&fit=crop",
    available: true,
    views: 67,
    orders: 12,
  },
  {
    id: 4,
    name: "Fresh Spinach",
    category: "Leafy Greens",
    price: 30,
    mrp: 35,
    stock: 0,
    unit: "bunch",
    image: "https://images.unsplash.com/photo-1576045057995-568f588f82fb?w=200&h=200&fit=crop",
    available: false,
    views: 98,
    orders: 22,
  },
  {
    id: 5,
    name: "Potatoes",
    category: "Vegetables",
    price: 25,
    mrp: 30,
    stock: 100,
    unit: "kg",
    image: "https://images.unsplash.com/photo-1518977676601-b53f82ber85c?w=200&h=200&fit=crop",
    available: true,
    views: 234,
    orders: 67,
  },
  {
    id: 6,
    name: "Fresh Coriander",
    category: "Leafy Greens",
    price: 15,
    mrp: 20,
    stock: 30,
    unit: "bunch",
    image: "https://images.unsplash.com/photo-1592997571659-0b21ff64313b?w=200&h=200&fit=crop",
    available: true,
    views: 76,
    orders: 18,
  },
];

const Products = () => {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  return (
    <div className="min-h-screen bg-background">
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
              <h1 className="text-2xl font-bold text-foreground">Products</h1>
              <p className="text-muted-foreground">Manage your product catalog</p>
            </div>
            <Button variant="hero">
              <Plus className="h-4 w-4 mr-2" />
              Add Product
            </Button>
          </div>

          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search products..." className="pl-9" />
            </div>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="h-4 w-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="icon"
                onClick={() => setViewMode("list")}
              >
                <List className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge variant="default" className="cursor-pointer">All Products</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent">In Stock</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent">Out of Stock</Badge>
            <Badge variant="outline" className="cursor-pointer hover:bg-accent text-warning border-warning/30">Low Stock</Badge>
          </div>

          {/* Products Grid */}
          <div className={cn(
            "grid gap-4",
            viewMode === "grid" ? "sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4" : "grid-cols-1"
          )}>
            {productsData.map((product) => (
              <div
                key={product.id}
                className={cn(
                  "bg-card border border-border/50 rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300",
                  viewMode === "list" && "flex"
                )}
              >
                {/* Image */}
                <div className={cn(
                  "relative",
                  viewMode === "grid" ? "aspect-square" : "w-32 h-32 flex-shrink-0"
                )}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                  {product.stock === 0 && (
                    <div className="absolute inset-0 bg-foreground/60 flex items-center justify-center">
                      <Badge variant="destructive">Out of Stock</Badge>
                    </div>
                  )}
                  {product.stock > 0 && product.stock <= 10 && (
                    <Badge className="absolute top-2 left-2 bg-warning text-warning-foreground">
                      Low Stock
                    </Badge>
                  )}
                </div>

                {/* Content */}
                <div className="p-4 flex-1">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <h3 className="font-semibold text-foreground">{product.name}</h3>
                      <p className="text-sm text-muted-foreground">{product.category}</p>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon" className="h-8 w-8">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Edit className="h-4 w-4 mr-2" />
                          Edit
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>

                  <div className="flex items-baseline gap-2 mb-3">
                    <span className="text-lg font-bold text-foreground">₹{product.price}</span>
                    <span className="text-sm text-muted-foreground line-through">₹{product.mrp}</span>
                    <span className="text-xs text-success font-medium">
                      {Math.round((1 - product.price / product.mrp) * 100)}% off
                    </span>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-muted-foreground">
                      Stock: <span className={cn(
                        "font-medium",
                        product.stock === 0 ? "text-destructive" : product.stock <= 10 ? "text-warning" : "text-foreground"
                      )}>
                        {product.stock} {product.unit}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground">Available</span>
                      <Switch checked={product.available} />
                    </div>
                  </div>

                  {viewMode === "list" && (
                    <div className="flex gap-4 mt-3 text-sm text-muted-foreground">
                      <span>{product.views} views</span>
                      <span>{product.orders} orders</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Products;
