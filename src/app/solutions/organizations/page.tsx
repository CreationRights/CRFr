import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  BarChart3, 
  Bot, 
  TrendingUp, 
  RefreshCw, 
  Briefcase,
  CheckCircle,
  X,
  Film,
  Music,
  Camera,
  Gamepad2,
  Tv,
  Database,
  Code,
  Shield,
  Globe,
  Clock,
  Zap,
  Search
} from "lucide-react";
import Link from "next/link";

export default function OrganizationsPage() {
  const scaleFeatures = [
    {
      title: "Manage unlimited creators and assets from a single dashboard.",
      description: "Whether you&apos;re a creative agency with 50 freelancers or a media company with 10,000 content pieces, our AI-first architecture scales seamlessly without performance degradation."
    },
    {
      title: "Unified rights management across all content types",
      description: "Video, audio, images, 3D assets, and datasets. One protocol, one interface, complete visibility."
    },
    {
      title: "Team collaboration tools that eliminate confusion",
      description: "Over rights, splits, and usage permissions. Every stakeholder sees the same real-time data."
    }
  ];

  const revenueOptimization = [
    {
      icon: Bot,
      title: "AI Licensing at Scale",
      description: "Position your entire content library for AI training opportunities. Our system automatically identifies which assets are most valuable for machine learning, connects with AI companies seeking legally cleared data, and negotiates bulk licensing deals."
    },
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      features: [
        "Real-time performance metrics across all assets",
        "Identify top-performing content types and creators",
        "Predictive analytics on market demand trends",
        "ROI tracking for content investments"
      ]
    },
    {
      icon: RefreshCw,
      title: "Automated Revenue Distribution",
      description: "Set complex royalty structures once, then watch as revenue automatically flows to creators, collaborators, and stakeholders according to your predefined rules. Handle thousands of payments simultaneously without manual intervention."
    },
    {
      icon: Briefcase,
      title: "Enterprise Licensing Tools",
      features: [
        "Bulk licensing capabilities for large content buyers",
        "Custom pricing tiers and volume discounts",
        "White-label licensing portals for your clients",
        "API integration with existing business systems"
      ]
    }
  ];

  const operationalChallenges = [
    {
      challenge: "Rights Clearance Nightmare",
      solution: "Instant Verification",
      before: "Legal teams spending weeks clearing rights for a single campaign",
      after: "Instant verification of usage rights and licensing status for any asset in your portfolio"
    },
    {
      challenge: "Revenue Leakage",
      solution: "Complete Tracking",
      before: "Missing revenue from unauthorized usage and complex intermediary chains",
      after: "Real-time monitoring of all asset usage with automatic licensing enforcement"
    },
    {
      challenge: "Creator Relations",
      solution: "Transparent Partnerships",
      before: "Disputes over unclear royalty calculations and delayed payments",
      after: "Transparent, real-time revenue sharing that creators can verify independently"
    },
    {
      challenge: "Compliance Headaches",
      solution: "Automated Governance",
      before: "Manual tracking of usage rights across multiple platforms and jurisdictions",
      after: "Automated compliance monitoring with audit trails that satisfy legal requirements"
    }
  ];

  const industrySolutions = [
    {
      icon: Film,
      title: "Media & Entertainment",
      features: [
        "Track usage across streaming platforms, broadcast, and digital distribution",
        "Manage complex multi-party royalty agreements",
        "Automate residual payments for cast and crew",
        "Monitor unauthorized usage and generate takedown notices"
      ]
    },
    {
      icon: Music,
      title: "Music Labels & Publishers",
      features: [
        "Real-time sync licensing opportunities",
        "Automated mechanical royalty distribution",
        "AI training licensing for your catalog",
        "Cross-platform performance tracking"
      ]
    },
    {
      icon: Camera,
      title: "Creative Agencies",
      features: [
        "Client asset management with usage tracking",
        "Photographer and designer royalty automation",
        "Stock licensing revenue optimization",
        "Campaign performance analytics"
      ]
    },
    {
      icon: Gamepad2,
      title: "Gaming Studios",
      features: [
        "Asset reuse tracking across multiple titles",
        "Contractor and freelancer payment automation",
        "Licensing opportunities for game assets in AI training",
        "IP protection for proprietary content"
      ]
    },
    {
      icon: Tv,
      title: "Content Creators & MCNs",
      features: [
        "Multi-creator revenue optimization",
        "Brand partnership tracking and payments",
        "Content library monetization",
        "Audience analytics integration"
      ]
    }
  ];

  const infrastructureFeatures = [
    {
      icon: Database,
      title: "Advanced Database Architecture",
      description: "Our columnar, vectorized processing engine handles millions of assets and transactions simultaneously. While legacy systems take hours to generate royalty reports, Creation Rights delivers real-time analytics at internet speed."
    },
    {
      icon: Code,
      title: "API-First Integration",
      features: [
        "RESTful APIs for seamless integration with existing systems",
        "Webhook endpoints for real-time notifications",
        "SDKs for custom application development",
        "White-label solutions for client-facing portals"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      features: [
        "PCI DSS Compliant payment processing",
        "SOC 2 Type II security controls",
        "GDPR compliant data handling",
        "Patent-protected Dynamic Metadata technology",
        "Lloyd&apos;s Lab partnership for innovative insurance products"
      ]
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      features: [
        "Multi-region deployment for low-latency access",
        "99.9% uptime SLA with redundant systems",
        "Scalable architecture that grows with your business",
        "24/7 monitoring and support"
      ]
    }
  ];

  const implementationSteps = [
    { week: "Week 1", task: "System setup and initial content migration" },
    { week: "Week 2", task: "Team training and workflow integration" },
    { week: "Week 3", task: "Full deployment with ongoing optimization" },
    { week: "Ongoing", task: "Dedicated success management and technical support" }
  ];

  const roiMetrics = [
    { icon: TrendingUp, metric: "35% increase", description: "in overall content revenue" },
    { icon: Zap, metric: "90% reduction", description: "in rights clearance time" },
    { icon: Bot, metric: "$50K+ annually", description: "New revenue streams from AI licensing averaging" },
    { icon: Search, metric: "100% visibility", description: "into content usage and performance" },
    { icon: Clock, metric: "Hours saved weekly", description: "on manual royalty calculations" }
  ];

  const caseStudies = [
    {
      title: "Mid-Size Creative Agency",
      quote: "We manage 200+ freelance creators and were drowning in royalty calculations. Creation Rights automated everything - now our creators get paid instantly and we can focus on creative work instead of accounting. Our AI licensing revenue alone covers the platform cost.",
      results: [
        "40% reduction in administrative overhead",
        "$120K in new AI licensing revenue in first year",
        "95% creator satisfaction improvement",
        "Zero payment disputes since implementation"
      ]
    },
    {
      title: "Independent Music Label",
      quote: "Our catalog of 5,000+ tracks was sitting there earning basic streaming royalties. Creation Rights opened up AI training licensing, sync opportunities, and remix revenue we never knew existed. It&apos;s like discovering a goldmine in our own backyard.",
      results: [
        "60% increase in per-track revenue",
        "$300K in new licensing deals in 18 months",
        "Real-time royalty distribution to 150+ artists",
        "Complete audit trail for all transactions"
      ]
    }
  ];

  const integrationPartners = [
    "Content Management Systems (Adobe Creative Cloud, Avid, Final Cut)",
    "Financial Systems (QuickBooks, SAP, Oracle)",
    "Distribution Platforms (YouTube, Spotify, Getty Images)",
    "Legal Management Tools (ContractWorks, Ironclad)",
    "Analytics Platforms (Google Analytics, Adobe Analytics)"
  ];

  const faqItems = [
    {
      question: "How long does implementation take?",
      answer: "Most organizations are fully operational within 2-3 weeks, including content migration and team training."
    },
    {
      question: "Can we maintain our existing revenue streams?",
      answer: "Absolutely. Creation Rights adds new revenue opportunities while preserving all existing income sources."
    },
    {
      question: "What about our current legal agreements?",
      answer: "Our system works within your existing contracts and can help identify opportunities to optimize future agreements."
    },
    {
      question: "How do you handle international rights management?",
      answer: "Our platform supports multi-jurisdictional rights management with automated compliance for different territorial requirements."
    },
    {
      question: "What&apos;s the minimum portfolio size for enterprise features?",
      answer: "We work with organizations of all sizes. Enterprise features are available based on needs, not just portfolio size."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHeader
        title="For Organizations"
        subtitle="Scale creator rights management across your entire content portfolio"
      />
      
      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Transform how your organization protects, tracks, and monetizes creative assets. From agencies managing hundreds of creators to studios producing thousands of assets, Creation Rights delivers enterprise-grade rights infrastructure without enterprise complexity.
          </p>
        </div>
      </PageSection>

      {/* Built for Scale */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Built for Scale, Designed for Teams</h2>
          <div className="space-y-8">
            {scaleFeatures.map((feature, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Revenue Optimization */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Revenue Optimization at Portfolio Scale</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {revenueOptimization.map((item, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <item.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                </div>
                {item.description && (
                  <p className="text-muted-foreground">{item.description}</p>
                )}
                {item.features && (
                  <ul className="space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Operational Challenges */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Solve Your Biggest Operational Challenges</h2>
          <div className="space-y-12">
            {operationalChallenges.map((item, index) => (
              <div key={index} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="bg-muted/20 p-8 border border-border">
                  <h3 className="text-xl font-semibold mb-4 text-destructive">{item.challenge} → {item.solution}</h3>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <X className="h-5 w-5 mt-1 text-destructive flex-shrink-0" />
                      <div>
                        <span className="font-medium">Before:</span>
                        <p className="text-muted-foreground">{item.before}</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                      <div>
                        <span className="font-medium">After:</span>
                        <p className="text-muted-foreground">{item.after}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Industry Solutions */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Industry-Specific Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrySolutions.map((industry, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <industry.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{industry.title}</h3>
                </div>
                <ul className="space-y-3">
                  {industry.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Infrastructure */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Enterprise-Grade Infrastructure</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {infrastructureFeatures.map((feature, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                {feature.description && (
                  <p className="text-muted-foreground">{feature.description}</p>
                )}
                {feature.features && (
                  <ul className="space-y-3">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Implementation */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Implementation & Support</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-8">Rapid Deployment</h3>
              <div className="space-y-6">
                {implementationSteps.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold">{step.week}</h4>
                      <p className="text-muted-foreground">{step.task}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Migration Made Simple</h3>
                <p className="text-muted-foreground">Our team handles the complex work of migrating your existing content library, preserving all metadata and rights information while adding Creation Rights protection.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Training & Onboarding</h3>
                <ul className="space-y-2">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground text-sm">Comprehensive team training programs</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground text-sm">Custom workflow documentation</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground text-sm">Ongoing education on new features</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    <span className="text-muted-foreground text-sm">Best practices consulting</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* ROI Results */}
      <PageSection>
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">ROI That Speaks for Itself</h2>
          <h3 className="text-2xl font-semibold mb-12 text-muted-foreground">Typical Results Within 90 Days:</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roiMetrics.map((metric, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border text-center">
                <metric.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <div className="text-2xl font-bold mb-2">{metric.metric}</div>
                <p className="text-muted-foreground">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Case Studies */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Case Studies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                <blockquote className="text-muted-foreground mb-6 italic">
                  &ldquo;{study.quote}&rdquo;
                </blockquote>
                <div>
                  <h4 className="font-semibold mb-4">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Strategic Consultation CTA */}
      <PageSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Scale Your Rights Management?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a strategic consultation where we&apos;ll analyze your content portfolio and show you:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Revenue optimization opportunities specific to your industry</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Custom integration possibilities with your existing systems</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">ROI projections based on your content library size</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Implementation timeline and resource requirements</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Live demonstration with your actual content</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-8">Enterprise-grade solutions. Creator-friendly results.</p>
          <Button variant="shimmer" size="lg" asChild>
            <Link href="/demo">Schedule Strategic Consultation</Link>
          </Button>
        </div>
      </PageSection>

      {/* Integration Partners */}
      <PageSection className="bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Integration Partners</h2>
          <div className="text-center">
            <p className="text-xl font-semibold mb-8">Seamlessly connects with:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {integrationPartners.map((partner, index) => (
                <div key={index} className="bg-background border border-border p-6">
                  <p className="text-muted-foreground">{partner}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-muted/20 border border-border p-8">
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
