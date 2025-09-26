import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";

export default function PrivacyPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Privacy Policy"
        subtitle="How we collect, use, and protect your personal information."
      />
      
      <PageSection>
        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
          <p className="text-lg mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
          <p className="mb-6">
            We collect information you provide directly to us, such as when you create an account, 
            use our services, or contact us for support.
          </p>

          <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
          <p className="mb-6">
            We use the information we collect to provide, maintain, and improve our services, 
            process transactions, and communicate with you.
          </p>

          <h2 className="text-2xl font-bold mb-4">Information Sharing</h2>
          <p className="mb-6">
            We do not sell, trade, or otherwise transfer your personal information to third parties 
            without your consent, except as described in this policy.
          </p>

          <h2 className="text-2xl font-bold mb-4">Data Security</h2>
          <p className="mb-6">
            We implement appropriate security measures to protect your personal information against 
            unauthorized access, alteration, disclosure, or destruction.
          </p>

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at{" "}
            <a href="mailto:privacy@creationrights.com" className="underline">
              privacy@creationrights.com
            </a>
          </p>
        </div>
      </PageSection>
    </PageLayout>
  );
}
