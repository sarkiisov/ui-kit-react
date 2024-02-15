import { ThemeComponents } from "@/theme";
import { VariantProps } from "cva";
import { InputHTMLAttributes } from "react";

export interface CheckboxProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<ThemeComponents["Checkbox"]["base"]>,
    VariantProps<ThemeComponents["Checkbox"]["control"]> {
  indeterminate?: boolean;
}
