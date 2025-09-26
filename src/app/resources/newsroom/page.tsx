import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Calendar, Tag, ArrowRight } from "lucide-react";

export default function NewsroomPage() {
  const news = [
    {
      title: "Creation Rights Raises $50M Series B to Expand Global Content Protection",
      excerpt: "Funding will accelerate international expansion and enhance AI-powered content monitoring capabilities.",
      date: "March 15, 2024",
      category: "Funding",
      featured: true
    },
    {
      title: "New Partnership with Adobe to Integrate Content Protection into Creative Cloud",
      excerpt: "Seamless integration allows creators to protect their work directly from Adobe applications.",
      date: "March 10, 2024",
      category: "Partnership"
    },
    {
      title: "Creation Rights Launches NIL Protection for College Athletes",
      excerpt: "Comprehensive name, image, and likeness protection specifically designed for student athletes.",
      date: "March 5, 2024",
      category: "Product"
    },
    {
      title: "Q4 2023 Creator Economy Report: Revenue Up 300% Year-over-Year",
      excerpt: "Latest report shows significant growth in creator monetization and content protection adoption.",
      date: "February 28, 2024",
      category: "Research"
    },
    {
      title: "Creation Rights Opens European Office in Amsterdam",
      excerpt: "New office will serve growing European creator community and ensure GDPR compliance.",
      date: "February 20, 2024",
      category: "Company"
    },
    {
      title: "AI-Powered Content ID System Achieves 99.7% Accuracy Rate",
      excerpt: "Latest improvements to our content identification system deliver industry-leading accuracy.",
      date: "February 15, 2024",
      category: "Technology"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Newsroom"
        subtitle="Latest news, updates, and announcements from Creation Rights and the creator economy."
      />
      
      <PageSection>
        {/* Featured News */}
        {news.filter(item => item.featured).map((item, index) => (
          <div
            key={index}
            className="mb-12 rounded-2xl border border-border bg-card p-8 backdrop-blur-sm"
          >
              <div className="flex items-center space-x-2 mb-4">
                <Tag className="h-4 w-4" />
                <span className="text-sm font-medium">{item.category}</span>
              <span className="text-muted-foreground">•</span>
              <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                <Calendar className="h-4 w-4" />
                <span>{item.date}</span>
              </div>
            </div>
            <h2 className="mb-4 text-3xl font-bold ">{item.title}</h2>
            <p className=" text-lg mb-6">{item.excerpt}</p>
            <button className="flex items-center space-x-2 text-foreground hover:text-muted-foreground transition-colors">
              <span>Read Full Story</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        ))}

        {/* Regular News */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {news.filter(item => !item.featured).map((item, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-6 backdrop-blur-sm transition-all hover:bg-muted/50"
            >
              <div className="flex items-center space-x-2 mb-3">
                <Tag className="h-4 w-4" />
                <span className="text-sm font-medium">{item.category}</span>
              </div>
              
              <h3 className="mb-3 text-xl font-semibold  group-hover:text-muted-foreground transition-colors">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground mb-4">{item.excerpt}</p>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-1 text-muted-foreground text-sm">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                <button className="text-foreground hover:text-muted-foreground transition-colors">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </PageLayout>
  );
}
