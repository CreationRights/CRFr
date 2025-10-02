import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Shield, 
  DollarSign, 
  CheckCircle,
  X,
  Star,
  Users,
  Search,
  Bot,
  Archive,
  FileText,
  Target,
  Briefcase,
  Heart,
  Layers
} from "lucide-react";
import Link from "next/link";

export default function AgencyPage() {
  const challenges = [
    {
      icon: Layers,
      title: "High-Volume Creative Output",
      description: "Agencies produce massive amounts of creative work with complex ownership structures",
      details: [
        "Multi-client portfolio management with dozens of simultaneous campaigns having different rights requirements",
        "Diverse content creation spanning video, audio, design, copy, photography, and interactive content", 
        "Collaborative team structures with internal teams, freelancers, vendors, and client stakeholders",
        "Rapid project turnover with fast-moving cycles making comprehensive rights tracking challenging"
      ]
    },
    {
      icon: Users,
      title: "Complex Stakeholder Relationships",
      description: "Agencies navigate intricate rights relationships across multiple parties",
      details: [
        "Client ownership questions with unclear boundaries between agency-created work and client-owned assets",
        "Freelancer and contractor rights with complex agreements with external creative contributors",
        "Vendor and partner integration requiring rights management for stock assets and third-party services",
        "Talent and influencer partnerships with complex agreements with performers and content creators"
      ]
    },
    {
      icon: Bot,
      title: "AI & Technology Threats",
      description: "Artificial intelligence creates new challenges for agency work",
      details: [
        "AI-generated derivatives with machine learning systems creating content based on agency work without permission",
        "Style and concept replication with AI tools mimicking distinctive agency creative approaches",
        "Automated content generation with AI systems creating competing content based on agency strategies",
        "Training data appropriation with agency portfolios used to train AI systems without consent"
      ]
    }
  ];

  const solutions = [
    {
      icon: Building2,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive creative output protection and rights tracking",
      features: [
        "Complete project registration with detailed documentation of all agency creative work",
        "Sophisticated agency licensing for complex client relationships and multi-territory rights",
        "Advanced agency revenue management with project cost optimization",
        "Exclusivity and conflict management preventing competitive conflicts and maintaining client exclusivity"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for agency creative work",
      features: [
        "Real-time project verification with instant rights clearance confirmation",
        "Comprehensive agency verification with asset authenticity confirmation",
        "Advanced agency recognition with AI-powered creative work detection",
        "Comprehensive agency protection against unauthorized usage and competitive threats"
      ]
    },
    {
      icon: DollarSign,
      title: "Advanced Agency Revenue Management",
      description: "Sophisticated monetization and cost management for agencies",
      features: [
        "Project cost optimization with automated tracking of rights-related expenses",
        "Freelancer and vendor compensation with transparent revenue sharing systems",
        "Client billing integration with automated billing for rights-related services",
        "Asset reuse revenue through monetization of agency-created assets"
      ]
    }
  ];

  const successStories = [
    {
      name: "Creative Solutions Group",
      role: "Full-Service Marketing Agency",
      challenge: "Managing 50+ simultaneous client projects with hundreds of freelancers and vendors, creating complex rights management challenges across diverse creative output",
      results: [
        "$1.2M in operational cost savings through automated rights management and reduced legal overhead",
        "80% improvement in project delivery speed through streamlined rights clearance and approval processes",
        "90% reduction in rights-related disputes with clients and contributors through transparent documentation",
        "Enhanced client satisfaction through comprehensive rights protection and professional service delivery"
      ]
    },
    {
      name: "Performance Marketing Pro", 
      role: "Digital Advertising Agency",
      challenge: "Managing hundreds of digital campaigns monthly with rapid creative iteration and complex influencer partnerships requiring fast rights clearance",
      results: [
        "$850,000 in increased campaign efficiency through automated rights management and faster creative deployment",
        "95% reduction in campaign launch delays through streamlined rights clearance processes",
        "40% increase in influencer partnership value through transparent compensation and rights management",
        "Industry leadership in rights-compliant digital advertising and creator-friendly campaign management"
      ]
    },
    {
      name: "Identity Architects",
      role: "Brand Strategy Agency", 
      challenge: "Creating comprehensive brand identities and strategic creative assets requiring long-term protection and careful usage management across client organizations",
      results: [
        "$680,000 in brand asset licensing revenue from strategic reuse and licensing of creative work",
        "85% improvement in brand asset protection through comprehensive monitoring and enforcement",
        "25% increase in client retention through enhanced brand protection and professional service delivery",
        "Enhanced agency reputation as leaders in brand asset protection and strategic creative services"
      ]
    }
  ];

  const features = [
    {
      icon: Briefcase,
      title: "Agency Workflow Integration",
      description: "Project management integration, creative production tools, client collaboration platforms, and digital asset management."
    },
    {
      icon: Users,
      title: "Multi-Client Management",
      description: "Client portfolio management, conflict prevention systems, client billing integration, and client reporting tools."
    },
    {
      icon: Target,
      title: "Team and Contributor Management",
      description: "Freelancer rights management, vendor partnership integration, talent collaboration tools, and team attribution systems."
    },
    {
      icon: Bot,
      title: "AI-Powered Agency Innovation",
      description: "AI creative tool integration, automated campaign optimization, synthetic content attribution, and client AI strategy."
    },
    {
      icon: Heart,
      title: "Creator Economy Integration",
      description: "Influencer collaboration platforms, creator network management, user-generated content campaigns, and community-driven creative."
    },
    {
      icon: Shield,
      title: "Sustainable Agency Practices",
      description: "Fair compensation standards, transparency and attribution, long-term creator relationships, and ethical creative practices."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "High-volume creative output with complex ownership structures creating rights management chaos",
        "Complex stakeholder relationships with unclear boundaries between agency and client ownership", 
        "Cross-platform usage challenges with content adapted without proper rights consideration",
        "AI-generated derivatives using agency work without permission or compensation",
        "Manual rights tracking across multiple clients causing delays and disputes",
        "Fragmented freelancer and vendor compensation with unclear revenue sharing"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Streamlined creative output management with automated rights tracking and clear ownership documentation",
        "Clear stakeholder relationships with transparent boundaries and automated conflict prevention",
        "Protected cross-platform usage with comprehensive rights management across all channels", 
        "AI-generated content controls with proper attribution and compensation for agency creative work",
        "Automated rights management with real-time clearance verification and streamlined approval processes",
        "Transparent contributor compensation with automated revenue sharing and clear documentation"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights help agencies manage multiple client projects simultaneously?",
      answer: "Our system provides unified rights management across all client accounts with automated conflict detection, contributor tracking, and streamlined clearance processes for efficient multi-client operations."
    },
    {
      question: "Can Creation Rights integrate with our existing agency workflow tools?",
      answer: "Yes, we provide integrations with major project management platforms, creative production tools, and client collaboration systems for seamless rights management within existing workflows."
    },
    {
      question: "How do you handle freelancer and vendor rights across agency projects?",
      answer: "Our system provides comprehensive contributor management with automated rights tracking, transparent compensation, and clear documentation of all external creative contributions."
    },
    {
      question: "What happens if clients want to use agency-created assets beyond original agreements?",
      answer: "Our system automatically detects usage beyond licensed terms and can facilitate licensing extensions, additional compensation, or enforcement actions based on your agreements."
    },
    {
      question: "How does Creation Rights support agency-client relationships and ownership agreements?",
      answer: "We provide flexible rights management that clearly defines ownership transfer, usage rights, and ongoing licensing terms for all agency-client creative collaborations."
    },
    {
      question: "Can Creation Rights help with competitive conflicts and exclusivity management?",
      answer: "Yes, our system includes automated conflict detection that prevents competitive violations and maintains client exclusivity agreements across all agency operations."
    }
  ];

  const advancedFeatures = [
    {
      category: "Workflow & Integration",
      items: [
        "Project Management Integration - Rights management within Monday.com, Asana platforms",
        "Creative Production Tools - Integrated rights tracking within Adobe Creative Suite, Frame.io", 
        "Client Collaboration Platforms - Rights management for client approval portals",
        "Digital Asset Management - Comprehensive rights tracking within DAM systems"
      ]
    },
    {
      category: "Client & Business Management",
      items: [
        "Client Portfolio Management - Rights management across multiple client accounts",
        "Conflict Prevention Systems - Automated checking for competitive conflicts",
        "Client Billing Integration - Automated billing for rights-related services",
        "Client Reporting Tools - Comprehensive reporting on rights compliance"
      ]
    },
    {
      category: "Team & Innovation",
      items: [
        "Freelancer Rights Management - Automated rights tracking for external contributors",
        "Vendor Partnership Integration - Rights management for stock assets and third-party services",
        "AI Creative Tool Integration - Rights management for AI-powered creative tools",
        "Talent Collaboration Tools - Rights management for influencer partnerships"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Briefcase,
      title: "Project Development Timeline",
      description: "Complete creative process from brief to final delivery with contributor attribution"
    },
    {
      icon: Users,
      title: "Multi-Stakeholder Collaboration",
      description: "Clear documentation of all creative contributors and their specific contributions"
    },
    {
      icon: FileText,
      title: "Client Relationship Documentation",
      description: "Comprehensive tracking of client involvement and ownership agreements"
    },
    {
      icon: Archive,
      title: "Usage and Distribution History",
      description: "Tracking of how creative work is used across different channels and platforms"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Agency"
        subtitle="Comprehensive rights management for creative agencies and service providers"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Creative agencies are the orchestrators of modern marketing and advertising, managing complex projects that involve multiple creators, diverse content types, and intricate client relationships. Yet agencies face unprecedented challenges in tracking rights across high-volume creative output while protecting both their own interests and those of their clients and collaborators.
          </p>
        </div>
      </PageSection>

      {/* The Agency Rights Management Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Agency Rights Management Crisis</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <challenge.icon className="h-12 w-12 text-destructive mb-6" />
                <h3 className="text-xl font-semibold mb-4">{challenge.title}</h3>
                <p className="text-muted-foreground mb-6">{challenge.description}</p>
                <ul className="space-y-2">
                  {challenge.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <X className="h-4 w-4 mt-1 text-destructive flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* How Creation Rights Transforms Agency Operations */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Agency Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <solution.icon className="h-12 w-12 text-primary mb-6" />
                <h3 className="text-xl font-semibold mb-4">{solution.title}</h3>
                <p className="text-muted-foreground mb-6">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* The Provenance Graph */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Provenance Graph</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our comprehensive provenance system captures the complexity of agency operations, from project brief to final delivery with complete stakeholder and rights documentation.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {provenanceFeatures.map((feature, index) => (
              <div key={index} className="p-6 border border-border bg-card text-center">
                <feature.icon className="h-10 w-10 text-primary mb-4 mx-auto" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Advanced Features */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Agencies</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 border border-border bg-background">
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Agency Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Agency Industry Integration</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((category, index) => (
              <div key={index} className="bg-card border border-border p-8">
                <h3 className="text-xl font-semibold mb-6">{category.category}</h3>
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm">
                      <span className="font-medium">{item.split(' - ')[0]}</span>
                      {item.includes(' - ') && (
                        <span className="text-muted-foreground"> - {item.split(' - ')[1]}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Before / After */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Before / After Creation Rights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {beforeAfter.map((section, index) => (
              <div key={index} className="space-y-6">
                <h3 className="text-2xl font-semibold text-center">{section.title}</h3>
                <div className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="flex items-start space-x-3">
                      {index === 0 ? (
                        <X className="h-5 w-5 mt-1 text-destructive flex-shrink-0" />
                      ) : (
                        <CheckCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                      )}
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Success Stories */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Agency Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-card border border-border p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">{story.name}</h3>
                    <p className="text-sm text-muted-foreground">{story.role}</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-4">{story.challenge}</p>
                <div className="space-y-2">
                  {story.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-sm">{result}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Demo CTA */}
      <PageSection className="bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Agency Operations?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading creative agencies who have streamlined their rights management, reduced operational costs, and built sustainable creator partnerships through comprehensive project protection that ensures compliance while enabling creative innovation and client satisfaction.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Agency Demo</Link>
            </Button>
          </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqs.map((faq, index) => (
              <div key={index} className="border-b border-border pb-6">
                <h3 className="text-lg font-semibold mb-3">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}