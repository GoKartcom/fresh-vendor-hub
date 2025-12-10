import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground text-lg font-bold">F</span>
            </div>
            <span className="text-xl font-bold text-foreground">FreshCart</span>
            <span className="hidden sm:inline-flex ml-2 text-xs font-medium text-muted-foreground bg-accent px-2 py-0.5 rounded-full">
              For Vendors
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </Link>
            <Link to="/#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Success Stories
            </Link>
            <Link to="/#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              FAQ
            </Link>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Button asChild variant="ghost">
              <Link to="/login">Login</Link>
            </Button>
            <Button asChild variant="hero">
              <Link to="/register">Get Started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-accent transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in">
            <div className="flex flex-col gap-4">
              <Link to="/#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Features
              </Link>
              <Link to="/#how-it-works" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                How it Works
              </Link>
              <Link to="/#testimonials" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                Success Stories
              </Link>
              <Link to="/#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2">
                FAQ
              </Link>
              <div className="flex flex-col gap-2 pt-4 border-t border-border/50">
                <Button asChild variant="outline" className="w-full">
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild variant="hero" className="w-full">
                  <Link to="/register">Get Started</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
