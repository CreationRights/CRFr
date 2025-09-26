import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Download, Calendar, ExternalLink } from "lucide-react";

export default function PressPage() {
  const pressReleases = [
    {
      title: "Creation Rights Raises $50M Series B Led by Andreessen Horowitz",
      date: "March 15, 2024",
      excerpt: "Funding will accelerate global expansion and enhance AI-powered content protection capabilities for creators worldwide."
    },
    {
      title: "Creation Rights Partners with Adobe to Integrate Content Protection into Creative Cloud",
      date: "March 10, 2024",
      excerpt: "New partnership brings seamless content protection directly into Adobe's creative applications used by millions of creators."
    },
    {
      title: "Creation Rights Launches NIL Protection for College Athletes",
      date: "March 5, 2024",
      excerpt: "Comprehensive name, image, and likeness protection specifically designed for student athletes in the new NIL era."
    }
  ];

  const mediaKit = [
    { name: "Company Logo (PNG)", size: "2.1 MB" },
    { name: "Company Logo (SVG)", size: "145 KB" },
    { name: "Product Screenshots", size: "8.4 MB" },
    { name: "Executive Headshots", size: "12.3 MB" },
    { name: "Brand Guidelines", size: "3.2 MB" }
  ];

  const coverage = [
    {
      outlet: "TechCrunch",
      title: "Creation Rights is building the infrastructure for creator rights",
      date: "March 16, 2024"
    },
    {
      outlet: "The Verge",
      title: "How AI is changing content protection for digital creators",
      date: "March 12, 2024"
    },
    {
      outlet: "Forbes",
      title: "The $50M bet on protecting creator rights in the digital age",
      date: "March 15, 2024"
    },
    {
      outlet: "Wired",
      title: "Inside the fight against content theft in the creator economy",
      date: "February 28, 2024"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Press"
        subtitle="Latest news, press releases, and media coverage about Creation Rights and our mission to protect creators."
      />
      
      <PageSection>
        {/* Press Releases */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold  mb-8">Press Releases</h2>
          <div className="space-y-6">
            {pressReleases.map((release, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card backdrop-blur-sm transition-all hover:border-border hover:bg-muted/50"
              >
                <div className="flex items-center space-x-2 mb-3">
                  <Calendar className="h-4 w-4" />
                  <span className="text-sm">{release.date}</span>
                </div>
                <h3 className="text-xl font-semibold  mb-3">{release.title}</h3>
                <p className="text-muted-foreground mb-4">{release.excerpt}</p>
                <button className="flex items-center space-x-2 transition-colors hover:text-muted-foreground">
                  <span>Read Full Release</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Media Kit */}
          <div>
            <h2 className="text-3xl font-bold  mb-8">Media Kit</h2>
            <div className="space-y-4">
              {mediaKit.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 rounded-xl border border-border bg-card backdrop-blur-sm"
                >
                  <div>
                    <p className=" font-medium">{item.name}</p>
                    <p className="text-muted-foreground text-sm">{item.size}</p>
                  </div>
                  <button className="text-foreground hover:text-muted-foreground transition-colors">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Media Coverage */}
          <div>
            <h2 className="text-3xl font-bold  mb-8">Media Coverage</h2>
            <div className="space-y-4">
              {coverage.map((article, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-border bg-card backdrop-blur-sm transition-all hover:border-border hover:bg-muted/50"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">{article.outlet}</span>
                    <span className="text-muted-foreground text-sm">{article.date}</span>
                  </div>
                  <p className="">{article.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      <PageSection className="text-center">
        <h2 className="mb-6 text-3xl font-bold  md:text-4xl">
          Media Inquiries
        </h2>
        <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
          For press inquiries, interviews, or additional information, please contact our media relations team.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
            Contact Press Team
          </button>
          <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
            Download Media Kit
          </button>
        </div>
      </PageSection>
    </PageLayout>
  );
}
