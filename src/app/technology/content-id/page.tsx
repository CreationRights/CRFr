import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Eye, Fingerprint, Zap, Shield, BarChart3, Network } from "lucide-react";

export default function ContentIdPage() {
  const features = [
    {
      icon: Fingerprint,
      title: "Digital Fingerprinting",
      description: "Advanced perceptual hashing creates unique fingerprints for every piece of content."
    },
    {
      icon: Eye,
      title: "Visual Recognition",
      description: "AI-powered visual recognition detects your content even when modified or cropped."
    },
    {
      icon: Zap,
      title: "Real-time Monitoring",
      description: "Continuous scanning across millions of websites and platforms for unauthorized use."
    },
    {
      icon: Shield,
      title: "Automated Protection",
      description: "Instant takedown notices and copyright claims when infringement is detected."
    },
    {
      icon: BarChart3,
      title: "Usage Analytics",
      description: "Comprehensive reports on where and how your content is being used online."
    },
    {
      icon: Network,
      title: "Platform Integration",
      description: "Direct integration with major social media and content platforms for faster action."
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Content ID Layer"
        subtitle="Advanced content identification and monitoring system that tracks your creative works across the entire internet, providing real-time protection against unauthorized use."
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
          Protect Your Content Everywhere
        </h2>
        <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
          Our Content ID system monitors over 10 billion web pages daily to protect your creative works.
        </p>
          <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
            Enable Content ID
          </button>
      </PageSection>
    </PageLayout>
  );
}
