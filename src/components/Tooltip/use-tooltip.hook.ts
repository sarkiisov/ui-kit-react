import { useRef, useState } from "react";
import { TooltipProps } from "./Tooltip.types";
import {
  arrow,
  autoUpdate,
  flip,
  offset as offsetMiddleware,
  shift,
  useFloating,
  useHover,
  safePolygon,
  useFocus,
  useDismiss,
  useRole,
  useInteractions,
} from "@floating-ui/react";

export const useTooltip = ({
  initaillyOpenend,
  disabled,
  offset,
  placement,
}: Partial<TooltipProps>) => {
  const arrowRef = useRef(null);

  const [open, setOpen] = useState(initaillyOpenend);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
    placement,
    middleware: [
      offsetMiddleware(offset),
      flip(),
      shift(),
      arrow({ element: arrowRef }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, {
    enabled: !disabled,
    handleClose: safePolygon(),
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);
  const role = useRole(context, { role: "tooltip" });

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
    role,
  ]);

  return {
    arrowRef,
    open,
    refs,
    floatingStyles,
    context,
    getReferenceProps,
    getFloatingProps,
  };
};
