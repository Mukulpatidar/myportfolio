import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default:
          "border-transparent bg-emerald-500/15 text-emerald-300 border-emerald-500/30",
        secondary:
          "border-white/10 bg-white/5 text-neutral-300 hover:bg-white/10",
        destructive:
          "border-transparent bg-red-500/20 text-red-300",
        outline: "text-neutral-300 border-neutral-700",
        glow: "border-emerald-500/40 bg-emerald-950/60 text-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.25)]",
        tech: "border-cyan-500/30 bg-cyan-950/40 text-cyan-300 font-mono text-[11px]",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };

