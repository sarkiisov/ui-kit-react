import { cva } from "cva";

const base = cva({
  base: "text-sm text-white bg-neutral-800 px-2 py-1 rounded",
});

const arrow = cva({
  base: "fill-neutral-800",
});

export const tooltipStyles = {
  base,
  arrow,
};
