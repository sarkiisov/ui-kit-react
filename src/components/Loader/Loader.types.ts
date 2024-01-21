import { ThemeComponents } from "@/theme";
import { VariantProps } from "cva";
import { ComponentPropsWithRef } from "react";

export interface LoaderProps
  extends ComponentPropsWithRef<"svg">,
    VariantProps<ThemeComponents["Loader"]["base"]> {}
