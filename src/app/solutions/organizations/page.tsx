import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Building2, Scale, BarChart3, Shield, Users, Cog } from "lucide-react";

export default function OrganizationsPage() {
  const features = [
    {
      icon: Building2,
      title: "Enterprise Management",
      description: "Centralized dashboard to manage all your organization's creative assets and rights."
    },
    {
      icon: Scale,
      title: "Legal Compliance",
      description: "Ensure full compliance with copyright laws and industry regulations across all markets."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reporting",
      description: "Comprehensive insights into content performance, usage rights, and revenue streams."
    },
    {
      icon: Shield,
      title: "Brand Protection",
      description: "Advanced monitoring and protection for your organization's intellectual property."
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Streamlined workflows for teams managing large portfolios of creative content."
    },
    {
      icon: Cog,
      title: "Custom Integrations",
      description: "Seamlessly integrate with your existing tools and enterprise systems."
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="For Organizations"
        subtitle="Scale your content operations with enterprise-grade tools for managing, protecting, and monetizing creative assets across your organization."
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

      <PageSection className="bg-card rounded-3xl">
        <div className="text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Trusted by Leading Organizations
          </h2>
          <p className="mb-10 text-lg text-muted-foreground max-w-3xl mx-auto">
            From media companies to educational institutions, organizations worldwide rely on Creation Rights to manage their creative assets at scale.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
              Request Enterprise Demo
            </button>
            <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
              Contact Sales
            </button>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
