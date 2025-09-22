import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Calendar, Clock, User, Search, Filter } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Hardcoded blog articles data
const blogArticles = [
  {
    id: 1,
    title: "2025 Tax Deadlines: What You Need to Know",
    excerpt: "Important tax deadlines for 2025 that every taxpayer should be aware of, including filing dates, extension deadlines, and payment due dates.",
    content: "The 2025 tax season brings several important deadlines that taxpayers need to be aware of. The main filing deadline for most individual tax returns is April 15, 2025. However, if you're filing for an extension, you'll have until October 15, 2025, to submit your completed return. It's crucial to note that while extensions give you more time to file, they don't extend the deadline for paying any taxes owed. Estimated tax payments are due quarterly throughout the year, with the first payment due April 15, 2025. For those with foreign accounts, the FBAR deadline is April 15, 2025, with an automatic extension to October 15, 2025. Make sure to mark these dates on your calendar and start gathering your documents early to avoid last-minute stress.",
    author: "TaxPro Team",
    publishDate: "2025-01-15",
    readTime: "5 min read",
    category: "Tax Deadlines",
    tags: ["2025", "deadlines", "filing", "extensions"],
    featured: true
  },
  {
    id: 2,
    title: "New Tax Law Changes for 2025: How They Affect You",
    excerpt: "A comprehensive overview of the latest tax law changes that took effect in 2025 and how they might impact your tax situation.",
    content: "The 2025 tax year brings several significant changes that could affect your tax planning and filing. One of the most notable changes is the adjustment of tax brackets for inflation, which means many taxpayers will see slightly higher income thresholds before moving into higher tax brackets. The standard deduction has also been increased: $14,600 for single filers and $29,200 for married couples filing jointly. There are new provisions for retirement savings, with increased contribution limits for 401(k) plans and IRAs. The child tax credit has been enhanced with higher maximum amounts and expanded eligibility. Additionally, there are new rules regarding cryptocurrency reporting and digital asset transactions. These changes underscore the importance of staying informed and potentially adjusting your tax strategy throughout the year.",
    author: "Sarah Johnson, CPA",
    publishDate: "2025-01-10",
    readTime: "8 min read",
    category: "Tax Law Changes",
    tags: ["2025", "tax law", "brackets", "deductions", "credits"],
    featured: true
  },
  {
    id: 3,
    title: "FBAR Filing Requirements: A Complete Guide",
    excerpt: "Everything you need to know about FBAR (Foreign Bank Account Report) filing requirements, including who must file and important deadlines.",
    content: "The Foreign Bank Account Report (FBAR) is a crucial filing requirement for U.S. persons with foreign financial accounts. If you have a financial interest in or signature authority over foreign accounts with an aggregate value exceeding $10,000 at any time during the calendar year, you must file an FBAR. This includes bank accounts, securities accounts, and other financial accounts held outside the United States. The FBAR must be filed electronically through the Financial Crimes Enforcement Network (FinCEN) website by April 15 of the year following the calendar year being reported. However, there's an automatic extension to October 15. It's important to note that FBAR filing is separate from your tax return and has different requirements. Failure to file can result in significant penalties, so it's essential to understand your obligations and file on time.",
    author: "Michael Chen, CPA",
    publishDate: "2025-01-05",
    readTime: "6 min read",
    category: "International Tax",
    tags: ["FBAR", "foreign accounts", "compliance", "FinCEN"],
    featured: false
  },
  {
    id: 4,
    title: "Understanding ITIN Applications: Step-by-Step Process",
    excerpt: "A detailed guide to applying for an Individual Taxpayer Identification Number (ITIN), including required documents and common mistakes to avoid.",
    content: "An Individual Taxpayer Identification Number (ITIN) is a tax processing number issued by the IRS for individuals who are required to have a U.S. taxpayer identification number but are not eligible to obtain a Social Security Number. ITINs are used for tax purposes only and do not authorize work in the U.S. or provide eligibility for Social Security benefits. To apply for an ITIN, you must complete Form W-7 and submit it along with your tax return or other required documentation. The process requires specific supporting documents, such as a passport, national ID card, or other acceptable identification. It's crucial to ensure all documents are properly certified and translated if necessary. The processing time can take 7-11 weeks, so it's important to apply well before tax filing deadlines. Common mistakes include incomplete applications, insufficient documentation, and not following the specific formatting requirements.",
    author: "Lisa Rodriguez, EA",
    publishDate: "2024-12-28",
    readTime: "7 min read",
    category: "Tax Preparation",
    tags: ["ITIN", "W-7", "identification", "tax filing"],
    featured: false
  },
  {
    id: 5,
    title: "Tax Planning for Nonresidents: Essential Strategies",
    excerpt: "Key tax planning strategies for nonresident aliens, including treaty benefits, tax residency rules, and common filing requirements.",
    content: "Tax planning for nonresidents requires a thorough understanding of U.S. tax laws and international tax treaties. Nonresident aliens are generally subject to U.S. tax on their U.S. source income, but tax treaties can provide significant benefits and exemptions. The first step is determining your tax residency status, which affects your filing requirements and tax rates. Nonresidents typically file Form 1040-NR and may be eligible for treaty benefits that reduce or eliminate U.S. tax on certain types of income. It's important to understand the substantial presence test and the closer connection exception. Proper planning can help minimize tax liability through strategic timing of income and deductions, taking advantage of treaty provisions, and understanding the difference between effectively connected income and fixed, determinable, annual, or periodic income. Working with a tax professional who understands international tax law is crucial for nonresidents to ensure compliance and optimize their tax situation.",
    author: "David Kim, CPA",
    publishDate: "2024-12-20",
    readTime: "9 min read",
    category: "International Tax",
    tags: ["nonresident", "1040-NR", "treaty", "planning"],
    featured: false
  },
  {
    id: 6,
    title: "Common Tax Deductions You Might Be Missing",
    excerpt: "Discover frequently overlooked tax deductions that could help reduce your tax liability and maximize your refund.",
    content: "Many taxpayers miss out on valuable deductions simply because they're not aware of them or don't keep proper records. Some commonly overlooked deductions include unreimbursed employee expenses (if you itemize), home office expenses for self-employed individuals, medical and dental expenses exceeding 7.5% of your AGI, state and local taxes, charitable contributions (including non-cash donations), and student loan interest. For business owners, there are additional deductions like business meals (now at 50% of cost), equipment purchases, and professional development expenses. It's important to maintain detailed records and receipts for all deductible expenses. The key is understanding what qualifies as a legitimate business or personal deduction and keeping accurate documentation. Consider working with a tax professional to ensure you're taking advantage of all available deductions while staying within the bounds of tax law.",
    author: "Jennifer Martinez, EA",
    publishDate: "2024-12-15",
    readTime: "6 min read",
    category: "Tax Tips",
    tags: ["deductions", "tax savings", "refund", "expenses"],
    featured: false
  },
  {
    id: 7,
    title: "Amended Tax Returns: When and How to File",
    excerpt: "Learn when you need to file an amended return, the process for filing Form 1040-X, and important considerations for corrections.",
    content: "Amended tax returns (Form 1040-X) are used to correct errors or make changes to a previously filed tax return. You should file an amended return if you discover errors in your original filing, receive additional tax documents after filing, or need to claim missed deductions or credits. The general rule is that you have three years from the original filing date or two years from the date you paid the tax, whichever is later, to file an amended return. The process involves completing Form 1040-X, which requires you to show the original amounts, the changes being made, and the corrected amounts. It's important to include all necessary supporting documentation and explain the reason for the amendment. If the amendment results in additional tax owed, you should pay it as soon as possible to avoid additional interest and penalties. If you're due a refund, the IRS will process it after reviewing your amended return.",
    author: "Robert Thompson, CPA",
    publishDate: "2024-12-10",
    readTime: "5 min read",
    category: "Tax Preparation",
    tags: ["amended return", "1040-X", "corrections", "refund"],
    featured: false
  },
  {
    id: 8,
    title: "Quarterly Estimated Tax Payments: A Business Owner's Guide",
    excerpt: "Everything business owners need to know about quarterly estimated tax payments, including calculation methods and payment schedules.",
    content: "Quarterly estimated tax payments are a crucial aspect of tax compliance for business owners, self-employed individuals, and those with significant non-wage income. These payments help you stay current with your tax obligations throughout the year and avoid penalties for underpayment. The general rule is that you must make estimated tax payments if you expect to owe at least $1,000 in tax after subtracting withholding and refundable credits. The payments are due on April 15, June 15, September 15, and January 15 of the following year. There are several methods to calculate your estimated tax, including the prior year method, the annualized income method, and the current year method. It's important to keep detailed records of your income and expenses throughout the year to make accurate estimates. Consider working with a tax professional to develop a strategy that minimizes your tax liability while ensuring compliance with payment requirements.",
    author: "Amanda Foster, CPA",
    publishDate: "2024-12-05",
    readTime: "7 min read",
    category: "Business Tax",
    tags: ["estimated tax", "quarterly payments", "business", "self-employed"],
    featured: false
  }
];

const categories = ["All", "Tax Deadlines", "Tax Law Changes", "International Tax", "Tax Preparation", "Tax Tips", "Business Tax"];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredArticles = blogArticles.filter(article => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredArticles = blogArticles.filter(article => article.featured);
  const regularArticles = filteredArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container-max py-12">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Tax Blog & Updates
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay informed with the latest tax news, law changes, and expert insights to help you navigate your tax obligations with confidence.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <div className="flex items-center gap-2">
              <Filter className="h-4 w-4 text-gray-500" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[200px]">
                  <SelectValue placeholder="Filter by category" />
                </SelectTrigger>
                <SelectContent>
                  {categories.map((category) => (
                    <SelectItem key={category} value={category}>
                      {category}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {/* Featured Articles Section */}
        {selectedCategory === "All" && searchTerm === "" && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                      <Badge variant="outline">Featured</Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors">
                      <Link to={`/blog/${article.id}`} className="hover:underline">
                        {article.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                    </div>
                    <Button asChild className="w-full">
                      <Link to={`/blog/${article.id}`}>
                        Read Full Article
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* All Articles Section */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {selectedCategory === "All" ? "All Articles" : `${selectedCategory} Articles`}
            {searchTerm && ` - Search Results for "${searchTerm}"`}
          </h2>
          
          {regularArticles.length === 0 ? (
            <Card className="text-center py-12">
              <CardContent>
                <p className="text-gray-500 text-lg">No articles found matching your criteria.</p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchTerm("");
                    setSelectedCategory("All");
                  }}
                  className="mt-4"
                >
                  Clear Filters
                </Button>
              </CardContent>
            </Card>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularArticles.map((article) => (
                <Card key={article.id} className="group hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{article.category}</Badge>
                    </div>
                    <CardTitle className="group-hover:text-primary transition-colors line-clamp-2">
                      <Link to={`/blog/${article.id}`} className="hover:underline">
                        {article.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {article.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <User className="h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(article.publishDate).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          <span>{article.readTime}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          #{tag}
                        </Badge>
                      ))}
                      {article.tags.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{article.tags.length - 3} more
                        </Badge>
                      )}
                    </div>
                    <Button asChild variant="outline" className="w-full">
                      <Link to={`/blog/${article.id}`}>
                        Read More
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>

        {/* Newsletter Signup Section */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Stay Updated with Tax News</h3>
              <p className="text-lg mb-6 opacity-90">
                Subscribe to our newsletter for the latest tax updates, deadline reminders, and expert tips.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <Input 
                  placeholder="Enter your email address" 
                  className="bg-white text-gray-900 placeholder:text-gray-500"
                />
                <Button variant="secondary" className="whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              <p className="text-sm mt-4 opacity-75">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
