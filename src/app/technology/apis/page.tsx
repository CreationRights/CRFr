import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Code2, Zap, Shield, Database, Webhook, Globe } from "lucide-react";

export default function ApisPage() {
  const apis = [
    {
      icon: Code2,
      title: "Content Protection API",
      description: "Integrate content protection and monitoring capabilities into your applications.",
      endpoint: "/api/v1/content/protect"
    },
    {
      icon: Database,
      title: "Metadata API",
      description: "Access and manage dynamic metadata for your creative works.",
      endpoint: "/api/v1/metadata"
    },
    {
      icon: Shield,
      title: "Rights Management API",
      description: "Handle licensing, permissions, and usage rights programmatically.",
      endpoint: "/api/v1/rights"
    },
    {
      icon: Webhook,
      title: "Webhooks API",
      description: "Real-time notifications for copyright infringements and licensing events.",
      endpoint: "/api/v1/webhooks"
    },
    {
      icon: Zap,
      title: "Enforcement API",
      description: "Automate takedown requests and copyright enforcement actions.",
      endpoint: "/api/v1/enforcement"
    },
    {
      icon: Globe,
      title: "Analytics API",
      description: "Access comprehensive analytics and reporting data.",
      endpoint: "/api/v1/analytics"
    }
  ];

  const codeExample = `// Initialize the Creation Rights SDK
import { CreationRights } from '@creation-rights/sdk';

const cr = new CreationRights({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Protect a piece of content
const result = await cr.content.protect({
  url: 'https://example.com/image.jpg',
  title: 'My Artwork',
  creator: 'John Doe',
  license: 'all-rights-reserved'
});

// Set up real-time monitoring
await cr.monitoring.enable({
  contentId: result.id,
  webhookUrl: 'https://yourapp.com/webhooks/cr'
});`;

  return (
    <PageLayout>
      <PageHeader
        title="Platform APIs"
        subtitle="Powerful APIs that enable developers to integrate comprehensive content protection and rights management into any application or platform."
      />
      
      <PageSection>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {apis.map((api, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-sm transition-all hover:border-border hover:bg-muted/50"
            >
              <api.icon className="mb-6 h-12 w-12" />
              <h3 className="mb-4 text-xl font-semibold ">{api.title}</h3>
              <p className="text-muted-foreground mb-4">{api.description}</p>
              <code className="text-sm bg-muted px-2 py-1 rounded">
                {api.endpoint}
              </code>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold  md:text-4xl">
              Developer-First Design
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Our APIs are designed with developers in mind, featuring comprehensive documentation, SDKs for popular languages, and excellent developer support.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                <div>
                  <p className=" font-medium">RESTful Design</p>
                  <p className="text-muted-foreground text-sm">Clean, predictable API endpoints following REST principles</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                <div>
                  <p className=" font-medium">Rate Limiting</p>
                  <p className="text-muted-foreground text-sm">Fair usage policies with generous rate limits</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                <div>
                  <p className=" font-medium">99.9% Uptime</p>
                  <p className="text-muted-foreground text-sm">Enterprise-grade reliability and performance</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <pre className="rounded-lg bg-muted p-6 text-sm  overflow-x-auto border border-border">
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>
      </PageSection>

      <PageSection className="text-center">
        <h2 className="mb-6 text-3xl font-bold  md:text-4xl">
          Start Building Today
        </h2>
        <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
          Get started with our comprehensive APIs and join thousands of developers building the future of content protection.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
            Get API Key
          </button>
          <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
            View Documentation
          </button>
        </div>
      </PageSection>
    </PageLayout>
  );
}
