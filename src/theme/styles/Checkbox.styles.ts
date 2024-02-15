import { cva } from "cva";

const base = cva({
  base: "inline-flex items-center text-sm gap-2",
  variants: {
    labelPosition: {
      left: "flex-row-reverse",
      right: "flex-row",
    },
    disabled: {
      true: "text-muted",
      false: "",
    },
  },
});

const control = cva({
  base: [
    "w-5 h-5",
    "border-neutral-300 rounded transition-colors",
    "focus:ring-0 focus:ring-offset-0",
    "focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500",
  ],
  variants: {
    disabled: {
      true: "bg-neutral-100 text-neutral-300",
      false: "bg-transparent text-primary-500",
    },
  },
});

export const checkboxStyles = {
  base,
  control,
};
