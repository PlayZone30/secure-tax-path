import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { 
  CheckCircle, 
  CreditCard, 
  Phone, 
  Mail, 
  DollarSign,
  Shield,
  Clock,
  ArrowRight
} from "lucide-react";
import { servicePricing, paymentMethods, pricingNotes } from "@/lib/pricing";

const categoryLabels = {
  individual: 'Individual Tax Services',
  nonresident: 'Nonresident Tax Services', 
  compliance: 'Compliance & Reporting',
  business: 'Business Services',
  additional: 'Additional Services'
};

export default function Pricing() {
  // Group services by category
  const servicesByCategory = servicePricing.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof servicePricing>);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted/20">
        <div className="container-max">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Transparent <span className="text-gradient">Pricing</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Clear, upfront pricing for all our tax preparation and accounting services. 
              No hidden fees, no surprises.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="primary" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="section-padding">
        <div className="container-max">
          <div className="space-y-12">
            {Object.entries(servicesByCategory).map(([category, services]) => (
              <div key={category} className="space-y-6">
                <div className="text-center">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    {categoryLabels[category as keyof typeof categoryLabels]}
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    Professional tax services tailored to your specific needs
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                  {services.map((service) => (
                    <Card key={service.id} className={`card-hover ${service.popular ? 'ring-2 ring-primary/20' : ''}`}>
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
                            <DollarSign className="h-6 w-6 text-primary" />
                          </div>
                          <Badge variant="secondary" className="text-lg font-semibold">
                            {service.price}
                          </Badge>
                        </div>
                        <div>
                          <CardTitle className="text-xl">{service.name}</CardTitle>
                          <CardDescription className="mt-2 text-base">
                            {service.description}
                          </CardDescription>
                        </div>
                      </CardHeader>

                      <CardContent className="space-y-6">
                        <div className="space-y-2">
                          {service.features.map((feature, index) => (
                            <div key={index} className="flex items-center space-x-2 text-sm">
                              <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        <Button className="w-full" variant="outline" asChild>
                          <Link to="/contact">
                            Contact for Payment
                            <ArrowRight className="ml-2 h-4 w-4" />
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Payment <span className="text-gradient">Methods</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              We accept multiple payment methods for your convenience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{method.method}</h3>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="bg-primary/5 border-primary/20">
            <CardContent className="p-6">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center space-x-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <h3 className="text-lg font-semibold">Payment Terms</h3>
                </div>
                <p className="text-muted-foreground">
                  {pricingNotes.paymentDue}
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      <Mail className="mr-2 h-4 w-4" />
                      {pricingNotes.email}
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      <Phone className="mr-2 h-4 w-4" />
                      {pricingNotes.phone}
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Security & Trust */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Secure & <span className="text-gradient">Trusted</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Your financial information is protected with bank-level security
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Bank-Level Security</h3>
                <p className="text-muted-foreground text-sm">
                  All client data is encrypted and protected with industry-standard security measures.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                  <CreditCard className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Transparent Billing</h3>
                <p className="text-muted-foreground text-sm">
                  Clear, upfront pricing with no hidden fees or surprise charges.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto mb-4">
                  <CheckCircle className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Satisfaction Guarantee</h3>
                <p className="text-muted-foreground text-sm">
                  We stand behind our work with a 100% satisfaction guarantee on all services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
        <div className="container-max">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Get Started?
            </h2>
            <p className="text-xl opacity-90">
              Contact us today for a personalized quote and to discuss your tax preparation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">Get Your Quote</Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
                <Link to="/appointment">Schedule Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
