import { useState, useCallback } from "react";

export const useToggle = (initialState: boolean) => {
  const [state, setState] = useState(initialState);
  const toggle = useCallback(() => setState((state) => !state), [setState]);
  return [state, toggle] as const;
};
