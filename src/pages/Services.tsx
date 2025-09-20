import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
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
  DollarSign,
  CheckCircle,
  Clock,
  ArrowRight
} from "lucide-react";

const mainServices = [
  {
    icon: FileText,
    title: "US Individual Tax Returns (Form 1040)",
    description: "Comprehensive tax preparation for U.S. residents including wages, self-employment, rental, and investment income.",
    price: "Starting at $150",
    features: [
      "Federal Form 1040 preparation",
      "State tax return filing",
      "Schedule C for self-employment",
      "Schedule D for capital gains",
      "Schedule E for rental income", 
      "Electronic filing (e-file)",
      "Refund tracking",
      "Tax planning consultation"
    ],
    popular: true,
  },
  {
    icon: Globe,
    title: "Nonresident Tax Returns (Form 1040-NR)",
    description: "Specialized filing for nonresident aliens, including students, researchers, and temporary workers.",
    price: "Starting at $200",
    features: [
      "Form 1040-NR preparation",
      "Treaty benefit optimization",
      "F-1, J-1, H-1B status handling",
      "Dual-status considerations",
      "State requirements analysis",
      "ITIN application assistance",
      "Estimated tax calculations",
      "Status change planning"
    ],
    popular: false,
  },
  {
    icon: Shield,
    title: "FBAR & FATCA Compliance",
    description: "Foreign account reporting and FATCA compliance for international assets and investments.",
    price: "Starting at $300",
    features: [
      "FinCEN Form 114 (FBAR) filing",
      "Form 8938 (FATCA) preparation",
      "Foreign asset valuation",
      "Compliance threshold analysis",
      "Penalty assessment & relief",
      "Voluntary disclosure programs",
      "Foreign trust reporting",
      "Ongoing compliance monitoring"
    ],
    popular: false,
  },
  {
    icon: CreditCard,
    title: "ITIN Services (Form W-7)",
    description: "Individual Taxpayer Identification Number applications and renewals for tax compliance.",
    price: "Starting at $100",
    features: [
      "New ITIN applications",
      "ITIN renewal processing",
      "Document authentication",
      "Supporting documentation review",
      "Rejection response handling",
      "Family ITIN applications",
      "Expedited processing options",
      "Status tracking & updates"
    ],
    popular: false,
  },
  {
    icon: TrendingUp,
    title: "Amended Returns (Form 1040-X)",
    description: "Corrections and amendments to previously filed tax returns for refund recovery or compliance.",
    price: "Starting at $200",
    features: [
      "Form 1040-X preparation",
      "Error identification & correction",
      "Refund optimization",
      "Supporting documentation",
      "IRS correspondence handling",
      "Audit protection",
      "Multi-year amendments",
      "Statute of limitations review"
    ],
    popular: false,
  },
  {
    icon: Calculator,
    title: "Bookkeeping & Accounting",
    description: "Monthly bookkeeping, reconciliations, and financial reporting for small businesses.",
    price: "Starting at $300/month",
    features: [
      "Monthly financial statements",
      "Bank reconciliations",
      "Accounts payable/receivable",
      "Payroll processing support",
      "QuickBooks setup & training",
      "Tax preparation ready books",
      "Financial analysis & insights",
      "Year-end closing services"
    ],
    popular: false,
  },
];

const additionalServices = [
  {
    title: "Prior Year Returns (2022-2025)",
    description: "Filing of back tax returns for missing years with penalty minimization strategies."
  },
  {
    title: "Tax Planning & Consultation", 
    description: "Strategic tax planning sessions to optimize your current and future tax situations."
  },
  {
    title: "IRS Problem Resolution",
    description: "Assistance with IRS notices, audits, payment plans, and collection issues."
  },
  {
    title: "Entity Formation & Tax Elections",
    description: "Business formation, S-Corp elections, and entity tax planning for small businesses."
  },
];

const faqs = [
  {
    question: "What documents do I need for my tax return?",
    answer: "Common documents include W-2s, 1099s, bank statements, investment statements, receipts for deductions, and any prior year tax returns. For nonresidents, you'll also need visa documents and any treaty-related paperwork."
  },
  {
    question: "How long does the tax preparation process take?",
    answer: "Most individual returns are completed within 3-5 business days after receiving all required documents. Complex returns involving foreign assets or business income may take 7-10 business days."
  },
  {
    question: "Do you handle state tax returns?",
    answer: "Yes, we prepare state tax returns for all 50 states. We analyze your state residency status and ensure compliance with all state tax requirements."
  },
  {
    question: "What if I receive an IRS notice after filing?",
    answer: "We provide ongoing support for any IRS correspondence related to returns we've prepared. We'll help you understand the notice and provide representation if needed."
  },
  {
    question: "Can you help with foreign asset reporting requirements?",
    answer: "Absolutely. We specialize in FBAR (FinCEN 114) and FATCA (Form 8938) filings for clients with foreign bank accounts, investments, or other international assets."
  },
];

export default function Services() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted/20">
        <div className="container-max">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Professional <span className="text-gradient">Tax Services</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive tax preparation and accounting solutions for individuals, 
              nonresidents, and small businesses across the United States.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/portal">Client Portal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-gradient">Core Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Expert tax preparation and compliance services tailored to your specific needs
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {mainServices.map((service, index) => (
              <Card key={index} className={`card-hover ${service.popular ? 'ring-2 ring-primary/20' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-2 left-4">
                    <Badge className="bg-primary text-primary-foreground">
                      Most Popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="space-y-4">
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <service.icon className="h-6 w-6 text-primary" />
                    </div>
                    <Badge variant="secondary">{service.price}</Badge>
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="mt-2 text-base">
                      {service.description}
                    </CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button className="w-full" variant="outline" asChild>
                    <Link to="/contact">
                      Get Quote
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Additional <span className="text-gradient">Services</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Comprehensive support for all your tax and accounting needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="primary" asChild>
              <Link to="/contact">Discuss Your Needs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-gradient">Process</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple, secure, and efficient tax preparation process
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Initial Consultation",
                description: "Discuss your tax situation and determine the best approach for your needs.",
                icon: Users,
              },
              {
                step: "2", 
                title: "Document Collection",
                description: "Secure upload of tax documents through our encrypted client portal.",
                icon: Shield,
              },
              {
                step: "3",
                title: "Preparation & Review",
                description: "Expert preparation with thorough review for accuracy and optimization.",
                icon: Calculator,
              },
              {
                step: "4",
                title: "Filing & Follow-up",
                description: "Electronic filing with tracking and ongoing support for any questions.",
                icon: CheckCircle,
              },
            ].map((item, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="relative">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 mx-auto">
                    <item.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to common questions about our tax services
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-card border rounded-lg px-6">
                  <AccordionTrigger className="text-left hover:no-underline">
                    <span className="font-medium">{faq.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Still have questions?</p>
            <Button variant="primary" asChild>
              <Link to="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}