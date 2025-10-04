import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";

export default function ContactPage() {
  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 400\nSan Francisco, CA 94105",
      phone: "+1 (555) 123-4567",
      email: "sf@creationrights.com"
    },
    {
      city: "New York",
      address: "456 Broadway, Floor 12\nNew York, NY 10013",
      phone: "+1 (555) 234-5678",
      email: "ny@creationrights.com"
    },
    {
      city: "Amsterdam",
      address: "789 Herengracht\n1017 Amsterdam, Netherlands",
      phone: "+31 20 123 4567",
      email: "eu@creationrights.com"
    }
  ];

  const departments = [
    {
      icon: MessageCircle,
      title: "General Inquiries",
      email: "hello@creationrights.com",
      description: "General questions about our platform and services"
    },
    {
      icon: Phone,
      title: "Sales",
      email: "sales@creationrights.com",
      description: "Enterprise sales and partnership opportunities"
    },
    {
      icon: Mail,
      title: "Support",
      email: "support@creationrights.com",
      description: "Technical support and account assistance"
    },
    {
      icon: MapPin,
      title: "Press",
      email: "press@creationrights.com",
      description: "Media inquiries and press relations"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Contact Us"
        subtitle="Get in touch with our team. We're here to help you protect and monetize your creative work."
      />
      
      <PageSection>
        {/* Contact Form */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-semibold  mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block  mb-2">First Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card  placeholder-muted-foreground focus:border-border focus:outline-none backdrop-blur-sm"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block  mb-2">Last Name</label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-border bg-card  placeholder-muted-foreground focus:border-border focus:outline-none backdrop-blur-sm"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div>
                  <label className="block  mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card  placeholder-muted-foreground focus:border-border focus:outline-none backdrop-blur-sm"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block  mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card  placeholder-muted-foreground focus:border-border focus:outline-none backdrop-blur-sm"
                    placeholder="How can we help?"
                  />
                </div>
                <div>
                  <label className="block  mb-2">Message</label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-card  placeholder-muted-foreground focus:border-border focus:outline-none backdrop-blur-sm resize-none"
                    placeholder="Tell us more about your inquiry..."
                  ></textarea>
                </div>
                <button className="w-full rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-semibold  mb-6">Get in touch</h2>
              <div className="space-y-6">
                {departments.map((dept, index) => (
                  <div
                    key={index}
                    className="p-6 rounded-2xl border border-border bg-card backdrop-blur-sm"
                  >
                    <div className="flex items-start space-x-4">
                      <dept.icon className="h-6 w-6 mt-1" />
                      <div>
                        <h3 className="text-lg font-semibold  mb-1">{dept.title}</h3>
                        <p className="mb-2">{dept.email}</p>
                        <p className="text-muted-foreground text-sm">{dept.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Offices */}
        <div>
          <h2 className="text-3xl font-semibold  text-center mb-12">Our Offices</h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {offices.map((office, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl border border-border bg-card backdrop-blur-sm text-center"
              >
                <h3 className="text-xl font-semibold  mb-4">{office.city}</h3>
                <div className="space-y-3">
                  <div className="flex items-start justify-center space-x-2">
                    <MapPin className="h-5 w-5 mt-0.5" />
                    <div className=" text-sm whitespace-pre-line">
                      {office.address}
                    </div>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Phone className="h-4 w-4" />
                    <span className=" text-sm">{office.phone}</span>
                  </div>
                  <div className="flex items-center justify-center space-x-2">
                    <Mail className="h-4 w-4" />
                    <span className=" text-sm">{office.email}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
