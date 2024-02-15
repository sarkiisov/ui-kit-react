import { ThemeComponents } from "@/theme";
import { VariantProps } from "cva";
import { InputHTMLAttributes } from "react";

export interface SwitchProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<ThemeComponents["Switch"]["base"]>,
    VariantProps<ThemeComponents["Switch"]["control"]> {}
