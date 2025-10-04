import { HeroSection, HeroContainer, HeroContent } from "@/components/ui/hero-section";
import InteractiveGrid from "@/components/ui/interactive-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Shield, Zap, Check, X, TrendingUp, Eye, DollarSign, FileText, Briefcase, Camera, Music, Palette, Video, Bot, ChevronRight } from "lucide-react";

export default function Home() {
  // Custom images from public/grid-images folder
  const gridImages = [
    "/grid-images/hero-01.jpg",
    "/grid-images/hero-02.jpg",
    "/grid-images/hero-03.jpg",
    "/grid-images/hero-04.jpg",
    "/grid-images/hero-05.jpg",
    "/grid-images/hero-06.jpg",
    "/grid-images/hero-07.jpg",
    "/grid-images/hero-08.jpg",
    "/grid-images/hero-09.jpg",
    "/grid-images/hero-10.jpg",
    "/grid-images/hero-11.jpg",
    "/grid-images/hero-12.jpg",
    "/grid-images/hero-13.jpg",
    "/grid-images/hero-14.jpg",
    "/grid-images/hero-15.jpg",
    "/grid-images/hero-16.jpg",
    "/grid-images/hero-17.jpg",
    "/grid-images/hero-18.jpg",
    "/grid-images/hero-19.jpg",
    "/grid-images/hero-20.jpg",
  ];

  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <HeroSection className="relative overflow-hidden">
        <InteractiveGrid images={gridImages} />
        <HeroContainer className="relative h-full flex flex-col justify-between z-10">
          <div className="text-left space-y-6">
            <p className="text-2xl font-thin leading-relaxed uppercase md:text-3xl lg:text-4xl">
              Protect Your Work,<br />
              Track Your Rights,<br />
              Get Paid Automatically
            </p>
            
            <div className="space-y-4">
              <p className="text-lg leading-relaxed max-w-2xl md:text-xl normal-case">
                Stop losing money to broken royalty systems. Start earning from AI licensing, real time tracking, and automatic revenue distribution that actually works.
              </p>
              
              <div>
                <Button variant="shimmer" className="h-12 px-8 text-base font-medium" asChild>
                  <Link href="/demo">
                    Book Your Live Demo
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          <HeroContent className="text-left space-y-4">
                  <p className="text-sm leading-relaxed max-w-3xl md:text-base opacity-90">
                    Powered by patented dynamic metadata that travels with your content across the internet
                  </p>
                  <h1 className="text-5xl font-semibold leading-tight uppercase md:text-7xl lg:text-8xl">
                    Your&nbsp;Art. Your&nbsp;Rights. Your&nbsp;Revenue.
                  </h1>
          </HeroContent>
        </HeroContainer>
      </HeroSection>

      {/* Problem Statement */}
      <section className="px-6 py-24 sm:px-16 lg:px-24 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 md:text-5xl">
            The Creator Economy Is Broken. We&rsquo;re Fixing It.
          </h2>
          <p className="text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
            Every day, your creative work generates value across the internet. AI companies train on your art. Platforms profit from your content. Remixers build on your ideas.
          </p>
          <p className="text-2xl font-semibold mb-8">
            But you see none of the revenue.
          </p>
          <p className="text-lg leading-relaxed max-w-3xl mx-auto">
            Legacy royalty systems were built for a static web. Today&rsquo;s internet is dynamic, AI-driven, and remix native. Your content needs rights infrastructure that moves at internet speed.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="px-6 py-24 sm:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-6 md:text-5xl">
              What If Your Content Could Protect and Pay You Automatically?
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Imagine uploading your work once and watching as it:
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="flex items-start space-x-4 p-6 border border-border bg-card">
              <Check className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-2">Real-time Tracking</p>
                <p className="text-sm">Tracks every use across the entire internet in real-time</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 border border-border bg-card">
              <Check className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-2">Auto-Licensing</p>
                <p className="text-sm">Automatically negotiates licensing with AI companies and platforms</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 border border-border bg-card">
              <Check className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-2">Micro-Royalties</p>
                <p className="text-sm">Collects micro-royalties from remixes, derivatives, and AI-generated variations</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 border border-border bg-card">
              <Check className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-2">Instant Payments</p>
                <p className="text-sm">Distributes payments instantly to you and collaborators</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 border border-border bg-card">
              <Check className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-2">Predictive Analytics</p>
                <p className="text-sm">Provides predictive analytics on which styles are trending for AI training demand</p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-2xl font-semibold">
              This isn&rsquo;t the future. It&rsquo;s available today.
            </p>
          </div>
        </div>
      </section>

      {/* Before vs After */}
      <section className="px-6 py-24 sm:px-16 lg:px-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-6 md:text-5xl">
              Take Your Power Back
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Broken System */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-8">Instead of this broken system:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 border border-border bg-card">
                  <X className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-sm">Waiting months for unclear royalty statements</p>
                </div>
                <div className="flex items-start space-x-4 p-4 border border-border bg-card">
                  <X className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-sm">Platforms deciding what your work is worth</p>
                </div>
                <div className="flex items-start space-x-4 p-4 border border-border bg-card">
                  <X className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-sm">Losing track of where your content goes</p>
                </div>
                <div className="flex items-start space-x-4 p-4 border border-border bg-card">
                  <X className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-sm">Revenue disappearing into complex intermediary chains</p>
                </div>
                <div className="flex items-start space-x-4 p-4 border border-border bg-card">
                  <X className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-sm">Fighting with collaborators over opaque splits</p>
                </div>
              </div>
            </div>
            
            {/* Creator-First Experience */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold mb-8">Get this creator-first experience:</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-4 p-4 border border-border bg-card">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-sm">Real-time dashboard showing exactly where your content is used and how much you&rsquo;ve earned</p>
                </div>
                <div className="flex items-start space-x-4 p-4 border border-border bg-card">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-sm">You set your own terms and prices for every use case</p>
                </div>
                <div className="flex items-start space-x-4 p-4 border border-border bg-card">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-sm">Complete visibility and control everywhere your work appears</p>
                </div>
                <div className="flex items-start space-x-4 p-4 border border-border bg-card">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-sm">Direct payments without intermediaries taking cuts</p>
                </div>
                <div className="flex items-start space-x-4 p-4 border border-border bg-card">
                  <Check className="h-5 w-5 mt-1 flex-shrink-0" />
                  <p className="text-sm">Transparent audit trail that collaborators can verify independently</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Era Features */}
      <section className="px-6 py-24 sm:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-6 md:text-5xl">
              Built for the AI Era
            </h2>
            <p className="text-xl leading-relaxed mb-8 max-w-4xl mx-auto">
              While competitors struggle with outdated systems, Creation Rights runs on AI-first architecture with dynamic metadata that evolves with your content.
            </p>
            <p className="text-lg leading-relaxed mb-12 max-w-4xl mx-auto">
              Our advanced database processes royalties at internet speed - delivering real-time insights and instant payments when your content goes viral or gets picked up by AI training systems.
            </p>
            <p className="text-xl font-semibold mb-12">
              When dynamic metadata meets enterprise-grade performance, you get capabilities that were literally impossible before:
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex items-start space-x-4 p-8 border border-border bg-card ">
              <Zap className="h-8 w-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Lightning-fast processing</h3>
                <p className="text-sm">that makes legacy systems look prehistoric</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-8 border border-border bg-card ">
              <Eye className="h-8 w-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Real-time tracking</h3>
                <p className="text-sm">of every remix and derivative across all platforms</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-8 border border-border bg-card ">
              <Bot className="h-8 w-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">AI-readable licensing</h3>
                <p className="text-sm">that enables automatic discovery and negotiation</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-8 border border-border bg-card ">
              <DollarSign className="h-8 w-8 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold text-lg mb-2">Instant revenue distribution</h3>
                <p className="text-sm">based on your preset collaboration rules</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="px-6 py-24 sm:px-16 lg:px-24 bg-muted/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 md:text-5xl">
            Trusted by the Industry
          </h2>
          <div className="space-y-6 text-lg">
            <p>Partners include major AI companies and creative agencies</p>
            <p>Backed by Lloyd&rsquo;s Lab for innovative insurance products and integrated with enterprise financial systems including JP Morgan infrastructure.</p>
            <p>Our Dynamic Metadata Patent and PCI compliance ensure your valuable IP is protected with bank-level security.</p>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section className="px-6 py-24 sm:px-16 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-6 md:text-5xl">
              See It Work With Your Own Content
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Don&rsquo;t take our word for it. Book a 30-minute demo where we&rsquo;ll:
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            <div className="flex items-start space-x-4 p-6 border border-border bg-card ">
              <FileText className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Upload Your File</p>
                <p className="text-sm">Upload one of your actual files live during the call</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 border border-border bg-card ">
              <Zap className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Real-time Generation</p>
                <p className="text-sm">Show you real-time metadata generation and licensing embedding</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 border border-border bg-card ">
              <TrendingUp className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Dashboard Walkthrough</p>
                <p className="text-sm">Walk through the dashboard where you&rsquo;d monitor usage and earnings</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 border border-border bg-card ">
              <DollarSign className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Complete Licensing</p>
                <p className="text-sm">Demonstrate a complete licensing scenario from AI company inquiry to payment</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4 p-6 border border-border bg-card ">
              <Shield className="h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <p className="font-semibold mb-1">Transparent Proof</p>
                <p className="text-sm">Prove every transaction with transparent audit trails</p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <p className="text-lg mb-8">No sales pressure. Just live proof of your content&rsquo;s earning potential.</p>
          </div>
        </div>
      </section>

      {/* Creator Types */}
      <section className="px-6 py-24 sm:px-16 lg:px-24 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-semibold mb-6 md:text-5xl">
              Any Creative Ready to Take Control
            </h2>
            <p className="text-xl mb-12 max-w-3xl mx-auto">
              Whether you&rsquo;re a:
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="p-8 border border-border bg-card ">
              <Palette className="h-12 w-12 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Digital Artist</h3>
              <p className="text-sm">whose style is perfect for AI training</p>
            </div>
            
            <div className="p-8 border border-border bg-card ">
              <Music className="h-12 w-12 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Music Producer</h3>
              <p className="text-sm">creating beats that get heavily remixed</p>
            </div>
            
            <div className="p-8 border border-border bg-card ">
              <Camera className="h-12 w-12 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Photographer</h3>
              <p className="text-sm">with distinctive visual signatures</p>
            </div>
            
            <div className="p-8 border border-border bg-card ">
              <Video className="h-12 w-12 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Content Creator</h3>
              <p className="text-sm">spawning viral derivatives</p>
            </div>
            
            <div className="p-8 border border-border bg-card ">
              <Briefcase className="h-12 w-12 mb-4" />
              <h3 className="font-semibold text-lg mb-2">Creative Agency</h3>
              <p className="text-sm">managing multiple client assets</p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <p className="text-lg max-w-4xl mx-auto">
              Creation Rights works with the tools you already use. Just connect your Google Drive, Dropbox, or creative software - we add the protection and monetization layer without changing how you create.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-24 sm:px-16 lg:px-24">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-8 md:text-5xl">
            The Creator-First Internet Starts Here
          </h2>
          <div className="space-y-6 text-lg mb-12">
            <p>We&rsquo;re building the rights infrastructure the internet should have had from the beginning. Where every creator becomes the CEO of their own content empire. Where copyright is native to the web, not bolted on as an afterthought.</p>
            <p className="text-xl font-semibold">Your work has value. It&rsquo;s time you captured it.</p>
          </div>
          
          <Button variant="shimmer" size="lg" className="h-14 px-12 text-lg font-medium" asChild>
            <Link href="/demo">
              Book Your Live Demo
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
          
          <p className="text-sm mt-4 opacity-75">30 minutes to see your revenue potential</p>
        </div>
      </section>
    </div>
  );
}
