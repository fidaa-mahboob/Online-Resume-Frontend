import { cn } from "@/lib/utils";
import React from "react";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {}

export function Section({ className, ...props }: BadgeProps) {
  return (
    <section
      className={cn("flex min-h-0 xl:min-h-full flex-col gap-y-2.5 pb-3.5 py-4 bg-blue-400", className)}
      {...props}
    />
  );
}
