import BlurIn from "@/components/magicui/blur-in";
import TypingAnimation from "@/components/magicui/typing-animation";
import { ArrowRight, Shield, Users, Zap, Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 py-24 sm:px-16 lg:px-24">
        <div className="relative w-full">
          <div className="text-center">
            <div className="mb-8 flex items-center justify-center gap-2">
              <Rocket className="h-5 w-5" />
              <span className="text-sm font-medium">Empowering Digital Creators</span>
            </div>
            
            <BlurIn
              word="Creation Rights"
              className="mb-8"
            />
            
            <TypingAnimation
              text="Protecting your creative work in the digital age"
              className="mb-12 text-xl md:text-2xl"
              duration={100}
            />
            
            <div className="flex flex-col items-center justify-center gap-6 sm:flex-row">
              <button className="group relative rounded-full border border-border px-8 py-3 transition-all hover:bg-muted">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </button>
              
              <button className="rounded-full border px-8 py-3 transition-all">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

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
