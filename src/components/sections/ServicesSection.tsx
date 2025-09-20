import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  FileText, 
  Users, 
  Building, 
  CreditCard, 
  Calculator, 
  Globe,
  TrendingUp,
  Shield,
  DollarSign
} from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "Individual Tax Returns (1040)",
    description: "Complete federal and state tax preparation for U.S. residents with wages, self-employment, or investment income.",
    features: ["Form 1040 Filing", "State Returns", "E-file Available", "Refund Tracking"],
    popular: true,
  },
  {
    icon: Globe,
    title: "Nonresident Returns (1040-NR)",
    description: "Specialized filing for nonresident aliens, including students and treaty benefits optimization.",
    features: ["Form 1040-NR", "Treaty Benefits", "ITIN Support", "Status Changes"],
    popular: false,
  },
  {
    icon: Shield,
    title: "FBAR & FATCA Filing",
    description: "Foreign account reporting (FinCEN 114) and FATCA compliance for international assets.",
    features: ["FinCEN Form 114", "Form 8938 Filing", "Compliance Review", "Penalty Relief"],
    popular: false,
  },
  {
    icon: CreditCard,
    title: "ITIN Applications (W-7)",
    description: "New applications and renewals for Individual Taxpayer Identification Numbers.",
    features: ["New ITIN Apps", "Renewals", "Document Review", "Fast Processing"],
    popular: false,
  },
  {
    icon: TrendingUp,
    title: "Amended Returns (1040-X)",
    description: "Corrections and amendments to previously filed tax returns for all years.",
    features: ["Form 1040-X", "Error Corrections", "Refund Recovery", "IRS Response"],
    popular: false,
  },
  {
    icon: Calculator,
    title: "Bookkeeping & Accounting",
    description: "Monthly bookkeeping, reconciliations, and accounting support for small businesses.",
    features: ["Monthly Books", "Reconciliation", "Financial Reports", "Tax Prep Ready"],
    popular: false,
  },
];

export function ServicesSection() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="container-max">
        <div className="text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">
            Comprehensive <span className="text-gradient">Tax Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From individual returns to complex international filings, we provide expert 
            tax preparation services tailored to your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className={`card-hover ${service.popular ? 'ring-2 ring-primary/20' : ''}`}>
              {service.popular && (
                <div className="absolute -top-2 left-4">
                  <span className="bg-primary text-primary-foreground text-xs px-2 py-1 rounded-full font-medium">
                    Most Popular
                  </span>
                </div>
              )}
              
              <CardHeader className="space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription className="mt-2">
                    {service.description}
                  </CardDescription>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" className="w-full" asChild>
                  <Link to="/contact">Learn More</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="primary" asChild>
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}