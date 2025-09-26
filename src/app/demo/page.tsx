import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Calendar, Clock, Users, Building2 } from "lucide-react";

export default function DemoPage() {
  const benefits = [
    "See how Creation Rights protects your content in real-time",
    "Learn about our AI-powered content monitoring system",
    "Discover monetization opportunities for your creative work",
    "Get personalized recommendations for your use case",
    "Ask questions and get expert advice from our team"
  ];

  const timeSlots = [
    "9:00 AM - 9:30 AM",
    "10:00 AM - 10:30 AM", 
    "11:00 AM - 11:30 AM",
    "2:00 PM - 2:30 PM",
    "3:00 PM - 3:30 PM",
    "4:00 PM - 4:30 PM"
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Request a Demo"
        subtitle="See Creation Rights in action with a personalized demo tailored to your needs. Our experts will show you how to protect and monetize your creative work."
      />
      
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo Form */}
            <div>
              <h2 className="text-3xl font-bold  mb-6">Schedule Your Demo</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block  mb-2">First Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card  placeholder-muted-foreground focus:border-border focus:outline-none backdrop-blur-sm"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block  mb-2">Last Name *</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card  placeholder-muted-foreground focus:border-border focus:outline-none backdrop-blur-sm"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block  mb-2">Work Email *</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card  placeholder-muted-foreground focus:border-border focus:outline-none backdrop-blur-sm"
                    placeholder="john@company.com"
                    required
                  />
                </div>

                <div>
                  <label className="block  mb-2">Company</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card  placeholder-muted-foreground focus:border-border focus:outline-none backdrop-blur-sm"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block  mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card  placeholder-muted-foreground focus:border-border focus:outline-none backdrop-blur-sm"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block  mb-2">What type of content do you create?</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-card  focus:border-border focus:outline-none backdrop-blur-sm">
                    <option value="">Select content type</option>
                    <option value="photography">Photography</option>
                    <option value="video">Video Content</option>
                    <option value="music">Music & Audio</option>
                    <option value="digital-art">Digital Art</option>
                    <option value="written">Written Content</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block  mb-2">Preferred Demo Time</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-card  focus:border-border focus:outline-none backdrop-blur-sm">
                    <option value="">Select a time slot</option>
                    {timeSlots.map((slot, index) => (
                      <option key={index} value={slot}>{slot} PST</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block  mb-2">Tell us about your needs</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card  placeholder-muted-foreground focus:border-border focus:outline-none backdrop-blur-sm resize-none"
                    placeholder="What challenges are you facing with content protection? What would you like to see in the demo?"
                  ></textarea>
                </div>

                <button className="w-full rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
                  Schedule Demo
                </button>
              </form>
            </div>

            {/* Demo Info */}
            <div>
              <h2 className="text-3xl font-bold  mb-6">What to Expect</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">30-Minute Session</h3>
                    <p className="">A focused demo tailored to your specific use case and needs.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Users className="h-6 w-6 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Expert Guidance</h3>
                    <p className="">Meet with our product experts who understand the creator economy.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Calendar className="h-6 w-6 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Flexible Scheduling</h3>
                    <p className="">Choose a time that works for you across different time zones.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Building2 className="h-6 w-6 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Custom Solutions</h3>
                    <p className="">Learn about enterprise features and custom integrations.</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl border border-border bg-card backdrop-blur-sm">
                <h3 className="text-xl font-semibold  mb-4">You&apos;ll Learn About:</h3>
                <ul className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-foreground rounded-full mt-2"></div>
                      <span className="">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
