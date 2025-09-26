import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Code2, Webhook, Database, Puzzle, Zap, Shield } from "lucide-react";

export default function DevelopersPage() {
  const features = [
    {
      icon: Code2,
      title: "RESTful APIs",
      description: "Comprehensive REST APIs for content protection, licensing, and metadata management."
    },
    {
      icon: Webhook,
      title: "Real-time Webhooks",
      description: "Instant notifications for copyright infringements, license updates, and more."
    },
    {
      icon: Database,
      title: "Content Database",
      description: "Access our massive database of protected content and licensing information."
    },
    {
      icon: Puzzle,
      title: "Easy Integration",
      description: "Simple SDKs and libraries for popular programming languages and frameworks."
    },
    {
      icon: Zap,
      title: "High Performance",
      description: "99.9% uptime with global CDN and optimized response times under 100ms."
    },
    {
      icon: Shield,
      title: "Secure & Compliant",
      description: "Enterprise-grade security with SOC 2, GDPR, and CCPA compliance built-in."
    }
  ];

  const codeExample = `// Initialize Creation Rights SDK
import { CreationRights } from '@creation-rights/sdk';

const cr = new CreationRights({
  apiKey: process.env.CR_API_KEY,
  environment: 'production'
});

// Protect content
const protection = await cr.content.protect({
  title: 'My Creative Work',
  type: 'image',
  url: 'https://example.com/image.jpg',
  metadata: {
    creator: 'John Doe',
    license: 'CC-BY-SA-4.0'
  }
});

console.log('Content protected:', protection.id);`;

  return (
    <PageLayout>
      <PageHeader
        title="For Developers"
        subtitle="Build powerful applications with our comprehensive APIs and developer tools. Integrate content protection and licensing into your platform."
      />
      
      <PageSection>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-sm transition-all hover:border-border hover:bg-muted/50"
            >
              <feature.icon className="mb-6 h-12 w-12" />
              <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              Get Started in Minutes
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Our developer-friendly APIs make it easy to add content protection and licensing to any application. Start building today with our comprehensive documentation and code examples.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
                Get API Key
              </button>
              <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
                View Documentation
              </button>
            </div>
          </div>
          <div className="relative">
            <pre className="rounded-lg bg-muted/50 p-6 text-sm overflow-x-auto border border-border">
              <code>{codeExample}</code>
            </pre>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
