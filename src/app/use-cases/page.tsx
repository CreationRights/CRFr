import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { 
  Palette, Video, Shirt, Shield, Trophy, Users, Fingerprint, Code
} from "lucide-react";

export default function UseCasesPage() {
  const categories = [
    {
      title: "Arts & Culture",
      description: "Protecting and empowering traditional and digital artists",
      icon: Palette,
      color: "bg-purple-500/10 border-purple-500/20",
      useCases: [
        { name: "Art", href: "/use-cases/art", description: "Digital rights for artists and art creators" },
        { name: "Architecture", href: "/use-cases/architecture", description: "Protecting architectural designs and concepts" },
        { name: "Galleries", href: "/use-cases/galleries", description: "Gallery and exhibition rights management" },
        { name: "Creative Spaces", href: "/use-cases/creative-spaces", description: "Rights management for creative venues" },
        { name: "Museums", href: "/use-cases/museums", description: "Museum collection and exhibition protection" }
      ]
    },
    {
      title: "Media & Entertainment",
      description: "Comprehensive protection for media and entertainment content",
      icon: Video,
      color: "bg-blue-500/10 border-blue-500/20",
      useCases: [
        { name: "Film", href: "/use-cases/film", description: "Film production and distribution rights" },
        { name: "TV", href: "/use-cases/tv", description: "Television content and broadcast rights" },
        { name: "Music", href: "/use-cases/music", description: "Music creation and distribution protection" },
        { name: "Video Games", href: "/use-cases/video-games", description: "Game development and publishing rights" },
        { name: "Journalism", href: "/use-cases/journalism", description: "News content and editorial protection" },
        { name: "Authors", href: "/use-cases/authors", description: "Book publishing and literary rights" }
      ]
    },
    {
      title: "Fashion & Lifestyle",
      description: "Style, beauty, and lifestyle content protection",
      icon: Shirt,
      color: "bg-pink-500/10 border-pink-500/20",
      useCases: [
        { name: "Fashion", href: "/use-cases/fashion", description: "Fashion design and brand protection" },
        { name: "Beauty", href: "/use-cases/beauty", description: "Beauty content and influencer rights" },
        { name: "Models", href: "/use-cases/models", description: "Model portfolio and image rights" },
        { name: "Cuisine", href: "/use-cases/cuisine", description: "Culinary content and recipe protection" },
        { name: "Hospitality", href: "/use-cases/hospitality", description: "Hotel and service industry branding" }
      ]
    },
    {
      title: "Technology",
      description: "Digital safety and technology solutions",
      icon: Shield,
      color: "bg-green-500/10 border-green-500/20",
      useCases: [
        { name: "Online Safety", href: "/use-cases/online-safety", description: "Digital safety and content moderation" }
      ]
    },
    {
      title: "Creative Industries",
      description: "Professional creative services and agencies",
      icon: Users,
      color: "bg-orange-500/10 border-orange-500/20",
      useCases: [
        { name: "Content Creators", href: "/use-cases/content-creators", description: "Social media and digital content creation" },
        { name: "Photography", href: "/use-cases/photography", description: "Professional photography services" },
        { name: "Design", href: "/use-cases/design", description: "Graphic and digital design protection" },
        { name: "Advertising", href: "/use-cases/advertising", description: "Advertising campaign and creative rights" },
        { name: "Agency", href: "/use-cases/agency", description: "Creative agency and talent management" },
        { name: "Auction House", href: "/use-cases/auction-house", description: "Art auction and valuation services" }
      ]
    },
    {
      title: "Sports & NIL",
      description: "Sports and name, image, likeness protection",
      icon: Trophy,
      color: "bg-red-500/10 border-red-500/20",
      useCases: [
        { name: "Sports", href: "/use-cases/sports", description: "Sports content and athlete rights" },
        { name: "NIL", href: "/use-cases/nil", description: "Name, image, and likeness protection" }
      ]
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Use Cases"
        subtitle="Discover how Creation Rights protects and empowers creators across different industries and creative disciplines."
      />
      
      <PageSection>
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl font-semibold mb-4">25 Use Cases Across 6 Industries</h2>
          <p className="text-lg text-muted-foreground">
            From individual artists to large organizations, Creation Rights provides comprehensive 
            digital rights management solutions tailored to your specific industry and creative needs.
          </p>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-6xl mx-auto space-y-16">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-8">
              <div className="text-center">
                <div className={`inline-flex items-center justify-center w-16 h-16  ${category.color} mb-4`}>
                  <category.icon className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-semibold mb-2">{category.title}</h3>
                <p className="text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.useCases.map((useCase, index) => (
                  <Link
                    key={index}
                    href={useCase.href}
                    className="group block p-6  border border-border bg-card hover:bg-muted/50 transition-all duration-200 hover:border-border/60"
                  >
                    <h4 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {useCase.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {useCase.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection className="bg-muted/20">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Ready to Protect Your Creative Work?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            No matter what type of creative work you produce, Creation Rights has the tools to protect and monetize it.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Start Free Trial</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Contact Sales</Link>
            </Button>
          </div>
        </div>
      </PageSection>

      <PageSection>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10  flex items-center justify-center mx-auto">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Comprehensive Protection</h3>
              <p className="text-muted-foreground">
                Advanced AI-powered monitoring and protection across all digital platforms and channels.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10  flex items-center justify-center mx-auto">
                <Fingerprint className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Smart Authentication</h3>
              <p className="text-muted-foreground">
                Unique digital fingerprints and blockchain-verified ownership for all your creative works.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-12 h-12 bg-primary/10  flex items-center justify-center mx-auto">
                <Code className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold">Developer-Friendly APIs</h3>
              <p className="text-muted-foreground">
                Easy integration with existing workflows through comprehensive APIs and SDKs.
              </p>
            </div>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}