import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Zap, 
  FileText, 
  Users, 
  BarChart3, 
  Shield,
  CheckCircle,
  Bot,
  Target,
  Brain,
  TrendingUp,
  Globe,
  AlertTriangle,
  Gavel,
  CreditCard,
  Eye,
  Network,
  Layers,
  Briefcase,
  Building2,
  Palette,
  Activity
} from "lucide-react";
import Link from "next/link";

export default function LicensingPage() {
  const beyondStaticFeatures = [
    {
      title: "Traditional licensing is broken for the digital age.",
      description: "Static contracts can&apos;t adapt to new use cases, require expensive legal negotiations for every scenario, and leave money on the table when opportunities arise faster than lawyers can respond."
    },
    {
      title: "Smart Licensing thinks and adapts in real-time.",
      description: "Programmable logic embedded in your content&apos;s metadata automatically handles licensing inquiries, adjusts pricing based on market conditions, and executes agreements without human intervention."
    },
    {
      title: "AI-powered negotiation that understands context, market value, and creator preferences",
      description: "To optimize every licensing opportunity while protecting your rights."
    }
  ];

  const howItWorks = [
    {
      icon: Bot,
      title: "Intelligent License Generation",
      subtitle: "Contracts that write themselves:",
      features: [
        "Context-Aware Terms - Licensing automatically adapts based on who&apos;s asking, how they want to use your content, and current market conditions",
        "Dynamic Pricing - Real-time price calculation considering demand, usage scope, exclusivity, and competitive market rates",
        "Risk Assessment - Automatic evaluation of licensing risks with appropriate terms and protections",
        "Compliance Integration - Ensures all licenses meet legal requirements across different jurisdictions and industries"
      ]
    },
    {
      icon: Zap,
      title: "Real-Time Negotiation",
      subtitle: "Instant deal-making without human intervention:",
      features: [
        "Automated Counteroffers - System negotiates terms within your preset parameters to maximize value",
        "Bulk Licensing Logic - Special rates and terms for high-volume or enterprise licensing deals",
        "Conditional Licensing - Complex terms that adjust based on actual usage, performance metrics, or time periods",
        "Escalation Protocols - Automatic referral to human review for deals outside standard parameters"
      ]
    },
    {
      icon: Brain,
      title: "Adaptive Intelligence",
      subtitle: "Learning from every transaction:",
      features: [
        "Market Intelligence - Pricing optimization based on successful deals and market trends",
        "Usage Pattern Recognition - Understanding how different license types perform in practice",
        "Creator Preference Learning - System learns your priorities and negotiation style over time",
        "Performance Optimization - Continuous improvement of licensing terms based on revenue outcomes"
      ]
    }
  ];

  const licensingIntelligence = [
    {
      icon: Target,
      title: "Multi-Dimensional Pricing",
      subtitle: "Sophisticated pricing that captures true value:",
      capabilities: [
        "Usage Scope Analysis - Pricing based on audience size, distribution channels, and commercial impact",
        "Temporal Dynamics - Time-sensitive pricing for trending content, seasonal demand, and urgency factors",
        "Exclusivity Premiums - Automatic calculation of exclusivity value and competitive positioning",
        "Territory Optimization - Geographic pricing based on local market conditions and purchasing power"
      ]
    },
    {
      icon: Shield,
      title: "Risk-Adjusted Terms",
      subtitle: "Intelligent protection for creators:",
      capabilities: [
        "Reputation Scoring - Automatic assessment of licensee credibility and payment history",
        "Usage Monitoring - Built-in tracking and compliance verification for all licensed content",
        "Violation Protection - Automatic penalties and enforcement mechanisms for license breaches",
        "Insurance Integration - Seamless connection with legal protection and liability coverage"
      ]
    },
    {
      icon: TrendingUp,
      title: "Market-Responsive Logic",
      subtitle: "Pricing that adapts to real-world conditions:",
      capabilities: [
        "Demand Surge Detection - Automatic price increases when content becomes highly sought after",
        "Competitive Analysis - Real-time comparison with similar content pricing and availability",
        "Seasonal Adjustments - Pricing optimization based on calendar events, trends, and market cycles",
        "Portfolio Optimization - Cross-content pricing strategies that maximize overall creator revenue"
      ]
    }
  ];

  const automatedLicenseTypes = [
    {
      icon: FileText,
      title: "Standard Commercial Licenses",
      description: "Pre-configured templates for common use cases:",
      types: [
        "Editorial Use - News, journalism, and educational applications with appropriate restrictions",
        "Commercial Advertising - Marketing and promotional use with audience size and duration considerations",
        "Social Media Rights - Platform-specific licensing with viral protection and revenue sharing",
        "Print Publications - Traditional media licensing with circulation and territory specifications"
      ]
    },
    {
      icon: Bot,
      title: "AI-Era Licensing",
      description: "New license types for artificial intelligence:",
      types: [
        "AI Training Rights - Licensing for machine learning datasets with usage tracking and royalty structures",
        "Synthetic Generation - Rights for AI systems to create derivative works based on your content",
        "Style Licensing - Permission for AI to learn and replicate your creative techniques and aesthetics",
        "Voice and Likeness - NIL rights for AI systems using your personal characteristics in generated content"
      ]
    },
    {
      icon: Layers,
      title: "Dynamic Remix Licensing",
      description: "Intelligent handling of derivative works:",
      types: [
        "Remix Permissions - Automatic licensing for creative derivatives with revenue sharing",
        "Sample Clearance - Instant licensing for audio, visual, and text sampling in new works",
        "Collaboration Rights - Multi-party licensing for creative collaborations and mashups",
        "Generational Licensing - Revenue sharing that cascades through multiple generations of derivatives"
      ]
    }
  ];

  const realTimeExecution = [
    {
      icon: FileText,
      title: "Instant Contract Generation",
      description: "Legal documents created in seconds:",
      features: [
        "Template Customization - Automatic adaptation of legal language to specific use cases and jurisdictions",
        "Terms Integration - Seamless incorporation of negotiated terms into enforceable legal documents",
        "Digital Signatures - Cryptographic signing for immediate contract execution and legal validity",
        "Compliance Verification - Automatic checking against legal requirements and industry standards"
      ]
    },
    {
      icon: CreditCard,
      title: "Automated Payment Processing",
      description: "Seamless financial transactions:",
      features: [
        "Multi-Currency Support - Global licensing with automatic currency conversion and local payment methods",
        "Escrow Integration - Secure payment holding until license terms are fulfilled",
        "Royalty Automation - Automatic ongoing payments for usage-based and revenue-sharing licenses",
        "Tax Compliance - Automatic tax calculation and reporting for international licensing transactions"
      ]
    },
    {
      icon: Eye,
      title: "Usage Monitoring & Enforcement",
      description: "Ensuring license compliance:",
      features: [
        "Real-Time Tracking - Continuous monitoring of how licensed content is actually being used",
        "Compliance Alerts - Automatic notifications when usage exceeds license parameters",
        "Violation Response - Immediate enforcement actions for license breaches or unauthorized usage",
        "Performance Reporting - Detailed analytics on license performance and compliance rates"
      ]
    }
  ];

  const advancedStrategies = [
    {
      icon: Briefcase,
      title: "Portfolio Licensing",
      description: "Intelligent bundling and cross-selling:",
      strategies: [
        "Content Clustering - Automatic grouping of related content for package deals",
        "Volume Discounting - Dynamic pricing for bulk licensing with optimized revenue curves",
        "Cross-Promotion - Suggesting related content to licensees for expanded deals",
        "Exclusive Packages - Premium licensing bundles with enhanced rights and exclusivity"
      ]
    },
    {
      icon: Brain,
      title: "Predictive Licensing",
      description: "Anticipating market demand:",
      strategies: [
        "Trend Forecasting - Identifying content likely to become valuable before demand spikes",
        "Seasonal Optimization - Preparing licensing strategies for predictable market cycles",
        "Viral Potential - Special licensing terms for content with high viral probability",
        "Market Gap Analysis - Identifying underserved licensing opportunities in your content portfolio"
      ]
    },
    {
      icon: Users,
      title: "Relationship-Based Licensing",
      description: "Building long-term partnerships:",
      strategies: [
        "Client Profiling - Understanding licensee preferences and usage patterns for better deals",
        "Loyalty Programs - Preferential terms for repeat customers and high-value partners",
        "Partnership Development - Identifying opportunities for ongoing licensing relationships",
        "Custom Agreements - Tailored licensing frameworks for enterprise and agency partnerships"
      ]
    }
  ];

  const integrationCapabilities = [
    {
      icon: Network,
      title: "Platform Integration",
      description: "Seamless licensing across all distribution channels:",
      integrations: [
        "Marketplace Integration - Automatic licensing for stock photo, music, and video platforms",
        "Social Media Licensing - Real-time licensing for content used on social platforms",
        "AI Platform Connections - Direct licensing integration with AI training and generation platforms",
        "Enterprise Systems - Integration with corporate content management and procurement systems"
      ]
    },
    {
      icon: Palette,
      title: "Creative Tool Integration",
      description: "Licensing built into the creative process:",
      integrations: [
        "Adobe Creative Suite - Direct licensing options within Photoshop, Premiere, and other tools",
        "Music Production Software - Instant sample clearance and licensing within DAWs",
        "Video Editing Platforms - Real-time licensing for stock footage, music, and graphics",
        "3D Modeling Tools - Licensing integration for textures, models, and design assets"
      ]
    },
    {
      icon: Building2,
      title: "Business System Integration",
      description: "Connecting licensing with business operations:",
      integrations: [
        "CRM Integration - Client relationship management with licensing history and preferences",
        "Accounting Systems - Automatic revenue recognition and financial reporting for licensing deals",
        "Legal Management - Integration with contract management and legal compliance systems",
        "Analytics Platforms - Comprehensive reporting and business intelligence for licensing performance"
      ]
    }
  ];

  const licensingAnalytics = [
    {
      icon: BarChart3,
      title: "Revenue Intelligence",
      description: "Data-driven insights for licensing optimization:",
      analytics: [
        "Performance Metrics - Detailed analysis of which licensing strategies generate the most revenue",
        "Market Analysis - Understanding demand patterns and pricing optimization opportunities",
        "Competitive Intelligence - Benchmarking your licensing performance against market standards",
        "Opportunity Identification - Discovering untapped licensing potential in your content portfolio"
      ]
    },
    {
      icon: TrendingUp,
      title: "Predictive Analytics",
      description: "Forecasting licensing opportunities:",
      analytics: [
        "Demand Prediction - AI-powered forecasting of future licensing demand for your content",
        "Price Optimization - Machine learning algorithms that optimize pricing for maximum revenue",
        "Market Timing - Identifying optimal timing for licensing campaigns and price adjustments",
        "Portfolio Strategy - Long-term planning for content creation and licensing focus areas"
      ]
    },
    {
      icon: Activity,
      title: "Performance Optimization",
      description: "Continuous improvement of licensing outcomes:",
      analytics: [
        "A/B Testing - Systematic testing of different licensing approaches and terms",
        "Conversion Analysis - Understanding what factors lead to successful licensing deals",
        "Negotiation Optimization - Learning from successful negotiations to improve future outcomes",
        "Customer Satisfaction - Monitoring licensee satisfaction to improve retention and referrals"
      ]
    }
  ];

  const legalCompliance = [
    {
      icon: Globe,
      title: "Global Legal Framework",
      description: "Ensuring enforceability worldwide:",
      features: [
        "Jurisdiction Adaptation - Automatic adjustment of license terms for different legal systems",
        "Regulatory Compliance - Adherence to local licensing laws and industry regulations",
        "International Treaties - Compliance with copyright treaties and international agreements",
        "Cultural Sensitivity - Adaptation of licensing terms for different cultural and business contexts"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Risk Management",
      description: "Protecting creators from licensing risks:",
      features: [
        "Liability Limitation - Appropriate risk allocation and liability caps in licensing agreements",
        "Indemnification Clauses - Protection against third-party claims arising from licensed content",
        "Termination Rights - Clear termination procedures and rights reversion mechanisms",
        "Dispute Resolution - Built-in arbitration and mediation procedures for licensing conflicts"
      ]
    },
    {
      icon: Gavel,
      title: "Enforcement Mechanisms",
      description: "Ensuring license compliance:",
      features: [
        "Usage Monitoring - Technical systems that track compliance with license terms",
        "Violation Detection - Automatic identification of license breaches and unauthorized usage",
        "Enforcement Actions - Graduated response system for addressing license violations",
        "Legal Escalation - Integration with legal services for serious compliance issues"
      ]
    }
  ];

  const faqItems = [
    {
      question: "How does Smart Licensing handle complex, custom licensing deals?",
      answer: "The system handles standard scenarios automatically while escalating complex deals to human review. It learns from each custom deal to expand its automated capabilities over time."
    },
    {
      question: "Can I maintain control over licensing decisions?",
      answer: "Absolutely. You set all parameters, approval thresholds, and escalation rules. The system operates within your preferences while handling routine transactions automatically."
    },
    {
      question: "How does pricing optimization work?",
      answer: "AI analyzes market data, demand patterns, and successful deals to recommend optimal pricing. You can accept recommendations automatically or review them before implementation."
    },
    {
      question: "What happens if someone violates a license agreement?",
      answer: "Smart Licensing includes automated monitoring and enforcement. Violations trigger graduated responses from automated warnings to legal action, based on severity and your preferences."
    },
    {
      question: "How quickly can licensing deals be completed?",
      answer: "Standard licensing can complete in minutes through automated negotiation and execution. Complex deals may take longer but still benefit from intelligent assistance and optimization."
    },
    {
      question: "Is Smart Licensing legally binding?",
      answer: "Yes, all licenses generated are legally enforceable contracts with proper digital signatures and compliance verification. The system ensures all legal requirements are met."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHeader
        title="Smart Licensing"
        subtitle="Automated, intelligent licensing that adapts to every use case"
      />
      
      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Transform static legal documents into dynamic, programmable licensing that automatically negotiates, executes, and enforces usage rights. Smart Licensing eliminates manual contract negotiations while maximizing revenue opportunities for creators.
          </p>
        </div>
      </PageSection>

      {/* Beyond Static Legal Documents */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Beyond Static Legal Documents</h2>
          <div className="space-y-8">
            {beyondStaticFeatures.map((feature, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
          </div>
        </div>
      </PageSection>

      {/* How Smart Licensing Works */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">How Smart Licensing Works</h2>
          <div className="space-y-12">
            {howItWorks.map((section, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <section.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-semibold">{section.title}</h3>
                    <p className="text-muted-foreground">{section.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {section.features.map((feature, idx) => (
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

      {/* Licensing Intelligence Engine */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Licensing Intelligence Engine</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {licensingIntelligence.map((intelligence, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <intelligence.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">{intelligence.title}</h3>
                    <p className="text-sm text-muted-foreground">{intelligence.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {intelligence.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Automated License Types */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Automated License Types</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {automatedLicenseTypes.map((licenseType, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <licenseType.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{licenseType.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{licenseType.description}</p>
                <ul className="space-y-2">
                  {licenseType.types.map((type, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">{type}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Real-Time License Execution */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Real-Time License Execution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {realTimeExecution.map((execution, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <execution.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{execution.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{execution.description}</p>
                <ul className="space-y-2">
                  {execution.features.map((feature, idx) => (
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

      {/* Advanced Licensing Strategies */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Advanced Licensing Strategies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advancedStrategies.map((strategy, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <strategy.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{strategy.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{strategy.description}</p>
                <ul className="space-y-2">
                  {strategy.strategies.map((item, idx) => (
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

      {/* Integration Capabilities */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Integration Capabilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {integrationCapabilities.map((integration, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <integration.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{integration.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{integration.description}</p>
                <ul className="space-y-2">
                  {integration.integrations.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Licensing Analytics & Optimization */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Licensing Analytics & Optimization</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {licensingAnalytics.map((analytics, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <analytics.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{analytics.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{analytics.description}</p>
                <ul className="space-y-2">
                  {analytics.analytics.map((item, idx) => (
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

      {/* Legal Compliance & Protection */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Legal Compliance & Protection</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {legalCompliance.map((compliance, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <compliance.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{compliance.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{compliance.description}</p>
                <ul className="space-y-2">
                  {compliance.features.map((feature, idx) => (
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

      {/* Get Started */}
      <PageSection className="bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Get Started with Smart Licensing</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Licensing Strategy Assessment</h3>
              <p className="text-muted-foreground mb-6">Optimize your licensing approach:</p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Analysis of your current licensing performance and missed opportunities</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Custom licensing strategy development based on your content and goals</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Market positioning and competitive analysis for optimal pricing</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Implementation roadmap for automated licensing systems</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Smart Licensing Demo</h3>
              <p className="text-muted-foreground mb-6">See intelligent licensing in action:</p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Live demonstration of automated license generation and negotiation</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Real-time pricing optimization based on market conditions</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Integration showcase with your existing platforms and workflows</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Performance analytics and revenue optimization insights</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Request Licensing Assessment</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/demo">Smart Licensing Demo</Link>
            </Button>
          </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
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
