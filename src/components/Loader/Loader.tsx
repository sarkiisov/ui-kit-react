import { cn } from "@/utils";
import { forwardRef } from "react";

interface LoaderProps {
  size?: string | number;
  className?: string;
}

export const Loader = forwardRef<SVGSVGElement, LoaderProps>(
  ({ className, size = 24, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        className={cn("text-primary-600 animate-spin", className)}
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        {...props}
      >
        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
      </svg>
    );
  }
);
