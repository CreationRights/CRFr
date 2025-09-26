import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { HelpCircle, MessageCircle, Mail, Phone, Search } from "lucide-react";

export default function HelpPage() {
  const faqs = [
    {
      question: "How does Creation Rights protect my content?",
      answer: "We use advanced AI and blockchain technology to create unique fingerprints of your content, monitor the web for unauthorized use, and automatically issue takedown notices when infringement is detected."
    },
    {
      question: "What types of content can I protect?",
      answer: "You can protect images, videos, audio files, written content, digital art, and any other creative work. Our system supports all major file formats and content types."
    },
    {
      question: "How long does it take to process a takedown request?",
      answer: "Most takedown requests are processed within 24-48 hours. For urgent cases, we offer expedited processing that can complete requests within 2-4 hours."
    },
    {
      question: "Can I use Creation Rights if I'm not based in the US?",
      answer: "Yes! Creation Rights operates globally and supports creators worldwide. We comply with international copyright laws and have offices in multiple countries."
    },
    {
      question: "What's the difference between the pricing plans?",
      answer: "Our plans differ in the number of protected works, monitoring frequency, support level, and advanced features like legal assistance and insurance coverage."
    },
    {
      question: "Do you offer API access for developers?",
      answer: "Yes, we provide comprehensive APIs for developers to integrate content protection into their applications. Check our developer documentation for more details."
    }
  ];

  const supportOptions = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      availability: "24/7",
      action: "Start Chat"
    },
    {
      icon: Mail,
      title: "Email Support",
      description: "Send us a detailed message",
      availability: "Response within 4 hours",
      action: "Send Email"
    },
    {
      icon: Phone,
      title: "Phone Support",
      description: "Speak directly with our experts",
      availability: "Mon-Fri, 9AM-6PM PST",
      action: "Call Now"
    }
  ];

  return (
    <PageLayout>
      <PageHeader
        title="Help Center"
        subtitle="Find answers to common questions and get the support you need to protect your creative works."
      />
      
      <PageSection>
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-16">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-card text-foreground placeholder-muted-foreground focus:border-foreground focus:outline-none backdrop-blur-sm"
            />
          </div>
        </div>

        {/* Support Options */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3 mb-16">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className="text-center p-8 rounded-2xl border border-border bg-card backdrop-blur-sm transition-all hover:border-border hover:bg-muted/50"
            >
              <option.icon className="h-12 w-12 mx-auto mb-4" />
              <h3 className="text-xl font-semibold  mb-2">{option.title}</h3>
              <p className="text-muted-foreground mb-2">{option.description}</p>
              <p className="text-sm text-muted-foreground mb-6">{option.availability}</p>
              <button className="w-full rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
                {option.action}
              </button>
            </div>
          ))}
        </div>

        {/* FAQs */}
        <div>
          <h2 className="text-3xl font-bold  text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-2xl border border-border bg-card p-6 backdrop-blur-sm"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="h-6 w-6 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold  mb-3">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
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
