import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  DollarSign, 
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Search,
  Bot,
  Globe,
  Archive,
  Monitor,
  FileText,
  Clock,
  Edit,
  Library,
  X
} from "lucide-react";
import Link from "next/link";

export default function AuthorsPage() {
  const challenges = [
    {
      icon: FileText,
      title: "Unauthorized Reproduction & Plagiarism",
      description: "Original writing is constantly stolen and republished without permission",
      details: [
        "Content mill exploitation stealing articles and stories for ad revenue",
        "Academic plagiarism copying passages without attribution", 
        "Blog and website theft republishing creative writing without consent",
        "International piracy with unauthorized translations and distribution"
      ]
    },
    {
      icon: Bot,
      title: "AI Training & Style Imitation",
      description: "Artificial intelligence systems exploit literary work without consent",
      details: [
        "Unauthorized training data from copyrighted books and articles",
        "Style replication mimicking distinctive authorial voices",
        "Plot and character appropriation in AI-generated stories",
        "Automated writing tools creating derivatives from copyrighted content"
      ]
    },
    {
      icon: TrendingUp,
      title: "Publishing & Platform Challenges",
      description: "Modern publishing involves complex rights across multiple platforms",
      details: [
        "Platform rights confusion with unclear licensing terms",
        "Translation rights complexity and unauthorized international distribution",
        "Adaptation rights issues with unfair revenue sharing",
        "Educational use ambiguity without proper licensing"
      ]
    }
  ];

  const solutions = [
    {
      icon: BookOpen,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive protection for literary works",
      features: [
        "Complete literary registration for all written content",
        "Sophisticated literary licensing for diverse publishing needs",
        "Advanced literary revenue management with multi-party splits",
        "AI training controls and adaptation history tracking"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for literary content",
      features: [
        "Real-time literary verification for publishers and platforms",
        "Comprehensive literary verification with attribution accuracy",
        "Advanced literary recognition with AI-powered detection",
        "Comprehensive literary protection against plagiarism and piracy"
      ]
    },
    {
      icon: DollarSign,
      title: "Advanced Literary Revenue Management",
      description: "Sophisticated monetization for authors",
      features: [
        "Multi-party revenue splits for authors, agents, and publishers",
        "International royalty collection with global tracking",
        "Platform revenue optimization across publishing channels",
        "Performance-based compensation for sales and cultural impact"
      ]
    }
  ];

  const successStories = [
    {
      name: "Sarah Chen",
      role: "Independent Novelist",
      challenge: "Self-published fantasy novels being pirated internationally with AI systems generating fan fiction using protected characters",
      results: [
        "$180,000 in recovered licensing revenue from legitimate adaptations",
        "90% reduction in piracy through automated global detection",
        "25 legitimate licensing deals for translations and adaptations",
        "Enhanced creative control through comprehensive character protection"
      ]
    },
    {
      name: "Dr. Michael Rodriguez", 
      role: "Academic Author",
      challenge: "Academic papers and textbook content used without permission by educational platforms and AI training datasets",
      results: [
        "$95,000 in annual licensing revenue from educational platforms",
        "85% improvement in citation compliance through automated enforcement",
        "12 major educational partnerships with proper licensing",
        "Enhanced academic recognition through protected research attribution"
      ]
    },
    {
      name: "Emma Thompson",
      role: "Freelance Journalist", 
      challenge: "Investigative articles republished by aggregators without attribution, undermining freelance journalism career",
      results: [
        "$120,000 in syndication revenue from legitimate news outlets",
        "75% increase in byline compliance through automated enforcement",
        "18 major publication partnerships with streamlined licensing",
        "Sustainable freelance career through protected intellectual property"
      ]
    }
  ];

  const features = [
    {
      icon: Edit,
      title: "Writing Workflow Integration",
      description: "Word processor integration, publishing platform automation, manuscript management, and collaboration tools."
    },
    {
      icon: Library,
      title: "Publishing Industry Support",
      description: "Agent and publisher relations, international rights management, adaptation rights, and backlist management."
    },
    {
      icon: BookOpen,
      title: "Educational & Academic Integration",
      description: "Academic publishing rights, course material licensing, research attribution, and open access integration."
    },
    {
      icon: Monitor,
      title: "Digital Publishing Innovation",
      description: "E-book and audiobook rights, serialized content rights, interactive fiction rights, and multimedia integration."
    },
    {
      icon: Bot,
      title: "AI Collaboration Framework",
      description: "AI writing tool integration, style analysis protection, content generation licensing, and creative collaboration AI."
    },
    {
      icon: Globe,
      title: "Global Literary Community",
      description: "Translation rights management, cultural exchange programs, cross-cultural adaptation, and literary heritage protection."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Content mills stealing articles without compensation",
        "AI systems training on literary work without consent", 
        "Complex publishing contracts with unclear royalty tracking",
        "Unauthorized translations and international piracy",
        "Attribution stripping and byline removal",
        "Educational use without proper licensing or payment"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated detection and protection against content theft",
        "AI training consent controls with fair compensation systems",
        "Transparent royalty tracking and automated revenue distribution",
        "Protected international licensing with authorized translations", 
        "Comprehensive attribution enforcement and byline protection",
        "Fair educational licensing with proper compensation and attribution"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights protect my writing style from AI imitation?",
      answer: "Our AI detection systems analyze your distinctive writing patterns and can identify when AI systems generate content that mimics your unique authorial voice, enabling enforcement actions."
    },
    {
      question: "Can Creation Rights help me manage international translation rights?",
      answer: "Yes, our system provides comprehensive international rights management with automatic adaptation to local copyright laws and translation licensing requirements."
    },
    {
      question: "How do you handle collaborative writing projects and co-author rights?",
      answer: "Our system tracks individual contributions in collaborative works and enables flexible revenue sharing based on actual creative input and predetermined agreements."
    },
    {
      question: "What happens if someone plagiarizes my work in an academic setting?",
      answer: "Our Content ID Layer detects plagiarism across academic platforms and can generate evidence packages for academic integrity proceedings while offering licensing options for legitimate use."
    },
    {
      question: "How does Creation Rights support self-published authors?",
      answer: "We provide comprehensive rights management tools specifically designed for independent authors, including platform integration, international licensing, and automated revenue collection."
    },
    {
      question: "Can Creation Rights integrate with my existing writing and publishing workflow?",
      answer: "Yes, we offer integrations with major writing tools, publishing platforms, and content management systems to provide seamless rights protection within your existing workflow."
    }
  ];

  const advancedFeatures = [
    {
      category: "Writing & Creation",
      items: [
        "Word Processor Integration - Direct protection from Microsoft Word, Google Docs, Scrivener",
        "Publishing Platform Integration - Automated rights for Amazon KDP, Medium, Substack", 
        "Manuscript Management - Version control and rights tracking through editing",
        "Collaboration Tools - Rights management for co-authored works and editorial partnerships"
      ]
    },
    {
      category: "Publishing & Distribution",
      items: [
        "Agent and Publisher Relations - Automated contract management and royalty distribution",
        "International Rights Management - Comprehensive licensing for global publishing",
        "Adaptation Rights - Protection and licensing for film, TV, theater adaptations",
        "Backlist Management - Ongoing rights management for older works"
      ]
    },
    {
      category: "Academic & Innovation",
      items: [
        "Academic Publishing Rights - Specialized licensing for journals and conferences",
        "Course Material Licensing - Rights for textbooks and educational resources",
        "Research Attribution - Comprehensive citation tracking and integrity support",
        "Digital Publishing Innovation - E-book, audiobook, and interactive fiction rights"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: Edit,
      title: "Creative Development",
      description: "Complete history of drafts, revisions, and creative evolution with version control"
    },
    {
      icon: Users,
      title: "Collaborative Contributions",
      description: "Clear attribution for co-authors, editors, researchers, and other contributors"
    },
    {
      icon: Archive,
      title: "Source Material Documentation",
      description: "Tracking of research sources, interviews, and reference materials"
    },
    {
      icon: Clock,
      title: "Publication Timeline",
      description: "Detailed records of submission, acceptance, and publication across platforms"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Authors"
        subtitle="Comprehensive rights protection for writers and literary creators"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Authors are the architects of human imagination, yet they face unprecedented threats to their intellectual property in the digital age. From AI systems training on their work without consent to unauthorized translations and paraphrasing tools, writers need sophisticated protection that preserves creative freedom while ensuring fair compensation for their literary contributions.
          </p>
        </div>
      </PageSection>

      {/* The Author's Digital Dilemma */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">The Author&apos;s Digital Dilemma</h2>
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

      {/* How Creation Rights Transforms Literary Protection */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-center">How Creation Rights Transforms Literary Protection</h2>
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
            Our comprehensive provenance system captures the complexity of literary creation, from initial drafts to final publication and adaptation.
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
          <h2 className="text-4xl font-semibold mb-12 text-center">Advanced Features for Authors</h2>
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

      {/* Literary Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Literary Industry Integration</h2>
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
          <h2 className="text-4xl font-semibold mb-12 text-center">Author Success Stories</h2>
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
          <h2 className="text-4xl font-semibold mb-6">Ready to Transform Your Literary Career?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join thousands of authors, journalists, and literary creators who have protected their creative works, automated their rights management, and built sustainable writing careers through comprehensive intellectual property protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Author Demo</Link>
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