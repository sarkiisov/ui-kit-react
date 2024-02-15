import { useId } from "react";

export const usePropId = (propId?: string): string => {
  const id = useId();

  return propId || id;
};
