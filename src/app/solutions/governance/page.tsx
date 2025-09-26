import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Vote, Users, FileText, Shield, BarChart3, Gavel } from "lucide-react";

export default function GovernancePage() {
  const features = [
    {
      icon: Vote,
      title: "Democratic Decision Making",
      description: "Transparent voting mechanisms for policy changes and platform governance decisions."
    },
    {
      icon: Users,
      title: "Community Representation",
      description: "Elected representatives from creator and organization communities shape platform policies."
    },
    {
      icon: FileText,
      title: "Policy Management",
      description: "Comprehensive framework for creating, updating, and enforcing platform policies."
    },
    {
      icon: Shield,
      title: "Rights Enforcement",
      description: "Automated and manual enforcement tools backed by community-driven policies."
    },
    {
      icon: BarChart3,
      title: "Transparency Reports",
      description: "Regular public reports on platform actions, decisions, and community feedback."
    },
    {
      icon: Gavel,
      title: "Dispute Resolution",
      description: "Fair and efficient resolution system for content and licensing disputes."
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Governance Platform"
        subtitle="Participate in shaping the future of digital rights through transparent, community-driven governance that puts creators and organizations at the center of decision-making."
      />
      
      <PageSection>
        <div className="text-center mb-16">
          <h2 className="mb-6 text-3xl font-bold  md:text-4xl">
            Democratic Digital Rights
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our governance platform ensures that the voices of creators, organizations, and users are heard in shaping policies that affect digital rights and content protection.
          </p>
        </div>
        
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

      <PageSection className="bg-card rounded-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="mb-6 text-3xl font-bold  md:text-4xl">
              Join the Governance Council
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Become part of the decision-making process. Apply to join our Governance Council and help shape policies that protect and empower digital creators worldwide.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                <p className="">Quarterly voting on platform policies</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                <p className="">Direct input on feature development</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                <p className="">Access to exclusive governance forums</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <div className="mb-8 p-8 rounded-2xl border border-border bg-card">
              <Vote className="h-16 w-16 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Next Vote</h3>
              <p className="">Platform Fee Structure</p>
              <p className="text-sm text-muted-foreground mt-2">Voting opens in 5 days</p>
            </div>
            <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
              Apply for Council
            </button>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
