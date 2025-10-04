import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  Code2, 
  Bot, 
  Building2, 
  DollarSign, 
  CreditCard, 
  TrendingUp, 
  Gavel, 
  Shield, 
  Music, 
  Camera, 
  GraduationCap, 
  BookOpen, 
  Handshake, 
  CheckCircle, 
  Mail,
  FileText,
  BarChart3,
  Globe,
  Target,
  Heart,
  Settings
} from "lucide-react";

export default function PartnersPage() {
  const technologyPartners = [
    {
      category: "Platform Integrations",
      icon: Code2,
      description: "Leading platforms embedding creator rights into their core infrastructure",
      partners: [
        {
          name: "Adobe Creative Cloud",
          description: "Creative software integration for seamless rights protection",
          features: [
            "Direct metadata embedding in Photoshop, Premiere Pro, and Creative Suite",
            "Automatic rights protection during content creation workflow",
            "Real-time licensing options within creative applications"
          ]
        },
        {
          name: "Figma",
          description: "Design collaboration with built-in rights management",
          features: [
            "Automatic protection for design assets and collaborative projects",
            "Team licensing and usage tracking for design systems",
            "Client project rights management and handoff automation"
          ]
        },
        {
          name: "Canva",
          description: "Democratizing design with creator-first rights protection",
          features: [
            "Template creator compensation through usage-based royalties",
            "Automatic attribution and licensing for design elements",
            "Enterprise rights management for branded content creation"
          ]
        },
        {
          name: "WordPress & Drupal",
          description: "Content management systems with native rights protection",
          features: [
            "Plugin integration for automatic content protection",
            "Media library rights management and usage tracking",
            "Publisher revenue optimization through dynamic licensing"
          ]
        }
      ]
    },
    {
      category: "AI & Machine Learning Partners",
      icon: Bot,
      description: "Ethical AI development through creator-first data sourcing",
      partners: [
        {
          name: "Stability AI",
          description: "Responsible AI training with verified creator consent",
          features: [
            "Ethical training dataset curation with creator compensation",
            "Opt-in/opt-out management for AI model development",
            "Attribution and royalty systems for AI-generated content"
          ]
        },
        {
          name: "Anthropic",
          description: "Constitutional AI development with creator rights integration",
          features: [
            "Transparent training data sourcing and creator attribution",
            "Bias reduction through diverse, ethically-sourced datasets",
            "Creator compensation frameworks for AI model improvement"
          ]
        },
        {
          name: "Hugging Face",
          description: "Open-source AI community with creator rights awareness",
          features: [
            "Model repository integration with training data provenance",
            "Creator attribution and compensation for community models",
            "Ethical AI development tools and best practices"
          ]
        },
        {
          name: "OpenAI Research Partners",
          description: "Academic collaboration on AI ethics and creator rights",
          features: [
            "Research on fair compensation models for AI training",
            "Development of technical standards for creator consent",
            "Policy research on AI regulation and creator protection"
          ]
        }
      ]
    },
    {
      category: "Infrastructure Partners",
      icon: Building2,
      description: "Enterprise-grade technology powering the creator economy",
      partners: [
        {
          name: "Amazon Web Services",
          description: "Scalable cloud infrastructure for global creator rights management",
          features: [
            "Edge computing for real-time content identification",
            "Secure storage and processing for sensitive creator data",
            "Global distribution network for minimal latency worldwide"
          ]
        },
        {
          name: "Cloudflare",
          description: "Security and performance optimization for creator platforms",
          features: [
            "DDoS protection and security for creator rights infrastructure",
            "Content delivery network optimization for media-rich applications",
            "Edge computing capabilities for real-time rights verification"
          ]
        },
        {
          name: "MongoDB",
          description: "Database technology for dynamic metadata management",
          features: [
            "Flexible schema design for evolving metadata standards",
            "Real-time analytics and reporting capabilities",
            "Global distribution and synchronization for creator data"
          ]
        }
      ]
    }
  ];

  const financialPartners = [
    {
      category: "Payment Processing",
      icon: CreditCard,
      description: "Seamless financial infrastructure for creator compensation",
      partners: [
        {
          name: "Stripe",
          description: "Global payment processing for creator royalties and licensing",
          features: [
            "Multi-currency support for international creator payments",
            "Automated royalty distribution and revenue sharing",
            "Compliance with global financial regulations and tax requirements"
          ]
        },
        {
          name: "JP Morgan Chase",
          description: "Enterprise banking and financial services integration",
          features: [
            "Corporate treasury management for large-scale creator payments",
            "International wire transfer optimization for global royalties",
            "Compliance and regulatory support for financial operations"
          ]
        }
      ]
    },
    {
      category: "Investment & Funding Partners",
      icon: TrendingUp,
      description: "Capital partners supporting creator economy innovation",
      partners: [
        {
          name: "Andreessen Horowitz (a16z)",
          description: "Strategic investment and portfolio company collaboration",
          features: [
            "Portfolio company integration opportunities",
            "Strategic guidance on creator economy trends and opportunities",
            "Access to network of innovative startups and established companies"
          ]
        },
        {
          name: "Bessemer Venture Partners",
          description: "Growth capital and strategic partnership development",
          features: [
            "Scaling support for international expansion",
            "Network access to enterprise customers and strategic partners",
            "Expertise in SaaS and marketplace business model optimization"
          ]
        }
      ]
    }
  ];

  const legalInsurancePartners = [
    {
      category: "Legal Services",
      icon: Gavel,
      description: "Specialized legal expertise for creator rights and digital IP",
      partners: [
        {
          name: "Fenwick & West",
          description: "Technology and intellectual property law specialists",
          features: [
            "IP strategy and patent protection for dynamic metadata technology",
            "Platform partnership legal framework development",
            "International expansion and regulatory compliance support"
          ]
        },
        {
          name: "Cooley LLP",
          description: "Entertainment and media law expertise",
          features: [
            "Creator rights legal framework development",
            "Entertainment industry partnership negotiations",
            "Regulatory compliance for emerging creator economy legislation"
          ]
        },
        {
          name: "Morrison & Foerster",
          description: "International technology law and regulatory expertise",
          features: [
            "Global expansion legal support and regulatory navigation",
            "Cross-border data privacy and creator rights compliance",
            "International partnership and licensing agreement development"
          ]
        }
      ]
    },
    {
      category: "Insurance Innovation",
      icon: Shield,
      description: "Pioneering insurance products for the creator economy",
      partners: [
        {
          name: "Lloyd's of London",
          description: "Innovation partnership for creator economy insurance products",
          features: [
            "World-first creator liability and IP insurance products",
            "AI-era risk assessment and coverage development",
            "Global insurance capacity for creator protection programs"
          ]
        }
      ]
    }
  ];

  const creativePartners = [
    {
      category: "Music Industry",
      icon: Music,
      description: "Transforming music rights management and creator compensation",
      partners: [
        {
          name: "ASCAP",
          description: "Performance rights organization partnership",
          features: [
            "Integration with traditional music licensing and royalty collection",
            "Modernization of music rights management through dynamic metadata",
            "Creator education and adoption programs for new technology"
          ]
        },
        {
          name: "BMI",
          description: "Broadcast Music Inc. collaboration on digital rights",
          features: [
            "Digital performance rights tracking and compensation",
            "Integration with streaming platform royalty systems",
            "Innovation in music creator rights protection and monetization"
          ]
        },
        {
          name: "Independent Music Publishers",
          description: "Direct partnership with music publishers and labels",
          features: [
            "Catalog protection and monetization optimization",
            "AI training licensing for music industry content",
            "Revenue optimization through dynamic licensing strategies"
          ]
        }
      ]
    },
    {
      category: "Entertainment & Media",
      icon: Camera,
      description: "Hollywood and media industry transformation",
      partners: [
        {
          name: "Creative Artists Agency (CAA)",
          description: "Talent representation and creator rights advocacy",
          features: [
            "Celebrity and influencer NIL protection services",
            "Entertainment industry licensing and rights management",
            "Innovation in talent representation and creator economy integration"
          ]
        },
        {
          name: "United Talent Agency (UTA)",
          description: "Creator economy integration for traditional entertainment",
          features: [
            "Cross-platform talent representation and rights management",
            "Brand partnership optimization through creator rights technology",
            "Innovation in entertainment industry creator compensation models"
          ]
        }
      ]
    },
    {
      category: "Visual Arts & Photography",
      icon: Camera,
      description: "Protecting and monetizing visual creative work",
      partners: [
        {
          name: "Getty Images",
          description: "Stock photography and visual content licensing",
          features: [
            "Integration with existing stock photography licensing systems",
            "Creator compensation optimization through dynamic pricing",
            "AI training dataset licensing for visual content"
          ]
        },
        {
          name: "Shutterstock",
          description: "Global creative marketplace partnership",
          features: [
            "Creator rights protection and revenue optimization",
            "Integration with existing marketplace infrastructure",
            "Innovation in visual content licensing and creator compensation"
          ]
        }
      ]
    }
  ];

  const academicPartners = [
    {
      category: "Universities & Research Institutions",
      icon: GraduationCap,
      description: "Academic collaboration on creator rights and AI ethics",
      partners: [
        {
          name: "Stanford University - Human-Centered AI Institute",
          description: "Research on ethical AI development and creator rights",
          features: [
            "Academic research on fair compensation models for AI training",
            "Student and faculty access to creator rights technology",
            "Policy research and recommendation development"
          ]
        },
        {
          name: "MIT - Computer Science and Artificial Intelligence Laboratory",
          description: "Technical research on dynamic metadata and content identification",
          features: [
            "Advanced algorithms for content fingerprinting and recognition",
            "Research on privacy-preserving creator rights technologies",
            "Innovation in decentralized creator rights management systems"
          ]
        },
        {
          name: "UC Berkeley - Center for Ethical Technology",
          description: "Ethics research and policy development for creator economy",
          features: [
            "Ethical framework development for AI and creator rights",
            "Policy research on creator protection and fair compensation",
            "Public interest technology development and advocacy"
          ]
        }
      ]
    },
    {
      category: "Industry Research Organizations",
      icon: BookOpen,
      description: "Collaborative research on creator economy trends and innovation",
      partners: [
        {
          name: "Berkman Klein Center - Harvard University",
          description: "Internet policy and digital rights research",
          features: [
            "Policy research on creator rights and platform accountability",
            "Legal framework development for digital creator protection",
            "International comparative research on creator rights legislation"
          ]
        },
        {
          name: "Electronic Frontier Foundation (EFF)",
          description: "Digital rights advocacy and creator protection",
          features: [
            "Advocacy for creator-friendly copyright and digital rights legislation",
            "Technical standards development for creator rights protection",
            "Public education and awareness campaigns on creator rights"
          ]
        }
      ]
    }
  ];

  const partnershipOpportunities = [
    {
      icon: Code2,
      title: "Technology Integration Partners",
      description: "API integration and white-label solutions",
      features: [
        "Joint product development and feature collaboration",
        "Technical standards development and industry leadership",
        "API integration and white-label solutions"
      ]
    },
    {
      icon: Users,
      title: "Channel Partners",
      description: "Reseller and distribution partnerships",
      features: [
        "Joint go-to-market strategies and customer acquisition",
        "Geographic expansion and international market development",
        "Reseller and distribution partnerships"
      ]
    },
    {
      icon: Handshake,
      title: "Strategic Partners",
      description: "Investment and equity partnerships",
      features: [
        "Board representation and strategic guidance",
        "Long-term collaboration on creator economy innovation",
        "Investment and equity partnerships"
      ]
    }
  ];

  const partnershipRequirements = [
    {
      icon: Heart,
      title: "Alignment with Creator-First Values",
      features: [
        "Commitment to fair creator compensation and rights protection",
        "Transparency in business practices and creator relationships",
        "Innovation in creator economy solutions and services"
      ]
    },
    {
      icon: Settings,
      title: "Technical Compatibility",
      features: [
        "API integration capabilities and technical expertise",
        "Commitment to security and privacy best practices",
        "Scalable infrastructure and reliable service delivery"
      ]
    },
    {
      icon: Target,
      title: "Market Position",
      features: [
        "Established customer base or strategic market access",
        "Complementary products or services that enhance creator value",
        "Commitment to long-term partnership and mutual success"
      ]
    }
  ];

  const partnerResources = [
    {
      icon: Code2,
      title: "Technical Integration",
      description: "Comprehensive resources for successful partnership implementation",
      features: [
        "Partnership API Documentation - Specialized endpoints and integration guides",
        "White-Label Solutions - Customizable creator rights solutions for partner platforms",
        "Technical Support - Dedicated engineering support for partner integrations",
        "Co-Development Programs - Joint product development and feature collaboration"
      ]
    },
    {
      icon: BarChart3,
      title: "Business Development",
      description: "Strategic resources for partnership success",
      features: [
        "Joint Go-to-Market Planning - Collaborative customer acquisition and market development",
        "Sales Enablement - Training and resources for partner sales teams",
        "Marketing Collaboration - Co-marketing opportunities and brand partnership programs",
        "Customer Success - Joint customer support and success management"
      ]
    },
    {
      icon: Globe,
      title: "Partner Portal",
      description: "Dedicated platform for partner collaboration and resources",
      features: [
        "Integration Dashboard - Real-time monitoring of partnership performance and metrics",
        "Resource Library - Marketing materials, technical documentation, and best practices",
        "Communication Hub - Direct communication with Creation Rights partnership team",
        "Performance Analytics - Detailed insights into partnership success and optimization"
      ]
    }
  ];

  const faqItems = [
    {
      question: "What types of partnerships does Creation Rights offer?",
      answer: "We offer technology integration partnerships, channel partnerships, strategic alliances, and investment partnerships. Each is tailored to create mutual value and advance the creator economy."
    },
    {
      question: "How long does the partnership process take?",
      answer: "Partnership development typically takes 4-8 weeks from initial discussion to signed agreement, depending on complexity and integration requirements."
    },
    {
      question: "Do you offer exclusive partnerships?",
      answer: "We consider exclusive partnerships for strategic relationships that provide significant mutual value and market advancement opportunities."
    },
    {
      question: "What support do you provide to partners?",
      answer: "Partners receive dedicated technical support, business development resources, marketing collaboration, and access to our partner portal with comprehensive resources."
    },
    {
      question: "How do you measure partnership success?",
      answer: "Success metrics vary by partnership type but typically include technical integration quality, mutual customer satisfaction, revenue generation, and market expansion achievements."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <PageHeader
        title="Partners"
        subtitle="Building the creator-first internet together"
      />
      
      <PageSection>
        <div className="text-center max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground mb-12">
            Join the ecosystem of innovative companies, platforms, and organizations working with Creation Rights to transform how digital content is protected, licensed, and monetized. Together, we&apos;re creating infrastructure for a fairer, more sustainable creator economy.
          </p>
        </div>
      </PageSection>

      {/* Partnership Ecosystem */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <Users className="h-8 w-8 mr-3 text-primary" />
            Partnership Ecosystem
          </h2>
          <div className="bg-background border border-border p-8 rounded-lg">
            <p className="text-lg text-muted-foreground mb-6">
              The future of creator rights requires collaboration. We work with industry leaders across technology, finance, legal, and creative sectors to build comprehensive solutions that serve creators, platforms, and AI companies alike.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Strategic Value Creation</h3>
                <p className="text-muted-foreground">
                  Strategic partnerships that combine Creation Rights&apos; dynamic metadata protocol with complementary technologies and services to deliver unprecedented value to the creator economy.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Mutual Success</h3>
                <p className="text-muted-foreground">
                  Mutual success through partnerships that create new revenue streams, reduce operational costs, and unlock innovative use cases for all participants.
                </p>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* Technology Partners */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <Code2 className="h-8 w-8 mr-3 text-primary" />
            Technology Partners
          </h2>
          
          <div className="space-y-16">
            {technologyPartners.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-semibold">{category.category}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="bg-muted/20 p-8 border border-border rounded-lg">
                      <h4 className="text-xl font-semibold mb-2">{partner.name}</h4>
                      <p className="text-muted-foreground mb-4">{partner.description}</p>
                      <ul className="space-y-2">
                        {partner.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Financial Partners */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <DollarSign className="h-8 w-8 mr-3 text-primary" />
            Financial Partners
          </h2>
          
          <div className="space-y-16">
            {financialPartners.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-semibold">{category.category}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="bg-background p-8 border border-border rounded-lg">
                      <h4 className="text-xl font-semibold mb-2">{partner.name}</h4>
                      <p className="text-muted-foreground mb-4">{partner.description}</p>
                      <ul className="space-y-2">
                        {partner.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Legal & Insurance Partners */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <Gavel className="h-8 w-8 mr-3 text-primary" />
            Legal & Insurance Partners
          </h2>
          
          <div className="space-y-16">
            {legalInsurancePartners.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-semibold">{category.category}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="bg-muted/20 p-8 border border-border rounded-lg">
                      <h4 className="text-xl font-semibold mb-2">{partner.name}</h4>
                      <p className="text-muted-foreground mb-4">{partner.description}</p>
                      <ul className="space-y-2">
                        {partner.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Creative Industry Partners */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <Music className="h-8 w-8 mr-3 text-primary" />
            Creative Industry Partners
          </h2>
          
          <div className="space-y-16">
            {creativePartners.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-semibold">{category.category}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="bg-background p-8 border border-border rounded-lg">
                      <h4 className="text-xl font-semibold mb-2">{partner.name}</h4>
                      <p className="text-muted-foreground mb-4">{partner.description}</p>
                      <ul className="space-y-2">
                        {partner.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Academic & Research Partners */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <GraduationCap className="h-8 w-8 mr-3 text-primary" />
            Academic & Research Partners
          </h2>
          
          <div className="space-y-16">
            {academicPartners.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <div className="flex items-center space-x-3 mb-8">
                  <category.icon className="h-8 w-8 text-primary" />
                  <div>
                    <h3 className="text-2xl font-semibold">{category.category}</h3>
                    <p className="text-muted-foreground">{category.description}</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {category.partners.map((partner, partnerIndex) => (
                    <div key={partnerIndex} className="bg-muted/20 p-8 border border-border rounded-lg">
                      <h4 className="text-xl font-semibold mb-2">{partner.name}</h4>
                      <p className="text-muted-foreground mb-4">{partner.description}</p>
                      <ul className="space-y-2">
                        {partner.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-2">
                            <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Become a Partner */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <Handshake className="h-8 w-8 mr-3 text-primary" />
            Become a Partner
          </h2>
          
          <div className="mb-12">
            <h3 className="text-2xl font-semibold mb-8 text-center">Partnership Opportunities</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnershipOpportunities.map((opportunity, index) => (
                <div key={index} className="bg-background p-8 border border-border rounded-lg">
                  <div className="flex items-center space-x-3 mb-6">
                    <opportunity.icon className="h-8 w-8 text-primary" />
                    <h4 className="text-xl font-semibold">{opportunity.title}</h4>
                  </div>
                  <p className="text-muted-foreground mb-4">{opportunity.description}</p>
                  <ul className="space-y-2">
                    {opportunity.features.map((feature, idx) => (
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

          <div className="bg-background border border-border p-8 rounded-lg">
            <h3 className="text-2xl font-semibold mb-8 text-center">Partnership Requirements</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {partnershipRequirements.map((requirement, index) => (
                <div key={index}>
                  <div className="flex items-center space-x-3 mb-4">
                    <requirement.icon className="h-6 w-6 text-primary" />
                    <h4 className="text-lg font-semibold">{requirement.title}</h4>
                  </div>
                  <ul className="space-y-2">
                    {requirement.features.map((feature, idx) => (
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

      {/* Partner Resources */}
      <PageSection>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <FileText className="h-8 w-8 mr-3 text-primary" />
            Partner Resources
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {partnerResources.map((resource, index) => (
              <div key={index} className="bg-muted/20 p-8 border border-border rounded-lg">
                <div className="flex items-center space-x-3 mb-6">
                  <resource.icon className="h-8 w-8 text-primary" />
                  <h3 className="text-xl font-semibold">{resource.title}</h3>
                </div>
                <p className="text-muted-foreground mb-6">{resource.description}</p>
                <ul className="space-y-3">
                  {resource.features.map((feature, idx) => (
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
      </PageSection>

      {/* Contact Partnership Team */}
      <PageSection className="bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center flex items-center justify-center">
            <Mail className="h-8 w-8 mr-3 text-primary" />
            Contact Partnership Team
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Partnership Inquiries</h3>
              <p className="text-muted-foreground mb-8">Ready to explore collaboration opportunities?</p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Strategic Partnerships</p>
                    <p className="text-sm text-muted-foreground">partnerships@creationrights.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Code2 className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Technical Integration</p>
                    <p className="text-sm text-muted-foreground">integrations@creationrights.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Channel Partners</p>
                    <p className="text-sm text-muted-foreground">channels@creationrights.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <TrendingUp className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Investment Relations</p>
                    <p className="text-sm text-muted-foreground">investors@creationrights.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Partnership Application</h3>
              <p className="text-muted-foreground mb-8">
                Submit your partnership proposal to begin the collaboration process. Include information about your organization, proposed partnership model, and expected mutual benefits.
              </p>
              <div className="space-y-4">
                <Button variant="shimmer" size="lg" className="w-full">
                  Apply for Partnership
                </Button>
                <Button variant="outline" size="lg" className="w-full">
                  Schedule Partnership Call
                </Button>
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
              <div key={index} className="bg-muted/20 border border-border p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Q: {item.question}</h3>
                <p className="text-muted-foreground">A: {item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>
    </PageLayout>
  );
}
