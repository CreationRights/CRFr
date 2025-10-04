import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Fingerprint, 
  Zap, 
  Shield, 
  BarChart3, 
  Network,
  CheckCircle,
  Search,
  Bot,
  Globe,
  Lock,
  TrendingUp,
  Target,
  Settings,
  Users,
  Building2,
  Clock,
  DollarSign,
  Gavel,
  Layers,
  GitBranch,
  Smartphone,
  Monitor
} from "lucide-react";
import Link from "next/link";

export default function ContentIdPage() {
  const beyondPlatformFeatures = [
    {
      title: "Current content ID systems are siloed and incomplete.",
      description: "YouTube&apos;s Content ID only works on YouTube. Instagram&apos;s system doesn&apos;t talk to TikTok. AI training datasets operate in complete darkness. Creators lose track of their work the moment it leaves their control."
    },
    {
      title: "The Content ID Layer creates universal recognition.",
      description: "One fingerprint that works everywhere - from social media platforms to AI training datasets to remix applications. Your content carries its own identity card that can&apos;t be faked, stripped, or ignored."
    },
    {
      title: "Cryptographically verifiable identification",
      description: "That proves authenticity, tracks lineage, and enables automatic licensing across the entire internet ecosystem."
    }
  ];

  const howItWorks = [
    {
      icon: Search,
      title: "Multi-Modal Fingerprinting",
      subtitle: "Unique identification across all content types:",
      features: [
        "Visual Fingerprinting - Perceptual hashing that recognizes images even after cropping, filtering, or compression",
        "Audio Fingerprinting - Acoustic signatures that identify music, voice, and sound effects through noise and distortion",
        "Text Fingerprinting - Semantic analysis that recognizes written content through paraphrasing and translation",
        "Video Fingerprinting - Combined visual and audio analysis with temporal pattern recognition",
        "3D Asset Fingerprinting - Geometric signatures for models, textures, and spatial designs"
      ]
    },
    {
      icon: Zap,
      title: "Real-Time Recognition",
      subtitle: "Instant identification at internet scale:",
      features: [
        "Millisecond Matching - Content recognition in under 50ms for real-time applications",
        "Fuzzy Matching - Identifies derivatives, remixes, and modified versions automatically",
        "Confidence Scoring - Probabilistic matching with adjustable sensitivity thresholds",
        "Batch Processing - Analyze thousands of files simultaneously for portfolio management"
      ]
    },
    {
      icon: Globe,
      title: "Cross-Platform Intelligence",
      subtitle: "Universal recognition across all digital environments:",
      features: [
        "Platform Integration - Automatic detection on social media, streaming services, and marketplaces",
        "AI Training Monitoring - Track when your content is used in machine learning datasets",
        "Remix Detection - Identify when your work becomes part of derivative creations",
        "Commercial Usage Tracking - Monitor usage in advertising, media, and commercial applications"
      ]
    }
  ];

  const advancedFingerprinting = [
    {
      icon: Fingerprint,
      title: "Perceptual Hashing",
      subtitle: "Recognition that survives content modifications:",
      capabilities: [
        "Robust Visual Signatures - Identify images through cropping, rotation, color adjustment, and compression",
        "Scale Invariance - Recognition works from thumbnails to high-resolution versions",
        "Format Independence - Same content recognized across JPEG, PNG, WebP, and other formats",
        "Transformation Resilience - Maintains identity through filters, effects, and artistic modifications"
      ]
    },
    {
      icon: Clock,
      title: "Temporal Pattern Analysis",
      subtitle: "Understanding content evolution over time:",
      capabilities: [
        "Sequence Recognition - Identify video clips within longer content or across multiple segments",
        "Rhythm Analysis - Musical pattern recognition for beats, melodies, and harmonic structures",
        "Narrative Tracking - Follow story elements and character development across different media",
        "Style Evolution - Track how creator styles develop and influence derivative works"
      ]
    },
    {
      icon: Bot,
      title: "Semantic Understanding",
      subtitle: "Content meaning beyond surface appearance:",
      capabilities: [
        "Contextual Analysis - Understand what content represents, not just how it looks",
        "Cultural Recognition - Identify references, memes, and cultural significance",
        "Emotional Fingerprinting - Recognize mood, tone, and emotional impact",
        "Conceptual Matching - Connect related ideas across different creative expressions"
      ]
    }
  ];

  const universalRecognition = [
    {
      icon: Network,
      title: "Platform Integration",
      description: "Seamless detection across major platforms:",
      platforms: [
        "Social Media Networks - Automatic recognition on Instagram, TikTok, Twitter, Facebook, and emerging platforms",
        "Streaming Services - Detection across Spotify, Apple Music, YouTube, Netflix, and content libraries",
        "Creative Marketplaces - Monitoring on Getty Images, Shutterstock, Adobe Stock, and specialty markets",
        "AI Training Platforms - Tracking usage in machine learning datasets and model training"
      ]
    },
    {
      icon: Settings,
      title: "API Integration",
      description: "Easy implementation for any platform:",
      apis: [
        "Real-Time Queries - Instant content identification for upload filtering and rights checking",
        "Batch Analysis - Bulk content library scanning for comprehensive rights management",
        "Webhook Notifications - Automatic alerts when your content is detected anywhere",
        "Custom Integration - Tailored solutions for specialized platforms and use cases"
      ]
    },
    {
      icon: Globe,
      title: "Global Coverage",
      description: "Worldwide content monitoring:",
      coverage: [
        "Multi-Language Support - Recognition across different languages and character sets",
        "Regional Platform Coverage - Integration with local platforms and services worldwide",
        "Cultural Adaptation - Understanding of regional content styles and preferences",
        "Regulatory Compliance - Adherence to local content identification and privacy laws"
      ]
    }
  ];

  const intelligentMatching = [
    {
      icon: Target,
      title: "Confidence Scoring",
      description: "Precise identification with adjustable sensitivity:",
      features: [
        "Match Probability - Statistical confidence levels for identification accuracy",
        "Similarity Metrics - Detailed analysis of how closely content matches original works",
        "Threshold Customization - Adjustable sensitivity for different use cases and content types",
        "False Positive Filtering - Advanced algorithms to minimize incorrect matches"
      ]
    },
    {
      icon: Layers,
      title: "Derivative Detection",
      description: "Understanding content relationships:",
      features: [
        "Remix Recognition - Identify when your content becomes part of new creative works",
        "Sampling Detection - Track usage of audio samples, visual elements, and text excerpts",
        "Style Influence - Recognize when your creative style influences other works",
        "Collaboration Tracking - Understand multi-creator works and contribution attribution"
      ]
    },
    {
      icon: GitBranch,
      title: "Lineage Mapping",
      description: "Complete content genealogy:",
      features: [
        "Parent-Child Relationships - Track how content spawns derivatives and variations",
        "Influence Networks - Map creative influence and inspiration across creators",
        "Evolution Tracking - Follow how content changes and develops over time",
        "Attribution Chains - Maintain creator credit through multiple generations of derivatives"
      ]
    }
  ];

  const rightsEnforcement = [
    {
      icon: DollarSign,
      title: "Automatic Licensing",
      description: "Seamless monetization through content recognition:",
      features: [
        "Usage Detection - Instant identification triggers licensing opportunities",
        "Dynamic Pricing - Automatic price calculation based on usage context and market demand",
        "Permission Checking - Real-time verification of usage rights and licensing status",
        "Revenue Collection - Automatic royalty collection and distribution upon content detection"
      ]
    },
    {
      icon: Shield,
      title: "Takedown Automation",
      description: "Efficient protection against unauthorized usage:",
      features: [
        "Violation Detection - Automatic identification of unauthorized content usage",
        "DMCA Generation - Instant takedown notice creation with legal precedent backing",
        "Platform Notification - Direct integration with platform content moderation systems",
        "Escalation Pathways - Automatic escalation for persistent or commercial violations"
      ]
    },
    {
      icon: Gavel,
      title: "Compliance Monitoring",
      description: "Ensuring proper attribution and licensing:",
      features: [
        "Attribution Verification - Check that proper creator credit is maintained",
        "License Compliance - Monitor adherence to licensing terms and usage restrictions",
        "Territory Restrictions - Enforce geographic limitations on content distribution",
        "Time-Based Licensing - Track usage against time-limited licensing agreements"
      ]
    }
  ];

  const performanceMetrics = [
    { metric: "100,000+ identifications per second", description: "Enterprise-scale processing capacity" },
    { metric: "Billions of fingerprints", description: "with sub-second search capabilities" },
    { metric: "99.9% uptime", description: "with automatic failover and redundancy" },
    { metric: "Global edge processing", description: "for minimal latency worldwide" }
  ];

  const privacySecurity = [
    {
      icon: Shield,
      title: "Creator Privacy",
      description: "Protecting sensitive creative information:",
      features: [
        "Selective Disclosure - Choose what information to share with different platforms",
        "Anonymous Tracking - Content identification without revealing creator identity",
        "Consent Management - Granular control over where and how content is tracked",
        "Data Minimization - Only collect and store necessary identification data"
      ]
    },
    {
      icon: Lock,
      title: "Cryptographic Security",
      description: "Tamper-proof content identification:",
      features: [
        "Hash Verification - Cryptographic proof that fingerprints haven&apos;t been altered",
        "Digital Signatures - Verifiable creator identity and content authenticity",
        "Secure Transmission - Encrypted communication for all identification data",
        "Audit Trails - Complete logging of all identification and tracking activities"
      ]
    }
  ];

  const integrationExamples = [
    {
      icon: Smartphone,
      title: "Social Media Platform",
      subtitle: "Automatic content recognition for rights management:",
      description: "Upload detection automatically identifies Creation Rights protected content, checks licensing permissions, and either allows posting with proper attribution or requests licensing from the creator. Revenue sharing happens automatically based on predetermined agreements."
    },
    {
      icon: Bot,
      title: "AI Training Platform",
      subtitle: "Ethical dataset curation:",
      description: "Before including content in training datasets, the Content ID Layer verifies licensing permissions, ensures proper creator compensation, and maintains audit trails for regulatory compliance. Creators receive automatic royalties when their content contributes to AI model training."
    },
    {
      icon: Building2,
      title: "Creative Marketplace",
      subtitle: "Duplicate detection and rights verification:",
      description: "Automatic scanning prevents duplicate uploads, verifies seller rights to content, and ensures proper licensing. Buyers receive verified authentic content with clear usage rights and automatic creator attribution."
    },
    {
      icon: Monitor,
      title: "Streaming Service",
      subtitle: "Content library management:",
      description: "Comprehensive content identification enables proper royalty distribution, prevents unauthorized uploads, and ensures compliance with licensing agreements across global territories and time periods."
    }
  ];

  const analyticsInsights = [
    {
      icon: BarChart3,
      title: "Usage Analytics",
      description: "Comprehensive tracking of content performance:",
      analytics: [
        "Global Reach - See where your content appears worldwide",
        "Platform Distribution - Track usage across different platforms and services",
        "Audience Engagement - Understand how different audiences interact with your content",
        "Revenue Attribution - Connect content usage directly to revenue generation"
      ]
    },
    {
      icon: TrendingUp,
      title: "Market Intelligence",
      description: "Data-driven insights for content strategy:",
      intelligence: [
        "Trend Analysis - Identify emerging trends in content usage and demand",
        "Competitive Analysis - Understand how your content performs relative to similar works",
        "Opportunity Identification - Discover new licensing and monetization opportunities",
        "Performance Optimization - Recommendations for improving content discoverability and revenue"
      ]
    },
    {
      icon: Users,
      title: "Creator Insights",
      description: "Understanding your creative impact:",
      insights: [
        "Influence Mapping - See how your work influences other creators and trends",
        "Collaboration Opportunities - Identify potential creative partnerships based on content relationships",
        "Style Evolution - Track how your creative style develops and spreads",
        "Community Building - Understand your audience and creative community"
      ]
    }
  ];

  const faqItems = [
    {
      question: "How accurate is content identification across different platforms?",
      answer: "Our multi-modal fingerprinting achieves 99.7% accuracy even with significant content modifications. The system continuously learns and improves recognition capabilities."
    },
    {
      question: "Can the Content ID Layer identify AI-generated content based on my work?",
      answer: "Yes, our advanced algorithms can detect when AI systems generate content that incorporates elements of your original work, enabling proper attribution and compensation."
    },
    {
      question: "What happens when content is modified or remixed?",
      answer: "Our perceptual hashing and fuzzy matching algorithms are designed to recognize content through modifications. We can detect derivatives while distinguishing between inspired works and direct copies."
    },
    {
      question: "How does this work with existing platform content ID systems?",
      answer: "The Content ID Layer integrates with existing systems while providing universal coverage. It enhances platform-specific detection with cross-platform intelligence and creator-controlled rights management."
    },
    {
      question: "Is there a limit to how much content can be tracked?",
      answer: "No practical limit. Our scalable infrastructure handles billions of content fingerprints with real-time recognition capabilities that grow with your content library."
    },
    {
      question: "How quickly can new content be added to the recognition database?",
      answer: "New content fingerprints are generated instantly upon upload and become searchable within seconds across our global recognition network."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHeader
        title="Content ID Layer"
        subtitle="Universal content identification and tracking across the internet"
      />
      
      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Create unique, verifiable fingerprints for every piece of creative work. The Content ID Layer provides cryptographic identification that travels with your content, enabling automatic recognition, rights enforcement, and revenue collection across all platforms and AI systems.
          </p>
        </div>
      </PageSection>

      {/* Beyond Platform-Specific Detection */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Beyond Platform-Specific Detection</h2>
          <div className="space-y-8">
            {beyondPlatformFeatures.map((feature, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
          </div>
        </div>
      </PageSection>

      {/* How Content ID Works */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">How Content ID Works</h2>
          <div className="space-y-12">
            {howItWorks.map((section, index) => (
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

      {/* Advanced Fingerprinting Technology */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Advanced Fingerprinting Technology</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advancedFingerprinting.map((tech, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <tech.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">{tech.title}</h3>
                    <p className="text-sm text-muted-foreground">{tech.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {tech.capabilities.map((capability, idx) => (
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

      {/* Universal Recognition Network */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Universal Recognition Network</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {universalRecognition.map((network, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <network.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{network.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{network.description}</p>
                <ul className="space-y-2">
                  {(network.platforms || network.apis || network.coverage || []).map((item, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Intelligent Matching Engine */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Intelligent Matching Engine</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {intelligentMatching.map((matching, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <matching.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{matching.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{matching.description}</p>
                <ul className="space-y-2">
                  {matching.features.map((feature, idx) => (
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

      {/* Rights Enforcement Integration */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Rights Enforcement Integration</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {rightsEnforcement.map((enforcement, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <enforcement.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{enforcement.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{enforcement.description}</p>
                <ul className="space-y-2">
                  {enforcement.features.map((feature, idx) => (
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

      {/* Performance & Scale */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Performance & Scale</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Enterprise Architecture</h3>
            <p className="text-center text-muted-foreground mb-8">Built for internet-scale content identification:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="bg-muted/20 border border-border p-6 text-center">
                  <div className="text-xl font-semibold mb-2 text-primary">{metric.metric}</div>
                  <p className="text-muted-foreground text-sm">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-muted/20 border border-border p-8">
              <h4 className="text-xl font-semibold mb-4">Advanced Algorithms</h4>
              <p className="text-muted-foreground mb-4">Cutting-edge computer science for accurate identification:</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Machine Learning Models - Continuously improving recognition through neural networks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Parallel Processing - Distributed computing for massive-scale content analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Optimization Algorithms - Efficient search and matching across enormous databases</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Real-Time Updates - Instant addition of new content fingerprints to recognition database</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-muted/20 border border-border p-8">
              <h4 className="text-xl font-semibold mb-4">Scalable Infrastructure</h4>
              <p className="text-muted-foreground mb-4">Growing with the creator economy:</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Elastic Scaling - Automatic capacity adjustment based on demand</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Multi-Region Deployment - Global infrastructure for low-latency access</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Edge Computing - Local processing for fastest possible recognition times</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Bandwidth Optimization - Efficient data transfer and caching strategies</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Privacy & Security */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Privacy & Security</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {privacySecurity.map((security, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <security.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{security.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{security.description}</p>
                <ul className="space-y-2">
                  {security.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-background border border-border p-8">
            <h4 className="text-xl font-semibold mb-4">Compliance Framework</h4>
            <p className="text-muted-foreground mb-4">Meeting global privacy and security standards:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">GDPR Compliance - Full adherence to European privacy regulations</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">CCPA Compliance - California Consumer Privacy Act compliance</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">SOC 2 Certification - Enterprise-grade security controls and auditing</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">International Standards - Compliance with privacy laws worldwide</span>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Integration Examples */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Integration Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {integrationExamples.map((example, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <example.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">{example.title}</h3>
                    <p className="text-sm text-muted-foreground">{example.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{example.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Analytics & Insights */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Analytics & Insights</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {analyticsInsights.map((insight, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <insight.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{insight.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{insight.description}</p>
                <ul className="space-y-2">
                  {(insight.analytics || insight.intelligence || insight.insights || []).map((item, idx) => (
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
          <h2 className="text-4xl font-semibold mb-6">Get Started with Content ID</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Content Fingerprinting Demo</h3>
              <p className="text-muted-foreground mb-6">See universal recognition in action:</p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Upload your content and watch fingerprint generation in real-time</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Test recognition across different platforms and modifications</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Explore derivative detection and lineage mapping capabilities</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Experience automatic licensing and rights enforcement</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Integration Planning</h3>
              <p className="text-muted-foreground mb-6">Custom implementation for your needs:</p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Platform-specific integration strategy development</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">API implementation guidance and technical support</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Performance optimization for your content volume and type</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Compliance planning for your industry and geographic requirements</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Request Content ID Demo</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/demo">Integration Consultation</Link>
            </Button>
          </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection className="bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
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
