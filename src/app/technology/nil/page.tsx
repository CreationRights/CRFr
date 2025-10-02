import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Users, 
  DollarSign, 
  BarChart3, 
  Zap,
  CheckCircle,
  Eye,
  Bot,
  Fingerprint,
  Mic,
  AlertTriangle,
  Gavel,
  Globe,
  Lock,
  TrendingUp,
  Target,
  Palette,
  Smartphone,
  Building2
} from "lucide-react";
import Link from "next/link";

export default function NilPage() {
  const identityAssetFeatures = [
    {
      title: "Your name, image, and likeness are valuable intellectual property.",
      description: "In the AI era, your voice can be cloned, your appearance can be synthesized, and your creative style can be replicated at scale. Without proper protection, you lose control over your most personal assets."
    },
    {
      title: "NIL Protection creates a comprehensive identity shield",
      description: "That recognizes unauthorized usage, enforces your rights automatically, and monetizes legitimate uses of your personal characteristics."
    },
    {
      title: "Biometric-grade verification combined with legal enforcement",
      description: "Ensures that your identity remains under your control while generating revenue from authorized AI applications."
    }
  ];

  const comprehensiveProtection = [
    {
      icon: Eye,
      title: "Multi-Modal Identity Mapping",
      subtitle: "Complete digital identity protection:",
      features: [
        "Facial Recognition - Biometric mapping that identifies your appearance across photos, videos, and AI-generated content",
        "Voice Fingerprinting - Acoustic analysis that recognizes your unique vocal characteristics, speech patterns, and tonal qualities",
        "Style Signatures - Creative fingerprints that identify your artistic techniques, writing style, and aesthetic choices",
        "Motion Patterns - Recognition of your unique movement, gestures, and physical mannerisms in video content",
        "Behavioral Biometrics - Digital signatures based on your online behavior, interaction patterns, and communication style"
      ]
    },
    {
      icon: Shield,
      title: "Real-Time Monitoring",
      subtitle: "Constant vigilance across all digital platforms:",
      features: [
        "Global Scanning - Continuous monitoring of social media, streaming platforms, AI training datasets, and commercial applications",
        "Deepfake Detection - Advanced algorithms that identify AI-generated content using your likeness without permission",
        "Voice Clone Identification - Recognition of synthetic speech that mimics your vocal characteristics",
        "Style Appropriation - Detection when AI systems replicate your creative techniques or artistic signatures",
        "Commercial Usage Tracking - Monitoring of your identity in advertising, entertainment, and commercial applications"
      ]
    },
    {
      icon: Zap,
      title: "Instant Response System",
      subtitle: "Immediate action against unauthorized usage:",
      features: [
        "Automated Takedowns - Instant DMCA notices and platform reporting for unauthorized identity usage",
        "Cease and Desist Generation - Automatic legal notice creation with precedent-backed language",
        "Platform Notifications - Direct integration with content moderation systems for rapid response",
        "Legal Escalation - Seamless connection to specialized NIL attorneys for serious violations"
      ]
    }
  ];

  const aiEraRights = [
    {
      icon: Bot,
      title: "AI Training Consent Management",
      description: "Control how AI systems learn from your identity:",
      rights: [
        "Opt-In/Opt-Out Controls - Granular permissions for different types of AI training and generation",
        "Training Data Licensing - Monetize your identity data when used in AI model development",
        "Synthetic Generation Rights - Control and profit from AI systems that can generate content in your style or likeness",
        "Model Attribution - Ensure proper credit when AI systems are trained on your identity characteristics"
      ]
    },
    {
      icon: AlertTriangle,
      title: "Deepfake Protection",
      description: "Advanced defense against malicious synthetic media:",
      rights: [
        "Real-Time Detection - Instant identification of deepfake content using your appearance or voice",
        "Authenticity Verification - Cryptographic proof of genuine content versus AI-generated imitations",
        "Malicious Use Prevention - Proactive blocking of identity theft for harmful or deceptive purposes",
        "Reputation Management - Comprehensive response to identity misuse that could damage your reputation"
      ]
    },
    {
      icon: Mic,
      title: "Voice Rights Management",
      description: "Complete control over your vocal identity:",
      rights: [
        "Voice Cloning Detection - Recognition of AI systems that replicate your speech patterns and vocal characteristics",
        "Synthetic Speech Licensing - Monetize legitimate uses of AI voice generation based on your vocal profile",
        "Podcast and Media Monitoring - Track usage of your voice across audio content and streaming platforms",
        "Interactive AI Licensing - Control and profit from chatbots or virtual assistants using your voice"
      ]
    }
  ];

  const identityMonetization = [
    {
      icon: DollarSign,
      title: "Licensing Your Likeness",
      description: "Turn your identity into revenue streams:",
      opportunities: [
        "Commercial Endorsements - Automated licensing for brands wanting to use your image or voice in advertising",
        "Entertainment Applications - Licensing for movies, games, and media that want to feature your likeness",
        "AI Avatar Creation - Monetize AI systems that create virtual versions of your appearance",
        "Virtual Influencer Rights - Control and profit from AI-generated content that mimics your online presence"
      ]
    },
    {
      icon: Palette,
      title: "Style and Signature Licensing",
      description: "Monetize your creative identity:",
      opportunities: [
        "Artistic Style Licensing - Revenue from AI systems that learn and replicate your creative techniques",
        "Writing Voice Licensing - Monetize AI systems that mimic your writing style and communication patterns",
        "Creative Consultation - Licensing your creative input and aesthetic judgment for AI-generated content",
        "Brand Personality Rights - Control how your personal brand and communication style are used commercially"
      ]
    },
    {
      icon: Users,
      title: "Performance and Appearance Rights",
      description: "Comprehensive control over your public persona:",
      opportunities: [
        "Event Appearance Licensing - Manage rights for virtual appearances and AI-generated presentations",
        "Social Media Impersonation - Control and monetize AI systems that create content mimicking your online presence",
        "Educational Content Rights - Licensing for AI tutors or educational systems that use your teaching style or expertise",
        "Memorial and Legacy Rights - Long-term protection and monetization of your identity after death"
      ]
    }
  ];

  const biometricVerification = [
    {
      icon: Fingerprint,
      title: "Advanced Biometric Mapping",
      description: "Precise identification of your unique characteristics:",
      capabilities: [
        "Facial Geometry Analysis - Detailed mapping of facial structure, proportions, and distinctive features",
        "Vocal Biometrics - Analysis of pitch patterns, formant frequencies, and speech rhythm characteristics",
        "Gait Recognition - Identification of your unique walking patterns and movement signatures",
        "Handwriting Analysis - Recognition of your unique writing style and signature characteristics",
        "Behavioral Patterns - Digital fingerprints based on typing patterns, mouse movements, and interaction styles"
      ]
    },
    {
      icon: Lock,
      title: "Cryptographic Identity Anchoring",
      description: "Tamper-proof identity verification:",
      capabilities: [
        "Biometric Hashing - Cryptographic representation of your identity characteristics that can&apos;t be reverse-engineered",
        "Multi-Factor Verification - Combination of multiple biometric factors for enhanced security and accuracy",
        "Temporal Consistency - Tracking how your biometric characteristics change over time while maintaining identity",
        "Liveness Detection - Verification that biometric samples come from a living person, not synthetic generation"
      ]
    },
    {
      icon: Shield,
      title: "Privacy-Preserving Technology",
      description: "Identity protection without compromising privacy:",
      capabilities: [
        "Zero-Knowledge Verification - Prove identity ownership without revealing sensitive biometric data",
        "Selective Disclosure - Share only necessary identity information for specific use cases",
        "Encrypted Storage - Military-grade encryption for all biometric data and identity information",
        "Consent Management - Granular control over what identity information is shared and with whom"
      ]
    }
  ];

  const legalFramework = [
    {
      icon: Gavel,
      title: "Comprehensive Legal Protection",
      description: "Enforceable rights across all jurisdictions:",
      protections: [
        "Right of Publicity - Protection of your commercial identity value and licensing rights",
        "Privacy Rights - Defense against unauthorized use of personal characteristics and information",
        "Defamation Protection - Legal recourse for identity misuse that damages your reputation",
        "International Coverage - NIL rights protection across different legal systems and territories"
      ]
    },
    {
      icon: Zap,
      title: "Automated Legal Response",
      description: "Instant legal action against violations:",
      protections: [
        "DMCA Takedown Automation - Immediate copyright claims for unauthorized identity usage",
        "Cease and Desist Generation - Professional legal notices with jurisdiction-specific language",
        "Litigation Support - Evidence compilation and legal documentation for court proceedings",
        "Settlement Negotiation - Automated damage calculation and settlement offer generation"
      ]
    },
    {
      icon: Globe,
      title: "Regulatory Compliance",
      description: "Adherence to emerging NIL legislation:",
      protections: [
        "State Law Compliance - Automatic adaptation to different state NIL laws and requirements",
        "International Regulations - Compliance with GDPR, CCPA, and other privacy regulations",
        "Industry Standards - Adherence to entertainment, sports, and creator economy NIL standards",
        "Emerging Legislation - Proactive compliance with developing AI and digital rights laws"
      ]
    }
  ];

  const platformIntegration = [
    {
      icon: Smartphone,
      title: "Social Media Protection",
      description: "Comprehensive monitoring across all platforms:",
      platforms: [
        "Instagram Monitoring - Real-time detection of unauthorized use of your photos, videos, and stories",
        "TikTok Surveillance - Recognition of your voice, appearance, and creative style in viral content",
        "YouTube Tracking - Monitoring for unauthorized use of your likeness in videos and thumbnails",
        "Twitter/X Analysis - Detection of impersonation accounts and unauthorized image usage",
        "Emerging Platforms - Automatic expansion to new social media and content platforms"
      ]
    },
    {
      icon: Bot,
      title: "AI Platform Integration",
      description: "Direct connection with AI training and generation systems:",
      platforms: [
        "Training Dataset Monitoring - Track when your identity data is included in AI training sets",
        "Generation Platform Integration - Real-time licensing for AI systems that want to use your likeness",
        "Consent Management APIs - Technical integration for AI companies to verify usage permissions",
        "Revenue Distribution - Automatic royalty collection from AI platforms using your identity"
      ]
    },
    {
      icon: Building2,
      title: "Commercial Platform Coverage",
      description: "Monitoring across advertising and media platforms:",
      platforms: [
        "Advertising Networks - Detection of your likeness in commercial advertising campaigns",
        "Stock Media Platforms - Monitoring for unauthorized licensing of your image or voice",
        "Entertainment Platforms - Tracking usage in movies, TV shows, games, and digital media",
        "Corporate Communications - Monitoring for unauthorized use in business and marketing materials"
      ]
    }
  ];

  const nilAnalytics = [
    {
      icon: BarChart3,
      title: "Identity Usage Analytics",
      description: "Comprehensive tracking of how your identity is used:",
      analytics: [
        "Usage Volume - Detailed metrics on where and how often your likeness appears online",
        "Revenue Attribution - Direct connection between identity usage and revenue generation",
        "Platform Performance - Analysis of which platforms generate the most value from your identity",
        "Trend Analysis - Understanding how demand for your likeness changes over time"
      ]
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Data-driven insights for identity monetization:",
      analytics: [
        "Demand Forecasting - Prediction of future licensing opportunities based on market trends",
        "Competitive Analysis - Understanding how your identity value compares to similar creators",
        "Pricing Optimization - AI-powered recommendations for identity licensing rates",
        "Opportunity Identification - Discovery of untapped monetization potential for your identity"
      ]
    },
    {
      icon: Target,
      title: "Protection Effectiveness",
      description: "Measuring the success of your NIL protection:",
      analytics: [
        "Violation Detection Rate - Metrics on how effectively unauthorized usage is identified",
        "Response Time - Speed of takedown and enforcement actions",
        "Resolution Success - Percentage of violations successfully resolved",
        "Deterrent Effect - Analysis of how protection measures prevent unauthorized usage"
      ]
    }
  ];

  const faqItems = [
    {
      question: "How accurate is the biometric identification system?",
      answer: "Our multi-modal biometric system achieves 99.8% accuracy in identifying your likeness across different media types, even with modifications or AI generation."
    },
    {
      question: "Can NIL Protection detect deepfakes and AI-generated content?",
      answer: "Yes, our advanced algorithms are specifically designed to identify AI-generated content using your likeness, including sophisticated deepfakes and voice clones."
    },
    {
      question: "What happens when unauthorized usage is detected?",
      answer: "The system automatically initiates takedown procedures, generates legal notices, and can escalate to litigation support depending on the severity and your preferences."
    },
    {
      question: "How do I monetize legitimate uses of my identity?",
      answer: "NIL Protection includes automated licensing systems that can negotiate and execute agreements for legitimate commercial uses of your likeness, generating revenue automatically."
    },
    {
      question: "Is my biometric data secure?",
      answer: "Absolutely. All biometric data is encrypted with military-grade security, stored using zero-knowledge principles, and never shared without your explicit consent."
    },
    {
      question: "Can I control which AI systems can use my identity?",
      answer: "Yes, you have granular control over AI training permissions, synthetic generation rights, and can opt-in or opt-out of different AI applications."
    },
    {
      question: "How does this work internationally?",
      answer: "NIL Protection operates globally with automatic adaptation to local privacy laws, right of publicity statutes, and international regulations."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHeader
        title="NIL Protection"
        subtitle="Comprehensive Name, Image, and Likeness rights for the AI era"
      />
      
      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Protect and monetize your personal identity across all digital platforms and AI systems. NIL Protection ensures you maintain control over how your voice, appearance, and creative signature are used while unlocking new revenue streams from identity licensing.
          </p>
        </div>
      </PageSection>

      {/* Your Identity, Your Asset */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Your Identity, Your Asset</h2>
          <div className="space-y-8">
            {identityAssetFeatures.map((feature, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Comprehensive Identity Protection */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Comprehensive Identity Protection</h2>
          <div className="space-y-12">
            {comprehensiveProtection.map((section, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <section.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-semibold">{section.title}</h3>
                    <p className="text-muted-foreground">{section.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {section.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* AI-Era Identity Rights */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">AI-Era Identity Rights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {aiEraRights.map((right, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <right.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{right.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{right.description}</p>
                <ul className="space-y-2">
                  {right.rights.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Identity Monetization */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Identity Monetization</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {identityMonetization.map((monetization, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <monetization.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{monetization.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{monetization.description}</p>
                <ul className="space-y-2">
                  {monetization.opportunities.map((opportunity, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">{opportunity}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Biometric Identity Verification */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Biometric Identity Verification</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {biometricVerification.map((verification, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <verification.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{verification.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{verification.description}</p>
                <ul className="space-y-2">
                  {verification.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Legal Framework & Enforcement */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Legal Framework & Enforcement</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {legalFramework.map((framework, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <framework.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{framework.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{framework.description}</p>
                <ul className="space-y-2">
                  {framework.protections.map((protection, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{protection}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Platform Integration */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Platform Integration</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {platformIntegration.map((integration, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <integration.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{integration.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{integration.description}</p>
                <ul className="space-y-2">
                  {integration.platforms.map((platform, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">{platform}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* NIL Analytics & Insights */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">NIL Analytics & Insights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {nilAnalytics.map((analytics, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <analytics.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{analytics.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{analytics.description}</p>
                <ul className="space-y-2">
                  {analytics.analytics.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Get Started */}
      <PageSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Get Started with NIL Protection</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Identity Assessment</h3>
              <p className="text-muted-foreground mb-6">Comprehensive analysis of your NIL protection needs:</p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Biometric mapping and identity fingerprinting</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Current usage analysis across all platforms</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Vulnerability assessment and risk identification</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Custom protection strategy development</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">NIL Protection Demo</h3>
              <p className="text-muted-foreground mb-6">See comprehensive identity protection in action:</p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Live demonstration of identity detection and monitoring</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Real-time violation detection and response systems</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Licensing opportunity identification and monetization</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Legal protection and enforcement capabilities</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Request Identity Assessment</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/demo">NIL Protection Demo</Link>
            </Button>
          </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection className="bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <h3 className="text-xl font-semibold mb-4">Q: {item.question}</h3>
                <p className="text-muted-foreground">A: {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
