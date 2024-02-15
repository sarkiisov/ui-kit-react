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

const input = cva({
  base: "sr-only peer",
});

const control = cva({
  base: [
    "relative box-content",
    "w-11 h-6",
    "peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-primary-500",
    "bg-neutral-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-5",
    "peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-neutal-200 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-primary-500",
  ],
  variants: {
    disabled: {
      true: "peer-checked:bg-neutral-200 after:bg-neutral-50",
      false: "peer-checked:bg-primary-500",
    },
  },
});

export const switchVariants = {
  base,
  input,
  control,
};
