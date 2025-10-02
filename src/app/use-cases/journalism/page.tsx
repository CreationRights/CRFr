import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Newspaper, 
  DollarSign, 
  CheckCircle,
  Star,
  Users,
  Search,
  Bot,
  Globe,
  Monitor,
  FileText,
  PenTool,
  Clock,
  Shield,
  X
} from "lucide-react";
import Link from "next/link";

export default function JournalismPage() {
  const challenges = [
    {
      icon: FileText,
      title: "Content Aggregation & Theft",
      description: "Original journalism is constantly stolen and republished without permission",
      details: [
        "Aggregator exploitation with minimal attribution and no compensation",
        "Content farm copying to generate ad revenue from stolen articles", 
        "Social media reposting without proper licensing or attribution",
        "International republication without respecting territorial rights"
      ]
    },
    {
      icon: Bot,
      title: "AI Training & Summarization Threats",
      description: "Artificial intelligence systems exploit journalistic content without consent",
      details: [
        "Unauthorized training data from vast news archives without consent",
        "Automated summarization competing with original articles",
        "AI-powered rewriting creating derivatives while avoiding detection",
        "News generation AI based on patterns from copyrighted journalism"
      ]
    },
    {
      icon: Users,
      title: "Freelancer & Attribution Challenges",
      description: "Independent journalists face particular vulnerabilities",
      details: [
        "Byline stripping with articles republished without attribution",
        "Freelancer rights confusion between journalists and outlets",
        "Photo and video theft without photographer compensation",
        "Source protection complications balancing transparency and confidentiality"
      ]
    }
  ];

  const solutions = [
    {
      icon: Newspaper,
      title: "Creation Rights Management (CRM)",
      description: "Comprehensive protection for journalistic content",
      features: [
        "Complete editorial registration for all journalistic work",
        "Sophisticated journalism licensing for news media",
        "Sustainable revenue management with multi-party splits",
        "Embargo controls and attribution requirements"
      ]
    },
    {
      icon: Search,
      title: "Creation Rights Exchange (CRX)",
      description: "Universal verification and protection for news content",
      features: [
        "Real-time editorial verification for aggregators and platforms",
        "Comprehensive journalism verification with attribution accuracy",
        "Advanced journalism recognition with AI-powered detection",
        "Comprehensive editorial protection against content farms"
      ]
    },
    {
      icon: DollarSign,
      title: "Sustainable Revenue Management",
      description: "Ethical monetization for journalism",
      features: [
        "Multi-party revenue splits for freelancers and staff",
        "Syndication revenue optimization for wire services",
        "International licensing revenue with global collection",
        "Performance-based compensation for article impact"
      ]
    }
  ];

  const successStories = [
    {
      name: "Truth Seekers Media",
      role: "Investigative News Organization",
      challenge: "Investigative reports being stolen by content farms and summarized by AI systems, undermining subscription revenue",
      results: [
        "$380,000 in recovered licensing revenue from legitimate aggregators",
        "85% reduction in unauthorized republication through automated detection",
        "20% increase in subscription revenue through protected exclusive content",
        "Enhanced investigative capacity through sustainable revenue protection"
      ]
    },
    {
      name: "Maria Santos", 
      role: "Freelance Photojournalist",
      challenge: "Powerful photojournalism being used without proper licensing or compensation, threatening independent career sustainability",
      results: [
        "$95,000 in annual licensing revenue from proper photo licensing",
        "90% improvement in attribution compliance through automated enforcement",
        "15 major news outlet partnerships with streamlined licensing",
        "Enhanced professional recognition through protected and attributed work"
      ]
    },
    {
      name: "Valley Chronicle",
      role: "Regional Newspaper", 
      challenge: "Local news content being republished by larger outlets without attribution, threatening community journalism sustainability",
      results: [
        "$150,000 in syndication revenue from larger outlets licensing content",
        "70% increase in digital subscription revenue through protected exclusives",
        "12 content partnership agreements with proper attribution",
        "Enhanced community impact through sustainable local journalism funding"
      ]
    }
  ];

  const features = [
    {
      icon: FileText,
      title: "Editorial Workflow Integration",
      description: "CMS integration, editorial calendar coordination, fact-checking integration, and multi-platform publishing rights."
    },
    {
      icon: Shield,
      title: "Source Protection & Ethics",
      description: "Confidential source protection, ethical licensing framework, academic research support, and press freedom integration."
    },
    {
      icon: Globe,
      title: "International Journalism Support",
      description: "Wire service integration, international correspondent protection, translation rights, and cultural sensitivity."
    },
    {
      icon: Monitor,
      title: "Digital News Innovation",
      description: "Multimedia journalism rights, social media integration, newsletter protection, and live reporting rights."
    },
    {
      icon: Bot,
      title: "AI Collaboration Framework",
      description: "AI-assisted reporting, automated transcription rights, news summarization licensing, and fact-checking AI integration."
    },
    {
      icon: Users,
      title: "Community Journalism Support",
      description: "Local news protection, freelancer support systems, nonprofit journalism rights, and citizen journalism integration."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "Content farms stealing articles without compensation",
        "AI systems training on journalism without consent", 
        "Freelancers losing attribution and revenue",
        "Aggregators exploiting content with minimal payment",
        "Complex international licensing challenges",
        "Revenue flowing to platforms instead of creators"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Automated detection and protection against content theft",
        "AI training consent controls with fair compensation systems",
        "Protected freelancer attribution and automated revenue collection",
        "Fair aggregator licensing with proper compensation and attribution", 
        "Streamlined global licensing with territorial compliance",
        "Optimized revenue flowing directly to journalists and news organizations"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights protect investigative journalism while maintaining source confidentiality?",
      answer: "Our system provides comprehensive content protection while maintaining strict confidentiality controls for sources, ensuring investigative journalism can be protected without compromising source safety."
    },
    {
      question: "Can Creation Rights help freelance journalists get fair compensation?",
      answer: "Yes, our automated licensing and revenue collection systems ensure freelancers receive proper compensation for their work across all platforms and uses."
    },
    {
      question: "How do you handle breaking news and time-sensitive content?",
      answer: "Our system includes real-time protection and licensing capabilities that work with breaking news workflows, embargo periods, and exclusive reporting requirements."
    },
    {
      question: "What happens if AI systems summarize our articles without permission?",
      answer: "Our Content ID Layer detects AI-generated summaries and paraphrases, enabling enforcement actions or licensing negotiations based on your preferences."
    },
    {
      question: "How does Creation Rights support press freedom and public interest journalism?",
      answer: "Our licensing framework includes special provisions for educational use, public interest reporting, and press freedom while ensuring journalists receive fair compensation."
    },
    {
      question: "Can Creation Rights integrate with our existing newsroom content management system?",
      answer: "Yes, we provide integrations with major CMS platforms used by news organizations, enabling seamless rights protection within existing editorial workflows."
    }
  ];

  const advancedFeatures = [
    {
      category: "Editorial & Workflow",
      items: [
        "Content Management System Integration - Direct protection from WordPress, Drupal platforms",
        "Editorial Calendar Integration - Rights coordinated with publication schedules", 
        "Fact-Checking Integration - Rights protection with verification workflows",
        "Multi-Platform Publishing - Coordinated rights across print, digital, social"
      ]
    },
    {
      category: "Ethics & Protection",
      items: [
        "Confidential Source Protection - Rights management maintaining source confidentiality",
        "Ethical Licensing Framework - Terms supporting press freedom and public interest",
        "Academic Research Support - Special licensing for journalism research",
        "Press Freedom Integration - Rights supporting investigative and watchdog reporting"
      ]
    },
    {
      category: "Global & Innovation",
      items: [
        "Wire Service Integration - Comprehensive rights for Reuters, AP services",
        "International Correspondent Protection - Rights for foreign correspondents",
        "Translation Rights - Licensing for international distribution",
        "Multimedia Journalism Rights - Protection for podcasts, video, interactive content"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: PenTool,
      title: "Editorial Process Documentation",
      description: "Complete workflow from assignment to publication with editor and contributor attribution"
    },
    {
      icon: Users,
      title: "Source Attribution",
      description: "Proper crediting of sources while maintaining confidentiality where required"
    },
    {
      icon: CheckCircle,
      title: "Fact-Checking Records",
      description: "Documentation of verification processes and editorial oversight"
    },
    {
      icon: Clock,
      title: "Publication Timeline",
      description: "Detailed timestamps for breaking news and investigative reporting"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Journalism"
        subtitle="Comprehensive rights protection for news media and journalists"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Journalism is the cornerstone of democratic society, yet journalists and news organizations face unprecedented threats to their intellectual property in the digital age. From content farms stealing articles to AI systems training on journalistic work without compensation, the news industry needs sophisticated protection that preserves press freedom while ensuring fair compensation for quality journalism.
          </p>
        </div>
      </PageSection>

      {/* The Journalism Industry's Rights Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Journalism Industry&apos;s Rights Crisis</h2>
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

      {/* How Creation Rights Transforms Journalism */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">How Creation Rights Transforms Journalism</h2>
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
            Our comprehensive provenance system captures the complexity of journalism, from assignment to publication while protecting source confidentiality.
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
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Journalism</h2>
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

      {/* Journalism Industry Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Journalism Industry Integration</h2>
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
          <h2 className="text-4xl font-bold mb-12 text-center">Journalism Success Stories</h2>
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
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Journalism?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join leading news organizations and independent journalists who have protected their content, automated their revenue collection, and built sustainable journalism careers through comprehensive rights management that preserves press freedom.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Journalism Demo</Link>
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