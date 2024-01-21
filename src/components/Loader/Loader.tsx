import { cn } from "@/utils";
import { forwardRef } from "react";
import { LoaderProps } from "./Loader.types";
import { useComponentTheme } from "@/theme";

export const Loader = forwardRef<SVGSVGElement, LoaderProps>(
  ({ size = "md", className, ...props }, ref) => {
    const theme = useComponentTheme("Loader");

    const classes = cn(theme.base({ size }), className);

    return (
      <svg
        ref={ref}
        className={classes}
        xmlns="http://www.w3.org/2000/svg"
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
