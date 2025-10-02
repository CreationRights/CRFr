import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Building, 
  DollarSign, 
  CheckCircle,
  Star,
  Users,
  Search,
  Bot,
  Globe,
  Monitor,
  Heart,
  Zap,
  Home,
  MapPin,
  X
} from "lucide-react";
import Link from "next/link";

export default function HospitalityPage() {
  const challenges = [
    {
      icon: Building,
      title: "Brand Content Vulnerability",
      description: "Your unique hospitality experience becomes everyone's template",
      details: [
        "Design appropriation with competitors copying distinctive interior design and concepts",
        "Experience replication with other brands mimicking signature services and innovations", 
        "Content theft with unauthorized use of photography and promotional materials",
        "AI-generated imitations creating virtual hotel experiences replicating brand aesthetic"
      ]
    },
    {
      icon: Users,
      title: "Complex Content Ecosystem",
      description: "Hospitality brands manage diverse creative assets",
      details: [
        "Multi-creator collaborations with photographers, videographers, and content creators",
        "Architectural innovation requiring protection for unique building and interior designs",
        "Culinary creations including signature menus and dining experience concepts",
        "Experiential design with curated activities and immersive guest experiences"
      ]
    },
    {
      icon: Bot,
      title: "Competitive Intelligence Threats",
      description: "Sophisticated copying that's hard to detect",
      details: [
        "Market research appropriation with competitors using innovations as inspiration",
        "Staff poaching with key team members taking proprietary knowledge to competitors",
        "Vendor intelligence with suppliers sharing innovative concepts with other clients",
        "AI training exploitation with machine learning systems trained without consent"
      ]
    }
  ];

  const solutions = [
    {
      icon: Building,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive brand asset protection for hospitality",
      features: [
        "Holistic brand registration for all hospitality elements",
        "Sophisticated hospitality licensing for diverse needs",
        "Dynamic revenue optimization with multi-party splits",
        "Seasonal licensing and geographic restrictions"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for hospitality brands",
      features: [
        "Real-time brand verification for booking platforms and media",
        "Comprehensive hospitality verification with content authenticity",
        "Advanced hospitality recognition with AI-powered detection",
        "Comprehensive brand protection against competitor copying"
      ]
    },
    {
      icon: DollarSign,
      title: "Dynamic Revenue Optimization",
      description: "Sophisticated monetization for hospitality brands",
      features: [
        "Multi-party revenue splits with automatic distribution",
        "Usage-based licensing with performance optimization",
        "Partnership monetization from brand collaborations",
        "Innovation licensing for unique hospitality concepts"
      ]
    }
  ];

  const successStories = [
    {
      name: "Serenity Resorts",
      role: "Luxury Resort Chain",
      challenge: "Innovative wellness programs and distinctive architectural design being copied by competitors, diluting brand differentiation",
      results: [
        "$450,000 in licensing revenue from hospitality brands implementing wellness innovations",
        "15 major enforcement actions against competitors copying signature experiences",
        "25% increase in brand differentiation through protected unique offerings",
        "Enhanced franchise value through documented intellectual property portfolio"
      ]
    },
    {
      name: "Urban Sanctuary", 
      role: "Boutique Hotel Group",
      challenge: "Instagram-worthy properties generating massive user-generated content with overwhelming rights management challenges",
      results: [
        "$180,000 in influencer licensing revenue from brands using hotel-generated content",
        "90% reduction in unauthorized commercial usage through automated detection",
        "40% increase in legitimate brand partnerships through streamlined licensing",
        "Enhanced social media ROI through comprehensive content monetization"
      ]
    },
    {
      name: "Heritage Properties",
      role: "Historic Hotel Collection", 
      challenge: "Historic buildings and cultural programming being replicated in virtual environments without attribution or compensation",
      results: [
        "$320,000 in virtual licensing revenue from metaverse platforms and gaming companies",
        "12 cultural partnership agreements with proper attribution and revenue sharing",
        "Enhanced heritage preservation through comprehensive digital documentation",
        "International recognition as leaders in heritage hospitality protection"
      ]
    }
  ];

  const features = [
    {
      icon: Home,
      title: "Guest Experience Documentation",
      description: "Service innovation, amenity design, programming protection, and technology integration for hospitality innovations."
    },
    {
      icon: Users,
      title: "Brand Partnership Management",
      description: "Co-marketing rights, franchise protection, vendor partnerships, and cultural collaborations."
    },
    {
      icon: Monitor,
      title: "Virtual Hospitality Innovation",
      description: "Metaverse hotels, virtual tours, AI concierge services, and digital twin properties."
    },
    {
      icon: Heart,
      title: "Sustainable Tourism Integration",
      description: "Eco-innovation protection, community partnership rights, conservation licensing, and responsible tourism standards."
    },
    {
      icon: Zap,
      title: "Technology Integration Leadership",
      description: "Smart hotel systems, personalization technology, operational innovation, and guest data analytics."
    },
    {
      icon: MapPin,
      title: "Cultural Heritage Preservation",
      description: "Heritage documentation, local artisan partnerships, cultural experience licensing, and international cultural exchange."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Competitors copying distinctive design and experience concepts",
        "AI systems creating virtual imitations without permission", 
        "Complex influencer content rights management challenges",
        "Unauthorized use of brand photography across booking platforms",
        "Staff and vendor intelligence sharing proprietary innovations",
        "Revenue loss from unauthorized brand concept replication"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated detection and protection against design and experience copying",
        "AI training consent controls with fair compensation for virtual representations",
        "Streamlined influencer content management with automated licensing",
        "Protected brand photography with proper licensing across all platforms", 
        "Comprehensive IP protection preventing unauthorized knowledge sharing",
        "Complete revenue optimization through protected brand concepts and licensing"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights protect our hotel's distinctive design and atmosphere?",
      answer: "Our AI analyzes your unique design elements, spatial arrangements, and aesthetic choices, creating comprehensive protection that detects when competitors copy your distinctive hospitality concepts."
    },
    {
      question: "Can Creation Rights help manage influencer content and user-generated content rights?",
      answer: "Yes, our system automatically tracks influencer collaborations and user-generated content, enabling monetization while protecting your brand from unauthorized commercial use."
    },
    {
      question: "How do you handle international licensing for global hospitality brands?",
      answer: "Creation Rights automatically adapts to local copyright laws and hospitality regulations, providing seamless international licensing with proper legal compliance in each market."
    },
    {
      question: "What happens if a competitor copies our signature guest experience?",
      answer: "Our Content ID Layer detects when competitors replicate your unique hospitality concepts and can initiate enforcement actions or licensing negotiations based on your preferences."
    },
    {
      question: "Can Creation Rights integrate with our existing booking and management systems?",
      answer: "Yes, we provide APIs and integrations for major hospitality management platforms, ensuring seamless workflow integration without disrupting existing operations."
    },
    {
      question: "How does Creation Rights support virtual and metaverse hospitality experiences?",
      answer: "We provide comprehensive rights management for virtual hotel representations, enabling licensing for metaverse platforms while protecting your brand integrity in digital environments."
    }
  ];

  const advancedFeatures = [
    {
      category: "Experience & Innovation",
      items: [
        "Service Innovation - Documentation and protection of unique guest service concepts",
        "Amenity Design - Protection for distinctive amenity concepts and facility innovations", 
        "Programming Protection - Rights management for cultural events and experiential offerings",
        "Technology Integration - Protection for proprietary hospitality technology systems"
      ]
    },
    {
      category: "Partnerships & Business",
      items: [
        "Co-Marketing Rights - Automated licensing for joint marketing campaigns",
        "Franchise Protection - Comprehensive rights management for franchise operations",
        "Vendor Partnerships - Rights management for supplier collaborations",
        "Cultural Collaborations - Protection for partnerships with local artists and organizations"
      ]
    },
    {
      category: "Digital & Sustainability",
      items: [
        "Metaverse Hotels - Rights management for virtual hotel experiences",
        "Virtual Tours - Protection for immersive VR hotel experiences",
        "Eco-Innovation Protection - Rights for sustainable hospitality practices",
        "Community Partnership Rights - Protection for local community collaborations"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Building,
      title: "Brand Development",
      description: "Documentation of concept creation, design evolution, and brand strategy"
    },
    {
      icon: Users,
      title: "Creative Collaborations",
      description: "Attribution for architects, designers, chefs, photographers, and content creators"
    },
    {
      icon: Heart,
      title: "Guest Experience Innovation",
      description: "Documentation of unique service concepts and experiential design"
    },
    {
      icon: Globe,
      title: "Cultural Integration",
      description: "Attribution of local influences, cultural elements, and community partnerships"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Hospitality"
        subtitle="Comprehensive brand protection for hospitality and tourism"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            The hospitality industry thrives on unique experiences and distinctive brand identity, yet hotels and hospitality brands face unprecedented challenges protecting their creative concepts in the digital age. From design appropriation and experience replication to AI-generated imitations, hospitality professionals need sophisticated tools that preserve brand integrity while enabling legitimate partnerships and cultural exchange.
          </p>
        </div>
      </PageSection>

      {/* The Hospitality Brand Challenge */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Hospitality Brand Challenge</h2>
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

      {/* How Creation Rights Transforms Hospitality Protection */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Hospitality Protection</h2>
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
            Our comprehensive provenance system captures the complexity of hospitality brand development, from concept creation to cultural integration and guest experience innovation.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Hospitality</h2>
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

      {/* Hospitality Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Hospitality Industry Integration</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Hospitality Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Hospitality Brand?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading hospitality brands who have protected their unique experiences, automated their content licensing, and built sustainable competitive advantages through comprehensive brand protection that preserves authenticity while enabling legitimate partnerships.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Hospitality Demo</Link>
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