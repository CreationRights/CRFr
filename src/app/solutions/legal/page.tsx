import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Scale, 
  Shield, 
  FileText, 
  Users, 
  CheckCircle,
  Globe,
  Briefcase,
  Gavel,
  Eye,
  Bot,
  Lock,
  Database,
  AlertTriangle,
  BookOpen,
  Search,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function LegalPage() {
  const legalInfrastructure = [
    {
      title: "Traditional copyright law wasn&apos;t built for the internet.",
      description: "Our legal framework bridges the gap between centuries-old IP law and modern digital creativity, providing creators with enforceable rights that work in real-time across platforms and jurisdictions."
    },
    {
      title: "Machine-readable legal terms embedded directly in your content",
      description: "Through our dynamic metadata protocol. No more relying on unenforceable text files or hoping platforms respect your wishes."
    },
    {
      title: "Global compliance framework that automatically adapts to different territorial requirements",
      description: "Ensuring your rights are protected whether your content is used in New York, London, or Tokyo."
    }
  ];

  const legalServices = [
    {
      icon: Scale,
      title: "Rights Registration & Protection",
      description: "Automated copyright registration integrated with your content creation workflow:",
      features: [
        "Instant timestamping and proof of creation through cryptographic verification",
        "Automatic filing with relevant copyright offices where applicable",
        "Prior art searches and originality verification for complex works",
        "International treaty compliance (Berne Convention, WIPO, etc.)"
      ]
    },
    {
      icon: FileText,
      title: "Contract Generation & Management",
      description: "Smart contract templates for every creative scenario:",
      features: [
        "Licensing Agreements - Automatically generated based on your metadata preferences",
        "Collaboration Contracts - Multi-party agreements with built-in royalty splits",
        "Work-for-Hire Documentation - Clear ownership and usage rights definition",
        "Platform Terms Integration - Ensure your rights are preserved across all distribution channels"
      ]
    },
    {
      icon: Shield,
      title: "Enforcement & Takedown Services",
      description: "Proactive rights protection with automated enforcement:",
      features: [
        "Real-time unauthorized usage detection across the internet",
        "Automated DMCA takedown notice generation and filing",
        "Cease and desist letter templates with legal precedent backing",
        "Escalation pathways to litigation partners when necessary"
      ]
    },
    {
      icon: Globe,
      title: "International Rights Management",
      description: "Global protection for worldwide content distribution:",
      features: [
        "Multi-jurisdictional licensing with territorial restrictions",
        "Compliance with local content laws and regulations",
        "International dispute resolution through established legal frameworks",
        "Cultural sensitivity guidance for global content distribution"
      ]
    }
  ];

  const insuranceProducts = [
    {
      icon: Briefcase,
      title: "Creator Liability Insurance",
      subtitle: "Protect yourself from legal challenges in the complex world of digital content:",
      categories: [
        {
          name: "Copyright Infringement Defense",
          features: [
            "Legal defense costs up to $1M for unintentional infringement claims",
            "Expert witness fees and court costs coverage",
            "Settlement negotiation support with specialized IP attorneys",
            "Retroactive coverage for content created before policy inception"
          ]
        },
        {
          name: "Defamation & Privacy Protection",
          features: [
            "Coverage for claims arising from creative content and commentary",
            "Social media liability protection for promotional activities",
            "Right of publicity violation defense for content featuring individuals",
            "International coverage for global content distribution"
          ]
        },
        {
          name: "Professional Indemnity",
          features: [
            "Protection against claims of professional negligence in creative work",
            "Client dispute resolution and mediation services",
            "Breach of contract defense for creative services agreements",
            "Errors and omissions coverage for creative consulting and advice"
          ]
        }
      ]
    },
    {
      icon: Lock,
      title: "Intellectual Property Insurance",
      subtitle: "Comprehensive IP protection beyond traditional copyright:",
      categories: [
        {
          name: "Patent Defense Coverage",
          features: [
            "Protection against patent trolls and frivolous litigation",
            "Defense costs for software tools and creative technologies",
            "Prior art research funding for patent challenges",
            "International patent dispute coverage"
          ]
        },
        {
          name: "Trade Secret Protection",
          features: [
            "Coverage for theft or misappropriation of creative processes",
            "Employee and contractor confidentiality breach protection",
            "Competitive intelligence theft defense",
            "Digital asset protection for proprietary creative tools"
          ]
        },
        {
          name: "Trademark Enforcement",
          features: [
            "Brand protection for creator names and business identities",
            "Domain name dispute resolution support",
            "Counterfeiting and unauthorized merchandise protection",
            "International trademark registration and enforcement"
          ]
        }
      ]
    },
    {
      icon: Bot,
      title: "AI Era Coverage",
      subtitle: "Pioneering insurance products for AI-related risks:",
      categories: [
        {
          name: "AI Training Liability",
          features: [
            "Protection when your content is used in AI training datasets",
            "Coverage for claims arising from AI-generated derivative works",
            "Bias and discrimination claims defense for training data contribution",
            "International AI regulation compliance support"
          ]
        },
        {
          name: "Deepfake & Synthetic Media Protection",
          features: [
            "Coverage for unauthorized AI-generated content using your likeness",
            "Identity theft protection for voice and visual cloning",
            "Reputation management services for synthetic media incidents",
            "Legal action support against malicious deepfake creation"
          ]
        },
        {
          name: "Algorithm Bias Claims",
          features: [
            "Protection against claims that your content contributed to biased AI outcomes",
            "Expert testimony and technical defense for algorithm fairness disputes",
            "Regulatory compliance support for AI ethics requirements",
            "International coverage for cross-border AI liability"
          ]
        }
      ]
    }
  ];

  const technologyIntegration = [
    {
      icon: Database,
      title: "Dynamic Legal Metadata",
      description: "Legal terms that evolve with your content and business needs:",
      features: [
        "Automatic contract updates based on usage patterns and market changes",
        "Real-time compliance monitoring with regulatory requirement changes",
        "Jurisdiction-specific legal term adaptation for global distribution",
        "Version control for legal agreements with audit trail maintenance"
      ]
    },
    {
      icon: Eye,
      title: "Automated Compliance Monitoring",
      description: "Stay compliant automatically across all jurisdictions:",
      features: [
        "Real-time monitoring of changing copyright and AI regulations",
        "Automatic policy updates to maintain compliance with new laws",
        "Proactive alerts for potential legal risks in your content strategy",
        "Integration with legal databases for up-to-date regulatory information"
      ]
    },
    {
      icon: Search,
      title: "Evidence Collection & Preservation",
      description: "Bulletproof legal documentation for any dispute:",
      features: [
        "Cryptographic proof of creation and ownership timestamps",
        "Complete audit trails of content usage and licensing",
        "Automated evidence collection for infringement cases",
        "Blockchain-verifiable documentation for court proceedings"
      ]
    }
  ];

  const supportServices = [
    {
      icon: Users,
      title: "Creator Legal Clinic",
      description: "Accessible legal guidance for creators at every level:",
      features: [
        "Monthly office hours with IP attorneys specializing in creator rights",
        "Template review and customization for your specific needs",
        "Contract negotiation support for major licensing deals",
        "Educational workshops on creator rights and legal best practices"
      ]
    },
    {
      icon: Gavel,
      title: "Dispute Resolution Services",
      description: "Efficient conflict resolution without expensive litigation:",
      features: [
        "Mediation services with IP law specialists",
        "Arbitration options for faster, cost-effective dispute resolution",
        "Expert witness network for technical and creative industry disputes",
        "Settlement negotiation support with proven track records"
      ]
    },
    {
      icon: TrendingUp,
      title: "Regulatory Advocacy",
      description: "Industry representation in policy development:",
      features: [
        "Participation in copyright law reform discussions",
        "AI regulation advocacy for creator-friendly policies",
        "Platform accountability lobbying for fair creator treatment",
        "International treaty negotiation input for digital rights protection"
      ]
    }
  ];

  const coveragePlans = [
    {
      category: "Individual Creator Plans",
      plans: [
        { name: "Basic Protection", coverage: "$100K coverage", price: "$50/month" },
        { name: "Professional Coverage", coverage: "$500K coverage", price: "$150/month" },
        { name: "Enterprise Protection", coverage: "$1M+ coverage", price: "custom pricing" }
      ]
    },
    {
      category: "Organization Plans",
      plans: [
        { name: "Agency Coverage", coverage: "Multi-creator protection", price: "$500/month+" },
        { name: "Studio Protection", coverage: "Production company coverage", price: "$1,500/month+" },
        { name: "Enterprise Solutions", coverage: "Custom coverage for large organizations", price: "Custom" }
      ]
    }
  ];

  const allPlansInclude = [
    "Global coverage across major jurisdictions",
    "24/7 legal hotline for urgent issues",
    "Automatic policy updates for regulatory changes",
    "Integration with Creation Rights platform for seamless claims"
  ];

  const claimsProcess = [
    { step: "Instant Reporting", description: "File claims directly through your Creation Rights dashboard" },
    { step: "Automated Evidence", description: "Our platform automatically compiles relevant documentation" },
    { step: "Expert Assessment", description: "Specialized adjusters with creator economy expertise" },
    { step: "Rapid Resolution", description: "Most claims resolved within 30 days" },
    { step: "Direct Payment", description: "Settlements paid directly to your preferred account" }
  ];

  const legalResources = [
    {
      icon: BookOpen,
      title: "Creator Rights Library",
      description: "Comprehensive legal education tailored for creators:",
      topics: [
        "Copyright Basics - Understanding your rights in the digital age",
        "Licensing Strategies - Maximizing revenue while protecting your work",
        "International Rights - Navigating global content distribution",
        "AI & Creator Rights - Legal implications of AI in creative industries",
        "Platform Policies - Understanding and negotiating with major platforms"
      ]
    },
    {
      icon: FileText,
      title: "Legal Template Library",
      description: "Professional legal documents customized for your needs:",
      templates: [
        "Licensing agreement templates for different content types",
        "Collaboration agreements with built-in dispute resolution",
        "Work-for-hire contracts with clear ownership definitions",
        "Privacy policies and terms of service for creator businesses",
        "International licensing agreements with territorial restrictions"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Regulatory Updates",
      description: "Stay informed about changing legal landscapes:",
      updates: [
        "Monthly legal bulletins with creator-relevant updates",
        "Regulatory change alerts with impact analysis for your business",
        "Policy advocacy updates and opportunities for creator input",
        "International law changes affecting global content distribution"
      ]
    }
  ];

  const partnershipNetwork = [
    {
      category: "Legal Partners",
      description: "Specialized attorneys with creator economy expertise:",
      partners: [
        "Fenwick & West - Technology and IP law specialists",
        "Cooley LLP - Entertainment and media law experts",
        "Morrison & Foerster - International IP and technology law",
        "Local Counsel Network - Jurisdiction-specific expertise worldwide"
      ]
    },
    {
      category: "Insurance Partners",
      description: "Leading insurers committed to creator protection:",
      partners: [
        "Lloyd&apos;s of London - Primary insurance capacity and innovation partnership",
        "Hiscox - Professional liability and cyber coverage specialists",
        "Beazley - Technology errors and omissions coverage",
        "Chubb - High-value asset protection and international coverage"
      ]
    },
    {
      category: "Technology Partners",
      description: "Legal technology integration for seamless protection:",
      partners: [
        "LegalZoom - Automated legal document generation",
        "Lex Machina - Legal analytics and outcome prediction",
        "Relativity - Evidence management and litigation support",
        "Thomson Reuters - Legal research and regulatory monitoring"
      ]
    }
  ];

  const faqItems = [
    {
      question: "Is this insurance coverage valid internationally?",
      answer: "Yes, our Lloyd&apos;s Lab partnership provides global coverage. Specific terms may vary by jurisdiction, but we maintain comprehensive protection across major markets."
    },
    {
      question: "What happens if I&apos;m sued for copyright infringement?",
      answer: "Our insurance covers legal defense costs, and our legal team provides immediate support. We also offer proactive tools to help prevent infringement claims."
    },
    {
      question: "How does AI-related coverage work?",
      answer: "We provide pioneering coverage for AI-era risks, including liability for AI training data contribution, deepfake protection, and algorithm bias claims - coverage not available elsewhere."
    },
    {
      question: "Can I get coverage for content I created before joining Creation Rights?",
      answer: "Yes, we offer retroactive coverage for existing content libraries, subject to risk assessment and underwriting approval."
    },
    {
      question: "What&apos;s the difference between legal services and insurance?",
      answer: "Legal services help you establish and enforce your rights proactively. Insurance protects you financially when legal challenges arise despite your best efforts."
    },
    {
      question: "Do you handle international disputes?",
      answer: "Yes, our global network of legal partners and international insurance coverage ensure you&apos;re protected regardless of where disputes arise."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHeader
        title="Legal & Insurance"
        subtitle="Comprehensive protection for the creator economy"
      />
      
      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Navigate the complex world of digital rights with confidence. Creation Rights provides legal infrastructure and innovative insurance products that protect your creative work and business in the AI era.
          </p>
        </div>
      </PageSection>

      {/* Legal Infrastructure */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Legal Infrastructure for Digital Rights</h2>
          <div className="space-y-8">
            {legalInfrastructure.map((feature, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Legal Services */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Comprehensive Legal Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {legalServices.map((service, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
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

      {/* Lloyd's Lab Insurance */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Lloyd&apos;s Lab Insurance Innovation</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-4xl mx-auto">
            World-first insurance products designed specifically for the creator economy, developed in partnership with Lloyd&apos;s Lab - the innovation hub of the world&apos;s leading insurance marketplace.
          </p>
          
          <div className="space-y-12">
            {insuranceProducts.map((product, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <product.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-semibold">{product.title}</h3>
                    <p className="text-muted-foreground">{product.subtitle}</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  {product.categories.map((category, idx) => (
                    <div key={idx} className="bg-background border border-border p-6">
                      <h4 className="text-lg font-semibold mb-4">{category.name}</h4>
                      <ul className="space-y-2">
                        {category.features.map((feature, featureIdx) => (
                          <li key={featureIdx} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Legal Technology Integration */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Legal Technology Integration</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technologyIntegration.map((tech, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <tech.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{tech.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{tech.description}</p>
                <ul className="space-y-2">
                  {tech.features.map((feature, idx) => (
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

      {/* Legal Support Services */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Legal Support Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {supportServices.map((service, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
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

      {/* Insurance Coverage Details */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Insurance Coverage Details</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Coverage Limits & Pricing</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {coveragePlans.map((category, index) => (
                <div key={index} className="bg-background border border-border p-8">
                  <h4 className="text-xl font-semibold mb-6">{category.category}</h4>
                  <div className="space-y-4">
                    {category.plans.map((plan, idx) => (
                      <div key={idx} className="flex justify-between items-center p-4 bg-muted/20 border border-border">
                        <div>
                          <div className="font-medium">{plan.name}</div>
                          <div className="text-sm text-muted-foreground">{plan.coverage}</div>
                        </div>
                        <div className="font-semibold">{plan.price}</div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background border border-border p-8 mb-12">
            <h4 className="text-xl font-semibold mb-6">All plans include:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {allPlansInclude.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background border border-border p-8">
            <h4 className="text-xl font-semibold mb-6">Claims Process</h4>
            <p className="text-muted-foreground mb-6">Streamlined claims handling designed for creators:</p>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {claimsProcess.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center text-sm font-semibold mx-auto mb-3">
                    {index + 1}
                  </div>
                  <h5 className="font-medium mb-2">{step.step}</h5>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Legal Resources */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Legal Resources & Education</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {legalResources.map((resource, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <resource.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <ul className="space-y-2">
                  {(resource.topics || resource.templates || resource.updates || []).map((item, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Partnership Network */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Partnership Network</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnershipNetwork.map((network, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <h3 className="text-xl font-semibold mb-4">{network.category}</h3>
                <p className="text-muted-foreground mb-6">{network.description}</p>
                <ul className="space-y-3">
                  {network.partners.map((partner, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">{partner}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Getting Started */}
      <PageSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Getting Started</h2>
          <h3 className="text-2xl font-semibold mb-8">Legal & Insurance Assessment</h3>
          <p className="text-xl text-muted-foreground mb-8">
            Personalized protection planning for your creative business:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Risk Assessment - Comprehensive analysis of your legal and insurance needs</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Coverage Recommendations - Tailored insurance products for your specific risks</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Legal Strategy Planning - Proactive legal protection for your content and business</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Implementation Support - Seamless integration with your existing workflow</span>
            </div>
          </div>
          <Button variant="shimmer" size="lg" asChild>
            <Link href="/demo">Schedule Legal Assessment</Link>
          </Button>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection className="bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
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
