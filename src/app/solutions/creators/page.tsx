import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Bot, 
  Music, 
  User, 
  TrendingUp, 
  BarChart3, 
  DollarSign, 
  Search, 
  Shield, 
  Zap, 
  CheckCircle,
  X,
  Star,
  Lock,
  FileText
} from "lucide-react";
import Link from "next/link";

export default function CreatorsPage() {
  const revenueStreams = [
    {
      icon: Bot,
      title: "AI Training Royalties",
      description: "Every time an AI model trains on your work, you earn micro-royalties. Your photography style, music samples, or artistic techniques become ongoing income streams as AI companies seek legally cleared training data."
    },
    {
      icon: Music,
      title: "Remix Revenue Sharing",
      description: "When other creators remix or build on your work, you automatically receive a percentage of any revenue they generate. Your original content becomes the foundation for compound earnings."
    },
    {
      icon: User,
      title: "NIL Monetization",
      description: "Protect and monetize your Name, Image, and Likeness. When AI systems use your voice characteristics, visual style, or creative signatures, you get paid according to your preset terms."
    },
    {
      icon: TrendingUp,
      title: "Predictive Opportunities",
      description: "Our AI analyzes market trends to show you which of your content styles are in highest demand for licensing, helping you create more of what pays."
    }
  ];

  const dashboardFeatures = [
    {
      icon: BarChart3,
      title: "Live Analytics",
      features: [
        "See which pieces are performing best",
        "Track usage across all platforms simultaneously",
        "Monitor revenue trends and seasonal patterns",
        "Get alerts when your content is discovered by new licensees"
      ]
    },
    {
      icon: DollarSign,
      title: "Instant Revenue Tracking",
      features: [
        "Real-time earnings from all sources",
        "Breakdown by content type, license type, and platform",
        "Automatic tax documentation and reporting",
        "Historical performance data for portfolio optimization"
      ]
    },
    {
      icon: Search,
      title: "Usage Monitoring",
      features: [
        "Every view, download, and remix tracked",
        "Unauthorized usage detection and alerts",
        "Compliance verification for licensed content",
        "Audit trails that hold up in legal disputes"
      ]
    }
  ];

  const beforeAfterItems = [
    {
      before: "Wait 3-6 months for royalty statements you can't verify",
      after: "Watch earnings update in real-time as your content generates value"
    },
    {
      before: "Lose revenue to platform fees and intermediary cuts",
      after: "Keep 100% of direct licensing revenue (minus our small success fee)"
    },
    {
      before: "No idea where your content is being used",
      after: "Complete visibility into every use of your work"
    },
    {
      before: "Fight with collaborators over unclear splits",
      after: "Automatic, transparent payments to all collaborators"
    },
    {
      before: "Miss out on AI licensing opportunities entirely",
      after: "Tap into the growing AI training market worth billions"
    }
  ];

  const testimonials = [
    {
      quote: "I uploaded my sample pack and within a week, three different AI music generators had licensed my beats. I'm earning more from AI royalties than I ever did from streaming platforms.",
      author: "Electronic Music Producer"
    },
    {
      quote: "Finally, I can see when my photos get used in AI training datasets. The micro-royalties add up to serious money - it's like having a passive income stream from work I created years ago.",
      author: "Stock Photographer"
    },
    {
      quote: "The collaboration features are game-changing. My bandmates and I set up our splits once, and now everyone gets paid automatically whenever our music generates revenue. No more awkward money conversations.",
      author: "Indie Band Member"
    }
  ];

  const securityFeatures = [
    { icon: CheckCircle, text: "PCI Compliant - Bank-level security for your content and payments" },
    { icon: Shield, text: "Cryptographic Protection - Your metadata is tamper-proof and verifiable" },
    { icon: Lock, text: "Patent-Protected Technology - Our Dynamic Metadata system is legally protected IP" },
    { icon: FileText, text: "Lloyd's Lab Backed - Insurance innovation partnership for additional protection" }
  ];

  const faqItems = [
    {
      question: "Do I have to change how I create content?",
      answer: "Not at all. Creation Rights works with your existing tools and workflow. Just connect your cloud storage and we handle the rest."
    },
    {
      question: "What if I already have content on other platforms?",
      answer: "Perfect! We can retroactively protect your existing library while you continue using your current platforms. You keep all existing revenue streams and add new ones."
    },
    {
      question: "How quickly will I see results?",
      answer: "Many creators see their first AI licensing inquiries within days of uploading. Revenue timing depends on your content type and market demand."
    },
    {
      question: "Is my content safe with Creation Rights?",
      answer: "Absolutely. We use bank-level security, cryptographic protection, and are backed by Lloyd's Lab. Your IP is safer with us than sitting unprotected on regular cloud storage."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="px-6 py-24 sm:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-left">
          <h1 className="mb-2 text-4xl font-semibold md:text-6xl">
            For Creators
          </h1>
          <p className="text-4xl font-semibold text-muted-foreground max-w-3xl md:text-6xl mb-8">
            Turn your creative work into a revenue generating empire
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Stop letting platforms and intermediaries profit from your talent while you wait months for unclear payments. Creation Rights puts you back in control.
          </p>
        </div>
      </section>

      {/* Your Creative Work, Your Rules */}
      <PageSection>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Your Creative Work, Your Rules</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Set your own terms. Choose from flexible licensing options - from All Rights Reserved to Creative Commons to custom commercial terms. You decide what your work is worth, not some platform algorithm.</h3>
            </div>
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <Zap className="h-6 w-6 mt-1 text-primary" />
                <div>
                  <h4 className="font-semibold mb-2">Get paid instantly.</h4>
                  <p className="text-muted-foreground">When someone licenses your content, buys your work, or when AI companies want to train on your style, royalties flow directly to you within minutes, not months.</p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <BarChart3 className="h-6 w-6 mt-1 text-primary" />
                <div>
                  <h4 className="font-semibold mb-2">Track everything.</h4>
                  <p className="text-muted-foreground">See exactly where your content appears across the internet, who&apos;s using it, and how much revenue each piece generates in real time.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Revenue Streams */}
      <PageSection className="bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-center">Unlock Revenue Streams You Never Knew Existed</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {revenueStreams.map((stream, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <stream.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{stream.title}</h3>
                </div>
                <p className="text-muted-foreground">{stream.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Workflow Integration */}
      <PageSection>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Works With Your Existing Workflow</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-muted/20 p-8 mb-6">
                <h3 className="text-xl font-semibold mb-4">No disruption to your creative process.</h3>
                <p className="text-muted-foreground">Keep using Photoshop, Logic Pro, Premiere, or whatever tools you love. Just connect your Google Drive, Dropbox, or cloud storage.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-muted/20 p-8 mb-6">
                <h3 className="text-xl font-semibold mb-4">One-time setup, lifetime protection.</h3>
                <p className="text-muted-foreground">Upload your content library once, set your licensing preferences, and Creation Rights automatically embeds protective metadata into everything you create going forward.</p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-muted/20 p-8 mb-6">
                <h3 className="text-xl font-semibold mb-4">Collaborate seamlessly.</h3>
                <p className="text-muted-foreground">Set up automatic royalty splits with bandmates, co-writers, or creative partners. Everyone gets paid according to your agreed percentages, with full transparency.</p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Dashboard Features */}
      <PageSection className="bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Real-Time Control Dashboard</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dashboardFeatures.map((feature, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Before / After */}
      <PageSection>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Before / After CR</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">Before Creation Rights:</h3>
              <div className="space-y-6">
                {beforeAfterItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <X className="h-5 w-5 mt-1 text-destructive flex-shrink-0" />
                    <p className="text-muted-foreground">{item.before}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-8 text-center">After Creation Rights:</h3>
              <div className="space-y-6">
                {beforeAfterItems.map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                    <p className="text-muted-foreground">{item.after}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Success Stories */}
      <PageSection className="bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-6 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </blockquote>
                <cite className="font-semibold">- {testimonial.author}</cite>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Security */}
      <PageSection>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-center">Enterprise-Grade Security for Your Valuable IP</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {securityFeatures.map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 p-6 bg-muted/20">
                <feature.icon className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">{feature.text}</span>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Pricing */}
      <PageSection className="bg-muted/20">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-4">Pricing That Pays for Itself</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-background border border-border p-6">
              <h3 className="font-semibold mb-2">Start Free</h3>
              <p className="text-sm text-muted-foreground">Upload your first files and see the system work with your actual content</p>
            </div>
            <div className="bg-background border border-border p-6">
              <h3 className="font-semibold mb-2">Success-Based Fees</h3>
              <p className="text-sm text-muted-foreground">We only earn when you do. Small percentage of the additional revenue we generate for you</p>
            </div>
            <div className="bg-background border border-border p-6">
              <h3 className="font-semibold mb-2">No Hidden Costs</h3>
              <p className="text-sm text-muted-foreground">No setup fees, no monthly minimums, no surprise charges</p>
            </div>
            <div className="bg-background border border-border p-6">
              <h3 className="font-semibold mb-2">ROI Guarantee</h3>
              <p className="text-sm text-muted-foreground">Most creators see our fees paid back within their first month of AI licensing revenue</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Demo CTA */}
      <PageSection>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to Take Control?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a 30-minute demo where we&apos;ll upload one of your actual files and show you:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 text-left">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Real-time metadata generation and rights embedding</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Your personalized creator dashboard</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Live simulation of licensing scenarios</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Transparent audit trails and payment flows</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Revenue projections based on your content type</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-8">No sales pressure. Just proof of what your creative work could be earning.</p>
          <Button variant="shimmer" size="lg" asChild>
            <Link href="/demo">Book Your Live Demo</Link>
          </Button>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection className="bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <h3 className="text-xl font-semibold mb-4">Q: {item.question}</h3>
                <p className="text-muted-foreground">A: {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
