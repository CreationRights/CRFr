import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";

export default function CookiesPage() {
  return (
    <PageLayout>
      <PageHeader
        title="Cookie Policy"
        subtitle="How we use cookies and similar technologies on our website."
      />
      
      <PageSection>
        <div className="max-w-4xl mx-auto prose prose-gray dark:prose-invert">
          <p className="text-lg mb-8">
            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
          </p>

          <h2 className="text-2xl font-bold mb-4">What Are Cookies</h2>
          <p className="mb-6">
            Cookies are small text files that are placed on your computer or mobile device when 
            you visit our website. They are widely used to make websites work more efficiently.
          </p>

          <h2 className="text-2xl font-bold mb-4">Types of Cookies We Use</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Essential Cookies</h3>
            <p className="mb-4">
              These cookies are necessary for the website to function and cannot be switched off.
            </p>
            
            <h3 className="text-lg font-semibold mb-2">Performance Cookies</h3>
            <p className="mb-4">
              These cookies help us understand how visitors interact with our website.
            </p>
            
            <h3 className="text-lg font-semibold mb-2">Functionality Cookies</h3>
            <p className="mb-4">
              These cookies enable enhanced functionality and personalization.
            </p>
          </div>

          <h2 className="text-2xl font-bold mb-4">Managing Cookies</h2>
          <p className="mb-6">
            You can control and/or delete cookies as you wish. You can delete all cookies that 
            are already on your computer and set most browsers to prevent them from being placed.
          </p>

          <h2 className="text-2xl font-bold mb-4">Third-Party Cookies</h2>
          <p className="mb-6">
            We may use third-party services that place cookies on your device to help us analyze 
            website usage and improve our services.
          </p>

          <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
          <p>
            If you have any questions about our use of cookies, please contact us at{" "}
            <a href="mailto:privacy@creationrights.com" className="underline">
              privacy@creationrights.com
            </a>
          </p>
        </div>
      </PageSection>
    </PageLayout>
  );
}
