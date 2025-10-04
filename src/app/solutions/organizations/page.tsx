"use client";

import { PageLayout, PageHeader, PageSection } from "@/components/ui/page-layout";
import { Button } from "@/components/ui/button";
import { AnimatedList } from "@/components/ui/animated-list";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { 
  BarChart3, 
  Bot, 
  TrendingUp, 
  RefreshCw, 
  Briefcase,
  CheckCircle,
  Check,
  X,
  Film,
  Music,
  Camera,
  Gamepad2,
  Tv,
  Database,
  Code,
  Shield,
  Globe,
  Clock,
  Zap,
  Search,
  ArrowRight
} from "lucide-react";
import Link from "next/link";

function AnimateOnScroll({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-in');
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [delay]);

  return <div ref={ref} className="opacity-0 flex flex-col flex-1">{children}</div>;
}

export default function OrganizationsPage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!carouselRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - carouselRef.current.offsetLeft);
    setScrollLeft(carouselRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !carouselRef.current) return;
    e.preventDefault();
    const x = e.pageX - carouselRef.current.offsetLeft;
    const walk = (x - startX) * 2; // Multiply by 2 for faster scrolling
    carouselRef.current.scrollLeft = scrollLeft - walk;
  };

  const scaleFeatures = [
    {
      title: "Manage unlimited creators and assets from a single dashboard.",
      description: "Whether you're a creative agency with 50 freelancers or a media company with 10,000 content pieces, our AI-first architecture scales seamlessly without performance degradation."
    },
    {
      title: "Unified rights management across all content types",
      description: "Video, audio, images, 3D assets, and datasets. One protocol, one interface, complete visibility."
    },
    {
      title: "Team collaboration tools that eliminate confusion",
      description: "Over rights, splits, and usage permissions. Every stakeholder sees the same real-time data."
    }
  ];

  const revenueOptimization = [
    {
      icon: Bot,
      title: "AI Licensing at Scale",
      description: "Position your entire content library for AI training opportunities. Our system automatically identifies which assets are most valuable for machine learning, connects with AI companies seeking legally cleared data, and negotiates bulk licensing deals."
    },
    {
      icon: BarChart3,
      title: "Portfolio Analytics",
      features: [
        "Real-time performance metrics across all assets",
        "Identify top-performing content types and creators",
        "Predictive analytics on market demand trends",
        "ROI tracking for content investments"
      ]
    },
    {
      icon: RefreshCw,
      title: "Automated Revenue Distribution",
      description: "Set complex royalty structures once, then watch as revenue automatically flows to creators, collaborators, and stakeholders according to your predefined rules. Handle thousands of payments simultaneously without manual intervention."
    },
    {
      icon: Briefcase,
      title: "Enterprise Licensing Tools",
      features: [
        "Bulk licensing capabilities for large content buyers",
        "Custom pricing tiers and volume discounts",
        "White-label licensing portals for your clients",
        "API integration with existing business systems"
      ]
    }
  ];

  const operationalChallenges = [
    {
      challenge: "Rights Clearance Nightmare",
      solution: "Instant Verification",
      before: "Legal teams spending weeks clearing rights for a single campaign",
      after: "Instant verification of usage rights and licensing status for any asset in your portfolio"
    },
    {
      challenge: "Revenue Leakage",
      solution: "Complete Tracking",
      before: "Missing revenue from unauthorized usage and complex intermediary chains",
      after: "Real-time monitoring of all asset usage with automatic licensing enforcement"
    },
    {
      challenge: "Creator Relations",
      solution: "Transparent Partnerships",
      before: "Disputes over unclear royalty calculations and delayed payments",
      after: "Transparent, real-time revenue sharing that creators can verify independently"
    },
    {
      challenge: "Compliance Headaches",
      solution: "Automated Governance",
      before: "Manual tracking of usage rights across multiple platforms and jurisdictions",
      after: "Automated compliance monitoring with audit trails that satisfy legal requirements"
    }
  ];

  const industrySolutions = [
    {
      icon: Film,
      title: "Media & Entertainment",
      image: "/grid-images/hero-05.jpg",
      features: [
        "Track usage across streaming platforms, broadcast, and digital distribution",
        "Manage complex multi-party royalty agreements",
        "Automate residual payments for cast and crew",
        "Monitor unauthorized usage and generate takedown notices"
      ]
    },
    {
      icon: Music,
      title: "Music Labels & Publishers",
      image: "/grid-images/hero-12.jpg",
      features: [
        "Real-time sync licensing opportunities",
        "Automated mechanical royalty distribution",
        "AI training licensing for your catalog",
        "Cross-platform performance tracking"
      ]
    },
    {
      icon: Camera,
      title: "Creative Agencies",
      image: "/grid-images/hero-08.jpg",
      features: [
        "Client asset management with usage tracking",
        "Photographer and designer royalty automation",
        "Stock licensing revenue optimization",
        "Campaign performance analytics"
      ]
    },
    {
      icon: Gamepad2,
      title: "Gaming Studios",
      image: "/grid-images/hero-15.jpg",
      features: [
        "Asset reuse tracking across multiple titles",
        "Contractor and freelancer payment automation",
        "Licensing opportunities for game assets in AI training",
        "IP protection for proprietary content"
      ]
    },
    {
      icon: Tv,
      title: "Content Creators & MCNs",
      image: "/grid-images/hero-03.jpg",
      features: [
        "Multi-creator revenue optimization",
        "Brand partnership tracking and payments",
        "Content library monetization",
        "Audience analytics integration"
      ]
    }
  ];

  const infrastructureFeatures = [
    {
      icon: Database,
      title: "Advanced Database Architecture",
      description: "Our columnar, vectorized processing engine handles millions of assets and transactions simultaneously. While legacy systems take hours to generate royalty reports, Creation Rights delivers real-time analytics at internet speed."
    },
    {
      icon: Code,
      title: "API-First Integration",
      features: [
        "RESTful APIs for seamless integration with existing systems",
        "Webhook endpoints for real-time notifications",
        "SDKs for custom application development",
        "White-label solutions for client-facing portals"
      ]
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      features: [
        "PCI DSS Compliant payment processing",
        "SOC 2 Type II security controls",
        "GDPR compliant data handling",
        "Patent-protected Dynamic Metadata technology",
        "Lloyd's Lab partnership for innovative insurance products"
      ]
    },
    {
      icon: Globe,
      title: "Global Infrastructure",
      features: [
        "Multi-region deployment for low-latency access",
        "99.9% uptime SLA with redundant systems",
        "Scalable architecture that grows with your business",
        "24/7 monitoring and support"
      ]
    }
  ];

  const implementationSteps = [
    { week: "Week 1", task: "System setup and initial content migration" },
    { week: "Week 2", task: "Team training and workflow integration" },
    { week: "Week 3", task: "Full deployment with ongoing optimization" },
    { week: "Ongoing", task: "Dedicated success management and technical support" }
  ];

  const roiMetrics = [
    { icon: TrendingUp, metric: "35% increase", description: "in overall content revenue" },
    { icon: Zap, metric: "90% reduction", description: "in rights clearance time" },
    { icon: Bot, metric: "$50K+ annually", description: "New revenue streams from AI licensing averaging" },
    { icon: Search, metric: "100% visibility", description: "into content usage and performance" },
    { icon: Clock, metric: "Hours saved weekly", description: "on manual royalty calculations" }
  ];

  const caseStudies = [
    {
      title: "Mid-Size Creative Agency",
      quote: "We manage 200+ freelance creators and were drowning in royalty calculations. Creation Rights automated everything - now our creators get paid instantly and we can focus on creative work instead of accounting. Our AI licensing revenue alone covers the platform cost.",
      results: [
        "40% reduction in administrative overhead",
        "$120K in new AI licensing revenue in first year",
        "95% creator satisfaction improvement",
        "Zero payment disputes since implementation"
      ]
    },
    {
      title: "Independent Music Label",
      quote: "Our catalog of 5,000+ tracks was sitting there earning basic streaming royalties. Creation Rights opened up AI training licensing, sync opportunities, and remix revenue we never knew existed. It's like discovering a goldmine in our own backyard.",
      results: [
        "60% increase in per-track revenue",
        "$300K in new licensing deals in 18 months",
        "Real-time royalty distribution to 150+ artists",
        "Complete audit trail for all transactions"
      ]
    }
  ];

  const integrationPartners = [
    "Adobe Creative Cloud",
    "Avid",
    "Final Cut",
    "QuickBooks",
    "SAP",
    "Oracle",
    "YouTube",
    "Spotify",
    "Getty Images",
    "ContractWorks",
    "Ironclad",
    "Google Analytics",
    "Adobe Analytics"
  ];

  const faqItems = [
    {
      question: "How long does implementation take?",
      answer: "Most organizations are fully operational within 2-3 weeks, including content migration and team training."
    },
    {
      question: "Can we maintain our existing revenue streams?",
      answer: "Absolutely. Creation Rights adds new revenue opportunities while preserving all existing income sources."
    },
    {
      question: "What about our current legal agreements?",
      answer: "Our system works within your existing contracts and can help identify opportunities to optimize future agreements."
    },
    {
      question: "How do you handle international rights management?",
      answer: "Our platform supports multi-jurisdictional rights management with automated compliance for different territorial requirements."
    },
    {
      question: "What's the minimum portfolio size for enterprise features?",
      answer: "We work with organizations of all sizes. Enterprise features are available based on needs, not just portfolio size."
    }
  ];

  return (
    <PageLayout>
      {/* Hero Section */}
      <section className="px-6 py-24 sm:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto text-left">
          <h1 className="mb-2 text-4xl font-semibold md:text-6xl">
            For Organizations
          </h1>
          <p className="text-4xl font-semibold text-muted-foreground max-w-3xl md:text-6xl mb-8">
            Scale creator rights management across your entire content portfolio
          </p>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Transform how your organization protects, tracks, and monetizes creative assets. From agencies managing hundreds of creators to studios producing thousands of assets, Creation Rights delivers enterprise-grade rights infrastructure without enterprise complexity.
          </p>
        </div>
      </section>

      {/* Built for Scale */}
      <PageSection>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-left">Built for Scale, Designed for Teams</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {scaleFeatures.map((feature, index) => (
              <div key={index} className="bg-muted/50 p-8">
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Revenue Optimization */}
      <PageSection>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-left">Revenue Optimization at Portfolio Scale</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {revenueOptimization.map((item, index) => (
              <div key={index} className="bg-muted/50 p-6 flex flex-col justify-between lg:min-h-[320px]">
                {/* Top Section: Icon */}
                <div>
                  <item.icon className="h-6 w-6 text-foreground" />
                </div>

                {/* Bottom Section: Heading, Description and Features */}
                <div className="space-y-3 mt-6">
                  <h3 className="text-base font-semibold">{item.title}</h3>
                  {item.description && (
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  )}
                  {item.features && (
                    <ul className="space-y-2">
                      {item.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center mt-0.5">
                            <Check className="h-2.5 w-2.5 text-white stroke-[3]" />
                          </div>
                          <span className="text-muted-foreground text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Operational Challenges */}
      <PageSection>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column: Heading */}
            <div>
              <h2 className="text-4xl font-semibold text-left lg:sticky lg:top-24">Solve Your Biggest Operational Challenges</h2>
            </div>
            
            {/* Right Column: Cards */}
            <div className="space-y-12 lg:space-y-20">
              {operationalChallenges.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row gap-8 md:items-stretch">
                  {/* Before Card */}
                  <div className="flex-1 flex flex-col">
                    <AnimateOnScroll delay={0}>
                      <div className="border border-muted p-6 flex flex-col justify-between flex-1 md:min-h-[250px]">
                        {/* Top: Badge */}
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground">
                            <X className="h-3 w-3 text-background stroke-[3]" />
                          </div>
                          <span className="font-semibold text-sm">Before</span>
                        </div>
                        
                        {/* Bottom: Heading and Description */}
                        <div className="space-y-3 mt-6">
                          <h3 className="text-base font-semibold">{item.challenge}</h3>
                          <p className="text-sm text-muted-foreground">{item.before}</p>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  </div>
                  
                  {/* Arrow */}
                  <div className="flex justify-center items-center md:flex-shrink-0 md:self-center">
                    <AnimateOnScroll delay={100}>
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-foreground">
                        <ArrowRight className="h-3 w-3 text-background stroke-[3] rotate-90 md:rotate-0" />
                      </div>
                    </AnimateOnScroll>
                  </div>
                  
                  {/* After Card */}
                  <div className="flex-1 flex flex-col">
                    <AnimateOnScroll delay={200}>
                      <div className="border border-muted p-6 flex flex-col justify-between flex-1 md:min-h-[250px]">
                        {/* Top: Badge */}
                        <div className="flex items-center gap-2">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary">
                            <Check className="h-3 w-3 text-white stroke-[3]" />
                          </div>
                          <span className="font-semibold text-sm">After</span>
                        </div>
                        
                        {/* Bottom: Heading and Description */}
                        <div className="space-y-3 mt-6">
                          <h3 className="text-base font-semibold">{item.solution}</h3>
                          <p className="text-sm text-muted-foreground">{item.after}</p>
                        </div>
                      </div>
                    </AnimateOnScroll>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PageSection>

      {/* Industry Solutions */}
      <section className="py-16">
        {/* Header */}
        <div className="px-6 sm:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-4xl font-semibold text-left">Industry-Specific Solutions</h2>
              <div className="flex gap-2">
              <button 
                onClick={() => {
                  if (carouselRef.current) carouselRef.current.scrollBy({ left: -440, behavior: 'smooth' });
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors"
              >
                <ArrowRight className="h-5 w-5 rotate-180" />
              </button>
              <button 
                onClick={() => {
                  if (carouselRef.current) carouselRef.current.scrollBy({ left: 440, behavior: 'smooth' });
                }}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-muted transition-colors"
              >
                <ArrowRight className="h-5 w-5" />
              </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Carousel - Full Width */}
        <div 
          id="industry-carousel"
          ref={carouselRef}
          className={`overflow-x-auto scrollbar-hide ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          style={{ userSelect: isDragging ? 'none' : 'auto' }}
        >
          <div className="flex gap-6 pl-6 sm:pl-16 lg:pl-24">
            {industrySolutions.map((industry, index) => (
                <div 
                  key={index} 
                  className="flex-shrink-0 w-[420px] h-[520px] relative overflow-hidden group"
                  style={{
                    backgroundImage: `url(${industry.image})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  {/* Background with gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30" />
                  
                  {/* Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
                    <div className="flex items-center gap-3">
                      <industry.icon className="h-6 w-6" />
                    </div>
                    
                    <div>
                      <h3 className="text-2xl font-semibold mb-4">{industry.title}</h3>
                      <ul className="space-y-2">
                        {industry.features.slice(0, 3).map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-2 text-sm opacity-90">
                            <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center mt-0.5">
                              <Check className="h-2.5 w-2.5 text-white stroke-[3]" />
                            </div>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
              {/* Spacer for last card */}
              <div className="flex-shrink-0 w-6 sm:w-16 lg:w-24" />
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <PageSection>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-left">Enterprise-Grade Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {infrastructureFeatures.map((feature, index) => (
              <div key={index} className="bg-muted/50 p-6 flex flex-col justify-between lg:min-h-[320px]">
                {/* Top Section: Icon */}
                <div>
                  <feature.icon className="h-6 w-6 text-foreground" />
                </div>

                {/* Bottom Section: Heading, Description and Features */}
                <div className="space-y-3 mt-6">
                  <h3 className="text-base font-semibold">{feature.title}</h3>
                  {feature.description && (
                    <p className="text-muted-foreground text-sm">{feature.description}</p>
                  )}
                  {feature.features && (
                    <ul className="space-y-2">
                      {feature.features.map((item, idx) => (
                        <li key={idx} className="flex items-start space-x-2">
                          <div className="flex-shrink-0 w-4 h-4 rounded-full bg-primary flex items-center justify-center mt-0.5">
                            <Check className="h-2.5 w-2.5 text-white stroke-[3]" />
                          </div>
                          <span className="text-muted-foreground text-xs">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Implementation */}
      <PageSection>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-8 text-left">Implementation & Support</h2>
          
          {/* Dashboard Container */}
          <div className="border border-border bg-background overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-4 divide-x divide-border">
              {/* Main Calendar Grid - Left Side */}
              <div className="lg:col-span-3 p-6">
                <h3 className="text-lg font-semibold mb-4">Rapid Deployment Timeline</h3>
                
                {/* Calendar Grid */}
                <div className="grid grid-cols-2 gap-[1px] bg-border border border-border">
                  {implementationSteps.map((step, index) => (
                    <div 
                      key={index} 
                      className="bg-background p-3 min-h-[180px] flex flex-col"
                    >
                      <div className="flex items-center gap-1 text-xs text-muted-foreground font-medium mb-3">
                        {step.week === "Ongoing" ? (
                          <>
                            <Zap className="h-3 w-3" />
                            <span>Ongoing Support</span>
                          </>
                        ) : (
                          <span>{step.week}</span>
                        )}
                      </div>
                      <div className="bg-primary/10 border-l-2 border-primary px-3 py-2 rounded-sm">
                        <p className="text-xs text-muted-foreground leading-relaxed">{step.task}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Dashboard Sidebar - Right Side */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <Database className="h-4 w-4 text-primary" />
                    Migration Made Simple
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Our team handles the complex work of migrating your existing content library, preserving all metadata and rights information while adding Creation Rights protection.
                  </p>
                </div>
                
                <div className="border-t border-border pt-6">
                  <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-primary" />
                    Training & Onboarding
                  </h3>
                  <ul className="space-y-2">
                    <li className="flex items-start space-x-2">
                      <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">Comprehensive team training programs</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">Custom workflow documentation</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">Ongoing education on new features</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1 h-1 rounded-full bg-primary mt-1.5 flex-shrink-0" />
                      <span className="text-xs text-muted-foreground">Best practices consulting</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </PageSection>

      {/* ROI Results */}
      <PageSection>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-left">ROI That Speaks for Itself</h2>
          <h3 className="text-xl text-muted-foreground mb-12">Typical Results Within 90 Days:</h3>
          
          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {roiMetrics.map((metric, index) => {
              const Icon = metric.icon;
              // Large card for first metric
              if (index === 0) {
                return (
                  <div key={index} className="bg-muted/50 p-6 flex flex-col justify-between lg:min-h-[320px] lg:col-span-2">
                    <div>
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div className="space-y-3 mt-6">
                      <div className="text-3xl font-semibold">{metric.metric}</div>
                      <p className="text-muted-foreground text-sm">{metric.description}</p>
                    </div>
                  </div>
                );
              }
              // Regular cards for 2nd and 3rd metrics
              if (index === 1 || index === 2) {
                return (
                  <div key={index} className="bg-muted/50 p-6 flex flex-col justify-between lg:min-h-[320px]">
                    <div>
                      <Icon className="h-6 w-6 text-foreground" />
                    </div>
                    <div className="space-y-3 mt-6">
                      <div className="text-2xl font-semibold">{metric.metric}</div>
                      <p className="text-muted-foreground text-xs">{metric.description}</p>
                    </div>
                  </div>
                );
              }
              // Wide cards for remaining metrics
              return (
                <div key={index} className="bg-muted/50 p-6 flex flex-col justify-between lg:min-h-[200px] lg:col-span-2">
                  <div>
                    <Icon className="h-6 w-6 text-foreground" />
                  </div>
                  <div className="space-y-3 mt-6">
                    <div className="text-2xl font-semibold">{metric.metric}</div>
                    <p className="text-muted-foreground text-xs">{metric.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </PageSection>

      {/* Case Studies */}
      <PageSection className="bg-muted/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-center">Case Studies</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-background border border-border p-8">
                <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                <blockquote className="text-muted-foreground mb-6 italic">
                  &ldquo;{study.quote}&rdquo;
                </blockquote>
                <div>
                  <h4 className="font-semibold mb-4">Results:</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="h-4 w-4 mt-1 text-primary flex-shrink-0" />
                        <span className="text-muted-foreground text-sm">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* Strategic Consultation CTA */}
      <PageSection>
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6">Ready to Scale Your Rights Management?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Book a strategic consultation where we'll analyze your content portfolio and show you:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12 text-left">
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Revenue optimization opportunities specific to your industry</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Custom integration possibilities with your existing systems</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">ROI projections based on your content library size</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Implementation timeline and resource requirements</span>
            </div>
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
              <span className="text-sm">Live demonstration with your actual content</span>
            </div>
          </div>
          <p className="text-muted-foreground mb-8">Enterprise-grade solutions. Creator-friendly results.</p>
          <Button variant="shimmer" size="lg" asChild>
            <Link href="/demo">Schedule Strategic Consultation</Link>
          </Button>
        </div>
      </PageSection>

      {/* Integration Partners */}
      <PageSection>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-4 text-left">Integration Partners</h2>
          <p className="text-xl text-muted-foreground mb-12">Seamlessly connects with:</p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {integrationPartners.map((partner, index) => (
              <div key={index} className="bg-muted/50 p-6 flex flex-col items-center justify-center gap-3 min-h-[140px]">
                <Image 
                  src="/creation-rights logo icon white.svg" 
                  alt="Logo" 
                  width={48} 
                  height={48}
                  className="opacity-50"
                />
                <p className="text-muted-foreground text-xs text-center font-medium">{partner}</p>
              </div>
            ))}
          </div>
        </div>
      </PageSection>

      {/* FAQ */}
      <PageSection>
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-semibold mb-12 text-left">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible defaultValue="item-0" className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-base font-normal text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-muted-foreground">{item.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </PageSection>
    </PageLayout>
  );
}
