import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Trophy, 
  DollarSign, 
  CheckCircle,
  Star,
  Users,
  Search,
  Globe,
  Monitor,
  Heart,
  Share2,
  Video,
  Activity,
  X
} from "lucide-react";
import Link from "next/link";

export default function SportsPage() {
  const challenges = [
    {
      icon: Video,
      title: "Massive Content Volume & Usage",
      description: "Sports generate enormous amounts of valuable content with complex ownership",
      details: [
        "Game footage and highlights with thousands of hours having overlapping broadcast, league, and athlete rights",
        "Athlete likenesses and performances used across social media, gaming, and commercial applications", 
        "Interview and media content with press conferences and behind-the-scenes content having complex attribution",
        "Fan-generated content with user-created highlights and compilations having unclear rights boundaries"
      ]
    },
    {
      icon: Share2,
      title: "Unauthorized Usage Explosion",
      description: "Sports content is constantly used without proper licensing",
      details: [
        "Social media highlight theft with viral sports moments shared without athlete compensation",
        "AI simulation and gaming with athlete likenesses used in video games without consent",
        "Commercial exploitation with sports content used in advertising without proper licensing",
        "Deepfake and synthetic content with AI-generated athlete endorsements created without permission"
      ]
    },
    {
      icon: Users,
      title: "Complex Rights Ownership",
      description: "Sports involve intricate stakeholder relationships",
      details: [
        "Multi-party rights with athletes, teams, leagues, broadcasters, and sponsors having overlapping interests",
        "International licensing with global sports content distribution having varying territorial requirements",
        "Collective bargaining complexity with union agreements affecting individual athlete rights",
        "Amateur vs. professional rights with different frameworks for collegiate and professional athletes"
      ]
    }
  ];

  const solutions = [
    {
      icon: Trophy,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive sports content protection and athlete rights management",
      features: [
        "Complete sports content registration with detailed documentation of all sports-related assets",
        "Sophisticated sports licensing for diverse applications including broadcast, social media, and gaming",
        "Advanced sports revenue management with multi-party revenue splits and performance-based compensation",
        "Performance-based licensing with rights tied to specific athletic achievements and milestones"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for sports content",
      features: [
        "Real-time sports verification with instant confirmation of usage rights across all applications",
        "Comprehensive sports verification with athlete consent confirmation and league authorization",
        "Advanced sports recognition with AI-powered detection of athletes and performances",
        "Comprehensive sports protection against unauthorized highlights and commercial usage"
      ]
    },
    {
      icon: DollarSign,
      title: "Advanced Sports Revenue Management",
      description: "Sophisticated monetization for athletes and sports organizations",
      features: [
        "Multi-party revenue splits with automated distribution among all stakeholders",
        "Performance-based compensation with revenue sharing tied to athletic performance",
        "International royalty collection with global revenue tracking and territorial compliance",
        "Viral moment monetization with automated revenue collection for popular sports content"
      ]
    }
  ];

  const successStories = [
    {
      name: "Global Football Alliance",
      role: "Professional Soccer League",
      challenge: "Managing complex broadcast rights across 50+ countries while protecting individual player rights and enabling fan engagement",
      results: [
        "$15M in optimized broadcast revenue through enhanced rights management and territorial licensing",
        "90% improvement in player compensation through automated revenue sharing and performance-based payments",
        "40% increase in fan engagement through legitimate fan content licensing and social media integration",
        "Enhanced league reputation through fair player compensation and fan-friendly content policies"
      ]
    },
    {
      name: "Maria Santos", 
      role: "Tennis Champion",
      challenge: "Tennis performances and training content being used without permission across social media and gaming applications with no compensation",
      results: [
        "$280,000 in annual licensing revenue from legitimate gaming, social media, and commercial applications",
        "95% reduction in unauthorized usage through automated detection and enforcement across platforms",
        "25 major brand partnerships with protected content usage and fair compensation terms",
        "Enhanced personal brand through comprehensive rights protection and verified authenticity"
      ]
    },
    {
      name: "University Sports Network",
      role: "College Athletic Program", 
      challenge: "Protecting student-athlete rights while maintaining NCAA compliance and enabling legitimate fan engagement and educational content",
      results: [
        "$150,000 in program revenue through legitimate licensing while maintaining amateur status compliance",
        "100% NCAA compliance with automated checking and student-athlete rights protection",
        "50% increase in fan engagement through legitimate fan content and social media integration",
        "Enhanced student-athlete experience through fair rights protection and educational opportunities"
      ]
    }
  ];

  const features = [
    {
      icon: Activity,
      title: "Sports Technology Integration",
      description: "Broadcast production integration, sports analytics platforms, gaming and simulation integration, and social media management."
    },
    {
      icon: Trophy,
      title: "Athlete Services",
      description: "Personal brand management, performance content protection, fan engagement tools, and career development support."
    },
    {
      icon: Users,
      title: "League and Team Management",
      description: "Multi-athlete rights management, broadcast rights optimization, sponsor integration management, and fan content strategy."
    },
    {
      icon: Monitor,
      title: "Digital Sports Innovation",
      description: "Virtual reality sports, AI sports analytics, esports integration, and interactive sports media."
    },
    {
      icon: Heart,
      title: "Athlete Empowerment",
      description: "Direct fan monetization, performance-based revenue, long-term career support, and global rights protection."
    },
    {
      icon: Globe,
      title: "Fan Community Integration",
      description: "Fan content licensing, community revenue sharing, educational content support, and cultural sports heritage."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Massive sports content volume with complex ownership creating rights management chaos",
        "Unauthorized usage explosion with viral sports moments shared without athlete compensation", 
        "Complex rights ownership with overlapping stakeholder interests causing disputes",
        "Fragmented monetization with athletes missing out on content revenue opportunities",
        "Manual rights tracking across multiple platforms causing delays and lost revenue",
        "Unclear fan content boundaries with uncertain rights for user-generated sports content"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Streamlined sports content management with automated rights tracking and clear ownership documentation",
        "Protected sports content with comprehensive monitoring and fair athlete compensation for viral moments",
        "Clear stakeholder relationships with automated revenue distribution and transparent rights management", 
        "Optimized monetization with automated licensing and performance-based compensation systems",
        "Real-time rights verification with instant clearance checking and streamlined approval processes",
        "Balanced fan content licensing supporting fan creativity while protecting athlete interests"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights protect athlete likenesses from unauthorized use in gaming and AI?",
      answer: "Our system provides comprehensive likeness protection with automated detection of unauthorized usage in video games, AI simulations, and synthetic content, enabling enforcement and licensing opportunities."
    },
    {
      question: "Can Creation Rights help athletes monetize viral sports moments?",
      answer: "Yes, our system automatically detects when sports content goes viral and enables athletes to monetize these moments through licensing, revenue sharing, and brand partnerships."
    },
    {
      question: "How do you handle complex multi-party rights in professional sports?",
      answer: "Our system manages complex stakeholder relationships with automated revenue distribution among athletes, teams, leagues, broadcasters, and other rights holders based on predetermined agreements."
    },
    {
      question: "What happens if someone creates deepfake content using an athlete's likeness?",
      answer: "Our Content ID Layer detects deepfake and synthetic content using athlete likenesses, enabling immediate enforcement actions and protection of athlete reputation and rights."
    },
    {
      question: "How does Creation Rights support amateur and collegiate athletes?",
      answer: "We provide NCAA-compliant rights management that protects student-athlete rights while maintaining amateur status and enabling legitimate educational and fan engagement opportunities."
    },
    {
      question: "Can Creation Rights integrate with existing sports broadcast and management systems?",
      answer: "Yes, we provide integrations with major sports broadcast systems, league management platforms, and athlete management tools for seamless rights protection within existing workflows."
    }
  ];

  const advancedFeatures = [
    {
      category: "Technology & Integration",
      items: [
        "Broadcast Production Integration - Rights management within broadcast workflows and live streaming",
        "Sports Analytics Platforms - Integration with performance analysis and statistical tracking", 
        "Gaming and Simulation Integration - Rights management for video games and fantasy sports",
        "Social Media Management - Comprehensive rights tracking for team and athlete social content"
      ]
    },
    {
      category: "Athlete & Organization Services",
      items: [
        "Personal Brand Management - Rights management for athlete personal brands and endorsements",
        "Performance Content Protection - Protection for training content and behind-the-scenes footage",
        "Multi-Athlete Rights Management - Comprehensive rights management across team rosters",
        "Broadcast Rights Optimization - Revenue optimization for television and streaming rights"
      ]
    },
    {
      category: "Innovation & Community",
      items: [
        "Virtual Reality Sports - Rights management for immersive sports experiences and VR broadcasting",
        "AI Sports Analytics - Ethical AI development respecting athlete rights",
        "Fan Content Licensing - Balanced rights management supporting fan creativity",
        "Community Revenue Sharing - Systems enabling fan content creators to benefit from success"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Activity,
      title: "Performance Documentation",
      description: "Complete record of athletic performances with individual and team contributions"
    },
    {
      icon: Users,
      title: "Multi-Stakeholder Attribution",
      description: "Clear documentation of athlete, team, league, broadcaster, and sponsor rights"
    },
    {
      icon: Trophy,
      title: "Competition Context",
      description: "Documentation of game context, significance, and cultural impact"
    },
    {
      icon: Heart,
      title: "Fan Content Integration",
      description: "Documentation of fan-created content and its relationship to original performances"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Sports"
        subtitle="Comprehensive rights management for athletes and sports organizations"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Sports generate some of the most valuable and widely consumed content in the world, yet athletes and sports organizations struggle to control how their performances, likenesses, and content are used across digital platforms. From unauthorized highlight reels to AI-generated simulations, the sports industry needs sophisticated rights management that protects athlete interests while enabling legitimate fan engagement and commercial opportunities.
          </p>
        </div>
      </PageSection>

      {/* The Sports Industry's Rights Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Sports Industry&apos;s Rights Crisis</h2>
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

      {/* How Creation Rights Transforms Sports Rights Management */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Sports Rights Management</h2>
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
            Our comprehensive provenance system captures the complexity of sports content creation, from athletic performance to fan engagement with complete stakeholder and rights documentation.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Sports</h2>
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

      {/* Sports Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Sports Industry Integration</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Sports Industry Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Sports Rights Management?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading athletes, teams, and sports organizations who have protected their content, optimized their revenue, and built sustainable fan relationships through comprehensive sports rights management that ensures fair compensation while enabling legitimate fan engagement and commercial opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Sports Demo</Link>
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