import { HeroSection, HeroContainer, HeroContent } from "@/components/ui/hero-section";
import InteractiveGrid from "@/components/ui/interactive-grid";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Shield, Users, Zap } from "lucide-react";

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
                  <h1 className="text-5xl font-bold leading-tight uppercase md:text-7xl lg:text-8xl">
                    Your&nbsp;Art. Your&nbsp;Rights. Your&nbsp;Revenue.
                  </h1>
          </HeroContent>
        </HeroContainer>
      </HeroSection>

      {/* Features Section */}
      <section className="px-6 py-24 sm:px-16 lg:px-24">
        <div className="w-full">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 md:text-4xl">
              Why Choose Creation Rights?
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              We provide comprehensive protection and empowerment tools for digital creators worldwide.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-sm transition-all hover:bg-muted/50">
              <Shield className="mb-6 h-12 w-12" />
              <h3 className="mb-4 text-xl font-semibold">Legal Protection</h3>
              <p className="">
                Comprehensive legal frameworks to protect your intellectual property and creative works.
              </p>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-sm transition-all hover:bg-muted/50">
              <Users className="mb-6 h-12 w-12" />
              <h3 className="mb-4 text-xl font-semibold">Community Support</h3>
              <p className="">
                Connect with fellow creators and access resources to grow your creative business.
              </p>
            </div>
            
            <div className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 backdrop-blur-sm transition-all hover:bg-muted/50">
              <Zap className="mb-6 h-12 w-12" />
              <h3 className="mb-4 text-xl font-semibold">Fast Solutions</h3>
              <p className="">
                Quick and efficient tools to handle copyright issues and protect your creative assets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-24 sm:px-16 lg:px-24">
        <div className="w-full text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Protect Your Creative Work?
          </h2>
          <p className="mb-10 text-lg">
            Join thousands of creators who trust Creation Rights to safeguard their digital assets.
          </p>
          
          <button className="mx-auto rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
            Start Your Journey
            <ArrowRight className="ml-2 h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}
