import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="h-10 w-10 rounded-xl gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground text-xl font-bold">K</span>
              </div>
              <span className="text-2xl font-bold">Klickit</span>
            </div>
            <p className="text-muted-foreground mb-6">
              Empowering local vendors to grow their business online with zero hassle.
            </p>
            <div className="space-y-2 text-sm">
              <a href="tel:+919876543210" className="flex items-center gap-2 text-muted-foreground hover:text-background transition-colors">
                <Phone className="h-4 w-4" />
                +91 98765 43210
              </a>
              <a href="mailto:merchants@klickit.in" className="flex items-center gap-2 text-muted-foreground hover:text-background transition-colors">
                <Mail className="h-4 w-4" />
                merchants@klickit.in
              </a>
              <p className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-4 w-4" />
                Bangalore, India
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/register" className="text-muted-foreground hover:text-background transition-colors">Register</Link></li>
              <li><Link to="/login" className="text-muted-foreground hover:text-background transition-colors">Login</Link></li>
              <li><Link to="/demo" className="text-muted-foreground hover:text-background transition-colors">Watch Demo</Link></li>
              <li><Link to="/pricing" className="text-muted-foreground hover:text-background transition-colors">Pricing</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/help" className="text-muted-foreground hover:text-background transition-colors">Help Center</Link></li>
              <li><Link to="/tutorials" className="text-muted-foreground hover:text-background transition-colors">Tutorials</Link></li>
              <li><Link to="/blog" className="text-muted-foreground hover:text-background transition-colors">Blog</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-background transition-colors">Contact Support</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/terms" className="text-muted-foreground hover:text-background transition-colors">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-muted-foreground hover:text-background transition-colors">Privacy Policy</Link></li>
              <li><Link to="/vendor-agreement" className="text-muted-foreground hover:text-background transition-colors">Vendor Agreement</Link></li>
              <li><Link to="/refund-policy" className="text-muted-foreground hover:text-background transition-colors">Refund Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted-foreground/20 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Klickit. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
