import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Database, Zap, Shield, Code, BarChart3, Globe } from "lucide-react";

export default function MetadataPage() {
  const features = [
    {
      icon: Database,
      title: "Immutable Records",
      description: "Blockchain-based metadata storage ensures permanent, tamper-proof records of your creative works."
    },
    {
      icon: Zap,
      title: "Real-time Updates",
      description: "Instantly update metadata across all platforms and services with our real-time synchronization."
    },
    {
      icon: Shield,
      title: "Privacy Controls",
      description: "Granular privacy settings let you control what metadata is public or private."
    },
    {
      icon: Code,
      title: "Rich Metadata",
      description: "Support for extensive metadata including creator info, licensing terms, usage rights, and more."
    },
    {
      icon: BarChart3,
      title: "Analytics Integration",
      description: "Track how your metadata is being used and accessed across different platforms."
    },
    {
      icon: Globe,
      title: "Universal Compatibility",
      description: "Works with all major file formats and integrates with existing metadata standards."
    }
  ];

  const metadataExample = {
    title: "Sunset Over Mountains",
    creator: "Jane Smith",
    created: "2024-03-15T10:30:00Z",
    license: "CC BY-SA 4.0",
    rights: {
      commercial: true,
      modification: true,
      attribution: "required"
    },
    technical: {
      format: "JPEG",
      resolution: "4096x2731",
      colorSpace: "sRGB"
    },
    blockchain: {
      hash: "0x1a2b3c4d...",
      timestamp: "2024-03-15T10:30:15Z",
      network: "Ethereum"
    }
  };

  return (
    <PageLayout>
      <PageHeader
        title="Dynamic Metadata"
        subtitle="Revolutionary metadata management that evolves with your content, providing comprehensive tracking and protection across all digital platforms."
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

      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold  md:text-4xl">
              Comprehensive Metadata Structure
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Our dynamic metadata system captures and maintains detailed information about your creative works, ensuring proper attribution and rights management across all platforms.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                <div>
                  <p className=" font-medium">Creator Attribution</p>
                  <p className="text-muted-foreground text-sm">Permanent creator identification and contact information</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                <div>
                  <p className=" font-medium">Licensing Terms</p>
                  <p className="text-muted-foreground text-sm">Clear usage rights and restrictions for your content</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                <div>
                  <p className=" font-medium">Technical Details</p>
                  <p className="text-muted-foreground text-sm">Format, quality, and technical specifications</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <pre className="rounded-lg bg-muted p-6 text-sm  overflow-x-auto border border-border">
              <code>{JSON.stringify(metadataExample, null, 2)}</code>
            </pre>
          </div>
        </div>
      </PageSection>

      <PageSection className="text-center">
        <h2 className="mb-6 text-3xl font-bold  md:text-4xl">
          Start Using Dynamic Metadata
        </h2>
        <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
          Enhance your content protection and management with our advanced metadata system.
        </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
              Try Metadata API
            </button>
            <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
              View Documentation
            </button>
          </div>
      </PageSection>
    </PageLayout>
  );
}
