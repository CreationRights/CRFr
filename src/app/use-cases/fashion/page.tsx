import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Shirt, 
  DollarSign, 
  CheckCircle,
  Star,
  Users,
  Search,
  Bot,
  Globe,
  Palette,
  Monitor,
  Scissors,
  Sparkles,
  Leaf,
  X
} from "lucide-react";
import Link from "next/link";

export default function FashionPage() {
  const challenges = [
    {
      icon: Scissors,
      title: "Fast Fashion & Design Theft",
      description: "Original designs are constantly stolen and mass-produced without permission",
      details: [
        "Runway knockoffs copying high-end designs within weeks of fashion shows",
        "Pattern piracy with unauthorized reproduction of distinctive prints", 
        "Silhouette appropriation copying unique garment shapes and cuts",
        "Accessory replication of jewelry, bags, and fashion accessories"
      ]
    },
    {
      icon: Bot,
      title: "AI-Generated Fashion Threats",
      description: "Artificial intelligence creates new challenges for design protection",
      details: [
        "Style replication with AI generating designs mimicking designer aesthetics",
        "Pattern generation creating textile patterns from copyrighted designs",
        "Virtual fashion copying replicating physical designs for digital applications",
        "Automated design tools helping competitors create derivative works"
      ]
    },
    {
      icon: Monitor,
      title: "Digital Fashion Complexity",
      description: "Virtual worlds and digital fashion create new rights scenarios",
      details: [
        "Metaverse fashion rights with unclear ownership for virtual clothing",
        "Avatar customization issues using designs without designer permission",
        "Gaming integration challenges incorporating fashion without licensing",
        "NFT fashion confusion with digital fashion created without authorization"
      ]
    }
  ];

  const solutions = [
    {
      icon: Shirt,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive fashion design protection and attribution",
      features: [
        "Complete design registration for all creative elements",
        "Sophisticated fashion licensing for diverse applications",
        "Advanced fashion revenue management with multi-party splits",
        "Cultural sensitivity controls and sustainability requirements"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for fashion content",
      features: [
        "Real-time fashion verification for manufacturers and platforms",
        "Comprehensive fashion verification with design authenticity",
        "Advanced fashion recognition with AI-powered detection",
        "Comprehensive fashion protection against fast fashion and AI threats"
      ]
    },
    {
      icon: DollarSign,
      title: "Advanced Fashion Revenue Management",
      description: "Sophisticated monetization for fashion creators",
      features: [
        "Multi-party revenue splits for designers and collaborators",
        "Royalty optimization across different market segments",
        "International licensing revenue with global collection",
        "Digital fashion monetization for virtual and metaverse applications"
      ]
    }
  ];

  const successStories = [
    {
      name: "Eco Couture Studio",
      role: "Sustainable Fashion Designer",
      challenge: "Innovative sustainable designs being copied by fast fashion brands without environmental standards, undermining brand values",
      results: [
        "$320,000 in sustainable licensing revenue from ethical production partners",
        "85% reduction in unauthorized copying through automated detection",
        "15 major sustainable fashion partnerships with verified compliance",
        "Enhanced brand integrity through protected sustainable innovation"
      ]
    },
    {
      name: "Virtual Threads", 
      role: "Digital Fashion Pioneer",
      challenge: "Groundbreaking digital fashion designs being copied across virtual worlds and gaming platforms without compensation",
      results: [
        "$180,000 in digital fashion licensing revenue from metaverse platforms",
        "90% coverage across virtual worlds through comprehensive protection",
        "25 major platform partnerships with proper licensing and revenue sharing",
        "Industry leadership in digital fashion rights and virtual world integration"
      ]
    },
    {
      name: "Heritage Patterns Collective",
      role: "Traditional Textile Artist", 
      challenge: "Traditional textile designs being appropriated without cultural sensitivity or community benefit sharing",
      results: [
        "$95,000 in cultural heritage licensing revenue shared with artisan communities",
        "100% cultural sensitivity compliance through protected traditional usage",
        "12 respectful brand partnerships with proper cultural consultation",
        "Enhanced cultural preservation through documented traditional techniques"
      ]
    }
  ];

  const features = [
    {
      icon: Scissors,
      title: "Design Development Integration",
      description: "CAD software integration, 3D fashion modeling, pattern making tools, and textile design integration."
    },
    {
      icon: Sparkles,
      title: "Fashion Industry Ecosystem",
      description: "Manufacturing relations, retail integration, Fashion Week integration, and influencer collaboration tools."
    },
    {
      icon: Leaf,
      title: "Sustainability & Ethics Integration",
      description: "Sustainable production verification, cultural heritage protection, fair trade integration, and circular fashion support."
    },
    {
      icon: Monitor,
      title: "Digital Fashion Revolution",
      description: "Metaverse fashion rights, AR fashion integration, NFT fashion protection, and gaming fashion integration."
    },
    {
      icon: Globe,
      title: "Sustainable Fashion Leadership",
      description: "Circular economy integration, carbon footprint tracking, ethical production verification, and biodegradable fashion rights."
    },
    {
      icon: Users,
      title: "Cultural Heritage Preservation",
      description: "Artisan community support, cultural education integration, heritage technique documentation, and respectful commercialization."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Fast fashion brands copying designs without permission",
        "AI systems generating fashion based on protected designs", 
        "Digital fashion platforms using designs without licensing",
        "Cultural appropriation without community consultation",
        "Complex attribution challenges in collaborative projects",
        "Revenue loss to unauthorized knockoffs and replicas"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated detection and protection against fast fashion copying",
        "AI training consent controls with fair compensation systems",
        "Protected digital fashion with proper licensing for virtual worlds",
        "Cultural sensitivity controls ensuring respectful use and benefit sharing", 
        "Clear collaboration tracking and automated revenue distribution",
        "Complete revenue optimization through protected designs and licensing"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights protect against fast fashion knockoffs?",
      answer: "Our AI detection systems monitor global fashion markets and can identify when fast fashion brands copy protected designs, enabling immediate enforcement actions and licensing negotiations."
    },
    {
      question: "Can Creation Rights help with digital fashion and metaverse applications?",
      answer: "Yes, our system provides comprehensive protection for virtual fashion designs and enables licensing for legitimate use in virtual worlds, gaming, and digital fashion platforms."
    },
    {
      question: "How do you handle traditional and cultural designs respectfully?",
      answer: "Our system includes cultural sensitivity controls that ensure traditional designs are used with proper permissions, community consultation, and benefit sharing with originating communities."
    },
    {
      question: "What happens if someone uses my textile patterns without permission?",
      answer: "Our Content ID Layer automatically detects unauthorized use of patterns and prints across fashion products and can initiate enforcement actions or licensing negotiations based on your preferences."
    },
    {
      question: "How does Creation Rights support sustainable fashion practices?",
      answer: "Our licensing system can include sustainability requirements, ensuring that your designs are only produced by manufacturers meeting environmental and ethical standards."
    },
    {
      question: "Can Creation Rights integrate with my existing design workflow?",
      answer: "Yes, we provide integrations with major fashion design software and 3D modeling tools, enabling seamless rights protection within your existing creative process."
    }
  ];

  const advancedFeatures = [
    {
      category: "Design & Development",
      items: [
        "CAD Software Integration - Direct protection from Adobe Illustrator, CLO 3D",
        "3D Fashion Modeling - Comprehensive rights for virtual prototyping", 
        "Pattern Making Tools - Rights tracking for technical patterns and construction",
        "Textile Design Integration - Protection for surface patterns and fabric innovations"
      ]
    },
    {
      category: "Industry & Business",
      items: [
        "Manufacturing Relations - Automated rights for production partnerships",
        "Retail Integration - Rights verification for fashion retailers and e-commerce",
        "Fashion Week Integration - Protection for runway shows and industry events",
        "Influencer Collaboration Tools - Streamlined licensing for social media partnerships"
      ]
    },
    {
      category: "Sustainability & Culture",
      items: [
        "Sustainable Production Verification - Rights enforcing environmental standards",
        "Cultural Heritage Protection - Respectful licensing with community benefit sharing",
        "Fair Trade Integration - Rights supporting fair labor practices",
        "Circular Fashion Support - Licensing for recycling and sustainable initiatives"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Palette,
      title: "Creative Development",
      description: "Complete design process from inspiration to final product with iteration tracking"
    },
    {
      icon: Users,
      title: "Collaborative Contributions",
      description: "Clear attribution for designers, pattern makers, textile artists, and other contributors"
    },
    {
      icon: Globe,
      title: "Cultural Influences",
      description: "Documentation of inspiration sources with respect for cultural heritage and traditional designs"
    },
    {
      icon: Leaf,
      title: "Material Innovation",
      description: "Tracking of fabric choices, sustainable materials, and technical textile developments"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Fashion"
        subtitle="Comprehensive rights protection for fashion designers and brands"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Fashion is the art of self-expression through design, yet designers face unprecedented challenges protecting their creative work in an era of fast fashion, AI-generated designs, and digital fashion platforms. From runway knockoffs to virtual world replicas, fashion creators need sophisticated tools that preserve creative integrity while enabling legitimate collaboration and innovation.
          </p>
        </div>
      </PageSection>

      {/* The Fashion Industry's IP Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">The Fashion Industry&apos;s IP Crisis</h2>
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

      {/* How Creation Rights Transforms Fashion Protection */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-center">How Creation Rights Transforms Fashion Protection</h2>
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
          <h2 className="text-4xl font-semibold mb-12 text-center">The Provenance Graph</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our comprehensive provenance system captures the complexity of fashion design, from initial inspiration to final production and cultural influences.
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
          <h2 className="text-4xl font-semibold mb-12 text-center">Advanced Features for Fashion</h2>
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

      {/* Fashion Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Fashion Industry Integration</h2>
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
          <h2 className="text-4xl font-semibold mb-12 text-center">Before / After Creation Rights</h2>
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
          <h2 className="text-4xl font-semibold mb-12 text-center">Fashion Industry Success Stories</h2>
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
          <h2 className="text-4xl font-semibold mb-6">Ready to Transform Your Fashion Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading fashion designers and brands who have protected their creative works, automated their licensing processes, and built sustainable fashion businesses through comprehensive rights management that respects cultural heritage and promotes ethical practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Fashion Industry Demo</Link>
            </Button>
          </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
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