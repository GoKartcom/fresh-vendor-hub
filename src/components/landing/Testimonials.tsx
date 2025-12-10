import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ramesh Kumar",
    business: "Kumar Fresh Vegetables",
    location: "Koramangala, Bangalore",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
    quote: "My sales increased by 60% in just 3 months. FreshCart helped me reach customers I never could before.",
    rating: 5,
    growth: "+60%",
  },
  {
    name: "Lakshmi Devi",
    business: "Lakshmi's Organic Farm",
    location: "Indiranagar, Bangalore",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote: "The inventory management is so easy. I update stock from my phone while I'm at the market.",
    rating: 5,
    growth: "+45%",
  },
  {
    name: "Mohammed Irfan",
    business: "Fresh & Green Store",
    location: "HSR Layout, Bangalore",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "Getting paid within 24 hours makes a huge difference for my cash flow. Highly recommend!",
    rating: 5,
    growth: "+38%",
  },
];

export const Testimonials = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Trusted by 500+ Local Vendors
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from vendors who have transformed their business with FreshCart
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-card border border-border/50 shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Quote className="absolute top-6 right-6 h-8 w-8 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-warning text-warning" />
                ))}
              </div>

              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>

              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="h-14 w-14 rounded-full object-cover ring-2 ring-primary/20"
                />
                <div className="flex-1">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.location}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-success">{testimonial.growth}</p>
                  <p className="text-xs text-muted-foreground">Revenue</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
