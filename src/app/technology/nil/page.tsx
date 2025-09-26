import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Shield, Users, DollarSign, Award, BarChart3, Zap } from "lucide-react";

export default function NilPage() {
  const features = [
    {
      icon: Shield,
      title: "Identity Protection",
      description: "Comprehensive protection of your name, image, and likeness across all digital platforms."
    },
    {
      icon: Users,
      title: "Unauthorized Use Detection",
      description: "AI-powered monitoring to detect unauthorized use of your personal brand and identity."
    },
    {
      icon: DollarSign,
      title: "Monetization Control",
      description: "Control how your name and likeness are used commercially and ensure proper compensation."
    },
    {
      icon: Award,
      title: "Brand Management",
      description: "Tools to manage and protect your personal brand across social media and digital platforms."
    },
    {
      icon: BarChart3,
      title: "Usage Analytics",
      description: "Detailed reports on how your name, image, and likeness are being used online."
    },
    {
      icon: Zap,
      title: "Instant Enforcement",
      description: "Rapid response system for unauthorized use with automated takedown capabilities."
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="NIL Protection"
        subtitle="Comprehensive Name, Image, and Likeness protection for creators, athletes, and public figures in the digital age."
      />
      
      <PageSection>
        <div className="text-center mb-16">
          <h2 className="mb-6 text-3xl font-bold  md:text-4xl">
            Your Identity, Your Rights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Protect your most valuable asset - your identity. Our NIL protection ensures you maintain control over how your name, image, and likeness are used across all digital platforms.
          </p>
        </div>
        
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
          Protect Your Digital Identity
        </h2>
        <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
          Join thousands of creators and public figures who trust our NIL protection services.
        </p>
          <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
            Enable NIL Protection
          </button>
      </PageSection>
    </PageLayout>
  );
}
