import { NavLink } from "@/components/NavLink";
import {
  LayoutDashboard,
  ShoppingCart,
  Package,
  Warehouse,
  Wallet,
  Star,
  Store,
  HelpCircle,
  BarChart3,
  LogOut,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface DashboardSidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: ShoppingCart, label: "Orders", path: "/dashboard/orders" },
  { icon: Package, label: "Products", path: "/dashboard/products" },
  { icon: Warehouse, label: "Inventory", path: "/dashboard/inventory" },
  { icon: Wallet, label: "Earnings", path: "/dashboard/earnings" },
  { icon: Star, label: "Reviews", path: "/dashboard/reviews" },
  { icon: Store, label: "Shop Profile", path: "/dashboard/profile" },
  { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
  { icon: HelpCircle, label: "Help & Support", path: "/dashboard/support" },
];

export const DashboardSidebar = ({ collapsed, onToggle }: DashboardSidebarProps) => {
  return (
    <aside className={cn(
      "fixed left-0 top-0 z-40 h-screen bg-card border-r border-border/50 transition-all duration-300 flex flex-col",
      collapsed ? "w-16" : "w-64"
    )}>
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border/50">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-lg gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground text-sm font-bold">F</span>
            </div>
            <span className="font-bold text-foreground">FreshCart</span>
          </div>
        )}
        <Button
          variant="ghost"
          size="icon"
          onClick={onToggle}
          className={cn("h-8 w-8", collapsed && "mx-auto")}
        >
          <ChevronLeft className={cn("h-4 w-4 transition-transform", collapsed && "rotate-180")} />
        </Button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-1 px-2">
          {menuItems.map((item) => (
            <li key={item.path}>
              <NavLink
                to={item.path}
                end={item.path === "/dashboard"}
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-accent hover:text-accent-foreground transition-colors",
                  collapsed && "justify-center px-2"
                )}
                activeClassName="bg-primary/10 text-primary font-medium"
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span className="text-sm">{item.label}</span>}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-border/50">
        <NavLink
          to="/"
          className={cn(
            "flex items-center gap-3 px-3 py-2.5 rounded-lg text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors",
            collapsed && "justify-center px-2"
          )}
        >
          <LogOut className="h-5 w-5 flex-shrink-0" />
          {!collapsed && <span className="text-sm">Logout</span>}
        </NavLink>
      </div>
    </aside>
  );
};
