import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Video, 
  DollarSign, 
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Search,
  Bot,
  Globe,
  Archive,
  Heart,
  Share2,
  Smartphone,
  X
} from "lucide-react";
import Link from "next/link";

export default function ContentCreatorsPage() {
  const challenges = [
    {
      icon: Share2,
      title: "Unauthorized Content Reuse",
      description: "Original content is constantly stolen and republished without permission",
      details: [
        "Repost account exploitation stealing creator content to build audiences and monetize",
        "Cross-platform theft with content stolen from one platform and republished on others", 
        "Compilation video abuse including creators' work without permission or revenue sharing",
        "Content farm appropriation stealing creator content to generate ad revenue and SEO traffic"
      ]
    },
    {
      icon: Bot,
      title: "AI-Generated Derivative Content",
      description: "Artificial intelligence creates new threats to creator originality",
      details: [
        "Style replication with AI systems generating content mimicking distinctive creator voices",
        "Content summarization with AI tools creating derivatives that compete with originals",
        "Voice and likeness cloning for unauthorized content generation",
        "Automated content generation creating derivative works without attribution or compensation"
      ]
    },
    {
      icon: Smartphone,
      title: "Platform Algorithm Exploitation",
      description: "Social media platforms often disadvantage original creators",
      details: [
        "Algorithm suppression reducing visibility of original content while promoting reposts",
        "Revenue sharing imbalance with platforms capturing majority of advertising revenue",
        "Content moderation bias with original creators facing stricter moderation",
        "Platform lock-in with creators losing control when platforms change policies"
      ]
    }
  ];

  const solutions = [
    {
      icon: Video,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive content creation protection and attribution",
      features: [
        "Universal content registration for all creative content types",
        "Sophisticated creator licensing for diverse applications",
        "Advanced creator revenue management with multi-platform optimization",
        "AI training opt-out and attribution requirements"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for creator content",
      features: [
        "Real-time content verification for platforms and brands",
        "Comprehensive creator verification with content authenticity",
        "Advanced creator content recognition with AI-powered detection",
        "Comprehensive creator protection against unauthorized reuse and AI threats"
      ]
    },
    {
      icon: DollarSign,
      title: "Advanced Creator Revenue Management",
      description: "Sophisticated monetization for content creators",
      features: [
        "Multi-platform revenue optimization across all creator platforms",
        "Collaboration revenue splits with transparent sharing",
        "Brand partnership revenue with automated tracking",
        "Licensing revenue streams for content reuse and educational applications"
      ]
    }
  ];

  const successStories = [
    {
      name: "Tech Explained",
      role: "Educational YouTuber",
      challenge: "Comprehensive technology tutorials being stolen by content farms and used by AI systems without attribution",
      results: [
        "$280,000 in annual licensing revenue from educational platforms and aggregators",
        "90% reduction in content theft through automated detection and enforcement",
        "25 major educational partnerships with proper attribution and fair compensation",
        "Enhanced content quality through protected IP and sustainable revenue streams"
      ]
    },
    {
      name: "Creative Collective", 
      role: "Multi-Platform Content Creator",
      challenge: "Collaborative content across YouTube, TikTok, and Instagram with complex revenue sharing and unauthorized reposts",
      results: [
        "$180,000 in optimized collaborative revenue through transparent revenue sharing",
        "85% improvement in attribution accuracy across all platforms and projects",
        "40% increase in brand partnership value through enhanced content protection",
        "Streamlined collaboration through automated rights management and fair compensation"
      ]
    },
    {
      name: "Independent Voices",
      role: "Podcast Network", 
      challenge: "Podcast content being used without permission in AI training and republished on unauthorized platforms",
      results: [
        "$120,000 in podcast licensing revenue from legitimate audio platforms",
        "95% reduction in unauthorized audio usage through advanced recognition",
        "15 major podcast platform partnerships with protected content",
        "Enhanced creator support through sustainable revenue protection and compensation"
      ]
    }
  ];

  const features = [
    {
      icon: Smartphone,
      title: "Multi-Platform Integration",
      description: "Social media platform integration, content management tools, collaboration platforms, and monetization integration."
    },
    {
      icon: Heart,
      title: "Creator Economy Support",
      description: "Brand partnership management, audience development tools, merchandise integration, and educational content monetization."
    },
    {
      icon: Users,
      title: "Community and Collaboration",
      description: "Creator network integration, fan content management, community contribution tracking, and cross-creator collaboration."
    },
    {
      icon: Globe,
      title: "Platform Independence",
      description: "Multi-platform strategy, creator-owned content, audience portability, and platform negotiation support."
    },
    {
      icon: Bot,
      title: "AI Collaboration Framework",
      description: "Creator-consent AI training, AI-assisted content creation, synthetic content attribution, and creative tool integration."
    },
    {
      icon: TrendingUp,
      title: "Sustainable Creator Economy",
      description: "Fair revenue distribution, creator rights education, legal support integration, and career development support."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Content stolen by repost accounts without attribution or compensation",
        "AI systems generating derivative content using creator work without permission", 
        "Platform algorithms suppressing original content while promoting reposts",
        "Complex multi-platform rights management with revenue leakage",
        "Brand partnerships with unclear usage rights and compensation",
        "Educational content used without proper licensing or creator compensation"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated detection and protection against unauthorized content reuse with attribution",
        "AI training consent controls with fair compensation for participating creators",
        "Enhanced platform visibility through verified original content and creator protection",
        "Streamlined multi-platform rights management with optimized revenue collection", 
        "Clear brand partnership terms with automated usage tracking and fair compensation",
        "Protected educational content with proper licensing and transparent creator revenue"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights protect my content across multiple social media platforms?",
      answer: "Our system provides unified protection across YouTube, TikTok, Instagram, and other platforms, with automated detection of unauthorized usage and cross-platform rights management."
    },
    {
      question: "Can Creation Rights help me manage collaborative content with other creators?",
      answer: "Yes, our system tracks individual contributions in collaborative projects and enables transparent revenue sharing based on actual creative input and predetermined agreements."
    },
    {
      question: "How do you handle fair use and educational usage of my content?",
      answer: "Our flexible licensing system enables you to support legitimate educational use while protecting against commercial exploitation, with automated systems that distinguish between fair use and infringement."
    },
    {
      question: "What happens if AI systems use my content to generate derivative works?",
      answer: "Our Content ID Layer detects AI-generated derivatives and can initiate licensing negotiations or enforcement actions based on your preferences and licensing terms."
    },
    {
      question: "How does Creation Rights support brand partnerships and sponsored content?",
      answer: "Our system provides comprehensive tools for managing brand collaborations, tracking sponsored content usage, and ensuring fair compensation for partnership agreements."
    },
    {
      question: "Can Creation Rights integrate with my existing creator tools and platforms?",
      answer: "Yes, we provide integrations with major creator platforms, editing tools, and monetization systems, enabling seamless rights protection within your existing workflow."
    }
  ];

  const advancedFeatures = [
    {
      category: "Platform & Integration",
      items: [
        "Social Media Platform Integration - Direct protection from YouTube, TikTok, Instagram",
        "Content Management Tools - Integration with editing software and scheduling tools", 
        "Collaboration Platforms - Rights management for Discord communities and creator networks",
        "Monetization Platform Integration - Revenue tracking across Patreon, Substack, OnlyFans"
      ]
    },
    {
      category: "Business & Monetization",
      items: [
        "Brand Partnership Management - Automated rights for sponsorships and collaborations",
        "Audience Development Tools - Rights management supporting community building",
        "Merchandise and Product Integration - Rights for creator-branded products",
        "Educational Content Monetization - Specialized tools for course creators"
      ]
    },
    {
      category: "Community & Innovation",
      items: [
        "Creator Network Integration - Rights management for creator collectives",
        "Fan Content Management - Balanced rights supporting fan creativity",
        "Community Contribution Tracking - Rights for community-generated content",
        "AI Collaboration Framework - Ethical AI development benefiting creators"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Video,
      title: "Creative Development",
      description: "Complete content creation process from concept to publication with iteration tracking"
    },
    {
      icon: Users,
      title: "Collaborative Contributions",
      description: "Clear attribution for co-creators, editors, designers, and other contributors"
    },
    {
      icon: Archive,
      title: "Source Material Documentation",
      description: "Tracking of music, B-roll, images, and other third-party content used"
    },
    {
      icon: Smartphone,
      title: "Platform Optimization",
      description: "Documentation of platform-specific adaptations and cross-platform variations"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Content Creators"
        subtitle="Comprehensive rights protection for the creator economy"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Content creators are the driving force behind the modern digital economy, yet they face unprecedented challenges protecting their work and receiving fair compensation. From unauthorized reposts and AI-generated derivatives to platform algorithm changes that reduce visibility, creators need sophisticated tools that preserve their rights while enabling legitimate collaboration and audience growth.
          </p>
        </div>
      </PageSection>

      {/* The Creator Economy's Rights Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Creator Economy&apos;s Rights Crisis</h2>
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

      {/* How Creation Rights Transforms Creator Protection */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Creator Protection</h2>
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
            Our comprehensive provenance system captures the complexity of content creation, from initial concept to multi-platform distribution and collaborative contributions.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Content Creators</h2>
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

      {/* Creator Economy Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Creator Economy Integration</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Creator Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Creator Career?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of content creators who have protected their work, automated their rights management, and built sustainable creator businesses through comprehensive content protection that preserves creative freedom while ensuring fair compensation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Creator Demo</Link>
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