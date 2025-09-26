import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Users, Target, Award, Globe } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Users,
      title: "Creator First",
      description: "Everything we do is designed to empower and protect creators, putting their needs at the center of our platform."
    },
    {
      icon: Target,
      title: "Innovation",
      description: "We continuously push the boundaries of technology to provide cutting-edge solutions for content protection."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from our technology to our customer service."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "We're building a worldwide community of protected creators and fostering a fair digital economy."
    }
  ];

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former VP of Product at Adobe, leading the charge in democratizing content protection."
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer with 15 years experience in AI and machine learning systems."
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of Legal",
      bio: "IP law expert with JD from Stanford and 20 years experience in digital rights."
    },
    {
      name: "James Park",
      role: "VP of Engineering",
      bio: "Previously at Netflix, building scalable systems that serve millions of creators."
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="About Creation Rights"
        subtitle="We're on a mission to build a fair and sustainable digital economy where creators are properly compensated and protected for their work."
      />
      
      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold  mb-6">Our Story</h2>
            <div className="space-y-4 ">
              <p>
                Creation Rights was founded in 2020 by a team of technologists and creators who experienced firsthand the challenges of protecting creative work in the digital age.
              </p>
              <p>
                After seeing countless creators struggle with content theft, unauthorized use, and complex licensing processes, we set out to build a comprehensive platform that would level the playing field.
              </p>
              <p>
                Today, we protect millions of creative works for thousands of creators worldwide, from individual artists to major media organizations.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-card backdrop-blur-sm border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-3xl font-bold">10M+</div>
                  <div className="text-muted-foreground">Protected Works</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">500K+</div>
                  <div className="text-muted-foreground">Creators</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">99.7%</div>
                  <div className="text-muted-foreground">Detection Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold">$50M+</div>
                  <div className="text-muted-foreground">Creator Revenue</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold  text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl border border-border bg-card backdrop-blur-sm"
              >
                <value.icon className="h-12 w-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold  mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div>
          <h2 className="text-3xl font-bold  text-center mb-12">Leadership Team</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {team.map((member, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card backdrop-blur-sm"
              >
                <div className="w-16 h-16 bg-muted rounded-full mb-4"></div>
                <h3 className="text-xl font-semibold  mb-1">{member.name}</h3>
                <p className="text-foreground mb-3">{member.role}</p>
                <p className="text-muted-foreground">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
