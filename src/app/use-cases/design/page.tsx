import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Palette, 
  DollarSign, 
  CheckCircle,
  Star,
  Users,
  Search,
  Bot,
  Settings,
  Archive,
  Monitor,
  Heart,
  Share2,
  Brush,
  Layout,
  X
} from "lucide-react";
import Link from "next/link";

export default function DesignPage() {
  const challenges = [
    {
      icon: Share2,
      title: "Uncredited Design Reuse",
      description: "Original design work is constantly stolen and used without attribution",
      details: [
        "Logo and brand theft with company logos used by competitors and unauthorized businesses",
        "UI component appropriation with interface designs copied across websites and applications", 
        "Template and asset theft with design templates and graphics stolen from portfolios",
        "Print design piracy with packaging designs and print materials reproduced without permission"
      ]
    },
    {
      icon: Bot,
      title: "AI Training & Generation Threats",
      description: "Artificial intelligence creates new challenges for design protection",
      details: [
        "Portfolio scraping with AI companies harvesting design portfolios without designer consent",
        "Style replication with AI systems generating designs mimicking distinctive aesthetics",
        "Automated design generation creating derivative designs based on copyrighted work",
        "Design pattern appropriation with machine learning systems learning techniques without attribution"
      ]
    },
    {
      icon: Layout,
      title: "Cross-Platform Usage Explosion",
      description: "Design work spreads across multiple platforms and formats",
      details: [
        "Multi-platform replication with designs used across websites, apps, and print without licensing",
        "Format transformation with 2D designs converted to 3D and UI designs converted to code",
        "Brand asset misuse with corporate design assets used beyond authorized scope",
        "Template marketplace abuse with design templates sold without original designer compensation"
      ]
    }
  ];

  const solutions = [
    {
      icon: Palette,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive design work protection and attribution",
      features: [
        "Complete design registration with detailed documentation of creative elements",
        "Sophisticated design licensing for diverse applications and usage scenarios",
        "Advanced design revenue management with multi-usage tracking",
        "Client project rights with balanced designer-client relationship management"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for design content",
      features: [
        "Real-time design verification for agencies, clients, and marketplaces",
        "Comprehensive design verification with authenticity confirmation",
        "Advanced design recognition with AI-powered visual detection",
        "Comprehensive design protection against theft and unauthorized usage"
      ]
    },
    {
      icon: DollarSign,
      title: "Advanced Design Revenue Management",
      description: "Sophisticated monetization for design professionals",
      features: [
        "Multi-usage revenue tracking with automated compensation for extended usage",
        "Template and asset sales with revenue management for reusable components",
        "Licensing extension revenue with automated collection for expanded usage",
        "Collaborative project revenue with transparent sharing for team projects"
      ]
    }
  ];

  const successStories = [
    {
      name: "Creative Identity Studio",
      role: "Freelance Brand Designer",
      challenge: "Custom logo designs being used beyond contracted terms and stolen by competitors, with AI systems generating similar brand identities without attribution",
      results: [
        "$180,000 in additional licensing revenue from extended brand usage and legitimate licensing",
        "90% reduction in logo theft through automated detection and enforcement across platforms",
        "25 major brand partnerships with enhanced contract protection and usage monitoring",
        "Enhanced professional reputation through comprehensive brand identity protection and verified authenticity"
      ]
    },
    {
      name: "Digital Experience Collective", 
      role: "UI/UX Design Agency",
      challenge: "Comprehensive design systems being copied by competitors and used without permission across multiple client projects and platforms",
      results: [
        "$320,000 in design system licensing revenue from companies using UI components legally",
        "85% improvement in component attribution through automated tracking and enforcement",
        "40 major technology partnerships with protected design systems and fair compensation",
        "Industry leadership in design system protection and component licensing"
      ]
    },
    {
      name: "Sustainable Package Solutions",
      role: "Product Packaging Designer", 
      challenge: "Innovative eco-friendly packaging designs being copied by competitors and used without permission across multiple product categories",
      results: [
        "$220,000 in packaging design licensing revenue from companies implementing sustainable solutions",
        "95% reduction in design copying through advanced visual recognition and enforcement",
        "18 major retail partnerships with protected packaging innovations and environmental compliance",
        "Enhanced sustainability impact through protected eco-friendly design innovations and fair compensation"
      ]
    }
  ];

  const features = [
    {
      icon: Brush,
      title: "Design Tool Integration",
      description: "Adobe Creative Suite integration, Figma and Sketch integration, 3D design software integration, and prototyping tools."
    },
    {
      icon: Users,
      title: "Design Business Support",
      description: "Client relationship management, portfolio protection, template marketplace integration, and design system management."
    },
    {
      icon: Layout,
      title: "Collaborative Design Support",
      description: "Multi-designer project management, design agency integration, client collaboration tools, and version control integration."
    },
    {
      icon: Bot,
      title: "AI-Assisted Design Innovation",
      description: "AI design tool integration, style transfer protection, automated design attribution, and human-AI collaboration."
    },
    {
      icon: Heart,
      title: "Sustainable Design Practices",
      description: "Eco-friendly design protection, circular design integration, social impact design, and cultural design respect."
    },
    {
      icon: Monitor,
      title: "Emerging Design Technologies",
      description: "AR/VR design rights, interactive design protection, generative design rights, and cross-reality design."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Design work stolen and used without attribution across multiple platforms",
        "AI systems training on design portfolios without designer consent or compensation", 
        "Logo and brand identities used by competitors and unauthorized businesses",
        "UI components and design systems copied without proper licensing",
        "Complex client relationships with unclear ownership and usage rights",
        "Revenue loss from unauthorized usage and template marketplace abuse"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated detection and protection against unauthorized design usage with proper attribution",
        "AI training consent controls with fair compensation for participating designers",
        "Protected brand identities with comprehensive logo and brand usage monitoring",
        "Secure UI component licensing with automated tracking and revenue collection", 
        "Clear client project rights with balanced designer-client relationship management",
        "Complete revenue optimization through protected licensing and usage monitoring"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights protect my design work from being copied by competitors?",
      answer: "Our Content ID Layer continuously monitors for unauthorized usage of your designs across websites, applications, and print materials, enabling immediate enforcement actions when copying is detected."
    },
    {
      question: "Can Creation Rights help me manage rights for collaborative design projects?",
      answer: "Yes, our system tracks individual contributions in collaborative projects and enables transparent revenue sharing based on actual creative input and predetermined agreements."
    },
    {
      question: "How do you handle client relationships and design ownership?",
      answer: "Our flexible licensing system enables balanced rights management between designers and clients, with clear documentation of usage rights and ownership terms."
    },
    {
      question: "What happens if AI systems generate designs similar to my work?",
      answer: "Our AI detection systems identify when machine learning models create derivative designs based on your copyrighted work, enabling enforcement actions and licensing opportunities."
    },
    {
      question: "How does Creation Rights support template marketplaces and design asset sales?",
      answer: "We provide comprehensive rights management for design templates and assets sold across multiple platforms, ensuring proper attribution and revenue collection."
    },
    {
      question: "Can Creation Rights integrate with my existing design tools and workflow?",
      answer: "Yes, we offer integrations with major design software including Adobe Creative Suite, Figma, Sketch, and other professional design tools for seamless rights protection."
    }
  ];

  const advancedFeatures = [
    {
      category: "Tools & Integration",
      items: [
        "Adobe Creative Suite Integration - Direct protection from Photoshop, Illustrator, InDesign",
        "Figma and Sketch Integration - Rights management for UI/UX design tools", 
        "3D Design Software Integration - Rights management for Blender, Cinema 4D",
        "Prototyping Tool Integration - Rights management for InVision, Marvel platforms"
      ]
    },
    {
      category: "Business & Professional",
      items: [
        "Client Relationship Management - Integrated rights for client contracts and agreements",
        "Portfolio Protection - Comprehensive protection for design portfolios and showcases",
        "Template Marketplace Integration - Rights management for templates sold across platforms",
        "Design System Management - Rights management for UI component libraries"
      ]
    },
    {
      category: "Innovation & Collaboration",
      items: [
        "Multi-Designer Project Management - Rights management for collaborative design projects",
        "Design Agency Integration - Comprehensive rights management for creative teams",
        "AI Design Tool Integration - Rights management for AI-powered design tools",
        "AR/VR Design Rights - Rights management for augmented and virtual reality applications"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Brush,
      title: "Creative Development Process",
      description: "Complete design evolution from concept sketches to final deliverables"
    },
    {
      icon: Users,
      title: "Collaborative Contributions",
      description: "Clear attribution for design team members, clients, and creative contributors"
    },
    {
      icon: Settings,
      title: "Technical Specifications",
      description: "Documentation of design tools, techniques, and technical implementation details"
    },
    {
      icon: Archive,
      title: "Version History",
      description: "Comprehensive tracking of design iterations, revisions, and creative decisions"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Design"
        subtitle="Comprehensive rights protection for visual designers and creative professionals"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Design is the foundation of visual communication and user experience, yet designers face unprecedented challenges protecting their creative work in the digital age. From unauthorized logo usage and UI component theft to AI systems training on design portfolios without consent, creative professionals need sophisticated tools that preserve artistic integrity while enabling legitimate collaboration and innovation.
          </p>
        </div>
      </PageSection>

      {/* The Design Industry's Rights Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Design Industry&apos;s Rights Crisis</h2>
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

      {/* How Creation Rights Transforms Design Protection */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Design Protection</h2>
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
            Our comprehensive provenance system captures the complexity of design creation, from initial concept to final implementation with complete technical and collaborative documentation.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Design</h2>
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

      {/* Design Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Design Industry Integration</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Design Industry Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Design Career?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of designers who have protected their creative work, automated their rights management, and built sustainable design businesses through comprehensive design protection that preserves artistic integrity while ensuring fair compensation and collaboration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Design Demo</Link>
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