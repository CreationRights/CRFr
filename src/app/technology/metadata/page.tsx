import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Database, 
  Shield, 
  Code, 
  BarChart3, 
  Globe,
  CheckCircle,
  Bot,
  Lock,
  TrendingUp,
  Target,
  Cpu,
  Network,
  Building2,
  Palette,
  Layers,
  GitBranch,
  Settings,
  Smartphone,
  Brain
} from "lucide-react";
import Link from "next/link";

export default function MetadataPage() {
  const livingRightsFeatures = [
    {
      title: "Traditional metadata is dead on arrival.",
      description: "Static EXIF tags, ID3 headers, and text files are easily stripped, ignored, or corrupted. They can&apos;t adapt to new usage scenarios, update licensing terms, or enforce creator rights in real-time."
    },
    {
      title: "Dynamic Metadata lives and breathes with your content.",
      description: "It evolves based on usage patterns, updates licensing terms automatically, and actively enforces creator rights across platforms and AI systems."
    },
    {
      title: "Patent-protected technology (US Patent 11,816,474)",
      description: "That fundamentally changes how digital rights work, making your content intelligent enough to protect and monetize itself."
    }
  ];

  const howItWorks = [
    {
      icon: Bot,
      title: "Self-Evolving Content Structure",
      subtitle: "Your content becomes a living digital organism:",
      features: [
        "Adaptive Licensing Logic - Metadata automatically adjusts licensing terms based on usage context, market conditions, and creator preferences",
        "Real-Time Rights Updates - Changes to licensing, pricing, or availability propagate instantly across all platforms and systems",
        "Usage-Driven Intelligence - Content learns from how it&apos;s being used and optimizes its own discoverability and monetization",
        "Cross-Platform Synchronization - Single source of truth that updates simultaneously across all distribution channels"
      ]
    },
    {
      icon: Brain,
      title: "AI-First Architecture",
      subtitle: "Built for machine understanding from the ground up:",
      features: [
        "Natural Language Processing - AI extracts semantic meaning, emotional tone, and contextual relevance from your content",
        "Computer Vision Analysis - Automated tagging of visual elements, style characteristics, and aesthetic properties",
        "Audio Fingerprinting - Unique acoustic signatures for music, voice, and sound effect identification",
        "Multimodal Integration - Unified metadata across text, image, audio, video, and 3D content types"
      ]
    },
    {
      icon: Lock,
      title: "Cryptographic Verification",
      subtitle: "Tamper-proof rights protection:",
      features: [
        "Content Fingerprinting - Cryptographic hashes that prove authenticity and detect unauthorized modifications",
        "Immutable Timestamps - Verifiable proof of creation and ownership without complex infrastructure",
        "Metadata Integrity Verification - Automatic detection of stripped or corrupted rights information",
        "Chain of Custody Tracking - Complete audit trail of content usage and licensing events"
      ]
    }
  ];

  const technicalArchitecture = [
    {
      icon: Database,
      title: "Advanced Database Engine",
      subtitle: "Enterprise-grade performance at internet scale:",
      description: "Our proprietary database architecture uses columnar storage and vectorized processing to deliver unprecedented performance for metadata operations. Unlike traditional row-based databases, our system processes data in optimized column vectors, enabling:",
      capabilities: [
        "Lightning-Fast Analytics - Complex metadata queries execute in milliseconds, not seconds",
        "Massive Parallel Processing - Simultaneous analysis of thousands of content files",
        "Real-Time Aggregation - Instant reporting and analytics across your entire content library",
        "Efficient Compression - Intelligent data compression reduces storage costs by 90%"
      ]
    },
    {
      icon: Cpu,
      title: "In-Process Architecture",
      subtitle: "No network overhead, maximum performance:",
      description: "Embedded Processing - Database runs inside your application like a library, eliminating network latency",
      capabilities: [
        "Direct File Querying - Analyze CSV, Parquet, and other data formats without pre-loading",
        "Memory Optimization - Intelligent caching and memory management for optimal performance",
        "Automatic Scaling - Seamlessly handles everything from single files to enterprise libraries"
      ]
    },
    {
      icon: Network,
      title: "Real-Time Processing Pipeline",
      subtitle: "Instant metadata generation and updates:",
      capabilities: [
        "Ingestion Layer - Multi-format content analysis and classification",
        "AI Processing - Parallel analysis pipelines for different content types",
        "Metadata Generation - Structured data creation with standardized schemas",
        "Embedding Engine - Integration with file formats and external hosting",
        "Sync Protocol - Real-time updates across all platforms and systems"
      ]
    }
  ];

  const dynamicCapabilities = [
    {
      icon: BarChart3,
      title: "Intelligent Content Analysis",
      description: "AI-powered insights that improve over time:",
      features: [
        "Genre Classification - Automatic categorization with confidence scores and sub-genre identification",
        "Style Analysis - Unique creative fingerprints that identify artistic techniques and influences",
        "Sentiment Detection - Emotional tone analysis for better content matching and recommendation",
        "Market Positioning - Competitive analysis and pricing recommendations based on similar content"
      ]
    },
    {
      icon: Target,
      title: "Contextual Licensing",
      description: "Smart licensing that adapts to usage scenarios:",
      features: [
        "Dynamic Pricing - Automatic price adjustments based on demand, usage context, and market conditions",
        "Conditional Permissions - Usage rights that change based on buyer type, territory, or time period",
        "Remix Intelligence - Automatic handling of derivative work permissions and royalty cascading",
        "Platform Optimization - Licensing terms optimized for specific distribution channels"
      ]
    },
    {
      icon: TrendingUp,
      title: "Usage Intelligence",
      description: "Deep insights into how your content performs:",
      features: [
        "Performance Analytics - Real-time tracking of views, engagement, and conversion metrics",
        "Revenue Optimization - AI recommendations for pricing, licensing, and distribution strategies",
        "Trend Analysis - Market demand prediction and content strategy recommendations",
        "Competitive Intelligence - Performance comparison with similar content and creators"
      ]
    }
  ];

  const schemaEvolution = [
    {
      icon: GitBranch,
      title: "Living Data Structure",
      description: "Metadata that grows smarter over time:",
      features: [
        "Version Control - Complete history of metadata changes with rollback capability",
        "Schema Migration - Automatic updates to new metadata standards and formats",
        "Backward Compatibility - Legacy metadata support while enabling new features",
        "Forward Evolution - Metadata structure adapts to new content types and use cases"
      ]
    },
    {
      icon: Bot,
      title: "AI-Enhanced Tagging",
      description: "Machine learning that understands your content:",
      features: [
        "Contextual Understanding - AI grasps not just what&apos;s in your content, but what it means",
        "Cultural Awareness - Recognition of cultural references, trends, and social context",
        "Emotional Intelligence - Sophisticated sentiment analysis and mood detection",
        "Predictive Tagging - AI suggests tags based on market demand and discoverability"
      ]
    },
    {
      icon: Layers,
      title: "Cross-Modal Intelligence",
      description: "Unified understanding across all content types:",
      features: [
        "Multi-Format Analysis - Single metadata system for images, audio, video, text, and 3D assets",
        "Relationship Mapping - Automatic detection of content relationships and series",
        "Style Consistency - Recognition of creator signatures across different media types",
        "Collaborative Intelligence - Understanding of multi-creator works and contribution tracking"
      ]
    }
  ];

  const performanceMetrics = [
    { metric: "10,000+ files per second", description: "with full metadata generation" },
    { metric: "Sub-50ms API responses", description: "for metadata queries" },
    { metric: "Automatic scaling", description: "from single files to millions of assets" },
    { metric: "99.9% uptime", description: "with automatic failover and redundancy" }
  ];

  const securityFeatures = [
    {
      icon: Shield,
      title: "Data Protection",
      description: "Bank-level security for your valuable metadata:",
      features: [
        "Encryption at Rest - AES-256 encryption for all stored metadata",
        "Encryption in Transit - TLS 1.3 for all data transmission",
        "Access Controls - Role-based permissions with audit logging",
        "Privacy Compliance - GDPR, CCPA, and international privacy law compliance"
      ]
    },
    {
      icon: Lock,
      title: "Integrity Verification",
      description: "Tamper-proof metadata protection:",
      features: [
        "Cryptographic Hashing - SHA-256 fingerprints for content and metadata verification",
        "Digital Signatures - Creator identity verification and non-repudiation",
        "Audit Trails - Complete history of all metadata changes and access",
        "Immutable Timestamping - Verifiable creation dates for legal evidence"
      ]
    }
  ];

  const integrationCapabilities = [
    {
      icon: Settings,
      title: "Platform Integration",
      description: "Seamless connection with existing systems:",
      platforms: [
        "Content Management Systems - WordPress, Drupal, and custom CMS integration",
        "Creative Software - Adobe Creative Suite, Figma, and professional tool plugins",
        "Social Platforms - Automated metadata embedding for social media distribution",
        "Enterprise Systems - Integration with DAM, MAM, and content workflow systems"
      ]
    },
    {
      icon: Code,
      title: "API Architecture",
      description: "Developer-friendly integration options:",
      apis: [
        "RESTful APIs - Standard HTTP endpoints with comprehensive documentation",
        "GraphQL Support - Efficient data fetching for modern applications",
        "Webhook System - Real-time notifications for metadata changes and events",
        "SDK Libraries - Native libraries for JavaScript, Python, Go, and other languages"
      ]
    },
    {
      icon: Database,
      title: "Data Portability",
      description: "Your metadata, your control:",
      portability: [
        "Standard Exports - Export metadata in industry-standard formats",
        "Migration Tools - Easy transition from legacy metadata systems",
        "Backup Systems - Complete metadata backup and restoration capabilities",
        "Vendor Independence - Metadata remains accessible even without our service"
      ]
    }
  ];

  const realWorldApplications = [
    {
      icon: Palette,
      title: "Content Creators",
      subtitle: "Individual artists and creators:",
      applications: [
        "Automatic protection and monetization of creative work",
        "Real-time tracking of content usage across platforms",
        "Dynamic pricing optimization based on market demand",
        "Collaborative project management with automatic royalty splits"
      ]
    },
    {
      icon: Building2,
      title: "Creative Agencies",
      subtitle: "Multi-creator organizations:",
      applications: [
        "Portfolio-wide metadata management and optimization",
        "Client project tracking with usage analytics",
        "Automated compliance monitoring across campaigns",
        "Revenue optimization across diverse content types"
      ]
    },
    {
      icon: Bot,
      title: "AI Companies",
      subtitle: "Ethical AI development:",
      applications: [
        "Verified training data with clear licensing terms",
        "Automated creator compensation for model training",
        "Compliance tracking for regulatory requirements",
        "Bias detection and mitigation through diverse metadata"
      ]
    },
    {
      icon: Globe,
      title: "Platforms & Marketplaces",
      subtitle: "Content distribution services:",
      applications: [
        "Automated rights verification before content display",
        "Real-time royalty calculation and distribution",
        "Enhanced search and discovery through rich metadata",
        "Compliance automation for international distribution"
      ]
    }
  ];

  const futureInnovation = [
    {
      icon: Brain,
      title: "Advanced AI Integration",
      subtitle: "Next-generation intelligent metadata:",
      innovations: [
        "Generative Metadata - AI-created descriptions and tags that improve discoverability",
        "Predictive Analytics - Market demand forecasting and content strategy recommendations",
        "Automated Optimization - Self-improving metadata that learns from performance data",
        "Cross-Modal Understanding - Unified intelligence across all content types"
      ]
    },
    {
      icon: Smartphone,
      title: "Emerging Technologies",
      subtitle: "Preparing for the future of content:",
      technologies: [
        "Spatial Computing - Metadata for AR/VR and 3D content experiences",
        "Quantum Computing - Advanced cryptographic protection and processing capabilities",
        "Edge AI - Distributed intelligence for real-time metadata processing",
        "Neural Interfaces - Direct creator-to-content metadata embedding"
      ]
    }
  ];

  const faqItems = [
    {
      question: "How is Dynamic Metadata different from traditional metadata?",
      answer: "Traditional metadata is static and easily removed. Dynamic Metadata evolves with your content, updates in real-time, and actively enforces your rights across platforms."
    },
    {
      question: "Does this slow down content processing?",
      answer: "No. Our advanced database architecture actually speeds up content processing by providing instant analysis and automated optimization through vectorized processing."
    },
    {
      question: "Can existing platforms integrate Dynamic Metadata?",
      answer: "Yes. Our APIs and SDKs are designed for easy integration with existing systems, from social media platforms to enterprise content management."
    },
    {
      question: "What happens if the Creation Rights service goes down?",
      answer: "Dynamic Metadata is designed to be portable and verifiable independently. Your content retains its metadata and licensing information even without our service."
    },
    {
      question: "Is this compatible with existing metadata standards?",
      answer: "Absolutely. Dynamic Metadata extends existing standards like IPTC/XMP and ID3 while maintaining full backward compatibility."
    },
    {
      question: "How does the database architecture improve performance?",
      answer: "Our columnar, vectorized processing engine handles analytical queries orders of magnitude faster than traditional databases, enabling real-time metadata operations at internet scale."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHeader
        title="Dynamic Metadata"
        subtitle="The breakthrough technology that makes copyright native to the internet"
      />
      
      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Transform static files into intelligent, self-protecting digital assets. Dynamic Metadata is our patent-protected innovation that embeds active rights management directly into your content, creating the first truly enforceable digital rights system.
          </p>
        </div>
      </PageSection>

      {/* Living Rights Infrastructure */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Beyond Static Metadata: Living Rights Infrastructure</h2>
          <div className="space-y-8">
            {livingRightsFeatures.map((feature, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* How Dynamic Metadata Works */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">How Dynamic Metadata Works</h2>
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

      {/* Technical Architecture */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Technical Architecture</h2>
          <div className="space-y-12">
            {technicalArchitecture.map((arch, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <arch.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-semibold">{arch.title}</h3>
                    <p className="text-muted-foreground">{arch.subtitle}</p>
                  </div>
                </div>
                {arch.description && (
                  <p className="text-muted-foreground mb-6">{arch.description}</p>
                )}
                <ul className="space-y-2">
                  {arch.capabilities.map((capability, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{capability}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Interoperability Standards */}
          <div className="mt-12 bg-background border border-border p-8">
            <h3 className="text-xl font-semibold mb-6">Interoperability Standards</h3>
            <p className="text-muted-foreground mb-4">Works with existing systems and future innovations:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Standard Format Support - IPTC/XMP for images, ID3 for audio, Dublin Core for documents</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">JSON-LD Integration - Semantic web compatibility for search engines and AI systems</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">API Endpoints - RESTful and GraphQL access for platform integrations</span>
              </div>
              <div className="flex items-start space-x-2">
                <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-sm">Webhook Notifications - Real-time updates for connected systems and applications</span>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Dynamic Capabilities */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Dynamic Capabilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dynamicCapabilities.map((capability, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <capability.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{capability.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{capability.description}</p>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
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

      {/* Schema Evolution */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Metadata Schema Evolution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {schemaEvolution.map((evolution, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <evolution.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{evolution.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{evolution.description}</p>
                <ul className="space-y-2">
                  {evolution.features.map((feature, idx) => (
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

      {/* Performance & Scalability */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Performance & Scalability</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Enterprise-Grade Infrastructure</h3>
            <p className="text-center text-muted-foreground mb-8">Built to handle internet-scale content processing:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {performanceMetrics.map((metric, index) => (
                <div key={index} className="bg-background border border-border p-6 text-center">
                  <div className="text-2xl font-semibold mb-2 text-primary">{metric.metric}</div>
                  <p className="text-muted-foreground text-sm">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background border border-border p-8">
              <h4 className="text-xl font-semibold mb-4">Vectorized Processing Engine</h4>
              <p className="text-muted-foreground mb-4">Modern database architecture for real-time analytics:</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">SIMD Optimization - Single Instruction, Multiple Data processing for maximum efficiency</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Cache-Friendly Design - Optimized memory access patterns for modern CPU architectures</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Parallel Execution - Automatic parallelization across all available CPU cores</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Spill-to-Disk - Handles datasets larger than memory without performance degradation</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-background border border-border p-8">
              <h4 className="text-xl font-semibold mb-4">Global Distribution</h4>
              <p className="text-muted-foreground mb-4">Low-latency access worldwide:</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Edge Computing - Metadata processing at the edge for minimal latency</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Multi-Region Deployment - Automatic geographic distribution and synchronization</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">CDN Integration - Fast metadata delivery through global content networks</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground text-sm">Offline Capability - Local metadata processing with cloud synchronization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Security & Privacy */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Security & Privacy</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {securityFeatures.map((security, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
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
        </div>
      </PageSection>

      {/* Integration Capabilities */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Integration Capabilities</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {integrationCapabilities.map((integration, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <integration.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{integration.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{integration.description}</p>
                <ul className="space-y-2">
                  {(integration.platforms || integration.apis || integration.portability || []).map((item, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Real-World Applications */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Real-World Applications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {realWorldApplications.map((application, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <application.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">{application.title}</h3>
                    <p className="text-sm text-muted-foreground">{application.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {application.applications.map((app, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{app}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Future Innovation */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Future Innovation</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {futureInnovation.map((innovation, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <innovation.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">{innovation.title}</h3>
                    <p className="text-muted-foreground">{innovation.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {(innovation.innovations || innovation.technologies || []).map((item, idx) => (
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
          <h2 className="text-4xl font-semibold mb-6">Get Started with Dynamic Metadata</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Assessment</h3>
              <p className="text-muted-foreground mb-6">Understand how Dynamic Metadata fits your needs:</p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Content analysis and metadata generation demonstration</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Performance benchmarking with your specific content types</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Integration planning for your existing systems</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">ROI analysis and implementation roadmap</span>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Pilot Program</h3>
              <p className="text-muted-foreground mb-6">Test Dynamic Metadata with your actual content:</p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">30-day trial with full feature access</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Technical support and integration assistance</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Performance monitoring and optimization</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Migration planning for full deployment</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Request Technical Assessment</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/demo">Start Pilot Program</Link>
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
