import { ButtonHTMLAttributes, forwardRef } from "react";
import { VariantProps, cva } from "cva";
import { Loader } from "@/components";
import { cn } from "@/utils";

const buttonVariants = cva({
  base: "inline-flex justify-center items-center gap-1 rounded-md font-semibold transition-colors select-none  focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus:ring-primary-300 disabled:opacity-50 disabled:pointer-events-none",
  variants: {
    variant: {
      solid:
        "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800",
      outline:
        "text-primary-700 border border-current hover:bg-primary-100 active:bg-primary-200",
      ghost: "text-primary-700 hover:bg-primary-100 active:bg-primary-200",
    },
    size: {
      xs: "h-7 min-w-6 text-xs px-2",
      sm: "h-8 min-w-8 text-sm px-3",
      md: "h-10 min-w-10 text-base px-4",
      lg: "h-12 min-w-12 text-lg px-6",
    },
  },
  defaultVariants: {
    variant: "solid",
    size: "md",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  loading?: boolean;
  loader?: React.ReactNode;
  icon?: React.ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      size,
      disabled,
      loading,
      loader,
      icon,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        disabled={disabled || loading}
        aria-disabled={disabled || loading}
        className={cn(buttonVariants({ variant, size }), className)}
        {...props}
      >
        {loading
          ? loader ?? <Loader size="1.2em" className="text-current" />
          : icon}
        {children}
      </button>
    );
  }
);
