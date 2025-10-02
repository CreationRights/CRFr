import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Megaphone, 
  Shield, 
  DollarSign, 
  CheckCircle,
  Star,
  Users,
  Search,
  Bot,
  Globe,
  Layers,
  Archive,
  Clock,
  Heart,
  Target,
  X
} from "lucide-react";
import Link from "next/link";

export default function AdvertisingPage() {
  const challenges = [
    {
      icon: Layers,
      title: "Multi-Asset Campaign Complexity",
      description: "Modern campaigns involve dozens of creative elements with overlapping rights",
      details: [
        "Mixed media integration combining video, audio, photography, and graphics from multiple creators",
        "Influencer content rights with user-generated content having complex usage terms and limitations", 
        "Stock asset management with licensed music, footage, and imagery having varying restrictions",
        "AI-generated content with synthetic assets created using AI tools with unclear ownership"
      ]
    },
    {
      icon: Clock,
      title: "Fast-Moving Campaign Cycles",
      description: "Advertising speed creates rights management challenges",
      details: [
        "Rapid asset turnover with campaign assets created and distributed faster than rights can be cleared",
        "Global distribution complexity with campaigns launched across territories with different legal requirements",
        "Real-time campaign optimization with dynamic content changes that may violate licensing agreements",
        "Platform-specific adaptations with content modified for different platforms without rights consideration"
      ]
    },
    {
      icon: Bot,
      title: "AI & Synthetic Content Issues",
      description: "Artificial intelligence creates new advertising rights challenges",
      details: [
        "AI-generated asset rights with unclear ownership and licensing for synthetic advertising content",
        "Deepfake and voice synthesis with unauthorized use of talent likenesses and voices",
        "Style and brand replication with AI creating content that mimics protected brand assets",
        "Training data compliance ensuring AI tools respect creator rights and licensing terms"
      ]
    }
  ];

  const solutions = [
    {
      icon: Megaphone,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive campaign asset protection and rights tracking",
      features: [
        "Complete campaign registration with detailed documentation of every advertising asset",
        "Sophisticated advertising licensing for complex campaign needs and multi-territory rights",
        "Advanced advertising revenue management with campaign cost optimization",
        "Usage duration controls with time-limited licensing and automatic expiration alerts"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for advertising content",
      features: [
        "Real-time campaign verification with instant rights clearance confirmation",
        "Comprehensive advertising verification with asset authenticity confirmation",
        "Advanced advertising recognition with AI-powered campaign asset detection",
        "Comprehensive advertising protection against unauthorized usage and violations"
      ]
    },
    {
      icon: DollarSign,
      title: "Advanced Advertising Revenue Management",
      description: "Sophisticated monetization and cost management for advertising",
      features: [
        "Campaign cost optimization with automated tracking of rights-related expenses",
        "Talent and creator compensation with transparent revenue sharing and residuals",
        "Rights extension revenue with automated licensing for campaign extensions",
        "Asset reuse optimization through strategic reuse of cleared assets"
      ]
    }
  ];

  const successStories = [
    {
      name: "Premium Lifestyle Co.",
      role: "Global Consumer Brand",
      challenge: "Global campaigns involving hundreds of assets from influencers, photographers, musicians, and AI tools, creating complex rights management challenges across 50+ countries",
      results: [
        "$2.1M in avoided legal costs through proactive rights management and compliance monitoring",
        "90% reduction in rights-related campaign delays through automated clearance verification",
        "40% improvement in campaign cost efficiency through optimized asset reuse and licensing",
        "Enhanced brand protection through comprehensive monitoring and enforcement across global markets"
      ]
    },
    {
      name: "Creative Catalyst", 
      role: "Digital Marketing Agency",
      challenge: "Managing dozens of simultaneous campaigns for different clients, each with complex rights requirements for talent, music, and creative assets",
      results: [
        "$850,000 in operational cost savings through automated rights management and reduced legal overhead",
        "85% improvement in campaign launch speed through streamlined rights clearance processes",
        "25% increase in client satisfaction through enhanced rights compliance and reduced campaign risks",
        "Industry leadership in rights-compliant advertising and creator-friendly campaign management"
      ]
    },
    {
      name: "Viral Reach",
      role: "Social Media Advertising Platform", 
      challenge: "Ensuring all advertising content on platform complied with creator rights and licensing terms while maintaining fast campaign deployment",
      results: [
        "$1.8M in creator compensation distributed automatically through rights-compliant advertising",
        "95% reduction in rights disputes through proactive compliance and transparent creator compensation",
        "50% increase in advertiser confidence through comprehensive rights verification and brand protection",
        "Enhanced platform reputation as a leader in creator-friendly advertising technology"
      ]
    }
  ];

  const features = [
    {
      icon: Target,
      title: "Campaign Management Integration",
      description: "Ad tech platform integration, creative production tools, social media schedulers, and digital asset management."
    },
    {
      icon: Users,
      title: "Talent and Creator Relations",
      description: "Influencer partnership management, talent contract integration, creator compensation systems, and rights renewal management."
    },
    {
      icon: Globe,
      title: "Global Campaign Support",
      description: "Multi-territory rights management, cultural sensitivity integration, currency and tax management, and regional campaign adaptation."
    },
    {
      icon: Bot,
      title: "AI-Powered Advertising Innovation",
      description: "AI creative tool integration, synthetic content attribution, automated campaign optimization, and personalization technology."
    },
    {
      icon: Heart,
      title: "Creator Economy Integration",
      description: "Influencer collaboration platforms, user-generated content campaigns, community-driven advertising, and creator revenue optimization."
    },
    {
      icon: Shield,
      title: "Sustainable Advertising Practices",
      description: "Ethical content verification, transparency and attribution, fair compensation standards, and long-term creator relationships."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Complex multi-asset campaigns with fragmented rights management creating legal risks",
        "Fast-moving campaign cycles with assets distributed faster than rights could be cleared", 
        "Rights verification challenges with difficulty tracking expired licenses and territory restrictions",
        "AI-generated content with unclear ownership and licensing creating compliance issues",
        "Manual rights clearance processes causing campaign delays and increased legal costs",
        "Fragmented talent and creator compensation with unclear revenue sharing"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Unified campaign rights management with automated clearance verification for all assets",
        "Real-time rights compliance with automated checking before campaign launch and distribution",
        "Comprehensive rights verification with automatic alerts for license expirations and renewals", 
        "Clear AI-generated content rights with proper attribution to training data sources",
        "Streamlined rights clearance with automated compliance checking and reduced legal overhead",
        "Transparent talent compensation with automated revenue sharing and residual payments"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights help manage complex multi-asset advertising campaigns?",
      answer: "Our system provides unified rights management for all campaign assets including video, audio, photography, and AI-generated content, with automated clearance verification and compliance monitoring."
    },
    {
      question: "Can Creation Rights integrate with our existing ad tech stack?",
      answer: "Yes, we provide integrations with major DSPs, ad servers, creative production tools, and campaign management platforms for seamless rights management within existing workflows."
    },
    {
      question: "How do you handle influencer and creator rights in advertising campaigns?",
      answer: "Our system provides comprehensive influencer partnership management with automated revenue sharing, usage tracking, and compliance with creator licensing terms."
    },
    {
      question: "What happens if campaign assets are used beyond licensed terms?",
      answer: "Our Content ID Layer automatically detects usage violations and can initiate enforcement actions, license renewals, or legal procedures based on your preferences and contract terms."
    },
    {
      question: "How does Creation Rights support global advertising campaigns?",
      answer: "We provide comprehensive multi-territory rights management with automatic compliance checking for different countries' advertising laws and licensing requirements."
    },
    {
      question: "Can Creation Rights help with AI-generated content in advertising?",
      answer: "Yes, our system provides rights management for AI-generated advertising content, ensuring proper attribution to training data sources and compliance with creator rights."
    }
  ];

  const advancedFeatures = [
    {
      category: "Campaign & Integration",
      items: [
        "Ad Tech Platform Integration - Direct rights management with DSPs and ad servers",
        "Creative Production Tools - Rights management within video editing and design workflows", 
        "Social Media Schedulers - Automated rights verification for campaign distribution",
        "Digital Asset Management - Comprehensive rights tracking within DAM systems"
      ]
    },
    {
      category: "Talent & Creator Relations",
      items: [
        "Influencer Partnership Management - Rights management for influencer collaborations",
        "Talent Contract Integration - Automated rights management for performer agreements",
        "Creator Compensation Systems - Transparent revenue sharing and residual payments",
        "Rights Renewal Management - Automated systems for license renewals and extensions"
      ]
    },
    {
      category: "Global & Innovation",
      items: [
        "Multi-Territory Rights Management - Automated compliance with international advertising laws",
        "Cultural Sensitivity Integration - Rights management respecting local standards",
        "AI Creative Tool Integration - Rights management for AI-powered creative tools",
        "Synthetic Content Attribution - Proper crediting for AI-generated advertising content"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Target,
      title: "Campaign Development Timeline",
      description: "Complete creative process from brief to final delivery with contributor attribution"
    },
    {
      icon: Users,
      title: "Multi-Creator Collaboration",
      description: "Clear attribution for agencies, freelancers, talent, and vendor contributions"
    },
    {
      icon: Shield,
      title: "Rights Clearance Documentation",
      description: "Comprehensive tracking of all licensing agreements, permissions, and usage restrictions"
    },
    {
      icon: Archive,
      title: "Distribution and Usage History",
      description: "Complete tracking of where and how campaign assets are used across all channels"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Advertising"
        subtitle="Comprehensive rights management for modern advertising campaigns"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Modern advertising operates at unprecedented speed and scale, combining multiple content types, creators, and distribution channels in complex multimedia campaigns. Yet the industry struggles with fragmented rights management systems that create legal risks, financial exposure, and operational inefficiencies when managing the diverse creative assets that power today&apos;s advertising ecosystem.
          </p>
        </div>
      </PageSection>

      {/* The Advertising Industry's Rights Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Advertising Industry&apos;s Rights Crisis</h2>
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

      {/* How Creation Rights Transforms Advertising Rights Management */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Advertising Rights Management</h2>
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
            Our comprehensive provenance system captures the complexity of advertising campaign development, from creative brief to final distribution with complete rights and contributor documentation.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Advertising</h2>
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

      {/* Advertising Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Advertising Industry Integration</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advertising Industry Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Advertising Operations?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading advertising agencies and brands who have streamlined their rights management, reduced legal risks, and built sustainable creator partnerships through comprehensive campaign protection that ensures compliance while enabling creative innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Advertising Demo</Link>
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