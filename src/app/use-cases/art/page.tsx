import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  Shield, 
  DollarSign, 
  Eye, 
  CheckCircle,
  X,
  Star,
  Lock,
  TrendingUp,
  BarChart3,
  Zap,
  Users,
  Search,
  Bot
} from "lucide-react";
import Link from "next/link";

export default function ArtPage() {
  const challenges = [
    {
      icon: X,
      title: "Rampant Art Theft & Misuse",
      description: "Your work spreads faster than your rights can follow",
      details: [
        "Uncredited reposting across social media platforms",
        "Commercial exploitation without permission or payment", 
        "Style appropriation by other artists and AI systems",
        "Platform monetization while you receive nothing"
      ]
    },
    {
      icon: Bot,
      title: "AI Training Without Consent",
      description: "Your artistic style becomes training data without your knowledge",
      details: [
        "Unauthorized scraping for AI model training",
        "Style replication by AI systems",
        "Commercial AI products using your contributions",
        "Zero compensation from billion-dollar AI companies"
      ]
    },
    {
      icon: TrendingUp,
      title: "Loss of Control & Revenue",
      description: "Traditional copyright can't keep up with digital distribution",
      details: [
        "Cross-platform chaos with no unified tracking",
        "Metadata stripped during file conversion",
        "Complex manual licensing negotiations",
        "Revenue flowing to platforms instead of creators"
      ]
    }
  ];

  const solutions = [
    {
      icon: Palette,
      title: "Creation Rights Management (CRM)",
      description: "Complete lifecycle protection for your artistic work",
      features: [
        "Multi-format support for all art types",
        "Tool integration with creative applications",
        "Batch processing for entire portfolios",
        "Complete creative lineage tracking"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and enforcement for the art world",
      features: [
        "Pre-use verification across platforms",
        "Real-time rights checking",
        "Advanced content detection",
        "Automated enforcement system"
      ]
    },
    {
      icon: DollarSign,
      title: "Smart Licensing for Artists",
      description: "Flexible licensing that adapts to the art market",
      features: [
        "Usage-based licensing with dynamic pricing",
        "Territory and exclusivity management",
        "Gallery partnership automation",
        "NFT integration with smart contracts"
      ]
    }
  ];

  const successStories = [
    {
      name: "Sarah Chen",
      role: "Digital Illustrator",
      challenge: "Character art being used without permission across social media and AI-generated art",
      results: [
        "$45,000 in recovered licensing revenue",
        "90% reduction in art theft",
        "$800/month in AI licensing royalties",
        "Complete style protection across platforms"
      ]
    },
    {
      name: "Marcus Rodriguez", 
      role: "Concept Artist",
      challenge: "Game concept art stolen for competing games and AI training without compensation",
      results: [
        "$120,000 in new licensing revenue",
        "15 major takedowns of unauthorized uses",
        "$2,400/month in AI training royalties",
        "Enhanced portfolio value through verified provenance"
      ]
    },
    {
      name: "Elena Vasquez",
      role: "Fine Artist", 
      challenge: "Traditional paintings used commercially without knowledge or tracking",
      results: [
        "$30,000 in print licensing revenue",
        "Gallery partnership optimization",
        "International licensing deals",
        "NFT sales with resale royalties"
      ]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Intelligent Registration",
      description: "Automatic protection that understands your creative process with multi-format support and tool integration."
    },
    {
      icon: Eye,
      title: "Style Recognition",
      description: "AI-powered detection of your distinctive artistic style, even when modified or used in AI-generated content."
    },
    {
      icon: BarChart3,
      title: "Portfolio Intelligence", 
      description: "Market demand analysis and pricing optimization based on your artistic performance data."
    },
    {
      icon: Users,
      title: "Collaborative Management",
      description: "Multi-artist project support with automatic attribution and revenue splitting."
    },
    {
      icon: Lock,
      title: "Provenance Verification",
      description: "Cryptographic proof of authenticity and ownership history for traditional and digital art."
    },
    {
      icon: Zap,
      title: "Real-Time Enforcement",
      description: "Automated takedown capabilities and licensing offers for unauthorized usage across all platforms."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Art stolen without recourse",
        "AI training on your work for free", 
        "Complex manual licensing",
        "Revenue going to platforms",
        "No style protection",
        "Metadata stripped from files"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automatic theft detection & takedowns",
        "AI licensing royalties",
        "Smart automated licensing",
        "Direct creator compensation", 
        "Complete style fingerprinting",
        "Embedded dynamic metadata"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights detect when someone copies my artistic style?",
      answer: "Our AI analyzes your unique artistic characteristics - brushstrokes, color palettes, compositional elements, and techniques - creating a distinctive 'style fingerprint' that can identify derivatives and imitations across the internet."
    },
    {
      question: "Can I protect traditional paintings and physical artwork?",
      answer: "Yes, through high-resolution scanning and photography, we can protect physical artwork and track its digital reproductions across all platforms and applications."
    },
    {
      question: "How does AI training licensing work for artists?",
      answer: "You can opt-in to allow AI companies to train on your work in exchange for ongoing royalties. You maintain complete control over which AI systems can use your work and receive transparent compensation."
    },
    {
      question: "What happens if someone creates an NFT of my artwork without permission?",
      answer: "Our system automatically detects unauthorized NFT creation and can initiate takedown procedures while offering licensing options for legitimate use."
    },
    {
      question: "How do resale royalties work for digital art?",
      answer: "Smart contracts automatically collect resale royalties when your art is sold on secondary markets, following emerging legislation like the ART Act and EU resale rights directives."
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Art"
        subtitle="Comprehensive protection and monetization for visual creators"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Artists are the backbone of visual culture, yet they face unprecedented challenges in the digital age. From unauthorized commercial use to AI systems training on their work without consent or compensation, visual creators need sophisticated tools to protect their rights and capture the full value of their creativity.
          </p>
        </div>
      </PageSection>

      {/* The Artist's Dilemma */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Artist&apos;s Dilemma</h2>
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

      {/* How Creation Rights Transforms Art Protection */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Art Protection</h2>
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

      {/* Advanced Features */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Artists</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 border border-border bg-card">
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Artist Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Protect Your Art?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of artists who have taken control of their creative rights and unlocked new revenue streams.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Art Demo</Link>
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