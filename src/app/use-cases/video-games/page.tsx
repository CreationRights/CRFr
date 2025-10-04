import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Gamepad2, 
  DollarSign, 
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Search,
  Bot,
  Globe,
  Monitor,
  Zap,
  Code,
  Brush,
  Trophy,
  X
} from "lucide-react";
import Link from "next/link";

export default function VideoGamesPage() {
  const challenges = [
    {
      icon: Users,
      title: "Multi-Disciplinary Creative Complexity",
      description: "Games involve dozens of creative disciplines with overlapping rights",
      details: [
        "Visual assets from concept artists, 3D modelers, and animators",
        "Audio creation from composers, sound designers, and voice actors", 
        "Interactive design from game designers and UX specialists",
        "Narrative elements from writers and dialogue creators"
      ]
    },
    {
      icon: Monitor,
      title: "Platform & Engine Fragmentation",
      description: "Games exist across multiple platforms with different rights requirements",
      details: [
        "Cross-platform distribution with unique licensing requirements",
        "Engine licensing complexity across Unity, Unreal, and proprietary systems",
        "Digital marketplace rights with varying content policies",
        "Emerging platform integration for metaverse and cloud gaming"
      ]
    },
    {
      icon: Bot,
      title: "AI & Asset Theft Threats",
      description: "Artificial intelligence and digital piracy target gaming assets",
      details: [
        "Asset extraction using sophisticated tools for models and textures",
        "AI training appropriation without developer consent",
        "Automated asset generation based on copyrighted content",
        "Cross-game asset migration without authorization"
      ]
    }
  ];

  const solutions = [
    {
      icon: Gamepad2,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive game asset protection and attribution",
      features: [
        "Complete asset registration for all creative elements",
        "Sophisticated gaming licensing for diverse applications",
        "Advanced gaming revenue management with multi-contributor splits",
        "Platform revenue optimization across digital marketplaces"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for gaming content",
      features: [
        "Real-time asset verification for engines and marketplaces",
        "Comprehensive gaming verification with authenticity confirmation",
        "Advanced gaming asset recognition with AI-powered detection",
        "Comprehensive gaming protection against theft and piracy"
      ]
    },
    {
      icon: DollarSign,
      title: "Advanced Gaming Revenue Management",
      description: "Sophisticated monetization for game development",
      features: [
        "Multi-contributor revenue splits with automatic distribution",
        "Platform revenue optimization for digital marketplaces",
        "User-generated content monetization and revenue sharing",
        "Cross-platform revenue tracking across all services"
      ]
    }
  ];

  const successStories = [
    {
      name: "Pixel Forge Games",
      role: "Indie Game Studio",
      challenge: "Distinctive pixel art style and innovative gameplay mechanics being copied by other developers and AI systems",
      results: [
        "$450,000 in asset licensing revenue from legal art style usage",
        "90% reduction in unauthorized asset theft through automated detection",
        "25 legitimate licensing partnerships with indie developers",
        "Enhanced creative recognition as pioneers in pixel art innovation"
      ]
    },
    {
      name: "Mythic Entertainment", 
      role: "AAA Game Studio",
      challenge: "Large-scale productions with hundreds of contributors making rights attribution and revenue sharing complex",
      results: [
        "$2.8M in optimized revenue distribution through accurate tracking",
        "85% reduction in rights disputes through transparent attribution",
        "40% increase in international licensing through clear documentation",
        "Industry leadership in ethical game development and compensation"
      ]
    },
    {
      name: "Immersive Worlds",
      role: "VR Game Developer", 
      challenge: "Groundbreaking VR interaction systems being replicated by competitors and used in AI-generated experiences",
      results: [
        "$680,000 in VR technology licensing to other developers",
        "15 major VR platform partnerships with protected technology",
        "Enhanced innovation protection enabling continued R&D investment",
        "Market leadership in ethical VR development and technology sharing"
      ]
    }
  ];

  const features = [
    {
      icon: Code,
      title: "Game Engine Integration",
      description: "Unity integration, Unreal Engine support, proprietary engine compatibility, and cross-engine asset tracking."
    },
    {
      icon: Users,
      title: "Community & Modding Support",
      description: "Modding framework integration, user-generated content tools, community revenue sharing, and fan creation support."
    },
    {
      icon: Trophy,
      title: "Esports & Competitive Gaming",
      description: "Tournament broadcasting rights, player performance rights, team licensing, and spectator experience management."
    },
    {
      icon: Globe,
      title: "Metaverse Integration Leadership",
      description: "Cross-platform avatar rights, virtual asset trading, metaverse world building, and social gaming rights."
    },
    {
      icon: Bot,
      title: "AI Collaboration Framework",
      description: "AI-assisted development, procedural generation rights, player behavior AI, and dynamic content generation."
    },
    {
      icon: Zap,
      title: "Cloud Gaming Innovation",
      description: "Streaming platform rights, cross-device gaming, social integration rights, and performance analytics management."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Complex manual asset attribution tracking",
        "Unauthorized asset theft and copying", 
        "Difficult multi-contributor revenue sharing",
        "Limited protection against AI appropriation",
        "Modding community rights confusion",
        "Revenue leakage across gaming platforms"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated comprehensive asset documentation and attribution",
        "Real-time detection and protection against unauthorized usage",
        "Transparent multi-contributor revenue distribution and tracking",
        "Protected assets with AI training consent controls", 
        "Clear modding frameworks supporting community creativity",
        "Complete revenue optimization across all gaming platforms and services"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights handle complex game development with multiple contributors?",
      answer: "Our system automatically tracks individual contributions from artists, programmers, designers, and other team members, enabling fair attribution and revenue sharing based on actual creative input."
    },
    {
      question: "Can Creation Rights integrate with our existing game development pipeline?",
      answer: "Yes, we provide integrations with Unity, Unreal Engine, and other major game development tools, enabling seamless rights tracking throughout the development process."
    },
    {
      question: "How do you balance developer rights with legitimate modding and fan creation?",
      answer: "Our flexible licensing system enables developers to support community creativity while protecting their IP, with automated systems that distinguish between legitimate fan content and commercial infringement."
    },
    {
      question: "What happens if someone uses our game assets in another game without permission?",
      answer: "Our Content ID Layer automatically detects unauthorized asset usage across gaming platforms and can initiate enforcement actions, licensing negotiations, or legal procedures based on your preferences."
    },
    {
      question: "How does Creation Rights support cross-platform game distribution?",
      answer: "We provide comprehensive rights management that adapts to different platform requirements, enabling seamless distribution across PC, console, mobile, and emerging gaming platforms."
    },
    {
      question: "Can Creation Rights help with esports and competitive gaming rights?",
      answer: "Yes, our system includes specialized tools for tournament broadcasting, player performance rights, and competitive gaming event management with proper rights attribution and revenue sharing."
    }
  ];

  const advancedFeatures = [
    {
      category: "Development & Tools",
      items: [
        "Unity Integration - Direct asset protection within Unity workflows",
        "Unreal Engine Integration - Comprehensive rights for Unreal projects", 
        "Proprietary Engine Support - Custom integration for proprietary tools",
        "Cross-Engine Asset Tracking - Rights management across multiple engines"
      ]
    },
    {
      category: "Community & Monetization",
      items: [
        "Modding Framework Integration - Rights supporting legitimate modding",
        "User-Generated Content Tools - Platforms for player-created content",
        "Community Revenue Sharing - Systems for sharing revenue with creators",
        "Fan Art and Creation Support - Licensing frameworks for fan creativity"
      ]
    },
    {
      category: "Emerging Technologies",
      items: [
        "Metaverse Integration - Rights for virtual worlds and cross-platform avatars",
        "AI Collaboration Tools - Rights for AI-assisted development and generation",
        "Cloud Gaming Support - Rights for streaming platforms and cross-device gaming",
        "Esports Management - Tournament broadcasting and competitive gaming rights"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Brush,
      title: "Creative Pipeline Documentation",
      description: "Complete workflow from concept to implementation with contributor attribution"
    },
    {
      icon: TrendingUp,
      title: "Asset Evolution Tracking",
      description: "How creative elements develop through iteration and collaborative refinement"
    },
    {
      icon: Code,
      title: "Engine Integration Records",
      description: "Documentation of how assets are implemented across different engines and platforms"
    },
    {
      icon: Users,
      title: "Collaborative Contributions",
      description: "Clear attribution for team members, contractors, and external collaborators"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Video Games"
        subtitle="Comprehensive rights management for the gaming industry"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Video games are the most interactive and collaborative entertainment medium, combining art, music, storytelling, and technology in ways that create unprecedented creative value. Yet game developers face constant threats from asset theft, unauthorized modifications, and AI systems that scrape their creative work without permission or compensation.
          </p>
        </div>
      </PageSection>

      {/* The Gaming Industry's IP Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">The Gaming Industry&apos;s IP Crisis</h2>
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

      {/* How Creation Rights Transforms Game Development */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-center">How Creation Rights Transforms Game Development</h2>
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
            Our comprehensive provenance system captures the complexity of game development, from initial concept to final implementation across platforms.
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
          <h2 className="text-4xl font-semibold mb-12 text-center">Advanced Features for Gaming</h2>
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

      {/* Gaming Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Gaming Industry Integration</h2>
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
          <h2 className="text-4xl font-semibold mb-12 text-center">Gaming Industry Success Stories</h2>
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
          <h2 className="text-4xl font-semibold mb-6">Ready to Transform Your Game Development?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading game studios and independent developers who have protected their creative assets, automated their revenue distribution, and built sustainable gaming businesses through comprehensive rights management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Gaming Industry Demo</Link>
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