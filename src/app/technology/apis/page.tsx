import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Shield, 
  Webhook, 
  Globe,
  CheckCircle,
  Bot,
  Users,
  Fingerprint,
  Network,
  Building2,
  Smartphone,
  Monitor,
  BookOpen,
  Terminal,
  Settings,
  BarChart3,
  Lock,
  Layers,
  Server
} from "lucide-react";
import Link from "next/link";

export default function ApisPage() {
  const apiFirstFeatures = [
    {
      title: "Built for developers, by developers.",
      description: "Our Platform APIs are designed with modern development practices, comprehensive documentation, and real-world use cases that make integration straightforward and powerful."
    },
    {
      title: "RESTful design with GraphQL flexibility",
      description: "Choose the API style that fits your application architecture and performance requirements."
    },
    {
      title: "Real-time capabilities through WebSocket connections and webhook systems",
      description: "That keep your applications synchronized with creator rights and usage events."
    },
    {
      title: "Enterprise-grade reliability with 99.9% uptime",
      description: "Automatic failover, and global edge deployment for minimal latency worldwide."
    }
  ];

  const coreApiServices = [
    {
      icon: Shield,
      title: "Rights Management API",
      description: "Complete creator rights integration:",
      features: [
        "License Verification - Real-time checking of usage permissions and licensing status",
        "Dynamic Licensing - Automated license generation and negotiation for any use case",
        "Usage Tracking - Comprehensive logging of content usage with audit trails",
        "Revenue Distribution - Automatic royalty calculation and payment processing"
      ]
    },
    {
      icon: Fingerprint,
      title: "Content Identification API",
      description: "Universal content recognition and fingerprinting:",
      features: [
        "Multi-Modal Fingerprinting - Generate unique identifiers for images, audio, video, text, and 3D content",
        "Real-Time Matching - Instant content recognition across platforms and modifications",
        "Derivative Detection - Identify remixes, samples, and AI-generated variations",
        "Batch Processing - Analyze thousands of files simultaneously for portfolio management"
      ]
    },
    {
      icon: Bot,
      title: "AI Integration API",
      description: "Ethical AI development tools:",
      features: [
        "Training Data Verification - Confirm licensing permissions for AI training datasets",
        "Consent Management - Handle opt-in/opt-out preferences for AI applications",
        "Synthetic Content Attribution - Track and attribute AI-generated content to source creators",
        "Model Compliance - Ensure AI models respect creator rights and licensing terms"
      ]
    },
    {
      icon: Users,
      title: "NIL Protection API",
      description: "Name, Image, and Likeness rights management:",
      features: [
        "Biometric Verification - Identity confirmation and authentication services",
        "Deepfake Detection - Identify AI-generated content using protected identities",
        "Usage Monitoring - Track unauthorized use of personal characteristics",
        "Identity Licensing - Automated licensing for legitimate identity usage"
      ]
    }
  ];

  const integrationCapabilities = [
    {
      icon: Smartphone,
      title: "Content Platform Integration",
      subtitle: "Seamless rights verification for social media and content platforms:",
      description: "Automatically verify usage permissions before displaying content, ensuring compliance with creator licensing terms. The API handles attribution requirements, usage logging, and revenue distribution without disrupting user experience.",
      features: [
        "Real-time permission checking for content display",
        "Automatic attribution and credit generation",
        "Usage event logging with detailed analytics",
        "Licensing option presentation for restricted content"
      ]
    },
    {
      icon: Bot,
      title: "AI Training Platform Integration",
      subtitle: "Ethical dataset curation and creator compensation:",
      description: "Enable AI companies to build training datasets with verified licensing permissions while automatically compensating creators. The API handles consent verification, usage tracking, and royalty distribution for machine learning applications.",
      features: [
        "Batch verification of training data permissions",
        "Automated creator compensation for AI training",
        "Consent management for different AI use cases",
        "Compliance tracking for regulatory requirements"
      ]
    },
    {
      icon: Building2,
      title: "Creative Marketplace Integration",
      subtitle: "Automated licensing and transaction processing:",
      description: "Power creative marketplaces with intelligent licensing that handles negotiations, payments, and content delivery automatically. The API manages complex royalty splits and ensures creators receive fair compensation.",
      features: [
        "Automated license generation and negotiation",
        "Dynamic pricing based on usage and market conditions",
        "Multi-party royalty distribution",
        "Secure content delivery with usage tracking"
      ]
    },
    {
      icon: Monitor,
      title: "Enterprise Content Management",
      subtitle: "Rights-aware content workflows for organizations:",
      description: "Integrate comprehensive rights management into existing enterprise systems, ensuring compliance and maximizing content value across organizational workflows.",
      features: [
        "Bulk content protection and metadata management",
        "Compliance monitoring across global territories",
        "Integration with existing DAM and MAM systems",
        "Advanced analytics and reporting capabilities"
      ]
    }
  ];

  const realTimeFeatures = [
    {
      icon: Network,
      title: "WebSocket Connections",
      description: "Live updates for dynamic applications:",
      subtitle: "Maintain real-time synchronization with creator rights and usage events through persistent WebSocket connections. Perfect for dashboards, monitoring systems, and interactive applications that need instant updates.",
      eventTypes: [
        "Content usage events across platforms",
        "Licensing requests and completions",
        "Rights violation detection and resolution",
        "Revenue distribution and payment processing"
      ]
    },
    {
      icon: Webhook,
      title: "Webhook Integration",
      description: "Server-to-server event notifications:",
      subtitle: "Receive instant notifications about important events through secure webhook endpoints. Ideal for backend systems that need to respond to rights management events automatically.",
      eventTypes: [
        "New content protection and metadata updates",
        "License agreements and modifications",
        "Usage violations and enforcement actions",
        "Payment processing and revenue distribution"
      ]
    }
  ];

  const advancedFeatures = [
    {
      icon: Layers,
      title: "Batch Operations",
      description: "Efficient processing for large content libraries:",
      subtitle: "Handle thousands of files simultaneously with optimized batch processing endpoints. Perfect for organizations migrating existing content libraries or processing large volumes of new content.",
      capabilities: [
        "Simultaneous content protection and fingerprinting",
        "Bulk license verification and generation",
        "Mass usage event logging and analytics",
        "Portfolio-wide metadata updates and synchronization"
      ]
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive data insights through API:",
      subtitle: "Access detailed analytics and generate custom reports through dedicated API endpoints. Build sophisticated dashboards and business intelligence tools with real-time creator economy data.",
      capabilities: [
        "Usage statistics and trend analysis",
        "Revenue attribution and performance metrics",
        "Compliance monitoring and violation tracking",
        "Market intelligence and competitive analysis"
      ]
    },
    {
      icon: Settings,
      title: "Custom Integrations",
      description: "Tailored solutions for specific use cases:",
      subtitle: "Work with our developer relations team to create custom API endpoints and integrations for specialized applications and unique business requirements.",
      capabilities: [
        "Industry-specific metadata schemas and workflows",
        "Specialized licensing logic for unique business models",
        "Custom authentication and security requirements",
        "White-label API solutions for platform providers"
      ]
    }
  ];

  const developerResources = [
    {
      icon: BookOpen,
      title: "Comprehensive Documentation",
      description: "Everything you need to integrate successfully:",
      resources: [
        "API Reference - Complete endpoint documentation with request/response examples",
        "Integration Guides - Step-by-step tutorials for common platforms and use cases",
        "Best Practices - Performance optimization and security recommendations",
        "Migration Guides - Moving from legacy rights management systems"
      ]
    },
    {
      icon: Terminal,
      title: "Developer Tools",
      description: "Streamlined development and testing:",
      resources: [
        "Interactive API Explorer - Test endpoints directly in your browser with real data",
        "Postman Collections - Pre-built request collections for rapid prototyping",
        "CLI Tools - Command-line utilities for bulk operations and automation",
        "Testing Sandbox - Safe environment for development without affecting production data"
      ]
    },
    {
      icon: Code2,
      title: "SDKs & Libraries",
      description: "Native integration for popular programming languages:",
      resources: [
        "JavaScript/TypeScript - Full-featured SDK for web and Node.js applications",
        "Python - Comprehensive library for AI/ML and data processing workflows",
        "Go - High-performance SDK for backend services and microservices",
        "PHP - WordPress and web application integration library",
        "Java - Enterprise application integration with Spring Boot support"
      ]
    },
    {
      icon: Users,
      title: "Community & Support",
      description: "Active developer community and expert assistance:",
      resources: [
        "Developer Discord - Real-time community support and collaboration",
        "GitHub Examples - Open-source reference implementations and code samples",
        "Office Hours - Weekly Q&A sessions with our engineering team",
        "Technical Blog - Deep dives into API features and implementation patterns"
      ]
    }
  ];

  const performanceReliability = [
    {
      icon: Globe,
      title: "Global Infrastructure",
      description: "Low-latency access worldwide:",
      features: [
        "Edge Deployment - API endpoints distributed globally for minimal response times",
        "Automatic Scaling - Infrastructure that grows with your application demands",
        "Load Balancing - Intelligent request routing for optimal performance",
        "CDN Integration - Fast content delivery through global networks"
      ]
    },
    {
      icon: Server,
      title: "Enterprise-Grade Reliability",
      description: "Built for mission-critical applications:",
      features: [
        "99.9% Uptime SLA - Guaranteed availability with automatic failover",
        "Rate Limiting - Intelligent throttling that scales with your needs",
        "Error Handling - Comprehensive error responses with actionable guidance",
        "Monitoring & Alerting - Real-time system health and performance metrics"
      ]
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      description: "Bank-level security for sensitive creator data:",
      features: [
        "OAuth 2.0 Authentication - Industry-standard secure authentication",
        "API Key Management - Granular access control and key rotation",
        "Encryption - TLS 1.3 for data in transit, AES-256 for data at rest",
        "Audit Logging - Complete request logging for compliance and debugging"
      ]
    }
  ];

  const pricingPlans = [
    {
      name: "Developer Tier",
      price: "Free",
      description: "Perfect for prototyping and small projects:",
      features: [
        "1,000 API calls per month",
        "Basic SDK access and documentation",
        "Community support through Discord",
        "Sandbox environment for testing"
      ]
    },
    {
      name: "Professional Tier",
      price: "$99/month",
      description: "For growing applications and businesses:",
      features: [
        "100,000 API calls per month",
        "Advanced features and real-time capabilities",
        "Email support with SLA guarantees",
        "Production environment access"
      ]
    },
    {
      name: "Enterprise Tier",
      price: "Custom Pricing",
      description: "For high-volume applications and custom needs:",
      features: [
        "Unlimited API calls with custom rate limits",
        "Dedicated support and technical account management",
        "Custom integrations and white-label solutions",
        "SLA guarantees and priority feature development"
      ]
    }
  ];

  const useCaseExamples = [
    {
      icon: Smartphone,
      title: "Social Media Platform",
      description: "A social media platform integrates the Rights Management API to automatically verify content permissions before display, ensuring creators are properly attributed and compensated when their work is shared."
    },
    {
      icon: Bot,
      title: "AI Research Lab",
      description: "An AI research organization uses the AI Integration API to build ethical training datasets, automatically verifying creator consent and distributing compensation for model training."
    },
    {
      icon: Building2,
      title: "Stock Media Marketplace",
      description: "A creative marketplace leverages the Smart Licensing API to automate license negotiations, handle complex royalty splits, and provide instant content delivery to buyers."
    },
    {
      icon: Monitor,
      title: "Enterprise CMS",
      description: "A large corporation integrates the Content Identification API into their content management system to track usage rights across global campaigns and ensure compliance with licensing agreements."
    }
  ];

  const faqItems = [
    {
      question: "How quickly can I integrate Creation Rights APIs?",
      answer: "Basic integration can be completed in hours using our SDKs and documentation. Complex enterprise integrations typically take 1-2 weeks with our technical support."
    },
    {
      question: "Do the APIs work with existing authentication systems?",
      answer: "Yes, our APIs support OAuth 2.0 and can integrate with existing authentication infrastructure. We also provide API key management for simpler implementations."
    },
    {
      question: "What happens if API limits are exceeded?",
      answer: "We provide intelligent rate limiting with burst capacity. Exceeded limits result in temporary throttling rather than hard failures, and we offer automatic scaling for enterprise customers."
    },
    {
      question: "Can I test the APIs before committing to a paid plan?",
      answer: "Absolutely. Our free developer tier provides full API access with generous limits for testing and prototyping."
    },
    {
      question: "How do you handle API versioning and updates?",
      answer: "We maintain backward compatibility and provide advance notice of any breaking changes. Multiple API versions are supported simultaneously to ensure smooth transitions."
    },
    {
      question: "Is technical support included?",
      answer: "Community support is available for all users through Discord. Professional and Enterprise tiers include dedicated technical support with SLA guarantees."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHeader
        title="Platform APIs"
        subtitle="Developer-first infrastructure for the creator economy"
      />
      
      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Build rights-aware applications with the most comprehensive creator economy APIs. Platform APIs provide everything developers need to integrate Creation Rights into any application, from simple content protection to complex AI training platforms.
          </p>
        </div>
      </PageSection>

      {/* API-First Architecture */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">API-First Architecture</h2>
          <div className="space-y-8">
            {apiFirstFeatures.map((feature, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Core API Services */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Core API Services</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {coreApiServices.map((service, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <service.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
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
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Integration Capabilities</h2>
          <div className="space-y-12">
            {integrationCapabilities.map((capability, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <capability.icon className="h-8 w-8 text-primary" />
          <div>
                    <h3 className="text-2xl font-semibold">{capability.title}</h3>
                    <p className="text-muted-foreground">{capability.subtitle}</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">{capability.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {capability.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Real-Time Features */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Real-Time Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {realTimeFeatures.map((feature, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <p className="text-muted-foreground mb-4 text-sm">{feature.subtitle}</p>
                <div className="space-y-2">
                  <p className="font-medium text-sm">Event Types:</p>
                  <ul className="space-y-1">
                    {feature.eventTypes.map((type, idx) => (
                      <li key={idx} className="text-muted-foreground text-sm">• {type}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Advanced API Features */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced API Features</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <p className="text-muted-foreground mb-4 text-sm">{feature.subtitle}</p>
                <ul className="space-y-2">
                  {feature.capabilities.map((capability, idx) => (
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

      {/* Developer Resources */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Developer Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {developerResources.map((resource, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <resource.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{resource.description}</p>
                <ul className="space-y-2">
                  {resource.resources.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Performance & Reliability */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Performance & Reliability</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {performanceReliability.map((perf, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <perf.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{perf.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{perf.description}</p>
                <ul className="space-y-2">
                  {perf.features.map((feature, idx) => (
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

      {/* Pricing & Plans */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Pricing & Plans</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                <div className="text-3xl font-bold mb-4 text-primary">{plan.price}</div>
                <p className="text-muted-foreground mb-6">{plan.description}</p>
                <ul className="space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-muted-foreground">Volume discounts available for startups, educational institutions, and open-source projects</p>
          </div>
        </div>
      </PageSection>

      {/* Use Case Examples */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Use Case Examples</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {useCaseExamples.map((useCase, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-4">
                  <useCase.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{useCase.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Getting Started */}
      <PageSection className="bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Getting Started</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                <div>
              <h3 className="text-2xl font-semibold mb-6">Quick Start Guide</h3>
              <p className="text-muted-foreground mb-6">Get up and running in minutes:</p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Create Developer Account - Sign up at developers.creationrights.com</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Generate API Keys - Get authentication credentials from your dashboard</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Choose Your SDK - Download the library for your preferred programming language</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Follow Tutorial - Complete your first integration with step-by-step guidance</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Join Community - Connect with other developers in our Discord server</span>
                </div>
              </div>
            </div>
            
                <div>
              <h3 className="text-2xl font-semibold mb-6">Technical Consultation</h3>
              <p className="text-muted-foreground mb-6">Expert guidance for complex integrations:</p>
              <p className="text-muted-foreground mb-6 text-sm">Book a session with our developer relations team for personalized integration planning, architecture consultation, and performance optimization strategies.</p>
              <div className="space-y-3 text-left">
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Custom integration strategy development</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Performance optimization recommendations</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Security and compliance guidance</span>
                </div>
                <div className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Access to beta features and early releases</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/demo">Book Technical Consultation</Link>
            </Button>
          </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-muted/20 border border-border p-8">
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
