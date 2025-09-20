import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { CheckCircle, Clock, Shield, Users, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Secure & Confidential",
    description: "Bank-level encryption and strict privacy protocols protect your sensitive tax information.",
  },
  {
    icon: Users,
    title: "Expert Tax Professionals",
    description: "Licensed professionals with extensive experience in U.S. tax law and international requirements.",
  },
  {
    icon: Clock,
    title: "Fast & Reliable Service",
    description: "Quick turnaround times with accurate filings and responsive customer support.",
  },
  {
    icon: CheckCircle,
    title: "IRS Compliant & Accurate",
    description: "Guaranteed accuracy with full IRS compliance for all federal and state filings.",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "International Student",
    content: "TaxPro Services made my nonresident tax filing so simple. They handled my F-1 visa status and treaty benefits perfectly!",
    rating: 5,
  },
  {
    name: "Michael Rodriguez",
    role: "Small Business Owner",
    content: "Their bookkeeping and tax services helped streamline my business finances. Professional and reliable!",
    rating: 5,
  },
  {
    name: "Dr. Amara Patel",
    role: "Medical Professional",
    content: "Complex tax situation with foreign assets - they handled FBAR and FATCA filing flawlessly. Highly recommended!",
    rating: 5,
  },
];

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Services Preview */}
      <ServicesSection />

      {/* Why Choose Us */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Why Choose <span className="text-gradient">TaxPro Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We combine professional expertise with personalized service to deliver 
              exceptional tax preparation and accounting solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="flex space-x-4 animate-fade-in">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our <span className="text-gradient">Clients Say</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Trusted by individuals and businesses nationwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="card-hover">
                <CardContent className="p-6 space-y-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <div key={i} className="h-4 w-4 text-yellow-400">⭐</div>
                    ))}
                  </div>
                  <blockquote className="text-sm italic">
                    "{testimonial.content}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-sm">{testimonial.name}</div>
                    <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-max">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Join thousands of satisfied clients who trust us with their tax preparation 
                and accounting needs. Contact us today for a consultation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <Link to="/contact">
                  Get Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
                <Link to="/portal">Access Client Portal</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}