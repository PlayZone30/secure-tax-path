import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Award, 
  BookOpen, 
  Globe, 
  Shield, 
  Users, 
  Clock,
  CheckCircle,
  Target,
  Heart,
  Star,
  FileText
} from "lucide-react";

const teamMembers = [
  {
    name: "Sarah Johnson, CPA",
    role: "Lead Tax Professional",
    experience: "15+ years",
    specialties: ["Individual Tax Returns", "Business Tax", "IRS Representation"],
    image: "/api/placeholder/150/150",
  },
  {
    name: "Michael Chen, EA",
    role: "International Tax Specialist", 
    experience: "12+ years",
    specialties: ["Nonresident Returns", "FBAR/FATCA", "Treaty Benefits"],
    image: "/api/placeholder/150/150",
  },
  {
    name: "Dr. Priya Patel",
    role: "Senior Tax Advisor",
    experience: "10+ years", 
    specialties: ["ITIN Applications", "Amended Returns", "Tax Planning"],
    image: "/api/placeholder/150/150",
  },
];

const values = [
  {
    icon: Shield,
    title: "Security & Confidentiality",
    description: "Your sensitive financial information is protected with bank-level encryption and strict privacy protocols.",
  },
  {
    icon: Target,
    title: "Accuracy & Precision",
    description: "We guarantee accurate filings with meticulous attention to detail and comprehensive review processes.",
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Every client receives individualized attention tailored to their unique tax situation and goals.",
  },
  {
    icon: Clock,
    title: "Timely & Reliable",
    description: "Consistent, on-time delivery with responsive communication throughout the entire process.",
  },
];

const achievements = [
  { icon: Users, number: "2,500+", label: "Clients Served" },
  { icon: FileText, number: "5,000+", label: "Returns Filed" },
  { icon: Award, number: "99.8%", label: "Accuracy Rate" },
  { icon: Star, number: "4.9/5", label: "Client Rating" },
];

export default function About() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted/20">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                  About <span className="text-gradient">TaxPro Services</span>
                </h1>
                <p className="text-xl text-muted-foreground">
                  Professional tax preparation and accounting services built on expertise, 
                  integrity, and personalized client relationships since 2015.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="primary" asChild>
                  <Link to="/contact">Work With Us</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/services">Our Services</Link>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="card-hover">
                <CardContent className="p-8 space-y-6">
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                    <div className="w-12 h-0.5 bg-primary mx-auto"></div>
                  </div>
                  <blockquote className="text-muted-foreground italic text-center">
                    "To provide exceptional tax preparation and accounting services that 
                    empower our clients to achieve financial confidence and compliance, 
                    while building lasting relationships based on trust and expertise."
                  </blockquote>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-2">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 mx-auto">
                  <achievement.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary">{achievement.number}</div>
                <div className="text-sm text-muted-foreground">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                Our <span className="text-gradient">Story</span>
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  TaxPro Services was founded in 2015 with a simple mission: to make professional 
                  tax preparation accessible and stress-free for everyone, especially those with 
                  complex international tax situations.
                </p>
                <p>
                  Our founder, Sarah Johnson, noticed a gap in the market for specialized nonresident 
                  tax services. After helping countless international students and professionals 
                  navigate the complex U.S. tax system, she decided to create a practice dedicated 
                  to excellence in both domestic and international tax preparation.
                </p>
                <p>
                  Today, we serve over 2,500 clients nationwide, from individual taxpayers to small 
                  businesses, providing the same level of expertise and personalized service that 
                  started our journey.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Award className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Professional Certifications</span>
                    </div>
                    <ul className="space-y-2 text-sm">
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>Certified Public Accountants (CPA)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>Enrolled Agents (EA)</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>PTIN Registered Preparers</span>
                      </li>
                      <li className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-accent" />
                        <span>IRS Authorized e-file Providers</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>

              <Card className="card-hover">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-primary" />
                      <span className="font-semibold">Specializations</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "International Tax",
                        "Nonresident Returns", 
                        "FBAR/FATCA",
                        "ITIN Services",
                        "Small Business",
                        "Tax Planning"
                      ].map((spec, index) => (
                        <Badge key={index} variant="secondary">{spec}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex space-x-4">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Meet Our <span className="text-gradient">Team</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Experienced professionals dedicated to your financial success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="card-hover text-center">
                <CardContent className="p-6 space-y-4">
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{member.name}</h3>
                    <p className="text-primary font-medium">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.experience} experience</p>
                  </div>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">Specialties:</p>
                    <div className="flex flex-wrap gap-1 justify-center">
                      {member.specialties.map((specialty, specIndex) => (
                        <Badge key={specIndex} variant="secondary" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-max text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Experience the Difference?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Join our community of satisfied clients and experience professional, 
              personalized tax services that you can trust.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">Schedule Consultation</Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/services">View Our Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}