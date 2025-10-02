import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Film, 
  DollarSign, 
  CheckCircle,
  X,
  Star,
  Lock,
  TrendingUp,
  Users,
  Search,
  Bot,
  Globe,
  Camera,
  Lightbulb,
  Play,
  Clapperboard
} from "lucide-react";
import Link from "next/link";

export default function FilmPage() {
  const challenges = [
    {
      icon: X,
      title: "Multi-Party Rights Complexity",
      description: "Every film involves dozens of creators with overlapping rights",
      details: [
        "Creative contributions from writers, directors, producers, and actors",
        "Intellectual property layers with scripts, music, and character rights", 
        "Union requirements with specific residual and credit obligations",
        "International complications with varying moral and resale rights"
      ]
    },
    {
      icon: Bot,
      title: "AI & Digital Threats",
      description: "Artificial intelligence creates new challenges for film protection",
      details: [
        "Deepfake technology replicating actors without permission",
        "Scene recreation through machine learning systems",
        "Unauthorized derivatives created by AI tools",
        "Training data appropriation without creator consent"
      ]
    },
    {
      icon: TrendingUp,
      title: "Distribution & Licensing Challenges",
      description: "Modern film distribution spans multiple platforms and territories",
      details: [
        "Windowing complexity across theatrical, streaming, and digital",
        "Platform-specific rights for Netflix, Amazon, Disney+",
        "Regional variations with territory-specific requirements",
        "Revenue tracking difficulty across complex streams"
      ]
    }
  ];

  const solutions = [
    {
      icon: Film,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive film rights documentation and protection",
      features: [
        "Complete production registration for all creative contributions",
        "Sophisticated film licensing for complex distribution needs",
        "Advanced revenue management with multi-party splits",
        "Union compliance integration with automated residuals"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for film content",
      features: [
        "Real-time clearance verification for distributors and platforms",
        "Comprehensive film verification with music and talent rights",
        "Advanced film recognition across scenes and performances",
        "Comprehensive film protection against piracy and AI threats"
      ]
    },
    {
      icon: DollarSign,
      title: "Sophisticated Film Licensing",
      description: "Flexible rights management for complex distribution needs",
      features: [
        "Distribution windows for theatrical, streaming, and broadcast",
        "Territory management with cultural sensitivity compliance",
        "Platform-specific terms for major streaming services",
        "Derivative rights control for sequels and transmedia"
      ]
    }
  ];

  const successStories = [
    {
      name: "Meridian Pictures",
      role: "Independent Film Studio",
      challenge: "Complex financing structures with multiple investors, international co-producers, and overwhelming union requirements",
      results: [
        "$850,000 in recovered revenue from untracked international sales",
        "90% reduction in residual calculation errors through automation",
        "25% increase in international sales due to clear documentation",
        "Enhanced investor confidence through transparent tracking"
      ]
    },
    {
      name: "Truth Lens Media", 
      role: "Documentary Production Company",
      challenge: "Extensive archival footage, music licensing, and interview releases creating complex rights webs",
      results: [
        "$320,000 in licensing revenue from properly cleared materials",
        "80% reduction in clearance time through automated verification",
        "15 major streaming deals enabled by comprehensive documentation",
        "Industry recognition as leaders in ethical production practices"
      ]
    },
    {
      name: "Pixel Dreams Animation",
      role: "Animation Studio", 
      challenge: "Protecting original characters across multiple media while managing complex international licensing",
      results: [
        "$1.2M in character licensing revenue from transmedia adaptations",
        "40% increase in international distribution through streamlined rights",
        "12 major brand partnerships with protected character licensing",
        "Enhanced creative control through comprehensive character protection"
      ]
    }
  ];

  const features = [
    {
      icon: Clapperboard,
      title: "Production Integration",
      description: "Editing suite integration, VFX pipeline rights, sound design protection, and color grading rights management."
    },
    {
      icon: Globe,
      title: "Distribution Optimization",
      description: "Platform optimization, international sales support, festival strategy, and theatrical distribution integration."
    },
    {
      icon: Play,
      title: "Transmedia Rights Management",
      description: "Sequel and remake rights, merchandise licensing, gaming rights, and publishing opportunities."
    },
    {
      icon: Lightbulb,
      title: "Streaming Era Adaptation",
      description: "Platform-agnostic rights, global simultaneous release, and interactive content rights management."
    },
    {
      icon: Bot,
      title: "AI Collaboration Framework",
      description: "AI-assisted production rights, synthetic performance licensing, and automated editing protection."
    },
    {
      icon: Camera,
      title: "Virtual Production Innovation",
      description: "Virtual set rights, motion capture management, and metaverse integration for film content."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Complex manual rights tracking",
        "Residual calculation errors and delays", 
        "Difficult international distribution",
        "Piracy and unauthorized use threats",
        "Union compliance challenges",
        "Limited revenue stream visibility"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated comprehensive rights management",
        "Accurate real-time residual calculations",
        "Streamlined global distribution and sales",
        "Protected content with AI threat detection", 
        "Seamless union compliance and reporting",
        "Complete revenue tracking and optimization"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights handle complex film financing and profit participation agreements?",
      answer: "Our system automatically tracks and distributes revenue according to complex waterfall structures, backend deals, and profit participation agreements, ensuring accurate and transparent financial management."
    },
    {
      question: "Can Creation Rights integrate with our existing post-production workflow?",
      answer: "Yes, we provide integrations with major editing systems, VFX pipelines, and post-production tools, enabling seamless rights tracking throughout the production process."
    },
    {
      question: "How do you handle union residual requirements and guild compliance?",
      answer: "Our system automatically calculates and distributes residuals according to WGA, DGA, SAG-AFTRA, and other union requirements, ensuring full compliance with guild agreements."
    },
    {
      question: "What happens if someone creates an AI-generated film based on our work?",
      answer: "Our Content ID Layer detects AI-generated derivatives and can initiate enforcement actions, licensing negotiations, or legal procedures based on your preferences and the sophistication of the copying."
    },
    {
      question: "How does Creation Rights support international film distribution?",
      answer: "We provide comprehensive international rights management with automatic adaptation to local laws, cultural requirements, and territorial licensing needs."
    },
    {
      question: "Can Creation Rights help with film festival strategy and rights management?",
      answer: "Yes, our system includes specialized tools for festival circuits, including screening rights, territorial restrictions, and award campaign support."
    }
  ];

  const advancedFeatures = [
    {
      category: "Production Workflow",
      items: [
        "Editing Suite Integration - Direct protection from Avid, Premiere Pro systems",
        "VFX Pipeline Integration - Rights management for visual effects assets", 
        "Sound Design Protection - Comprehensive audio rights tracking",
        "Color Grading Rights - Protection for distinctive visual treatments"
      ]
    },
    {
      category: "Distribution & Sales",
      items: [
        "Platform Optimization - Customized metadata for streaming services",
        "International Sales Support - Comprehensive documentation for film markets",
        "Festival Strategy - Rights management for festival circuits",
        "Theatrical Distribution - Integration with cinema chains"
      ]
    },
    {
      category: "Future Innovation",
      items: [
        "AI-Assisted Production - Rights management for AI tools in filmmaking",
        "Virtual Production - Protection for digital environments and techniques",
        "Interactive Content - Rights for choose-your-own-adventure experiences",
        "Metaverse Integration - Film content rights in virtual worlds"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Film,
      title: "Creative Lineage",
      description: "Complete history of script development, rewrites, and creative evolution"
    },
    {
      icon: Camera,
      title: "Production Timeline",
      description: "Detailed documentation of filming, post-production, and creative decisions"
    },
    {
      icon: Lock,
      title: "Rights Clearances",
      description: "Comprehensive tracking of licensed music, stock footage, and third-party materials"
    },
    {
      icon: Users,
      title: "Union Compliance",
      description: "Automatic documentation of guild requirements and residual obligations"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Film"
        subtitle="Comprehensive rights management for the modern film industry"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Filmmaking is the ultimate collaborative art form, involving dozens of creators, complex intellectual property, and intricate financial arrangements. Yet the industry struggles with outdated rights management systems that can&apos;t keep pace with digital distribution, AI-generated content, and global streaming platforms.
          </p>
        </div>
      </PageSection>

      {/* The Film Industry's Rights Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Film Industry&apos;s Rights Crisis</h2>
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

      {/* How Creation Rights Transforms Film Production */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Film Production</h2>
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
            Our comprehensive provenance system captures the complexity of film production, from script development to final distribution.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Film</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Film Industry Integration</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Film Industry Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Film Production?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading film studios and production companies who have streamlined their rights management, automated residual payments, and protected their creative works through comprehensive digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Film Industry Demo</Link>
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