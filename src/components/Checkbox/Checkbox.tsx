import { forwardRef, useEffect, useRef } from "react";
import { CheckboxProps } from "./Checkbox.types";
import { useComponentTheme } from "@/theme";
import { cn } from "@/utils";
import { useMergeRefs } from "@floating-ui/react";
import { usePropId } from "@/hooks";

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  (
    {
      disabled = false,
      labelPosition = "right",
      indeterminate,
      children,
      className,
      id,
      ...props
    },
    ref
  ) => {
    const theme = useComponentTheme("Checkbox");

    const classes = cn(theme.base({ labelPosition, disabled }), className);
    const controlClasses = theme.control({ disabled });

    const _id = usePropId(id);
    const inputRef = useRef<HTMLInputElement>();
    const mergedRef = useMergeRefs([inputRef, ref]);

    useEffect(() => {
      if (!inputRef.current) return;

      inputRef.current.indeterminate = !!indeterminate;
    }, [inputRef, indeterminate]);

    return (
      <label htmlFor={_id} className={classes}>
        <input
          type="checkbox"
          disabled={disabled}
          aria-disabled={disabled}
          id={_id}
          ref={mergedRef}
          className={controlClasses}
          {...props}
        />
        {children}
      </label>
    );
  }
);
