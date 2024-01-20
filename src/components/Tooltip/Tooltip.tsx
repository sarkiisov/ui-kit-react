import {
  FloatingPortal,
  autoUpdate,
  flip,
  offset as offsetMiddleware,
  shift,
  arrow,
  useFloating,
  useHover,
  useFocus,
  useDismiss,
  useInteractions,
  useRole,
  FloatingArrow,
  safePolygon,
} from "@floating-ui/react";
import { cloneElement, isValidElement, useRef, useState } from "react";
import { cn } from "@/utils";

interface TooltipProps {
  label: React.ReactNode;
  children: React.ReactNode;
  disabled?: boolean;
  withArrow?: boolean;
  offset?: number;
  interactive?: boolean;
  className?: string;
}

export const Tooltip = ({
  label,
  children,
  disabled,
  withArrow,
  offset = 8,
  interactive,
  className,
}: TooltipProps) => {
  if (!isValidElement(children)) {
    throw new Error("Tooltip invalid children prop");
  }

  const [open, setOpen] = useState(false);

  const arrowRef = useRef(null);

  const { refs, floatingStyles, context } = useFloating({
    open,
    onOpenChange: setOpen,
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
    handleClose: interactive ? safePolygon() : null,
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

  return (
    <>
      {open && (
        <FloatingPortal>
          <div
            ref={refs.setFloating}
            className={cn(
              "text-sm text-white bg-neutral-800 fill-neutral-800 px-2 py-1 rounded",
              className
            )}
            style={floatingStyles}
            {...getFloatingProps()}
          >
            {withArrow && (
              <FloatingArrow
                ref={arrowRef}
                context={context}
                className="fill-inherit"
              />
            )}
            {label}
          </div>
        </FloatingPortal>
      )}
      {cloneElement(children, {
        ref: refs.setReference,
        ...getReferenceProps(),
        ...children.props,
      })}
    </>
  );
};
