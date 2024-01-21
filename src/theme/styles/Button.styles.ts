import { cva } from "cva";

const base = cva({
  base: [
    "inline-flex justify-center items-center",
    "rounded-md font-semibold transition-colors select-none",
    "disabled:opacity-50 disabled:pointer-events-none",
  ],
  variants: {
    variant: {
      primary: "bg-primary-500 text-white hover:bg-primary-600",
      light: "bg-primary-100/50 text-primary-600 hover:bg-primary-200/50",
      subtle: "text-primary-500 hover:text-primary-600 hover:bg-primary-100/50",
      warning: "bg-warning-500 text-white hover:bg-warning-600",
      danger: "bg-danger-500 text-white hover:bg-danger-600",
    },
    size: {
      xs: "h-7 min-w-6 text-xs px-2 gap-1",
      sm: "h-8 min-w-8 text-sm px-3 gap-1",
      md: "h-10 min-w-10 text-base px-4 gap-1",
      lg: "h-12 min-w-12 text-lg px-6 gap-2",
    },
    fullWidth: {
      true: "block w-full",
      false: "",
    },
  },
});

const loader = cva({
  base: "text-current animate-spin",
  variants: {
    size: {
      xs: "w-3 h-3",
      sm: "w-5 h-5",
      md: "w-6 h-6",
      lg: "w-8 h-8",
    },
  },
});

export const buttonStyles = {
  base,
  loader,
};
