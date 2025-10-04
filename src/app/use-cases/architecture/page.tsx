import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Shield, 
  DollarSign, 
  Eye, 
  CheckCircle,
  X,
  Star,
  Lock,
  BarChart3,
  Users,
  Search,
  Bot,
  Globe,
  Layers
} from "lucide-react";
import Link from "next/link";

export default function ArchitecturePage() {
  const challenges = [
    {
      icon: X,
      title: "Widespread Design Theft & Misappropriation",
      description: "Your innovative designs spread without recognition or compensation",
      details: [
        "Competition plagiarism and unauthorized submissions",
        "Unauthorized plan reuse by developers", 
        "Render appropriation in marketing materials",
        "Element extraction across multiple projects"
      ]
    },
    {
      icon: Bot,
      title: "AI-Generated Derivative Works",
      description: "Your architectural innovations become training data without consent",
      details: [
        "Style replication by AI systems",
        "Structural copying in machine learning models",
        "Detail appropriation in AI-generated designs",
        "Commercial AI products using your contributions"
      ]
    },
    {
      icon: Users,
      title: "Complex Collaboration Attribution",
      description: "Multi-disciplinary projects create attribution and revenue challenges",
      details: [
        "Team credit issues across disciplines",
        "Studio vs. individual rights confusion",
        "Client relationship complexity",
        "International project IP challenges"
      ]
    }
  ];

  const solutions = [
    {
      icon: Building2,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive protection for architectural intellectual property",
      features: [
        "Multi-format protection for all design files",
        "Version control and design evolution tracking",
        "Collaboration documentation and attribution",
        "Tool integration with architectural software"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and enforcement for architectural IP",
      features: [
        "Pre-development verification systems",
        "Real-time architectural rights checking",
        "Advanced architectural recognition AI",
        "Comprehensive enforcement capabilities"
      ]
    },
    {
      icon: DollarSign,
      title: "Sophisticated Architectural Licensing",
      description: "Flexible licensing that understands architectural practice",
      features: [
        "Usage-based licensing for different applications",
        "Development rights and adaptation permissions",
        "Geographic restrictions and territory management",
        "Multi-party revenue splits and royalties"
      ]
    }
  ];

  const successStories = [
    {
      name: "GreenSpace Architects",
      role: "Sustainable Design Studio",
      challenge: "Passive house designs copied by competitors and used in AI-generated models without attribution",
      results: [
        "$280,000 in licensing revenue from sustainable innovations",
        "12 major enforcement actions against unauthorized construction",
        "$3,200/month in AI licensing deals",
        "Enhanced reputation as sustainable design leaders"
      ]
    },
    {
      name: "MetroDesign Collective", 
      role: "Urban Planning Firm",
      challenge: "Award-winning urban planning concepts adapted by other cities without proper licensing",
      results: [
        "$450,000 in master planning licensing from 8 cities",
        "25 municipal partnerships with proper attribution",
        "International expansion through verified provenance",
        "Policy influence through documented innovation"
      ]
    },
    {
      name: "Parametric Innovations",
      role: "Computational Design Studio", 
      challenge: "Parametric design algorithms reverse-engineered and used in competing software",
      results: [
        "$180,000 in algorithm licensing to software companies",
        "15 major firms licensing parametric design systems",
        "Educational partnerships with 12 architecture schools",
        "Software integration deals with 3 major CAD platforms"
      ]
    }
  ];

  const features = [
    {
      icon: Layers,
      title: "BIM Integration & Collaboration",
      description: "Direct protection from Revit and other BIM workflows with automatic team attribution and version control."
    },
    {
      icon: Shield,
      title: "Regulatory Compliance Integration",
      description: "Seamless integration with building codes, approval processes, and international architectural standards."
    },
    {
      icon: Globe,
      title: "Digital Twin & Smart City Integration",
      description: "Rights management for IoT integration, VR experiences, and metaverse architectural projects."
    },
    {
      icon: Eye,
      title: "Advanced Architectural Recognition",
      description: "AI-powered detection of structural systems, spatial arrangements, and distinctive design elements."
    },
    {
      icon: BarChart3,
      title: "Competition & Award Integration",
      description: "Automatic originality checking for competition entries with comprehensive winner protection."
    },
    {
      icon: Lock,
      title: "International Practice Management",
      description: "Cross-border licensing with automatic compliance and cultural adaptation rights management."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Designs stolen without recourse",
        "AI training on your work for free", 
        "Complex manual licensing negotiations",
        "Revenue going to unauthorized users",
        "No structural innovation protection",
        "Attribution lost across platforms"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automatic theft detection & enforcement",
        "AI licensing royalties from innovations",
        "Smart automated licensing systems",
        "Direct architect compensation", 
        "Complete structural fingerprinting",
        "Embedded dynamic metadata tracking"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights detect when someone builds a structure based on my designs?",
      answer: "Our AI analyzes architectural elements, proportions, and spatial relationships to identify when built structures incorporate your protected design innovations, even with modifications."
    },
    {
      question: "Can I protect both the visual design and the underlying structural innovations?",
      answer: "Yes, Creation Rights protects both the aesthetic elements and the technical innovations, allowing you to license design appearance separately from structural engineering solutions."
    },
    {
      question: "How do you handle collaborative projects with multiple architects and engineers?",
      answer: "Our system automatically tracks individual contributions and manages revenue sharing according to predetermined agreements, with complete transparency for all collaborators."
    },
    {
      question: "What happens if a developer builds my design without permission?",
      answer: "We provide comprehensive enforcement including cease and desist notices, licensing negotiations, and legal support for unauthorized construction projects."
    },
    {
      question: "Can I license my designs for use in virtual environments and games?",
      answer: "Absolutely. Our licensing system includes specific terms for digital environments, virtual reality, and gaming applications with appropriate usage tracking and compensation."
    },
    {
      question: "How does international licensing work for global architectural practices?",
      answer: "Creation Rights automatically adapts to local IP laws and building codes, providing seamless international licensing with proper legal compliance in each jurisdiction."
    }
  ];

  const advancedFeatures = [
    {
      category: "BIM Integration",
      items: [
        "Revit Integration - Direct protection from Building Information Modeling workflows",
        "Collaboration Tracking - Automatic attribution for all BIM contributors", 
        "Version Control - Complete design development history",
        "Clash Detection Rights - Protection for coordination innovations"
      ]
    },
    {
      category: "Regulatory Compliance",
      items: [
        "Code Compliance Tracking - Documentation of regulatory solutions",
        "Approval Process Integration - Licensing verification during permits",
        "International Standards - Adaptation to different building codes",
        "Sustainability Certification - LEED and BREEAM integration"
      ]
    },
    {
      category: "Digital Innovation",
      items: [
        "IoT Integration - Smart building sensor rights management",
        "Virtual Reality Licensing - VR walkthrough protection",
        "Augmented Reality Rights - AR application licensing",
        "Metaverse Architecture - Virtual world project protection"
      ]
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Architecture"
        subtitle="Comprehensive protection for architectural innovation and design"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Architects and designers are the visionaries who shape our built environment, yet their intellectual property faces constant threats in the digital age. From unauthorized reuse of plans and renders to AI systems generating derivative designs without attribution, architectural creators need sophisticated protection that matches the complexity of their work.
          </p>
        </div>
      </PageSection>

      {/* The Architect's Challenge */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">The Architect&apos;s Challenge</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-muted/20 p-8  border border-border">
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

      {/* How Creation Rights Transforms Architectural Protection */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-center">How Creation Rights Transforms Architectural Protection</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-background border border-border p-8 ">
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
          <h2 className="text-4xl font-semibold mb-12 text-center">Advanced Features for Architects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6  border border-border bg-card">
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Technical Integration Details */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Technical Integration</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((category, index) => (
              <div key={index} className="bg-background border border-border p-8 ">
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
      <PageSection>
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
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Architectural Success Stories</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <div key={index} className="bg-background border border-border p-8 ">
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
      <PageSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to Protect Your Architectural Innovation?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading architectural firms who have secured their design innovations and unlocked new revenue streams through comprehensive IP protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Architecture Demo</Link>
            </Button>
          </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection className="bg-muted/20">
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