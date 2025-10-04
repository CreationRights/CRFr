import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  CheckCircle,
  X,
  Star,
  Users,
  Bot,
  Share2,
  Baby,
  ShieldCheck,
  GraduationCap,
  Heart,
  Monitor
} from "lucide-react";
import Link from "next/link";

export default function OnlineSafetyPage() {
  const challenges = [
    {
      icon: Bot,
      title: "AI-Powered Threats",
      description: "Artificial intelligence enables sophisticated new forms of digital harm",
      details: [
        "Deepfake exploitation with AI-generated videos using real faces for scams and harassment",
        "Voice cloning abuse with synthetic voice technology used for fraud and impersonation", 
        "Identity theft at scale with AI systems creating convincing fake personas for social engineering",
        "Automated harassment with AI-powered bots generating personalized attacks and coordinated campaigns"
      ]
    },
    {
      icon: Share2,
      title: "Content Exploitation & Misuse",
      description: "Personal content weaponized against creators and individuals",
      details: [
        "Non-consensual sharing with private content distributed without permission across platforms",
        "Attribution theft with creative work stolen and republished without credit or compensation",
        "Context manipulation with content used out of context to misrepresent individuals",
        "Commercial exploitation with personal content monetized by others without permission"
      ]
    },
    {
      icon: Baby,
      title: "Vulnerable Population Targeting",
      description: "Children, marginalized communities, and vulnerable individuals face heightened risks",
      details: [
        "Child exploitation with minors' images and content used inappropriately without consent",
        "Revenge content with intimate or private content shared maliciously to cause harm",
        "Targeted harassment with coordinated attacks against individuals based on identity or beliefs",
        "Educational exploitation with students' academic work scraped and misused by AI systems"
      ]
    }
  ];

  const solutions = [
    {
      icon: ShieldCheck,
      title: "Deepfake Detection & Protection",
      description: "Comprehensive protection against AI-generated impersonation",
      features: [
        "Proactive identity registration with biometric fingerprinting and behavioral signatures",
        "Advanced detection technology with multi-modal analysis and temporal consistency checking",
        "Automated response systems with instant takedown triggers and legal documentation",
        "Real-time monitoring with continuous scanning across platforms for unauthorized identity use"
      ]
    },
    {
      icon: Bot,
      title: "AI Consent Enforcement",
      description: "Protecting content from unauthorized AI training and generation",
      features: [
        "Comprehensive content protection with universal registration and AI training opt-out",
        "Platform integration with AI developer compliance and training dataset validation",
        "Consent management dashboard with granular permission controls and usage transparency",
        "Derivative work monitoring with detection of AI outputs incorporating protected content"
      ]
    },
    {
      icon: Baby,
      title: "Protection of Minors",
      description: "Specialized safety measures for children and families",
      features: [
        "Guardian-controlled protection with family account management and age-appropriate consent",
        "Enhanced detection for child content with specialized monitoring and context-aware analysis",
        "Family support services with digital literacy education and incident response support",
        "Educational integration with protection systems designed for school environments"
      ]
    }
  ];

  const successStories = [
    {
      name: "Sarah Johnson",
      role: "Content Creator & Deepfake Victim",
      challenge: "Deepfake videos using her likeness were being created for scams and inappropriate content, damaging her personal brand and causing emotional distress",
      results: [
        "99% reduction in deepfake content through advanced AI detection and rapid takedown protocols",
        "Complete restoration of online reputation through comprehensive content monitoring and removal",
        "Enhanced personal safety through proactive identity protection and real-time threat detection",
        "Legal support coordination resulting in successful prosecution of deepfake creators"
      ]
    },
    {
      name: "The Martinez Family", 
      role: "Parents of School-Age Children",
      challenge: "Children's school photos and social media content were being scraped by AI systems and used inappropriately across various platforms",
      results: [
        "100% protection of children's digital content through guardian-controlled safety systems",
        "Enhanced family digital literacy through comprehensive education and support programs",
        "Proactive threat prevention with automated detection of inappropriate child content usage",
        "Peace of mind through 24/7 monitoring and immediate response to safety threats"
      ]
    },
    {
      name: "Dr. Emily Chen",
      role: "University Professor & Researcher", 
      challenge: "Academic research and student work were being used without permission to train AI systems, compromising educational integrity",
      results: [
        "Complete protection of academic content through comprehensive research data safeguarding",
        "Enhanced educational integrity through AI plagiarism detection and academic policy support",
        "Institutional compliance with automated systems for protecting student privacy and academic work",
        "Research ethics leadership through proper attribution and consent frameworks for AI applications"
      ]
    }
  ];

  const features = [
    {
      icon: ShieldCheck,
      title: "Deepfake Detection & Protection",
      description: "Proactive identity registration, advanced detection technology, automated response systems, and real-time monitoring."
    },
    {
      icon: Bot,
      title: "AI Consent Enforcement",
      description: "Comprehensive content protection, platform integration, consent management dashboard, and derivative work monitoring."
    },
    {
      icon: Baby,
      title: "Protection of Minors",
      description: "Guardian-controlled protection, enhanced detection for child content, family support services, and educational integration."
    },
    {
      icon: Heart,
      title: "Revenge Content Protection",
      description: "Proactive content protection, rapid response systems, legal and support integration, and long-term monitoring."
    },
    {
      icon: Users,
      title: "Social Media Harassment Prevention",
      description: "Creator content protection, harassment prevention, attribution integrity, and community support networks."
    },
    {
      icon: GraduationCap,
      title: "Educational Integrity & AI Plagiarism",
      description: "Student work protection, educational institution integration, research ethics support, and academic integrity tools."
    }
  ];

  const beforeAfter = [
    {
      title: "Before Creation Rights",
      items: [
        "AI-powered threats with deepfakes and voice cloning used for scams and harassment",
        "Content exploitation with personal content weaponized and monetized without permission", 
        "Vulnerable population targeting with children and marginalized communities facing heightened risks",
        "Reactive safety measures with slow response to digital threats and identity theft",
        "Fragmented protection systems with inconsistent safety across different platforms",
        "Limited recourse for victims with complex legal processes and inadequate support systems"
      ]
    },
    {
      title: "After Creation Rights",
      items: [
        "Proactive AI threat protection with advanced deepfake detection and real-time identity monitoring",
        "Comprehensive content protection with automated attribution enforcement and consent controls",
        "Enhanced vulnerable population safety with specialized protection for children and families", 
        "Immediate threat response with automated takedown systems and emergency support protocols",
        "Unified safety infrastructure with consistent protection across all platforms and applications",
        "Complete victim support with legal assistance, counseling services, and advocacy resources"
      ]
    }
  ];

  const faqs = [
    {
      question: "How does Creation Rights detect deepfakes and AI-generated content using my likeness?",
      answer: "Our advanced AI detection systems analyze facial features, voice patterns, and behavioral characteristics to identify synthetic content, providing real-time monitoring and immediate response capabilities."
    },
    {
      question: "Can Creation Rights protect my children's online safety and privacy?",
      answer: "Yes, we provide specialized protection for minors with guardian-controlled accounts, age-appropriate consent mechanisms, and enhanced detection systems designed specifically for child safety."
    },
    {
      question: "How do you handle revenge content and non-consensual intimate images?",
      answer: "We provide emergency takedown protocols, cross-platform coordination, and integration with legal and support services specifically designed for intimate image abuse survivors."
    },
    {
      question: "What happens if AI systems use my content without permission?",
      answer: "Our system detects unauthorized AI training and generation using your content, enabling enforcement actions and ensuring your consent preferences are respected across all AI applications."
    },
    {
      question: "How does Creation Rights support families dealing with digital estate issues?",
      answer: "We provide comprehensive digital legacy management with family control over deceased individuals' digital presence and protection against posthumous exploitation."
    },
    {
      question: "Can Creation Rights integrate with existing safety tools and platforms?",
      answer: "Yes, we provide seamless integration with social media platforms, parental control systems, and existing safety tools to enhance rather than replace current protection measures."
    }
  ];

  const advancedFeatures = [
    {
      category: "Detection & Protection",
      items: [
        "Biometric Fingerprinting - Register facial features and voice patterns with cryptographic protection",
        "Multi-Modal Analysis - Simultaneous detection across video, audio, and image content", 
        "Automated Response Systems - Instant takedown triggers and legal documentation",
        "Cross-Platform Monitoring - Unified detection across social media and emerging platforms"
      ]
    },
    {
      category: "Family & Education Safety",
      items: [
        "Guardian-Controlled Protection - Parent and guardian control over children's digital safety",
        "Age-Appropriate Consent - Consent mechanisms adapted for different developmental stages",
        "Educational Integration - Protection systems designed for school technology environments",
        "Academic Integrity Support - Tools for educators to verify original work and detect AI plagiarism"
      ]
    },
    {
      category: "Support & Response",
      items: [
        "Emergency Response Systems - 24/7 monitoring and immediate assistance for safety threats",
        "Victim Support Integration - Connection with mental health professionals and crisis services",
        "Legal Resource Access - Connection with attorneys specializing in digital rights",
        "Community Safety Networks - Peer support systems and mutual protection networks"
      ]
    }
  ];

  const provenanceFeatures = [
    {
      icon: ShieldCheck,
      title: "Identity Verification",
      description: "Comprehensive verification of real-world identity with biometric confirmation and legal documentation"
    },
    {
      icon: Monitor,
      title: "Threat Detection",
      description: "Advanced AI systems that identify sophisticated fakes and unauthorized content usage"
    },
    {
      icon: Users,
      title: "Family Protection",
      description: "Specialized safety measures for children and vulnerable populations with guardian controls"
    },
    {
      icon: Heart,
      title: "Victim Support",
      description: "Comprehensive assistance including legal resources, counseling services, and advocacy support"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Online Safety"
        subtitle="Comprehensive digital protection for the AI era"
      />

      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Online safety has evolved far beyond traditional data privacy concerns. In an age of deepfakes, AI-generated content, and sophisticated digital manipulation, individuals need proactive protection that prevents harm before it occurs. Creation Rights provides programmable safety infrastructure that detects, prevents, and responds to digital threats at internet scale.
          </p>
        </div>
      </PageSection>

      {/* The Modern Online Safety Crisis */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">The Modern Online Safety Crisis</h2>
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

      {/* How Creation Rights Transforms Online Safety */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-center">How Creation Rights Transforms Online Safety</h2>
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

      {/* The Safety Infrastructure */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">The Safety Infrastructure</h2>
          <p className="text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Our comprehensive safety system provides proactive protection across all digital platforms, from identity verification to victim support with complete threat response capabilities.
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
          <h2 className="text-4xl font-semibold mb-12 text-center">Advanced Features for Online Safety</h2>
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

      {/* Online Safety Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Online Safety Integration</h2>
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
          <h2 className="text-4xl font-semibold mb-12 text-center">Online Safety Success Stories</h2>
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
          <h2 className="text-4xl font-semibold mb-6">Ready to Transform Your Online Safety?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join individuals, families, and organizations who have protected their digital identity, prevented AI-powered threats, and built comprehensive online safety through proactive protection that prevents harm before it occurs while providing immediate support when threats emerge.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Schedule Safety Demo</Link>
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