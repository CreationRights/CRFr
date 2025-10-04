import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Heart, 
  Zap, 
  Globe, 
  Shield, 
  Target, 
  CheckCircle, 
  Calendar,
  Star,
  Lightbulb,
  Rocket,
  Building2
} from "lucide-react";
import Link from "next/link";

export default function CareersPage() {
  const whyJoinUs = [
    {
      icon: Heart,
      title: "Mission-Driven Work",
      description: "Join a team that's building the future of creator rights and digital protection. Every day, you'll contribute to empowering creators worldwide.",
      features: [
        "Work on technology that directly impacts creator livelihoods",
        "Be part of a movement toward fairer digital economy",
        "Contribute to solving real-world problems for creative professionals"
      ]
    },
    {
      icon: Zap,
      title: "Innovation & Growth",
      description: "Work with cutting-edge technology and be part of a fast-growing startup environment where your ideas can make an immediate impact.",
      features: [
        "Cutting-edge AI and metadata technology development",
        "Fast-paced startup environment with growth opportunities",
        "Direct impact on product development and company direction"
      ]
    },
    {
      icon: Users,
      title: "Collaborative Culture",
      description: "Join a diverse team of passionate individuals who value collaboration, creativity, and mutual support in achieving our mission.",
      features: [
        "Diverse team of passionate creators and technologists",
        "Collaborative environment that values all perspectives",
        "Supportive culture that encourages learning and growth"
      ]
    }
  ];

  const benefits = [
    {
      icon: Globe,
      title: "Remote-First",
      description: "Work from anywhere with flexible hours and a fully remote-first culture"
    },
    {
      icon: Star,
      title: "Competitive Compensation",
      description: "Competitive salary, equity options, and performance-based bonuses"
    },
    {
      icon: Shield,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: Lightbulb,
      title: "Learning & Development",
      description: "Professional development budget and conference attendance"
    },
    {
      icon: Calendar,
      title: "Flexible Time Off",
      description: "Unlimited PTO policy and flexible work arrangements"
    },
    {
      icon: Building2,
      title: "Modern Tools",
      description: "Latest technology and tools to help you do your best work"
    }
  ];

  const openPositions = [
    {
      title: "Senior Full-Stack Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      description: "Lead development of our dynamic metadata platform and creator rights infrastructure."
    },
    {
      title: "AI/ML Engineer",
      department: "Engineering", 
      location: "Remote",
      type: "Full-time",
      description: "Build and optimize our content identification and AI detection systems."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote", 
      type: "Full-time",
      description: "Drive product strategy and roadmap for creator rights platform features."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time", 
      description: "Manage and scale our cloud infrastructure and deployment systems."
    },
    {
      title: "Business Development Manager",
      department: "Business",
      location: "Remote",
      type: "Full-time",
      description: "Build partnerships and drive growth in the creator economy ecosystem."
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-time",
      description: "Design intuitive experiences for creators and platform users."
    }
  ];

  const values = [
    {
      icon: Target,
      title: "Creator-First",
      description: "Every decision we make prioritizes the needs and success of creators"
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "We operate with transparency, honesty, and ethical business practices"
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "We embrace new ideas and technologies to solve complex problems"
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of diverse teams working together toward common goals"
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHeader
        title="Join Our Mission"
        subtitle="Help us build the creator-first internet"
      />
      
      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            We&apos;re building the infrastructure that will power the next generation of creative commerce. Join a team of passionate individuals working to protect and empower creators worldwide.
          </p>
        </div>
      </PageSection>

      {/* Why Join Us */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Why Join Creation Rights?</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {whyJoinUs.map((reason, index) => (
              <div key={index} className="bg-background border border-border p-8 rounded-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <reason.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{reason.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{reason.description}</p>
                <ul className="space-y-3">
                  {reason.features.map((feature, idx) => (
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

      {/* Benefits */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-muted/20 p-6 border border-border rounded-lg">
                <div className="flex items-center space-x-3 mb-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                  <h3 className="text-lg font-semibold">{benefit.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Company Values */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-primary/10 p-4 rounded-lg w-fit mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Open Positions */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-muted/20 p-6 border border-border rounded-lg hover:bg-muted/30 transition-colors">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Building2 className="h-4 w-4" />
                        <span>{position.department}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Globe className="h-4 w-4" />
                        <span>{position.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{position.type}</span>
                      </span>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4 lg:mt-0">
                    Apply Now
                  </Button>
                </div>
                <p className="text-muted-foreground">{position.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* No Open Positions Message */}
      <PageSection className="bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Don&apos;t See Your Role?</h2>
          <p className="text-muted-foreground mb-8">
            We&apos;re always looking for talented individuals who share our mission. Even if we don&apos;t have a specific role posted, we&apos;d love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="mailto:careers@creationrights.com">Send Us Your Resume</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/company/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </PageSection>

      {/* Application Process */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Our Hiring Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-lg font-semibold rounded-full mx-auto mb-4">1</div>
              <h3 className="text-lg font-semibold mb-2">Application</h3>
              <p className="text-sm text-muted-foreground">Submit your application and resume through our careers portal</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-lg font-semibold rounded-full mx-auto mb-4">2</div>
              <h3 className="text-lg font-semibold mb-2">Initial Review</h3>
              <p className="text-sm text-muted-foreground">Our team reviews your application and portfolio</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-lg font-semibold rounded-full mx-auto mb-4">3</div>
              <h3 className="text-lg font-semibold mb-2">Interview</h3>
              <p className="text-sm text-muted-foreground">Video interview with our team to discuss your experience</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 flex items-center justify-center text-lg font-semibold rounded-full mx-auto mb-4">4</div>
              <h3 className="text-lg font-semibold mb-2">Decision</h3>
              <p className="text-sm text-muted-foreground">We make our decision and extend an offer to successful candidates</p>
            </div>
          </div>
        </div>
      </PageSection>

      {/* CTA */}
      <PageSection className="bg-muted/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to Make an Impact?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join us in building the future of creator rights and digital protection.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="mailto:careers@creationrights.com">View Open Positions</Link>
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