import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  Shield, 
  DollarSign, 
  Eye, 
  CheckCircle,
  X,
  Star,
  Lock,
  FileText,
  TrendingUp,
  Users,
  Search,
  Bot,
  Globe,
  Layers,
  Camera,
  Palette
} from "lucide-react";
import Link from "next/link";

export default function GalleriesPage() {
  const challenges = [
    {
      icon: X,
      title: "Provenance & Authentication Challenges",
      description: "Trust is the foundation of the art market, but verification is increasingly complex",
      details: [
        "Authenticity verification for digital and emerging media",
        "Ownership history gaps affecting artwork value", 
        "Documentation fragmentation across multiple systems",
        "International complications with varying standards"
      ]
    },
    {
      icon: Bot,
      title: "AI-Generated Art Threats",
      description: "Artificial intelligence creates new challenges for gallery authenticity",
      details: [
        "Style imitation by AI systems",
        "Market confusion between authentic and AI works",
        "Artist protection from unauthorized AI training",
        "Maintaining collector confidence in digital reproduction era"
      ]
    },
    {
      icon: TrendingUp,
      title: "Digital Rights Management Complexity",
      description: "Modern galleries operate across physical and digital spaces",
      details: [
        "Online exhibition rights and virtual viewing rooms",
        "Reproduction permissions for catalogs and promotion",
        "Installation documentation and performance rights",
        "Multi-platform distribution coordination"
      ]
    }
  ];

  const solutions = [
    {
      icon: Building,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive artwork lifecycle management",
      features: [
        "Multi-media support for all artwork types",
        "Exhibition integration and intake processes",
        "Collaborative documentation and attribution",
        "Historical integration with existing records"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and trust for the art market",
      features: [
        "Real-time authentication for buyers and institutions",
        "Comprehensive gallery verification systems",
        "Advanced art recognition and style authentication",
        "Comprehensive market protection and enforcement"
      ]
    },
    {
      icon: DollarSign,
      title: "Sophisticated Gallery Licensing",
      description: "Flexible rights management for diverse gallery needs",
      features: [
        "Exhibition rights and reproduction licensing",
        "Digital rights for online and virtual exhibitions",
        "Commercial licensing with artist approval",
        "Dynamic revenue management and royalty collection"
      ]
    }
  ];

  const successStories = [
    {
      name: "Meridian Contemporary",
      role: "Contemporary Art Gallery",
      challenge: "Emerging digital artists seeing work copied by AI systems and unauthorized reproductions on social media",
      results: [
        "$85,000 in recovered licensing revenue",
        "40% increase in artist confidence and stronger relationships",
        "15 new digital art partnerships with verified provenance",
        "Enhanced collector trust through transparent authenticity"
      ]
    },
    {
      name: "Heritage Fine Arts", 
      role: "Blue-Chip Gallery",
      challenge: "High-value artworks requiring complex provenance verification and international resale royalty management",
      results: [
        "$320,000 in automated resale royalties collected",
        "90% reduction in provenance disputes",
        "25% increase in international sales",
        "Enhanced reputation as ethical art market leader"
      ]
    },
    {
      name: "Metropolitan Contemporary Wing",
      role: "Museum Gallery", 
      challenge: "Balancing educational access with artist rights protection while managing complex licensing",
      results: [
        "$150,000 in educational licensing revenue shared with artists",
        "50% increase in digital engagement through licensed exhibitions",
        "12 major publication partnerships with streamlined rights",
        "Model program adopted by 8 other major museums"
      ]
    }
  ];

  const features = [
    {
      icon: Palette,
      title: "Exhibition Management Integration",
      description: "Comprehensive tools for curatorial planning, installation documentation, and catalog production."
    },
    {
      icon: Users,
      title: "Collector Services Enhancement",
      description: "Private viewing rights, acquisition documentation, and automated resale services for collectors."
    },
    {
      icon: Eye,
      title: "Advanced Art Recognition",
      description: "AI-powered style authentication, condition monitoring, and reproduction detection systems."
    },
    {
      icon: Globe,
      title: "Art Fair Integration",
      description: "Booth documentation, sales verification, and international compliance for art fair participation."
    },
    {
      icon: Lock,
      title: "Provenance Verification",
      description: "Complete ownership history, exhibition records, and legal clearance documentation."
    },
    {
      icon: Camera,
      title: "Digital Gallery Innovation",
      description: "VR exhibitions, AR integration, online viewing rooms, and social media rights management."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Manual provenance verification",
        "Complex licensing negotiations", 
        "Fragmented documentation systems",
        "Difficult resale royalty tracking",
        "AI imitation threats undetected",
        "Limited digital exhibition rights"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Instant authenticity verification",
        "Automated licensing and revenue sharing",
        "Unified documentation and provenance",
        "Automatic resale royalty collection", 
        "AI-generated work detection and protection",
        "Comprehensive digital rights management"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights help verify artwork authenticity for potential buyers?",
      answer: "Our system provides instant access to complete provenance records, exhibition history, and artist verification, giving buyers confidence in authenticity and legal ownership."
    },
    {
      question: "Can Creation Rights help collect resale royalties for our represented artists?",
      answer: "Yes, our system automatically tracks secondary market sales and collects artist resale royalties according to EU Artist's Resale Right and US ART Act requirements."
    },
    {
      question: "How do you handle complex consignment agreements and revenue sharing?",
      answer: "Smart contracts automatically execute revenue sharing according to your consignment terms, with complete transparency for both gallery and artist."
    },
    {
      question: "What happens if someone creates unauthorized reproductions of artworks we exhibit?",
      answer: "Our Content ID Layer automatically detects unauthorized reproductions and can initiate takedown procedures or licensing negotiations based on your preferences."
    },
    {
      question: "Can Creation Rights integrate with our existing gallery management system?",
      answer: "Yes, we provide APIs and integrations for most major gallery management platforms, ensuring seamless workflow integration."
    },
    {
      question: "How do you protect against AI-generated imitations of our artists' work?",
      answer: "Our AI detection systems identify when artificial intelligence generates works mimicking your artists' styles, enabling immediate protection and enforcement actions."
    }
  ];

  const advancedFeatures = [
    {
      category: "Exhibition Management",
      items: [
        "Curatorial Planning - Rights verification during exhibition planning",
        "Installation Documentation - Automatic recording of display standards", 
        "Opening Event Management - Photography and video rights for events",
        "Catalog Production - Streamlined licensing for publications"
      ]
    },
    {
      category: "Market Integration",
      items: [
        "Art Fair Integration - Comprehensive booth and sales documentation",
        "Auction House Collaboration - Seamless secondary market integration",
        "Educational Partnerships - Academic licensing and research support",
        "International Compliance - Automatic adaptation to local regulations"
      ]
    },
    {
      category: "Digital Innovation",
      items: [
        "Virtual Reality Exhibitions - Rights management for immersive experiences",
        "Augmented Reality Integration - AR application licensing",
        "Online Viewing Rooms - Digital gallery space rights management",
        "Social Media Integration - Automated licensing and attribution"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: FileText,
      title: "Artist Verification",
      description: "Cryptographic confirmation of artist identity and authorization"
    },
    {
      icon: Layers,
      title: "Ownership Chain",
      description: "Complete history of collectors, dealers, and institutional ownership"
    },
    {
      icon: Building,
      title: "Exhibition History",
      description: "Comprehensive record of past shows, loans, and public displays"
    },
    {
      icon: Shield,
      title: "Conservation Records",
      description: "Documentation of condition, treatments, and handling requirements"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Galleries"
        subtitle="Comprehensive rights management for the modern art gallery"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Art galleries are the cultural bridges between artists and audiences, yet they face unprecedented challenges in the digital age. From verifying artwork authenticity to managing complex licensing rights and protecting against AI-generated imitations, galleries need sophisticated tools that preserve artistic integrity while embracing technological innovation.
          </p>
        </div>
      </PageSection>

      {/* The Gallery's Digital Dilemma */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Gallery&apos;s Digital Dilemma</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-muted/20 p-8  border border-border">
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

      {/* How Creation Rights Transforms Gallery Operations */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Gallery Operations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-background border border-border p-8 ">
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
            Our comprehensive provenance system captures the complete lifecycle and complexity of gallery artwork management.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {provenanceFeatures.map((feature, index) => (
              <div key={index} className="p-6  border border-border bg-card text-center">
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Galleries</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6  border border-border bg-background">
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
          <h2 className="text-4xl font-bold mb-12 text-center">Gallery Market Integration</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((category, index) => (
              <div key={index} className="bg-card border border-border p-8 ">
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
          <h2 className="text-4xl font-bold mb-12 text-center">Gallery Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-card border border-border p-8 ">
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Gallery Operations?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading galleries who have enhanced their authenticity verification, streamlined rights management, and protected their artists through comprehensive digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Gallery Demo</Link>
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