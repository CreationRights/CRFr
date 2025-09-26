import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: ReactNode;
  className?: string;
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export function PageLayout({ children, className }: PageLayoutProps) {
  return (
    <div className={cn("min-h-screen w-full", className)}>
      {children}
    </div>
  );
}

export function PageHeader({ title, subtitle, className }: PageHeaderProps) {
  return (
    <section className={cn("px-6 py-24 sm:px-16 lg:px-24", className)}>
      <div className="w-full text-center">
        <h1 className="mb-6 text-4xl font-bold md:text-6xl">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}

interface PageSectionProps {
  children: ReactNode;
  className?: string;
}

export function PageSection({ children, className }: PageSectionProps) {
  return (
    <section className={cn("px-6 py-16 sm:px-16 lg:px-24", className)}>
      <div className="w-full">
        {children}
      </div>
    </section>
  );
}
