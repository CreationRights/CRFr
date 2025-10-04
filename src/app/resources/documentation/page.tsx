import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Book, Code, Zap, Shield, Database, Webhook } from "lucide-react";

export default function DocumentationPage() {
  const sections = [
    {
      icon: Zap,
      title: "Getting Started",
      description: "Quick start guide to get up and running with Creation Rights in minutes.",
      links: ["Installation", "Authentication", "First API Call", "Basic Concepts"]
    },
    {
      icon: Code,
      title: "API Reference",
      description: "Comprehensive documentation for all our APIs and endpoints.",
      links: ["Content API", "Metadata API", "Rights API", "Analytics API"]
    },
    {
      icon: Shield,
      title: "Protection Guide",
      description: "Learn how to effectively protect your creative works using our platform.",
      links: ["Content Protection", "Monitoring Setup", "Takedown Process", "Legal Actions"]
    },
    {
      icon: Database,
      title: "Integration Guide",
      description: "Step-by-step guides for integrating with popular platforms and services.",
      links: ["WordPress Plugin", "Social Media", "E-commerce", "Custom Integration"]
    },
    {
      icon: Webhook,
      title: "Webhooks",
      description: "Real-time notifications and event handling for your applications.",
      links: ["Setup Webhooks", "Event Types", "Security", "Troubleshooting"]
    },
    {
      icon: Book,
      title: "Best Practices",
      description: "Industry best practices for content protection and rights management.",
      links: ["Metadata Standards", "Licensing Strategy", "Monitoring Tips", "Legal Compliance"]
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Documentation"
        subtitle="Comprehensive guides, API references, and tutorials to help you make the most of Creation Rights."
      />
      
      <PageSection>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sections.map((section, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-sm transition-all hover:border-border hover:bg-muted/50"
            >
              <section.icon className="mb-6 h-12 w-12" />
              <h3 className="mb-4 text-xl font-semibold ">{section.title}</h3>
              <p className="text-muted-foreground mb-6">{section.description}</p>
              
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href="#"
                      className="transition-colors text-sm hover:text-muted-foreground"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="text-center">
        <h2 className="mb-6 text-3xl font-semibold  md:text-4xl">
          Need Help?
        </h2>
        <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
          Can&apos;t find what you&apos;re looking for? Our support team is here to help you succeed.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
            Contact Support
          </button>
          <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
            Community Forum
          </button>
        </div>
      </PageSection>
    </PageLayout>
  );
}
