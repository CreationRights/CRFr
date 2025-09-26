import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { MapPin, Clock, DollarSign, Users } from "lucide-react";

export default function CareersPage() {
  const benefits = [
    "Competitive salary and equity",
    "Comprehensive health insurance",
    "Unlimited PTO",
    "Remote-first culture",
    "Learning and development budget",
    "State-of-the-art equipment",
    "Team retreats and events",
    "Flexible working hours"
  ];

  const openings = [
    {
      title: "Senior Software Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$150k - $200k"
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote / New York",
      type: "Full-time",
      salary: "$140k - $180k"
    },
    {
      title: "AI/ML Engineer",
      department: "Engineering",
      location: "Remote / San Francisco",
      type: "Full-time",
      salary: "$160k - $220k"
    },
    {
      title: "Legal Counsel",
      department: "Legal",
      location: "Remote / Los Angeles",
      type: "Full-time",
      salary: "$180k - $240k"
    },
    {
      title: "Marketing Manager",
      department: "Marketing",
      location: "Remote / Austin",
      type: "Full-time",
      salary: "$100k - $130k"
    },
    {
      title: "Customer Success Manager",
      department: "Customer Success",
      location: "Remote",
      type: "Full-time",
      salary: "$80k - $110k"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Careers"
        subtitle="Join our mission to build a fair digital economy for creators. We're looking for passionate individuals who want to make a real impact."
      />
      
      <PageSection>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h2 className="text-3xl font-bold  mb-6">Why Work With Us?</h2>
            <p className=" mb-6">
              At Creation Rights, you&apos;ll be part of a team that&apos;s revolutionizing how creators protect and monetize their work. We offer a collaborative environment where your ideas matter and your work has direct impact on millions of creators worldwide.
            </p>
            <div className="grid grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-foreground rounded-full"></div>
                  <span className=" text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl blur-3xl"></div>
            <div className="relative bg-card backdrop-blur-sm border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6">Our Culture</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Users className="h-6 w-6" />
                  <span className="">Collaborative and inclusive</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="h-6 w-6" />
                  <span className="">Work-life balance focused</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-6 w-6" />
                  <span className="">Remote-first with global team</span>
                </div>
                <div className="flex items-center space-x-3">
                  <DollarSign className="h-6 w-6" />
                  <span className="">Transparent compensation</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div>
          <h2 className="text-3xl font-bold  text-center mb-12">Open Positions</h2>
          <div className="space-y-6">
            {openings.map((job, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card backdrop-blur-sm transition-all hover:border-border hover:bg-muted/50"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-semibold  mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>{job.department}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <MapPin className="h-4 w-4" />
                        <span>{job.location}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>{job.type}</span>
                      </span>
                      <span className="flex items-center space-x-1">
                        <DollarSign className="h-4 w-4" />
                        <span>{job.salary}</span>
                      </span>
                    </div>
                  </div>
                  <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      <PageSection className="text-center">
        <h2 className="mb-6 text-3xl font-bold  md:text-4xl">
          Don&apos;t See Your Role?
        </h2>
        <p className="mb-10 text-lg text-muted-foreground max-w-2xl mx-auto">
          We&apos;re always looking for talented individuals to join our team. Send us your resume and let us know how you&apos;d like to contribute.
        </p>
        <button className="rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
          Send Resume
        </button>
      </PageSection>
    </PageLayout>
  );
}
