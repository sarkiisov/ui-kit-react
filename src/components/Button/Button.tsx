import { forwardRef } from "react";
import { Loader } from "@/components";
import { cn } from "@/utils";
import { useComponentTheme } from "@/theme";
import { ButtonProps } from "./Button.types";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      disabled,
      fullWidth,
      loading,
      loader,
      icon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const theme = useComponentTheme("Button");

    const classes = cn(theme.base({ variant, size, fullWidth }), className);
    const loaderClasses = cn(theme.loader({ size }));

    const loaderComponent = loader ?? <Loader className={loaderClasses} />;

    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        className={classes}
        {...props}
      >
        {loading ? loaderComponent : icon}
        {children}
      </button>
    );
  }
);
