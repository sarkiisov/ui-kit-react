import { Placement } from "@floating-ui/react";
import { ComponentPropsWithRef } from "react";

export interface TooltipProps extends ComponentPropsWithRef<"div"> {
  label: React.ReactNode;
  children: React.ReactNode;
  initaillyOpenend?: boolean;
  disabled?: boolean;
  withArrow?: boolean;
  offset?: number;
  placement?: Placement;
  withinPortal?: boolean;
  arrowClassName?: string;
  arrowHeight?: number;
  arrowWidth?: number;
}
