import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Rocket, 
  Upload, 
  FileText, 
  Folder, 
  Shield, 
  DollarSign, 
  BarChart3, 
  Search, 
  Users, 
  Settings, 
  HelpCircle, 
  MessageSquare, 
  CheckCircle, 
  Globe, 
  Code2, 
  Zap, 
  Lock, 
  Eye, 
  GitBranch, 
  Calendar, 
  Star
} from "lucide-react";
import Link from "next/link";

export default function HelpPage() {
  const quickStartSteps = [
    {
      step: 1,
      title: "Create Your Account",
      description: "Visit creationrights.com and click 'Sign Up'",
      details: [
        "Choose your creator type (Individual, Team, or Organization)",
        "Verify your email address and complete your profile",
        "Connect your payment method for revenue collection"
      ]
    },
    {
      step: 2,
      title: "Upload Your First Content",
      description: "Click 'Upload Content' from your dashboard",
      details: [
        "Select your files (supports all major formats)",
        "Add title, description, and tags",
        "Choose your licensing preferences",
        "Click 'Protect & Publish'"
      ]
    },
    {
      step: 3,
      title: "Set Up Your Rights",
      description: "Review auto-generated metadata",
      details: [
        "Customize licensing terms and pricing",
        "Set up revenue sharing (if applicable)",
        "Configure AI training preferences",
        "Save your settings"
      ]
    },
    {
      step: 4,
      title: "Monitor Your Content",
      description: "Access your dashboard to view protected content",
      details: [
        "Monitor usage analytics and revenue",
        "Receive alerts for unauthorized usage",
        "Track licensing requests and approvals"
      ]
    }
  ];

  const supportedFormats = [
    { category: "Images", formats: "JPEG, PNG, GIF, TIFF, RAW formats, SVG" },
    { category: "Audio", formats: "MP3, WAV, FLAC, AAC, OGG, M4A" },
    { category: "Video", formats: "MP4, MOV, AVI, MKV, WebM, FLV" },
    { category: "Documents", formats: "PDF, DOC, TXT, RTF, EPUB" },
    { category: "3D Models", formats: "OBJ, FBX, STL, GLTF, PLY" },
    { category: "Code", formats: "JS, Python, HTML, CSS, and more" }
  ];

  const licenseTypes = [
    {
      icon: Shield,
      title: "All Rights Reserved",
      description: "Default protection with no usage permissions",
      features: [
        "Requires explicit licensing for any use",
        "Maximum control and revenue potential",
        "Best for high-value or sensitive content"
      ]
    },
    {
      icon: DollarSign,
      title: "Commercial License",
      description: "Allows commercial use with payment",
      features: [
        "Customizable pricing and terms",
        "Automatic revenue collection",
        "Suitable for stock content and business use"
      ]
    },
    {
      icon: Globe,
      title: "Creative Commons",
      description: "Various open licensing options",
      features: [
        "Attribution requirements maintained",
        "Non-commercial or commercial variants",
        "Good for community building and exposure"
      ]
    },
    {
      icon: Settings,
      title: "Custom Licensing",
      description: "Create your own licensing terms",
      features: [
        "Combine elements from different license types",
        "Set specific usage restrictions and permissions",
        "Ideal for unique business needs"
      ]
    }
  ];

  const dashboardFeatures = [
    {
      icon: BarChart3,
      title: "Live Analytics",
      features: [
        "See which pieces are performing best",
        "Track usage across all platforms simultaneously",
        "Monitor revenue trends and seasonal patterns",
        "Get alerts when your content is discovered by new licensees"
      ]
    },
    {
      icon: DollarSign,
      title: "Instant Revenue Tracking",
      features: [
        "Real-time earnings from all sources",
        "Breakdown by content type, license type, and platform",
        "Automatic tax documentation and reporting",
        "Historical performance data for portfolio optimization"
      ]
    },
    {
      icon: Search,
      title: "Usage Monitoring",
      features: [
        "Every view, download, and remix tracked",
        "Unauthorized usage detection and alerts",
        "Compliance verification for licensed content",
        "Audit trails that hold up in legal disputes"
      ]
    }
  ];

  const supportOptions = [
    {
      icon: HelpCircle,
      title: "Self-Service Options",
      features: [
        "Help Center: Comprehensive guides and tutorials",
        "Video Tutorials: Step-by-step visual guides",
        "Community Forum: Connect with other creators",
        "FAQ Database: Answers to common questions",
        "Status Page: Real-time system status updates"
      ]
    },
    {
      icon: MessageSquare,
      title: "Direct Support",
      features: [
        "Live Chat: Available 9 AM - 6 PM EST, Monday-Friday",
        "Email Support: support@creationrights.com (24-48 hour response)",
        "Phone Support: Available for Pro and Enterprise plans",
        "Screen Sharing: Technical support with remote assistance"
      ]
    },
    {
      icon: Star,
      title: "Priority Support",
      features: [
        "Dedicated Account Manager: Personal point of contact",
        "Priority Queue: Faster response times",
        "Phone Support: Direct phone line for urgent issues",
        "Custom Training: Personalized onboarding and training"
      ]
    }
  ];

  const faqItems = [
    {
      question: "How quickly will I see results?",
      answer: "Many creators see their first AI licensing inquiries within days of uploading. Revenue timing depends on your content type and market demand."
    },
    {
      question: "Is my content safe with Creation Rights?",
      answer: "Absolutely. We use bank-level security, cryptographic protection, and are backed by Lloyd's Lab. Your IP is safer with us than sitting unprotected on regular cloud storage."
    },
    {
      question: "Do I have to change how I create content?",
      answer: "Not at all. Creation Rights works with your existing tools and workflow. Just connect your cloud storage and we handle the rest."
    },
    {
      question: "What if I already have content on other platforms?",
      answer: "Perfect! We can retroactively protect your existing library while you continue using your current platforms. You keep all existing revenue streams and add new ones."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHeader
        title="Help Center"
        subtitle="Your complete guide to protecting and monetizing your creative work"
      />
      
      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground mb-12">
              Welcome to the Creation Rights Help Center! Whether you&apos;re just getting started or looking to optimize your rights management strategy, we&apos;re here to help you make the most of our platform and protect your creative work.
            </p>
        </div>
      </PageSection>

      {/* Quick Start Guide */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <Rocket className="h-8 w-8 mr-3 text-primary" />
            Getting Started
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {quickStartSteps.map((step, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary text-primary-foreground w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0">
                    {step.step}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground mb-4">{step.description}</p>
                    <ul className="space-y-2">
                      {step.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <Zap className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">🎯 Pro Tip</h4>
                <p className="text-muted-foreground">Start with a few important pieces to get familiar with the platform, then bulk upload your entire portfolio.</p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Content Management */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <Upload className="h-8 w-8 mr-3 text-primary" />
            Content Management
          </h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-6">Supported File Types</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {supportedFormats.map((format, index) => (
                <div key={index} className="bg-background border border-border p-4">
                  <h4 className="font-semibold mb-2">{format.category}</h4>
                  <p className="text-sm text-muted-foreground">{format.formats}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background border border-border p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Folder className="h-6 w-6 mr-3 text-primary" />
                Bulk Upload Process
              </h3>
              <ol className="space-y-3">
                <li className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center text-xs font-semibold rounded-full">1</div>
                  <span className="text-sm text-muted-foreground">Select &quot;Bulk Upload&quot; from your dashboard</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center text-xs font-semibold rounded-full">2</div>
                  <span className="text-sm text-muted-foreground">Choose folder or multiple files (up to 100 at once)</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center text-xs font-semibold rounded-full">3</div>
                  <span className="text-sm text-muted-foreground">Apply batch settings for licensing and metadata</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center text-xs font-semibold rounded-full">4</div>
                  <span className="text-sm text-muted-foreground">Review and confirm upload</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="bg-primary text-primary-foreground w-6 h-6 flex items-center justify-center text-xs font-semibold rounded-full">5</div>
                  <span className="text-sm text-muted-foreground">Monitor processing status</span>
                </li>
              </ol>
            </div>

            <div className="bg-background border border-border p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <FileText className="h-6 w-6 mr-3 text-primary" />
                Metadata Enhancement
              </h3>
              <p className="text-muted-foreground mb-4">Our AI automatically generates:</p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Descriptive tags based on content analysis</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Technical specifications (resolution, duration, format)</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Style analysis for visual and audio content</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Usage recommendations based on content type</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Licensing & Rights */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <Shield className="h-8 w-8 mr-3 text-primary" />
            Licensing & Rights
          </h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Understanding Smart Licensing</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {licenseTypes.map((license, index) => (
                <div key={index} className="bg-muted/20 p-6 border border-border">
                  <div className="flex items-center space-x-3 mb-4">
                    <license.icon className="h-6 w-6 text-primary" />
                    <h4 className="text-lg font-semibold">{license.title}</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">{license.description}</p>
                  <ul className="space-y-2">
                    {license.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Monitoring & Analytics */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <BarChart3 className="h-8 w-8 mr-3 text-primary" />
            Monitoring & Analytics
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {dashboardFeatures.map((feature, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <feature.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <ul className="space-y-3">
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

      {/* Revenue & Payments */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <DollarSign className="h-8 w-8 mr-3 text-primary" />
            Revenue & Payments
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/20 p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4">Revenue Sources</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Direct Licensing: One-time licensing fees</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Subscription Revenue: Ongoing licensing agreements</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Royalty Payments: Usage-based compensation</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">AI Training Fees: Compensation for AI model training</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Affiliate Commissions: Revenue from referral programs</span>
                </li>
              </ul>
            </div>

            <div className="bg-muted/20 p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4">Payment Methods</h3>
              <ul className="space-y-3">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Bank Transfer: Direct deposit to your account</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">PayPal: Instant payments to your PayPal account</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Cryptocurrency: Bitcoin and stablecoin payments</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">International Wire: For global creators</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                  <span className="text-sm text-muted-foreground">Digital Wallets: Integration with popular payment apps</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-primary/10 border border-primary/20 rounded-lg p-6">
            <div className="flex items-start space-x-3">
              <BarChart3 className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="font-semibold mb-2">📊 Pro Tip</h4>
                <p className="text-muted-foreground">Set aside 25-30% of earnings for taxes and regularly review your financial reports to optimize revenue streams.</p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Security & Privacy */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <Lock className="h-8 w-8 mr-3 text-primary" />
            Security & Privacy
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-background border border-border p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Shield className="h-6 w-6 mr-3 text-primary" />
                Account Security
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Two-Factor Authentication</h4>
                  <ol className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>1. Go to Account Settings &gt; Security</li>
                    <li>2. Enable 2FA using your preferred method</li>
                    <li>3. Choose from SMS, authenticator app, or hardware key</li>
                    <li>4. Save backup codes in a secure location</li>
                    <li>5. Test the setup to ensure it&apos;s working</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Password Best Practices</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Use a unique, strong password (12+ characters)</li>
                    <li>• Include uppercase, lowercase, numbers, and symbols</li>
                    <li>• Avoid personal information or common words</li>
                    <li>• Use a password manager for security</li>
                    <li>• Change passwords regularly (every 90 days)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border p-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Eye className="h-6 w-6 mr-3 text-primary" />
                Content Privacy
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Privacy Settings</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Public: Visible to everyone, searchable</li>
                    <li>• Unlisted: Accessible via direct link only</li>
                    <li>• Private: Visible only to you and authorized users</li>
                    <li>• Team: Accessible to team members and collaborators</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Data Protection</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Encryption: All data encrypted in transit and at rest</li>
                    <li>• Backup Systems: Multiple redundant backups of your content</li>
                    <li>• GDPR Compliance: Full compliance with privacy regulations</li>
                    <li>• Data Portability: Export your data at any time</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Collaboration & Teams */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            Collaboration & Teams
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-muted/20 p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4">Team Management</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Adding Team Members</h4>
                  <ol className="text-sm text-muted-foreground space-y-1 ml-4">
                    <li>1. Go to Team Settings in your dashboard</li>
                    <li>2. Click &quot;Invite Team Member&quot;</li>
                    <li>3. Enter email address and select role</li>
                    <li>4. Set permissions and access levels</li>
                    <li>5. Send invitation and track acceptance</li>
                  </ol>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Role Types</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Owner: Full access to all account features</li>
                    <li>• Admin: Manage content and team members</li>
                    <li>• Creator: Upload and manage own content</li>
                    <li>• Viewer: View-only access to shared content</li>
                    <li>• Custom: Define specific permissions</li>
                  </ul>
                </div>
              </div>
        </div>

            <div className="bg-muted/20 p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4">Collaboration Features</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Project Management</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Project Folders: Organize content by project or client</li>
                    <li>• Task Assignment: Assign specific tasks to team members</li>
                    <li>• Progress Tracking: Monitor project status and deadlines</li>
                    <li>• Communication Tools: Built-in messaging and notifications</li>
                  </ul>
                </div>
        <div>
                  <h4 className="font-semibold mb-2">Revenue Sharing</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Team Splits: Automatic revenue distribution among team members</li>
                    <li>• Project-Based Sharing: Different splits for different projects</li>
                    <li>• Role-Based Compensation: Pay based on team member roles</li>
                    <li>• Transparent Reporting: All team members can see revenue data</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Technical Support */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <Settings className="h-8 w-8 mr-3 text-primary" />
            Technical Support
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-background border border-border p-8">
              <h3 className="text-xl font-semibold mb-4">Common Issues & Solutions</h3>
              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-2 text-orange-600">Upload Problems</h4>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">&quot;My file won&apos;t upload&quot;</p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Check file size (max 2GB per file)</li>
                      <li>• Verify file format is supported</li>
                      <li>• Ensure stable internet connection</li>
                      <li>• Try uploading during off-peak hours</li>
                      <li>• Contact support if issues persist</li>
                    </ul>
                  </div>
                </div>
                  <div>
                  <h4 className="font-semibold mb-2 text-orange-600">Account Access Issues</h4>
                  <div className="space-y-2">
                    <p className="text-sm font-medium">&quot;I can&apos;t log in&quot;</p>
                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                      <li>• Verify your email address and password</li>
                      <li>• Check if Caps Lock is enabled</li>
                      <li>• Try resetting your password</li>
                      <li>• Clear browser cache and cookies</li>
                      <li>• Disable browser extensions temporarily</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border p-8">
              <h3 className="text-xl font-semibold mb-4">Browser Compatibility</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">Supported Browsers</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Chrome: Version 90 or newer</li>
                    <li>• Firefox: Version 88 or newer</li>
                    <li>• Safari: Version 14 or newer</li>
                    <li>• Edge: Version 90 or newer</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Browser Settings</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Enable JavaScript</li>
                    <li>• Allow cookies from creationrights.com</li>
                    <li>• Disable ad blockers on our site</li>
                    <li>• Enable pop-ups for licensing notifications</li>
                    <li>• Keep browser updated to latest version</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>

          <div className="bg-background border border-border p-8">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Code2 className="h-6 w-6 mr-3 text-primary" />
              API Documentation
            </h3>
            <p className="text-muted-foreground mb-4">For developers integrating with Creation Rights</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold mb-2">Getting Started with API</h4>
                <ol className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>1. Generate API key in Developer Settings</li>
                  <li>2. Review API documentation and rate limits</li>
                  <li>3. Test endpoints in our API sandbox</li>
                  <li>4. Implement authentication in your application</li>
                  <li>5. Monitor usage and performance</li>
                </ol>
              </div>
              <div>
                <h4 className="font-semibold mb-2">SDKs Available</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• JavaScript/Node.js: Full-featured SDK</li>
                  <li>• Python: Comprehensive API wrapper</li>
                  <li>• PHP: WordPress and web integration</li>
                  <li>• Go: High-performance applications</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

        {/* Support Options */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <HelpCircle className="h-8 w-8 mr-3 text-primary" />
            Contact & Support
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {supportOptions.map((option, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border">
                <div className="flex items-center space-x-3 mb-6">
                  <option.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{option.title}</h3>
                </div>
                <ul className="space-y-3">
                  {option.features.map((feature, idx) => (
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

      {/* Advanced Features */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <Zap className="h-8 w-8 mr-3 text-primary" />
            Advanced Features
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-muted/20 p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <GitBranch className="h-6 w-6 mr-3 text-primary" />
                Enterprise Solutions
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">White-Label Options</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Custom branding and domain</li>
                    <li>• Integrated user experience</li>
                    <li>• API-first architecture</li>
                    <li>• Custom feature development</li>
                    <li>• Dedicated infrastructure</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Advanced Analytics</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Custom Dashboards: Tailored reporting interfaces</li>
                    <li>• Data Export: Bulk data export capabilities</li>
                    <li>• API Analytics: Detailed usage and performance metrics</li>
                    <li>• Predictive Insights: AI-powered trend analysis</li>
                  </ul>
                </div>
              </div>
        </div>

            <div className="bg-muted/20 p-8 border border-border">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Code2 className="h-6 w-6 mr-3 text-primary" />
                Developer Tools
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold mb-2">API Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• RESTful API: Standard HTTP endpoints</li>
                    <li>• GraphQL: Efficient data fetching</li>
                    <li>• Webhooks: Real-time event notifications</li>
                    <li>• Rate Limiting: Fair usage policies</li>
                    <li>• Authentication: OAuth 2.0 and API keys</li>
                  </ul>
                </div>
        <div>
                  <h4 className="font-semibold mb-2">Testing & Development</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Sandbox Environment: Safe testing environment</li>
                    <li>• Mock Data: Sample data for development</li>
                    <li>• Testing Tools: Automated testing utilities</li>
                    <li>• Documentation: Comprehensive API documentation</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Updates & Changelog */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <Calendar className="h-8 w-8 mr-3 text-primary" />
            Updates & Changelog
          </h2>
          
          <div className="space-y-8">
            <div className="bg-background border border-border p-8">
              <h3 className="text-xl font-semibold mb-4">Version 2.3.0 - Latest Release</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-green-600">New Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Enhanced AI detection for deepfake content</li>
                    <li>• Improved mobile app performance</li>
                    <li>• Advanced collaboration tools for teams</li>
                    <li>• New payment methods including cryptocurrency</li>
                    <li>• Enhanced international tax compliance</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-600">Improvements</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Faster upload processing for large files</li>
                    <li>• Better search functionality in content library</li>
                    <li>• Improved analytics dashboard performance</li>
                    <li>• Enhanced security with advanced encryption</li>
                    <li>• Streamlined licensing workflow</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-orange-600">Bug Fixes</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Fixed issue with bulk upload progress tracking</li>
                    <li>• Resolved payment notification delays</li>
                    <li>• Corrected timezone display in analytics</li>
                    <li>• Fixed mobile app login issues</li>
                    <li>• Resolved API rate limiting edge cases</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-background border border-border p-8">
              <h3 className="text-xl font-semibold mb-4">Coming Soon</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Upcoming Features</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• AI Training Marketplace: Direct marketplace for AI training data</li>
                    <li>• Virtual Reality Integration: VR content protection and licensing</li>
                    <li>• Advanced Watermarking: Dynamic watermarks that adapt to usage</li>
                    <li>• Blockchain Integration: Optional blockchain verification</li>
                    <li>• Mobile App 2.0: Complete mobile app redesign</li>
                  </ul>
                </div>
                  <div>
                  <h4 className="font-semibold mb-2">Feature Requests</h4>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>• Batch Licensing: Apply licensing to multiple files at once</li>
                    <li>• Advanced Filtering: More granular content filtering options</li>
                    <li>• Custom Branding: White-label options for agencies</li>
                    <li>• Offline Mode: Work with content without internet connection</li>
                    <li>• Advanced Reporting: More detailed analytics and reporting</li>
                  </ul>
                </div>
              </div>
                  </div>
                </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Frequently Asked Questions</h2>
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

      {/* CTA */}
      <PageSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Still Need Help?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Our support team is here to help you succeed with Creation Rights.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="shimmer" size="lg" asChild>
              <Link href="/demo">Book a Demo</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="mailto:support@creationrights.com">Contact Support</Link>
            </Button>
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
