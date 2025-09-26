"use client";

import React from "react";
import { cn } from "@/lib/utils";

export interface ShimmerButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  shimmerColor?: string;
  shimmerSize?: string;
  borderRadius?: string;
  shimmerDuration?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

const ShimmerButton = React.forwardRef<HTMLButtonElement, ShimmerButtonProps>(
  (
    {
      shimmerColor = "#ffffff",
      shimmerSize = "0.05em",
      shimmerDuration = "3s",
      borderRadius = "100px",
      background = "rgba(0, 0, 0, 1)",
      className,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        style={
          {
            "--shimmer-color": shimmerColor,
            "--shimmer-size": shimmerSize,
            "--shimmer-duration": shimmerDuration,
            "--border-radius": borderRadius,
            "--background": background,
          } as React.CSSProperties
        }
        className={cn(
          "group relative z-0 flex cursor-pointer items-center justify-center overflow-hidden whitespace-nowrap border border-white/10 px-6 py-3 text-white [background:var(--background)] [border-radius:var(--border-radius)] before:absolute before:inset-0 before:rounded-[calc(var(--border-radius)-1px)] before:border before:border-white/20 before:bg-gradient-to-b before:from-white/10 before:to-transparent before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
          className,
        )}
        ref={ref}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-1">{children}</span>
        <div className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover:duration-1000 group-hover:[transform:skew(-13deg)_translateX(100%)]">
          <div className="relative h-full w-8 bg-white/20"></div>
        </div>
      </button>
    );
  },
);

ShimmerButton.displayName = "ShimmerButton";

export default ShimmerButton;
