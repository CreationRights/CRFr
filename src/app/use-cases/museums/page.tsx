import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  DollarSign, 
  CheckCircle,
  X,
  Star,
  TrendingUp,
  BarChart3,
  Users,
  Search,
  Bot,
  Globe,
  Camera,
  Lightbulb,
  BookOpen,
  Archive
} from "lucide-react";
import Link from "next/link";

export default function MuseumsPage() {
  const challenges = [
    {
      icon: X,
      title: "Complex Rights Landscape",
      description: "Cultural heritage involves intricate ownership and usage rights",
      details: [
        "Multi-layered ownership with artist estates, donors, and foundations",
        "Public domain complexity and licensing requirements", 
        "Cultural sensitivity and indigenous rights protocols",
        "International complications and repatriation requirements"
      ]
    },
    {
      icon: Bot,
      title: "Digital Collection Vulnerabilities",
      description: "Digitization creates new protection challenges",
      details: [
        "High-resolution exploitation for unauthorized commercial use",
        "AI training appropriation without consent or attribution",
        "Educational misuse beyond permitted scope",
        "Virtual exhibition theft and curatorial concept copying"
      ]
    },
    {
      icon: TrendingUp,
      title: "Attribution & Scholarship Protection",
      description: "Museum expertise and research require protection",
      details: [
        "Curatorial knowledge and scholarly interpretation misuse",
        "Exhibition design and interpretive approach copying",
        "Educational content and programming appropriation",
        "Conservation innovation and preservation methodology theft"
      ]
    }
  ];

  const solutions = [
    {
      icon: Building,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive cultural heritage protection",
      features: [
        "Sophisticated collection registration for all museum assets",
        "Complete provenance documentation and cultural context",
        "Nuanced cultural licensing with protocol integration",
        "Sustainable revenue management with community compensation"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for cultural heritage",
      features: [
        "Real-time cultural verification and protocol compliance",
        "Comprehensive cultural verification systems",
        "Advanced cultural recognition and significance understanding",
        "Comprehensive cultural protection and enforcement"
      ]
    },
    {
      icon: DollarSign,
      title: "Nuanced Cultural Licensing",
      description: "Flexible rights management for diverse museum needs",
      features: [
        "Educational licensing for schools and research institutions",
        "Commercial reproduction with cultural protocol compliance",
        "Digital exhibition rights for virtual museums",
        "Multi-stakeholder revenue splits and community compensation"
      ]
    }
  ];

  const successStories = [
    {
      name: "Classical Heritage Institute",
      role: "Metropolitan Art Museum",
      challenge: "Ancient artifacts used without permission in commercial applications and scholarly research appropriated without attribution",
      results: [
        "$280,000 in licensing revenue from legitimate applications",
        "95% reduction in unauthorized usage through automated detection",
        "15 major academic partnerships with proper attribution",
        "Enhanced scholarly reputation through protected research"
      ]
    },
    {
      name: "Modern Vision Gallery", 
      role: "Contemporary Art Museum",
      challenge: "Digital exhibitions replicated by other institutions while balancing artist rights with institutional needs",
      results: [
        "$150,000 in exhibition licensing revenue from innovative concepts",
        "40% increase in artist satisfaction through transparent rights management",
        "12 international partnerships for traveling digital exhibitions",
        "Industry leadership in digital exhibition innovation"
      ]
    },
    {
      name: "Indigenous Arts Collective",
      role: "Cultural Heritage Center", 
      challenge: "Balancing cultural heritage sharing with protecting sacred materials while ensuring community control",
      results: [
        "$95,000 in culturally appropriate licensing revenue shared with communities",
        "100% compliance with indigenous rights protocols",
        "8 major educational partnerships with proper cultural consultation",
        "Model program adopted by 12 other cultural heritage institutions"
      ]
    }
  ];

  const features = [
    {
      icon: Archive,
      title: "Cultural Heritage Integration",
      description: "Provenance research, repatriation support, conservation documentation, and scholarly attribution tools."
    },
    {
      icon: BookOpen,
      title: "Educational Program Enhancement",
      description: "Curriculum development, digital learning integration, and community outreach with accessibility innovation."
    },
    {
      icon: Globe,
      title: "International Collaboration",
      description: "Traveling exhibition management, digital collection sharing, and cultural diplomacy support."
    },
    {
      icon: Lightbulb,
      title: "Digital Heritage Innovation",
      description: "3D documentation, AI-assisted research, and emerging technology integration for cultural preservation."
    },
    {
      icon: Users,
      title: "Community-Centered Approaches",
      description: "Indigenous rights integration, community curation, and participatory conservation support."
    },
    {
      icon: BarChart3,
      title: "Sustainable Cultural Economics",
      description: "Ethical monetization, partnership development, and social impact measurement for institutions."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Complex manual rights management",
        "Unauthorized commercial exploitation", 
        "Difficult cultural protocol compliance",
        "Limited revenue from digital collections",
        "Attribution disputes and scholarship theft",
        "Challenging international collaboration"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated comprehensive rights management",
        "Protected collections with proper licensing",
        "Seamless cultural protocol integration",
        "Sustainable revenue streams with community sharing", 
        "Protected scholarship and curatorial expertise",
        "Streamlined global cultural partnerships"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights handle indigenous cultural heritage and sacred materials?",
      answer: "Our system includes sophisticated cultural protocol integration that respects indigenous rights, community permissions, and cultural sensitivities, ensuring community control over sacred and sensitive materials."
    },
    {
      question: "Can Creation Rights help with repatriation and cultural heritage returns?",
      answer: "Yes, our comprehensive provenance documentation supports repatriation efforts and helps institutions maintain positive relationships with cultural communities."
    },
    {
      question: "How do you balance public access with rights protection for museum collections?",
      answer: "Our flexible licensing system enables educational and research access while protecting against unauthorized commercial use, supporting both public mission and sustainability needs."
    },
    {
      question: "What happens if someone uses our digitized collections without permission?",
      answer: "Our Content ID Layer automatically detects unauthorized usage and can initiate appropriate responses, from educational outreach to formal enforcement, based on your institutional policies."
    },
    {
      question: "Can Creation Rights integrate with our existing collection management system?",
      answer: "Yes, we provide APIs and integrations for major museum collection management platforms, ensuring seamless workflow integration without disrupting existing operations."
    },
    {
      question: "How does Creation Rights support international museum collaborations?",
      answer: "Our system automatically adapts to different countries' cultural heritage laws and provides tools for managing international loans, traveling exhibitions, and research partnerships."
    }
  ];

  const advancedFeatures = [
    {
      category: "Cultural Heritage",
      items: [
        "Provenance Research - Comprehensive artwork history documentation",
        "Repatriation Support - Tools for cultural heritage returns", 
        "Conservation Documentation - Complete preservation treatment records",
        "Scholarly Attribution - Proper crediting for museum research"
      ]
    },
    {
      category: "Digital Innovation",
      items: [
        "3D Documentation - Rights management for immersive experiences",
        "AI-Assisted Research - Ethical AI applications for cultural discovery",
        "Virtual Museums - Comprehensive rights for digital experiences",
        "Emerging Technology - Rights management for new preservation tech"
      ]
    },
    {
      category: "Community Integration",
      items: [
        "Indigenous Rights - Comprehensive cultural protocol support",
        "Community Curation - Tools for community-led exhibitions",
        "Participatory Conservation - Community involvement in preservation",
        "Cultural Revitalization - Rights for community cultural revival"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Archive,
      title: "Historical Provenance",
      description: "Complete ownership history, acquisition details, and cultural context documentation"
    },
    {
      icon: Camera,
      title: "Digitization Documentation",
      description: "Technical specifications, photography credits, and digital processing details"
    },
    {
      icon: Users,
      title: "Curatorial Contributions",
      description: "Attribution for museum staff, visiting scholars, and research collaborators"
    },
    {
      icon: Globe,
      title: "Cultural Protocols",
      description: "Documentation of indigenous rights, community permissions, and cultural sensitivities"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Museums"
        subtitle="Comprehensive digital rights management for cultural institutions"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Museums are the guardians of human cultural heritage, yet they face unprecedented challenges in the digital age. From managing complex rights for digitized collections to protecting against AI-generated derivatives of priceless artworks, cultural institutions need sophisticated tools that balance public access with proper protection and attribution.
          </p>
        </div>
      </PageSection>

      {/* The Museum's Digital Dilemma */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Museum&apos;s Digital Dilemma</h2>
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

      {/* How Creation Rights Transforms Museum Operations */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Museum Operations</h2>
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
            Our comprehensive provenance system captures the cultural complexity and heritage significance of museum collections and scholarly work.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Museums</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Museum Integration</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Museum Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Museum Operations?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading cultural institutions who have enhanced their digital collection management, protected cultural heritage, and developed sustainable revenue streams while maintaining their public mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Museum Demo</Link>
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