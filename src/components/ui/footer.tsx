"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

const Footer = () => {
  const footerSections = [
    {
      title: "Solutions",
      links: [
        { name: "For Creators", href: "/solutions/creators" },
        { name: "For Organizations", href: "/solutions/organizations" },
        { name: "For Developers", href: "/solutions/developers" },
        { name: "Governance Platform", href: "/solutions/governance" },
        { name: "Legal & Insurance", href: "/solutions/legal" },
      ]
    },
    {
      title: "Technology",
      links: [
        { name: "Dynamic Metadata", href: "/technology/metadata" },
        { name: "Content ID Layer", href: "/technology/content-id" },
        { name: "Smart Licensing", href: "/technology/licensing" },
        { name: "NIL Protection", href: "/technology/nil" },
        { name: "Platform APIs", href: "/technology/apis" },
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Use Cases", href: "/use-cases" },
        { name: "Whitepapers", href: "/resources/whitepapers" },
        { name: "Documentation", href: "/resources/documentation" },
        { name: "Newsroom", href: "/resources/newsroom" },
        { name: "Help Center", href: "/resources/help" },
      ]
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/company/about" },
        { name: "Partners", href: "/company/partners" },
        { name: "Careers", href: "/company/careers" },
        { name: "Press", href: "/company/press" },
        { name: "Contact", href: "/company/contact" },
      ]
    },
    {
      title: "Account",
      links: [
        { name: "Login", href: "/login" },
        { name: "Sign Up", href: "/signup" },
        { name: "Request Demo", href: "/demo" },
      ]
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-border bg-card">
      <div className="w-full px-6 py-16 sm:px-16 lg:px-24">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6">
          {/* Logo and Description */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <Link href="/" className="mb-4 block">
              <div className="text-xl font-bold">Creation Rights</div>
            </Link>
            <p className="mb-6 text-sm text-muted-foreground">
              Empowering digital creators with comprehensive protection and monetization tools.
            </p>
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-sm transition-colors hover:text-foreground"
            >
              <ArrowUp className="h-4 w-4" />
              <span>Back to top</span>
            </button>
          </div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <div key={index} className="col-span-1">
              <h3 className="mb-4 text-sm font-semibold">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-16 border-t border-border pt-8">
          <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
            <div className="flex flex-col space-y-2 sm:flex-row sm:space-x-6 sm:space-y-0">
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                Cookie Policy
              </Link>
            </div>
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Creation Rights. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
