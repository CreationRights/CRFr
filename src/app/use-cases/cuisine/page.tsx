import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  ChefHat, 
  DollarSign, 
  CheckCircle,
  Star,
  Users,
  Search,
  Bot,
  Globe,
  Monitor,
  Lightbulb,
  Heart,
  Utensils,
  Leaf,
  X
} from "lucide-react";
import Link from "next/link";

export default function CuisinePage() {
  const challenges = [
    {
      icon: Utensils,
      title: "Recipe & Technique Theft",
      description: "Original culinary creations are constantly stolen and commercialized",
      details: [
        "Recipe appropriation with signature dishes copied without attribution",
        "Technique replication with proprietary cooking methods used without permission", 
        "Plating style copying with distinctive presentation styles replicated",
        "Content farm exploitation stealing recipes and food photography for ad revenue"
      ]
    },
    {
      icon: Bot,
      title: "AI-Generated Culinary Content",
      description: "Artificial intelligence creates new challenges for culinary protection",
      details: [
        "Recipe generation with AI creating derivatives from copyrighted content",
        "Food photography replication mimicking distinctive styling and presentation",
        "Cooking video synthesis creating instructional content from protected techniques",
        "Menu development AI generating restaurant menus using protected concepts"
      ]
    },
    {
      icon: Globe,
      title: "Cultural Appropriation & Attribution",
      description: "Traditional and cultural cuisines face exploitation without proper recognition",
      details: [
        "Cultural recipe exploitation with traditional dishes commercialized without attribution",
        "Fusion cuisine disputes with cultural creations used without crediting origins",
        "Traditional technique appropriation with ancient methods commercialized inappropriately",
        "Regional specialty copying without regional attribution or compensation"
      ]
    }
  ];

  const solutions = [
    {
      icon: ChefHat,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive culinary creation protection and attribution",
      features: [
        "Complete culinary registration for all creative elements",
        "Sophisticated culinary licensing for diverse applications",
        "Advanced culinary revenue management with multi-party splits",
        "Cultural sensitivity controls and attribution requirements"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for culinary content",
      features: [
        "Real-time culinary verification for restaurants and publishers",
        "Comprehensive culinary verification with recipe authenticity",
        "Advanced culinary recognition with AI-powered detection",
        "Comprehensive culinary protection against theft and appropriation"
      ]
    },
    {
      icon: DollarSign,
      title: "Advanced Culinary Revenue Management",
      description: "Sophisticated monetization for culinary creators",
      features: [
        "Multi-party revenue splits for chefs and cultural communities",
        "Restaurant partnership revenue with commercial implementation",
        "Publishing and media revenue for cookbook and content inclusion",
        "Cultural community compensation with respectful benefit sharing"
      ]
    }
  ];

  const successStories = [
    {
      name: "Maria Santos",
      role: "Fusion Chef",
      challenge: "Innovative Latin-Asian fusion dishes being copied by chain restaurants without attribution to her or cultural communities",
      results: [
        "$180,000 in annual licensing revenue from restaurants featuring fusion concepts legally",
        "90% improvement in cultural attribution through automated community crediting",
        "15 major restaurant partnerships with respectful cultural collaboration",
        "Enhanced cultural relationships through transparent attribution and benefit sharing"
      ]
    },
    {
      name: "Heritage Flavors", 
      role: "Traditional Cuisine Collective",
      challenge: "Ancestral recipes being commercialized by food companies without cultural consultation or community benefit",
      results: [
        "$120,000 in cultural heritage licensing revenue shared with cooking communities",
        "100% cultural consultation compliance for all traditional recipe usage",
        "8 major food company partnerships with respectful cultural collaboration",
        "Enhanced cultural preservation through documented traditional techniques"
      ]
    },
    {
      name: "Chef Digital",
      role: "Culinary Content Creator", 
      challenge: "Cooking videos and recipes being stolen by content farms and used by AI systems without attribution",
      results: [
        "$95,000 in content licensing revenue from legitimate media outlets",
        "85% reduction in content theft through automated detection and enforcement",
        "20 major media partnerships with proper attribution and fair compensation",
        "Enhanced digital presence through protected content and verified authenticity"
      ]
    }
  ];

  const features = [
    {
      icon: Utensils,
      title: "Culinary Creation Integration",
      description: "Recipe management integration, food photography protection, video content integration, and cultural documentation tools."
    },
    {
      icon: Heart,
      title: "Restaurant Industry Support",
      description: "Menu development rights, franchise licensing, supplier relations, and staff training integration."
    },
    {
      icon: Globe,
      title: "Cultural Heritage Integration",
      description: "Traditional recipe protection, cultural community partnerships, cultural education integration, and authenticity verification."
    },
    {
      icon: Monitor,
      title: "Digital Culinary Innovation",
      description: "AI culinary collaboration, virtual cooking experiences, smart kitchen integration, and digital menu innovation."
    },
    {
      icon: Leaf,
      title: "Sustainable Culinary Practices",
      description: "Sustainable ingredient innovation, local food system support, zero waste culinary innovation, and ethical sourcing integration."
    },
    {
      icon: Users,
      title: "Cultural Culinary Exchange",
      description: "Cross-cultural collaboration, cultural education programs, community benefit integration, and cultural authenticity standards."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Signature recipes copied by competitors without attribution",
        "AI systems generating derivative dishes from protected content", 
        "Traditional cuisines commercialized without cultural consultation",
        "Food content stolen by platforms without creator compensation",
        "Complex cultural attribution challenges in fusion cuisine",
        "Revenue loss from unauthorized recipe commercialization"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated detection and protection against recipe theft with attribution",
        "AI training consent controls with fair compensation for culinary creators",
        "Cultural sensitivity controls ensuring respectful traditional cuisine usage",
        "Protected food content with proper licensing and creator compensation", 
        "Clear cultural attribution tracking and automated community benefit sharing",
        "Complete revenue optimization through protected recipes and licensing opportunities"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights protect traditional recipes while respecting cultural heritage?",
      answer: "Our system includes cultural sensitivity controls that ensure traditional recipes are used with proper community consultation, attribution, and benefit sharing with originating communities."
    },
    {
      question: "Can Creation Rights help me license my recipes to restaurants and food companies?",
      answer: "Yes, our system provides comprehensive licensing tools for restaurant partnerships, food company collaborations, and commercial recipe implementation with transparent revenue sharing."
    },
    {
      question: "How do you handle fusion cuisine that combines multiple cultural influences?",
      answer: "Our system tracks and attributes all cultural influences in fusion dishes, ensuring proper recognition and benefit sharing with all contributing cultural communities."
    },
    {
      question: "What happens if someone uses my signature dish without permission?",
      answer: "Our Content ID Layer detects unauthorized recipe usage and can initiate licensing negotiations or enforcement actions based on your preferences and cultural sensitivity requirements."
    },
    {
      question: "How does Creation Rights support culinary education and cooking schools?",
      answer: "We provide specialized educational licensing that supports culinary training while ensuring fair compensation for recipe creators and proper cultural attribution."
    },
    {
      question: "Can Creation Rights integrate with my existing recipe management and restaurant systems?",
      answer: "Yes, we provide integrations with major culinary software, recipe databases, and restaurant management systems, enabling seamless rights protection within existing workflows."
    }
  ];

  const advancedFeatures = [
    {
      category: "Creation & Documentation",
      items: [
        "Recipe Management Integration - Direct protection from culinary software and databases",
        "Food Photography Protection - Rights management for food styling and photography", 
        "Video Content Integration - Protection for cooking demonstrations and education",
        "Cultural Documentation Tools - Respectful documentation of traditional cuisines"
      ]
    },
    {
      category: "Industry & Business",
      items: [
        "Menu Development Rights - Protection for signature dishes and restaurant concepts",
        "Franchise Licensing - Rights management for restaurant franchising and replication",
        "Supplier Relations - Rights management for ingredient sourcing partnerships",
        "Staff Training Integration - Protection for proprietary training methods"
      ]
    },
    {
      category: "Culture & Sustainability",
      items: [
        "Traditional Recipe Protection - Respectful documentation of ancestral knowledge",
        "Cultural Community Partnerships - Revenue sharing and benefit programs",
        "Sustainable Ingredient Innovation - Protection for eco-friendly cooking methods",
        "Ethical Sourcing Integration - Rights supporting fair trade and ethical procurement"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: ChefHat,
      title: "Creative Development",
      description: "Complete recipe development process from inspiration to final dish"
    },
    {
      icon: Globe,
      title: "Cultural Heritage",
      description: "Respectful documentation of traditional influences and cultural contributions"
    },
    {
      icon: Users,
      title: "Collaborative Contributions",
      description: "Attribution for co-chefs, food stylists, photographers, and cultural consultants"
    },
    {
      icon: Lightbulb,
      title: "Innovation Documentation",
      description: "Recording of unique techniques, equipment innovations, and culinary breakthroughs"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Cuisine"
        subtitle="Comprehensive rights protection for culinary creators and food innovators"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Culinary arts represent the intersection of creativity, culture, and innovation, yet chefs and food creators face unprecedented challenges protecting their intellectual property in the digital age. From recipe theft and unauthorized commercialization to AI systems generating derivative dishes without attribution, culinary professionals need sophisticated tools that preserve creative integrity while enabling legitimate collaboration and cultural exchange.
          </p>
        </div>
      </PageSection>

      {/* The Culinary Industry's Rights Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Culinary Industry&apos;s Rights Crisis</h2>
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

      {/* How Creation Rights Transforms Culinary Protection */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Culinary Protection</h2>
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
            Our comprehensive provenance system captures the complexity of culinary creation, from recipe development to cultural heritage and collaborative contributions.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Cuisine</h2>
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

      {/* Culinary Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Culinary Industry Integration</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Culinary Industry Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Culinary Career?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading chefs and culinary creators who have protected their recipes, automated their licensing processes, and built sustainable culinary businesses through comprehensive rights management that respects cultural heritage while promoting culinary innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Culinary Industry Demo</Link>
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