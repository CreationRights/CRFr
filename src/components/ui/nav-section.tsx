import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface NavSectionProps {
  children: ReactNode;
  className?: string;
}

interface NavContainerProps {
  children: ReactNode;
  className?: string;
}

interface NavContentProps {
  children: ReactNode;
  className?: string;
}

export function NavSection({ children, className }: NavSectionProps) {
  return (
    <nav className={cn("nav-section", className)}>
      {children}
    </nav>
  );
}

export function NavContainer({ children, className }: NavContainerProps) {
  return (
    <div className={cn("nav-container", className)}>
      {children}
    </div>
  );
}

export function NavContent({ children, className }: NavContentProps) {
  return (
    <div className={cn("nav-content", className)}>
      {children}
    </div>
  );
}
