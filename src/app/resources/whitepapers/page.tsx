import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { FileText, Download, Calendar } from "lucide-react";

export default function WhitepapersPage() {
  const whitepapers = [
    {
      title: "The Future of Digital Rights Management",
      description: "Comprehensive analysis of emerging trends in digital rights management and content protection.",
      date: "March 2024",
      pages: 45,
      category: "Industry Analysis"
    },
    {
      title: "Blockchain and Creative Rights",
      description: "How blockchain technology is revolutionizing the way we protect and manage creative intellectual property.",
      date: "February 2024",
      pages: 32,
      category: "Technology"
    },
    {
      title: "AI in Content Protection",
      description: "The role of artificial intelligence in detecting and preventing unauthorized use of creative works.",
      date: "January 2024",
      pages: 28,
      category: "Technology"
    },
    {
      title: "Creator Economy Report 2024",
      description: "Annual report on the state of the creator economy and emerging monetization strategies.",
      date: "December 2023",
      pages: 67,
      category: "Market Research"
    },
    {
      title: "Legal Framework for Digital Creators",
      description: "Understanding the legal landscape for digital creators and content protection strategies.",
      date: "November 2023",
      pages: 38,
      category: "Legal"
    },
    {
      title: "Platform Liability and Creator Rights",
      description: "Analysis of platform responsibility in protecting creator rights and preventing infringement.",
      date: "October 2023",
      pages: 41,
      category: "Legal"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Whitepapers"
        subtitle="In-depth research and analysis on digital rights, content protection, and the creator economy."
      />
      
      <PageSection>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {whitepapers.map((paper, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-sm transition-all hover:border-border hover:bg-muted/50"
            >
              <div className="flex items-start justify-between mb-4">
                <FileText className="h-8 w-8" />
                <span className="text-xs bg-muted px-2 py-1 rounded">
                  {paper.category}
                </span>
              </div>
              
              <h3 className="mb-3 text-xl font-semibold ">{paper.title}</h3>
              <p className="text-muted-foreground mb-4">{paper.description}</p>
              
              <div className="flex items-center justify-between text-sm text-muted-foreground mb-6">
                <div className="flex items-center space-x-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="h-4 w-4" />
                    <span>{paper.date}</span>
                  </div>
                  <span>{paper.pages} pages</span>
                </div>
              </div>
              
                <button className="flex items-center space-x-2 transition-colors hover:text-muted-foreground">
                <Download className="h-4 w-4" />
                <span>Download PDF</span>
              </button>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="text-center">
        <h2 className="mb-6 text-3xl font-bold  md:text-4xl">
          Stay Informed
        </h2>
        <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
          Subscribe to our newsletter to receive the latest whitepapers and research directly in your inbox.
        </p>
        <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
          Subscribe to Newsletter
        </button>
      </PageSection>
    </PageLayout>
  );
}
