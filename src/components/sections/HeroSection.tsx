import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calculator, Shield, Users, FileText } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background to-muted/20 section-padding">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] dark:bg-grid-slate-700/25 dark:[mask-image:linear-gradient(0deg,rgba(255,255,255,0.1),rgba(255,255,255,0.5))]"></div>
      
      <div className="container-max relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in-up">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                Professional{" "}
                <span className="text-gradient">Tax Preparation</span>{" "}
                & Accounting Services
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Expert tax filing for U.S. individuals, nonresidents, and small businesses. 
                Secure, professional, and tailored to your unique tax situation.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: Shield, text: "100% Secure" },
                { icon: Users, text: "Expert Support" },
                { icon: FileText, text: "All Forms" },
                { icon: Calculator, text: "Accurate Filing" },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-2 text-sm">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                    <item.icon className="h-4 w-4 text-primary" />
                  </div>
                  <span className="font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="primary" asChild>
                <Link to="/contact">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/services">View Services</Link>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Shield className="h-4 w-4" />
                <span>IRS Compliant</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-4 w-4" />
                <span>Licensed Professional</span>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative animate-scale-in">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-card border shadow-lg rounded-2xl p-6 card-hover">
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold">Tax Return Status</h3>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-accent">
                      <FileText className="h-3 w-3 text-accent-foreground" />
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Form 1040</span>
                      <span className="text-sm font-medium text-accent">Complete</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">FBAR Filing</span>
                      <span className="text-sm font-medium text-warning">In Progress</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-muted-foreground">Refund Status</span>
                      <span className="text-sm font-medium text-primary">$2,450</span>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <Button size="sm" className="w-full" variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-primary text-primary-foreground rounded-lg p-3 shadow-lg animate-fade-in">
                <Calculator className="h-5 w-5" />
              </div>
              
              <div className="absolute -bottom-4 -left-4 bg-accent text-accent-foreground rounded-lg p-3 shadow-lg animate-fade-in">
                <Shield className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}