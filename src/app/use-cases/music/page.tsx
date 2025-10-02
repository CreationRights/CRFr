import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Music, 
  DollarSign, 
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Search,
  Bot,
  Globe,
  Lightbulb,
  Play,
  Headphones,
  Mic,
  Disc,
  X
} from "lucide-react";
import Link from "next/link";

export default function MusicPage() {
  const challenges = [
    {
      icon: Users,
      title: "Complex Ownership & Attribution",
      description: "Modern music involves intricate creative collaborations",
      details: [
        "Multi-creator complexity with overlapping rights",
        "Sample clearance challenges for borrowed elements", 
        "Collaboration attribution difficulty in writing sessions",
        "Publishing vs. master rights creating licensing complexity"
      ]
    },
    {
      icon: TrendingUp,
      title: "Streaming & Platform Exploitation",
      description: "Digital platforms often shortchange musicians",
      details: [
        "Opaque royalty systems with minimal transparency",
        "Micro-payment problems making sustainable income difficult",
        "Platform revenue imbalance favoring platforms over artists",
        "Cross-platform tracking difficulty with inconsistent reporting"
      ]
    },
    {
      icon: Bot,
      title: "AI Training & Generation Threats",
      description: "Artificial intelligence creates new challenges for music rights",
      details: [
        "Unauthorized training data without artist consent",
        "Style replication mimicking distinctive artist sounds",
        "Voice cloning replicating vocals without permission",
        "Automated music generation competing with human musicians"
      ]
    }
  ];

  const solutions = [
    {
      icon: Music,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive music rights documentation and protection",
      features: [
        "Complete musical registration for all creative elements",
        "Sophisticated music licensing for diverse applications",
        "Advanced music revenue management with multi-party splits",
        "Performance royalty collection with PRO integration"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for music content",
      features: [
        "Real-time music verification for platforms and creators",
        "Comprehensive music verification with sample clearance",
        "Advanced music recognition with AI-powered detection",
        "Comprehensive music protection across all platforms"
      ]
    },
    {
      icon: DollarSign,
      title: "Advanced Music Revenue Management",
      description: "Sophisticated monetization for music creators",
      features: [
        "Multi-party revenue splits with automatic distribution",
        "Performance royalty collection with PRO integration",
        "Mechanical royalty automation from all sources",
        "Synchronization revenue tracking across media"
      ]
    }
  ];

  const successStories = [
    {
      name: "Marcus &quot;Beats&quot; Johnson",
      role: "Independent Hip-Hop Producer",
      challenge: "Original beats being stolen and used without permission, with sample-based productions facing clearance issues",
      results: [
        "$280,000 in annual beat licensing revenue through automated licensing",
        "90% reduction in beat theft through real-time detection",
        "35 major artist collaborations with transparent revenue sharing",
        "Enhanced creative freedom through streamlined sample clearance"
      ]
    },
    {
      name: "Luna Martinez", 
      role: "Singer-Songwriter",
      challenge: "Songs being covered without permission and AI systems replicating vocal style without compensation",
      results: [
        "$150,000 in cover licensing revenue from legal recordings",
        "85% increase in streaming royalties through proper attribution",
        "20 sync licensing deals with automated rights management",
        "Protected vocal identity through AI detection and enforcement"
      ]
    },
    {
      name: "Synthetic Dreams",
      role: "Electronic Music Duo", 
      challenge: "Complex collaborations with multiple producers and constant unauthorized remixing and AI derivatives",
      results: [
        "$420,000 in remix licensing revenue from official releases",
        "75% increase in collaboration efficiency through transparent tracking",
        "50 official remix partnerships with proper licensing",
        "Enhanced creative control through comprehensive protection"
      ]
    }
  ];

  const features = [
    {
      icon: Headphones,
      title: "Music Production Integration",
      description: "DAW integration, sample library protection, collaboration tools, and version control for song development."
    },
    {
      icon: Globe,
      title: "Music Industry Ecosystem",
      description: "Publishing administration, label relations, PRO integration, and music supervisor tools for licensing."
    },
    {
      icon: Lightbulb,
      title: "Emerging Technology Integration",
      description: "Spatial audio rights, NFT and Web3 integration, virtual concert rights, and AI collaboration tools."
    },
    {
      icon: TrendingUp,
      title: "Streaming Era Innovation",
      description: "Transparent royalty systems, fan-funded music, micro-licensing innovation, and global rights management."
    },
    {
      icon: Bot,
      title: "AI Collaboration Framework",
      description: "AI training consent, human-AI collaboration, AI-generated content attribution, and creative tool integration."
    },
    {
      icon: Play,
      title: "Social Media Integration",
      description: "TikTok optimization, user-generated content support, influencer partnerships, and viral moment monetization."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Complex manual sample clearances",
        "Opaque streaming royalty systems", 
        "Unauthorized AI training on music",
        "Beat theft and vocal replication",
        "Difficult collaboration attribution",
        "Revenue leakage across platforms"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated sample clearance and revenue sharing",
        "Transparent real-time royalty tracking and collection",
        "Protected music with AI training consent controls",
        "Comprehensive beat and vocal protection with detection", 
        "Clear collaboration tracking and automated revenue splits",
        "Complete revenue optimization across all platforms and usage"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights handle complex sample clearances in hip-hop and electronic music?",
      answer: "Our system automatically tracks all sampled elements and their sources, enabling streamlined clearance processes and automated revenue sharing with original rights holders."
    },
    {
      question: "Can Creation Rights help me collect royalties from streaming platforms?",
      answer: "Yes, our system integrates with all major streaming platforms to provide real-time royalty tracking and automated collection, giving you complete transparency into your streaming income."
    },
    {
      question: "How do you protect against AI systems replicating my musical style?",
      answer: "Our AI detection systems analyze your unique musical characteristics and can identify when AI systems generate music that mimics your style, enabling enforcement actions and licensing opportunities."
    },
    {
      question: "What happens if someone uses my music on TikTok or Instagram without permission?",
      answer: "Our Content ID Layer automatically detects unauthorized usage across social media platforms and can initiate licensing negotiations or enforcement actions based on your preferences."
    },
    {
      question: "How does Creation Rights support collaborative songwriting and production?",
      answer: "Our system tracks individual contributions in real-time during collaborative sessions, enabling transparent attribution and automated revenue sharing based on actual creative input."
    },
    {
      question: "Can Creation Rights integrate with my existing music production workflow?",
      answer: "Yes, we provide integrations with major DAWs, sample libraries, and music production tools, enabling seamless rights protection within your existing creative process."
    }
  ];

  const advancedFeatures = [
    {
      category: "Production & Creation",
      items: [
        "DAW Integration - Direct protection from Pro Tools, Logic Pro, Ableton Live",
        "Sample Library Protection - Comprehensive rights for sample libraries and loops", 
        "Collaboration Tools - Real-time rights tracking for writing sessions",
        "Version Control - Complete tracking from demo to master recording"
      ]
    },
    {
      category: "Industry & Business",
      items: [
        "Publishing Administration - Integration with publishers and admin services",
        "Label Relations - Automated rights for record label partnerships",
        "Performance Rights Organizations - Direct integration with ASCAP, BMI, SESAC",
        "Music Supervisor Tools - Streamlined licensing for sync opportunities"
      ]
    },
    {
      category: "Technology & Innovation",
      items: [
        "Spatial Audio Rights - Protection for Dolby Atmos and immersive audio",
        "NFT and Web3 Integration - Rights management for blockchain music platforms",
        "Virtual Concert Rights - Licensing for VR concerts and metaverse performances",
        "AI Collaboration Tools - Rights for human-AI collaborative music creation"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Music,
      title: "Creative Development",
      description: "Complete history of songwriting sessions, production stages, and creative evolution"
    },
    {
      icon: Users,
      title: "Collaborative Contributions",
      description: "Individual attribution for writers, performers, producers, and all creative contributors"
    },
    {
      icon: Disc,
      title: "Sample Lineage",
      description: "Comprehensive tracking of borrowed elements and their original sources"
    },
    {
      icon: Mic,
      title: "Recording Process",
      description: "Documentation of studio sessions, equipment used, and technical contributions"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Music"
        subtitle="Comprehensive rights management for the music industry"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Music is the universal language that connects humanity, yet musicians face unprecedented challenges in protecting their creative work and receiving fair compensation. From streaming platforms with opaque royalty systems to AI models training on music without consent, artists need sophisticated tools that preserve creative freedom while ensuring sustainable careers.
          </p>
        </div>
      </PageSection>

      {/* The Music Industry's Rights Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Music Industry&apos;s Rights Crisis</h2>
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

      {/* How Creation Rights Transforms Music Protection */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Music Protection</h2>
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
            Our comprehensive provenance system captures the complexity of music creation, from songwriting sessions to final master recordings.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Music</h2>
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

      {/* Music Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Music Industry Integration</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Music Industry Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-card border border-border p-8">
                <div className="flex items-center space-x-2 mb-4">
                  <Star className="h-5 w-5 text-primary" />
                  <div>
                    <h3 className="font-semibold" dangerouslySetInnerHTML={{ __html: story.name }}></h3>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Music Career?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of musicians, producers, and music industry professionals who have protected their creative works, automated their royalty collection, and built sustainable music careers through comprehensive rights management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Music Industry Demo</Link>
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