import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  User, 
  DollarSign, 
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Search,
  Bot,
  Globe,
  Camera,
  Monitor,
  FileText,
  Heart,
  Zap,
  UserCheck,
  Shield,
  X
} from "lucide-react";
import Link from "next/link";

export default function ModelsPage() {
  const challenges = [
    {
      icon: Camera,
      title: "Unauthorized Likeness Usage",
      description: "Model images and likenesses are constantly used without permission",
      details: [
        "Campaign overuse beyond contracted time periods and geographic restrictions",
        "Unauthorized redistribution across platforms without consent or compensation", 
        "Competitive brand usage by competing brands without proper licensing",
        "Stock photo misuse with images sold without ongoing compensation tracking"
      ]
    },
    {
      icon: Bot,
      title: "AI & Deepfake Threats",
      description: "Artificial intelligence creates sophisticated threats to model identity",
      details: [
        "Deepfake commercials using model faces and voices without permission",
        "Virtual model cloning with AI systems creating competing digital doubles",
        "Voice synthesis replicating model voices for unauthorized commercials",
        "Synthetic content generation creating new content using model likenesses"
      ]
    },
    {
      icon: Monitor,
      title: "Digital Platform Exploitation",
      description: "Social media and digital platforms often misuse model content",
      details: [
        "Platform advertising using model images without compensation",
        "User-generated content issues with unauthorized fan content usage",
        "Influencer impersonation with fake accounts using model images",
        "Virtual try-on misuse for e-commerce without authorization"
      ]
    }
  ];

  const solutions = [
    {
      icon: User,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive model identity protection and rights management",
      features: [
        "Complete identity registration for all model assets and characteristics",
        "Sophisticated model licensing for diverse applications",
        "Advanced model revenue management with multi-usage tracking",
        "Territory and time controls with automated enforcement"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for model identity",
      features: [
        "Real-time identity verification for brands and platforms",
        "Comprehensive model verification with identity authenticity",
        "Advanced model recognition with AI-powered detection",
        "Comprehensive model protection against unauthorized usage and deepfakes"
      ]
    },
    {
      icon: DollarSign,
      title: "Advanced Model Revenue Management",
      description: "Sophisticated monetization for modeling professionals",
      features: [
        "Multi-usage revenue tracking with automated compensation",
        "International royalty collection with global tracking",
        "Residual payment automation for continued usage",
        "Performance-based adjustments for campaign success optimization"
      ]
    }
  ];

  const successStories = [
    {
      name: "Isabella Chen",
      role: "Fashion Model",
      challenge: "Images from luxury fashion campaigns being used beyond contracted periods with deepfake technology creating unauthorized content",
      results: [
        "$280,000 in additional licensing revenue from extended usage and international expansions",
        "95% reduction in unauthorized usage through automated detection",
        "20 major brand partnerships with enhanced contract protection",
        "Complete deepfake protection through advanced AI detection and enforcement"
      ]
    },
    {
      name: "Marcus Rodriguez", 
      role: "Commercial Model",
      challenge: "Multiple brand relationships requiring complex exclusivity management while preventing unauthorized usage of commercial work",
      results: [
        "$180,000 in optimized campaign revenue through strategic brand management",
        "90% improvement in contract compliance through automated monitoring",
        "15 successful exclusivity negotiations with enhanced partnership value",
        "Enhanced career management through comprehensive usage tracking"
      ]
    },
    {
      name: "Sarah Kim",
      role: "Voice Model", 
      challenge: "Distinctive voice being replicated by AI systems with voice-over work used beyond contracted terms",
      results: [
        "$120,000 in voice licensing revenue from legitimate AI applications",
        "85% reduction in voice theft through advanced AI detection",
        "12 major voice-over partnerships with protected vocal identity",
        "Industry leadership in voice model rights protection and AI collaboration"
      ]
    }
  ];

  const features = [
    {
      icon: UserCheck,
      title: "Career Management Integration",
      description: "Portfolio management, agent collaboration, brand relationship management, and contract optimization."
    },
    {
      icon: Shield,
      title: "Identity Protection Technology",
      description: "Biometric security, deepfake detection, identity verification, and privacy controls."
    },
    {
      icon: Globe,
      title: "International Career Support",
      description: "Multi-territory rights, cultural sensitivity, currency management, and global brand relationships."
    },
    {
      icon: Monitor,
      title: "Digital Modeling Innovation",
      description: "Virtual modeling rights, AI collaboration framework, metaverse modeling, and holographic representation."
    },
    {
      icon: Heart,
      title: "Ethical Modeling Standards",
      description: "Consent management, dignity protection, fair compensation standards, and professional development support."
    },
    {
      icon: Zap,
      title: "Technology Integration Leadership",
      description: "AR/VR modeling rights, motion capture protection, biometric data security, and emerging technology adaptation."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Campaign images used beyond contracted terms without compensation",
        "AI systems creating deepfakes using model likenesses without permission", 
        "Complex exclusivity agreements difficult to monitor and enforce",
        "Unauthorized usage across platforms with limited detection capabilities",
        "Voice replication by AI systems without consent or compensation",
        "International usage tracking challenges with revenue leakage"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated detection and compensation for extended campaign usage",
        "Comprehensive deepfake protection with real-time AI detection and enforcement",
        "Streamlined exclusivity management with automated conflict prevention",
        "Complete usage monitoring across all platforms with immediate enforcement", 
        "Protected vocal identity with AI voice cloning detection and licensing",
        "Global revenue optimization with transparent international tracking and collection"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights protect against deepfakes and AI-generated content using my likeness?",
      answer: "Our advanced AI detection systems monitor for unauthorized use of your likeness in deepfake content and can identify synthetic media, enabling immediate enforcement actions and protection of your professional identity."
    },
    {
      question: "Can Creation Rights help me manage multiple brand relationships and exclusivity agreements?",
      answer: "Yes, our system provides comprehensive brand relationship management with automatic conflict detection, ensuring you can maximize opportunities while respecting exclusivity agreements."
    },
    {
      question: "How do you track usage beyond contracted terms and territories?",
      answer: "Our Content ID Layer continuously monitors for your likeness across global platforms and automatically detects when usage exceeds contracted time periods or geographic restrictions."
    },
    {
      question: "What happens if a brand uses my images for AI training without permission?",
      answer: "Our system detects unauthorized AI training usage and can initiate enforcement actions or licensing negotiations based on your preferences and contract terms."
    },
    {
      question: "How does Creation Rights support international modeling careers?",
      answer: "We provide comprehensive international rights management with automatic adaptation to local laws, currency conversion, and territorial licensing compliance."
    },
    {
      question: "Can Creation Rights integrate with my existing modeling agency and career management?",
      answer: "Yes, we work seamlessly with modeling agencies and career management professionals, providing enhanced tools for contract optimization and rights protection."
    }
  ];

  const advancedFeatures = [
    {
      category: "Career & Management",
      items: [
        "Portfolio Management - Complete career documentation with professional development tracking",
        "Agent Collaboration - Integrated rights management for model representation", 
        "Brand Relationship Management - Strategic partnership development with conflict prevention",
        "Contract Optimization - Automated contract analysis and negotiation support"
      ]
    },
    {
      category: "Identity & Protection",
      items: [
        "Biometric Security - Advanced protection for facial recognition and voice patterns",
        "Deepfake Detection - Real-time monitoring and enforcement against AI impersonation",
        "Identity Verification - Comprehensive authentication systems for legitimate work",
        "Privacy Controls - Granular control over personal information and identity data"
      ]
    },
    {
      category: "Technology & Innovation",
      items: [
        "Virtual Modeling Rights - Comprehensive protection for digital avatars",
        "AI Collaboration Framework - Ethical AI development with fair compensation",
        "Metaverse Modeling - Rights management for virtual world applications",
        "Motion Capture Protection - Rights management for performance technology"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Camera,
      title: "Career Documentation",
      description: "Complete portfolio history with shoot dates, photographers, and creative teams"
    },
    {
      icon: FileText,
      title: "Contract Integration",
      description: "Comprehensive tracking of usage rights, territorial restrictions, and time limitations"
    },
    {
      icon: Users,
      title: "Brand Relationships",
      description: "Documentation of client relationships, exclusivity agreements, and conflict management"
    },
    {
      icon: TrendingUp,
      title: "Identity Evolution",
      description: "Tracking of career development, image changes, and professional growth"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Models"
        subtitle="Comprehensive likeness protection for the modeling industry"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Models are the faces and voices that bring brands to life, yet they face unprecedented threats to their personal and professional identity in the digital age. From unauthorized deepfakes and AI-generated content to unlicensed use of their likeness across platforms, models need sophisticated protection that preserves their rights while enabling legitimate career opportunities.
          </p>
        </div>
      </PageSection>

      {/* The Modeling Industry's Rights Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Modeling Industry&apos;s Rights Crisis</h2>
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

      {/* How Creation Rights Transforms Model Protection */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Model Protection</h2>
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
            Our comprehensive provenance system captures the complexity of modeling careers, from portfolio development to brand relationships and identity evolution.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Models</h2>
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

      {/* Modeling Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Modeling Industry Integration</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Modeling Industry Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Modeling Career?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading models and modeling agencies who have protected their identity, automated their rights management, and built sustainable modeling careers through comprehensive likeness protection that preserves dignity while maximizing legitimate opportunities.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Modeling Industry Demo</Link>
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