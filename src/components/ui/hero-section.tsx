import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface HeroSectionProps {
  children: ReactNode;
  className?: string;
}

interface HeroContainerProps {
  children: ReactNode;
  className?: string;
}

interface HeroContentProps {
  children: ReactNode;
  className?: string;
}

export function HeroSection({ children, className }: HeroSectionProps) {
  return (
    <section className={cn("hero-section", className)}>
      {children}
    </section>
  );
}

export function HeroContainer({ children, className }: HeroContainerProps) {
  return (
    <div className={cn("hero-container", className)}>
      {children}
    </div>
  );
}

export function HeroContent({ children, className }: HeroContentProps) {
  return (
    <div className={cn("hero-content", className)}>
      {children}
    </div>
  );
}
