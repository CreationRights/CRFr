import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Terms of Service"
        subtitle="The terms and conditions governing your use of our services."
      />
      
      <PageSection>
        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
          <p className="text-lg mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold mb-4">Acceptance of Terms</h2>
          <p className="mb-6">
            By accessing and using Creation Rights services, you accept and agree to be bound by 
            the terms and provision of this agreement.
          </p>

          <h2 className="text-2xl font-bold mb-4">Use License</h2>
          <p className="mb-6">
            Permission is granted to temporarily use Creation Rights services for personal, 
            non-commercial transitory viewing only.
          </p>

          <h2 className="text-2xl font-bold mb-4">User Responsibilities</h2>
          <p className="mb-6">
            You are responsible for maintaining the confidentiality of your account and password 
            and for restricting access to your computer.
          </p>

          <h2 className="text-2xl font-bold mb-4">Intellectual Property</h2>
          <p className="mb-6">
            The service and its original content, features, and functionality are and will remain 
            the exclusive property of Creation Rights and its licensors.
          </p>

          <h2 className="text-2xl font-bold mb-4">Termination</h2>
          <p className="mb-6">
            We may terminate or suspend your account and bar access to the service immediately, 
            without prior notice or liability, under our sole discretion.
          </p>

          <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
          <p>
            If you have any questions about these Terms of Service, please contact us at{" "}
            <a href="mailto:legal@creationrights.com" className="underline">
              legal@creationrights.com
            </a>
          </p>
        </div>
      </PageSection>
    </PageLayout>
  );
}
