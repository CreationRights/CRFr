import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Zap, 
  Eye, 
  Rocket, 
  Users, 
  Target, 
  Heart, 
  Code2, 
  Award, 
  Globe, 
  Bot, 
  FileText, 
  Building2, 
  CheckCircle, 
  TrendingUp,
  Database,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  const companyValues = [
    {
      icon: Shield,
      title: "Protection",
      subtitle: "Comprehensive defense for creative work in the digital age",
      description: "We are committed to providing the most advanced tools and services necessary to safeguard your creative work and intellectual property. Our protection goes beyond traditional copyright – we defend against AI appropriation, deepfake exploitation, and unauthorized derivative works across all platforms and emerging technologies.",
      features: [
        "Patent-protected dynamic metadata system creates active defense layer",
        "Content that travels with rights enforcement and usage detection",
        "Proactive protection that operates at internet speed",
        "Defense against AI training and synthetic content generation"
      ]
    },
    {
      icon: Zap,
      title: "Empowerment",
      subtitle: "Giving creators the tools to build sustainable creative careers",
      description: "We believe that every creator should have the opportunity to benefit from their work, regardless of their size, resources, or industry connections. We strive to empower you with the knowledge, technology, and resources you need to succeed in an increasingly complex digital landscape.",
      features: [
        "Democratizes access to enterprise-grade rights management",
        "Enables independent creators to compete with major studios",
        "Provides education, community, and advocacy resources",
        "Helps creators navigate the modern creative economy"
      ]
    },
    {
      icon: Eye,
      title: "Transparency",
      subtitle: "Open communication and clear visibility into your creative rights",
      description: "We are dedicated to maintaining open and honest communication with our clients, ensuring that you are fully informed about the status of your creative rights, revenue streams, and platform performance. Transparency isn't just a value – it's built into our technology.",
      features: [
        "Real-time dashboards provide complete visibility",
        "Clear understanding of content usage and revenue generation",
        "Transparent technology built into our platform",
        "Open communication about rights status and performance"
      ]
    },
    {
      icon: Rocket,
      title: "Innovation",
      subtitle: "Pioneering technology that anticipates the future of creativity",
      description: "We have already patented our dynamic metadata system and continuously invest in developing cutting-edge technology and solutions to enhance the protection and management of your creative work. Our innovation isn't just about technology – it's about reimagining how creative rights work in a digital-first world.",
      features: [
        "Patented dynamic metadata technology",
        "Anticipates challenges before they emerge",
        "Develops solutions that grow with digital landscape",
        "Research and development focused on creator monetization"
      ]
    },
    {
      icon: Users,
      title: "Community",
      subtitle: "Fostering a vibrant ecosystem of creators supporting creators",
      description: "We foster a vibrant community of creators, providing a platform for collaboration, support, and the exchange of ideas. We believe that creators are stronger together, and our platform facilitates meaningful connections between artists, musicians, developers, and content creators across all disciplines.",
      features: [
        "Platform for collaboration and support",
        "Meaningful connections across creative disciplines",
        "Collective advocacy and shared learning",
        "Mutual support and community building"
      ]
    }
  ];

  const originStorySteps = [
    {
      title: "The Problem We Witnessed",
      description: "We are a group of passionate artists and tech entrepreneurs united by a common goal and a shared frustration. We witnessed the struggles of creators firsthand – their work often undervalued, unprotected, and vulnerable to infringement in an increasingly digital world.",
      examples: [
        "Talented musicians whose songs were used in viral TikTok videos without compensation",
        "Game developers whose innovative mechanics were copied by larger studios without attribution",
        "Visual artists whose distinctive styles were replicated by AI systems without consent",
        "Content creators whose work was stolen and monetized by others while they struggled"
      ]
    },
    {
      title: "The Journey Begins",
      description: "Our journey began with countless hours of brainstorming, research, and collaboration. We knew that traditional copyright law, written for a pre-digital age, was insufficient for protecting creators in a world of AI, social media, and global digital distribution.",
      examples: [
        "Delved into complexities of copyright law and emerging technologies",
        "Explored blockchain and AI for creator protection solutions",
        "Sought guidance from experienced intellectual property attorneys",
        "Studied how content moved across platforms and AI systems trained on creative work"
      ]
    },
    {
      title: "Innovation Through Necessity",
      description: "The breakthrough came when we invented 'dynamic metadata' – a patent-protected system that embeds active rights management directly into creative content. Unlike static copyright notices that could be easily stripped or ignored, our dynamic metadata travels with content, evolves based on usage, and actively enforces creator rights in real-time.",
      examples: [
        "Created proactive technological protection operating at internet speed",
        "Developed system that travels with content and enforces rights",
        "Built technology that evolves based on usage patterns",
        "Reimagined how intellectual property works in the digital age"
      ]
    },
    {
      title: "Building the Infrastructure",
      description: "We invested heavily in developing cutting-edge software, partnered with leading legal professionals, and established a network of industry connections. We built relationships with Lloyd's Lab for innovative insurance products, integrated with enterprise financial systems, and developed partnerships with major AI companies committed to ethical content usage.",
      examples: [
        "Developed advanced AI detection systems and real-time analytics",
        "Built internet-scale content protection with performance reliability",
        "Established partnerships with Lloyd's Lab and financial institutions",
        "Created automated enforcement mechanisms across all digital platforms"
      ]
    }
  ];

  const leadershipTeam = [
    {
      name: "F. Elusio Zafar",
      role: "Co-Founder",
      expertise: "Metadata Technology & AI Systems",
      description: "Brings extensive experience in metadata technology and AI systems, holding patents in dynamic content management and having worked at the intersection of creativity and technology for over a decade."
    },
    {
      name: "Jeff Gordon",
      role: "Co-Founder", 
      expertise: "Creator Economy & Entrepreneurship",
      description: "Combines entrepreneurial experience with deep understanding of creator economy challenges, having worked directly with artists, musicians, and content creators to understand their rights management needs."
    }
  ];

  const advisoryNetwork = [
    "Intellectual Property Attorneys specializing in digital rights and creator protection",
    "Technology Leaders from major AI and platform companies",
    "Creator Advocates representing musicians, artists, and content creators",
    "Industry Veterans from entertainment, gaming, and digital media sectors",
    "Academic Researchers studying the intersection of AI, creativity, and rights management"
  ];

  const technologyFeatures = [
    {
      icon: FileText,
      title: "Patent-Protected Dynamic Metadata",
      description: "Our core innovation is the dynamic metadata system (US Patent 11,816,474) that transforms static files into intelligent, self-protecting digital assets.",
      features: [
        "Active Rights Enforcement - Content that automatically protects itself",
        "Real-Time Usage Tracking - Complete visibility into content usage",
        "Automated Revenue Collection - Instant monetization when content generates value",
        "AI-Era Protection - Specific safeguards against AI training and synthetic content"
      ]
    },
    {
      icon: Bot,
      title: "Advanced AI Detection",
      description: "Our AI recognition systems can identify content usage, style replication, derivative works, and deepfakes across all platforms.",
      features: [
        "Content Usage across all platforms and applications",
        "Style Replication when AI systems mimic creator techniques",
        "Derivative Works including remixes, samples, and AI-generated variations",
        "Deepfakes and Synthetic Content using creator likenesses without permission"
      ]
    },
    {
      icon: Database,
      title: "Enterprise-Grade Infrastructure",
      description: "Built on advanced database architecture designed for internet-scale content protection with maximum performance and reliability.",
      features: [
        "Columnar Processing for real-time analytics at internet scale",
        "Vectorized Execution enabling millisecond response times",
        "Global Distribution with edge computing for minimal latency worldwide",
        "99.9% Uptime with automatic failover and redundancy"
      ]
    }
  ];

  const industryImpact = [
    {
      icon: Target,
      title: "Market Transformation",
      description: "Creation Rights is pioneering the transformation from a platform-centric internet to a creator-centric digital economy.",
      features: [
        "Fair AI Development where creators are compensated for training data",
        "Transparent Revenue Sharing across all digital platforms",
        "Creator Empowerment through direct control over intellectual property",
        "Innovation Incentives that reward creativity and original thinking"
      ]
    },
    {
      icon: Building2,
      title: "Partnership Ecosystem",
      description: "We've built strategic partnerships across the creative economy with leading organizations committed to creator rights.",
      features: [
        "Lloyd's Lab for innovative creator insurance products",
        "Major AI Companies committed to ethical content usage",
        "Financial Institutions including JP Morgan for enterprise payment processing",
        "Platform Partners integrating creator rights into core operations"
      ]
    },
    {
      icon: Award,
      title: "Industry Recognition",
      description: "Our innovation has been recognized through patents, partnerships, and creator adoption across multiple industries.",
      features: [
        "Patent Protection for our dynamic metadata technology",
        "Industry Partnerships with leading technology and creative companies",
        "Creator Adoption across music, gaming, visual arts, and content creation",
        "Academic Interest from researchers studying creator rights and AI ethics"
      ]
    }
  ];

  const futureVision = [
    {
      icon: Globe,
      title: "Creator-First Internet",
      description: "We envision an internet where every piece of content carries its own rights, attribution, and monetization logic.",
      features: [
        "Creators maintain control over their work regardless of platform",
        "Fair compensation flows automatically when creative work generates value",
        "Innovation thrives because creators can invest in their craft with confidence",
        "Every piece of content carries its own rights and monetization logic"
      ]
    },
    {
      icon: Bot,
      title: "AI Collaboration Framework",
      description: "We&apos;re building systems that enable ethical AI development with creator consent and fair compensation.",
      features: [
        "Ethical AI Development with creator consent and fair compensation",
        "Human-AI Collaboration that enhances rather than replaces human creativity",
        "Transparent Training Data with clear attribution and revenue sharing",
        "Creator Choice in how their work contributes to AI advancement"
      ]
    },
    {
      icon: Users,
      title: "Global Creator Economy",
      description: "Our platform supports creators worldwide with multi-currency capabilities and cultural sensitivity.",
      features: [
        "International Creators with multi-currency and cross-border capabilities",
        "Cultural Sensitivity respecting traditional knowledge and cultural heritage",
        "Emerging Markets with accessible technology and fair economic opportunities",
        "Next-Generation Creators growing up in an AI-native world"
      ]
    }
  ];

  const joinMissionOptions = [
    {
      icon: Users,
      title: "For Creators",
      description: "Whether you're a musician, artist, developer, photographer, designer, or content creator, Creation Rights provides the tools you need to protect your work and build a sustainable creative career.",
      action: "Join thousands of creators who have taken control of their intellectual property and unlocked new revenue streams."
    },
    {
      icon: Building2,
      title: "For Partners",
      description: "We&apos;re building an ecosystem of companies, platforms, and organizations committed to creator-first principles.",
      action: "Partner with us to integrate creator rights into your platform, develop ethical AI applications, or support the creator economy through innovative products and services."
    },
    {
      icon: TrendingUp,
      title: "For Investors",
      description: "Creation Rights represents a fundamental shift toward a more equitable digital economy.",
      action: "We&apos;re building the infrastructure that will power the next generation of creative commerce, with massive market opportunities and strong alignment with creator and consumer values."
    },
    {
      icon: Heart,
      title: "For Advocates",
      description: "Join our mission to build a fairer internet where creators receive recognition and compensation for their contributions to digital culture.",
      action: "Whether through policy advocacy, community building, or technology development, there are many ways to support creator rights."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHeader
        title="About Creation Rights"
        subtitle="Pioneering the creator-first internet through comprehensive rights protection"
      />
      
      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Creation Rights was founded on a simple but revolutionary premise: creators deserve to control their work and capture its full value in the digital age. What began as a mission to protect musicians, game developers, visual artists, and content creators has evolved into a comprehensive platform that addresses the fundamental challenges facing all creative professionals in an AI-driven world.
          </p>
        </div>
      </PageSection>

      {/* Mission Statement */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <Target className="h-8 w-8 mr-3 text-primary" />
            Our Mission
          </h2>
          <div className="bg-background border border-border p-8 rounded-lg">
            <p className="text-xl text-muted-foreground mb-6">
              Building the rights infrastructure the internet should have had from the beginning. We envision a creator-first digital economy where every piece of creative work carries its own rights, attribution, and monetization logic – making copyright native to the internet itself.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              In an era where artificial intelligence can replicate artistic styles, generate derivative works, and train on creative content without consent, we provide the technological infrastructure that ensures creators maintain control over their intellectual property while unlocking new revenue streams they never knew existed.
            </p>
            <p className="text-lg text-muted-foreground">
              We don&apos;t just protect content – we protect people. Behind every song, artwork, video, and creative work is a human being whose livelihood, reputation, and creative expression deserve respect and fair compensation.
              </p>
            </div>
          </div>
      </PageSection>

      {/* Company Values */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Company Values</h2>
          <div className="space-y-12">
            {companyValues.map((value, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border rounded-lg">
                <div className="flex items-start space-x-6">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <value.icon className="h-8 w-8 text-primary" />
                </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-lg text-muted-foreground mb-4">{value.subtitle}</p>
                    <p className="text-muted-foreground mb-6">{value.description}</p>
                    <ul className="space-y-2">
                      {value.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Origin Story */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <Heart className="h-8 w-8 mr-3 text-primary" />
            Origin Story
          </h2>
          <div className="space-y-12">
            {originStorySteps.map((step, index) => (
              <div key={index} className="bg-background border border-border p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground mb-6">{step.description}</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {step.examples.map((example, idx) => (
                    <div key={idx} className="flex items-start space-x-2">
                      <ArrowRight className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Leadership & Team */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            Leadership & Team
          </h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Founding Vision</h3>
            <p className="text-lg text-muted-foreground mb-8 text-center max-w-4xl mx-auto">
              Our founders bring together deep expertise in creative industries, technology innovation, and intellectual property law. This unique combination allows us to understand both the technical challenges of rights management and the real-world needs of working creators.
            </p>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {leadershipTeam.map((leader, index) => (
                <div key={index} className="bg-muted/20 p-8 border border-border rounded-lg">
                  <h4 className="text-xl font-semibold mb-2">{leader.name}</h4>
                  <p className="text-lg text-primary mb-2">{leader.role}</p>
                  <p className="font-medium text-muted-foreground mb-4">{leader.expertise}</p>
                  <p className="text-muted-foreground">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>

          <div className="bg-background border border-border p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-6">Advisory Network</h3>
            <p className="text-muted-foreground mb-6">We&apos;ve assembled an advisory network that includes:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advisoryNetwork.map((advisor, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">{advisor}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Technology & Innovation */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <Code2 className="h-8 w-8 mr-3 text-primary" />
            Technology & Innovation
          </h2>
          
          <div className="space-y-8">
            {technologyFeatures.map((tech, index) => (
              <div key={index} className="bg-background border border-border p-8 rounded-lg">
                <div className="flex items-start space-x-6">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <tech.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{tech.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{tech.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {tech.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Industry Impact & Recognition */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <Award className="h-8 w-8 mr-3 text-primary" />
            Industry Impact & Recognition
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {industryImpact.map((impact, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border rounded-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <impact.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{impact.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{impact.description}</p>
                <ul className="space-y-3">
                  {impact.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* The Future We're Building */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <Rocket className="h-8 w-8 mr-3 text-primary" />
            The Future We&apos;re Building
          </h2>
          
          <div className="space-y-8">
            {futureVision.map((vision, index) => (
              <div key={index} className="bg-background border border-border p-8 rounded-lg">
                <div className="flex items-start space-x-6">
                  <div className="bg-primary/10 p-4 rounded-lg">
                    <vision.icon className="h-8 w-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-semibold mb-2">{vision.title}</h3>
                    <p className="text-lg text-muted-foreground mb-6">{vision.description}</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {vision.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Join Our Mission */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center flex items-center justify-center">
            <Heart className="h-8 w-8 mr-3 text-primary" />
            Join Our Mission
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {joinMissionOptions.map((option, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border rounded-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <option.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{option.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{option.description}</p>
                <p className="text-sm font-medium text-primary">{option.action}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Closing Statement */}
      <PageSection className="bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Our Story Continues</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Today, Creation Rights stands as a testament to the power of collaboration and commitment. We are proud to have assembled a team of dedicated individuals who share a deep passion for protecting and empowering creators. Our story is far from over – we will continue to innovate, advocate, and fight for the rights of creators worldwide.
          </p>
          <p className="text-xl font-semibold text-primary">
            We&apos;re not just building a company – we&apos;re building the future of creativity itself.
          </p>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Join Our Mission?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Whether you&apos;re a creator, partner, investor, or advocate, there&apos;s a place for you in the creator-first future we&apos;re building.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/signup">Get Started as a Creator</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
