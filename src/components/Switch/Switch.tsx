import { forwardRef } from "react";
import { SwitchProps } from "./Switch.types";
import { usePropId } from "@/hooks";
import { useComponentTheme } from "@/theme";
import { cn } from "@/utils";

export const Switch = forwardRef<HTMLInputElement, SwitchProps>(
  ({ labelPosition, disabled, children, id, className, ...props }, ref) => {
    const _id = usePropId(id);

    const theme = useComponentTheme("Switch");

    const classes = cn(theme.base({ labelPosition, disabled }), className);
    const inputClasses = theme.input();
    const controlClasses = theme.control({ disabled });

    return (
      <label className={classes} htmlFor={_id}>
        <input
          type="checkbox"
          className={inputClasses}
          disabled={disabled}
          id={_id}
          {...props}
          ref={ref}
          {...props}
        />
        <div className={controlClasses}></div>
        {children}
      </label>
    );
  }
);
