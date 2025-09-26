import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Zap, DollarSign, FileText, Users, BarChart3, Shield } from "lucide-react";

export default function LicensingPage() {
  const features = [
    {
      icon: Zap,
      title: "Automated Licensing",
      description: "Smart contracts automatically handle licensing agreements and payments."
    },
    {
      icon: DollarSign,
      title: "Dynamic Pricing",
      description: "AI-powered pricing that adjusts based on usage, demand, and market conditions."
    },
    {
      icon: FileText,
      title: "Custom Terms",
      description: "Flexible licensing terms that adapt to different use cases and industries."
    },
    {
      icon: Users,
      title: "Multi-party Licensing",
      description: "Handle complex licensing scenarios with multiple creators and stakeholders."
    },
    {
      icon: BarChart3,
      title: "Revenue Optimization",
      description: "Advanced analytics to maximize your licensing revenue and identify opportunities."
    },
    {
      icon: Shield,
      title: "Compliance Monitoring",
      description: "Automatic monitoring to ensure licensees comply with agreed terms."
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Smart Licensing"
        subtitle="Intelligent licensing system that automates agreements, payments, and compliance monitoring while maximizing revenue from your creative works."
      />
      
      <PageSection>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-sm transition-all hover:border-border hover:bg-muted/50"
            >
              <feature.icon className="mb-6 h-12 w-12" />
              <h3 className="mb-4 text-xl font-semibold ">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="text-center">
        <h2 className="mb-6 text-3xl font-bold  md:text-4xl">
          Maximize Your Licensing Revenue
        </h2>
        <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
          Our smart licensing platform has helped creators increase their licensing revenue by an average of 300%.
        </p>
          <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
            Start Smart Licensing
          </button>
      </PageSection>
    </PageLayout>
  );
}
