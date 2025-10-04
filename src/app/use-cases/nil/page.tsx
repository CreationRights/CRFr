import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  User, 
  DollarSign, 
  CheckCircle,
  X,
  Star,
  Users,
  Search,
  Bot,
  Shield,
  Target,
  Monitor,
  Heart,
  Globe,
  UserCheck,
  TrendingUp
} from "lucide-react";
import Link from "next/link";

export default function NILPage() {
  const challenges = [
    {
      icon: Bot,
      title: "Identity Theft & Impersonation",
      description: "Personal identity is constantly exploited without consent",
      details: [
        "Deepfake technology with AI-generated videos using real faces and voices for unauthorized content",
        "Synthetic voice cloning with AI systems replicating voices for commercial use and scams", 
        "Avatar and digital twin theft with virtual representations used in games and metaverse platforms",
        "Social media impersonation with fake accounts using real identities to monetize through deception"
      ]
    },
    {
      icon: DollarSign,
      title: "Unauthorized Commercial Exploitation",
      description: "Personal identity used for profit without permission",
      details: [
        "Fake endorsements with brands using celebrity and influencer likenesses without permission",
        "Merchandise piracy with unauthorized products featuring real people's names and images",
        "Gaming and virtual world usage with real identities used without consent",
        "AI training data exploitation with personal content used to train AI systems without permission"
      ]
    },
    {
      icon: Users,
      title: "Student Athlete Vulnerabilities",
      description: "College athletes face unique NIL challenges",
      details: [
        "NCAA compliance complexity with navigating changing regulations while protecting NIL rights",
        "Unauthorized usage with student athlete identities used without permission in gaming and social media",
        "Exploitation by third parties with unscrupulous agents taking advantage of inexperienced athletes",
        "Long-term career impact with NIL decisions affecting future professional opportunities"
      ]
    }
  ];

  const solutions = [
    {
      icon: User,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive personal identity protection and rights management",
      features: [
        "Complete identity registration with detailed documentation of all personal identity elements",
        "Sophisticated NIL licensing for endorsements, media rights, and digital applications",
        "Advanced NIL revenue management with multi-platform optimization and performance-based compensation",
        "Student athlete compliance with NCAA-compliant licensing protecting amateur status"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for personal identity",
      features: [
        "Real-time identity verification with instant confirmation of authorized identity usage",
        "Comprehensive NIL verification with identity authenticity confirmation and usage validation",
        "Advanced identity recognition with AI-powered detection and deepfake identification",
        "Comprehensive identity protection against deepfakes, unauthorized endorsements, and impersonation"
      ]
    },
    {
      icon: DollarSign,
      title: "Advanced NIL Revenue Management",
      description: "Sophisticated monetization for personal identity rights",
      features: [
        "Multi-platform revenue optimization with automated collection across all applications",
        "Partnership revenue sharing with transparent distribution among agents and partners",
        "Performance-based compensation tied to engagement metrics and commercial success",
        "AI training compensation with revenue from legitimate AI training applications"
      ]
    }
  ];

  const successStories = [
    {
      name: "Jordan Mitchell",
      role: "College Basketball Star",
      challenge: "Basketball highlights and personal brand being used without permission across social media and gaming platforms while needing to maintain NCAA eligibility",
      results: [
        "$85,000 in compliant NIL revenue through legitimate endorsements and social media partnerships",
        "100% NCAA compliance with automated checking and eligibility protection",
        "90% reduction in unauthorized usage through comprehensive identity monitoring and enforcement",
        "Enhanced professional prospects through protected personal brand development and verified authenticity"
      ]
    },
    {
      name: "Alex Chen", 
      role: "Social Media Influencer",
      challenge: "Face and voice being used in deepfake videos for unauthorized product endorsements and inappropriate content, damaging personal brand",
      results: [
        "$180,000 in protected endorsement revenue through verified authentic partnerships and brand protection",
        "95% reduction in deepfake content through advanced AI detection and rapid enforcement",
        "40% increase in brand partnership value through enhanced authenticity verification and reputation protection",
        "Enhanced digital safety through comprehensive identity protection and privacy controls"
      ]
    },
    {
      name: "Digital Personas Inc.",
      role: "Virtual Influencer Agency", 
      challenge: "Creating AI-generated influencers while needing to protect synthetic identities from unauthorized replication and commercial exploitation",
      results: [
        "$320,000 in virtual influencer licensing revenue through protected synthetic identity commercialization",
        "85% reduction in unauthorized replication through advanced AI detection and enforcement",
        "25 major brand partnerships with protected virtual influencer identities and verified authenticity",
        "Industry leadership in ethical AI influencer development and synthetic identity protection"
      ]
    }
  ];

  const features = [
    {
      icon: Shield,
      title: "Identity Protection Technology",
      description: "Biometric security, deepfake detection, privacy controls, and authentication systems."
    },
    {
      icon: Users,
      title: "Student Athlete Support",
      description: "NCAA compliance integration, educational resources, agent and advisor integration, and career development support."
    },
    {
      icon: Target,
      title: "Commercial Partnership Management",
      description: "Brand partnership optimization, endorsement contract management, revenue optimization, and global market access."
    },
    {
      icon: Monitor,
      title: "Digital Identity Innovation",
      description: "Metaverse identity rights, AI collaboration framework, synthetic identity management, and cross-reality identity."
    },
    {
      icon: Heart,
      title: "Student Athlete Empowerment",
      description: "Educational NIL programs, fair market access, long-term career support, and community benefit integration."
    },
    {
      icon: Globe,
      title: "Creator Economy Integration",
      description: "Direct fan monetization, platform independence, collaborative content rights, and global creator support."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Identity theft and impersonation with deepfakes and AI-generated content using personal likeness",
        "Unauthorized commercial exploitation with fake endorsements and merchandise piracy", 
        "Student athlete vulnerabilities with NCAA compliance complexity and third-party exploitation",
        "Fragmented protection systems with reactive enforcement and platform-specific issues",
        "Manual identity monitoring across multiple platforms causing delays and missed violations",
        "Unclear monetization boundaries with uncertain rights for personal identity commercialization"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Comprehensive identity protection with advanced deepfake detection and real-time enforcement",
        "Protected commercial usage with verified authentic partnerships and authorized endorsements",
        "NCAA-compliant student athlete support with automated eligibility protection and fair monetization", 
        "Unified protection systems with proactive monitoring and cross-platform enforcement",
        "Automated identity verification with real-time detection and immediate enforcement actions",
        "Clear monetization frameworks enabling legitimate identity commercialization while protecting personal autonomy"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights protect against deepfakes and AI-generated content using my likeness?",
      answer: "Our advanced AI detection systems monitor for unauthorized use of your identity in deepfake content and can identify synthetic media, enabling immediate enforcement actions and protection of your reputation."
    },
    {
      question: "Can Creation Rights help student athletes navigate NCAA NIL regulations?",
      answer: "Yes, our system provides NCAA-compliant NIL management with automated compliance checking, ensuring student athletes can monetize their identity while maintaining eligibility."
    },
    {
      question: "How do you detect unauthorized use of my voice in AI-generated content?",
      answer: "Our voice recognition technology creates unique vocal fingerprints and monitors for unauthorized voice cloning across all audio and video platforms."
    },
    {
      question: "What happens if someone creates fake endorsements using my identity?",
      answer: "Our Content ID Layer automatically detects fake endorsements and unauthorized commercial usage, enabling immediate enforcement actions and brand protection."
    },
    {
      question: "How does Creation Rights support international NIL protection?",
      answer: "We provide global identity protection with automatic adaptation to local privacy laws and right of publicity statutes in different countries."
    },
    {
      question: "Can Creation Rights help me monetize my identity while maintaining privacy?",
      answer: "Yes, our system provides granular privacy controls that enable selective identity monetization while protecting personal information and maintaining desired privacy levels."
    }
  ];

  const advancedFeatures = [
    {
      category: "Protection & Security",
      items: [
        "Biometric Security - Advanced protection for facial recognition and voice patterns",
        "Deepfake Detection - Real-time monitoring and enforcement against AI-generated impersonation", 
        "Privacy Controls - Granular control over personal information sharing and identity data usage",
        "Authentication Systems - Comprehensive verification systems for legitimate identity representation"
      ]
    },
    {
      category: "Student Athlete & Commercial",
      items: [
        "NCAA Compliance Integration - Automated compliance checking with current NCAA regulations",
        "Educational Resources - Comprehensive education on NIL rights and career planning",
        "Brand Partnership Optimization - Strategic partnership development with identity protection",
        "Endorsement Contract Management - Automated contract management and compliance monitoring"
      ]
    },
    {
      category: "Innovation & Future",
      items: [
        "Metaverse Identity Rights - Comprehensive protection for virtual world representation",
        "AI Collaboration Framework - Ethical AI development respecting personal identity",
        "Synthetic Identity Management - Rights management for AI-generated personas",
        "Cross-Reality Identity - Protection for identity usage across physical and digital environments"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: UserCheck,
      title: "Identity Verification",
      description: "Comprehensive verification of real-world identity with legal documentation and biometric confirmation"
    },
    {
      icon: Monitor,
      title: "Digital Footprint Documentation",
      description: "Complete record of legitimate online presence and authorized digital representations"
    },
    {
      icon: Target,
      title: "Commercial Usage History",
      description: "Documentation of all authorized endorsements, partnerships, and commercial applications"
    },
    {
      icon: TrendingUp,
      title: "Personal Brand Development",
      description: "Tracking of identity evolution, brand development, and professional growth"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="NIL (Name, Image and Likeness)"
        subtitle="Comprehensive identity protection for public figures and content creators"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Name, Image, and Likeness rights represent the most personal form of intellectual property, yet public figures face unprecedented threats to their identity in the digital age. From deepfake technology and AI-generated content to unauthorized endorsements and synthetic avatars, individuals need sophisticated protection that preserves personal autonomy while enabling legitimate commercial opportunities.
          </p>
        </div>
      </PageSection>

      {/* The NIL Rights Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">The NIL Rights Crisis</h2>
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

      {/* How Creation Rights Transforms NIL Protection */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-center">How Creation Rights Transforms NIL Protection</h2>
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
            Our comprehensive provenance system captures the complexity of personal identity management, from biometric verification to commercial partnerships with complete rights documentation.
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
          <h2 className="text-4xl font-semibold mb-12 text-center">Advanced Features for NIL</h2>
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

      {/* NIL Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">NIL Industry Integration</h2>
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
          <h2 className="text-4xl font-semibold mb-12 text-center">NIL Success Stories</h2>
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
          <h2 className="text-4xl font-semibold mb-6">Ready to Transform Your Identity Protection?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join public figures, student athletes, and content creators who have protected their personal identity, prevented deepfake exploitation, and built sustainable commercial partnerships through comprehensive NIL protection that preserves personal autonomy while enabling legitimate monetization opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule NIL Demo</Link>
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