import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Camera, 
  DollarSign, 
  CheckCircle,
  Star,
  Users,
  Search,
  Bot,
  Globe,
  Settings,
  Heart,
  Share2,
  Edit,
  Eye,
  X
} from "lucide-react";
import Link from "next/link";

export default function PhotographyPage() {
  const challenges = [
    {
      icon: Share2,
      title: "Image Theft & Unauthorized Usage",
      description: "Original photographs are constantly stolen and used without permission",
      details: [
        "Social media reposting across Instagram, Pinterest without photographer attribution",
        "Commercial exploitation with businesses using photographs in advertising without licensing", 
        "Stock photo misuse with images used beyond licensed terms or from unauthorized sources",
        "Blog and website theft with photographs stolen for articles and publications"
      ]
    },
    {
      icon: Bot,
      title: "AI Training & Generation Threats",
      description: "Artificial intelligence creates new challenges for photographic protection",
      details: [
        "Dataset scraping with AI companies harvesting millions of photographs without consent",
        "Style replication with AI systems generating images mimicking distinctive techniques",
        "Synthetic image generation creating derivative images without attribution",
        "Deepfake and manipulation altering photographs for unauthorized purposes"
      ]
    },
    {
      icon: Eye,
      title: "Attribution & Credit Issues",
      description: "Photographers struggle to maintain proper recognition",
      details: [
        "Credit stripping with images shared without photographer bylines or attribution",
        "Metadata removal with EXIF data and copyright information stripped from files",
        "Watermark removal with unauthorized removal of photographer copyright notices",
        "Reverse image search limitations making it difficult to track usage"
      ]
    }
  ];

  const solutions = [
    {
      icon: Camera,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive photographic work protection and attribution",
      features: [
        "Complete image registration with detailed technical metadata",
        "Sophisticated photography licensing for diverse applications",
        "Advanced photography revenue management with multi-usage tracking",
        "Model and property rights integration with consent documentation"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for photographic content",
      features: [
        "Real-time image verification for media platforms and brands",
        "Comprehensive photography verification with authenticity confirmation",
        "Advanced photographic recognition with AI-powered detection",
        "Comprehensive photography protection against theft and unauthorized usage"
      ]
    },
    {
      icon: DollarSign,
      title: "Advanced Photography Revenue Management",
      description: "Sophisticated monetization for visual creators",
      features: [
        "Multi-usage revenue tracking with automated compensation",
        "International royalty collection with global revenue tracking",
        "Stock photography revenue with comprehensive management",
        "Fine art sales integration with gallery and collector tracking"
      ]
    }
  ];

  const successStories = [
    {
      name: "Eternal Moments Studio",
      role: "Wedding Photographer",
      challenge: "Wedding photographs being shared without permission across social media, with distinctive style being copied by competitors and AI systems",
      results: [
        "$150,000 in additional licensing revenue from legitimate commercial usage and style licensing",
        "90% reduction in unauthorized sharing through automated detection and client education",
        "25% increase in booking value through enhanced portfolio protection and credibility",
        "Enhanced client relationships through comprehensive privacy protection and usage control"
      ]
    },
    {
      name: "Global Perspectives", 
      role: "Stock Photographer",
      challenge: "Travel and lifestyle photographs being used beyond licensed terms and pirated across international markets without compensation",
      results: [
        "$280,000 in recovered licensing revenue from unauthorized commercial usage and violations",
        "85% improvement in licensing compliance through automated usage monitoring",
        "40 major stock platform partnerships with enhanced rights protection",
        "Global market expansion through comprehensive international rights management"
      ]
    },
    {
      name: "Contemporary Visions",
      role: "Fine Art Photographer", 
      challenge: "Fine art photographs being reproduced without permission for commercial products and used in AI training datasets without consent",
      results: [
        "$180,000 in fine art licensing revenue from legitimate commercial applications",
        "95% reduction in unauthorized reproduction through advanced image recognition",
        "15 major gallery partnerships with enhanced authenticity verification",
        "Enhanced artistic reputation through comprehensive protection and verified authenticity"
      ]
    }
  ];

  const features = [
    {
      icon: Camera,
      title: "Photography Workflow Integration",
      description: "Camera and equipment integration, editing software integration, portfolio platform integration, and print services."
    },
    {
      icon: Users,
      title: "Photography Business Support",
      description: "Client relationship management, model and property rights, gallery and exhibition rights, and stock photography optimization."
    },
    {
      icon: Settings,
      title: "Technical Photography Integration",
      description: "Photojournalism rights, commercial photography management, event photography rights, and architectural photography."
    },
    {
      icon: Bot,
      title: "Digital Photography Innovation",
      description: "AI photography collaboration, virtual and augmented reality, drone photography rights, and computational photography."
    },
    {
      icon: Heart,
      title: "Sustainable Photography Practices",
      description: "Environmental photography protection, cultural photography ethics, wildlife photography rights, and documentary support."
    },
    {
      icon: Globe,
      title: "Photography Community Development",
      description: "Photography education integration, community portfolio platforms, mentorship and development, and cultural exchange programs."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Photographs stolen and shared across social media without attribution or compensation",
        "AI systems training on photographic portfolios without photographer consent", 
        "Commercial businesses using images in advertising without proper licensing",
        "Credit stripping and metadata removal making attribution impossible",
        "Complex licensing challenges with unclear usage boundaries and enforcement",
        "Revenue loss from unauthorized usage and license violations"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated detection and protection against unauthorized sharing with proper attribution",
        "AI training consent controls with fair compensation for participating photographers",
        "Clear commercial licensing with automated usage tracking and enforcement",
        "Protected metadata and attribution information preserved across all platforms", 
        "Streamlined licensing management with clear boundaries and automated enforcement",
        "Complete revenue optimization through protected licensing and usage monitoring"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights protect my photographs from being stolen on social media?",
      answer: "Our Content ID Layer continuously monitors social media platforms and automatically detects when your photographs are shared without permission, enabling immediate enforcement actions."
    },
    {
      question: "Can Creation Rights help me manage model releases and property rights?",
      answer: "Yes, our system provides comprehensive tools for managing model releases, property permissions, and subject consent documentation integrated with your photography rights management."
    },
    {
      question: "How do you detect AI-generated images based on my photographs?",
      answer: "Our advanced AI detection systems can identify when machine learning models generate derivative images based on your copyrighted photographs, enabling enforcement and licensing opportunities."
    },
    {
      question: "What happens if someone uses my photograph beyond the licensed terms?",
      answer: "Our system automatically detects usage violations and can initiate enforcement actions, licensing negotiations, or legal procedures based on your preferences and licensing terms."
    },
    {
      question: "How does Creation Rights support stock photography and licensing?",
      answer: "We provide comprehensive stock photography management with automated licensing, usage tracking, and revenue optimization across all major stock photo platforms."
    },
    {
      question: "Can Creation Rights integrate with my existing photography workflow and tools?",
      answer: "Yes, we offer integrations with major photography software, camera systems, and portfolio platforms, enabling seamless rights protection within your existing professional workflow."
    }
  ];

  const advancedFeatures = [
    {
      category: "Workflow & Integration",
      items: [
        "Camera and Equipment Integration - Direct protection from professional cameras",
        "Editing Software Integration - Rights management within Adobe Lightroom and Photoshop", 
        "Portfolio Platform Integration - Rights management for photography websites",
        "Print and Product Integration - Rights management for photo printing services"
      ]
    },
    {
      category: "Business & Professional",
      items: [
        "Client Relationship Management - Integrated rights for client contracts",
        "Model and Property Rights - Comprehensive management of releases and permissions",
        "Gallery and Exhibition Rights - Rights management for fine art exhibitions",
        "Stock Photography Optimization - Revenue optimization tools for stock platforms"
      ]
    },
    {
      category: "Specialized & Innovation",
      items: [
        "Photojournalism Rights - Specialized tools for news photography and editorial",
        "Commercial Photography Management - Rights for advertising and marketing photography",
        "Event Photography Rights - Rights management for weddings and corporate events",
        "AI Photography Collaboration - Ethical AI development respecting photographer rights"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Camera,
      title: "Creative Process Documentation",
      description: "Complete shooting process from concept to final image with technical and artistic decisions"
    },
    {
      icon: Users,
      title: "Subject and Location Attribution",
      description: "Proper documentation of model releases, property rights, and location permissions"
    },
    {
      icon: Edit,
      title: "Collaborative Contributions",
      description: "Attribution for assistants, stylists, makeup artists, and other creative team members"
    },
    {
      icon: Settings,
      title: "Post-Processing History",
      description: "Documentation of editing techniques, software used, and artistic enhancements"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Photography"
        subtitle="Comprehensive rights protection for visual storytellers and image creators"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Photography is the art of capturing moments, emotions, and stories through visual imagery, yet photographers face unprecedented challenges protecting their work in the digital age. From unauthorized commercial use and social media theft to AI systems training on photographic portfolios without consent, visual creators need sophisticated tools that preserve artistic integrity while enabling legitimate licensing and collaboration.
          </p>
        </div>
      </PageSection>

      {/* The Photography Industry's Rights Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Photography Industry&apos;s Rights Crisis</h2>
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

      {/* How Creation Rights Transforms Photography Protection */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Photography Protection</h2>
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
            Our comprehensive provenance system captures the complexity of photographic creation, from initial concept to final image with complete technical and artistic documentation.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Photography</h2>
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

      {/* Photography Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Photography Industry Integration</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Photography Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Photography Career?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of photographers who have protected their visual work, automated their licensing management, and built sustainable photography businesses through comprehensive image protection that preserves artistic integrity while ensuring fair compensation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Photography Demo</Link>
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