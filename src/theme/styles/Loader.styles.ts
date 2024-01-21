import { cva } from "cva";

const base = cva({
  base: "text-primary-500 animate-spin",
  variants: {
    size: {
      xs: ["w-3", "h-3"],
      sm: ["w-5", "h-5"],
      md: ["w-6", "h-6"],
      lg: ["w-8", "h-8"],
      xl: ["w-9", "h-9"],
    },
  },
});

export const loaderStyles = {
  base,
};
