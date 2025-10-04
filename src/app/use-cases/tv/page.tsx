import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Tv, 
  DollarSign, 
  CheckCircle,
  Star,
  Users,
  Search,
  Globe,
  Lightbulb,
  Monitor,
  Music,
  Zap,
  Calendar,
  Award,
  BookOpen,
  X
} from "lucide-react";
import Link from "next/link";

export default function TVPage() {
  const challenges = [
    {
      icon: Calendar,
      title: "Serialized Content Complexity",
      description: "TV shows involve ongoing creative relationships and evolving rights",
      details: [
        "Multi-season development with different creative teams",
        "Episodic rights management for individual clearances", 
        "Character evolution creating complex ownership scenarios",
        "Showrunner changes complicating rights and creative control"
      ]
    },
    {
      icon: Globe,
      title: "Platform Proliferation Challenges",
      description: "TV content appears across dozens of platforms with different requirements",
      details: [
        "Streaming platform variations with unique licensing terms",
        "International distribution requiring territory-specific clearances",
        "Syndication complexity with revenue sharing restrictions",
        "Digital platform rights for social media and marketing"
      ]
    },
    {
      icon: Music,
      title: "Music & Asset Clearance Complexity",
      description: "TV shows incorporate vast amounts of third-party content",
      details: [
        "Music licensing challenges for synchronization rights",
        "Stock footage complications with archival content",
        "Brand integration issues requiring careful rights management",
        "Location and property rights for filming clearances"
      ]
    }
  ];

  const solutions = [
    {
      icon: Tv,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive TV production rights documentation",
      features: [
        "Complete series registration for all creative elements",
        "Sophisticated TV licensing for complex distribution",
        "Advanced TV revenue management with multi-party splits",
        "Union residual automation across all platforms"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for television content",
      features: [
        "Real-time production clearance for broadcasters and platforms",
        "Comprehensive TV verification for episodes and characters",
        "Advanced TV content recognition with AI-powered detection",
        "Comprehensive TV protection against piracy and AI threats"
      ]
    },
    {
      icon: DollarSign,
      title: "Sophisticated TV Licensing",
      description: "Flexible rights management for complex television distribution",
      features: [
        "Distribution window management for all platforms",
        "Platform-specific licensing for streaming services",
        "Territory management with cultural adaptation",
        "Format rights for international adaptations"
      ]
    }
  ];

  const successStories = [
    {
      name: "Quantum Horizons",
      role: "Streaming Original Series",
      challenge: "Complex international co-production with extensive VFX, licensed music, and character rights across multiple platforms",
      results: [
        "$2.1M in international licensing revenue from format sales",
        "95% reduction in clearance disputes through automated verification",
        "30% increase in merchandising revenue through protected licensing",
        "Enhanced international expansion through clear documentation"
      ]
    },
    {
      name: "Master Creators", 
      role: "Reality Competition Series",
      challenge: "Complex contestant agreements, format protection for international sales, and diverse music licensing across seasons",
      results: [
        "$850,000 in format licensing revenue from 12 international adaptations",
        "80% reduction in contestant rights disputes through documentation",
        "25 international format sales with protected intellectual property",
        "Industry recognition as leaders in ethical reality TV production"
      ]
    },
    {
      name: "Future Legends",
      role: "Animated Series", 
      challenge: "Protecting original characters across multiple media while managing complex international licensing",
      results: [
        "$1.8M in character licensing revenue from transmedia adaptations",
        "50% increase in international distribution through streamlined rights",
        "18 major brand partnerships with protected character licensing",
        "Enhanced creative control through comprehensive character protection"
      ]
    }
  ];

  const features = [
    {
      icon: Monitor,
      title: "Production Workflow Integration",
      description: "Writers&apos; room integration, post-production rights, music supervision tools, and international version management."
    },
    {
      icon: Globe,
      title: "Distribution Optimization",
      description: "Streaming platform optimization, syndication management, international sales support, and format sales integration."
    },
    {
      icon: Users,
      title: "Character & IP Management",
      description: "Character development tracking, spin-off rights management, merchandising integration, and transmedia rights."
    },
    {
      icon: Zap,
      title: "Streaming Era Leadership",
      description: "Binge-watching optimization, global simultaneous release, interactive content rights, and social media integration."
    },
    {
      icon: Award,
      title: "International Format Innovation",
      description: "Format protection technology, cultural adaptation rights, co-production management, and talent exchange programs."
    },
    {
      icon: Lightbulb,
      title: "Next-Generation TV Technology",
      description: "Virtual production rights, AI-assisted production, immersive experience rights, and personalized content rights."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Complex manual series rights tracking",
        "Clearance disputes and delays", 
        "Limited international format sales",
        "Character rights confusion across seasons",
        "Union compliance challenges",
        "Revenue leakage from poor tracking"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated comprehensive series documentation",
        "Real-time clearance verification and dispute prevention",
        "Streamlined international format licensing and sales",
        "Clear character rights evolution and protection", 
        "Seamless union compliance and residual automation",
        "Complete revenue optimization and transparent tracking"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights handle complex TV series with multiple seasons and changing creative teams?",
      answer: "Our system tracks rights evolution across seasons, documenting how creative contributions and ownership develop over time while maintaining clear attribution for all contributors."
    },
    {
      question: "Can Creation Rights integrate with our existing post-production and distribution workflows?",
      answer: "Yes, we provide integrations with major editing systems, post-production pipelines, and distribution platforms, enabling seamless rights tracking throughout the production process."
    },
    {
      question: "How do you handle international format sales and adaptation rights?",
      answer: "Our system provides comprehensive format protection and licensing, enabling international sales while protecting original creative elements and ensuring proper revenue sharing."
    },
    {
      question: "What happens if someone creates unauthorized content based on our TV show characters?",
      answer: "Our Content ID Layer detects unauthorized use of characters and storylines, enabling enforcement actions, licensing negotiations, or legal procedures based on your preferences."
    },
    {
      question: "How does Creation Rights support streaming platform distribution?",
      answer: "We provide platform-specific rights management optimized for different streaming services, including binge-watching patterns, global distribution, and platform-specific licensing requirements."
    },
    {
      question: "Can Creation Rights help with music licensing and clearance for TV productions?",
      answer: "Yes, our system includes comprehensive music licensing tools with real-time clearance verification and automated synchronization rights management."
    }
  ];

  const advancedFeatures = [
    {
      category: "Production Integration",
      items: [
        "Writers&apos; Room Integration - Real-time rights tracking for collaborative writing",
        "Post-Production Integration - Rights management for editing and VFX workflows", 
        "Music Supervision Tools - Comprehensive licensing and clearance management",
        "International Version Management - Rights tracking for dubbed and adapted versions"
      ]
    },
    {
      category: "Distribution & Sales",
      items: [
        "Streaming Platform Optimization - Customized metadata for different services",
        "Syndication Management - Comprehensive documentation for broadcast reruns",
        "International Sales Support - Rights documentation for television markets",
        "Format Sales Integration - Protection and licensing for show formats"
      ]
    },
    {
      category: "Innovation & Technology",
      items: [
        "Interactive Content Rights - Protection for choose-your-own-adventure TV",
        "Virtual Production Rights - Protection for virtual sets and real-time rendering",
        "AI-Assisted Production - Rights management for AI tools in production",
        "Immersive Experience Rights - Protection for VR and AR television experiences"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: BookOpen,
      title: "Series Bible Documentation",
      description: "Complete creative vision, character development, and story arc planning"
    },
    {
      icon: Users,
      title: "Writers&apos; Room Contributions",
      description: "Individual writer contributions to episodes, characters, and story development"
    },
    {
      icon: Calendar,
      title: "Production Timeline",
      description: "Season-by-season development with creative team changes and evolution"
    },
    {
      icon: Globe,
      title: "International Adaptations",
      description: "Documentation of format rights and international version development"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="TV"
        subtitle="Comprehensive rights management for television production"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Television is the most complex media format, involving serialized storytelling, multiple seasons, diverse distribution platforms, and intricate creative collaborations. Yet the industry relies on outdated rights management systems that can&apos;t handle modern streaming, international distribution, and AI-generated content threats.
          </p>
        </div>
      </PageSection>

      {/* The Television Industry's Rights Challenge */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">The Television Industry&apos;s Rights Challenge</h2>
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

      {/* How Creation Rights Transforms Television Production */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-center">How Creation Rights Transforms Television Production</h2>
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
            Our comprehensive provenance system captures the complexity of television production, from series development to international adaptations.
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
          <h2 className="text-4xl font-semibold mb-12 text-center">Advanced Features for Television</h2>
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

      {/* Television Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Television Industry Integration</h2>
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
          <h2 className="text-4xl font-semibold mb-12 text-center">Television Success Stories</h2>
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
          <h2 className="text-4xl font-semibold mb-6">Ready to Transform Your Television Production?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading television studios and production companies who have streamlined their series rights management, automated residual payments, and protected their creative works through comprehensive digital solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule TV Industry Demo</Link>
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