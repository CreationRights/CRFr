import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Building2, 
  Code2, 
  Bot,
  CheckCircle,
  BarChart3,
  FileText,
  Eye,
  TrendingUp,
  Calendar,
  MessageSquare,
  Target,
  Lightbulb,
  Gavel,
  Shield,
  Clock,
  Activity,
  Settings,
  GitBranch,
  Search
} from "lucide-react";
import Link from "next/link";

export default function GovernancePage() {
  const dynamicProtocolFeatures = [
    {
      title: "Traditional governance is slow and expensive.",
      description: "Blockchain voting requires gas fees, takes hours to confirm, and excludes many creators. Our dynamic metadata protocol enables instant, cost-free governance that scales with the creator economy."
    },
    {
      title: "Real-time consensus building through our AI-first database architecture.",
      description: "Proposals, discussions, and decisions happen at internet speed with complete transparency and auditability."
    },
    {
      title: "Metadata-native voting where your governance participation is embedded directly into your creative contributions.",
      description: "Creating a natural alignment between platform usage and decision-making power."
    }
  ];

  const governanceStructure = [
    {
      icon: Users,
      title: "Creator Assembly",
      subtitle: "Individual creators and small studios - The foundation of our governance",
      features: [
        "Influence weighted by content contribution and community engagement",
        "Direct input on creator-focused features and licensing policies",
        "Real-time feedback integration through platform usage patterns"
      ]
    },
    {
      icon: Building2,
      title: "Enterprise Council",
      subtitle: "Organizations, labels, and agencies - Industry expertise and scale",
      features: [
        "Guidance on enterprise features and bulk licensing standards",
        "Strategic input on platform partnerships and integrations",
        "Representation proportional to creator compensation and ethical practices"
      ]
    },
    {
      icon: Code2,
      title: "Developer Collective",
      subtitle: "Technical contributors and integrators - Protocol architecture and tools",
      features: [
        "Technical roadmap oversight and API development priorities",
        "Code contribution tracking through dynamic metadata",
        "Open-source project coordination and standards setting"
      ]
    },
    {
      icon: Bot,
      title: "AI Ethics Board",
      subtitle: "AI companies and researchers - Responsible AI development standards",
      features: [
        "Ethical AI training guidelines and consent mechanisms",
        "Creator-AI collaboration framework development",
        "Compliance monitoring and best practice establishment"
      ]
    }
  ];

  const consensusMechanisms = [
    {
      icon: Lightbulb,
      title: "Continuous Proposal System",
      description: "Ideas evolve organically through our dynamic metadata protocol:",
      steps: [
        "Idea Seeding - Initial concepts tracked through metadata signatures",
        "Community Refinement - Real-time collaboration and iteration tracking",
        "Impact Modeling - AI-powered analysis of proposal effects on different stakeholders",
        "Consensus Building - Dynamic weighting based on expertise and stake in outcomes",
        "Implementation Triggers - Automatic execution when consensus thresholds are met"
      ]
    },
    {
      icon: Gavel,
      title: "Real-Time Dispute Resolution",
      description: "Instant arbitration through metadata-verifiable evidence:",
      steps: [
        "Automated Triage - Dynamic metadata analysis identifies dispute type and complexity",
        "Community Mediation - Stakeholder selection based on expertise and neutrality scores",
        "Expert Arbitration - Complex cases escalated based on metadata complexity analysis"
      ]
    },
    {
      icon: Target,
      title: "Resource Allocation Protocol",
      description: "Community-controlled development funding through transparent allocation:",
      steps: [
        "Development Priorities - Resource allocation based on community consensus",
        "Creator Support Programs - Funding for education and adoption initiatives",
        "Research Grants - Academic partnerships and rights innovation studies",
        "Security Infrastructure - Continuous platform security and audit funding"
      ]
    }
  ];

  const participationTypes = [
    {
      title: "Content Creators",
      features: [
        "Influence increases with content volume and community engagement",
        "Bonus weight for innovative licensing models and collaboration",
        "Additional influence for platform advocacy and creator education"
      ]
    },
    {
      title: "Developers",
      features: [
        "Weight based on code contributions and integration quality",
        "Bonus influence for community tools and educational resources",
        "Additional weight for security contributions and bug reporting"
      ]
    },
    {
      title: "Organizations",
      features: [
        "Influence tied to creator compensation and ethical practices",
        "Bonus weight for transparent licensing and fair revenue sharing",
        "Additional influence for ecosystem partnerships and adoption"
      ]
    },
    {
      title: "Community Contributors",
      features: [
        "Weight earned through governance participation quality",
        "Bonus influence for dispute resolution and community moderation",
        "Additional weight for educational content and platform improvement"
      ]
    }
  ];

  const currentInitiatives = [
    {
      title: "Protocol Enhancement 001: AI Training Consent Standards",
      description: "Establishing universal opt-in/opt-out mechanisms",
      phase: "Community Refinement",
      stakeholders: "All assemblies actively contributing",
      consensus: "73% alignment, refinement ongoing",
      status: "active"
    },
    {
      title: "Protocol Enhancement 002: Cross-Platform Metadata Interoperability",
      description: "Defining standards for platform integration",
      phase: "Technical Specification",
      stakeholders: "Developer Collective leading, Enterprise Council advising",
      consensus: "89% technical agreement, implementation planning",
      status: "active"
    },
    {
      title: "Protocol Enhancement 003: Creator Emergency Response System",
      description: "Rapid response framework for rights violations",
      phase: "Impact Modeling",
      stakeholders: "Creator Assembly driving, AI Ethics Board consulting",
      consensus: "67% support, resource allocation under discussion",
      status: "active"
    }
  ];

  const dashboardFeatures = [
    {
      icon: BarChart3,
      title: "Your Participation Profile",
      features: [
        "Influence Score - Current governance weight and recent changes",
        "Contribution History - Your proposals, discussions, and consensus building",
        "Expertise Recognition - Areas where your input carries additional weight",
        "Community Impact - How your participation affects platform evolution"
      ]
    },
    {
      icon: Activity,
      title: "Platform Governance Health",
      features: [
        "Consensus Velocity - How quickly the community reaches decisions",
        "Participation Breadth - Engagement across different stakeholder groups",
        "Implementation Success - Track record of executed governance decisions",
        "Community Satisfaction - Stakeholder sentiment and engagement trends"
      ]
    },
    {
      icon: TrendingUp,
      title: "Real-Time Proposal Flow",
      features: [
        "Active Discussions - Proposals currently in refinement",
        "Consensus Tracking - Real-time alignment measurement across stakeholder groups",
        "Impact Predictions - AI modeling of proposal effects on your use case",
        "Participation Opportunities - Where your input would be most valuable"
      ]
    }
  ];

  const governanceTools = [
    {
      icon: FileText,
      title: "Dynamic Proposal Builder",
      description: "Intelligent proposal development with real-time feedback:",
      features: [
        "Stakeholder impact analysis as you write",
        "Similar proposal detection and learning integration",
        "Community expertise matching for collaboration",
        "Implementation feasibility scoring and resource estimation"
      ]
    },
    {
      icon: Eye,
      title: "Consensus Visualization",
      description: "Real-time governance insights through dynamic metadata:",
      features: [
        "Stakeholder alignment mapping and trend analysis",
        "Expertise clustering around different proposal aspects",
        "Community sentiment analysis and engagement patterns",
        "Historical decision pattern recognition and learning"
      ]
    },
    {
      icon: GitBranch,
      title: "Collaborative Refinement Tools",
      description: "Seamless community collaboration on governance:",
      features: [
        "Real-time proposal editing with contribution tracking",
        "Expertise-weighted suggestion integration",
        "Conflict resolution through automated mediation",
        "Version control with community consensus checkpoints"
      ]
    }
  ];

  const transparencyFeatures = [
    {
      icon: Search,
      title: "Complete Audit Trails",
      description: "Every governance action tracked through dynamic metadata:",
      features: [
        "Proposal evolution history with contributor attribution",
        "Decision-making process documentation and reasoning",
        "Implementation progress tracking with milestone verification",
        "Community feedback integration and response documentation"
      ]
    },
    {
      icon: Clock,
      title: "Real-Time Transparency",
      description: "Governance happens in the open with full visibility:",
      features: [
        "Live proposal development and community contribution",
        "Real-time consensus measurement and stakeholder alignment",
        "Immediate implementation tracking and progress reporting",
        "Continuous community feedback integration and response"
      ]
    },
    {
      icon: Shield,
      title: "Performance Accountability",
      description: "Governance effectiveness measured and improved continuously:",
      features: [
        "Decision quality assessment through outcome tracking",
        "Community satisfaction monitoring and trend analysis",
        "Implementation success rates and learning integration",
        "Stakeholder engagement health and participation optimization"
      ]
    }
  ];

  const calendarItems = [
    { title: "Creator Rights Education Series", description: "Weekly community discussions on platform evolution" },
    { title: "Technical Working Groups", description: "Continuous collaboration on protocol enhancement" },
    { title: "Stakeholder Alignment Sessions", description: "Regular cross-community consensus building" },
    { title: "Implementation Review Cycles", description: "Monthly assessment of governance decision outcomes" }
  ];

  const faqItems = [
    {
      question: "How is this different from traditional voting systems?",
      answer: "Instead of periodic votes, we use continuous consensus building through dynamic metadata. Your influence grows naturally with your platform contributions, and decisions evolve organically rather than through binary votes."
    },
    {
      question: "What if I disagree with a governance direction?",
      answer: "Our dynamic system allows for continuous refinement. You can propose modifications, contribute alternative approaches, or help evolve decisions as new information becomes available."
    },
    {
      question: "How do you prevent manipulation or gaming of the system?",
      answer: "Influence is tied to genuine platform contribution and community value creation. Our dynamic metadata protocol makes manipulation extremely difficult and transparent when attempted."
    },
    {
      question: "Can small creators have meaningful influence?",
      answer: "Absolutely. Expertise and community contribution often matter more than scale. Our system recognizes valuable insights regardless of the contributor&apos;s size or resources."
    },
    {
      question: "How quickly do governance decisions get implemented?",
      answer: "Implementation speed varies by complexity, but our dynamic system enables much faster consensus and execution than traditional governance models. Simple changes can happen in days, complex ones in weeks rather than months."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHeader
        title="Governance Platform"
        subtitle="Community-driven protocol evolution through dynamic consensus"
      />
      
      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Empower creators, developers, and stakeholders to collectively govern the future of digital rights. Creation Rights Governance uses our dynamic metadata protocol to create transparent, efficient decision-making without blockchain complexity.
          </p>
        </div>
      </PageSection>

      {/* Dynamic Protocol */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Beyond Blockchain: Dynamic Governance Protocol</h2>
          <div className="space-y-8">
            {dynamicProtocolFeatures.map((feature, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Governance Structure */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Governance Structure</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {governanceStructure.map((structure, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-4">
                  <structure.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">{structure.title}</h3>
                    <p className="text-sm text-muted-foreground">{structure.subtitle}</p>
                  </div>
                </div>
                <ul className="space-y-3">
                  {structure.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Consensus Mechanisms */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Dynamic Consensus Mechanisms</h2>
          <div className="space-y-8">
            {consensusMechanisms.map((mechanism, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <mechanism.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-xl font-semibold">{mechanism.title}</h3>
                    <p className="text-muted-foreground">{mechanism.description}</p>
                  </div>
                </div>
                <ul className="space-y-2 ml-11">
                  {mechanism.steps.map((step, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">{step}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Participation Through Usage */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Participation Through Platform Usage</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Influence Through Contribution</h3>
            <p className="text-center text-muted-foreground mb-8">Your governance weight grows naturally with platform engagement:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {participationTypes.map((type, index) => (
                <div key={index} className="bg-background border border-border p-6">
                  <h4 className="text-lg font-semibold mb-4">{type.title}:</h4>
                  <ul className="space-y-2">
                    {type.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background border border-border p-8">
            <h3 className="text-xl font-semibold mb-4">Dynamic Representation</h3>
            <p className="text-muted-foreground mb-4">Influence adjusts automatically based on current contributions:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-sm">
                <CheckCircle className="h-4 w-4 text-primary inline mr-2" />
                Recent activity weighted more heavily than historical contributions
              </div>
              <div className="text-sm">
                <CheckCircle className="h-4 w-4 text-primary inline mr-2" />
                Expertise recognition through successful proposal outcomes
              </div>
              <div className="text-sm">
                <CheckCircle className="h-4 w-4 text-primary inline mr-2" />
                Community trust scores based on peer feedback and collaboration quality
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Current Initiatives */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Current Governance Initiatives</h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8">Active Discussions</h3>
            <div className="space-y-6">
              {currentInitiatives.map((initiative, index) => (
                <div key={index} className="bg-muted/20 p-6 border border-border">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-lg font-semibold mb-2">{initiative.title}</h4>
                      <p className="text-muted-foreground text-sm mb-2">{initiative.description}</p>
                    </div>
                    <div className="bg-primary text-primary-foreground px-3 py-1 text-xs font-medium">
                      {initiative.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <span className="font-medium">Phase:</span> {initiative.phase}
                    </div>
                    <div>
                      <span className="font-medium">Stakeholders:</span> {initiative.stakeholders}
                    </div>
                    <div>
                      <span className="font-medium">Consensus Status:</span> {initiative.consensus}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background border border-border p-8">
            <h3 className="text-xl font-semibold mb-4">Recently Implemented</h3>
            <div className="flex items-center space-x-3">
              <CheckCircle className="h-6 w-6 text-primary" />
              <div>
                <h4 className="font-semibold">Protocol Enhancement 000: Governance Bootstrap Framework</h4>
                <p className="text-sm text-muted-foreground">Initial governance structure and participation mechanisms</p>
                <p className="text-sm text-muted-foreground">Implemented: February 2025 | Consensus: 94% approval across all stakeholder groups</p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Governance Dashboard */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Governance Dashboard</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dashboardFeatures.map((feature, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <ul className="space-y-3">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Governance Tools */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Governance Tools & Resources</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {governanceTools.map((tool, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <tool.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{tool.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{tool.description}</p>
                <ul className="space-y-2">
                  {tool.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Transparency & Accountability */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Transparency & Accountability</h2>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {transparencyFeatures.map((feature, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.features.map((item, idx) => (
                    <li key={idx} className="flex items-start space-x-2">
                      <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Join Governance */}
      <PageSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Join Platform Governance</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Natural Participation</h3>
              <p className="text-muted-foreground mb-6">Governance participation grows with platform usage:</p>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium">Create and Contribute</span>
                    <p className="text-muted-foreground text-sm">Your platform activity automatically builds governance influence</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium">Engage with Proposals</span>
                    <p className="text-muted-foreground text-sm">Comment, refine, and collaborate on community decisions</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium">Share Expertise</span>
                    <p className="text-muted-foreground text-sm">Your knowledge and experience inform better governance outcomes</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <div>
                    <span className="font-medium">Shape the Future</span>
                    <p className="text-muted-foreground text-sm">Direct influence on platform evolution and creator rights advancement</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-6">Governance Onboarding</h3>
              <p className="text-muted-foreground mb-6">Seamless integration into community decision-making:</p>
              <div className="space-y-4 text-left">
                <div className="flex items-start space-x-3">
                  <Settings className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Platform usage automatically generates governance profile</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Expertise recognition through contribution analysis and community feedback</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MessageSquare className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Proposal participation guidance based on your interests and knowledge</span>
                </div>
                <div className="flex items-start space-x-3">
                  <Users className="h-5 w-5 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm">Community mentorship through experienced governance participant matching</span>
                </div>
              </div>
            </div>
          </div>
          
          <Button variant="shimmer" size="lg" asChild>
            <Link href="/governance">View Active Governance</Link>
          </Button>
        </div>
      </PageSection>

      {/* Governance Calendar */}
      <PageSection className="bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Governance Calendar</h2>
          <h3 className="text-2xl font-semibold mb-8 text-center">Ongoing Initiatives</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {calendarItems.map((item, index) => (
              <div key={index} className="bg-background border border-border p-6">
                <div className="flex items-center space-x-3 mb-3">
                  <Calendar className="h-6 w-6 text-primary" />
                  <h4 className="text-lg font-semibold">{item.title}</h4>
                </div>
                <p className="text-muted-foreground text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-8">
            {faqItems.map((item, index) => (
              <div key={index} className="bg-muted/20 border border-border p-8">
                <h3 className="text-xl font-semibold mb-4">Q: {item.question}</h3>
                <p className="text-muted-foreground">A: {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
