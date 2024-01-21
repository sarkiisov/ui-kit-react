import {
  FloatingPortal,
  FloatingArrow,
  useMergeRefs,
} from "@floating-ui/react";
import { cloneElement, forwardRef, isValidElement } from "react";
import { useComponentTheme } from "@/theme";
import { cn } from "@/utils";
import { useTooltip } from "./use-tooltip.hook";
import { TooltipProps } from "./Tooltip.types";

export const Tooltip = forwardRef<HTMLDivElement, TooltipProps>(
  (
    {
      label,
      children,
      initaillyOpenend,
      disabled,
      withArrow,
      offset = 4,
      placement = "top",
      withinPortal,
      className,
      arrowClassName,
    },
    ref
  ) => {
    if (!isValidElement(children)) {
      throw new Error("Tooltip invalid children prop");
    }

    const theme = useComponentTheme("Tooltip");

    const classes = cn(theme.base(), className);
    const arrowClasses = cn(theme.arrow(), arrowClassName);

    const {
      arrowRef,
      open,
      refs,
      floatingStyles,
      context,
      getReferenceProps,
      getFloatingProps,
    } = useTooltip({
      initaillyOpenend,
      disabled,
      offset,
      placement,
    });

    const tooltipRef = useMergeRefs([refs.setFloating, ref]);

    const tooltipElement = (
      <div
        ref={tooltipRef}
        className={classes}
        style={floatingStyles}
        {...getFloatingProps()}
      >
        {withArrow && (
          <FloatingArrow
            ref={arrowRef}
            context={context}
            className={arrowClasses}
          />
        )}
        {label}
      </div>
    );

    const triggerElement = cloneElement(children, {
      ref: refs.setReference,
      ...getReferenceProps(),
      ...children.props,
    });

    return (
      <>
        {open &&
          (withinPortal ? (
            <FloatingPortal>{tooltipElement}</FloatingPortal>
          ) : (
            tooltipElement
          ))}
        {triggerElement}
      </>
    );
  }
);
