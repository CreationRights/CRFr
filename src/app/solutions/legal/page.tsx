import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Scale, Shield, FileText, Users, Clock, Award } from "lucide-react";

export default function LegalPage() {
  const services = [
    {
      icon: Scale,
      title: "Legal Representation",
      description: "Expert legal counsel specialized in intellectual property and digital rights law."
    },
    {
      icon: Shield,
      title: "Insurance Coverage",
      description: "Comprehensive insurance protection against copyright infringement claims and legal costs."
    },
    {
      icon: FileText,
      title: "Contract Management",
      description: "Professional contract drafting, review, and negotiation for licensing agreements."
    },
    {
      icon: Users,
      title: "Mediation Services",
      description: "Alternative dispute resolution to avoid costly litigation while protecting your rights."
    },
    {
      icon: Clock,
      title: "24/7 Legal Support",
      description: "Round-the-clock access to legal experts for urgent copyright and licensing issues."
    },
    {
      icon: Award,
      title: "Compliance Auditing",
      description: "Regular audits to ensure your content practices comply with evolving legal standards."
    }
  ];

  const plans = [
    {
      name: "Basic Legal",
      price: "$49",
      period: "/month",
      features: [
        "Legal consultation (2 hours/month)",
        "Basic contract templates",
        "DMCA takedown assistance",
        "Email support"
      ]
    },
    {
      name: "Professional",
      price: "$149",
      period: "/month",
      features: [
        "Legal consultation (8 hours/month)",
        "Custom contract drafting",
        "Insurance coverage up to $50K",
        "Priority support",
        "Mediation services"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      features: [
        "Unlimited legal consultation",
        "Dedicated legal team",
        "Full insurance coverage",
        "24/7 support",
        "Compliance auditing",
        "Litigation support"
      ]
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Legal & Insurance"
        subtitle="Comprehensive legal protection and insurance coverage to safeguard your creative works and business interests in the digital landscape."
      />
      
      <PageSection>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-sm transition-all hover:border-border hover:bg-muted/50"
            >
              <service.icon className="mb-6 h-12 w-12" />
              <h3 className="mb-4 text-xl font-semibold ">{service.title}</h3>
              <p className="text-muted-foreground">{service.description}</p>
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection>
        <div className="text-center mb-16">
          <h2 className="mb-6 text-3xl font-bold  md:text-4xl">
            Choose Your Protection Plan
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Select the legal protection plan that best fits your needs, from individual creators to large enterprises.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl border border-border bg-card p-8 backdrop-blur-sm transition-all hover:bg-muted/50 ${
                plan.popular ? "ring-2 ring-foreground" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-foreground text-background px-4 py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="text-center">
                <h3 className="mb-4 text-xl font-semibold ">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold ">{plan.price}</span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <ul className="mb-8 space-y-3 text-left">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-foreground rounded-full"></div>
                      <span className="">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="w-full rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </div>
            </div>
          ))}
        </div>
      </PageSection>
    </PageLayout>
  );
}
