import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Palette, Shield, DollarSign, Users, Zap, Award } from "lucide-react";

export default function CreatorsPage() {
  const features = [
    {
      icon: Shield,
      title: "Content Protection",
      description: "Automatically detect and protect your creative works from unauthorized use across platforms."
    },
    {
      icon: DollarSign,
      title: "Revenue Optimization",
      description: "Maximize earnings through smart licensing and automated royalty collection."
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Connect with other creators and build your audience with integrated social tools."
    },
    {
      icon: Zap,
      title: "Instant Takedowns",
      description: "Fast-track DMCA takedowns and copyright enforcement across the web."
    },
    {
      icon: Award,
      title: "Brand Protection",
      description: "Safeguard your personal brand and creative identity from impersonation."
    },
    {
      icon: Palette,
      title: "Creative Tools",
      description: "Access professional-grade tools for watermarking, metadata embedding, and more."
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="For Creators"
        subtitle="Empower your creative journey with comprehensive protection, monetization, and growth tools designed specifically for digital creators."
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

      <PageSection className="text-center">
        <h2 className="mb-6 text-3xl font-bold md:text-4xl">
          Ready to Protect Your Creative Work?
        </h2>
        <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
          Join thousands of creators who trust Creation Rights to safeguard and monetize their digital assets.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
            Start Free Trial
          </button>
          <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
            Schedule Demo
          </button>
        </div>
      </PageSection>
    </PageLayout>
  );
}
