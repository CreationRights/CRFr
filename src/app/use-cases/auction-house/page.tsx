import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, BarChart3, Fingerprint, Eye } from "lucide-react";
import Link from "next/link";

export default function AuctionHousePage() {
  const challenges = [
    {
      title: "Artwork Authentication & Provenance",
      description: "Verifying authenticity and maintaining clear provenance records for artworks in digital catalogs and auction platforms."
    },
    {
      title: "Digital Catalog Rights Management",
      description: "Managing rights for high-resolution artwork images, catalog photography, and promotional materials across platforms."
    },
    {
      title: "Consigner & Artist Rights",
      description: "Complex rights management between auction houses, consigners, artists, and buyers for resale and reproduction rights."
    }
  ];

  const solutions = [
    {
      icon: Fingerprint,
      title: "Artwork Authentication System",
      description: "Comprehensive authentication and provenance tracking system for artworks with immutable digital records."
    },
    {
      icon: Eye,
      title: "Catalog Rights Management",
      description: "Advanced rights management for auction catalogs, artwork photography, and promotional materials."
    },
    {
      icon: BarChart3,
      title: "Auction Analytics Platform",
      description: "Detailed analytics for auction performance with integrated rights tracking and revenue distribution."
    }
  ];

  const benefits = [
    "Comprehensive artwork authentication and provenance",
    "Streamlined catalog and image rights management",
    "Enhanced buyer confidence through verified authenticity",
    "Automated consigner and artist payments",
    "Improved auction house reputation and trust"
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Auction House"
        subtitle="Authentication and rights management solutions for auction houses and art dealers"
      />

      <PageSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Challenges for Auction Houses</h2>
          <div className="space-y-6">
            {challenges.map((challenge, index) => (
              <div key={index} className="bg-muted/20 p-6 border border-border">
                <h3 className="text-xl font-semibold mb-2">{challenge.title}</h3>
                <p className="text-muted-foreground">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Creation Rights Solutions for Auction Houses</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-background border border-border p-6">
                <solution.icon className="h-10 w-10 text-primary mb-4 mx-auto" />
                <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
                <p className="text-muted-foreground text-sm">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-6">Key Benefits for Auction Houses</h2>
          <ul className="space-y-3 text-left max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <li key={index} className="flex items-start space-x-2">
                <CheckCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                <span className="text-muted-foreground text-lg">{benefit}</span>
              </li>
            ))}
          </ul>
        </div>
      </PageSection>

      <PageSection className="bg-muted/20 text-center">
        <h2 className="text-3xl font-semibold mb-6">Ready to Enhance Your Auction House?</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Discover how Creation Rights can help auction houses build trust and streamline operations.
        </p>
        <Button variant="shimmer" size="lg" asChild>
          <Link href="/demo">Schedule Auction House Demo</Link>
        </Button>
      </PageSection>
    </PageLayout>
  );
}
