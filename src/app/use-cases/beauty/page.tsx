import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Sparkles, 
  DollarSign, 
  CheckCircle,
  Star,
  Users,
  Search,
  Bot,
  Palette,
  Monitor,
  Video,
  Heart,
  Leaf,
  X
} from "lucide-react";
import Link from "next/link";

export default function BeautyPage() {
  const challenges = [
    {
      icon: Video,
      title: "Content Theft & Tutorial Copying",
      description: "Original beauty content is constantly stolen and republished",
      details: [
        "Tutorial appropriation with makeup tutorials copied without attribution",
        "Look replication with signature makeup looks recreated by competitors", 
        "Product photography theft by counterfeit sellers and competitors",
        "Campaign asset misuse with marketing materials used without permission"
      ]
    },
    {
      icon: Palette,
      title: "Product & Formula Copying",
      description: "Beauty innovations face rapid unauthorized replication",
      details: [
        "Copycat products with successful beauty products quickly copied",
        "Formula theft with proprietary cosmetic formulations reverse-engineered",
        "Packaging design copying with distinctive branding elements replicated",
        "Color palette appropriation with unique combinations copied across lines"
      ]
    },
    {
      icon: Bot,
      title: "AI-Generated Beauty Threats",
      description: "Artificial intelligence creates new challenges for beauty creators",
      details: [
        "Deepfake beauty content creating fake tutorials using real creator faces",
        "Synthetic influencer competition with AI-generated beauty influencers",
        "Automated look generation creating makeup looks from copyrighted tutorials",
        "Virtual try-on appropriation using creator likenesses without consent"
      ]
    }
  ];

  const solutions = [
    {
      icon: Sparkles,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive beauty content protection and attribution",
      features: [
        "Complete beauty registration for all creative elements",
        "Sophisticated beauty licensing for diverse applications",
        "Advanced beauty revenue management with multi-party splits",
        "Virtual beauty integration and AR filter rights"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for beauty content",
      features: [
        "Real-time beauty verification for platforms and brands",
        "Comprehensive beauty verification with content authenticity",
        "Advanced beauty recognition with AI-powered detection",
        "Comprehensive beauty protection against theft and deepfakes"
      ]
    },
    {
      icon: DollarSign,
      title: "Advanced Beauty Revenue Management",
      description: "Sophisticated monetization for beauty creators",
      features: [
        "Multi-party revenue splits for creators and collaborators",
        "Affiliate commission optimization with transparent tracking",
        "Brand partnership revenue with automated sharing",
        "Product licensing revenue for formula and innovation development"
      ]
    }
  ];

  const successStories = [
    {
      name: "Glam by Sofia",
      role: "Beauty Influencer",
      challenge: "Viral makeup tutorials being copied without attribution with AI systems creating fake tutorials using her face and voice",
      results: [
        "$180,000 in annual licensing revenue from legitimate tutorial usage",
        "90% reduction in unauthorized content theft through automated detection",
        "25 major brand collaborations with transparent revenue sharing",
        "Enhanced personal brand protection through comprehensive deepfake detection"
      ]
    },
    {
      name: "Pure Glow Cosmetics", 
      role: "Indie Beauty Brand",
      challenge: "Innovative skincare formulations being copied by larger brands with distinctive packaging replicated by counterfeit sellers",
      results: [
        "$320,000 in formula licensing revenue from legitimate beauty brands",
        "85% reduction in counterfeit products through automated detection",
        "15 major retail partnerships with verified product authenticity",
        "Enhanced brand integrity through comprehensive formulation protection"
      ]
    },
    {
      name: "Artistry United",
      role: "Makeup Artist Collective", 
      challenge: "Collaborative makeup looks and shared techniques being used without proper attribution to individual artists",
      results: [
        "$150,000 in collective licensing revenue distributed fairly among artists",
        "95% improvement in attribution accuracy through automated crediting",
        "30 major campaign partnerships with transparent collaboration tracking",
        "Enhanced collective reputation through protected shared innovations"
      ]
    }
  ];

  const features = [
    {
      icon: Video,
      title: "Beauty Content Creation Integration",
      description: "Video editing integration, photo enhancement tools, AR filter development, and live streaming integration."
    },
    {
      icon: Heart,
      title: "Beauty Industry Ecosystem",
      description: "Brand partnership management, affiliate program integration, e-commerce platform integration, and beauty education."
    },
    {
      icon: Palette,
      title: "Product Development Support",
      description: "Formula documentation, packaging design rights, color innovation protection, and sustainability integration."
    },
    {
      icon: Monitor,
      title: "Digital Beauty Innovation",
      description: "AR beauty integration, AI beauty tool rights, virtual influencer management, and metaverse beauty rights."
    },
    {
      icon: Leaf,
      title: "Sustainable Beauty Leadership",
      description: "Clean beauty innovation, cruelty-free verification, packaging sustainability, and ingredient transparency."
    },
    {
      icon: Users,
      title: "Inclusive Beauty Support",
      description: "Inclusive shade range protection, cultural beauty practices, accessibility innovation, and community representation."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Tutorial content stolen without creator attribution",
        "AI systems creating deepfake beauty content using creator faces", 
        "Product formulations copied by competitors without authorization",
        "Complex brand partnerships with unclear revenue sharing",
        "Counterfeit products using stolen brand assets and packaging",
        "Affiliate marketing with opaque commission tracking"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated detection and protection against tutorial theft with attribution",
        "Comprehensive deepfake detection and likeness protection systems",
        "Protected product formulations with legitimate licensing opportunities",
        "Transparent brand partnerships with automated revenue distribution", 
        "Real-time counterfeit detection and brand asset protection",
        "Clear affiliate tracking with fair commission distribution and transparency"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights protect against deepfake beauty content using my face?",
      answer: "Our AI detection systems monitor for unauthorized use of your likeness in beauty content and can identify deepfake tutorials, enabling immediate enforcement actions and protection of your personal brand."
    },
    {
      question: "Can Creation Rights help me manage brand partnerships and sponsored content?",
      answer: "Yes, our system provides comprehensive tools for managing influencer collaborations, tracking sponsored content usage, and ensuring fair compensation for brand partnerships."
    },
    {
      question: "How do you protect beauty product formulations from being copied?",
      answer: "Our system documents and protects cosmetic formulations while enabling legitimate licensing opportunities, with automated detection of copycat products across the market."
    },
    {
      question: "What happens if someone recreates my signature makeup look without permission?",
      answer: "Our Content ID Layer detects when your signature looks are recreated and can initiate licensing negotiations or enforcement actions based on your preferences and licensing terms."
    },
    {
      question: "How does Creation Rights support affiliate marketing in beauty?",
      answer: "Our system provides transparent tracking of affiliate relationships and automated revenue distribution, ensuring fair compensation for beauty product recommendations and sales."
    },
    {
      question: "Can Creation Rights integrate with my existing beauty content creation workflow?",
      answer: "Yes, we provide integrations with major social media platforms, video editing tools, and beauty applications, enabling seamless rights protection within your existing creative process."
    }
  ];

  const advancedFeatures = [
    {
      category: "Content & Creation",
      items: [
        "Video Editing Integration - Direct protection from beauty tutorial editing software",
        "Photo Enhancement Tools - Rights management for beauty photography applications", 
        "AR Filter Development - Protection for custom beauty filters and virtual try-on",
        "Live Streaming Integration - Real-time rights management for beauty live streams"
      ]
    },
    {
      category: "Industry & Business",
      items: [
        "Brand Partnership Management - Automated rights for influencer collaborations",
        "Affiliate Program Integration - Transparent tracking and revenue sharing",
        "E-commerce Platform Integration - Rights verification for beauty product sales",
        "Beauty Education Integration - Licensing for schools and professional training"
      ]
    },
    {
      category: "Innovation & Sustainability",
      items: [
        "Formula Documentation - Comprehensive protection for cosmetic formulations",
        "Packaging Design Rights - Protection for product packaging and branding",
        "Color Innovation Protection - Rights for unique color formulations",
        "Sustainability Integration - Protection for eco-friendly beauty innovations"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Palette,
      title: "Creative Development",
      description: "Complete process from concept to final tutorial or product with iteration tracking"
    },
    {
      icon: Users,
      title: "Collaborative Contributions",
      description: "Clear attribution for makeup artists, chemists, photographers, and other contributors"
    },
    {
      icon: Sparkles,
      title: "Product Innovation",
      description: "Documentation of formula development, ingredient sourcing, and manufacturing processes"
    },
    {
      icon: Heart,
      title: "Brand Evolution",
      description: "Tracking of brand identity development, campaign creation, and visual asset evolution"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Beauty"
        subtitle="Comprehensive rights protection for beauty creators and brands"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            The beauty industry thrives on creativity, innovation, and personal expression, yet creators face unprecedented challenges protecting their work in the digital age. From copycat products and stolen tutorials to AI-generated beauty content using creator likenesses without permission, the beauty community needs sophisticated tools that preserve creative integrity while enabling fair collaboration and monetization.
          </p>
        </div>
      </PageSection>

      {/* The Beauty Industry's Rights Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Beauty Industry&apos;s Rights Crisis</h2>
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

      {/* How Creation Rights Transforms Beauty Protection */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Beauty Protection</h2>
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
            Our comprehensive provenance system captures the complexity of beauty creation, from initial concept to final tutorial and product development.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Beauty</h2>
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

      {/* Beauty Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Beauty Industry Integration</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Beauty Industry Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Beauty Business?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading beauty creators and brands who have protected their creative works, automated their licensing processes, and built sustainable beauty businesses through comprehensive rights management that promotes fair collaboration and authentic creativity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Beauty Industry Demo</Link>
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