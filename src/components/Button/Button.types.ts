import { ThemeComponents } from "@/theme";
import { VariantProps } from "cva";
import { ButtonHTMLAttributes } from "react";

export interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<ThemeComponents["Button"]["base"]> {
  fullWidth?: boolean;
  loading?: boolean;
  loader?: React.ReactNode;
  icon?: React.ReactNode;
}
