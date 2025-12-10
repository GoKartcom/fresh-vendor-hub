import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What are the commission charges?",
    answer: "We charge a small commission on each order to cover platform and payment processing costs. For the first month, there are zero commission charges. After that, our rates are among the lowest in the industry - typically 5-8% depending on order value.",
  },
  {
    question: "How quickly will I receive my payments?",
    answer: "You'll receive payments directly to your bank account within 24-48 hours of order completion. No waiting for weekly or monthly settlements.",
  },
  {
    question: "What documents do I need to register?",
    answer: "You'll need your Aadhaar card, PAN card, FSSAI license (for food vendors), shop address proof, and bank account details. If you don't have FSSAI, we can help you apply.",
  },
  {
    question: "Do I need a smartphone or computer?",
    answer: "Any basic smartphone with internet is enough. Our platform is mobile-first and works on any phone. We also provide training to help you get started.",
  },
  {
    question: "What if I'm not tech-savvy?",
    answer: "No worries! Our platform is designed to be extremely simple. We provide free onboarding support and training. Our team will personally help you set up your store and add products.",
  },
  {
    question: "Can I set my own prices and delivery areas?",
    answer: "Absolutely! You have full control over your product prices, operating hours, and the areas you want to deliver to. You can adjust these anytime from your dashboard.",
  },
  {
    question: "What happens if an order gets cancelled?",
    answer: "If a customer cancels before you prepare the order, there's no charge. If cancelled after preparation, we have fair policies to compensate for your time and effort.",
  },
  {
    question: "Is there a minimum order requirement?",
    answer: "You can set your own minimum order value based on what makes sense for your business. We recommend a minimum to ensure profitability.",
  },
];

export const FAQ = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about selling on FreshCart
          </p>
        </div>

        <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border/50 rounded-xl px-6 shadow-card"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:text-primary hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
