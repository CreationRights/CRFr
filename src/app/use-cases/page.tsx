import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Camera, Music, Palette, Video, BookOpen, Gamepad2 } from "lucide-react";

export default function UseCasesPage() {
  const useCases = [
    {
      icon: Camera,
      title: "Photography",
      description: "Protect your photographs from unauthorized use and monetize your portfolio through smart licensing.",
      features: ["Watermark automation", "Print licensing", "Stock photo protection", "Social media monitoring"]
    },
    {
      icon: Music,
      title: "Music & Audio",
      description: "Safeguard your musical creations and ensure proper attribution and royalties.",
      features: ["Audio fingerprinting", "Streaming royalties", "Cover song detection", "Sync licensing"]
    },
    {
      icon: Palette,
      title: "Digital Art",
      description: "Protect your digital artwork and illustrations from theft and unauthorized reproduction.",
      features: ["NFT integration", "Print-on-demand", "Commission tracking", "Style protection"]
    },
    {
      icon: Video,
      title: "Video Content",
      description: "Monitor your video content across platforms and protect against unauthorized uploads.",
      features: ["Content ID matching", "Platform takedowns", "Clip monitoring", "Revenue sharing"]
    },
    {
      icon: BookOpen,
      title: "Written Content",
      description: "Protect your articles, books, and written works from plagiarism and unauthorized use.",
      features: ["Text matching", "Translation detection", "Academic protection", "Publishing rights"]
    },
    {
      icon: Gamepad2,
      title: "Game Assets",
      description: "Protect game assets, characters, and intellectual property in the gaming industry.",
      features: ["Asset tracking", "Character protection", "Mod monitoring", "IP enforcement"]
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Use Cases"
        subtitle="Discover how Creation Rights protects and empowers creators across different industries and creative disciplines."
      />
      
      <PageSection>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-sm transition-all hover:border-border hover:bg-muted/50"
            >
              <useCase.icon className="mb-6 h-12 w-12" />
              <h3 className="mb-4 text-2xl font-semibold ">{useCase.title}</h3>
              <p className="text-muted-foreground mb-6">{useCase.description}</p>
              <ul className="space-y-2">
                {useCase.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-foreground rounded-full"></div>
                    <span className=" text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="text-center">
        <h2 className="mb-6 text-3xl font-bold  md:text-4xl">
          Ready to Protect Your Creative Work?
        </h2>
        <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
          No matter what type of creative work you produce, Creation Rights has the tools to protect and monetize it.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
            Start Free Trial
          </button>
          <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
            Contact Sales
          </button>
        </div>
      </PageSection>
    </PageLayout>
  );
}
