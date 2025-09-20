import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Search,
  ExternalLink,
  FileText,
  BookOpen,
  Calculator,
  AlertCircle,
  Info,
  Calendar,
  Globe,
  Download,
  HelpCircle,
  Clock,
  DollarSign,
  MessageCircle
} from "lucide-react";

const faqs = [
  {
    category: "Individual Tax Returns",
    questions: [
      {
        question: "What documents do I need for my tax return?",
        answer: "You'll need W-2s from employers, 1099s for other income, bank statements, investment statements, receipts for deductions, and your previous year's tax return. For homeowners, bring mortgage interest statements (1098). Self-employed individuals need business income and expense records."
      },
      {
        question: "When is the tax filing deadline?",
        answer: "The federal tax filing deadline is typically April 15th each year. If April 15th falls on a weekend or holiday, the deadline is extended to the next business day. Extensions are available until October 15th, but any taxes owed must still be paid by April 15th to avoid penalties."
      },
      {
        question: "Can I file electronically?",
        answer: "Yes! We offer electronic filing (e-file) for faster processing and confirmation. E-filed returns are typically processed within 21 days, and refunds are issued much faster than paper returns. You'll receive confirmation when your return is accepted by the IRS."
      }
    ]
  },
  {
    category: "Nonresident Tax Issues",
    questions: [
      {
        question: "What is the difference between Form 1040 and 1040-NR?",
        answer: "Form 1040-NR is for nonresident aliens who have U.S. source income. It's different from Form 1040 in that it only taxes U.S. source income and allows different deductions. Nonresidents generally cannot use standard deductions and must itemize. The form also handles treaty benefits that may reduce tax liability."
      },
      {
        question: "How do tax treaties affect my U.S. taxes?",
        answer: "Tax treaties between the U.S. and your home country may reduce or eliminate U.S. tax on certain types of income. Common benefits include reduced withholding rates on scholarships, fellowships, and wages. Students and researchers often qualify for treaty benefits that can significantly reduce their tax liability."
      },
      {
        question: "Do I need an ITIN if I'm a nonresident?",
        answer: "You need an Individual Taxpayer Identification Number (ITIN) if you don't have a Social Security Number but are required to file a U.S. tax return. This includes nonresidents with U.S. source income, dependents of U.S. taxpayers, and spouses filing joint returns. We can help you apply for an ITIN using Form W-7."
      }
    ]
  },
  {
    category: "FBAR & International Reporting",
    questions: [
      {
        question: "What is FBAR and do I need to file it?",
        answer: "FBAR (Foreign Bank Account Report) is required if you have foreign financial accounts with an aggregate maximum balance exceeding $10,000 at any time during the year. This includes bank accounts, investment accounts, and other financial accounts in foreign countries. FBAR is filed separately from your tax return using FinCEN Form 114."
      },
      {
        question: "What's the difference between FBAR and FATCA?",
        answer: "FBAR (FinCEN 114) is filed with the Treasury Department and required for foreign accounts over $10,000. FATCA (Form 8938) is filed with your tax return and required for specified foreign financial assets over certain thresholds ($50,000-$200,000 depending on filing status). You may need to file both if you meet the requirements."
      },
      {
        question: "What are the penalties for not filing FBAR?",
        answer: "FBAR penalties can be severe. Non-willful violations can result in penalties up to $12,921 per account per year. Willful violations can result in penalties up to $129,210 or 50% of the account balance. However, there are voluntary disclosure programs available for those who need to catch up on filing requirements."
      }
    ]
  },
  {
    category: "Business & Self-Employment",
    questions: [
      {
        question: "When do I need to report self-employment income?",
        answer: "You must report self-employment income if you earn $400 or more from self-employment in a tax year. This includes income from freelancing, consulting, gig work, or running a business. Self-employment income is subject to both income tax and self-employment tax (Social Security and Medicare taxes)."
      },
      {
        question: "What business expenses can I deduct?",
        answer: "Common deductible business expenses include office supplies, business meals (50%), travel expenses, professional development, business insurance, and home office expenses. Expenses must be ordinary and necessary for your business. Keep detailed records and receipts for all business expenses."
      },
      {
        question: "Should I form an LLC or corporation?",
        answer: "The choice depends on your business needs, liability concerns, and tax situation. LLCs offer flexibility and pass-through taxation, while corporations provide liability protection but may have double taxation. S-Corporation election can provide tax benefits for some businesses. We can help analyze your specific situation."
      }
    ]
  }
];

const resources = [
  {
    title: "Tax Forms & Publications",
    icon: FileText,
    items: [
      { name: "Form 1040 - Individual Tax Return", link: "https://www.irs.gov/forms-pubs/about-form-1040", external: true },
      { name: "Form 1040-NR - Nonresident Return", link: "https://www.irs.gov/forms-pubs/about-form-1040-nr", external: true },
      { name: "Form W-7 - ITIN Application", link: "https://www.irs.gov/forms-pubs/about-form-w-7", external: true },
      { name: "FinCEN Form 114 - FBAR", link: "https://www.fincen.gov/resources/reporting-forms", external: true },
    ]
  },
  {
    title: "IRS Resources",
    icon: Globe,
    items: [
      { name: "IRS Official Website", link: "https://www.irs.gov", external: true },
      { name: "Tax Treaties", link: "https://www.irs.gov/businesses/international-businesses/united-states-income-tax-treaties-a-to-z", external: true },
      { name: "ITIN Information", link: "https://www.irs.gov/individuals/individual-taxpayer-identification-number", external: true },
      { name: "Nonresident Tax Guide", link: "https://www.irs.gov/individuals/international-taxpayers/taxation-of-nonresident-aliens", external: true },
    ]
  },
  {
    title: "Calculators & Tools",
    icon: Calculator,
    items: [
      { name: "Tax Withholding Calculator", link: "https://www.irs.gov/individuals/tax-withholding-estimator", external: true },
      { name: "Estimated Tax Calculator", link: "https://www.irs.gov/businesses/small-businesses-self-employed/estimated-taxes", external: true },
      { name: "FBAR Threshold Calculator", link: "/contact", external: false },
      { name: "Tax Planning Worksheet", link: "/contact", external: false },
    ]
  },
  {
    title: "Educational Guides",
    icon: BookOpen,
    items: [
      { name: "First-Time Tax Filer Guide", link: "/contact", external: false },
      { name: "Nonresident Student Guide", link: "/contact", external: false },
      { name: "Small Business Tax Guide", link: "/contact", external: false },
      { name: "International Compliance Guide", link: "/contact", external: false },
    ]
  }
];

const taxUpdates = [
  {
    date: "March 1, 2025",
    title: "2024 Tax Filing Season Updates",
    description: "Key changes and deadlines for the 2024 tax filing season, including new forms and updated procedures.",
    type: "Filing Update",
    priority: "high"
  },
  {
    date: "February 15, 2025", 
    title: "ITIN Renewal Reminders",
    description: "ITINs not used on tax returns for three consecutive years will expire. Check if your ITIN needs renewal.",
    type: "ITIN Notice",
    priority: "medium"
  },
  {
    date: "January 30, 2025",
    title: "FBAR Filing Deadline Reminder",
    description: "FBAR (FinCEN 114) deadline is April 15, 2025, with automatic 6-month extension available.",
    type: "International",
    priority: "high"
  },
  {
    date: "January 15, 2025",
    title: "New Tax Treaty Benefits",
    description: "Updated treaty benefits available for students and researchers from select countries.",
    type: "Treaty Update",
    priority: "medium"
  }
];

export default function Resources() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-background to-muted/20">
        <div className="container-max">
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Tax <span className="text-gradient">Resources</span> & FAQs
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive tax information, guides, and frequently asked questions 
              to help you understand your tax obligations and opportunities.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-md mx-auto mt-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search for tax topics, forms, or questions..."
                className="pl-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Tax Updates */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Latest <span className="text-gradient">Tax Updates</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Stay informed with the latest tax news and important deadlines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {taxUpdates.map((update, index) => (
              <Card key={index} className="card-hover">
                <CardHeader className="space-y-2">
                  <div className="flex items-center justify-between">
                    <Badge 
                      variant={update.priority === "high" ? "destructive" : "secondary"}
                    >
                      {update.type}
                    </Badge>
                    <span className="text-sm text-muted-foreground">{update.date}</span>
                  </div>
                  <CardTitle className="text-lg">{update.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{update.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" asChild>
              <Link to="/contact">
                <Clock className="mr-2 h-4 w-4" />
                Subscribe to Updates
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Resources */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Quick <span className="text-gradient">Resources</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Essential tax forms, calculators, and official resources
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {resources.map((resource, index) => (
              <Card key={index} className="card-hover">
                <CardHeader>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <resource.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {resource.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        {item.external ? (
                          <a 
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-between text-sm hover:text-primary transition-colors"
                          >
                            <span>{item.name}</span>
                            <ExternalLink className="h-3 w-3" />
                          </a>
                        ) : (
                          <Link 
                            to={item.link}
                            className="flex items-center text-sm hover:text-primary transition-colors"
                          >
                            {item.name}
                          </Link>
                        )}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="section-padding">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Get answers to the most common tax questions organized by category
            </p>
          </div>

          <div className="space-y-8">
            {faqs.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <HelpCircle className="h-5 w-5 text-primary" />
                    <span>{category.category}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((faq, faqIndex) => (
                      <AccordionItem 
                        key={faqIndex} 
                        value={`${categoryIndex}-${faqIndex}`}
                        className="border rounded-lg px-4"
                      >
                        <AccordionTrigger className="text-left hover:no-underline">
                          <span className="font-medium">{faq.question}</span>
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground pb-4">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tax Calendar */}
      <section className="section-padding bg-muted/30">
        <div className="container-max">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold">
              2025 Tax <span className="text-gradient">Calendar</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Important tax deadlines and dates to remember
            </p>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { date: "January 31", event: "Form W-2 and 1099 deadline", type: "employers" },
                  { date: "March 15", event: "S-Corporation tax return deadline", type: "business" },
                  { date: "April 15", event: "Individual tax return deadline", type: "individual" },
                  { date: "April 15", event: "FBAR filing deadline", type: "international" },
                  { date: "June 15", event: "Nonresident extension deadline", type: "international" },
                  { date: "October 15", event: "Extended return deadline", type: "individual" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
                      <Calendar className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">{item.date}</p>
                      <p className="text-sm text-muted-foreground">{item.event}</p>
                      <Badge variant="secondary" className="text-xs mt-1">
                        {item.type}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Need More Help */}
      <section className="section-padding bg-gradient-hero text-white">
        <div className="container-max text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">
              Need Personalized Help?
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Our tax professionals are here to answer your specific questions 
              and provide personalized guidance for your tax situation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/contact">
                <MessageCircle className="mr-2 h-4 w-4" />
                Ask a Question
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20" asChild>
              <Link to="/services">
                View Our Services
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}