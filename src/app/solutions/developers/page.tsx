import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Code2, 
  Database, 
  Zap, 
  CheckCircle,
  Palette,
  Bot,
  ShoppingCart,
  Music,
  FileText,
  Users,
  Terminal,
  Clock,
  Lock,
  Globe,
  GitBranch
} from "lucide-react";
import Link from "next/link";

export default function DevelopersPage() {
  const rightsLayerFeatures = [
    {
      title: "Think of Creation Rights as the TCP/IP for licensing.",
      description: "Just as TCP/IP enables reliable data transmission, our protocol enables reliable rights transmission. Every piece of content carries its own licensing logic, attribution requirements, and usage permissions."
    },
    {
      title: "Machine-readable metadata that travels with content",
      description: "Across platforms, devices, and protocols. Build applications that automatically respect creator rights without complex legal integrations."
    },
    {
      title: "Real-time enforcement through programmable smart contracts",
      description: "And automated compliance checking. Your apps can query rights status and enforce licensing terms at the speed of modern development."
    }
  ];

  const apiFeatures = [
    {
      icon: Code2,
      title: "Modern API Design",
      description: "RESTful APIs with comprehensive documentation, interactive testing, and real-world examples. Get started in minutes, not weeks.",
      features: [
        "GraphQL endpoints for efficient data fetching",
        "Real-time subscriptions to rights changes",
        "Webhook infrastructure for licensing events"
      ]
    },
    {
      icon: Zap,
      title: "High-Performance Infrastructure",
      description: "Columnar, vectorized processing delivers sub-millisecond response times for rights queries, even at internet scale.",
      features: [
        "Edge deployment with low-latency access globally",
        "Automatic failover and 99.9% uptime SLA",
        "Horizontal scaling from prototype to millions of users"
      ]
    }
  ];

  const applicationTypes = [
    {
      icon: Palette,
      title: "Content Platforms",
      description: "Build platforms that automatically respect creator licensing terms:",
      features: [
        "Query usage permissions before displaying content",
        "Automatically route royalties to creators",
        "Generate compliant attribution and licensing notices",
        "Handle remix permissions and derivative tracking"
      ]
    },
    {
      icon: Bot,
      title: "AI Training Platforms",
      description: "Create ethical AI training pipelines:",
      features: [
        "Verify training permissions for datasets",
        "Respect opt-out preferences and commercial restrictions",
        "Automatically compensate creators for model training",
        "Maintain provenance trails for generated content"
      ]
    },
    {
      icon: ShoppingCart,
      title: "Creative Marketplaces",
      description: "Build marketplaces with embedded rights management:",
      features: [
        "Instant licensing and payment processing",
        "Automated royalty distribution to collaborators",
        "Real-time usage tracking and analytics",
        "Compliance verification for buyers"
      ]
    },
    {
      icon: Music,
      title: "Remix & Collaboration Tools",
      description: "Enable creative collaboration with built-in rights:",
      features: [
        "Track derivative content lineage automatically",
        "Handle complex multi-party royalty splits",
        "Verify remix permissions before publishing",
        "Generate licensing for collaborative works"
      ]
    }
  ];

  const advancedFeatures = [
    {
      icon: Database,
      title: "Dynamic Metadata Engine",
      description: "Access our patent-protected Dynamic Metadata system:",
      features: [
        "Real-time metadata updates based on usage patterns",
        "AI-generated tags and content analysis",
        "Cryptographic verification and tamper detection",
        "Cross-platform metadata synchronization"
      ]
    },
    {
      icon: Code2,
      title: "Smart Contract Integration",
      description: "Build on programmable licensing logic:",
      features: [
        "Automated royalty distribution through smart contracts",
        "Conditional licensing based on usage metrics",
        "Decentralized rights verification",
        "Cross-chain compatibility for Web3 applications"
      ]
    },
    {
      icon: Bot,
      title: "AI Training Compliance",
      description: "Purpose-built tools for AI developers:",
      features: [
        "Ethical training dataset curation",
        "Automated consent verification",
        "Model lineage tracking",
        "Bias detection and mitigation tools"
      ]
    }
  ];

  const developerResources = [
    {
      icon: FileText,
      title: "Comprehensive Documentation",
      features: [
        "API Reference - Complete endpoint documentation with examples",
        "SDK Guides - Language-specific integration tutorials",
        "Best Practices - Patterns for common use cases",
        "Migration Guides - Moving from legacy rights systems"
      ]
    },
    {
      icon: Terminal,
      title: "Developer Tools",
      features: [
        "Interactive API Explorer - Test endpoints in your browser",
        "Postman Collections - Pre-built request collections",
        "CLI Tools - Command-line utilities for bulk operations",
        "Testing Sandbox - Safe environment for development and testing"
      ]
    },
    {
      icon: Users,
      title: "Community & Support",
      features: [
        "Developer Discord - Real-time community support",
        "GitHub Examples - Open-source reference implementations",
        "Office Hours - Weekly Q&A sessions with our engineering team",
        "Technical Blog - Deep dives into architecture and best practices"
      ]
    }
  ];

  const technicalSpecs = [
    {
      icon: Clock,
      title: "Performance Metrics",
      features: [
        "API Response Time: < 50ms (95th percentile)",
        "Uptime SLA: 99.9% with automatic failover",
        "Rate Limits: Up to 10,000 requests/second (Enterprise)",
        "Data Processing: Real-time metadata updates and rights verification"
      ]
    },
    {
      icon: Lock,
      title: "Security & Compliance",
      features: [
        "Authentication: OAuth 2.0, API keys, JWT tokens",
        "Encryption: TLS 1.3 for data in transit, AES-256 for data at rest",
        "Compliance: PCI DSS, SOC 2 Type II, GDPR compliant",
        "Audit Trails: Cryptographically verifiable transaction logs"
      ]
    },
    {
      icon: Globe,
      title: "Integration Standards",
      features: [
        "Metadata Formats: JSON-LD, RDFa, IPTC/XMP/ID3",
        "File Support: All major media formats and custom types",
        "Protocols: REST, GraphQL, WebSocket, Webhook",
        "Standards: W3C Web Rights, Creative Commons, DPLA"
      ]
    }
  ];

  const quickStartSteps = [
    "Sign up for developer account at developers.creationrights.com",
    "Get API key from your dashboard",
    "Install SDK for your preferred language",
    "Follow tutorial to protect your first asset",
    "Join Discord for community support"
  ];

  const openSourceAreas = [
    { name: "Metadata Parsers", description: "Libraries for extracting Creation Rights metadata" },
    { name: "SDK Improvements", description: "Help us build better developer tools" },
    { name: "Integration Examples", description: "Share your implementation patterns" },
    { name: "Documentation", description: "Improve our guides and tutorials" }
  ];

  const faqItems = [
    {
      question: "How does Creation Rights compare to blockchain-based solutions?",
      answer: "We provide the performance and usability of traditional web infrastructure with the transparency and programmability of blockchain concepts. No gas fees, sub-second response times, and familiar developer tools."
    },
    {
      question: "Can I build commercial applications on Creation Rights?",
      answer: "Absolutely. Our API is designed for commercial use, and we offer revenue-sharing partnerships for applications that drive significant platform adoption."
    },
    {
      question: "What happens if Creation Rights goes down?",
      answer: "Our metadata is designed to be portable and verifiable independently. Your applications can cache rights data and continue operating with graceful degradation."
    },
    {
      question: "Do you support custom metadata schemas?",
      answer: "Yes. While we provide standard schemas, you can extend them with custom fields and business logic specific to your use case."
    },
    {
      question: "How do you handle international copyright law?",
      answer: "Our system is designed to work within existing legal frameworks. We provide tools for territorial licensing and jurisdiction-specific compliance, but legal interpretation remains with the implementer."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHeader
        title="For Developers"
        subtitle="Build the creator-first internet with rights-native infrastructure"
      />
      
      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Stop building on broken foundations. Creation Rights provides the first programmable rights layer for the internet - giving you the APIs, SDKs, and infrastructure to build applications that respect creators from the ground up.
          </p>
        </div>
      </PageSection>

      {/* Rights Layer */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">The Rights Layer the Internet Always Needed</h2>
          <div className="space-y-8">
            {rightsLayerFeatures.map((feature, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Developer Architecture */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Developer-First Architecture</h2>
          
          {/* API Code Example */}
          <div className="mb-12 bg-background border border-border p-8">
            <h3 className="text-2xl font-semibold mb-6 flex items-center">
              <Code2 className="h-6 w-6 mr-3 text-primary" />
              Modern API Design
            </h3>
            <div className="bg-muted/50 p-6 border border-border mb-6">
              <pre className="text-sm overflow-x-auto">
                <code>{`// Check licensing permissions
const rights = await creationRights.checkLicense(contentId, useCase);
if (rights.permitted) {
  // Proceed with usage
  await creationRights.logUsage(contentId, metadata);
}`}</code>
              </pre>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-sm">
                <CheckCircle className="h-4 w-4 text-primary inline mr-2" />
                RESTful APIs with comprehensive documentation
              </div>
              <div className="text-sm">
                <CheckCircle className="h-4 w-4 text-primary inline mr-2" />
                GraphQL endpoints for efficient data fetching
              </div>
              <div className="text-sm">
                <CheckCircle className="h-4 w-4 text-primary inline mr-2" />
                Webhook infrastructure for real-time notifications
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {apiFeatures.map((feature, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
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

      {/* Rights-Aware Applications */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Build Rights-Aware Applications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {applicationTypes.map((app, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <app.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{app.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{app.description}</p>
                <ul className="space-y-2">
                  {app.features.map((feature, idx) => (
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

      {/* SDKs & Integration */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">SDKs & Integration Tools</h2>
          
          {/* JavaScript SDK */}
          <div className="mb-8 bg-background border border-border p-8">
            <h3 className="text-xl font-semibold mb-4">JavaScript/TypeScript SDK</h3>
            <div className="bg-muted/50 p-6 border border-border">
              <pre className="text-sm overflow-x-auto">
                <code>{`import { CreationRights } from '@creationrights/sdk';

const cr = new CreationRights({
  apiKey: process.env.CREATION_RIGHTS_API_KEY
});

// Upload and protect content
const asset = await cr.assets.create({
  file: uploadedFile,
  license: 'commercial',
  royaltyShares: [
    { address: 'creator-wallet', percentage: 70 },
    { address: 'collaborator-wallet', percentage: 30 }
  ]
});

// Query rights in real-time
const canUse = await cr.rights.check(asset.id, {
  useCase: 'ai-training',
  commercial: true
});`}</code>
              </pre>
            </div>
          </div>

          {/* Python SDK */}
          <div className="mb-8 bg-background border border-border p-8">
            <h3 className="text-xl font-semibold mb-4">Python SDK</h3>
            <div className="bg-muted/50 p-6 border border-border">
              <pre className="text-sm overflow-x-auto">
                <code>{`from creation_rights import CreationRights

cr = CreationRights(api_key=os.getenv('CREATION_RIGHTS_API_KEY'))

# Batch process content library
assets = cr.assets.bulk_create(
    files=content_library,
    default_license='cc-by-nc',
    auto_tag=True
)

# Real-time usage monitoring
for event in cr.events.stream(['usage', 'payment']):
    handle_rights_event(event)`}</code>
              </pre>
            </div>
          </div>

          {/* Go SDK */}
          <div className="bg-background border border-border p-8">
            <h3 className="text-xl font-semibold mb-4">Go SDK</h3>
            <div className="bg-muted/50 p-6 border border-border">
              <pre className="text-sm overflow-x-auto">
                <code>{`package main

import (
    "github.com/creationrights/go-sdk"
)

func main() {
    client := creationrights.NewClient(os.Getenv("CREATION_RIGHTS_API_KEY"))
   
    // Verify licensing before content use
    rights, err := client.Rights.Check(contentID, creationrights.CheckOptions{
        UseCase: "commercial",
        Territory: "global",
    })
   
    if rights.Permitted {
        // Proceed with licensed usage
        client.Usage.Log(contentID, usageMetadata)
    }
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Advanced Features */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Advanced Features for Power Users</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
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

      {/* Real-World Use Cases */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Real-World Use Cases</h2>
          
          <div className="space-y-8">
            {/* CMS Plugin */}
            <div className="bg-background border border-border p-8">
              <h3 className="text-xl font-semibold mb-4">Content Management System Plugin</h3>
              <div className="bg-muted/50 p-6 border border-border">
                <pre className="text-sm overflow-x-auto">
                  <code>{`// WordPress/Drupal plugin integration
const protectContent = async (post) => {
  const asset = await creationRights.assets.create({
    content: post.content,
    metadata: post.metadata,
    license: post.license_type
  });
  
  post.creation_rights_id = asset.id;
  return post;
};`}</code>
                </pre>
              </div>
            </div>

            {/* AI Training Pipeline */}
            <div className="bg-background border border-border p-8">
              <h3 className="text-xl font-semibold mb-4">AI Model Training Pipeline</h3>
              <div className="bg-muted/50 p-6 border border-border">
                <pre className="text-sm overflow-x-auto">
                  <code>{`# Ethical training data pipeline
def prepare_training_data(dataset):
    verified_data = []
   
    for item in dataset:
        rights = cr.rights.check(item.id, use_case='ai-training')
        if rights.permitted:
            verified_data.append(item)
            cr.usage.log(item.id, {'model': 'gpt-style', 'purpose': 'training'})
   
    return verified_data`}</code>
                </pre>
              </div>
            </div>

            {/* Real-Time Rights Verification */}
            <div className="bg-background border border-border p-8">
              <h3 className="text-xl font-semibold mb-4">Real-Time Rights Verification</h3>
              <div className="bg-muted/50 p-6 border border-border">
                <pre className="text-sm overflow-x-auto">
                  <code>{`// Streaming platform integration
const canStream = await creationRights.rights.verify({
  contentId: trackId,
  territory: userLocation,
  commercial: isPremiumUser,
  realTime: true
});

if (canStream.permitted) {
  startStream(trackId);
  creationRights.usage.track(trackId, streamingMetadata);
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Developer Resources */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Developer Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {developerResources.map((resource, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <resource.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                </div>
                <ul className="space-y-3">
                  {resource.features.map((feature, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Technical Specifications */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Technical Specifications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {technicalSpecs.map((spec, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <spec.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{spec.title}</h3>
                </div>
                <ul className="space-y-3">
                  {spec.features.map((feature, idx) => (
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

      {/* Get Started Building */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-6 text-center">Get Started Building</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Quick Start Guide</h3>
              <ol className="space-y-4">
                {quickStartSteps.map((step, index) => (
                  <li key={index} className="flex items-start space-x-4">
                    <div className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center text-sm font-semibold">
                      {index + 1}
                    </div>
                    <span className="text-muted-foreground">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">30-Minute Technical Demo</h3>
              <p className="text-muted-foreground mb-6">Book a session with our developer relations team:</p>
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Live API walkthrough with your use case</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Architecture consultation for your application</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Custom integration planning</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Performance optimization strategies</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-sm">Access to beta features and early releases</span>
                </div>
              </div>
              <Button variant="shimmer" size="lg" asChild>
                <Link href="/demo">Book Technical Demo</Link>
              </Button>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Open Source Contributions */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Open Source Contributions</h2>
          <div className="text-center mb-8">
            <p className="text-xl text-muted-foreground mb-8">
              We believe in building together. Contribute to our open-source tools:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            {openSourceAreas.map((area, index) => (
              <div key={index} className="bg-background border border-border p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <GitBranch className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">{area.name}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{area.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <p className="text-muted-foreground">
              <strong>Contributors get:</strong> Early access to new features, direct line to engineering team, and recognition in our developer community.
            </p>
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
