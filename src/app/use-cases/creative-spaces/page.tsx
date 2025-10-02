import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Wrench, 
  DollarSign, 
  CheckCircle,
  X,
  Star,
  Lock,
  TrendingUp,
  BarChart3,
  Users,
  Search,
  Bot,
  Globe,
  Camera,
  Lightbulb,
  Settings
} from "lucide-react";
import Link from "next/link";

export default function CreativeSpacesPage() {
  const challenges = [
    {
      icon: X,
      title: "Attribution & Ownership Complexity",
      description: "Collaborative creation makes IP ownership murky",
      details: [
        "Multi-creator projects with unclear individual contributions",
        "Space vs. creator rights confusion", 
        "Tool and resource attribution questions",
        "Temporal complexity with changing contributors"
      ]
    },
    {
      icon: Bot,
      title: "Undocumented Innovation",
      description: "Valuable IP often goes unprotected in creative environments",
      details: [
        "Prototype documentation without proper IP protection",
        "Process innovation not formally protected",
        "Collaborative insights without clear attribution",
        "Experimental work that may become valuable later"
      ]
    },
    {
      icon: TrendingUp,
      title: "Usage Rights Confusion",
      description: "Unclear terms for how creative work can be used",
      details: [
        "Exhibition rights confusion for space-created work",
        "Commercial exploitation unclear terms",
        "Educational use questions and permissions",
        "Digital replication and documentation rights"
      ]
    }
  ];

  const solutions = [
    {
      icon: Wrench,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive IP management for collaborative environments",
      features: [
        "Multi-format registration for all creative work types",
        "Real-time documentation and attribution tracking",
        "Collaborative tracking with specific role documentation",
        "Tool integration with creative software and hardware"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for creative innovation",
      features: [
        "Real-time creative verification for all stakeholders",
        "Comprehensive creative verification systems",
        "Advanced creative recognition and process tracking",
        "Comprehensive creative protection and enforcement"
      ]
    },
    {
      icon: DollarSign,
      title: "Flexible Creative Space Licensing",
      description: "Adaptable rights management for diverse creative environments",
      features: [
        "Collaboration agreements with clear ownership structures",
        "Space usage terms balancing operator and creator rights",
        "Exhibition licensing for galleries and public spaces",
        "Commercial development pathways and monetization"
      ]
    }
  ];

  const successStories = [
    {
      name: "TechCraft Collective",
      role: "Makerspace Innovation Hub",
      challenge: "Hardware prototypes being copied by manufacturers without attribution or compensation to creators",
      results: [
        "$180,000 in licensing revenue from manufacturers",
        "25 patent applications supported by comprehensive documentation",
        "40% increase in member retention through enhanced IP protection",
        "12 startup companies launched with protected IP"
      ]
    },
    {
      name: "Harmony Studios", 
      role: "Recording Studio Complex",
      challenge: "Complex rights management for multi-artist collaborative recording sessions and production innovations",
      results: [
        "$320,000 in automated royalty distribution to collaborators",
        "90% reduction in rights disputes through transparent tracking",
        "15 major label partnerships attracted by clear documentation",
        "Enhanced reputation as premier collaborative recording facility"
      ]
    },
    {
      name: "Creative Catalyst",
      role: "Art Residency Program", 
      challenge: "Managing exhibition rights and ensuring fair compensation for both artists and the residency program",
      results: [
        "$95,000 in exhibition licensing revenue shared with artists",
        "30% increase in grant funding through impact documentation",
        "50 gallery partnerships established through verified provenance",
        "Model program adopted by 8 other residency organizations"
      ]
    }
  ];

  const features = [
    {
      icon: Settings,
      title: "Space Management Integration",
      description: "Member portal integration, equipment tracking, and community management tools for creative operations."
    },
    {
      icon: Users,
      title: "Educational Program Support",
      description: "Workshop documentation, student work protection, and curriculum development with IP rights management."
    },
    {
      icon: Lightbulb,
      title: "Innovation Incubation",
      description: "Startup IP protection, investor relations support, and market validation tools for creative ventures."
    },
    {
      icon: Globe,
      title: "Collaborative Innovation Networks",
      description: "Inter-space collaboration, knowledge sharing, and global creative community building with protected IP."
    },
    {
      icon: Lock,
      title: "Process Recognition",
      description: "AI-powered detection of creative methodologies and techniques being used across different applications."
    },
    {
      icon: Camera,
      title: "Comprehensive Documentation",
      description: "Real-time tracking of creative development from concept to completion with full attribution records."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Unclear collaborative ownership",
        "Undocumented creative innovations", 
        "Complex manual rights negotiations",
        "Lost revenue from unauthorized use",
        "Attribution disputes and confusion",
        "Limited protection for experimental work"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Clear collaborative attribution tracking",
        "Automatic innovation documentation",
        "Smart automated licensing agreements",
        "Protected revenue streams for all contributors", 
        "Transparent contribution records",
        "Comprehensive protection from concept to market"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights handle complex collaborative projects with multiple contributors?",
      answer: "Our system automatically tracks individual contributions in real-time, creating clear attribution records and enabling flexible revenue sharing based on actual creative input."
    },
    {
      question: "Can Creation Rights integrate with our existing member management system?",
      answer: "Yes, we provide APIs and integrations for most major space management platforms, ensuring seamless workflow integration without disrupting existing operations."
    },
    {
      question: "How do you balance creator rights with creative space operational needs?",
      answer: "Smart licensing allows for flexible agreements that protect creator rights while enabling spaces to showcase work, attract members, and develop partnerships."
    },
    {
      question: "What happens if someone uses creative work developed in our space without permission?",
      answer: "Our Content ID Layer automatically detects unauthorized usage and can initiate enforcement actions, licensing negotiations, or legal procedures based on your preferences."
    },
    {
      question: "How does Creation Rights support startup ventures developed in creative spaces?",
      answer: "We provide comprehensive IP documentation that supports patent applications, investor discussions, and commercial development while maintaining clear ownership records."
    },
    {
      question: "Can Creation Rights help with grant applications and program evaluation?",
      answer: "Yes, our comprehensive documentation of creative work and innovation provides valuable data for grant applications, impact assessment, and program development."
    }
  ];

  const advancedFeatures = [
    {
      category: "Space Operations",
      items: [
        "Member Portal Integration - Automatic IP registration through existing systems",
        "Equipment Tracking - Documentation of tool and resource usage", 
        "Space Scheduling - Integration with booking systems for project timelines",
        "Community Management - Tools for collaborative projects and initiatives"
      ]
    },
    {
      category: "Market Integration",
      items: [
        "Corporate Partnerships - R&D partnerships with clear IP frameworks",
        "Academic Integration - University collaborations and research documentation",
        "Innovation Networks - Inter-space collaboration and knowledge sharing",
        "Technology Transfer - Efficient movement from exploration to market"
      ]
    },
    {
      category: "Innovation Support",
      items: [
        "Startup IP Protection - Comprehensive rights for ventures in development",
        "Investor Relations - Clear documentation for funding discussions",
        "Market Validation - Testing innovations while maintaining IP protection",
        "Scaling Support - Rights management that grows with successful ventures"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Users,
      title: "Creator Attribution",
      description: "Individual and collaborative contributor identification with specific role documentation"
    },
    {
      icon: Wrench,
      title: "Space Resources",
      description: "Documentation of shared tools, equipment, and materials used in creation"
    },
    {
      icon: BarChart3,
      title: "Timeline Documentation",
      description: "Complete history of creative development from concept to completion"
    },
    {
      icon: Lightbulb,
      title: "Methodology Recording",
      description: "Documentation of creative processes, techniques, and innovations"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Creative Spaces"
        subtitle="Comprehensive IP protection for collaborative creative environments"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Creative spaces are the innovation hubs where breakthrough ideas are born, yet they face unique challenges in protecting the intellectual property generated within their walls. From makerspaces to recording studios, these collaborative environments need sophisticated tools to track creation, protect rights, and ensure fair compensation for all contributors.
          </p>
        </div>
      </PageSection>

      {/* The Creative Space Challenge */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Creative Space Challenge</h2>
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

      {/* How Creation Rights Transforms Creative Spaces */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Creative Spaces</h2>
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
            Our comprehensive provenance system captures the creative complexity of collaborative environments and multi-contributor projects.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Creative Spaces</h2>
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

      {/* Technical Integration Details */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Creative Space Integration</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Creative Space Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Creative Space?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join innovative creative spaces who have enhanced their collaborative innovation, protected creator rights, and unlocked new revenue streams through comprehensive IP management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Creative Space Demo</Link>
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